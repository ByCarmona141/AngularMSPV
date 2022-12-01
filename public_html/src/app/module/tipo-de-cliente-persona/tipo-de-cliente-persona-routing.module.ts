import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDeClientePersonaCreateComponent } from './components/create/tipo-de-cliente-persona-create.component';
import { TipoDeClientePersonaReadComponent } from './components/read/tipo-de-cliente-persona-read.component';
import { TipoDeClientePersonaUpdateComponent } from './components/update/tipo-de-cliente-persona-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: TipoDeClientePersonaReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: TipoDeClientePersonaCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: TipoDeClientePersonaUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDeClientePersonaRoutingModule { }
