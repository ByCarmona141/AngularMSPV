import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { EmpresaDataForm } from "../../interface/empresa-data-form";
import { EmpresaService } from '../../service/empresa.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {DatosFiscalesService} from "../../../datos-fiscales/service/datos-fiscales.service";


@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styles: []
})

export class EmpresaCreateComponent extends EmpresaDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: EmpresaService,
              private datosFiscalesService: DatosFiscalesService) {
    super(datosFiscalesService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      NombreComercial: [null, [Validators.required]],
      DatosFiscales: [null, []]
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
    this.router.navigate(['/Empresa']).then();
  }
}
