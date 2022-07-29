"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MfeOne = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var event_bus_1 = require("./lib/event-bus");
var config_1 = require("../config");
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
        fetch(config_1["default"].settingsUrl)
            .then(function (res) { return res.json(); })
            .then(function (settings) { return (_this.settings = settings); })["catch"](function (err) { return console.error(err); });
        return _this;
    }
    MfeOne.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.eventBus = (0, event_bus_1["default"])();
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
        var updatedSettings = __assign(__assign({}, this.settings), { bgColor: this.settingsFieldBgColor });
        fetch(config_1["default"].settingsUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedSettings)
        })
            .then(function (res) { return res.json(); })
            .then(function (settings) { return (_this.settings = settings); });
        this.settingsMode = false;
    };
    MfeOne.prototype.render = function () {
        if (Object.keys(this.settings).length === 0)
            return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <div>Loading settings...</div> "], [" <div>Loading settings...</div> "])));
        return this.settingsMode
            ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          <div\n            class=\"container\"\n            style=\"background-color: ", "\"\n          >\n            <h2>", "</h2>\n            <div>\n              <label>Background colour</label>\n              <input type=\"text\" @input=\"", "\" />\n            </div>\n            <p><button @click=", ">Done</button></p>\n          </div>\n        "], ["\n          <div\n            class=\"container\"\n            style=\"background-color: ", "\"\n          >\n            <h2>", "</h2>\n            <div>\n              <label>Background colour</label>\n              <input type=\"text\" @input=\"", "\" />\n            </div>\n            <p><button @click=", ">Done</button></p>\n          </div>\n        "])), this.settings.bgColor, this.title, this.__setBgColor, this.__saveSettings) : (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          <div\n            class=\"container\"\n            style=\"background-color: ", "\"\n          >\n            <h2>", "</h2>\n            <p>count: ", "</p>\n            <p><button @click=", ">Increment</button></p>\n            <p><button @click=", ">Settings</button></p>\n          </div>\n        "], ["\n          <div\n            class=\"container\"\n            style=\"background-color: ", "\"\n          >\n            <h2>", "</h2>\n            <p>count: ", "</p>\n            <p><button @click=", ">Increment</button></p>\n            <p><button @click=", ">Settings</button></p>\n          </div>\n        "])), this.settings.bgColor, this.title, this.counter, this.__increment, this.__showSettings);
    };
    MfeOne.styles = (0, lit_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    :host {\n      display: block;\n      font-family: sans-serif;\n    }\n    .container {\n      padding: 25px;\n      border: 1px solid cyan;\n    }\n  "], ["\n    :host {\n      display: block;\n      font-family: sans-serif;\n    }\n    .container {\n      padding: 25px;\n      border: 1px solid cyan;\n    }\n  "])));
    __decorate([
        (0, decorators_js_1.property)({ type: Object })
    ], MfeOne.prototype, "settings");
    __decorate([
        (0, decorators_js_1.property)({ type: String })
    ], MfeOne.prototype, "settingsFieldBgColor");
    __decorate([
        (0, decorators_js_1.property)({ type: Boolean })
    ], MfeOne.prototype, "settingsMode");
    __decorate([
        (0, decorators_js_1.property)({ type: String })
    ], MfeOne.prototype, "title");
    __decorate([
        (0, decorators_js_1.property)({ type: Number })
    ], MfeOne.prototype, "counter");
    return MfeOne;
}(lit_1.LitElement));
exports.MfeOne = MfeOne;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
