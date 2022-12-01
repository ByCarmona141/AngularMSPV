import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DomicilioService } from '../../service/domicilio.service';
import { systemPrivilegesService } from '../../../system-privileges/service/system-privileges.service';
import { TableComponent } from '../../../../components/shared/table/table.component';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio-read.component.html',
  styleUrls: []
})
export class DomicilioReadComponent implements OnInit {
  disabled = true;
  serveSource = 'Domicilio';
  serverFunction = 'readDataTable';
  selected = [];
  privilege = {
    create: false,
    update: false,
    delete: false
  };
  params = {
  };

  fields = [
    '#',
    'Tipo De Vialidad',
    'Vialidad',
    'Tipo De Asentamiento',
    'Asentamiento',
    'Numero Exterior',
    'Numero Interior',
    'Pais',
    'Entidad Federativa',
    'Municipio',
    'Localidad',
    'C_odigo Postal',
    'Latitud',
    'Longitud',
    'Google Pin',
    'Visible',
    'Actual',
    'Fecha Tupla',
    'Origen',
    'Tupla'
  ];

  @ViewChild('table') table: TableComponent;

  constructor(public auth: AuthService,
              private router: Router,
              private service: DomicilioService,
              private privilegesService: systemPrivilegesService) {
    this.privilegesService.getPrivileges('Domicilio')
      .subscribe(data => {
        this.privilege = data;
      });
  }

  ngOnInit(): void {
  }

  update(id: number): void {
    this.router.navigateByUrl('/Domicilio/update/' + id);
  }

  delete(id: number): void {
    Swal.fire({
      title: `¿Estas seguro de eliminar el registro ${id}?`,
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true
    }).then((result) => {
      if (!result.dismiss) {
        this.service.delete(id).subscribe(resp => {
            Swal.fire('Eliminado', 'El registro se elimino correctamente!', 'error');
            this.table.refreshTable();
          },
          error => {
            Swal.fire(
              'ERROR!',
              'Hubo un error al eliminar, intente de nuevo',
              'error'
            );
          });
      }
    });
  }

  @HostListener('click', ['$event'])
  onClick(ev): void {
    let input = ev.target;
    if (input.tagName !== 'A') {
      input = input.parentNode;
    }

    const classTag = input.className;

    if (classTag.includes('edit')) {
      this.update(input.attributes.index.value);
    }

    if (classTag.includes('delete')) {
      this.delete(input.attributes.index.value);
    }
  }
}
