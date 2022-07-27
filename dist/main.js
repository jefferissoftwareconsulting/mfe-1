require("./main.css");


const $4fa36e821943b400$var$template = document.createElement("template");
$4fa36e821943b400$var$template.innerHTML = `
<div class="container">
    Hello from MFE-1
</div>
`;
class $4fa36e821943b400$var$Rating extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({
            mode: "open"
        });
        shadowRoot.appendChild($4fa36e821943b400$var$template.content.cloneNode(true));
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
window.customElements.define("mfe-one", $4fa36e821943b400$var$Rating);


//# sourceMappingURL=main.js.map
