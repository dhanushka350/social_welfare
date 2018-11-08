import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { NavibarComponent } from './navibar/navibar.component';
import { GramaNiladhariDivisionComponent } from './grama-niladhari-division/grama-niladhari-division.component';
import { MonthlyPaymentReportComponent } from './monthly-payment-report/monthly-payment-report.component';
import { AdharaLabhinReportComponent } from './adhara-labhin-report/adhara-labhin-report.component';
import { DistrictReportComponent } from './district-report/district-report.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PersonalInformationComponent,
    NavibarComponent,
    GramaNiladhariDivisionComponent,
    MonthlyPaymentReportComponent,
    AdharaLabhinReportComponent,
    DistrictReportComponent
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
