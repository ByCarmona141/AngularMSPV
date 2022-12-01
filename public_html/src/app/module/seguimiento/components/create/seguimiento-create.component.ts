import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { SeguimientoDataForm } from "../../interface/seguimiento-data-form";
import { SeguimientoService } from '../../service/seguimiento.service';
import { ProspectacionService } from '../../../prospectacion/service/prospectacion.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {StatusProspectacionService} from "../../../status-prospectacion/service/status-prospectacion.service";
import {EmpleadoService} from "../../../empleado/service/empleado.service";
import {MedioDeSeguimientoService} from "../../../medio-de-seguimiento/service/medio-de-seguimiento.service";


@Component({
  selector: 'app-seguimiento-create',
  templateUrl: './seguimiento-create.component.html',
  styles: []
})

export class SeguimientoCreateComponent extends SeguimientoDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: SeguimientoService,
              private statusService: StatusProspectacionService) {
    super(statusService);
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

    this.loading = false;
  }

  submit(values): void {
    this.register = true;
    if (this.form.valid) {
      this.service.create(values)
        .subscribe(resp => {
          if (this.modal) {
            let id = resp['@id'].split('/');
            id = parseInt(id[id.length - 1]);
            this.activeModal.close(id);
            return;
          }
          this.return();
          this.register = false;
        }, error => {
          Swal.fire({
            title: 'Error',
            type: 'error',
            text: 'Ocurrió un error' + error.message
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
