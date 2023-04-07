import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  baseUrl = 'https://localhost:7104/api/'

  constructor(http: HttpClient){  /* it equals to: Animal cat = new Animal to build a new class */
    http.get<WeatherForecast[]>(this.baseUrl + 'Categories/3').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

  interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
