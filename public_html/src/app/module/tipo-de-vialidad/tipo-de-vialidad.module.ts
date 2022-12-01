import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDeVialidadRoutingModule } from './tipo-de-vialidad-routing.module';
import { TipoDeVialidadCreateComponent } from './components/create/tipo-de-vialidad-create.component';
import { TipoDeVialidadReadComponent } from './components/read/tipo-de-vialidad-read.component';
import { TipoDeVialidadUpdateComponent } from './components/update/tipo-de-vialidad-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TipoDeVialidadCreateComponent,
    TipoDeVialidadReadComponent,
    TipoDeVialidadUpdateComponent
  ],
  imports: [
    CommonModule,
    TipoDeVialidadRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoDeVialidadModule {
}
