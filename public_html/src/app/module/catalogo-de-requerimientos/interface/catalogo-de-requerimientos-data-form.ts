import { DataForm } from '../../../interfaces/data-form';
import {TipoDeServicioService} from "../../tipo-de-servicio/service/tipo-de-servicio.service";
import {
  TipoDeServicioCreateComponent
} from "../../tipo-de-servicio/components/create/tipo-de-servicio-create.component";

export abstract class CatalogoDeRequerimientosDataForm {

    TipoDeServicio: DataForm = {
    field: 'TipoDeServicio',
    type: 'select',
    label: 'Tipo De Servicio',
    message: 'Ingrese un numero'
  };
  Requerimiento: DataForm = {
    field: 'Requerimiento',
    type: 'text',
    label: 'Requerimiento',
    message: 'Ingrese minimo 1 letra y maximo 256'
  };
  Orden: DataForm = {
    field: 'Orden',
    type: 'number',
    label: 'Orden',
    message: 'Ingrese un numero'
  };
  Requerido: DataForm = {
    field: 'Requerido',
    type: 'number',
    label: 'Requerido',
    message: 'Ingrese un numero'
  };
  Catalogo: DataForm = {
    field: 'Catalogo',
    type: 'text',
    label: 'Catálogo',
    message: 'Ingrese minimo 1 letra y maximo 65535'
  };

    protected constructor(tipoDeServicioService: TipoDeServicioService) {
      // Para el select de tipo de vialidad
      this.TipoDeServicio.items = tipoDeServicioService.combo();
      this.TipoDeServicio.empty = true;
      this.TipoDeServicio.add = true;
      this.TipoDeServicio.component = TipoDeServicioCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
