import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaCreateComponent } from './components/create/empresa-create.component';
import { EmpresaReadComponent } from './components/read/empresa-read.component';
import { EmpresaUpdateComponent } from './components/update/empresa-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmpresaCreateComponent,
    EmpresaReadComponent,
    EmpresaUpdateComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule {
}
