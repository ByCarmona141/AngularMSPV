import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { CatalogoDeRequerimientosDataForm } from "../../interface/catalogo-de-requerimientos-data-form";
import { CatalogoDeRequerimientosService } from '../../service/catalogo-de-requerimientos.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {TipoDeServicioService} from "../../../tipo-de-servicio/service/tipo-de-servicio.service";


@Component({
  selector: 'app-catalogo-de-requerimientos-create',
  templateUrl: './catalogo-de-requerimientos-create.component.html',
  styles: []
})

export class CatalogoDeRequerimientosCreateComponent extends CatalogoDeRequerimientosDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: CatalogoDeRequerimientosService,
              private tipoDeServicioService: TipoDeServicioService) {
    super(tipoDeServicioService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      TipoDeServicio: [null, [Validators.required]],
      Requerimiento: [null, [Validators.minLength(1), Validators.maxLength(256), Validators.required]],
      Orden: [null, [Validators.required]],
      Requerido: [null, []],
      Catalogo: [null, [Validators.minLength(1), Validators.maxLength(65535)]]
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
    this.router.navigate(['/CatalogoDeRequerimientos']).then();
  }
}
