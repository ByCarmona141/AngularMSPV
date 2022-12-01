import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedioDeSeguimientoCreateComponent } from './components/create/medio-de-seguimiento-create.component';
import { MedioDeSeguimientoReadComponent } from './components/read/medio-de-seguimiento-read.component';
import { MedioDeSeguimientoUpdateComponent } from './components/update/medio-de-seguimiento-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: MedioDeSeguimientoReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: MedioDeSeguimientoCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: MedioDeSeguimientoUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedioDeSeguimientoRoutingModule { }
