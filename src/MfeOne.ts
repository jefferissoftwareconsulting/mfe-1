import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import eventBus from "./lib/event-bus";

export class MfeOne extends LitElement {
  eventBus: any;

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      font-family: sans-serif;
      border: 1px solid cyan;
      background: rgba(0, 255, 255, 0.1);
    }
  `;

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

  render() {
    return html`
      <h2>${this.title}</h2>
      <p>count: ${this.counter}</p>
      <button @click=${this.__increment}>Increment</button>
    `;
  }
}
