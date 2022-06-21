import * as PIXI from 'pixi.js';

class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    startFall(){
        this.view.gameArea();
        this.playGame();

        const container = new PIXI.Container();
        container.hitArea = new PIXI.Rectangle(0, 0, this.model.pixiSceneWidth, this.model.pixiSceneHeight);
        container.interactive = true;
        this.model.pixiScene.stage.addChild(container);

        container.on('click', (e) => {
            const positionApp = this.model.app.getBoundingClientRect();
            const X = e.data.originalEvent.clientX - positionApp.x;
            const Y = e.data.originalEvent.clientY - positionApp.y;
            const randomShape = this.view.createRandomShape(X, Y);
            this.model.countShapes++;
            this.model.areaShapes += randomShape.area;
            this.view.showInfoShape();
            this.model.shapes.push(randomShape);
            this.model.pixiScene.stage.addChild(randomShape);
            randomShape.on('click', () => {
                // e.stopPropagation();
                this.view.removeShape(randomShape);
            });
        });
        this.model.gravityButton.addEventListener('click', (e) => {
            this.model.gravity = +e.target.value;

        });
        this.model.generatedButton.addEventListener('click', (e) => {
            this.model.generatedPerSec = +e.target.value;
        });
    }

    createGame(){
        for (let i = 0; i < this.model.generatedPerSec; i++){
            const shape = this.view.createShape();
            this.model.countShapes++;
            this.model.areaShapes += shape.area;
            this.view.showInfoShape();
            this.model.shapes.push(shape);
            this.model.pixiScene.stage.addChild(shape);
            shape.on('click', () => {
                // e.stopPropagation();
                this.view.removeShape(shape);
            });
        }
    }

    playGame(){
        let i = 0;
        const step = () => {
            if (++i % this.model.interval === 0) this.createGame();
            requestAnimationFrame(step);
        }
        step();
        this.model.pixiScene.ticker.add(() => {
            this.model.shapes.map(s => {
                s.y += this.model.gravity;
                if (s.y >= this.model.pixiSceneHeight + s.heigth/2) {
                    this.view.removeShape(s);
                }
            })
        })
    }
}

export {Controller}