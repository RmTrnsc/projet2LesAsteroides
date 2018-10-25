import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecuperationTitleService {

  private titleService:Http;

  constructor(p_titleService:Http) {
    this.titleService=p_titleService;
  }

  public getTitleInfos(param_search:string):Observable<Array<string>>{
    let url:string = "https://images-api.nasa.gov/search";
    url += "?q=" + param_search + "";
    url += "&media_type=image";
    

    const obs7:Observable<Response> = this.titleService.get(url);

    return obs7.pipe(map((data:Response):string[] => {
      let raw:any = data.json();
      let items: Array<any> = raw.collection.items;
      let i:number = items.length;
      let titles: Array<string> = new Array<string>();
      

      console.log(items[0].data);

      while (--i > -1){
        titles.push(items[i].data[0].title);
      }
      return titles;
    }
    )
    );
  }
}
