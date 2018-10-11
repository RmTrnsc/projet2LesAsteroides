import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AsteroidterreComponent } from './asteroidterre/asteroidterre.component';
import { AsteroidceintureComponent } from './asteroidceinture/asteroidceinture.component';
import { AsteroidconnuComponent } from './asteroidconnu/asteroidconnu.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidceintureComponent,
    AsteroidterreComponent,
    AsteroidconnuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: "Trojan asteroid", component: AsteroidceintureComponent },
        { path: "Under approach", component: AsteroidterreComponent },
        { path: "You know this?", component: AsteroidconnuComponent }    
      ], 
      
      {useHash: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
