import * as PIXI from "pixi.js";

import { TestController } from "./controllers";


export function doPix(ctrl: TestController) {

    const appOptions = {
        backgroundColor: 0xffffff,
        resolution: 1
    };
    const app = new PIXI.Application(640, 640, appOptions);
    document.body.appendChild(app.view);
    ctrl.pixApp = app;
    
    const textStyle = new PIXI.TextStyle({
        fontFamily: "Consolas",
        fontSize: 12,
    });

    const label = ctrl.model.text();
    const textMetrics = PIXI.TextMetrics.measureText(label, textStyle);

    const g = new PIXI.Graphics();
    g.beginFill(0xeeeeee);
    g.lineStyle(1, 0x000000);
    g.drawRect(0, 0, textMetrics.width + 10, textMetrics.height + 10);
    g.x = 0;
    g.y = 0;
    app.stage.addChild(g);
    ctrl.pixGraphics = g;

   const text = new PIXI.Text(label, textStyle);
    text.x = 12;
    text.y = 12;
    g.addChild(text);
    ctrl.pixText = text;
}