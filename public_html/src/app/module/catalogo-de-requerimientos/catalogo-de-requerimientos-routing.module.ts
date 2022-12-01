import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoDeRequerimientosCreateComponent } from './components/create/catalogo-de-requerimientos-create.component';
import { CatalogoDeRequerimientosReadComponent } from './components/read/catalogo-de-requerimientos-read.component';
import { CatalogoDeRequerimientosUpdateComponent } from './components/update/catalogo-de-requerimientos-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: CatalogoDeRequerimientosReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: CatalogoDeRequerimientosCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: CatalogoDeRequerimientosUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoDeRequerimientosRoutingModule { }
