import { Component, NgModule } from '@angular/core';
import { app } from './app';

@NgModule({
  imports:[
    app
  ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string = 'AsteroNet';
  
}
