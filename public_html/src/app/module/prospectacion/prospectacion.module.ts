import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspectacionRoutingModule } from './prospectacion-routing.module';
import { ProspectacionCreateComponent } from './components/create/prospectacion-create.component';
import { ProspectacionReadComponent } from './components/read/prospectacion-read.component';
import { ProspectacionUpdateComponent } from './components/update/prospectacion-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProspectacionCreateComponent,
    ProspectacionReadComponent,
    ProspectacionUpdateComponent
  ],
  imports: [
    CommonModule,
    ProspectacionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProspectacionModule {
}
