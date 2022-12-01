import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { CatalogoDeDocumentoService } from '../../service/catalogo-de-documento.service';
import { CatalogoDeDocumento } from '../../interface/catalogo-de-documento';
import { CatalogoDeDocumentoDataForm } from "../../interface/catalogo-de-documento-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo-de-documento-update',
  templateUrl: './catalogo-de-documento-update.component.html',
  styles: []
})

export class CatalogoDeDocumentoUpdateComponent extends CatalogoDeDocumentoDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: CatalogoDeDocumento;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
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

    this.form.controls.Nombre.setValue(this.data.Nombre);
    this.form.controls.Descripcion.setValue(this.data.Descripcion);
    this.form.controls.Activo.setValue(this.data.Activo);
    this.form.controls.Prioridad.setValue(this.data.Prioridad);
    this.form.controls.Origen.setValue(this.data.Origen);
    this.form.controls.Requerido.setValue(this.data.Requerido);

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
    this.router.navigate(['/CatalogoDeDocumento']).then();
  }
}
