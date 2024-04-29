import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  private GeoapiKey = 'AIzaSyCUAGjCRkMkOH5P27O--WfKczASSUDju_o';
  private GeoapiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  getCoordinates(city: string) {
    const url = `${this.GeoapiUrl}?address=${city}&key=${this.GeoapiKey}`;
    return this.http.get<any>(url);
  }
  getWeather(latitude: number, longitude: number) {
    const apiKey = '4a5f4d3a3eac90b0ebaaa75a3da53c77'; // Replace with your OpenWeatherMap API key
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
  //  const url=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey};`
    return this.http.get<any>(url);
  }
}
