import S from "s-js";
import * as PIXI from "pixi.js";


export interface ITestController {
    updateText(text: string): void;
    incrementCounter(): void;
}


export class TestController implements ITestController
{
    model = {
        text: S.data("Abc"),
        counter: S.data(0)
    };
    
    pixApp?: PIXI.Application | undefined = undefined;
    pixGraphics?: PIXI.Graphics | undefined = undefined;
    pixText?: PIXI.Text | undefined = undefined;

    updateText(): void {
        const label = this.model.text();
        //S(() => this.model.text(text));
        if (this.pixText) {
            this.pixText.text = label;
        }
        if (this.pixGraphics) {
            const textStyle = new PIXI.TextStyle({
                fontFamily: "Consolas",
                fontSize: 12,
            });
            const textMetrics = PIXI.TextMetrics.measureText(label, textStyle);
            this.pixGraphics.clear();
            this.pixGraphics.lineStyle(1, 0x000000);
            this.pixGraphics.drawRect(5, 5, textMetrics.width + 10, textMetrics.height + 10);
        }
    }

    incrementCounter(): void {
        S.root(() => {
            const c = this.model.counter();
            S(() => this.model.counter(c + 1));
        });
    }
}