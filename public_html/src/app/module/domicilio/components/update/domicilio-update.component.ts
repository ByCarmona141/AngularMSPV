import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { DomicilioService } from '../../service/domicilio.service';
import { Domicilio } from '../../interface/domicilio';
import { DomicilioDataForm } from "../../interface/domicilio-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {TipoDeVialidadService} from "../../../tipo-de-vialidad/service/tipo-de-vialidad.service";
import {TipoDeAsentamientoService} from "../../../tipo-de-asentamiento/service/tipo-de-asentamiento.service";

@Component({
  selector: 'app-domicilio-update',
  templateUrl: './domicilio-update.component.html',
  styles: []
})

export class DomicilioUpdateComponent extends DomicilioDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: Domicilio;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: DomicilioService,
              private tipoDeVialidadService: TipoDeVialidadService,
              private tipoDeAsentamiento: TipoDeAsentamientoService) {

    super(tipoDeVialidadService, tipoDeAsentamiento);
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

    this.form.controls.TipoDeVialidad.setValue(this.data.TipoDeVialidad);
    this.form.controls.Vialidad.setValue(this.data.Vialidad);
    this.form.controls.TipoDeAsentamiento.setValue(this.data.TipoDeAsentamiento);
    this.form.controls.Asentamiento.setValue(this.data.Asentamiento);
    this.form.controls.NumeroExterior.setValue(this.data.NumeroExterior);
    this.form.controls.NumeroInterior.setValue(this.data.NumeroInterior);
    this.form.controls.Pais.setValue(this.data.Pais);
    this.form.controls.EntidadFederativa.setValue(this.data.EntidadFederativa);
    this.form.controls.Municipio.setValue(this.data.Municipio);
    this.form.controls.Localidad.setValue(this.data.Localidad);
    this.form.controls.CodigoPostal.setValue(this.data.CodigoPostal);
    this.form.controls.Latitud.setValue(this.data.Latitud);
    this.form.controls.Longitud.setValue(this.data.Longitud);
    this.form.controls.GooglePin.setValue(this.data.GooglePin);
    this.form.controls.Visible.setValue(this.data.Visible);
    this.form.controls.Actual.setValue(this.data.Actual);
    this.form.controls.FechaTupla.setValue(this.data.FechaTupla);
    this.form.controls.Origen.setValue(this.data.Origen);
    this.form.controls.Tupla.setValue(this.data.Tupla);

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
    this.router.navigate(['/Domicilio']).then();
  }
}
