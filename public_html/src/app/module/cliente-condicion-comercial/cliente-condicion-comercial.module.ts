import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCondicionComercialRoutingModule } from './cliente-condicion-comercial-routing.module';
import { ClienteCondicionComercialCreateComponent } from './components/create/cliente-condicion-comercial-create.component';
import { ClienteCondicionComercialReadComponent } from './components/read/cliente-condicion-comercial-read.component';
import { ClienteCondicionComercialUpdateComponent } from './components/update/cliente-condicion-comercial-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClienteCondicionComercialCreateComponent,
    ClienteCondicionComercialReadComponent,
    ClienteCondicionComercialUpdateComponent
  ],
  imports: [
    CommonModule,
    ClienteCondicionComercialRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteCondicionComercialModule {
}
