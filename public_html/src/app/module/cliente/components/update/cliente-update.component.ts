import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../interface/cliente';
import { ClienteDataForm } from "../../interface/cliente-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {EmpresaService} from "../../../empresa/service/empresa.service";
import {systemUserService} from "../../../system-user/service/system-user.service";

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styles: []
})

export class ClienteUpdateComponent extends ClienteDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: Cliente;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: ClienteService,
              private empresaService: EmpresaService,
              private userService: systemUserService) {

    super(empresaService, userService);
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
    this.form.controls.NoCliente.setValue(this.data.NoCliente);
    this.form.controls.Empresa.setValue(this.data.Empresa);
    this.form.controls.FechaTupla.setValue(this.data.FechaTupla);
    this.form.controls.UsuarioRegistro.setValue(this.data.UsuarioRegistro);
    this.form.controls.Status.setValue(this.data.Status);
    this.form.controls.PaginaWeb.setValue(this.data.PaginaWeb);
    this.form.controls.LimiteDeCredito.setValue(this.data.LimiteDeCredito);

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
    this.router.navigate(['/Cliente']).then();
  }
}
