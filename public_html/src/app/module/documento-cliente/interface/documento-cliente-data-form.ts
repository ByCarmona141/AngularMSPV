import { DataForm } from '../../../interfaces/data-form';
import { ClientePersonaService } from '../../cliente-persona/service/cliente-persona.service';
import { ClientePersonaCreateComponent } from '../../cliente-persona/components/create/cliente-persona-create.component';

export abstract class DocumentoClienteDataForm {

    Cliente: DataForm = {
    field: 'Cliente',
    type: 'select',
    label: 'Cliente',
    message: 'Ingrese un ClientePersona'
  };
  Documento: DataForm = {
    field: 'Documento',
    type: 'number',
    label: 'Documento',
    message: 'Ingrese un numero'
  };
  Archivo: DataForm = {
    field: 'Archivo',
    type: 'number',
    label: 'Archivo',
    message: 'Ingrese un numero'
  };
  Comentarios: DataForm = {
    field: 'Comentarios',
    type: 'text',
    label: 'Comentarios',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };

    protected constructor(clientePersonaService: ClientePersonaService) {
        this.Cliente.items = clientePersonaService.combo();
    this.Cliente.empty = true;
    this.Cliente.add = true;
    this.Cliente.component = ClientePersonaCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
