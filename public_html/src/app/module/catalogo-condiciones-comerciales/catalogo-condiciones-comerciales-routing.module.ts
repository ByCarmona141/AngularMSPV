import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoCondicionesComercialesCreateComponent } from './components/create/catalogo-condiciones-comerciales-create.component';
import { CatalogoCondicionesComercialesReadComponent } from './components/read/catalogo-condiciones-comerciales-read.component';
import { CatalogoCondicionesComercialesUpdateComponent } from './components/update/catalogo-condiciones-comerciales-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: CatalogoCondicionesComercialesReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: CatalogoCondicionesComercialesCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: CatalogoCondicionesComercialesUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoCondicionesComercialesRoutingModule { }
