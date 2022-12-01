import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteCreateComponent } from './components/create/cliente-create.component';
import { ClienteReadComponent } from './components/read/cliente-read.component';
import { ClienteUpdateComponent } from './components/update/cliente-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule {
}
