import { DataForm } from '../../../interfaces/data-form';

export abstract class CatalogoCondicionesComercialesDataForm {

    Nombre: DataForm = {
    field: 'Nombre',
    type: 'text',
    label: 'Nombre',
    message: 'Ingrese minimo 1 letra y maximo 32'
  };
  DescripcionCondicion: DataForm = {
    field: 'DescripcionCondicion',
    type: 'text',
    label: 'Descripción Condición',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  Requerida: DataForm = {
    field: 'Requerida',
    type: 'number',
    label: 'Requerida',
    message: 'Ingrese un numero'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
