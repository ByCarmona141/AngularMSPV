import { DataForm } from '../../../interfaces/data-form';
import { ClienteService } from '../../cliente/service/cliente.service';
import { ClienteCreateComponent } from '../../cliente/components/create/cliente-create.component';
import { PersonaService } from '../../persona/service/persona.service';
import { PersonaCreateComponent } from '../../persona/components/create/persona-create.component';

export abstract class ClientePersonaDataForm {

    Cliente: DataForm = {
    field: 'Cliente',
    type: 'select',
    label: 'Cliente',
    message: 'Ingrese un Cliente'
  };
  Persona: DataForm = {
    field: 'Persona',
    type: 'select',
    label: 'Persona',
    message: 'Ingrese un Persona'
  };
  Relacion: DataForm = {
    field: 'Relacion',
    type: 'number',
    label: 'Relación',
    message: 'Ingrese un numero'
  };
  Titulo: DataForm = {
    field: 'Titulo',
    type: 'text',
    label: 'Titulo',
    message: 'Ingrese minimo 1 letra y maximo 65'
  };
  Telefono: DataForm = {
    field: 'Telefono',
    type: 'text',
    label: 'Teléfono',
    message: 'Ingrese minimo 1 letra y maximo 16'
  };
  Telefono2: DataForm = {
    field: 'Telefono2',
    type: 'text',
    label: 'Teléfono2',
    message: 'Ingrese minimo 1 letra y maximo 16'
  };
  CorreoElectronico: DataForm = {
    field: 'CorreoElectronico',
    type: 'text',
    label: 'Correo Electrónico',
    message: 'Ingrese minimo 1 letra y maximo 64'
  };

    protected constructor(clienteService: ClienteService,
              personaService: PersonaService) {
        this.Cliente.items = clienteService.combo();
    this.Cliente.empty = true;
    this.Cliente.add = true;
    this.Cliente.component = ClienteCreateComponent;
    this.Persona.items = personaService.combo();
    this.Persona.empty = true;
    this.Persona.add = true;
    this.Persona.component = PersonaCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
