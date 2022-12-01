import { DataForm } from '../../../interfaces/data-form';
import {TipoDeVialidadService} from "../../tipo-de-vialidad/service/tipo-de-vialidad.service";
import {TipoDeVialidadCreateComponent} from "../../tipo-de-vialidad/components/create/tipo-de-vialidad-create.component";
import {TipoDeAsentamientoService} from "../../tipo-de-asentamiento/service/tipo-de-asentamiento.service";
import { TipoDeAsentamientoCreateComponent } from '../../tipo-de-asentamiento/components/create/tipo-de-asentamiento-create.component';

export abstract class DomicilioDataForm {

    TipoDeVialidad: DataForm = {
    field: 'TipoDeVialidad',
    type: 'select',
    label: 'Tipo De Vialidad',
    message: 'Ingrese un numero'
  };
  Vialidad: DataForm = {
    field: 'Vialidad',
    type: 'text',
    label: 'Vialidad',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  TipoDeAsentamiento: DataForm = {
    field: 'TipoDeAsentamiento',
    type: 'select',
    label: 'Tipo De Asentamiento',
    message: 'Ingrese un numero'
  };
  Asentamiento: DataForm = {
    field: 'Asentamiento',
    type: 'text',
    label: 'Asentamiento',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  NumeroExterior: DataForm = {
    field: 'NumeroExterior',
    type: 'text',
    label: 'Número Exterior',
    message: 'Ingrese minimo 1 letra y maximo 8'
  };
  NumeroInterior: DataForm = {
    field: 'NumeroInterior',
    type: 'text',
    label: 'Número Interior',
    message: 'Ingrese minimo 1 letra y maximo 8'
  };
  Pais: DataForm = {
    field: 'Pais',
    type: 'text',
    label: 'País',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  EntidadFederativa: DataForm = {
    field: 'EntidadFederativa',
    type: 'text',
    label: 'Entidad Federativa',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  Municipio: DataForm = {
    field: 'Municipio',
    type: 'text',
    label: 'Municipio',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  Localidad: DataForm = {
    field: 'Localidad',
    type: 'text',
    label: 'Localidad',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  CodigoPostal: DataForm = {
    field: 'CodigoPostal',
    type: 'text',
    label: 'Código Postal',
    message: 'Ingrese minimo 1 letra y maximo 8'
  };
  Latitud: DataForm = {
    field: 'Latitud',
    type: 'text',
    label: 'Latitud',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  Longitud: DataForm = {
    field: 'Longitud',
    type: 'text',
    label: 'Longitud',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  GooglePin: DataForm = {
    field: 'GooglePin',
    type: 'text',
    label: 'Google Pin',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };
  Visible: DataForm = {
    field: 'Visible',
    type: 'number',
    label: 'Visible',
    message: 'Ingrese un numero'
  };
  Actual: DataForm = {
    field: 'Actual',
    type: 'number',
    label: 'Actual',
    message: 'Ingrese un numero'
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

    protected constructor(tipoVialidadService: TipoDeVialidadService, tipoDeAsentamientoService: TipoDeAsentamientoService) {
      // Para el select de tipo de vialidad
      this.TipoDeVialidad.items = tipoVialidadService.combo();
      this.TipoDeVialidad.empty = true;
      this.TipoDeVialidad.add = true;
      this.TipoDeVialidad.component = TipoDeVialidadCreateComponent;

      // Para el select de tipo de asentamiento
      this.TipoDeAsentamiento.items = tipoDeAsentamientoService.combo();
      this.TipoDeAsentamiento.empty = true;
      this.TipoDeAsentamiento.add = true;
      this.TipoDeAsentamiento.component = TipoDeAsentamientoCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
