import { LitElement } from "lit";
export declare class MfeOne extends LitElement {
    eventBus: any;
    static styles: import("lit").CSSResult;
    constructor();
    bgColor: string;
    settingsFieldBgColor: string;
    settingsMode: boolean;
    title: string;
    counter: number;
    connectedCallback(): void;
    __increment(): void;
    __showSettings(): void;
    __setBgColor(e: {
        target: {
            value: string;
        };
    }): void;
    __saveSettings(): void;
    render(): import("lit-html").TemplateResult<1>;
}
