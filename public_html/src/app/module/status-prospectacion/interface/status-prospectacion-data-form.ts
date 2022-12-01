import { DataForm } from '../../../interfaces/data-form';

export abstract class StatusProspectacionDataForm {

    Descipcion: DataForm = {
    field: 'Descipcion',
    type: 'text',
    label: 'Descipción',
    message: 'Ingrese minimo 1 letra y maximo 64'
  };
  Acotacion: DataForm = {
    field: 'Acotacion',
    type: 'text',
    label: 'Acotación',
    message: 'Ingrese minimo 1 letra y maximo 7'
  };
  Origen: DataForm = {
    field: 'Origen',
    type: 'text',
    label: 'Origen',
    message: 'Ingrese minimo 1 letra y maximo 64'
  };
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
    message: 'Ingrese minimo 1 letra y maximo 128'
  };

    protected constructor() {
        
    }

    abstract submit(values): void;

    abstract return(): void;
}
