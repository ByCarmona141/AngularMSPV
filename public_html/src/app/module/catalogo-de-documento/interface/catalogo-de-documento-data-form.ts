import { DataForm } from '../../../interfaces/data-form';

export abstract class CatalogoDeDocumentoDataForm {

    Nombre: DataForm = {
    field: 'Nombre',
    type: 'text',
    label: 'Nombre',
    message: 'Ingrese minimo 1 letra y maximo 128'
  };
  Descripcion: DataForm = {
    field: 'Descripcion',
    type: 'text',
    label: 'Descripción',
    message: 'Ingrese minimo 1 letra y maximo 512'
  };
  Activo: DataForm = {
    field: 'Activo',
    type: 'number',
    label: 'Activo',
    message: 'Ingrese un numero'
  };
  Prioridad: DataForm = {
    field: 'Prioridad',
    type: 'text',
    label: 'Prioridad',
    message: 'Ingrese minimo 1 letra y maximo '
  };
  Origen: DataForm = {
    field: 'Origen',
    type: 'text',
    label: 'Origen',
    message: 'Ingrese minimo 1 letra y maximo 128'
  };
  Requerido: DataForm = {
    field: 'Requerido',
    type: 'number',
    label: 'Requerido',
    message: 'Ingrese un numero'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
