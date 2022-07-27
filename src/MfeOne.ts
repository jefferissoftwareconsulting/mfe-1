import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MfeOne extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      font-family: sans-serif;
      color: #f0f;
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('eventBus', ({detail}: any) => {
      console.log('in MFE-1 event.detail', detail)
      switch(detail.topic) {
        case 'mfe1:increment':
          this.counter += 1;
      }
    })
  }

  __increment() {
    this.counter += 1;
    document.dispatchEvent(new CustomEvent('eventBus', { detail: { topic: 'mfe1:increment', payload: this.counter } }))
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>Increment</button>
    `;
  }
}
