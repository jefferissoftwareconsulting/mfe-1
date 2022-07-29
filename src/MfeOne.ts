import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import eventBus from "./lib/event-bus";

export class MfeOne extends LitElement {
  eventBus: any;

  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
    }
    .container {
      padding: 25px;
      border: 1px solid cyan;
    }
  `;

  constructor() {
    super();
    // @ts-ignore
    this.settingsMode = false;
  }

  @property({ type: String }) bgColor = "rgba(0, 255, 255, 0.1)";

  @property({ type: String }) settingsFieldBgColor = "";

  @property({ type: Boolean }) settingsMode = false;

  @property({ type: String }) title = "MFE-1";

  @property({ type: Number }) counter = 0;

  connectedCallback() {
    super.connectedCallback();
    this.eventBus = eventBus();

    this.eventBus.addListener((event: any) => {
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

  __setBgColor(e: { target: { value: string } }) {
    this.settingsFieldBgColor = e.target.value;
  }

  __saveSettings() {
    this.bgColor = this.settingsFieldBgColor;
    this.settingsMode = false;
  }

  render() {
    return this.settingsMode
      ? html`
          <div class="container" style="background-color: ${this.bgColor}">
            <h2>${this.title}</h2>
            <div>
              <label>Background colour</label>
              <input type="text" @input="${this.__setBgColor}" />
            </div>
            <p><button @click=${this.__saveSettings}>Done</button></p>
          </div>
        `
      : html`
          <div class="container" style="background-color: ${this.bgColor}">
            <h2>${this.title}</h2>
            <p>count: ${this.counter}</p>
            <p><button @click=${this.__increment}>Increment</button></p>
            <p><button @click=${this.__showSettings}>Settings</button></p>
          </div>
        `;
  }
}
