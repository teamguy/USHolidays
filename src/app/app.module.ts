import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { HolidaysComponent }      from './holidays.component';
import { HolidayDetailComponent }  from './holiday-detail.component';
import { HolidayService }          from './holiday.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HolidayDetailComponent,
    HolidaysComponent
  ],
  providers: [ HolidayService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }