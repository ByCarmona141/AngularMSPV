import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { SeguimientoCreateComponent } from './components/create/seguimiento-create.component';
import { SeguimientoReadComponent } from './components/read/seguimiento-read.component';
import { SeguimientoUpdateComponent } from './components/update/seguimiento-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeguimientoCreateComponent,
    SeguimientoReadComponent,
    SeguimientoUpdateComponent
  ],
  imports: [
    CommonModule,
    SeguimientoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguimientoModule {
}
