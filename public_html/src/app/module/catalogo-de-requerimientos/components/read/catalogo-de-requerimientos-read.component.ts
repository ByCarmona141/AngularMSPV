import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CatalogoDeRequerimientosService } from '../../service/catalogo-de-requerimientos.service';
import { systemPrivilegesService } from '../../../system-privileges/service/system-privileges.service';
import { TableComponent } from '../../../../components/shared/table/table.component';

@Component({
  selector: 'app-catalogo-de-requerimientos',
  templateUrl: './catalogo-de-requerimientos-read.component.html',
  styleUrls: []
})
export class CatalogoDeRequerimientosReadComponent implements OnInit {
  disabled = true;
  serveSource = 'CatalogoDeRequerimientos';
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
    'Tipo De Servicio',
    'Requerimiento',
    'Orden',
    'Requerido',
    'Catalogo'
  ];

  @ViewChild('table') table: TableComponent;

  constructor(public auth: AuthService,
              private router: Router,
              private service: CatalogoDeRequerimientosService,
              private privilegesService: systemPrivilegesService) {
    this.privilegesService.getPrivileges('CatalogoDeRequerimientos')
      .subscribe(data => {
        this.privilege = data;
      });
  }

  ngOnInit(): void {
  }

  update(id: number): void {
    this.router.navigateByUrl('/CatalogoDeRequerimientos/update/' + id);
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
