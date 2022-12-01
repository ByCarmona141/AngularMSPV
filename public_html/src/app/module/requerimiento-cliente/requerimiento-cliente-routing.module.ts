import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequerimientoClienteCreateComponent } from './components/create/requerimiento-cliente-create.component';
import { RequerimientoClienteReadComponent } from './components/read/requerimiento-cliente-read.component';
import { RequerimientoClienteUpdateComponent } from './components/update/requerimiento-cliente-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: RequerimientoClienteReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: RequerimientoClienteCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: RequerimientoClienteUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequerimientoClienteRoutingModule { }
