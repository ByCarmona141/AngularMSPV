import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ChatUserListComponent } from './theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from './theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component';
import { ChatMsgComponent } from './theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbActiveModal, NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Locales
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es-MX';
import { HttpInterceptInterceptor } from './services/http-intercept.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';

registerLocaleData(localEs);

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        AuthComponent,
        NavigationComponent,
        NavContentComponent,
        NavGroupComponent,
        NavCollapseComponent,
        NavItemComponent,
        NavBarComponent,
        NavLeftComponent,
        NavSearchComponent,
        NavRightComponent,
        ChatUserListComponent,
        FriendComponent,
        ChatMsgComponent,
        ConfigurationComponent,
        ToggleFullScreenDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbButtonsModule,
        NgbTabsetModule,
        NgSelectModule
    ],
    providers: [NavigationItem, NgbActiveModal,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
