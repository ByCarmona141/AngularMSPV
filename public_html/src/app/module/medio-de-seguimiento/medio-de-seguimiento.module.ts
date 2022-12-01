import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedioDeSeguimientoRoutingModule } from './medio-de-seguimiento-routing.module';
import { MedioDeSeguimientoCreateComponent } from './components/create/medio-de-seguimiento-create.component';
import { MedioDeSeguimientoReadComponent } from './components/read/medio-de-seguimiento-read.component';
import { MedioDeSeguimientoUpdateComponent } from './components/update/medio-de-seguimiento-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MedioDeSeguimientoCreateComponent,
    MedioDeSeguimientoReadComponent,
    MedioDeSeguimientoUpdateComponent
  ],
  imports: [
    CommonModule,
    MedioDeSeguimientoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedioDeSeguimientoModule {
}
