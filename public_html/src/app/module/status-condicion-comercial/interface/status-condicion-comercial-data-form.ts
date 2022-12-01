import { DataForm } from '../../../interfaces/data-form';

export abstract class StatusCondicionComercialDataForm {

    Nombre: DataForm = {
    field: 'Nombre',
    type: 'text',
    label: 'Nombre',
    message: 'Ingrese minimo 1 letra y maximo 32'
  };
  Descripcion: DataForm = {
    field: 'Descripcion',
    type: 'text',
    label: 'Descripci-on',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
