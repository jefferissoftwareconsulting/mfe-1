import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export class MfeOne extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('eventBus', ({ detail }) => {
            console.log('in MFE-1 event.detail', detail);
            switch (detail.topic) {
                case 'mfe1:increment':
                    this.counter += 1;
            }
        });
    }
    __increment() {
        this.counter += 1;
        document.dispatchEvent(new CustomEvent('eventBus', { detail: { topic: 'mfe1:increment', payload: this.counter } }));
    }
    render() {
        return html `
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>Increment</button>
    `;
    }
}
MfeOne.styles = css `
    :host {
      display: block;
      padding: 25px;
      font-family: sans-serif;
      color: #f0f;
    }
  `;
__decorate([
    property({ type: String })
], MfeOne.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], MfeOne.prototype, "counter", void 0);
//# sourceMappingURL=MfeOne.js.map