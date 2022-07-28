import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MfeOne extends LitElement {
  static eventBus: any

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      font-family: sans-serif;
      border: 1px solid cyan;
      background: rgba(0,255,255,.1)
    }
  `;

  @property({ type: String }) title = 'MFE-1';

  @property({ type: Number }) counter = 0;

  connectedCallback() {
    super.connectedCallback()

    console.log('window?', window)

    setTimeout(() => {
      MfeOne.eventBus = (window as any).globalEventBus
      console.log('Connected with eventBus', MfeOne.eventBus)
      MfeOne.eventBus.addEventListener((event: any) => {
        console.log('in MFE-1 event', event)
        switch(event.topic) {
          case 'mfe1:increment':
            this.counter += 1;
        }
      })
    }, 5000)
  }

  __increment() {
    MfeOne.eventBus.emit( { topic: 'mfe1:increment' })
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <p>count: ${this.counter}</p>
      <button @click=${this.__increment}>Increment</button>
    `;
  }
}
