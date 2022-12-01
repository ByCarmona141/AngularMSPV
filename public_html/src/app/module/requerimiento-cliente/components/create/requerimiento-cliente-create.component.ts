import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { RequerimientoClienteDataForm } from "../../interface/requerimiento-cliente-data-form";
import { RequerimientoClienteService } from '../../service/requerimiento-cliente.service';
import { ClientePersonaService } from '../../../cliente-persona/service/cliente-persona.service';
import { PersonaService } from '../../../persona/service/persona.service';
import { EmpleadoService } from '../../../empleado/service/empleado.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {systemUserService} from "../../../system-user/service/system-user.service";
import {
  CatalogoDeRequerimientosService
} from "../../../catalogo-de-requerimientos/service/catalogo-de-requerimientos.service";


@Component({
  selector: 'app-requerimiento-cliente-create',
  templateUrl: './requerimiento-cliente-create.component.html',
  styles: []
})

export class RequerimientoClienteCreateComponent extends RequerimientoClienteDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
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
    this.router.navigate(['/RequerimientoCliente']).then();
  }
}
