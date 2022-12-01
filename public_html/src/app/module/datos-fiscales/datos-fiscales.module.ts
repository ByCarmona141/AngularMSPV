import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosFiscalesRoutingModule } from './datos-fiscales-routing.module';
import { DatosFiscalesCreateComponent } from './components/create/datos-fiscales-create.component';
import { DatosFiscalesReadComponent } from './components/read/datos-fiscales-read.component';
import { DatosFiscalesUpdateComponent } from './components/update/datos-fiscales-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatosFiscalesCreateComponent,
    DatosFiscalesReadComponent,
    DatosFiscalesUpdateComponent
  ],
  imports: [
    CommonModule,
    DatosFiscalesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DatosFiscalesModule {
}
