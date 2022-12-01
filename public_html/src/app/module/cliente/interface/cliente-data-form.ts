import { DataForm } from '../../../interfaces/data-form';
import {EmpresaService} from "../../empresa/service/empresa.service";
import {EmpresaCreateComponent} from "../../empresa/components/create/empresa-create.component";
import {systemUserService} from "../../system-user/service/system-user.service";
import {systemUserCreateComponent} from "../../system-user/components/create/system-user-create.component";

export abstract class ClienteDataForm {

    Nombre: DataForm = {
    field: 'Nombre',
    type: 'text',
    label: 'Nombre',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  NoCliente: DataForm = {
    field: 'NoCliente',
    type: 'text',
    label: 'No Cliente',
    message: 'Ingrese minimo 1 letra y maximo 16'
  };
  Empresa: DataForm = {
    field: 'Empresa',
    type: 'select',
    label: 'Empresa',
    message: 'Ingrese un numero'
  };
  FechaTupla: DataForm = {
    field: 'FechaTupla',
    type: 'datetime-local',
    label: 'Fecha Tupla',
    message: 'Ingrese una fecha'
  };
  UsuarioRegistro: DataForm = {
    field: 'UsuarioRegistro',
    type: 'select',
    label: 'Usuario Registró',
    message: 'Ingrese un numero'
  };
  Status: DataForm = {
    field: 'Status',
    type: 'number',
    label: 'Status',
    message: 'Ingrese un numero'
  };
  PaginaWeb: DataForm = {
    field: 'PaginaWeb',
    type: 'text',
    label: 'Pagina Web',
    message: 'Ingrese un numero'
  };
  LimiteDeCredito: DataForm = {
    field: 'LimiteDeCredito',
    type: 'number',
    label: 'Límite De Crédito',
    message: 'Ingrese un numero'
  };

    protected constructor(empresaService: EmpresaService, userService: systemUserService) {
      // Para el select de empresa
      this.Empresa.items = empresaService.combo();
      this.Empresa.empty = true;
      this.Empresa.add = true;
      this.Empresa.component = EmpresaCreateComponent;

      // Para el select de usuario registro
      this.UsuarioRegistro.items = userService.combo();
      this.UsuarioRegistro.empty = true;
      this.UsuarioRegistro.add = true;
      this.UsuarioRegistro.component = systemUserCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
