import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { DatosFiscalesDataForm } from "../../interface/datos-fiscales-data-form";
import { DatosFiscalesService } from '../../service/datos-fiscales.service';
import { DomicilioService } from '../../../domicilio/service/domicilio.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-datos-fiscales-create',
  templateUrl: './datos-fiscales-create.component.html',
  styles: []
})

export class DatosFiscalesCreateComponent extends DatosFiscalesDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
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
    this.router.navigate(['/DatosFiscales']).then();
  }
}
