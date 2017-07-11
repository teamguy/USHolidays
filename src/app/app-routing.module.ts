import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HolidaysComponent }       from './holidays.component';
import { HolidayDetailComponent }  from './holiday-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/holidays', pathMatch: 'full' },
  { path: 'detail/:id', component: HolidayDetailComponent },
  { path: 'holidays',   component: HolidaysComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
