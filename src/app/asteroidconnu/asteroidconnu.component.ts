import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-asteroidconnu',
    templateUrl: './asteroidconnu.component.html',
    styleUrls: ['./asteroidconnu.component.css']
})
export class AsteroidconnuComponent implements OnInit {

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
        window.addEventListener('load', this.informations);
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

//-------------------------------------------|||||-INFORMATIONS WINDOWS-|||||--------------------------------------------   
//---------------------------------Function in order to do turn the informations windows --------------------------------


    rotate(direction:any) {

        this.items = document.getElementsByClassName('item2');
        length = this.items.length;
        this.deg = 360 / length;
        this.yI = (this.items[0].offsetWidth / 2) / Math.tan((this.deg / 2) * (Math.PI / 180));
        this.move += direction;

        for (let i = 0; i < length; i++) {
            this.items[i].style.transform = "rotateY(" + (this.deg * (i + this.move)) + "deg) translateZ(" + this.yI + "px)";
        }
    }

//----------------------------Function in order to do a 3D effect on the informations windows----------------------------

    informations() {

        this.items = document.getElementsByClassName('item2');
        length = this.items.length;
        this.deg = 360 / length;
        this.yI = (this.items[0].offsetWidth / 2) / Math.tan((this.deg / 2) * (Math.PI / 180));

        for (let h = 0; h < length; h++) {
            this.items[h].style.transform = "rotateY(" + (this.deg * h) + "deg) translateZ(" + this.yI + "px)";
        }
    }


//-----------------------------------------------------------------------------------------------------------------------

    ngOnInit(){

    }

}