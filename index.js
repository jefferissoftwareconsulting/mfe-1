const template = document.createElement('template');
template.innerHTML = `
<div>
    Hello from MFE-1
</div>
`

class Rating extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('connected')
    document.addEventListener('eventBus', (e) => {
      console.log('in MFE-1 event', e)
    })
  }

  adoptedCallback() {
    console.log('adopted')
  }

  disconnectedCallback() {
    console.log('disconnected')
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      console.log(`${name} changed from ${oldVal} to ${newVal}`)
    }
  }
}

window.customElements.define('mfe-one', Rating);