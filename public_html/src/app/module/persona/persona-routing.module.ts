import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaCreateComponent } from './components/create/persona-create.component';
import { PersonaReadComponent } from './components/read/persona-read.component';
import { PersonaUpdateComponent } from './components/update/persona-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: PersonaReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: PersonaCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: PersonaUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
