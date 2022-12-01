import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoDeDocumentoCreateComponent } from './components/create/catalogo-de-documento-create.component';
import { CatalogoDeDocumentoReadComponent } from './components/read/catalogo-de-documento-read.component';
import { CatalogoDeDocumentoUpdateComponent } from './components/update/catalogo-de-documento-update.component';
import { GuardService } from '../../services/guard.service';

const routes: Routes = [
  { path: '',
    component: CatalogoDeDocumentoReadComponent, canActivate: [ GuardService ], data: { privilege: 4 }
  },
  { path: 'create',
    component: CatalogoDeDocumentoCreateComponent, canActivate: [ GuardService ], data: { privilege: 1 }
  },
  { path: 'update/:id',
    component: CatalogoDeDocumentoUpdateComponent, canActivate: [ GuardService ], data: { privilege: 3 }
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoDeDocumentoRoutingModule { }
