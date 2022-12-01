import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDeVialidadCreateComponent } from './components/create/tipo-de-vialidad-create.component';
import { TipoDeVialidadReadComponent } from './components/read/tipo-de-vialidad-read.component';
import { TipoDeVialidadUpdateComponent } from './components/update/tipo-de-vialidad-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: TipoDeVialidadReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: TipoDeVialidadCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: TipoDeVialidadUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDeVialidadRoutingModule { }
