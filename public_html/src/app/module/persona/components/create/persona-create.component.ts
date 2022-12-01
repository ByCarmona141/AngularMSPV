import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { PersonaDataForm } from "../../interface/persona-data-form";
import { PersonaService } from '../../service/persona.service';
import { DatosFiscalesService } from '../../../datos-fiscales/service/datos-fiscales.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styles: []
})

export class PersonaCreateComponent extends PersonaDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: PersonaService,
              private datosFiscalesService: DatosFiscalesService) {
    super(datosFiscalesService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      NombreORazonSocial: [null, [Validators.minLength(1), Validators.maxLength(256), Validators.required]],
      Telefono: [null, [Validators.minLength(1), Validators.maxLength(32), Validators.required]],
      CorreoElectronico: [null, [Validators.minLength(1), Validators.maxLength(64), Validators.required]],
      TipoDePersona: [null, [Validators.required]],
      DatosFiscales: [null, []]
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
    this.router.navigate(['/Persona']).then();
  }
}
