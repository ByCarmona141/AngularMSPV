import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCondicionComercialRoutingModule } from './status-condicion-comercial-routing.module';
import { StatusCondicionComercialCreateComponent } from './components/create/status-condicion-comercial-create.component';
import { StatusCondicionComercialReadComponent } from './components/read/status-condicion-comercial-read.component';
import { StatusCondicionComercialUpdateComponent } from './components/update/status-condicion-comercial-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StatusCondicionComercialCreateComponent,
    StatusCondicionComercialReadComponent,
    StatusCondicionComercialUpdateComponent
  ],
  imports: [
    CommonModule,
    StatusCondicionComercialRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StatusCondicionComercialModule {
}
