import { DataForm } from '../../../interfaces/data-form';

export abstract class systemIconDataForm {

    name: DataForm = {
    field: 'name',
    type: 'text',
    label: 'Name',
    message: 'Ingrese minimo 1 letra y maximo 32'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
