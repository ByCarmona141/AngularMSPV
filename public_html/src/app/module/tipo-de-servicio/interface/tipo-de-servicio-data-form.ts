import { DataForm } from '../../../interfaces/data-form';

export abstract class TipoDeServicioDataForm {

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
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  Activo: DataForm = {
    field: 'Activo',
    type: 'number',
    label: 'Activo',
    message: 'Ingrese un numero'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
