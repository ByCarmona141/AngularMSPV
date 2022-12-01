import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoDeRequerimientosRoutingModule } from './catalogo-de-requerimientos-routing.module';
import { CatalogoDeRequerimientosCreateComponent } from './components/create/catalogo-de-requerimientos-create.component';
import { CatalogoDeRequerimientosReadComponent } from './components/read/catalogo-de-requerimientos-read.component';
import { CatalogoDeRequerimientosUpdateComponent } from './components/update/catalogo-de-requerimientos-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogoDeRequerimientosCreateComponent,
    CatalogoDeRequerimientosReadComponent,
    CatalogoDeRequerimientosUpdateComponent
  ],
  imports: [
    CommonModule,
    CatalogoDeRequerimientosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogoDeRequerimientosModule {
}
