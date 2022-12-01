import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientePersonaCreateComponent } from './components/create/cliente-persona-create.component';
import { ClientePersonaReadComponent } from './components/read/cliente-persona-read.component';
import { ClientePersonaUpdateComponent } from './components/update/cliente-persona-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: ClientePersonaReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: ClientePersonaCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: ClientePersonaUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePersonaRoutingModule { }
