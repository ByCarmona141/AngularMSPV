import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { StatusProspectacionService } from '../../service/status-prospectacion.service';
import { StatusProspectacion } from '../../interface/status-prospectacion';
import { StatusProspectacionDataForm } from "../../interface/status-prospectacion-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-status-prospectacion-update',
  templateUrl: './status-prospectacion-update.component.html',
  styles: []
})

export class StatusProspectacionUpdateComponent extends StatusProspectacionDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: StatusProspectacion;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: StatusProspectacionService) {

    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Descipcion: [null, [Validators.minLength(1), Validators.maxLength(64), Validators.required]],
          Acotacion: [null, [Validators.minLength(1), Validators.maxLength(7), Validators.required]],
          Origen: [null, [Validators.minLength(1), Validators.maxLength(64), Validators.required]],
          Nombre: [null, [Validators.minLength(1), Validators.maxLength(64)]],
          Descripcion: [null, [Validators.minLength(1), Validators.maxLength(128)]]
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

    this.form.controls.Descipcion.setValue(this.data.Descipcion);
    this.form.controls.Acotacion.setValue(this.data.Acotacion);
    this.form.controls.Origen.setValue(this.data.Origen);
    this.form.controls.Nombre.setValue(this.data.Nombre);
    this.form.controls.Descripcion.setValue(this.data.Descripcion);

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
    this.router.navigate(['/StatusProspectacion']).then();
  }
}
