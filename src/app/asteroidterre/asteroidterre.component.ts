import { Component, OnInit } from '@angular/core';
import { RecuperationInfosService } from '../recuperation-infos.service';
import { Observable } from 'rxjs';
import { DailyInfo } from '../daily-info';
import { DescriptionImage } from '../description-image';
import { RecuperationDescriptionService } from '../recuperation-description.service';
import { TitleInfo } from '../title-info';
import { RecuperationTitleService } from '../recuperation-title.service';

@Component({
  selector: 'app-asteroidterre',
  templateUrl: './asteroidterre.component.html',
  styleUrls: ['./asteroidterre.component.css']
})
export class AsteroidterreComponent implements OnInit {

  public dailyInfo: DailyInfo = null;
  public descriptionInfo: DescriptionImage = null;
  public titleInfo: TitleInfo = null;

  public images:string[];
  public description:string[];
  public titles:string[];

  private dailyService: RecuperationInfosService;
  private descriptionService: RecuperationDescriptionService;
  private titleService: RecuperationTitleService;

  constructor(param_nasa_service : RecuperationInfosService, param_description_service : RecuperationDescriptionService, param_title_service: RecuperationTitleService){

    this.dailyInfo = new DailyInfo("asteroid", "asteroid");
    this.descriptionInfo = new DescriptionImage("asteroid", "asteroid");
    this.titleInfo = new TitleInfo("asteroid", "asteroid");

    this.dailyService = param_nasa_service;
    this.descriptionService = param_description_service;
    this.titleService = param_title_service;

    this.images = [];
    this.description = [];
    this.titles = [];
  }

  ngOnInit(){
    const obs: Observable<string[]> = this.dailyService.getDailyInfos(this.dailyInfo.asteroid);
    obs.subscribe((param_images_urls:string[]) => {
      this.images = param_images_urls;
      console.log(this.images);
    }
    );
    const obs6: Observable<string[]> = this.descriptionService.getDescriptionInfos(this.descriptionInfo.descriptionImage);
    obs6.subscribe((param_description_urls:string[]) => {
      this.description = param_description_urls;
      console.log(this.description);
    }
    );
    const obs8: Observable<string[]> = this.titleService.getTitleInfos(this.titleInfo.titleDaily);
    obs8.subscribe((param_title_urls:string[]) => {
      this.titles = param_title_urls;
      console.log(this.titles);
    }
    );
    
  }

}

// DailyInfo = TourInfo = DescriptionImage
// dailyInfo = travelInfo = descriptionInfo
// dailyService = service = descriptionService
// RecuperationInfosService = NasaService =
// DailyInfos = PlanetImages = DescriptionInfos
// asteroid = planet = descriptionImage
// p_dailyNews = p_service = 
