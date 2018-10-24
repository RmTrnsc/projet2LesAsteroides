import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecuperationDescriptionService {

  private descriptionService:Http;

  constructor(p_descriptionService:Http) {
    this.descriptionService=p_descriptionService;
  }

  public getDescriptionInfos(param_search:string):Observable<Array<string>>{
    let url:string = "https://images-api.nasa.gov/search";
    url += "?q=" + param_search + "";
    url += "&media_type=image";
    

    const obs5:Observable<Response> = this.descriptionService.get(url);

    return obs5.pipe(map((data:Response):string[] => {
      let raw:any = data.json();
      let items: Array<any> = raw.collection.items;
      let j:number = items.length;
      let description: Array<string> = new Array<string>();
      

      console.log(items[0].data);

      while (--j > -1){
        description.push(items[j].data[0].description);
      }
      return description;
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
