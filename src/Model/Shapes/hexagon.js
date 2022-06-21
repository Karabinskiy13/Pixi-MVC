import {Shape} from "./generalShape";
import {shapeArea} from "../../formuls";

export class Hexagon extends Shape {
    constructor(x, y, vertex){
        super(x, y);
        this.type= 'hexagon';
        this.drawPolygon(vertex);
        this.area = shapeArea(vertex);
        this.endFill();
    }
}