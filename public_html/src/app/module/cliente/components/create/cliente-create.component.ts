import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { ClienteDataForm } from "../../interface/cliente-data-form";
import { ClienteService } from '../../service/cliente.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {EmpresaService} from "../../../empresa/service/empresa.service";
import {systemUserService} from "../../../system-user/service/system-user.service";


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styles: []
})

export class ClienteCreateComponent extends ClienteDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: ClienteService,
              private empresaService: EmpresaService,
              private usuarioService: systemUserService) {
    super(empresaService, usuarioService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nombre: [null, [Validators.minLength(1), Validators.maxLength(256), Validators.required]],
      NoCliente: [null, [Validators.minLength(1), Validators.maxLength(16), Validators.required]],
      Empresa: [null, [Validators.required]],
      FechaTupla: [null, [Validators.required]],
      UsuarioRegistro: [null, [Validators.required]],
      Status: [null, [Validators.required]],
      PaginaWeb: [null, []],
      LimiteDeCredito: [null, []]
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
    this.router.navigate(['/Cliente']).then();
  }
}
