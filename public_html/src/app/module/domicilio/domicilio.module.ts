import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomicilioRoutingModule } from './domicilio-routing.module';
import { DomicilioCreateComponent } from './components/create/domicilio-create.component';
import { DomicilioReadComponent } from './components/read/domicilio-read.component';
import { DomicilioUpdateComponent } from './components/update/domicilio-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DomicilioCreateComponent,
    DomicilioReadComponent,
    DomicilioUpdateComponent
  ],
  imports: [
    CommonModule,
    DomicilioRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DomicilioModule {
}
