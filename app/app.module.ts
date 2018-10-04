import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsteroidterreComponent } from './asteroidterre/asteroidterre.component';
import { AsteroidceintureComponent } from './asteroidceinture/asteroidceinture.component';
import { AsteroidconnuComponent } from './asteroidconnu/asteroidconnu.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidterreComponent,
    AsteroidceintureComponent,
    AsteroidconnuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
