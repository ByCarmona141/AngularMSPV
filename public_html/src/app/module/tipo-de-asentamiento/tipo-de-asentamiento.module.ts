import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDeAsentamientoRoutingModule } from './tipo-de-asentamiento-routing.module';
import { TipoDeAsentamientoCreateComponent } from './components/create/tipo-de-asentamiento-create.component';
import { TipoDeAsentamientoReadComponent } from './components/read/tipo-de-asentamiento-read.component';
import { TipoDeAsentamientoUpdateComponent } from './components/update/tipo-de-asentamiento-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TipoDeAsentamientoCreateComponent,
    TipoDeAsentamientoReadComponent,
    TipoDeAsentamientoUpdateComponent
  ],
  imports: [
    CommonModule,
    TipoDeAsentamientoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoDeAsentamientoModule {
}
