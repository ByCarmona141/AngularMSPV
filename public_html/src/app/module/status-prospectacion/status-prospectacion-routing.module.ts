import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusProspectacionCreateComponent } from './components/create/status-prospectacion-create.component';
import { StatusProspectacionReadComponent } from './components/read/status-prospectacion-read.component';
import { StatusProspectacionUpdateComponent } from './components/update/status-prospectacion-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: StatusProspectacionReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: StatusProspectacionCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: StatusProspectacionUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusProspectacionRoutingModule { }
