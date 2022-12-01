import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { DocumentoClienteDataForm } from "../../interface/documento-cliente-data-form";
import { DocumentoClienteService } from '../../service/documento-cliente.service';
import { ClientePersonaService } from '../../../cliente-persona/service/cliente-persona.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-documento-cliente-create',
  templateUrl: './documento-cliente-create.component.html',
  styles: []
})

export class DocumentoClienteCreateComponent extends DocumentoClienteDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: DocumentoClienteService,
              private clientePersonaService: ClientePersonaService) {
    super(clientePersonaService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Cliente: [null, [Validators.required]],
      Documento: [null, [Validators.minLength(1), Validators.maxLength(222), Validators.required]],
      Archivo: [null, []],
      Comentarios: [null, [Validators.minLength(1), Validators.maxLength(65535)]]
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
    this.router.navigate(['/DocumentoCliente']).then();
  }
}
