import { DataForm } from '../../../interfaces/data-form';
import { ProspectacionService } from '../../prospectacion/service/prospectacion.service';
import { ProspectacionCreateComponent } from '../../prospectacion/components/create/prospectacion-create.component';
import {StatusProspectacionService} from "../../status-prospectacion/service/status-prospectacion.service";
import {
  TipoDeVialidadCreateComponent
} from "../../tipo-de-vialidad/components/create/tipo-de-vialidad-create.component";
import {
  StatusProspectacionCreateComponent
} from "../../status-prospectacion/components/create/status-prospectacion-create.component";
import {EmpleadoService} from "../../empleado/service/empleado.service";
import {EmpleadoCreateComponent} from "../../empleado/components/create/empleado-create.component";
import {MedioDeSeguimientoService} from "../../medio-de-seguimiento/service/medio-de-seguimiento.service";
import {
  MedioDeSeguimientoCreateComponent
} from "../../medio-de-seguimiento/components/create/medio-de-seguimiento-create.component";

export abstract class SeguimientoDataForm {

    FechaYHora: DataForm = {
    field: 'FechaYHora',
    type: 'datetime-local',
    label: 'Fecha Y Hora',
    message: 'Ingrese una fecha'
  };
  Descripcion: DataForm = {
    field: 'Descripcion',
    type: 'text',
    label: 'Descripción',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  Conclusiones: DataForm = {
    field: 'Conclusiones',
    type: 'text',
    label: 'Conclusiones',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  Status: DataForm = {
    field: 'Status',
    type: 'select',
    label: 'Status',
    message: 'Ingrese un numero'
  };
  Empleado: DataForm = {
    field: 'Empleado',
    type: 'select',
    label: 'Empleado',
    message: 'Ingrese un numero'
  };
  Medio: DataForm = {
    field: 'Medio',
    type: 'select',
    label: 'Medio',
    message: 'Ingrese un numero'
  };
  Prospectacion: DataForm = {
    field: 'Prospectacion',
    type: 'select',
    label: 'Prospectación',
    message: 'Ingrese un Prospectacion'
  };

    protected constructor(statusProspectacionService: StatusProspectacionService) {
      // Select de Status
      this.Status.items = statusProspectacionService.combo();
      this.Status.empty = true;
      this.Status.add = true;
      this.Status.component = StatusProspectacionCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
