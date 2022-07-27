import "./main.css";


const $cf838c15c8b009ba$var$template = document.createElement("template");
$cf838c15c8b009ba$var$template.innerHTML = `
<div class="container">
    Hello from MFE-1
</div>
`;
class $cf838c15c8b009ba$var$Rating extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({
            mode: "open"
        });
        shadowRoot.appendChild($cf838c15c8b009ba$var$template.content.cloneNode(true));
    }
    connectedCallback() {
        console.log("connected");
        document.addEventListener("eventBus", (e)=>{
            console.log("in MFE-1 event", e);
        });
    }
    adoptedCallback() {
        console.log("adopted");
    }
    disconnectedCallback() {
        console.log("disconnected");
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) console.log(`${name} changed from ${oldVal} to ${newVal}`);
    }
}
window.customElements.define("mfe-one", $cf838c15c8b009ba$var$Rating);


//# sourceMappingURL=module.js.map
