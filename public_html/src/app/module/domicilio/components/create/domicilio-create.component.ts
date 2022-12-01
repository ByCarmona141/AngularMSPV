import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { DomicilioDataForm } from "../../interface/domicilio-data-form";
import { DomicilioService } from '../../service/domicilio.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import { TipoDeVialidadService } from 'src/app/module/tipo-de-vialidad/service/tipo-de-vialidad.service';
import {TipoDeAsentamientoService} from "../../../tipo-de-asentamiento/service/tipo-de-asentamiento.service";


@Component({
  selector: 'app-domicilio-create',
  templateUrl: './domicilio-create.component.html',
  styles: []
})

export class DomicilioCreateComponent extends DomicilioDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: DomicilioService,
              private tipoDeVialidadService: TipoDeVialidadService,
              private tipoDeAsentamiento: TipoDeAsentamientoService) {
    super(tipoDeVialidadService, tipoDeAsentamiento); // Extiende del dataform
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      TipoDeVialidad: [null, []],
      Vialidad: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      TipoDeAsentamiento: [null, []],
      Asentamiento: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      NumeroExterior: [null, [Validators.minLength(1), Validators.maxLength(8)]],
      NumeroInterior: [null, [Validators.minLength(1), Validators.maxLength(8)]],
      Pais: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      EntidadFederativa: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      Municipio: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      Localidad: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      CodigoPostal: [null, [Validators.minLength(1), Validators.maxLength(8)]],
      Latitud: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      Longitud: [null, [Validators.minLength(1), Validators.maxLength(256)]],
      GooglePin: [null, [Validators.minLength(1), Validators.maxLength(65535)]],
      Visible: [null, [Validators.required]],
      Actual: [null, [Validators.required]],
      FechaTupla: [null, [Validators.required]],
      Origen: [null, [Validators.minLength(1), Validators.maxLength(128), Validators.required]],
      Tupla: [null, [Validators.minLength(1), Validators.maxLength(128), Validators.required]]
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
    this.router.navigate(['/Domicilio']).then();
  }
}
