var $6XXLb$swchelperslib_ts_decoratejs = require("@swc/helpers/lib/_ts_decorate.js");
var $6XXLb$lit = require("lit");
var $6XXLb$litdecoratorsjs = require("lit/decorators.js");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "MfeOne", () => $620b956ab50fbc82$export$fd6e372b6dd169b5);



const $ecd5f979ff147a4e$var$eventBus = ()=>({
        addListener: (listener)=>{
            window.globalEventBus ? window.globalEventBus.addListener(listener) : window.addEventListener("eventBus", (e)=>listener(e.detail));
        },
        emit: (event)=>{
            window.globalEventBus ? window.globalEventBus.emit(event) : window.dispatchEvent(new CustomEvent("eventBus", {
                detail: event
            }));
        }
    });
var $ecd5f979ff147a4e$export$2e2bcd8739ae039 = $ecd5f979ff147a4e$var$eventBus;


const $4b08cbcddf2af232$var$apiHost = "http://localhost:8001";
var $4b08cbcddf2af232$export$2e2bcd8739ae039 = {
    settingsUrl: `${$4b08cbcddf2af232$var$apiHost}/settings`
};


class $620b956ab50fbc82$export$fd6e372b6dd169b5 extends (0, $6XXLb$lit.LitElement) {
    static styles = (0, $6XXLb$lit.css)`
    :host {
      display: block;
      font-family: sans-serif;
    }
    .container {
      padding: 25px;
      border: 1px solid cyan;
    }
  `;
    constructor(){
        super();
        this.settings = {};
        this.settingsFieldBgColor = "";
        this.settingsMode = false;
        this.title = "MFE-1";
        this.counter = 0;
        // @ts-ignore
        this.settingsMode = false;
        fetch((0, $4b08cbcddf2af232$export$2e2bcd8739ae039).settingsUrl).then((res)=>res.json()).then((settings)=>this.settings = settings).catch((err)=>console.error(err));
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventBus = (0, $ecd5f979ff147a4e$export$2e2bcd8739ae039)();
        this.eventBus.addListener((event)=>{
            console.log("in MFE-1 event", event);
            switch(event.topic){
                case "mfe1:increment":
                    this.counter += 1;
            }
        });
    }
    __increment() {
        this.eventBus.emit({
            topic: "mfe1:increment"
        });
    }
    __showSettings() {
        this.settingsMode = true;
    }
    __setBgColor(e) {
        this.settingsFieldBgColor = e.target.value;
    }
    __saveSettings() {
        const updatedSettings = {
            ...this.settings,
            bgColor: this.settingsFieldBgColor
        };
        fetch((0, $4b08cbcddf2af232$export$2e2bcd8739ae039).settingsUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedSettings)
        }).then((res)=>res.json()).then((settings)=>this.settings = settings);
        this.settingsMode = false;
    }
    render() {
        if (Object.keys(this.settings).length === 0) return (0, $6XXLb$lit.html)` <div>Loading settings...</div> `;
        return this.settingsMode ? (0, $6XXLb$lit.html)`
          <div
            class="container"
            style="background-color: ${this.settings.bgColor}"
          >
            <h2>${this.title}</h2>
            <div>
              <label>Background colour</label>
              <input type="text" @input="${this.__setBgColor}" />
            </div>
            <p><button @click=${this.__saveSettings}>Done</button></p>
          </div>
        ` : (0, $6XXLb$lit.html)`
          <div
            class="container"
            style="background-color: ${this.settings.bgColor}"
          >
            <h2>${this.title}</h2>
            <p>count: ${this.counter}</p>
            <p><button @click=${this.__increment}>Increment</button></p>
            <p><button @click=${this.__showSettings}>Settings</button></p>
          </div>
        `;
    }
}
(0, ($parcel$interopDefault($6XXLb$swchelperslib_ts_decoratejs)))([
    (0, $6XXLb$litdecoratorsjs.property)({
        type: Object
    })
], $620b956ab50fbc82$export$fd6e372b6dd169b5.prototype, "settings", void 0);
(0, ($parcel$interopDefault($6XXLb$swchelperslib_ts_decoratejs)))([
    (0, $6XXLb$litdecoratorsjs.property)({
        type: String
    })
], $620b956ab50fbc82$export$fd6e372b6dd169b5.prototype, "settingsFieldBgColor", void 0);
(0, ($parcel$interopDefault($6XXLb$swchelperslib_ts_decoratejs)))([
    (0, $6XXLb$litdecoratorsjs.property)({
        type: Boolean
    })
], $620b956ab50fbc82$export$fd6e372b6dd169b5.prototype, "settingsMode", void 0);
(0, ($parcel$interopDefault($6XXLb$swchelperslib_ts_decoratejs)))([
    (0, $6XXLb$litdecoratorsjs.property)({
        type: String
    })
], $620b956ab50fbc82$export$fd6e372b6dd169b5.prototype, "title", void 0);
(0, ($parcel$interopDefault($6XXLb$swchelperslib_ts_decoratejs)))([
    (0, $6XXLb$litdecoratorsjs.property)({
        type: Number
    })
], $620b956ab50fbc82$export$fd6e372b6dd169b5.prototype, "counter", void 0);




//# sourceMappingURL=index.js.map
