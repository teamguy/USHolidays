import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Holiday } from './holiday';

@Injectable()
export class HolidayService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private holidaysUrl = 'https://holidayapi.com/v1/holidays?key=f2871504-fd6b-4924-89d0-13e53f4f9467&country=US&year=2015';

  constructor(private http: Http) { }

  extractHolidays(response): Holiday[] {
    var dateList = response.json().holidays;
    var holidays = [];
    var dateIndex = -1;
    Object.keys(dateList).forEach(function(key,index) {
      dateList[key].forEach(function(dateHoliday, index2) {
        var holiday = dateHoliday;
        holiday.id = ++dateIndex;
        holidays.push(holiday);
      });
    });
    return holidays;
  }


  getHolidays(): Promise<Holiday[]> {
    return this.http.get(this.holidaysUrl)
      .toPromise()
      .then ( this.extractHolidays )
      .catch(this.handleError);
  }


  getHoliday(id: number): Promise<Holiday> {
    return this.http.get(this.holidaysUrl)
      .toPromise()
      .then ( function(response) {
            var dateList = response.json().holidays;
            var index = -1;
            for (var key in dateList) {
              for (var dateIndex = 0; dateIndex < dateList[key].length; dateIndex++) {
                if (++index == id) {
                  var holiday = dateList[key][dateIndex];
                  holiday.id = index;
                  return holiday;
                }
              }
            }
        }
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in HolidayService', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
