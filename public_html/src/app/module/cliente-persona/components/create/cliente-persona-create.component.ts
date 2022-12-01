import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { ClientePersonaDataForm } from "../../interface/cliente-persona-data-form";
import { ClientePersonaService } from '../../service/cliente-persona.service';
import { ClienteService } from '../../../cliente/service/cliente.service';
import { PersonaService } from '../../../persona/service/persona.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente-persona-create',
  templateUrl: './cliente-persona-create.component.html',
  styles: []
})

export class ClientePersonaCreateComponent extends ClientePersonaDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: ClientePersonaService,
              private clienteService: ClienteService,
              private personaService: PersonaService) {
    super(clienteService,
              personaService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Cliente: [null, [Validators.required]],
      Persona: [null, [Validators.required]],
      Relacion: [null, [Validators.required]],
      Titulo: [null, [Validators.minLength(1), Validators.maxLength(65)]],
      Telefono: [null, [Validators.minLength(1), Validators.maxLength(16)]],
      Telefono2: [null, [Validators.minLength(1), Validators.maxLength(16)]],
      CorreoElectronico: [null, [Validators.minLength(1), Validators.maxLength(64)]]
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
    this.router.navigate(['/ClientePersona']).then();
  }
}
