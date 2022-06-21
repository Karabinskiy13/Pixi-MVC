import * as PIXI from 'pixi.js';

import {fallShape} from "./switcherShape";
import {random} from "../formuls";

export class View {
    constructor(model){
        this.model = model;
    }

    gameArea(){
        this.model.pixiScene = new PIXI.Application({
            width: this.model.pixiSceneWidth,
            height: this.model.pixiSceneHeight,
            backgroundColor: 0xFFFF00,
            resolution: 1
        });
        this.model.app.appendChild(this.model.pixiScene.view);
    }

    createShape(){
        return fallShape(random(0 , 4));
    }

    createRandomShape(x, y) {
        return fallShape(random(0 , 4), x, y);

    }

    removeShape(shape) {
        shape.clear();
        this.model.countShapes--;
        this.model.areaShapes -= shape.area;
        this.showInfoShape();
        const index = this.model.shapes.indexOf(shape);
        this.model.pixiScene.stage.removeChild(shape);
        if (index > -1) {
            this.model.shapes.splice(index, 1);
        }
    }

    showInfoShape(){
        this.model.counterBlock.innerHTML = this.model.countShapes;
        this.model.areaBlock.innerHTML = this.model.areaShapes + 'px^2';
    }
}