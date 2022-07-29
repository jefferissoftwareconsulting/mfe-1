import { __decorate } from "tslib";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import eventBus from "./lib/event-bus";
export class MfeOne extends LitElement {
    constructor() {
        super();
        this.bgColor = "rgba(0, 255, 255, 0.1)";
        this.settingsFieldBgColor = "";
        this.settingsMode = false;
        this.title = "MFE-1";
        this.counter = 0;
        // @ts-ignore
        this.settingsMode = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventBus = eventBus();
        this.eventBus.addListener((event) => {
            console.log("in MFE-1 event", event);
            switch (event.topic) {
                case "mfe1:increment":
                    this.counter += 1;
            }
        });
    }
    __increment() {
        this.eventBus.emit({ topic: "mfe1:increment" });
    }
    __showSettings() {
        this.settingsMode = true;
    }
    __setBgColor(e) {
        this.settingsFieldBgColor = e.target.value;
    }
    __saveSettings() {
        this.bgColor = this.settingsFieldBgColor;
        this.settingsMode = false;
    }
    render() {
        return this.settingsMode
            ? html `
          <div class="container" style="background-color: ${this.bgColor}">
            <h2>${this.title}</h2>
            <div>
              <label>Background colour</label>
              <input type="text" @input="${this.__setBgColor}" />
            </div>
            <p><button @click=${this.__saveSettings}>Done</button></p>
          </div>
        `
            : html `
          <div class="container" style="background-color: ${this.bgColor}">
            <h2>${this.title}</h2>
            <p>count: ${this.counter}</p>
            <p><button @click=${this.__increment}>Increment</button></p>
            <p><button @click=${this.__showSettings}>Settings</button></p>
          </div>
        `;
    }
}
MfeOne.styles = css `
    :host {
      display: block;
      font-family: sans-serif;
    }
    .container {
      padding: 25px;
      border: 1px solid cyan;
    }
  `;
__decorate([
    property({ type: String })
], MfeOne.prototype, "bgColor", void 0);
__decorate([
    property({ type: String })
], MfeOne.prototype, "settingsFieldBgColor", void 0);
__decorate([
    property({ type: Boolean })
], MfeOne.prototype, "settingsMode", void 0);
__decorate([
    property({ type: String })
], MfeOne.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], MfeOne.prototype, "counter", void 0);
//# sourceMappingURL=MfeOne.js.map