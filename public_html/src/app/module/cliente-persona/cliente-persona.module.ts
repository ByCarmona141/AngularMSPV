import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientePersonaRoutingModule } from './cliente-persona-routing.module';
import { ClientePersonaCreateComponent } from './components/create/cliente-persona-create.component';
import { ClientePersonaReadComponent } from './components/read/cliente-persona-read.component';
import { ClientePersonaUpdateComponent } from './components/update/cliente-persona-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientePersonaCreateComponent,
    ClientePersonaReadComponent,
    ClientePersonaUpdateComponent
  ],
  imports: [
    CommonModule,
    ClientePersonaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientePersonaModule {
}
