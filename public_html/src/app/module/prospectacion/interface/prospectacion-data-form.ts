import { DataForm } from '../../../interfaces/data-form';
import { ClienteService } from '../../cliente/service/cliente.service';
import { ClienteCreateComponent } from '../../cliente/components/create/cliente-create.component';
import { EmpleadoService } from '../../empleado/service/empleado.service';
import { EmpleadoCreateComponent } from '../../empleado/components/create/empleado-create.component';
import {TipoDeServicioService} from "../../tipo-de-servicio/service/tipo-de-servicio.service";
import { TipoDeServicioCreateComponent } from '../../tipo-de-servicio/components/create/tipo-de-servicio-create.component';
import {systemUserService} from "../../system-user/service/system-user.service";
import {systemUserCreateComponent} from "../../system-user/components/create/system-user-create.component";
import {StatusProspectacionService} from "../../status-prospectacion/service/status-prospectacion.service";
import {
  StatusProspectacionCreateComponent
} from "../../status-prospectacion/components/create/status-prospectacion-create.component";

export abstract class ProspectacionDataForm {

    Cliente: DataForm = {
    field: 'Cliente',
    type: 'select',
    label: 'Cliente',
    message: 'Ingrese un Cliente'
  };
  FechaYHora: DataForm = {
    field: 'FechaYHora',
    type: 'datetime-local',
    label: 'Fecha Y Hora',
    message: 'Ingrese una fecha'
  };
  TipoDeServicio: DataForm = {
    field: 'TipoDeServicio',
    type: 'select',
    label: 'Tipo De Servicio',
    message: 'Ingrese un numero'
  };
  DescripcionDelServicio: DataForm = {
    field: 'DescripcionDelServicio',
    type: 'text',
    label: 'Descripción Del Servicio',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  Usuario: DataForm = {
    field: 'Usuario',
    type: 'select',
    label: 'Usuario',
    message: 'Ingrese un numero'
  };
  Empleado: DataForm = {
    field: 'Empleado',
    type: 'select',
    label: 'Empleado',
    message: 'Ingrese un Empleado'
  };
  Status: DataForm = {
    field: 'Status',
    type: 'select',
    label: 'Status',
    message: 'Ingrese un numero'
  };
  Canalizado: DataForm = {
    field: 'Canalizado',
    type: 'number',
    label: 'Canalizado',
    message: 'Ingrese un numero'
  };

    protected constructor(clienteService: ClienteService, tipoDeServicioService: TipoDeServicioService, empleadoService: EmpleadoService, usuarioSevice: systemUserService, statusService: StatusProspectacionService) {
      // Select de Cliente
    this.Cliente.items = clienteService.combo();
    this.Cliente.empty = true;
    this.Cliente.add = true;
    this.Cliente.component = ClienteCreateComponent;

    // Select de Tipo de Servicio
    this.TipoDeServicio.items = tipoDeServicioService.combo();
    this.TipoDeServicio.empty = true;
    this.TipoDeServicio.add = true;
    this.TipoDeServicio.component = TipoDeServicioCreateComponent;

    // Select de Empleado
    this.Empleado.items = empleadoService.combo();
    this.Empleado.empty = true;
    this.Empleado.add = true;
    this.Empleado.component = EmpleadoCreateComponent;

    // Select de Usuario
    this.Usuario.items = usuarioSevice.combo();
    this.Usuario.empty = true;
    this.Usuario.add = true;
    this.Usuario.component = systemUserCreateComponent;

    // Select de Status
    this.Status.items = statusService.combo();
    this.Status.empty = true;
    this.Status.add = true;
    this.Status.component = StatusProspectacionCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
