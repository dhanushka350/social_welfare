import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { NavibarComponent } from './navibar/navibar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PersonalInformationComponent,
    NavibarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
