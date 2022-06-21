import {Shape} from './generalShape'

 class Ellipse extends Shape {
    constructor(x, y, width, height){
        super(x, y);
        this.y = y ? y : -height/2;
        this.heigth = height;
        this.type = 'ellipse';
        this.drawEllipse(0, 0, width, height);

        this.area = Math.round(Math.PI *this.width/2 * this.height/2);
        this.endFill();
    }
}

export {Ellipse}