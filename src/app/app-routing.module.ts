import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {GramaNiladhariDivisionComponent} from './grama-niladhari-division/grama-niladhari-division.component';
import {MonthlyPaymentReportComponent} from './monthly-payment-report/monthly-payment-report.component';
import {AdharaLabhinReportComponent} from './adhara-labhin-report/adhara-labhin-report.component';
import {DistrictReportComponent} from './district-report/district-report.component';
import {DisabledEldersComponent} from './disabled-elders/disabled-elders.component';
import {VoluntaryOrganizationsInformationComponent} from './voluntary-organizations-information/voluntary-organizations-information.component';
import {DivisionalSecretariatSelectComponent} from './divisional-secretariat-select/divisional-secretariat-select.component';
import {AllocationOfProvisionsComponent} from './allocation-of-provisions/allocation-of-provisions.component';
import {MonthlyReportComponent} from './monthly-report/monthly-report.component';
import {MonthlyReportTwoComponent} from './monthly-report-two/monthly-report-two.component';
import {MonthlyReportThreeComponent} from './monthly-report-three/monthly-report-three.component';
import {MonthlyReportFourComponent} from './monthly-report-four/monthly-report-four.component';
import {MonthlyReportFiveComponent} from './monthly-report-five/monthly-report-five.component';

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalInformationComponent
  },
  {
    path: 'gramaNiladhariDivision',
    component: GramaNiladhariDivisionComponent
  },
  {
    path: 'monthlyPaymentReport',
    component: MonthlyPaymentReportComponent
  },
  {
    path: 'adharaLabhinReport',
    component: AdharaLabhinReportComponent
  },
  {
    path: 'districtReport',
    component: DistrictReportComponent
  },
  {
    path: 'disabledElders',
    component: DisabledEldersComponent
  },
  {
    path: 'voluntaryOrganizations',
    component: VoluntaryOrganizationsInformationComponent
  },
  {
    path: 'divisionalSecretariat',
    component: DivisionalSecretariatSelectComponent
  },
  {
    path: 'allocationOfProvisions',
    component: AllocationOfProvisionsComponent
  },
  {
    path: 'monthlyReport',
    component: MonthlyReportComponent
  },
  {
    path: 'monthlyReportTwo',
    component: MonthlyReportTwoComponent
  },
  {
    path: 'monthlyReportThree',
    component: MonthlyReportThreeComponent
  },
  {
    path: 'monthlyReportFour',
    component: MonthlyReportFourComponent
  },
  {
    path: 'monthlyReportFive',
    component: MonthlyReportFiveComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
