import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoCondicionesComercialesRoutingModule } from './catalogo-condiciones-comerciales-routing.module';
import { CatalogoCondicionesComercialesCreateComponent } from './components/create/catalogo-condiciones-comerciales-create.component';
import { CatalogoCondicionesComercialesReadComponent } from './components/read/catalogo-condiciones-comerciales-read.component';
import { CatalogoCondicionesComercialesUpdateComponent } from './components/update/catalogo-condiciones-comerciales-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogoCondicionesComercialesCreateComponent,
    CatalogoCondicionesComercialesReadComponent,
    CatalogoCondicionesComercialesUpdateComponent
  ],
  imports: [
    CommonModule,
    CatalogoCondicionesComercialesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogoCondicionesComercialesModule {
}
