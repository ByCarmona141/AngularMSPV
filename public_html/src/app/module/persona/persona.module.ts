import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaCreateComponent } from './components/create/persona-create.component';
import { PersonaReadComponent } from './components/read/persona-read.component';
import { PersonaUpdateComponent } from './components/update/persona-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonaCreateComponent,
    PersonaReadComponent,
    PersonaUpdateComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonaModule {
}
