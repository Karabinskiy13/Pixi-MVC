export class Model {

    pixiScene = null;
    app = document.querySelector("#root");
    counterBlock = document.querySelector("#counter");
    areaBlock = document.querySelector("#area");
    generatedButton = document.querySelector("#generated");
    gravityButton = document.querySelector("#gravity");
    pixiSceneWidth = 800;
    pixiSceneHeight = 400;
    interval = 60;


    shapes = [];
    gravity = +this.gravityButton.value;
    generatedPerSec = +this.generatedButton.value;
    countShapes = 0;
    areaShapes = 0;
}