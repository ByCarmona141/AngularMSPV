import { DataForm } from '../../../interfaces/data-form';

export abstract class TipoDeAsentamientoDataForm {

    Nombre: DataForm = {
    field: 'Nombre',
    type: 'text',
    label: 'Nombre',
    message: 'Ingrese minimo 1 letra y maximo 128'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
