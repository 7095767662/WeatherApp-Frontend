import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getCoordinates(cityName: string) {
    const apiKey = '4a5f4d3a3eac90b0ebaaa75a3da53c77'; // Replace with your OpenWeatherMap API key
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    return this.http.get<any>(url);
  }
  getWeather(latitude: number, longitude: number) {
    const apiKey = '4a5f4d3a3eac90b0ebaaa75a3da53c77'; // Replace with your OpenWeatherMap API key
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
  //  const url=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey};`
    return this.http.get<any>(url);
  }
}
