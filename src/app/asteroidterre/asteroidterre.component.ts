import { Component, OnInit } from '@angular/core';
import { RecuperationInfosService } from '../recuperation-infos.service';
import { Observable } from 'rxjs';
import { DailyInfo } from '../daily-info';

@Component({
  selector: 'app-asteroidterre',
  templateUrl: './asteroidterre.component.html',
  styleUrls: ['./asteroidterre.component.css']
})
export class AsteroidterreComponent implements OnInit {

  public dailyInfo: DailyInfo = null;

  public img: string = "";
  public images:string[];
  private dailyService: RecuperationInfosService;

  constructor(param_nasa_service : RecuperationInfosService){
    this.dailyInfo = new DailyInfo("asteroid", "asteroid");
   // this.dailyInfo.name = "asteroid";
   // this.dailyInfo.asteroid = "asteroid";
    this.dailyService = param_nasa_service;
    this.img = "";
    this.images = [];

  }

  ngOnInit(){
    const obs: Observable<string[]> = this.dailyService.getDailyInfos(this.dailyInfo.asteroid);
    obs.subscribe((param_images_urls:string[]) => {
      this.images = param_images_urls;
      console.log(this.images);
    }
    );
  }

}

// DailyInfo = TourInfo
// dailyInfo = travelInfo
// dailyService = service
// RecuperationInfosService = NasaService
// DailyInfos = PlanetImages
// asteroid = planet
// p_dailyNews = p_service
