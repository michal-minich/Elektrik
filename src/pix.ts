import * as PIXI from "pixi.js";

import { TestController } from "./controllers";


export function doPix(ctrl: TestController) {
    
    var app = new PIXI.Application(640, 360, { backgroundColor: 0x1099bb });
    document.body.appendChild(app.view);
    var circle = new PIXI.Graphics();
    circle.beginFill(0x5cafe2);
    circle.drawCircle(0, 0, 80);
    circle.x = 320;
    circle.y = 180;
    app.stage.addChild(circle);

    var basicText = new PIXI.Text('Basic text in pixi');
    basicText.x = 30;
    basicText.y = 90;

    app.stage.addChild(basicText);

    ctrl.pixText = basicText;
    ctrl.pixApp = app;
}