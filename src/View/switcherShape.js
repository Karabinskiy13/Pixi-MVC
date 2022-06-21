
import {random} from "../formuls";
import {Circle} from "../Model/Shapes/circle";
import {Rectangle} from "../Model/Shapes/rectangle";
import {Triangle} from "../Model/Shapes/triangle";
import {Ellipse} from "../Model/Shapes/ellipse";
import {Pentagon} from "../Model/Shapes/pentagon";
import {Hexagon} from "../Model/Shapes/hexagon";


const fallShape = (number, x = random(0, 800), y) => {
    const minWidth = 25,
        maxWidth = 100,
        minHeight = 25,
        maxHeight = 100;

    const vertex5 = [
        random(maxWidth / 3, maxWidth * 2 / 3),
        random(0, maxHeight / 3),
        random(maxWidth * 2 / 3, maxWidth),
        random(maxHeight / 3, maxHeight * 2 / 3),
        random(maxWidth / 2, maxWidth),
        random(maxHeight * 2 / 3, maxHeight),
        random(0, maxWidth/2),
        random(maxHeight * 2 / 3, maxHeight),
        random(0, maxWidth / 3),
        random(maxHeight / 3, maxHeight * 2 / 3)
    ];

    const vertex6 = [
        random(maxWidth / 4, maxWidth / 2),
        random(0, maxHeight/ 3),
        random(maxWidth / 2, maxWidth * 3 / 4),
        random(0, maxHeight / 3),
        random(maxWidth * 3 / 4, maxWidth),
        random(maxHeight / 3, maxHeight * 2 / 3),
        random(maxWidth/2, maxWidth *3/4),
        random(maxHeight * 2 / 3, maxHeight),
        random(maxWidth / 4, maxWidth / 2),
        random(maxHeight *2/ 3, maxHeight),
        random(0, maxWidth / 3),
        random(maxHeight / 3, maxHeight *2 /3),
    ];

    const typeShape = ['circle', 'rectangle', 'ellipse', 'triangle', 'pentagon', 'hexagon'];
    const type = typeShape[number];

    const randomWidth = random(minWidth, maxWidth);
    const randomHeight = random(minHeight, maxHeight);
    switch (type){
        case 'circle':
            return new Circle(x, y, randomWidth);
        case 'rectangle':
            return new Rectangle(x, y, randomWidth, randomHeight);
        case 'ellipse':
            return new Ellipse(x, y, randomWidth, randomHeight);
        case 'triangle':
            return new Triangle(x, y, randomWidth, randomHeight);
        case 'pentagon':
            return new Pentagon(x, y, vertex5);
        case 'hexagon':
            return new Hexagon(x, y, vertex6);
        default:
            return new Circle(x, y, randomWidth);
    }
}
export {fallShape}
