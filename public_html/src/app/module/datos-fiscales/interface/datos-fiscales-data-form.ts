import { DataForm } from '../../../interfaces/data-form';
import { DomicilioService } from '../../domicilio/service/domicilio.service';
import { DomicilioCreateComponent } from '../../domicilio/components/create/domicilio-create.component';

export abstract class DatosFiscalesDataForm {

    NombreORazonSocial: DataForm = {
    field: 'NombreORazonSocial',
    type: 'text',
    label: 'Nombre O Razón Social',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  RFC: DataForm = {
    field: 'RFC',
    type: 'text',
    label: 'R F C',
    message: 'Ingrese minimo 1 letra y maximo 16'
  };
  RegimenFiscal: DataForm = {
    field: 'RegimenFiscal',
    type: 'number',
    label: 'Régimen Fiscal',
    message: 'Ingrese un numero'
  };
  Domicilio: DataForm = {
    field: 'Domicilio',
    type: 'select',
    label: 'Domicilio',
    message: 'Ingrese un Domicilio'
  };
  FechaTupla: DataForm = {
    field: 'FechaTupla',
    type: 'datetime-local',
    label: 'Fecha Tupla',
    message: 'Ingrese una fecha'
  };
  Origen: DataForm = {
    field: 'Origen',
    type: 'text',
    label: 'Origen',
    message: 'Ingrese minimo 1 letra y maximo 128'
  };
  Tupla: DataForm = {
    field: 'Tupla',
    type: 'text',
    label: 'Tupla',
    message: 'Ingrese minimo 1 letra y maximo 128'
  };

    protected constructor(domicilioService: DomicilioService) {
        this.Domicilio.items = domicilioService.combo();
        this.Domicilio.empty = true;
        this.Domicilio.add = true;
        this.Domicilio.component = DomicilioCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
