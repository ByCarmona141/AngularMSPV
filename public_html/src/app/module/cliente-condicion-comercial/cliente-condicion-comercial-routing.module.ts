import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCondicionComercialCreateComponent } from './components/create/cliente-condicion-comercial-create.component';
import { ClienteCondicionComercialReadComponent } from './components/read/cliente-condicion-comercial-read.component';
import { ClienteCondicionComercialUpdateComponent } from './components/update/cliente-condicion-comercial-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: ClienteCondicionComercialReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: ClienteCondicionComercialCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: ClienteCondicionComercialUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteCondicionComercialRoutingModule { }
