import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequerimientoClienteRoutingModule } from './requerimiento-cliente-routing.module';
import { RequerimientoClienteCreateComponent } from './components/create/requerimiento-cliente-create.component';
import { RequerimientoClienteReadComponent } from './components/read/requerimiento-cliente-read.component';
import { RequerimientoClienteUpdateComponent } from './components/update/requerimiento-cliente-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RequerimientoClienteCreateComponent,
    RequerimientoClienteReadComponent,
    RequerimientoClienteUpdateComponent
  ],
  imports: [
    CommonModule,
    RequerimientoClienteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RequerimientoClienteModule {
}
