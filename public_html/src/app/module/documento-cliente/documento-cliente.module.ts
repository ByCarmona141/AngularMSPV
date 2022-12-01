import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoClienteRoutingModule } from './documento-cliente-routing.module';
import { DocumentoClienteCreateComponent } from './components/create/documento-cliente-create.component';
import { DocumentoClienteReadComponent } from './components/read/documento-cliente-read.component';
import { DocumentoClienteUpdateComponent } from './components/update/documento-cliente-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocumentoClienteCreateComponent,
    DocumentoClienteReadComponent,
    DocumentoClienteUpdateComponent
  ],
  imports: [
    CommonModule,
    DocumentoClienteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DocumentoClienteModule {
}
