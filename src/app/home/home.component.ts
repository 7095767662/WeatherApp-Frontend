import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  currentDate= new Date();
  CurrentTemp:string="";
  currentTime: Date;
  cityName:string="";
  temperature:number=0;



  constructor(private weatherService:WeatherService ) {
      this.currentTime = new Date();
  }

  searchCity(cityName: string) {
    this.weatherService.getCoordinates(cityName).subscribe(data => {
      if (data.length > 0) {
        const { lat, lon } = data[0];
        this.weatherService.getWeather(lat, lon).subscribe(weatherData => {
          // Handle weather data here
  
          console.log(weatherData);
          this.CurrentTemp = ((weatherData.main.temp) - 273.15).toFixed(2);

        });
      } else {
        console.log('City not found');
      }
    });
  }


   hello(){
    console.log("new Button clicked")
   }



}
