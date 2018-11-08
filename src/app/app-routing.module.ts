import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {GramaNiladhariDivisionComponent} from './grama-niladhari-division/grama-niladhari-division.component';
import {MonthlyPaymentReportComponent} from './monthly-payment-report/monthly-payment-report.component';
import {AdharaLabhinReportComponent} from './adhara-labhin-report/adhara-labhin-report.component';
import {DistrictReportComponent} from './district-report/district-report.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
