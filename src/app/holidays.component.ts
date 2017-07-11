import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Holiday }                from './holiday';
import { HolidayService }         from './holiday.service';

@Component({
  selector: 'us-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: [ './holidays.component.css' ]
})
export class HolidaysComponent implements OnInit {
  private selectedHoliday: Holiday;
  private holidays: Holiday[];
  
  constructor(
    private holidayService: HolidayService,
    private router: Router) { }

  getHolidays(): void {
    this.holidayService
        .getHolidays()
        .then(holidays => this.holidays = holidays);        
  }

  ngOnInit(): void {
    this.getHolidays();
  }

  onSelect(holiday: Holiday): void {
    this.selectedHoliday = holiday;
    this.router.navigate(['/detail', this.selectedHoliday.id]);
  }

}
