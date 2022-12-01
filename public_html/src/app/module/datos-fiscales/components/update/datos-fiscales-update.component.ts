import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { DatosFiscalesService } from '../../service/datos-fiscales.service';
import { DomicilioService } from '../../../domicilio/service/domicilio.service';
import { DatosFiscales } from '../../interface/datos-fiscales';
import { DatosFiscalesDataForm } from "../../interface/datos-fiscales-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-fiscales-update',
  templateUrl: './datos-fiscales-update.component.html',
  styles: []
})

export class DatosFiscalesUpdateComponent extends DatosFiscalesDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: DatosFiscales;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: DatosFiscalesService,
              private domicilioService: DomicilioService) {

    super(domicilioService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      NombreORazonSocial: [null, [Validators.minLength(1), Validators.maxLength(256), Validators.required]],
          RFC: [null, [Validators.minLength(1), Validators.maxLength(16), Validators.required]],
          RegimenFiscal: [null, [Validators.required]],
          Domicilio: [null, [Validators.required]],
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

    this.form.controls.NombreORazonSocial.setValue(this.data.NombreORazonSocial);
    this.form.controls.RFC.setValue(this.data.RFC);
    this.form.controls.RegimenFiscal.setValue(this.data.RegimenFiscal);
    this.form.controls.Domicilio.setValue(this.data.Domicilio);
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
    this.router.navigate(['/DatosFiscales']).then();
  }
}
