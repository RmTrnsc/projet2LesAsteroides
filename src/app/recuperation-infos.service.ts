import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecuperationInfosService {

  private dailyService:Http;

  constructor(p_dailyService:Http) {
    this.dailyService=p_dailyService;
  }

  public getDailyInfos(param_search:string):Observable<Array<string>>{
    let url:string = "https://images-api.nasa.gov/search";
    url += "?q=" + param_search + "";
    url += "&media_type=image";
    

    const obs1:Observable<Response> = this.dailyService.get(url);

    return obs1.pipe(map((data:Response):string[] => {
      let raw:any = data.json();
      let items: Array<any> = raw.collection.items;
      let i:number = items.length;
      let images: Array<string> = new Array<string>();
      

      console.log(items[0].data);

      while (--i > -1){
        images.push(items[i].links[0].href);
      }
      return images;
    }
    )
    );
  }
}

// DailyInfo = TourInfo
// dailyInfo = travelInfo
// dailyService = service
// RecuperationInfosService = NasaService
// DailyInfos = PlanetImages
// asteroid = planet
// p_dailyService = p_service
