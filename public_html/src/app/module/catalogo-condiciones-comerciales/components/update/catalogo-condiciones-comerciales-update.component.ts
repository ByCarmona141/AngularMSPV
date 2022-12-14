import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { CatalogoCondicionesComercialesService } from '../../service/catalogo-condiciones-comerciales.service';
import { CatalogoCondicionesComerciales } from '../../interface/catalogo-condiciones-comerciales';
import { CatalogoCondicionesComercialesDataForm } from "../../interface/catalogo-condiciones-comerciales-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo-condiciones-comerciales-update',
  templateUrl: './catalogo-condiciones-comerciales-update.component.html',
  styles: []
})

export class CatalogoCondicionesComercialesUpdateComponent extends CatalogoCondicionesComercialesDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: CatalogoCondicionesComerciales;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
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
    this.form.controls.DescripcionCondicion.setValue(this.data.DescripcionCondicion);
    this.form.controls.Requerida.setValue(this.data.Requerida);

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
            text: 'Ocurri?? un error'
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
