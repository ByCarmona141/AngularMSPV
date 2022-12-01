import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { SamplePageComponent } from './demo/pages/sample-page/sample-page.component';
import { LoggedGuard } from './services/logged.guard';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [LoggedGuard],
        children: [
            {
                path: '',
                redirectTo: 'sample-page',
                pathMatch: 'full',
            },
            {
                path: 'sample-page',
                component: SamplePageComponent
            },
            {
                path: 'systemAction',
                loadChildren: () => import('./module/system-action/system-action.module')
                    .then(m => m.systemActionModule)
            },
            {
                path: 'systemConfig',
                loadChildren: () => import('./module/system-config/system-config.module')
                    .then(m => m.systemConfigModule)
            },
            {
                path: 'systemIcon',
                loadChildren: () => import('./module/system-icon/system-icon.module')
                    .then(m => m.systemIconModule)
            },
            {
                path: 'systemLog',
                loadChildren: () => import('./module/system-log/system-log.module')
                    .then(m => m.systemLogModule)
            },
            {
                path: 'systemMenu',
                loadChildren: () => import('./module/system-menu/system-menu.module')
                    .then(m => m.systemMenuModule)
            },
            {
                path: 'systemPrivileges',
                loadChildren: () => import('./module/system-privileges/system-privileges.module')
                    .then(m => m.systemPrivilegesModule)
            },
            {
                path: 'systemPrivilegesUserRole',
                loadChildren: () => import('./module/system-privileges-user-role/system-privileges-user-role.module')
                    .then(m => m.systemPrivilegesUserRoleModule)
            },
            {
                path: 'systemRepository',
                loadChildren: () => import('./module/system-repository/system-repository.module')
                    .then(m => m.systemRepositoryModule)
            },
            {
                path: 'systemRole',
                loadChildren: () => import('./module/system-role/system-role.module')
                    .then(m => m.systemRoleModule)
            },
            {
                path: 'systemTypeElement',
                loadChildren: () => import('./module/system-type-element/system-type-element.module')
                    .then(m => m.systemTypeElementModule)
            },
            {
                path: 'systemUser',
                loadChildren: () => import('./module/system-user/system-user.module')
                    .then(m => m.systemUserModule)
            },
            {
                path: 'systemUserStatus',
                loadChildren: () => import('./module/system-user-status/system-user-status.module')
                    .then(m => m.systemUserStatusModule)
            },
            {
                path: 'CatalogoCondicionesComerciales',
                loadChildren: () => import('./module/catalogo-condiciones-comerciales/catalogo-condiciones-comerciales.module')
                    .then(m => m.CatalogoCondicionesComercialesModule)
            },
            {
                path: 'CatalogoDeDocumento',
                loadChildren: () => import('./module/catalogo-de-documento/catalogo-de-documento.module')
                    .then(m => m.CatalogoDeDocumentoModule)
            },
            {
                path: 'CatalogoDeRequerimientos',
                loadChildren: () => import('./module/catalogo-de-requerimientos/catalogo-de-requerimientos.module')
                    .then(m => m.CatalogoDeRequerimientosModule)
            },
            {
                path: 'Cliente',
                loadChildren: () => import('./module/cliente/cliente.module')
                    .then(m => m.ClienteModule)
            },
            {
                path: 'ClienteCondicionComercial',
                loadChildren: () => import('./module/cliente-condicion-comercial/cliente-condicion-comercial.module')
                    .then(m => m.ClienteCondicionComercialModule)
            },
            {
                path: 'ClientePersona',
                loadChildren: () => import('./module/cliente-persona/cliente-persona.module')
                    .then(m => m.ClientePersonaModule)
            },
            {
                path: 'DatosFiscales',
                loadChildren: () => import('./module/datos-fiscales/datos-fiscales.module')
                    .then(m => m.DatosFiscalesModule)
            },
            {
                path: 'DocumentoCliente',
                loadChildren: () => import('./module/documento-cliente/documento-cliente.module')
                    .then(m => m.DocumentoClienteModule)
            },
            {
                path: 'Domicilio',
                loadChildren: () => import('./module/domicilio/domicilio.module')
                    .then(m => m.DomicilioModule)
            },
            {
                path: 'Empleado',
                loadChildren: () => import('./module/empleado/empleado.module')
                    .then(m => m.EmpleadoModule)
            },
            {
                path: 'Empresa',
                loadChildren: () => import('./module/empresa/empresa.module')
                    .then(m => m.EmpresaModule)
            },
            {
                path: 'MedioDeSeguimiento',
                loadChildren: () => import('./module/medio-de-seguimiento/medio-de-seguimiento.module')
                    .then(m => m.MedioDeSeguimientoModule)
            },
            {
                path: 'Persona',
                loadChildren: () => import('./module/persona/persona.module')
                    .then(m => m.PersonaModule)
            },
            {
                path: 'Prospectacion',
                loadChildren: () => import('./module/prospectacion/prospectacion.module')
                    .then(m => m.ProspectacionModule)
            },
            {
                path: 'RequerimientoCliente',
                loadChildren: () => import('./module/requerimiento-cliente/requerimiento-cliente.module')
                    .then(m => m.RequerimientoClienteModule)
            },
            {
                path: 'Seguimiento',
                loadChildren: () => import('./module/seguimiento/seguimiento.module')
                    .then(m => m.SeguimientoModule)
            },
            {
                path: 'StatusCondicionComercial',
                loadChildren: () => import('./module/status-condicion-comercial/status-condicion-comercial.module')
                    .then(m => m.StatusCondicionComercialModule)
            },
            {
                path: 'StatusProspectacion',
                loadChildren: () => import('./module/status-prospectacion/status-prospectacion.module')
                    .then(m => m.StatusProspectacionModule)
            },
            {
                path: 'TipoDeAsentamiento',
                loadChildren: () => import('./module/tipo-de-asentamiento/tipo-de-asentamiento.module')
                    .then(m => m.TipoDeAsentamientoModule)
            },
            {
                path: 'TipoDeClientePersona',
                loadChildren: () => import('./module/tipo-de-cliente-persona/tipo-de-cliente-persona.module')
                    .then(m => m.TipoDeClientePersonaModule)
            },
            {
                path: 'TipoDePersona',
                loadChildren: () => import('./module/tipo-de-persona/tipo-de-persona.module')
                    .then(m => m.TipoDePersonaModule)
            },
            {
                path: 'TipoDeServicio',
                loadChildren: () => import('./module/tipo-de-servicio/tipo-de-servicio.module')
                    .then(m => m.TipoDeServicioModule)
            },
            {
                path: 'TipoDeVialidad',
                loadChildren: () => import('./module/tipo-de-vialidad/tipo-de-vialidad.module')
                    .then(m => m.TipoDeVialidadModule)
            },

        ]
    },
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import('./module/login/login.module').then(module => module.LoginModule)
            },
            {
                path: 'auth/reset-password',
                loadChildren: () => import('./module/auth-reset-password/auth-reset-password.module')
                    .then(module => module.AuthResetPasswordModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
