import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-asteroidceinture',
  templateUrl: './asteroidceinture.component.html',
  styleUrls: ['./asteroidceinture.component.css']
})
export class AsteroidceintureComponent implements OnInit {

    items; 
    length; 
    deg; 
    zI; 
    move = 0; 
    obj;
    yI; 
    moove = 0;
    
    constructor(){
        
        window.addEventListener('load', this.asteroids);
    }


//------------------------------------------------|||||-ASTEROIDS-|||||-------------------------------------------------
// --------------------------------------Function in order to do turn asteroids-----------------------------------------

    turn(orientation:any) {  

        this.obj = document.getElementsByClassName('item');
        length = this.obj.length;
        this.deg = 360 / length;
        this.zI = (this.obj[0].offsetWidth / 2) / Math.tan((this.deg / 2) * (Math.PI / 180));
        this.moove += orientation;
         
        for (let j = 0; j < length; j++) { 
            this.obj[j].style.transform = "rotateY(" + (this.deg * (j + this.moove)) + "deg) translateZ(" + this.zI + "px)";   
        }
    }

// --------------------------------Function in order to do a 3D effect on asteroids-------------------------------------

    asteroids() {
        this.obj = document.getElementsByClassName('item');
        length = this.obj.length;
        this.deg = 360 / length;
        this.zI = (this.obj[0].offsetWidth / 2) / Math.tan((this.deg / 2) * (Math.PI / 180));

        for (let k = 0; k < length; k++) {
            this.obj[k].style.transform = "rotateY(" + (this.deg * k) + "deg) translateZ(" + this.zI + "px)";
        }   
    }

    ngOnInit(){

    }

}
