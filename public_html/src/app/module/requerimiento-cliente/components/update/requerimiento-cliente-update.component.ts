import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { RequerimientoClienteService } from '../../service/requerimiento-cliente.service';
import { ClientePersonaService } from '../../../cliente-persona/service/cliente-persona.service';
import { PersonaService } from '../../../persona/service/persona.service';
import { EmpleadoService } from '../../../empleado/service/empleado.service';
import { RequerimientoCliente } from '../../interface/requerimiento-cliente';
import { RequerimientoClienteDataForm } from "../../interface/requerimiento-cliente-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {systemUserService} from "../../../system-user/service/system-user.service";
import Swal from 'sweetalert2';
import {
  CatalogoDeRequerimientosService
} from "../../../catalogo-de-requerimientos/service/catalogo-de-requerimientos.service";

@Component({
  selector: 'app-requerimiento-cliente-update',
  templateUrl: './requerimiento-cliente-update.component.html',
  styles: []
})

export class RequerimientoClienteUpdateComponent extends RequerimientoClienteDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: RequerimientoCliente;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: RequerimientoClienteService,
              private clientePersonaService: ClientePersonaService,
              private personaService: PersonaService,
              private requerimientoService: CatalogoDeRequerimientosService,
              private SystemUserService: systemUserService,
              private empleadoService: EmpleadoService) {

    super(clientePersonaService,
              personaService,
              requerimientoService,
              SystemUserService,
              empleadoService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Cliente: [null, [Validators.required]],
          Fecha: [null, [Validators.required]],
          Status: [null, []],
          Valor: [null, [Validators.minLength(1), Validators.maxLength(65535), Validators.required]],
          Solicitante: [null, [Validators.required]],
          Requerimiento: [null, [Validators.minLength(1), Validators.maxLength(222)]],
          UsuarioRegistro: [null, [Validators.required]],
          EmpleadoElaboro: [null, [Validators.required]]
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
    this.form.controls.Fecha.setValue(this.data.Fecha);
    this.form.controls.Status.setValue(this.data.Status);
    this.form.controls.Valor.setValue(this.data.Valor);
    this.form.controls.Solicitante.setValue(this.data.Solicitante);
    this.form.controls.Requerimiento.setValue(this.data.Requerimiento);
    this.form.controls.UsuarioRegistro.setValue(this.data.UsuarioRegistro);
    this.form.controls.EmpleadoElaboro.setValue(this.data.EmpleadoElaboro);

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
    this.router.navigate(['/RequerimientoCliente']).then();
  }
}
