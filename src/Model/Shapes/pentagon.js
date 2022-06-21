import {Shape} from './generalShape'
import {shapeArea} from "../../formuls";

class Pentagon extends Shape {
    constructor(x, y, vertex){
        super(x, y);
        this.type= 'pentagon';
        this.drawPolygon(vertex);
        this.area = shapeArea(vertex);
        this.endFill();
    }
}

export {Pentagon}