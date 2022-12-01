import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { DocumentoClienteService } from '../../service/documento-cliente.service';
import { ClientePersonaService } from '../../../cliente-persona/service/cliente-persona.service';
import { DocumentoCliente } from '../../interface/documento-cliente';
import { DocumentoClienteDataForm } from "../../interface/documento-cliente-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documento-cliente-update',
  templateUrl: './documento-cliente-update.component.html',
  styles: []
})

export class DocumentoClienteUpdateComponent extends DocumentoClienteDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: DocumentoCliente;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
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
    this.form.controls.Documento.setValue(this.data.Documento);
    this.form.controls.Archivo.setValue(this.data.Archivo);
    this.form.controls.Comentarios.setValue(this.data.Comentarios);

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
    this.router.navigate(['/DocumentoCliente']).then();
  }
}
