import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosFiscalesCreateComponent } from './components/create/datos-fiscales-create.component';
import { DatosFiscalesReadComponent } from './components/read/datos-fiscales-read.component';
import { DatosFiscalesUpdateComponent } from './components/update/datos-fiscales-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: DatosFiscalesReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: DatosFiscalesCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: DatosFiscalesUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosFiscalesRoutingModule { }
