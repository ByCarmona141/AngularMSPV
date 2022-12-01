import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectacionCreateComponent } from './components/create/prospectacion-create.component';
import { ProspectacionReadComponent } from './components/read/prospectacion-read.component';
import { ProspectacionUpdateComponent } from './components/update/prospectacion-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: ProspectacionReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: ProspectacionCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: ProspectacionUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectacionRoutingModule { }
