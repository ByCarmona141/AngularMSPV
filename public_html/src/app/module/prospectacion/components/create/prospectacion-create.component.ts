import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import {TipoDeServicioService} from "../../../tipo-de-servicio/service/tipo-de-servicio.service";
import { ProspectacionDataForm } from "../../interface/prospectacion-data-form";
import { ProspectacionService } from '../../service/prospectacion.service';
import { ClienteService } from '../../../cliente/service/cliente.service';
import { EmpleadoService } from '../../../empleado/service/empleado.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import {systemUserService} from "../../../system-user/service/system-user.service";
import {StatusProspectacionService} from "../../../status-prospectacion/service/status-prospectacion.service";


@Component({
  selector: 'app-prospectacion-create',
  templateUrl: './prospectacion-create.component.html',
  styles: []
})

export class ProspectacionCreateComponent extends ProspectacionDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
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
    this.router.navigate(['/Prospectacion']).then();
  }
}
