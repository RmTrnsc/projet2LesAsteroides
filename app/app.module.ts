import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AsteroidterreComponent } from './asteroidterre/asteroidterre.component';
import { AsteroidceintureComponent } from './asteroidceinture/asteroidceinture.component';
import { AsteroidconnuComponent } from './asteroidconnu/asteroidconnu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidceintureComponent,
    AsteroidterreComponent,
    AsteroidconnuComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: "Trojan asteroid", component: AsteroidceintureComponent, pathMatch: "full"},
        { path: "Under approach", component: AsteroidterreComponent, pathMatch: "full" },
        { path: "You know this?", component: AsteroidconnuComponent, pathMatch: "full" },
        { path: "Acceuil", component: AcceuilComponent, pathMatch: "full"},
        { path: '', redirectTo: "Acceuil", pathMatch: "full" }  
      ], 
      
      {useHash: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
