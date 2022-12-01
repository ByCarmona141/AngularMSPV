import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoDeDocumentoRoutingModule } from './catalogo-de-documento-routing.module';
import { CatalogoDeDocumentoCreateComponent } from './components/create/catalogo-de-documento-create.component';
import { CatalogoDeDocumentoReadComponent } from './components/read/catalogo-de-documento-read.component';
import { CatalogoDeDocumentoUpdateComponent } from './components/update/catalogo-de-documento-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogoDeDocumentoCreateComponent,
    CatalogoDeDocumentoReadComponent,
    CatalogoDeDocumentoUpdateComponent
  ],
  imports: [
    CommonModule,
    CatalogoDeDocumentoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogoDeDocumentoModule {
}
