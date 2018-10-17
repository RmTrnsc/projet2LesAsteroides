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
        window.addEventListener('DOMContentLoaded', this.DOMContentLoaded);
        window.addEventListener('load', this.load);
    }


    turn(direction) {

        this.moove += direction;

        for (let j = 0; j < length; j++) {
            this.obj[j].style.transform = "rotateY(" + (this.deg * (j + this.moove)) + "deg) translateZ(" + this.yI + "px)";
        }
    }

    DOMContentLoaded() {
        this.items = document.getElementsByClassName('item');

            length = this.items.length;

        this.deg = 360 / length;

            this.zI = (this.items[0].offsetWidth / 2) / Math.tan((this.deg / 2) * (Math.PI / 180))

        for (let i = 0; i < length; i++) {
            this.items[i].style.transform = "rotateY(" + (this.deg * i) + "deg) translateZ(" + this.zI + "px)";
        }
    }

    


    rotate(direction:any) {
        this.move += direction;

            for (let i = 0; i < length; i++) {
                this.items[i].style.transform = "rotateY(" + (this.deg * (i + this.move)) + "deg) translateZ(" + this.zI + "px)";
        }
    }

    load() {

        this.obj = document.getElementsByClassName('item2');

            length = this.obj.length;

        this.deg = 360 / length;

            this.yI = (this.obj[0].offsetWidth / 2) / Math.tan((this.deg / 2) * (Math.PI / 180))

        for (let j = 0; j < length; j++) {
            this.obj[j].style.transform = "rotateY(" + (this.deg * j) + "deg) translateZ(" + this.yI + "px)";
        }
    }

    ngOnInit(){

    }

}
