import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDeServicioRoutingModule } from './tipo-de-servicio-routing.module';
import { TipoDeServicioCreateComponent } from './components/create/tipo-de-servicio-create.component';
import { TipoDeServicioReadComponent } from './components/read/tipo-de-servicio-read.component';
import { TipoDeServicioUpdateComponent } from './components/update/tipo-de-servicio-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TipoDeServicioCreateComponent,
    TipoDeServicioReadComponent,
    TipoDeServicioUpdateComponent
  ],
  imports: [
    CommonModule,
    TipoDeServicioRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoDeServicioModule {
}
