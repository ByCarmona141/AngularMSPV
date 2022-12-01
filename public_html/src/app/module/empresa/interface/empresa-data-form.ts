import { DataForm } from '../../../interfaces/data-form';
import {
    TipoDeVialidadCreateComponent
} from "../../tipo-de-vialidad/components/create/tipo-de-vialidad-create.component";
import {DatosFiscalesService} from "../../datos-fiscales/service/datos-fiscales.service";
import {DatosFiscalesCreateComponent} from "../../datos-fiscales/components/create/datos-fiscales-create.component";

export abstract class EmpresaDataForm {

    NombreComercial: DataForm = {
    field: 'NombreComercial',
    type: 'text',
    label: 'Nombre Comercial',
    message: 'Ingrese minimo 1 letra y maximo 64'
  };
  DatosFiscales: DataForm = {
    field: 'DatosFiscales',
    type: 'select',
    label: 'Datos Fiscales',
    message: 'Seleccione un elemento'
  };

    protected constructor(datosFiscalesService: DatosFiscalesService) {
        // Para el select de tipo de vialidad
        this.DatosFiscales.items = datosFiscalesService.combo();
        this.DatosFiscales.empty = true;
        this.DatosFiscales.add = true;
        this.DatosFiscales.component = DatosFiscalesCreateComponent;
    }

    abstract submit(values): void;

    abstract return(): void;
}
