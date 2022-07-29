import { __assign, __decorate, __extends, __makeTemplateObject } from "tslib";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import eventBus from "./lib/event-bus.js";
import config from "./config.js";
var MfeOne = /** @class */ (function (_super) {
  __extends(MfeOne, _super);
  function MfeOne() {
    var _this = _super.call(this) || this;
    _this.settings = {};
    _this.settingsFieldBgColor = "";
    _this.settingsMode = false;
    _this.title = "MFE-1";
    _this.counter = 0;
    // @ts-ignore
    _this.settingsMode = false;
    fetch(config.settingsUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (settings) {
        return (_this.settings = settings);
      })
      .catch(function (err) {
        return console.error(err);
      });
    return _this;
  }
  MfeOne.prototype.connectedCallback = function () {
    var _this = this;
    _super.prototype.connectedCallback.call(this);
    this.eventBus = eventBus();
    this.eventBus.addListener(function (event) {
      console.log("in MFE-1 event", event);
      switch (event.topic) {
        case "mfe1:increment":
          _this.counter += 1;
      }
    });
  };
  MfeOne.prototype.__increment = function () {
    this.eventBus.emit({ topic: "mfe1:increment" });
  };
  MfeOne.prototype.__showSettings = function () {
    this.settingsMode = true;
  };
  MfeOne.prototype.__setBgColor = function (e) {
    this.settingsFieldBgColor = e.target.value;
  };
  MfeOne.prototype.__saveSettings = function () {
    var _this = this;
    var updatedSettings = __assign(__assign({}, this.settings), {
      bgColor: this.settingsFieldBgColor,
    });
    fetch(config.settingsUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSettings),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (settings) {
        return (_this.settings = settings);
      });
    this.settingsMode = false;
  };
  MfeOne.prototype.render = function () {
    if (Object.keys(this.settings).length === 0)
      return html(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [" <div>Loading settings...</div> "],
            [" <div>Loading settings...</div> "]
          ))
      );
    return this.settingsMode
      ? html(
          templateObject_2 ||
            (templateObject_2 = __makeTemplateObject(
              [
                '\n          <div\n            class="container"\n            style="background-color: ',
                '"\n          >\n            <h2>',
                '</h2>\n            <div>\n              <label>Background colour</label>\n              <input type="text" @input="',
                '" />\n            </div>\n            <p><button @click=',
                ">Done</button></p>\n          </div>\n        ",
              ],
              [
                '\n          <div\n            class="container"\n            style="background-color: ',
                '"\n          >\n            <h2>',
                '</h2>\n            <div>\n              <label>Background colour</label>\n              <input type="text" @input="',
                '" />\n            </div>\n            <p><button @click=',
                ">Done</button></p>\n          </div>\n        ",
              ]
            )),
          this.settings.bgColor,
          this.title,
          this.__setBgColor,
          this.__saveSettings
        )
      : html(
          templateObject_3 ||
            (templateObject_3 = __makeTemplateObject(
              [
                '\n          <div\n            class="container"\n            style="background-color: ',
                '"\n          >\n            <h2>',
                "</h2>\n            <p>count: ",
                "</p>\n            <p><button @click=",
                ">Increment</button></p>\n            <p><button @click=",
                ">Settings</button></p>\n          </div>\n        ",
              ],
              [
                '\n          <div\n            class="container"\n            style="background-color: ',
                '"\n          >\n            <h2>',
                "</h2>\n            <p>count: ",
                "</p>\n            <p><button @click=",
                ">Increment</button></p>\n            <p><button @click=",
                ">Settings</button></p>\n          </div>\n        ",
              ]
            )),
          this.settings.bgColor,
          this.title,
          this.counter,
          this.__increment,
          this.__showSettings
        );
  };
  MfeOne.styles = css(
    templateObject_4 ||
      (templateObject_4 = __makeTemplateObject(
        [
          "\n    :host {\n      display: block;\n      font-family: sans-serif;\n    }\n    .container {\n      padding: 25px;\n      border: 1px solid cyan;\n    }\n  ",
        ],
        [
          "\n    :host {\n      display: block;\n      font-family: sans-serif;\n    }\n    .container {\n      padding: 25px;\n      border: 1px solid cyan;\n    }\n  ",
        ]
      ))
  );
  __decorate(
    [property({ type: Object })],
    MfeOne.prototype,
    "settings",
    void 0
  );
  __decorate(
    [property({ type: String })],
    MfeOne.prototype,
    "settingsFieldBgColor",
    void 0
  );
  __decorate(
    [property({ type: Boolean })],
    MfeOne.prototype,
    "settingsMode",
    void 0
  );
  __decorate([property({ type: String })], MfeOne.prototype, "title", void 0);
  __decorate([property({ type: Number })], MfeOne.prototype, "counter", void 0);
  return MfeOne;
})(LitElement);
export { MfeOne };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MfeOne.js.map
