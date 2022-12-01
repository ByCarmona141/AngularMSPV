import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusProspectacionRoutingModule } from './status-prospectacion-routing.module';
import { StatusProspectacionCreateComponent } from './components/create/status-prospectacion-create.component';
import { StatusProspectacionReadComponent } from './components/read/status-prospectacion-read.component';
import { StatusProspectacionUpdateComponent } from './components/update/status-prospectacion-update.component';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StatusProspectacionCreateComponent,
    StatusProspectacionReadComponent,
    StatusProspectacionUpdateComponent
  ],
  imports: [
    CommonModule,
    StatusProspectacionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StatusProspectacionModule {
}
