import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { ClientePersonaService } from '../../service/cliente-persona.service';
import { ClienteService } from '../../../cliente/service/cliente.service';
import { PersonaService } from '../../../persona/service/persona.service';
import { ClientePersona } from '../../interface/cliente-persona';
import { ClientePersonaDataForm } from "../../interface/cliente-persona-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-persona-update',
  templateUrl: './cliente-persona-update.component.html',
  styles: []
})

export class ClientePersonaUpdateComponent extends ClientePersonaDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: ClientePersona;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
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
    this.form.controls.Persona.setValue(this.data.Persona);
    this.form.controls.Relacion.setValue(this.data.Relacion);
    this.form.controls.Titulo.setValue(this.data.Titulo);
    this.form.controls.Telefono.setValue(this.data.Telefono);
    this.form.controls.Telefono2.setValue(this.data.Telefono2);
    this.form.controls.CorreoElectronico.setValue(this.data.CorreoElectronico);

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
    this.router.navigate(['/ClientePersona']).then();
  }
}
