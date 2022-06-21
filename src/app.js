import * as PIXI from 'pixi.js'
import {Model} from "./Model/model";
import {Controller} from "./Controller/controller";
import {View} from "./View/view";

const model = new Model();
const view  = new View(model);
const controller = new Controller(view, model);

controller.startFall();