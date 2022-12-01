import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDeAsentamientoCreateComponent } from './components/create/tipo-de-asentamiento-create.component';
import { TipoDeAsentamientoReadComponent } from './components/read/tipo-de-asentamiento-read.component';
import { TipoDeAsentamientoUpdateComponent } from './components/update/tipo-de-asentamiento-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: TipoDeAsentamientoReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: TipoDeAsentamientoCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: TipoDeAsentamientoUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDeAsentamientoRoutingModule { }
