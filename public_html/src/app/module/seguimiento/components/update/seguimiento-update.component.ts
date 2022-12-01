import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { SeguimientoService } from '../../service/seguimiento.service';
import { ProspectacionService } from '../../../prospectacion/service/prospectacion.service';
import { Seguimiento } from '../../interface/seguimiento';
import { SeguimientoDataForm } from "../../interface/seguimiento-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {StatusProspectacionService} from "../../../status-prospectacion/service/status-prospectacion.service";

@Component({
  selector: 'app-seguimiento-update',
  templateUrl: './seguimiento-update.component.html',
  styles: []
})

export class SeguimientoUpdateComponent extends SeguimientoDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: Seguimiento;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: SeguimientoService,
              private statusProspectacionServic: StatusProspectacionService) {

    super(statusProspectacionServic);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      FechaYHora: [null, [Validators.required]],
          Descripcion: [null, [Validators.minLength(1), Validators.maxLength(65535), Validators.required]],
          Conclusiones: [null, [Validators.minLength(1), Validators.maxLength(65535), Validators.required]],
          Status: [null, [Validators.required]],
          Empleado: [null, [Validators.required]],
          Medio: [null, [Validators.required]],
          Prospectacion: [null, [Validators.required]]
    });

    if (typeof this.id !== "undefined") {
      this.service.data(this.id).subscribe(data => this.initForm(data),
          () => this.return);
    } else {
      this.activatedRoute.params.subscribe(params => {
        this.id = params.id;
        this.service.data(this.id).subscribe(data => this.initForm(data),
            () => this.return);
      });
    }
  }

  initForm(data): void {
    this.data = data;

    this.form.controls.FechaYHora.setValue(this.data.FechaYHora);
    this.form.controls.Descripcion.setValue(this.data.Descripcion);
    this.form.controls.Conclusiones.setValue(this.data.Conclusiones);
    this.form.controls.Status.setValue(this.data.Status);
    this.form.controls.Empleado.setValue(this.data.Empleado);
    this.form.controls.Medio.setValue(this.data.Medio);
    this.form.controls.Prospectacion.setValue(this.data.Prospectacion);

    this.loading = false;
  }

  submit(values): void {
    this.register = true;
    if (this.form.valid) {
      this.service.update(values, this.id)
        .subscribe(() => {
          if (this.modal){
            this.activeModal.close(this.id);
          }
          this.return();
          this.register = false;
        }, error => {
          Swal.fire({
            title: 'Error',
            type: 'error',
            text: 'Ocurrió un error'
          }).then(() => {
            console.log(error);
            this.register = false;
            });
        });
    } else {
      this.form.markAllAsTouched();
      this.register = false;
    }
  }

  return(): void {
    if (this.modal){
      this.activeModal.dismiss('cancel');
      return;
    }
    this.router.navigate(['/Seguimiento']).then();
  }
}
