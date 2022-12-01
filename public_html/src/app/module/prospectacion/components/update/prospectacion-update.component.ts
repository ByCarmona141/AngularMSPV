import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { ProspectacionService } from '../../service/prospectacion.service';
import { ClienteService } from '../../../cliente/service/cliente.service';
import { EmpleadoService } from '../../../empleado/service/empleado.service';
import { Prospectacion } from '../../interface/prospectacion';
import { ProspectacionDataForm } from "../../interface/prospectacion-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {TipoDeServicioService} from "../../../tipo-de-servicio/service/tipo-de-servicio.service";
import {systemUserService} from "../../../system-user/service/system-user.service";
import {StatusProspectacionService} from "../../../status-prospectacion/service/status-prospectacion.service";

@Component({
  selector: 'app-prospectacion-update',
  templateUrl: './prospectacion-update.component.html',
  styles: []
})

export class ProspectacionUpdateComponent extends ProspectacionDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: Prospectacion;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: ProspectacionService,
              private clienteService: ClienteService,
              private tipoDeServicioService: TipoDeServicioService,
              private empleadoService: EmpleadoService,
              private usuarioService: systemUserService,
              private statusService: StatusProspectacionService) {

    super(clienteService,
        tipoDeServicioService,
        empleadoService,
        usuarioService,
        statusService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Cliente: [null, [Validators.required]],
          FechaYHora: [null, [Validators.required]],
          TipoDeServicio: [null, [Validators.required]],
          DescripcionDelServicio: [null, [Validators.minLength(1), Validators.maxLength(65535), Validators.required]],
          Usuario: [null, [Validators.required]],
          Empleado: [null, [Validators.required]],
          Status: [null, [Validators.required]],
          Canalizado: [null, [Validators.required]]
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
    this.form.controls.FechaYHora.setValue(this.data.FechaYHora);
    this.form.controls.TipoDeServicio.setValue(this.data.TipoDeServicio);
    this.form.controls.DescripcionDelServicio.setValue(this.data.DescripcionDelServicio);
    this.form.controls.Usuario.setValue(this.data.Usuario);
    this.form.controls.Empleado.setValue(this.data.Empleado);
    this.form.controls.Status.setValue(this.data.Status);
    this.form.controls.Canalizado.setValue(this.data.Canalizado);

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
    this.router.navigate(['/Prospectacion']).then();
  }
}
