import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { CatalogoCondicionesComercialesDataForm } from "../../interface/catalogo-condiciones-comerciales-data-form";
import { CatalogoCondicionesComercialesService } from '../../service/catalogo-condiciones-comerciales.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-catalogo-condiciones-comerciales-create',
  templateUrl: './catalogo-condiciones-comerciales-create.component.html',
  styles: []
})

export class CatalogoCondicionesComercialesCreateComponent extends CatalogoCondicionesComercialesDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: CatalogoCondicionesComercialesService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nombre: [null, [Validators.minLength(1), Validators.maxLength(32), Validators.required]],
      DescripcionCondicion: [null, [Validators.minLength(1), Validators.maxLength(65535), Validators.required]],
      Requerida: [null, [Validators.required]]
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
    this.router.navigate(['/CatalogoCondicionesComerciales']).then();
  }
}
