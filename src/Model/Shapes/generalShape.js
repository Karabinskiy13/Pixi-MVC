import {getRandomColor} from "../../formuls";
import * as PIXI from "pixi.js"


class Shape extends PIXI.Graphics {
    constructor(x, y){
        super();
        this.beginFill(getRandomColor());
        this.tint = getRandomColor();
        this.lineStyle(5,getRandomColor())
        this.heigth = 100;
        this.x = x;
        this.y = y ? y: -100;
        this.interactive = true;
        this.buttonMode = true;
    }
    calculateArea(){}
}
export {Shape}