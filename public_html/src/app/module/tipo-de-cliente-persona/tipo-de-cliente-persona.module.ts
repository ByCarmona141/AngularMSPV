import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDeClientePersonaRoutingModule } from './tipo-de-cliente-persona-routing.module';
import { TipoDeClientePersonaCreateComponent } from './components/create/tipo-de-cliente-persona-create.component';
import { TipoDeClientePersonaReadComponent } from './components/read/tipo-de-cliente-persona-read.component';
import { TipoDeClientePersonaUpdateComponent } from './components/update/tipo-de-cliente-persona-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TipoDeClientePersonaCreateComponent,
    TipoDeClientePersonaReadComponent,
    TipoDeClientePersonaUpdateComponent
  ],
  imports: [
    CommonModule,
    TipoDeClientePersonaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoDeClientePersonaModule {
}
