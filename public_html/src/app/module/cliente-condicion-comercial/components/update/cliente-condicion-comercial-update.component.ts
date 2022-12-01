import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { ClienteCondicionComercialService } from '../../service/cliente-condicion-comercial.service';
import { ClientePersonaService } from '../../../cliente-persona/service/cliente-persona.service';
import { CatalogoCondicionesComercialesService } from '../../../catalogo-condiciones-comerciales/service/catalogo-condiciones-comerciales.service';
import { ClienteCondicionComercial } from '../../interface/cliente-condicion-comercial';
import { ClienteCondicionComercialDataForm } from "../../interface/cliente-condicion-comercial-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {
  StatusCondicionComercialService
} from "../../../status-condicion-comercial/service/status-condicion-comercial.service";
import {systemUserService} from "../../../system-user/service/system-user.service";

@Component({
  selector: 'app-cliente-condicion-comercial-update',
  templateUrl: './cliente-condicion-comercial-update.component.html',
  styles: []
})

export class ClienteCondicionComercialUpdateComponent extends ClienteCondicionComercialDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: ClienteCondicionComercial;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: ClienteCondicionComercialService,
              private clientePersonaService: ClientePersonaService,
              private CatalogoCondicionesComercialesService: CatalogoCondicionesComercialesService,
              private statusCondicionComercial: StatusCondicionComercialService,
              private usuarioService: systemUserService) {

    super(clientePersonaService,
        CatalogoCondicionesComercialesService,
        statusCondicionComercial,
        usuarioService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Cliente: [null, [Validators.required]],
          CatalogoCondicionesComerciales: [null, [Validators.required]],
          Descripcion: [null, [Validators.minLength(1), Validators.maxLength(65535), Validators.required]],
          FechaAceptacion: [null, []],
          Status: [null, [Validators.required]],
          UsuarioRegistro: [null, [Validators.required]],
          FechaTupla: [null, [Validators.minLength(1), Validators.maxLength(222), Validators.required]]
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

    this.form.controls.Cliente.setValue(this.data.Cliente);
    this.form.controls.CatalogoCondicionesComerciales.setValue(this.data.CatalogoCondicionesComerciales);
    this.form.controls.Descripcion.setValue(this.data.Descripcion);
    this.form.controls.FechaAceptacion.setValue(this.data.FechaAceptacion);
    this.form.controls.Status.setValue(this.data.Status);
    this.form.controls.UsuarioRegistro.setValue(this.data.UsuarioRegistro);
    this.form.controls.FechaTupla.setValue(this.data.FechaTupla);

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
    this.router.navigate(['/ClienteCondicionComercial']).then();
  }
}
