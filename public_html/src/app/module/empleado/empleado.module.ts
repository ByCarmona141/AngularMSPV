import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EmpleadoCreateComponent } from './components/create/empleado-create.component';
import { EmpleadoReadComponent } from './components/read/empleado-read.component';
import { EmpleadoUpdateComponent } from './components/update/empleado-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmpleadoCreateComponent,
    EmpleadoReadComponent,
    EmpleadoUpdateComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadoModule {
}
