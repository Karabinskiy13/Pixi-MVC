import {Shape} from "./generalShape";
 class Triangle extends Shape {
    constructor(x, y, randomWidth, height) {
        super(x, y);
        this.randomWidth = randomWidth;
        this.heigth = height;
        this.y = y ? y : -height;
        this.type = 'triangle';
        this.side3vertex = [
            0, -height / 2, -randomWidth, height, randomWidth / 2, height / 2
        ];
        this.drawPolygon(this.side3vertex);
        this.area = Math.round(1 / 2 * this.width * this.heigth * Math.sin(this.width / this.heigth));
        this.endFill();
    }
}

export {Triangle}