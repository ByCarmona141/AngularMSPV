import { DataForm } from '../../../interfaces/data-form';
import { ClientePersonaService } from '../../cliente-persona/service/cliente-persona.service';
import { ClientePersonaCreateComponent } from '../../cliente-persona/components/create/cliente-persona-create.component';
import { PersonaService } from '../../persona/service/persona.service';
import { PersonaCreateComponent } from '../../persona/components/create/persona-create.component';
import { EmpleadoService } from '../../empleado/service/empleado.service';
import { EmpleadoCreateComponent } from '../../empleado/components/create/empleado-create.component';
import {systemUserService} from "../../system-user/service/system-user.service";
import {systemUserCreateComponent} from "../../system-user/components/create/system-user-create.component";
import {
  CatalogoDeRequerimientosService
} from "../../catalogo-de-requerimientos/service/catalogo-de-requerimientos.service";
import {
  CatalogoDeRequerimientosCreateComponent
} from "../../catalogo-de-requerimientos/components/create/catalogo-de-requerimientos-create.component";

export abstract class RequerimientoClienteDataForm {

    Cliente: DataForm = {
    field: 'Cliente',
    type: 'select',
    label: 'Cliente',
    message: 'Ingrese un ClientePersona'
  };
  Fecha: DataForm = {
    field: 'Fecha',
    type: 'datetime-local',
    label: 'Fecha',
    message: 'Ingrese una fecha'
  };
  Status: DataForm = {
    field: 'Status',
    type: 'number',
    label: 'Status',
    message: 'Ingrese un numero'
  };
  Valor: DataForm = {
    field: 'Valor',
    type: 'text',
    label: 'Valor',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  Solicitante: DataForm = {
    field: 'Solicitante',
    type: 'select',
    label: 'Solicitante',
    message: 'Ingrese un Persona'
  };
  Requerimiento: DataForm = {
    field: 'Requerimiento',
    type: 'select',
    label: 'Requerimiento',
    message: 'Ingrese minimo 1 letra y maximo '
  };
  UsuarioRegistro: DataForm = {
    field: 'UsuarioRegistro',
    type: 'select',
    label: 'Usuario Registró',
    message: 'Ingrese un Usuario'
  };
  EmpleadoElaboro: DataForm = {
    field: 'EmpleadoElaboro',
    type: 'select',
    label: 'Empleado Elaboró',
    message: 'Ingrese un Empleado'
  };

    protected constructor(clientePersonaService: ClientePersonaService,
              personaService: PersonaService,
              requerimientoService: CatalogoDeRequerimientosService,
              SystemUserService: systemUserService,
              empleadoService: EmpleadoService) {

      // Combo Cliente
      this.Cliente.items = clientePersonaService.combo();
      this.Cliente.empty = true;
      this.Cliente.add = true;
      this.Cliente.component = ClientePersonaCreateComponent;

      // Combo Solicitante
      this.Solicitante.items = personaService.combo();
      this.Solicitante.empty = true;
      this.Solicitante.add = true;
      this.Solicitante.component = PersonaCreateComponent;

      // Combo Catalogo de Requerimiento
      this.Requerimiento.items = requerimientoService.combo();
      this.Requerimiento.empty = true;
      this.Requerimiento.add = true;
      this.Requerimiento.component = CatalogoDeRequerimientosCreateComponent;

      // Combo Usuario
      this.UsuarioRegistro.items = SystemUserService.combo();
      this.UsuarioRegistro.empty = true;
      this.UsuarioRegistro.add = true;
      this.UsuarioRegistro.component = systemUserCreateComponent;

      // Combo Empleado
      this.EmpleadoElaboro.items = empleadoService.combo();
      this.EmpleadoElaboro.empty = true;
      this.EmpleadoElaboro.add = true;
      this.EmpleadoElaboro.component = EmpleadoCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
