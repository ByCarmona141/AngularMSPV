import { DataForm } from '../../../interfaces/data-form';
import { PersonaService } from '../../persona/service/persona.service';
import { PersonaCreateComponent } from '../../persona/components/create/persona-create.component';

export abstract class EmpleadoDataForm {

    Clave: DataForm = {
    field: 'Clave',
    type: 'text',
    label: 'Clave',
    message: 'Ingrese minimo 1 letra y maximo 16'
  };
  Persona: DataForm = {
    field: 'Persona',
    type: 'select',
    label: 'Persona',
    message: 'Ingrese un Persona'
  };

    protected constructor(personaService: PersonaService) {
        this.Persona.items = personaService.combo();
        this.Persona.empty = true;
        this.Persona.add = true;
        this.Persona.component = PersonaCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
