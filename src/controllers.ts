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

    public pixText?: PIXI.Text = undefined;
    public pixApp?: PIXI.Application = undefined;

    updateText(): void {
        //S(() => this.model.text(text));
        if (this.pixText)
            this.pixText.text = this.model.text();
    }

    incrementCounter(): void {
        S.root(() => {
            const c = this.model.counter();
            S(() => this.model.counter(c + 1));
        });
    }
}