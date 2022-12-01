import { DataForm } from '../../../interfaces/data-form';

export abstract class TipoDeClientePersonaDataForm {

    Nombre: DataForm = {
    field: 'Nombre',
    type: 'text',
    label: 'Nombre',
    message: 'Ingrese minimo 1 letra y maximo 64'
  };
  Descripcion: DataForm = {
    field: 'Descripcion',
    type: 'text',
    label: 'Descripción',
    message: 'Ingrese minimo 1 letra y maximo 512'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
