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
import { DisabledEldersComponent } from './disabled-elders/disabled-elders.component';
import { VoluntaryOrganizationsInformationComponent } from './voluntary-organizations-information/voluntary-organizations-information.component';
import { DivisionalSecretariatSelectComponent } from './divisional-secretariat-select/divisional-secretariat-select.component';
import { AllocationOfProvisionsComponent } from './allocation-of-provisions/allocation-of-provisions.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { MonthlyReportTwoComponent } from './monthly-report-two/monthly-report-two.component';
import { MonthlyReportThreeComponent } from './monthly-report-three/monthly-report-three.component';
import { MonthlyReportFourComponent } from './monthly-report-four/monthly-report-four.component';
import { MonthlyReportFiveComponent } from './monthly-report-five/monthly-report-five.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PersonalInformationComponent,
    NavibarComponent,
    GramaNiladhariDivisionComponent,
    MonthlyPaymentReportComponent,
    AdharaLabhinReportComponent,
    DistrictReportComponent,
    DisabledEldersComponent,
    VoluntaryOrganizationsInformationComponent,
    DivisionalSecretariatSelectComponent,
    AllocationOfProvisionsComponent,
    MonthlyReportComponent,
    MonthlyReportTwoComponent,
    MonthlyReportThreeComponent,
    MonthlyReportFourComponent,
    MonthlyReportFiveComponent,
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
