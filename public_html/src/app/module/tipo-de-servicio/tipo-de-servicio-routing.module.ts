import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDeServicioCreateComponent } from './components/create/tipo-de-servicio-create.component';
import { TipoDeServicioReadComponent } from './components/read/tipo-de-servicio-read.component';
import { TipoDeServicioUpdateComponent } from './components/update/tipo-de-servicio-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: TipoDeServicioReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: TipoDeServicioCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: TipoDeServicioUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDeServicioRoutingModule { }
