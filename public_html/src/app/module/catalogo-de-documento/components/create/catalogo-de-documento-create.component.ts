import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { CatalogoDeDocumentoDataForm } from "../../interface/catalogo-de-documento-data-form";
import { CatalogoDeDocumentoService } from '../../service/catalogo-de-documento.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-catalogo-de-documento-create',
  templateUrl: './catalogo-de-documento-create.component.html',
  styles: []
})

export class CatalogoDeDocumentoCreateComponent extends CatalogoDeDocumentoDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: CatalogoDeDocumentoService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nombre: [null, [Validators.minLength(1), Validators.maxLength(128), Validators.required]],
      Descripcion: [null, [Validators.minLength(1), Validators.maxLength(512)]],
      Activo: [null, [Validators.required]],
      Prioridad: [null, [Validators.minLength(1), Validators.maxLength(222), Validators.required]],
      Origen: [null, [Validators.minLength(1), Validators.maxLength(128), Validators.required]],
      Requerido: [null, []]
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
    this.router.navigate(['/CatalogoDeDocumento']).then();
  }
}
