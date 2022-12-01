import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { ClienteCondicionComercialDataForm } from "../../interface/cliente-condicion-comercial-data-form";
import { ClienteCondicionComercialService } from '../../service/cliente-condicion-comercial.service';
import { ClientePersonaService } from '../../../cliente-persona/service/cliente-persona.service';
import { CatalogoCondicionesComercialesService } from '../../../catalogo-condiciones-comerciales/service/catalogo-condiciones-comerciales.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {
  StatusCondicionComercialService
} from "../../../status-condicion-comercial/service/status-condicion-comercial.service";
import {systemUserService} from "../../../system-user/service/system-user.service";


@Component({
  selector: 'app-cliente-condicion-comercial-create',
  templateUrl: './cliente-condicion-comercial-create.component.html',
  styles: []
})

export class ClienteCondicionComercialCreateComponent extends ClienteCondicionComercialDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
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
    this.router.navigate(['/ClienteCondicionComercial']).then();
  }
}
