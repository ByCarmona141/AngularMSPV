import { DataForm } from '../../../interfaces/data-form';
import { DatosFiscalesService } from '../../datos-fiscales/service/datos-fiscales.service';
import { DatosFiscalesCreateComponent } from '../../datos-fiscales/components/create/datos-fiscales-create.component';

export abstract class PersonaDataForm {

    NombreORazonSocial: DataForm = {
    field: 'NombreORazonSocial',
    type: 'text',
    label: 'Nombre O Razón Social',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  Telefono: DataForm = {
    field: 'Telefono',
    type: 'text',
    label: 'Teléfono',
    message: 'Ingrese minimo 1 letra y maximo 32'
  };
  CorreoElectronico: DataForm = {
    field: 'CorreoElectronico',
    type: 'text',
    label: 'Correo Electrónico',
    message: 'Ingrese minimo 1 letra y maximo 64'
  };
  TipoDePersona: DataForm = {
    field: 'TipoDePersona',
    type: 'number',
    label: 'Tipo De Persona',
    message: 'Ingrese un numero'
  };
  DatosFiscales: DataForm = {
    field: 'DatosFiscales',
    type: 'select',
    label: 'Datos Fiscales',
    message: 'Ingrese un DatosFiscales'
  };

    protected constructor(datosFiscalesService: DatosFiscalesService) {
        this.DatosFiscales.items = datosFiscalesService.combo();
    this.DatosFiscales.empty = true;
    this.DatosFiscales.add = true;
    this.DatosFiscales.component = DatosFiscalesCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
