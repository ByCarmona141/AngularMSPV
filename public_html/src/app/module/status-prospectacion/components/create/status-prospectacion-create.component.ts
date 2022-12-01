import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { StatusProspectacionDataForm } from "../../interface/status-prospectacion-data-form";
import { StatusProspectacionService } from '../../service/status-prospectacion.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-status-prospectacion-create',
  templateUrl: './status-prospectacion-create.component.html',
  styles: []
})

export class StatusProspectacionCreateComponent extends StatusProspectacionDataForm implements OnInit {
  form: FormGroup;
  register = false;
  loading = true;
  @Input() modal = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: StatusProspectacionService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Descipcion: [null, [Validators.minLength(1), Validators.maxLength(64), Validators.required]],
      Acotacion: [null, [Validators.minLength(1), Validators.maxLength(7), Validators.required]],
      Origen: [null, [Validators.minLength(1), Validators.maxLength(64), Validators.required]],
      Nombre: [null, [Validators.minLength(1), Validators.maxLength(64)]],
      Descripcion: [null, [Validators.minLength(1), Validators.maxLength(128)]]
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
    this.router.navigate(['/StatusProspectacion']).then();
  }
}
