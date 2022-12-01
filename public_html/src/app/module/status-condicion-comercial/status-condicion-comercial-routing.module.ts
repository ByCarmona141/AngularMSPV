import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusCondicionComercialCreateComponent } from './components/create/status-condicion-comercial-create.component';
import { StatusCondicionComercialReadComponent } from './components/read/status-condicion-comercial-read.component';
import { StatusCondicionComercialUpdateComponent } from './components/update/status-condicion-comercial-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: StatusCondicionComercialReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: StatusCondicionComercialCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: StatusCondicionComercialUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusCondicionComercialRoutingModule { }
