import { DataForm } from '../../../interfaces/data-form';
import { ClientePersonaService } from '../../cliente-persona/service/cliente-persona.service';
import { ClientePersonaCreateComponent } from '../../cliente-persona/components/create/cliente-persona-create.component';
import { CatalogoCondicionesComercialesService } from '../../catalogo-condiciones-comerciales/service/catalogo-condiciones-comerciales.service';
import { CatalogoCondicionesComercialesCreateComponent } from '../../catalogo-condiciones-comerciales/components/create/catalogo-condiciones-comerciales-create.component';
import {
  StatusCondicionComercialService
} from "../../status-condicion-comercial/service/status-condicion-comercial.service";
import {
  StatusCondicionComercialCreateComponent
} from "../../status-condicion-comercial/components/create/status-condicion-comercial-create.component";
import {systemUserService} from "../../system-user/service/system-user.service";
import {systemUserCreateComponent} from "../../system-user/components/create/system-user-create.component";

export abstract class ClienteCondicionComercialDataForm {

    Cliente: DataForm = {
    field: 'Cliente',
    type: 'select',
    label: 'Cliente',
    message: 'Ingrese un ClientePersona'
  };
  CatalogoCondicionesComerciales: DataForm = {
    field: 'CatalogoCondicionesComerciales',
    type: 'select',
    label: 'Catálogo Condiciones Comerciales',
    message: 'Ingrese un CatalogoCondicionesComerciales'
  };
  Descripcion: DataForm = {
    field: 'Descripcion',
    type: 'text',
    label: 'Descripción',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  FechaAceptacion: DataForm = {
    field: 'FechaAceptacion',
    type: 'date',
    label: 'Fecha Aceptación',
    message: 'Ingrese una fecha'
  };
  Status: DataForm = {
    field: 'Status',
    type: 'select',
    label: 'Status',
    message: 'Ingrese un Status'
  };
  UsuarioRegistro: DataForm = {
    field: 'UsuarioRegistro',
    type: 'select',
    label: 'Usuario Registró',
    message: 'Ingrese un usuario'
  };
  FechaTupla: DataForm = {
    field: 'FechaTupla',
    type: 'datetime-local',
    label: 'Fecha Tupla',
    message: 'Ingrese una fecha'
  };

    protected constructor(clientePersonaService: ClientePersonaService,
              CatalogoCondicionesComercialesService: CatalogoCondicionesComercialesService,
              statusCondicionComercialService: StatusCondicionComercialService,
              UsuarioService: systemUserService) {
        // Combo Cliente
        this.Cliente.items = clientePersonaService.combo();
        this.Cliente.empty = true;
        this.Cliente.add = true;
        this.Cliente.component = ClientePersonaCreateComponent;

        // Combo Condiciones Comerciales
        this.CatalogoCondicionesComerciales.items = CatalogoCondicionesComercialesService.combo();
        this.CatalogoCondicionesComerciales.empty = true;
        this.CatalogoCondicionesComerciales.add = true;
        this.CatalogoCondicionesComerciales.component = CatalogoCondicionesComercialesCreateComponent;

        // Combo Status Condiciones Comerciales
        this.Status.items = statusCondicionComercialService.combo();
        this.Status.empty = true;
        this.Status.add = true;
        this.Status.component = StatusCondicionComercialCreateComponent;

        // Combo Usuario Registro
        this.UsuarioRegistro.items = UsuarioService.combo();
        this.UsuarioRegistro.empty = true;
        this.UsuarioRegistro.add = true;
        this.UsuarioRegistro.component = systemUserCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
