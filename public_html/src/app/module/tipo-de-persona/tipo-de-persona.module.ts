import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDePersonaRoutingModule } from './tipo-de-persona-routing.module';
import { TipoDePersonaCreateComponent } from './components/create/tipo-de-persona-create.component';
import { TipoDePersonaReadComponent } from './components/read/tipo-de-persona-read.component';
import { TipoDePersonaUpdateComponent } from './components/update/tipo-de-persona-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TipoDePersonaCreateComponent,
    TipoDePersonaReadComponent,
    TipoDePersonaUpdateComponent
  ],
  imports: [
    CommonModule,
    TipoDePersonaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoDePersonaModule {
}
