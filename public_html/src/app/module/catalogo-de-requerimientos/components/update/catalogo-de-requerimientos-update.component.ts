import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { CatalogoDeRequerimientosService } from '../../service/catalogo-de-requerimientos.service';
import { CatalogoDeRequerimientos } from '../../interface/catalogo-de-requerimientos';
import { CatalogoDeRequerimientosDataForm } from "../../interface/catalogo-de-requerimientos-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {TipoDeServicioService} from "../../../tipo-de-servicio/service/tipo-de-servicio.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo-de-requerimientos-update',
  templateUrl: './catalogo-de-requerimientos-update.component.html',
  styles: []
})

export class CatalogoDeRequerimientosUpdateComponent extends CatalogoDeRequerimientosDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: CatalogoDeRequerimientos;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
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

    this.form.controls.TipoDeServicio.setValue(this.data.TipoDeServicio);
    this.form.controls.Requerimiento.setValue(this.data.Requerimiento);
    this.form.controls.Orden.setValue(this.data.Orden);
    this.form.controls.Requerido.setValue(this.data.Requerido);
    this.form.controls.Catalogo.setValue(this.data.Catalogo);

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
    this.router.navigate(['/CatalogoDeRequerimientos']).then();
  }
}
