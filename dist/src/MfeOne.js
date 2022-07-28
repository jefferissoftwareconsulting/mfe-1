var _a;
import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
const eventBus = (_a = window.globalEventBus) !== null && _a !== void 0 ? _a : document;
export class MfeOne extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'MFE-1';
        this.counter = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        eventBus.addEventListener('eventBus', ({ detail }) => {
            console.log('in MFE-1 event.detail', detail);
            switch (detail.topic) {
                case 'mfe1:increment':
                    this.counter += 1;
            }
        });
    }
    __increment() {
        eventBus.dispatchEvent(new CustomEvent('eventBus', { detail: { topic: 'mfe1:increment' } }));
    }
    render() {
        return html `
      <h2>${this.title}</h2>
      <p>count: ${this.counter}</p>
      <button @click=${this.__increment}>Increment</button>
    `;
    }
}
MfeOne.styles = css `
    :host {
      display: block;
      padding: 25px;
      font-family: sans-serif;
      border: 1px solid cyan;
      background: rgba(0,255,255,.1)
    }
  `;
__decorate([
    property({ type: String })
], MfeOne.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], MfeOne.prototype, "counter", void 0);
//# sourceMappingURL=MfeOne.js.map