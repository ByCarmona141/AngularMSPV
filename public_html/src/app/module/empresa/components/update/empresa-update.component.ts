import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';
import { EmpresaDataForm } from "../../interface/empresa-data-form";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {DatosFiscalesService} from "../../../datos-fiscales/service/datos-fiscales.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa-update',
  templateUrl: './empresa-update.component.html',
  styles: []
})

export class EmpresaUpdateComponent extends EmpresaDataForm implements OnInit {
  form: FormGroup;
  loading = true;
  register = false;
  @Input() modal = false;

  @Input()
  id: number;
  data: Empresa;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private validators: ValidatorsService,
              private activeModal: NgbActiveModal,
              private service: EmpresaService,
              private datosFiscalesService: DatosFiscalesService) {

    super(datosFiscalesService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      NombreComercial: [null, [Validators.required]],
          DatosFiscales: [null, []]
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

    this.form.controls.NombreComercial.setValue(this.data.NombreComercial);
    this.form.controls.DatosFiscales.setValue(this.data.DatosFiscales);

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
    this.router.navigate(['/Empresa']).then();
  }
}
