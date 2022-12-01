import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDePersonaCreateComponent } from './components/create/tipo-de-persona-create.component';
import { TipoDePersonaReadComponent } from './components/read/tipo-de-persona-read.component';
import { TipoDePersonaUpdateComponent } from './components/update/tipo-de-persona-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: TipoDePersonaReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: TipoDePersonaCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: TipoDePersonaUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDePersonaRoutingModule { }
