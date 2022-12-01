import { DataForm } from '../../../interfaces/data-form';

export abstract class TipoDePersonaDataForm {

    Descripcion: DataForm = {
    field: 'Descripcion',
    type: 'text',
    label: 'Descripción',
    message: 'Ingrese minimo 1 letra y maximo 64'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
