/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var $3402b05038f0c645$var$extendStatics = function(d1, b1) {
    $3402b05038f0c645$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $3402b05038f0c645$var$extendStatics(d1, b1);
};
function $3402b05038f0c645$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $3402b05038f0c645$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $3402b05038f0c645$export$18ce0697a983be9b = function() {
    $3402b05038f0c645$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $3402b05038f0c645$export$18ce0697a983be9b.apply(this, arguments);
};
function $3402b05038f0c645$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $3402b05038f0c645$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $3402b05038f0c645$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $3402b05038f0c645$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $3402b05038f0c645$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $3402b05038f0c645$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $3402b05038f0c645$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $3402b05038f0c645$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $3402b05038f0c645$export$45d3717a4c69092e(o, m, p);
}
function $3402b05038f0c645$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $3402b05038f0c645$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $3402b05038f0c645$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($3402b05038f0c645$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $3402b05038f0c645$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $3402b05038f0c645$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $3402b05038f0c645$export$10c90e4f7922046c(v) {
    return this instanceof $3402b05038f0c645$export$10c90e4f7922046c ? (this.v = v, this) : new $3402b05038f0c645$export$10c90e4f7922046c(v);
}
function $3402b05038f0c645$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $3402b05038f0c645$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $3402b05038f0c645$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $3402b05038f0c645$export$10c90e4f7922046c(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function $3402b05038f0c645$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $3402b05038f0c645$export$19a8beecd37a4c45 === "function" ? $3402b05038f0c645$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $3402b05038f0c645$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $3402b05038f0c645$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $3402b05038f0c645$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $3402b05038f0c645$export$45d3717a4c69092e(result, mod, k);
    }
    $3402b05038f0c645$var$__setModuleDefault(result, mod);
    return result;
}
function $3402b05038f0c645$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $3402b05038f0c645$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $3402b05038f0c645$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $3402b05038f0c645$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}



/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $80725b265d16b58f$export$b4d10f6001c083c2 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $80725b265d16b58f$var$e = Symbol(), $80725b265d16b58f$var$n = new WeakMap;
class $80725b265d16b58f$export$505d1e8739bad805 {
    constructor(t1, n1, s1){
        if (this._$cssResult$ = !0, s1 !== $80725b265d16b58f$var$e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t1, this.t = n1;
    }
    get styleSheet() {
        let e1 = this.o;
        const s2 = this.t;
        if ($80725b265d16b58f$export$b4d10f6001c083c2 && void 0 === e1) {
            const t2 = void 0 !== s2 && 1 === s2.length;
            t2 && (e1 = $80725b265d16b58f$var$n.get(s2)), void 0 === e1 && ((this.o = e1 = new CSSStyleSheet).replaceSync(this.cssText), t2 && $80725b265d16b58f$var$n.set(s2, e1));
        }
        return e1;
    }
    toString() {
        return this.cssText;
    }
}
const $80725b265d16b58f$export$8d80f9cac07cdb3 = (t3)=>new $80725b265d16b58f$export$505d1e8739bad805("string" == typeof t3 ? t3 : t3 + "", void 0, $80725b265d16b58f$var$e), $80725b265d16b58f$export$dbf350e5966cf602 = (t4, ...n2)=>{
    const o1 = 1 === t4.length ? t4[0] : n2.reduce((e2, n3, s3)=>e2 + ((t5)=>{
            if (!0 === t5._$cssResult$) return t5.cssText;
            if ("number" == typeof t5) return t5;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(n3) + t4[s3 + 1], t4[0]);
    return new $80725b265d16b58f$export$505d1e8739bad805(o1, t4, $80725b265d16b58f$var$e);
}, $80725b265d16b58f$export$2ca4a66ec4cecb90 = (e3, n4)=>{
    $80725b265d16b58f$export$b4d10f6001c083c2 ? e3.adoptedStyleSheets = n4.map((t6)=>t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet) : n4.forEach((t7)=>{
        const n5 = document.createElement("style"), s4 = window.litNonce;
        void 0 !== s4 && n5.setAttribute("nonce", s4), n5.textContent = t7.cssText, e3.appendChild(n5);
    });
}, $80725b265d16b58f$export$ee69dfd951e24778 = $80725b265d16b58f$export$b4d10f6001c083c2 ? (t8)=>t8 : (t9)=>t9 instanceof CSSStyleSheet ? ((t10)=>{
        let e4 = "";
        for (const n6 of t10.cssRules)e4 += n6.cssText;
        return $80725b265d16b58f$export$8d80f9cac07cdb3(e4);
    })(t9) : t9;



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $cc6c4db09b89bcab$var$s;
const $cc6c4db09b89bcab$var$e = window.trustedTypes, $cc6c4db09b89bcab$var$r = $cc6c4db09b89bcab$var$e ? $cc6c4db09b89bcab$var$e.emptyScript : "", $cc6c4db09b89bcab$var$h = window.reactiveElementPolyfillSupport, $cc6c4db09b89bcab$export$7312b35fbf521afb = {
    toAttribute (t1, i1) {
        switch(i1){
            case Boolean:
                t1 = t1 ? $cc6c4db09b89bcab$var$r : null;
                break;
            case Object:
            case Array:
                t1 = null == t1 ? t1 : JSON.stringify(t1);
        }
        return t1;
    },
    fromAttribute (t2, i2) {
        let s1 = t2;
        switch(i2){
            case Boolean:
                s1 = null !== t2;
                break;
            case Number:
                s1 = null === t2 ? null : Number(t2);
                break;
            case Object:
            case Array:
                try {
                    s1 = JSON.parse(t2);
                } catch (t) {
                    s1 = null;
                }
        }
        return s1;
    }
}, $cc6c4db09b89bcab$export$53a6892c50694894 = (t3, i3)=>i3 !== t3 && (i3 == i3 || t3 == t3), $cc6c4db09b89bcab$var$l = {
    attribute: !0,
    type: String,
    converter: $cc6c4db09b89bcab$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $cc6c4db09b89bcab$export$53a6892c50694894
};
class $cc6c4db09b89bcab$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t4) {
        var i4;
        null !== (i4 = this.h) && void 0 !== i4 || (this.h = []), this.h.push(t4);
    }
    static get observedAttributes() {
        this.finalize();
        const t5 = [];
        return this.elementProperties.forEach((i5, s2)=>{
            const e1 = this._$Ep(s2, i5);
            void 0 !== e1 && (this._$Ev.set(e1, s2), t5.push(e1));
        }), t5;
    }
    static createProperty(t6, i6 = $cc6c4db09b89bcab$var$l) {
        if (i6.state && (i6.attribute = !1), this.finalize(), this.elementProperties.set(t6, i6), !i6.noAccessor && !this.prototype.hasOwnProperty(t6)) {
            const s3 = "symbol" == typeof t6 ? Symbol() : "__" + t6, e2 = this.getPropertyDescriptor(t6, s3, i6);
            void 0 !== e2 && Object.defineProperty(this.prototype, t6, e2);
        }
    }
    static getPropertyDescriptor(t7, i7, s4) {
        return {
            get () {
                return this[i7];
            },
            set (e3) {
                const r1 = this[t7];
                this[i7] = e3, this.requestUpdate(t7, r1, s4);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t8) {
        return this.elementProperties.get(t8) || $cc6c4db09b89bcab$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t9 = Object.getPrototypeOf(this);
        if (t9.finalize(), this.elementProperties = new Map(t9.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t10 = this.properties, i8 = [
                ...Object.getOwnPropertyNames(t10),
                ...Object.getOwnPropertySymbols(t10)
            ];
            for (const s5 of i8)this.createProperty(s5, t10[s5]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i9) {
        const s6 = [];
        if (Array.isArray(i9)) {
            const e4 = new Set(i9.flat(1 / 0).reverse());
            for (const i10 of e4)s6.unshift((0, $80725b265d16b58f$export$ee69dfd951e24778)(i10));
        } else void 0 !== i9 && s6.push((0, $80725b265d16b58f$export$ee69dfd951e24778)(i9));
        return s6;
    }
    static _$Ep(t11, i11) {
        const s7 = i11.attribute;
        return !1 === s7 ? void 0 : "string" == typeof s7 ? s7 : "string" == typeof t11 ? t11.toLowerCase() : void 0;
    }
    u() {
        var t12;
        this._$E_ = new Promise((t13)=>this.enableUpdating = t13), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t12 = this.constructor.h) || void 0 === t12 || t12.forEach((t14)=>t14(this));
    }
    addController(t15) {
        var i12, s8;
        (null !== (i12 = this._$ES) && void 0 !== i12 ? i12 : this._$ES = []).push(t15), void 0 !== this.renderRoot && this.isConnected && (null === (s8 = t15.hostConnected) || void 0 === s8 || s8.call(t15));
    }
    removeController(t16) {
        var i13;
        null === (i13 = this._$ES) || void 0 === i13 || i13.splice(this._$ES.indexOf(t16) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i14)=>{
            this.hasOwnProperty(i14) && (this._$Ei.set(i14, this[i14]), delete this[i14]);
        });
    }
    createRenderRoot() {
        var t17;
        const s9 = null !== (t17 = this.shadowRoot) && void 0 !== t17 ? t17 : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $80725b265d16b58f$export$2ca4a66ec4cecb90)(s9, this.constructor.elementStyles), s9;
    }
    connectedCallback() {
        var t18;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t18 = this._$ES) || void 0 === t18 || t18.forEach((t19)=>{
            var i15;
            return null === (i15 = t19.hostConnected) || void 0 === i15 ? void 0 : i15.call(t19);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t20;
        null === (t20 = this._$ES) || void 0 === t20 || t20.forEach((t21)=>{
            var i16;
            return null === (i16 = t21.hostDisconnected) || void 0 === i16 ? void 0 : i16.call(t21);
        });
    }
    attributeChangedCallback(t22, i, s10) {
        this._$AK(t22, s10);
    }
    _$EO(t23, i17, s11 = $cc6c4db09b89bcab$var$l) {
        var e5, r2;
        const h1 = this.constructor._$Ep(t23, s11);
        if (void 0 !== h1 && !0 === s11.reflect) {
            const n1 = (null !== (r2 = null === (e5 = s11.converter) || void 0 === e5 ? void 0 : e5.toAttribute) && void 0 !== r2 ? r2 : $cc6c4db09b89bcab$export$7312b35fbf521afb.toAttribute)(i17, s11.type);
            this._$El = t23, null == n1 ? this.removeAttribute(h1) : this.setAttribute(h1, n1), this._$El = null;
        }
    }
    _$AK(t24, i18) {
        var s12, e6;
        const r3 = this.constructor, h2 = r3._$Ev.get(t24);
        if (void 0 !== h2 && this._$El !== h2) {
            const t25 = r3.getPropertyOptions(h2), n2 = t25.converter, l1 = null !== (e6 = null !== (s12 = null == n2 ? void 0 : n2.fromAttribute) && void 0 !== s12 ? s12 : "function" == typeof n2 ? n2 : null) && void 0 !== e6 ? e6 : $cc6c4db09b89bcab$export$7312b35fbf521afb.fromAttribute;
            this._$El = h2, this[h2] = l1(i18, t25.type), this._$El = null;
        }
    }
    requestUpdate(t26, i19, s13) {
        let e7 = !0;
        void 0 !== t26 && (((s13 = s13 || this.constructor.getPropertyOptions(t26)).hasChanged || $cc6c4db09b89bcab$export$53a6892c50694894)(this[t26], i19) ? (this._$AL.has(t26) || this._$AL.set(t26, i19), !0 === s13.reflect && this._$El !== t26 && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t26, s13))) : e7 = !1), !this.isUpdatePending && e7 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t27) {
            Promise.reject(t27);
        }
        const t28 = this.scheduleUpdate();
        return null != t28 && await t28, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t29;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t30, i21)=>this[i21] = t30), this._$Ei = void 0);
        let i20 = !1;
        const s14 = this._$AL;
        try {
            i20 = this.shouldUpdate(s14), i20 ? (this.willUpdate(s14), null === (t29 = this._$ES) || void 0 === t29 || t29.forEach((t31)=>{
                var i22;
                return null === (i22 = t31.hostUpdate) || void 0 === i22 ? void 0 : i22.call(t31);
            }), this.update(s14)) : this._$Ek();
        } catch (t32) {
            throw i20 = !1, this._$Ek(), t32;
        }
        i20 && this._$AE(s14);
    }
    willUpdate(t) {}
    _$AE(t33) {
        var i23;
        null === (i23 = this._$ES) || void 0 === i23 || i23.forEach((t34)=>{
            var i24;
            return null === (i24 = t34.hostUpdated) || void 0 === i24 ? void 0 : i24.call(t34);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t33)), this.updated(t33);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t35) {
        void 0 !== this._$EC && (this._$EC.forEach((t36, i25)=>this._$EO(i25, this[i25], t36)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$cc6c4db09b89bcab$export$c7c07a37856565d.finalized = !0, $cc6c4db09b89bcab$export$c7c07a37856565d.elementProperties = new Map, $cc6c4db09b89bcab$export$c7c07a37856565d.elementStyles = [], $cc6c4db09b89bcab$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $cc6c4db09b89bcab$var$h || $cc6c4db09b89bcab$var$h({
    ReactiveElement: $cc6c4db09b89bcab$export$c7c07a37856565d
}), (null !== ($cc6c4db09b89bcab$var$s = globalThis.reactiveElementVersions) && void 0 !== $cc6c4db09b89bcab$var$s ? $cc6c4db09b89bcab$var$s : globalThis.reactiveElementVersions = []).push("1.3.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $c77abc56020fd254$var$t;
const $c77abc56020fd254$var$i = globalThis.trustedTypes, $c77abc56020fd254$var$s = $c77abc56020fd254$var$i ? $c77abc56020fd254$var$i.createPolicy("lit-html", {
    createHTML: (t1)=>t1
}) : void 0, $c77abc56020fd254$var$e = `lit$${(Math.random() + "").slice(9)}$`, $c77abc56020fd254$var$o = "?" + $c77abc56020fd254$var$e, $c77abc56020fd254$var$n = `<${$c77abc56020fd254$var$o}>`, $c77abc56020fd254$var$l = document, $c77abc56020fd254$var$h = (t2 = "")=>$c77abc56020fd254$var$l.createComment(t2), $c77abc56020fd254$var$r = (t3)=>null === t3 || "object" != typeof t3 && "function" != typeof t3, $c77abc56020fd254$var$d = Array.isArray, $c77abc56020fd254$var$u = (t4)=>$c77abc56020fd254$var$d(t4) || "function" == typeof (null == t4 ? void 0 : t4[Symbol.iterator]), $c77abc56020fd254$var$c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $c77abc56020fd254$var$v = /-->/g, $c77abc56020fd254$var$a = />/g, $c77abc56020fd254$var$f = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), $c77abc56020fd254$var$_ = /'/g, $c77abc56020fd254$var$g = /"/g, $c77abc56020fd254$var$m = /^(?:script|style|textarea|title)$/i, $c77abc56020fd254$var$p = (t5)=>(i1, ...s1)=>({
            _$litType$: t5,
            strings: i1,
            values: s1
        }), $c77abc56020fd254$export$c0bb0b647f701bb5 = $c77abc56020fd254$var$p(1), $c77abc56020fd254$export$7ed1367e7fa1ad68 = $c77abc56020fd254$var$p(2), $c77abc56020fd254$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $c77abc56020fd254$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $c77abc56020fd254$var$x = new WeakMap, $c77abc56020fd254$export$b3890eb0ae9dca99 = (t7, i2, s2)=>{
    var e1, o1;
    const n1 = null !== (e1 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== e1 ? e1 : i2;
    let l1 = n1._$litPart$;
    if (void 0 === l1) {
        const t6 = null !== (o1 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== o1 ? o1 : null;
        n1._$litPart$ = l1 = new $c77abc56020fd254$var$N(i2.insertBefore($c77abc56020fd254$var$h(), t6), t6, void 0, null != s2 ? s2 : {});
    }
    return l1._$AI(t7), l1;
}, $c77abc56020fd254$var$A = $c77abc56020fd254$var$l.createTreeWalker($c77abc56020fd254$var$l, 129, null, !1), $c77abc56020fd254$var$E = (t8, i4)=>{
    const o2 = t8.length - 1, l2 = [];
    let h1, r1 = 2 === i4 ? "<svg>" : "", d1 = $c77abc56020fd254$var$c;
    for(let i3 = 0; i3 < o2; i3++){
        const s3 = t8[i3];
        let o3, u1, p1 = -1, $1 = 0;
        for(; $1 < s3.length && (d1.lastIndex = $1, u1 = d1.exec(s3), null !== u1);)$1 = d1.lastIndex, d1 === $c77abc56020fd254$var$c ? "!--" === u1[1] ? d1 = $c77abc56020fd254$var$v : void 0 !== u1[1] ? d1 = $c77abc56020fd254$var$a : void 0 !== u1[2] ? ($c77abc56020fd254$var$m.test(u1[2]) && (h1 = RegExp("</" + u1[2], "g")), d1 = $c77abc56020fd254$var$f) : void 0 !== u1[3] && (d1 = $c77abc56020fd254$var$f) : d1 === $c77abc56020fd254$var$f ? ">" === u1[0] ? (d1 = null != h1 ? h1 : $c77abc56020fd254$var$c, p1 = -1) : void 0 === u1[1] ? p1 = -2 : (p1 = d1.lastIndex - u1[2].length, o3 = u1[1], d1 = void 0 === u1[3] ? $c77abc56020fd254$var$f : '"' === u1[3] ? $c77abc56020fd254$var$g : $c77abc56020fd254$var$_) : d1 === $c77abc56020fd254$var$g || d1 === $c77abc56020fd254$var$_ ? d1 = $c77abc56020fd254$var$f : d1 === $c77abc56020fd254$var$v || d1 === $c77abc56020fd254$var$a ? d1 = $c77abc56020fd254$var$c : (d1 = $c77abc56020fd254$var$f, h1 = void 0);
        const y1 = d1 === $c77abc56020fd254$var$f && t8[i3 + 1].startsWith("/>") ? " " : "";
        r1 += d1 === $c77abc56020fd254$var$c ? s3 + $c77abc56020fd254$var$n : p1 >= 0 ? (l2.push(o3), s3.slice(0, p1) + "$lit$" + s3.slice(p1) + $c77abc56020fd254$var$e + y1) : s3 + $c77abc56020fd254$var$e + (-2 === p1 ? (l2.push(void 0), i3) : y1);
    }
    const u2 = r1 + (t8[o2] || "<?>") + (2 === i4 ? "</svg>" : "");
    if (!Array.isArray(t8) || !t8.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== $c77abc56020fd254$var$s ? $c77abc56020fd254$var$s.createHTML(u2) : u2,
        l2
    ];
};
class $c77abc56020fd254$var$C {
    constructor({ strings: t9 , _$litType$: s4  }, n2){
        let l3;
        this.parts = [];
        let r2 = 0, d2 = 0;
        const u3 = t9.length - 1, c1 = this.parts, [v1, a1] = $c77abc56020fd254$var$E(t9, s4);
        if (this.el = $c77abc56020fd254$var$C.createElement(v1, n2), $c77abc56020fd254$var$A.currentNode = this.el.content, 2 === s4) {
            const t10 = this.el.content, i5 = t10.firstChild;
            i5.remove(), t10.append(...i5.childNodes);
        }
        for(; null !== (l3 = $c77abc56020fd254$var$A.nextNode()) && c1.length < u3;){
            if (1 === l3.nodeType) {
                if (l3.hasAttributes()) {
                    const t11 = [];
                    for (const i7 of l3.getAttributeNames())if (i7.endsWith("$lit$") || i7.startsWith($c77abc56020fd254$var$e)) {
                        const s5 = a1[d2++];
                        if (t11.push(i7), void 0 !== s5) {
                            const t12 = l3.getAttribute(s5.toLowerCase() + "$lit$").split($c77abc56020fd254$var$e), i8 = /([.?@])?(.*)/.exec(s5);
                            c1.push({
                                type: 1,
                                index: r2,
                                name: i8[2],
                                strings: t12,
                                ctor: "." === i8[1] ? $c77abc56020fd254$var$M : "?" === i8[1] ? $c77abc56020fd254$var$k : "@" === i8[1] ? $c77abc56020fd254$var$H : $c77abc56020fd254$var$S
                            });
                        } else c1.push({
                            type: 6,
                            index: r2
                        });
                    }
                    for (const i6 of t11)l3.removeAttribute(i6);
                }
                if ($c77abc56020fd254$var$m.test(l3.tagName)) {
                    const t13 = l3.textContent.split($c77abc56020fd254$var$e), s6 = t13.length - 1;
                    if (s6 > 0) {
                        l3.textContent = $c77abc56020fd254$var$i ? $c77abc56020fd254$var$i.emptyScript : "";
                        for(let i9 = 0; i9 < s6; i9++)l3.append(t13[i9], $c77abc56020fd254$var$h()), $c77abc56020fd254$var$A.nextNode(), c1.push({
                            type: 2,
                            index: ++r2
                        });
                        l3.append(t13[s6], $c77abc56020fd254$var$h());
                    }
                }
            } else if (8 === l3.nodeType) {
                if (l3.data === $c77abc56020fd254$var$o) c1.push({
                    type: 2,
                    index: r2
                });
                else {
                    let t14 = -1;
                    for(; -1 !== (t14 = l3.data.indexOf($c77abc56020fd254$var$e, t14 + 1));)c1.push({
                        type: 7,
                        index: r2
                    }), t14 += $c77abc56020fd254$var$e.length - 1;
                }
            }
            r2++;
        }
    }
    static createElement(t15, i) {
        const s7 = $c77abc56020fd254$var$l.createElement("template");
        return s7.innerHTML = t15, s7;
    }
}
function $c77abc56020fd254$var$P(t16, i14, s8 = t16, e2) {
    var o4, n3, l4, h2;
    if (i14 === $c77abc56020fd254$export$9c068ae9cc5db4e8) return i14;
    let d3 = void 0 !== e2 ? null === (o4 = s8._$Cl) || void 0 === o4 ? void 0 : o4[e2] : s8._$Cu;
    const u4 = $c77abc56020fd254$var$r(i14) ? void 0 : i14._$litDirective$;
    return (null == d3 ? void 0 : d3.constructor) !== u4 && (null === (n3 = null == d3 ? void 0 : d3._$AO) || void 0 === n3 || n3.call(d3, !1), void 0 === u4 ? d3 = void 0 : (d3 = new u4(t16), d3._$AT(t16, s8, e2)), void 0 !== e2 ? (null !== (l4 = (h2 = s8)._$Cl) && void 0 !== l4 ? l4 : h2._$Cl = [])[e2] = d3 : s8._$Cu = d3), void 0 !== d3 && (i14 = $c77abc56020fd254$var$P(t16, d3._$AS(t16, i14.values), d3, e2)), i14;
}
class $c77abc56020fd254$var$V {
    constructor(t17, i15){
        this.v = [], this._$AN = void 0, this._$AD = t17, this._$AM = i15;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t18) {
        var i16;
        const { el: { content: s9  } , parts: e3  } = this._$AD, o5 = (null !== (i16 = null == t18 ? void 0 : t18.creationScope) && void 0 !== i16 ? i16 : $c77abc56020fd254$var$l).importNode(s9, !0);
        $c77abc56020fd254$var$A.currentNode = o5;
        let n4 = $c77abc56020fd254$var$A.nextNode(), h3 = 0, r3 = 0, d4 = e3[0];
        for(; void 0 !== d4;){
            if (h3 === d4.index) {
                let i17;
                2 === d4.type ? i17 = new $c77abc56020fd254$var$N(n4, n4.nextSibling, this, t18) : 1 === d4.type ? i17 = new d4.ctor(n4, d4.name, d4.strings, this, t18) : 6 === d4.type && (i17 = new $c77abc56020fd254$var$I(n4, this, t18)), this.v.push(i17), d4 = e3[++r3];
            }
            h3 !== (null == d4 ? void 0 : d4.index) && (n4 = $c77abc56020fd254$var$A.nextNode(), h3++);
        }
        return o5;
    }
    m(t19) {
        let i18 = 0;
        for (const s10 of this.v)void 0 !== s10 && (void 0 !== s10.strings ? (s10._$AI(t19, s10, i18), i18 += s10.strings.length - 2) : s10._$AI(t19[i18])), i18++;
    }
}
class $c77abc56020fd254$var$N {
    constructor(t20, i19, s11, e4){
        var o6;
        this.type = 2, this._$AH = $c77abc56020fd254$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t20, this._$AB = i19, this._$AM = s11, this.options = e4, this._$C_ = null === (o6 = null == e4 ? void 0 : e4.isConnected) || void 0 === o6 || o6;
    }
    get _$AU() {
        var t21, i20;
        return null !== (i20 = null === (t21 = this._$AM) || void 0 === t21 ? void 0 : t21._$AU) && void 0 !== i20 ? i20 : this._$C_;
    }
    get parentNode() {
        let t22 = this._$AA.parentNode;
        const i21 = this._$AM;
        return void 0 !== i21 && 11 === t22.nodeType && (t22 = i21.parentNode), t22;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t23, i22 = this) {
        t23 = $c77abc56020fd254$var$P(this, t23, i22), $c77abc56020fd254$var$r(t23) ? t23 === $c77abc56020fd254$export$45b790e32b2810ee || null == t23 || "" === t23 ? (this._$AH !== $c77abc56020fd254$export$45b790e32b2810ee && this._$AR(), this._$AH = $c77abc56020fd254$export$45b790e32b2810ee) : t23 !== this._$AH && t23 !== $c77abc56020fd254$export$9c068ae9cc5db4e8 && this.T(t23) : void 0 !== t23._$litType$ ? this.$(t23) : void 0 !== t23.nodeType ? this.k(t23) : $c77abc56020fd254$var$u(t23) ? this.S(t23) : this.T(t23);
    }
    j(t24, i23 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t24, i23);
    }
    k(t25) {
        this._$AH !== t25 && (this._$AR(), this._$AH = this.j(t25));
    }
    T(t26) {
        this._$AH !== $c77abc56020fd254$export$45b790e32b2810ee && $c77abc56020fd254$var$r(this._$AH) ? this._$AA.nextSibling.data = t26 : this.k($c77abc56020fd254$var$l.createTextNode(t26)), this._$AH = t26;
    }
    $(t27) {
        var i24;
        const { values: s12 , _$litType$: e5  } = t27, o7 = "number" == typeof e5 ? this._$AC(t27) : (void 0 === e5.el && (e5.el = $c77abc56020fd254$var$C.createElement(e5.h, this.options)), e5);
        if ((null === (i24 = this._$AH) || void 0 === i24 ? void 0 : i24._$AD) === o7) this._$AH.m(s12);
        else {
            const t28 = new $c77abc56020fd254$var$V(o7, this), i25 = t28.p(this.options);
            t28.m(s12), this.k(i25), this._$AH = t28;
        }
    }
    _$AC(t29) {
        let i26 = $c77abc56020fd254$var$x.get(t29.strings);
        return void 0 === i26 && $c77abc56020fd254$var$x.set(t29.strings, i26 = new $c77abc56020fd254$var$C(t29)), i26;
    }
    S(t30) {
        $c77abc56020fd254$var$d(this._$AH) || (this._$AH = [], this._$AR());
        const i27 = this._$AH;
        let s13, e6 = 0;
        for (const o8 of t30)e6 === i27.length ? i27.push(s13 = new $c77abc56020fd254$var$N(this.j($c77abc56020fd254$var$h()), this.j($c77abc56020fd254$var$h()), this, this.options)) : s13 = i27[e6], s13._$AI(o8), e6++;
        e6 < i27.length && (this._$AR(s13 && s13._$AB.nextSibling, e6), i27.length = e6);
    }
    _$AR(t31 = this._$AA.nextSibling, i28) {
        var s14;
        for(null === (s14 = this._$AP) || void 0 === s14 || s14.call(this, !1, !0, i28); t31 && t31 !== this._$AB;){
            const i29 = t31.nextSibling;
            t31.remove(), t31 = i29;
        }
    }
    setConnected(t32) {
        var i30;
        void 0 === this._$AM && (this._$C_ = t32, null === (i30 = this._$AP) || void 0 === i30 || i30.call(this, t32));
    }
}
class $c77abc56020fd254$var$S {
    constructor(t33, i31, s15, e7, o9){
        this.type = 1, this._$AH = $c77abc56020fd254$export$45b790e32b2810ee, this._$AN = void 0, this.element = t33, this.name = i31, this._$AM = e7, this.options = o9, s15.length > 2 || "" !== s15[0] || "" !== s15[1] ? (this._$AH = Array(s15.length - 1).fill(new String), this.strings = s15) : this._$AH = $c77abc56020fd254$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t34, i32 = this, s16, e9) {
        const o10 = this.strings;
        let n5 = !1;
        if (void 0 === o10) t34 = $c77abc56020fd254$var$P(this, t34, i32, 0), n5 = !$c77abc56020fd254$var$r(t34) || t34 !== this._$AH && t34 !== $c77abc56020fd254$export$9c068ae9cc5db4e8, n5 && (this._$AH = t34);
        else {
            const e8 = t34;
            let l5, h4;
            for(t34 = o10[0], l5 = 0; l5 < o10.length - 1; l5++)h4 = $c77abc56020fd254$var$P(this, e8[s16 + l5], i32, l5), h4 === $c77abc56020fd254$export$9c068ae9cc5db4e8 && (h4 = this._$AH[l5]), n5 || (n5 = !$c77abc56020fd254$var$r(h4) || h4 !== this._$AH[l5]), h4 === $c77abc56020fd254$export$45b790e32b2810ee ? t34 = $c77abc56020fd254$export$45b790e32b2810ee : t34 !== $c77abc56020fd254$export$45b790e32b2810ee && (t34 += (null != h4 ? h4 : "") + o10[l5 + 1]), this._$AH[l5] = h4;
        }
        n5 && !e9 && this.P(t34);
    }
    P(t35) {
        t35 === $c77abc56020fd254$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t35 ? t35 : "");
    }
}
class $c77abc56020fd254$var$M extends $c77abc56020fd254$var$S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    P(t36) {
        this.element[this.name] = t36 === $c77abc56020fd254$export$45b790e32b2810ee ? void 0 : t36;
    }
}
const $c77abc56020fd254$var$R = $c77abc56020fd254$var$i ? $c77abc56020fd254$var$i.emptyScript : "";
class $c77abc56020fd254$var$k extends $c77abc56020fd254$var$S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    P(t37) {
        t37 && t37 !== $c77abc56020fd254$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $c77abc56020fd254$var$R) : this.element.removeAttribute(this.name);
    }
}
class $c77abc56020fd254$var$H extends $c77abc56020fd254$var$S {
    constructor(t38, i33, s17, e10, o11){
        super(t38, i33, s17, e10, o11), this.type = 5;
    }
    _$AI(t39, i34 = this) {
        var s18;
        if ((t39 = null !== (s18 = $c77abc56020fd254$var$P(this, t39, i34, 0)) && void 0 !== s18 ? s18 : $c77abc56020fd254$export$45b790e32b2810ee) === $c77abc56020fd254$export$9c068ae9cc5db4e8) return;
        const e11 = this._$AH, o12 = t39 === $c77abc56020fd254$export$45b790e32b2810ee && e11 !== $c77abc56020fd254$export$45b790e32b2810ee || t39.capture !== e11.capture || t39.once !== e11.once || t39.passive !== e11.passive, n6 = t39 !== $c77abc56020fd254$export$45b790e32b2810ee && (e11 === $c77abc56020fd254$export$45b790e32b2810ee || o12);
        o12 && this.element.removeEventListener(this.name, this, e11), n6 && this.element.addEventListener(this.name, this, t39), this._$AH = t39;
    }
    handleEvent(t40) {
        var i35, s19;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s19 = null === (i35 = this.options) || void 0 === i35 ? void 0 : i35.host) && void 0 !== s19 ? s19 : this.element, t40) : this._$AH.handleEvent(t40);
    }
}
class $c77abc56020fd254$var$I {
    constructor(t41, i36, s20){
        this.element = t41, this.type = 6, this._$AN = void 0, this._$AM = i36, this.options = s20;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t42) {
        $c77abc56020fd254$var$P(this, t42);
    }
}
const $c77abc56020fd254$export$8613d1ca9052b22e = {
    A: "$lit$",
    C: $c77abc56020fd254$var$e,
    M: $c77abc56020fd254$var$o,
    L: 1,
    R: $c77abc56020fd254$var$E,
    V: $c77abc56020fd254$var$V,
    D: $c77abc56020fd254$var$u,
    I: $c77abc56020fd254$var$P,
    H: $c77abc56020fd254$var$N,
    N: $c77abc56020fd254$var$S,
    U: $c77abc56020fd254$var$k,
    B: $c77abc56020fd254$var$H,
    F: $c77abc56020fd254$var$M,
    W: $c77abc56020fd254$var$I
}, $c77abc56020fd254$var$z = window.litHtmlPolyfillSupport;
null == $c77abc56020fd254$var$z || $c77abc56020fd254$var$z($c77abc56020fd254$var$C, $c77abc56020fd254$var$N), (null !== ($c77abc56020fd254$var$t = globalThis.litHtmlVersions) && void 0 !== $c77abc56020fd254$var$t ? $c77abc56020fd254$var$t : globalThis.litHtmlVersions = []).push("2.2.7");






/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $03c8795ed2cf577a$var$l, $03c8795ed2cf577a$var$o;
const $03c8795ed2cf577a$export$8bf27daf9e8907c9 = (0, $cc6c4db09b89bcab$export$c7c07a37856565d);
class $03c8795ed2cf577a$export$3f2f9f5909897157 extends (0, $cc6c4db09b89bcab$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t1, e1;
        const i1 = super.createRenderRoot();
        return null !== (t1 = (e1 = this.renderOptions).renderBefore) && void 0 !== t1 || (e1.renderBefore = i1.firstChild), i1;
    }
    update(t2) {
        const i2 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = (0, $c77abc56020fd254$export$b3890eb0ae9dca99)(i2, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t3;
        super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(!0);
    }
    disconnectedCallback() {
        var t4;
        super.disconnectedCallback(), null === (t4 = this._$Do) || void 0 === t4 || t4.setConnected(!1);
    }
    render() {
        return 0, $c77abc56020fd254$export$9c068ae9cc5db4e8;
    }
}
$03c8795ed2cf577a$export$3f2f9f5909897157.finalized = !0, $03c8795ed2cf577a$export$3f2f9f5909897157._$litElement$ = !0, null === ($03c8795ed2cf577a$var$l = globalThis.litElementHydrateSupport) || void 0 === $03c8795ed2cf577a$var$l || $03c8795ed2cf577a$var$l.call(globalThis, {
    LitElement: $03c8795ed2cf577a$export$3f2f9f5909897157
});
const $03c8795ed2cf577a$var$n = globalThis.litElementPolyfillSupport;
null == $03c8795ed2cf577a$var$n || $03c8795ed2cf577a$var$n({
    LitElement: $03c8795ed2cf577a$export$3f2f9f5909897157
});
const $03c8795ed2cf577a$export$f5c524615a7708d6 = {
    _$AK: (t5, e2, i3)=>{
        t5._$AK(e2, i3);
    },
    _$AL: (t6)=>t6._$AL
};
(null !== ($03c8795ed2cf577a$var$o = globalThis.litElementVersions) && void 0 !== $03c8795ed2cf577a$var$o ? $03c8795ed2cf577a$var$o : globalThis.litElementVersions = []).push("3.2.2");




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $16acb1cad6441b32$export$da64fc29f17f9d0e = (n1)=>(e1)=>"function" == typeof e1 ? ((n2, e)=>(window.customElements.define(n2, e), e))(n1, e1) : ((n3, e2)=>{
            const { kind: t , elements: i  } = e2;
            return {
                kind: t,
                elements: i,
                finisher (e) {
                    window.customElements.define(n3, e);
                }
            };
        })(n1, e1);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d66dfea38dbda489$var$i = (i1, e1)=>"method" === e1.kind && e1.descriptor && !("value" in e1.descriptor) ? {
        ...e1,
        finisher (n) {
            n.createProperty(e1.key, i1);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e1.key,
        initializer () {
            "function" == typeof e1.initializer && (this[e1.key] = e1.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e1.key, i1);
        }
    };
function $d66dfea38dbda489$export$d541bacb2bda4494(e2) {
    return (n1, t)=>void 0 !== t ? ((i2, e3, n)=>{
            e3.constructor.createProperty(n, i2);
        })(e2, n1, t) : $d66dfea38dbda489$var$i(e2, n1);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $c98d0fcf4e7664b2$export$ca000e230c0caa3e(t1) {
    return (0, $d66dfea38dbda489$export$d541bacb2bda4494)({
        ...t1,
        state: !0
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f5e0a05233fe680d$export$29fd0ed4087278b5 = (e1, t1, o1)=>{
    Object.defineProperty(t1, o1, e1);
}, $f5e0a05233fe680d$export$18eb0154d0069a01 = (e2, t2)=>({
        kind: "method",
        placement: "prototype",
        key: t2.key,
        descriptor: e2
    }), $f5e0a05233fe680d$export$757d561a932dc1cb = ({ finisher: e3 , descriptor: t3  })=>(o2, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o2.originalKey) && void 0 !== r ? r : o2.key, i = null != t3 ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t3(o2.key)
            } : {
                ...o2,
                key: n
            };
            return null != e3 && (i.finisher = function(t4) {
                e3(t4, n);
            }), i;
        }
        {
            const r = o2.constructor;
            void 0 !== t3 && Object.defineProperty(o2, n, t3(n)), null == e3 || e3(r, n);
        }
    };


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $adc8eb1d261f2b30$export$b2b799818fbabcf3(e1) {
    return (0, $f5e0a05233fe680d$export$757d561a932dc1cb)({
        finisher: (r1, t)=>{
            Object.assign(r1.prototype[t], e1);
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $c46135f57349d178$export$2fa187e846a241c4(i1, n1) {
    return (0, $f5e0a05233fe680d$export$757d561a932dc1cb)({
        descriptor: (o1)=>{
            const t1 = {
                get () {
                    var o2, n;
                    return null !== (n = null === (o2 = this.renderRoot) || void 0 === o2 ? void 0 : o2.querySelector(i1)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n1) {
                const n = "symbol" == typeof o1 ? Symbol() : "__" + o1;
                t1.get = function() {
                    var o3, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o3 = this.renderRoot) || void 0 === o3 ? void 0 : o3.querySelector(i1)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t1;
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $db25cca79ab39e9f$export$dcd0d083aa86c355(e1) {
    return (0, $f5e0a05233fe680d$export$757d561a932dc1cb)({
        descriptor: (r1)=>({
                get () {
                    var r2, o;
                    return null !== (o = null === (r2 = this.renderRoot) || void 0 === r2 ? void 0 : r2.querySelectorAll(e1)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $efa530413dbcf17f$export$163dfc35cc43f240(e1) {
    return (0, $f5e0a05233fe680d$export$757d561a932dc1cb)({
        descriptor: (r1)=>({
                async get () {
                    var r2;
                    return await this.updateComplete, null === (r2 = this.renderRoot) || void 0 === r2 ? void 0 : r2.querySelector(e1);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $25d77143f090efcc$var$n;
const $25d77143f090efcc$var$e = null != (null === ($25d77143f090efcc$var$n = window.HTMLSlotElement) || void 0 === $25d77143f090efcc$var$n ? void 0 : $25d77143f090efcc$var$n.prototype.assignedElements) ? (o1, n1)=>o1.assignedElements(n1) : (o2, n2)=>o2.assignedNodes(n2).filter((o3)=>o3.nodeType === Node.ELEMENT_NODE);
function $25d77143f090efcc$export$4682af2d9ee91415(n3) {
    const { slot: l1 , selector: t  } = null != n3 ? n3 : {};
    return (0, $f5e0a05233fe680d$export$757d561a932dc1cb)({
        descriptor: (o4)=>({
                get () {
                    var o5;
                    const r = "slot" + (l1 ? `[name=${l1}]` : ":not([name])"), i = null === (o5 = this.renderRoot) || void 0 === o5 ? void 0 : o5.querySelector(r), s = null != i ? $25d77143f090efcc$var$e(i, n3) : [];
                    return t ? s.filter((o6)=>o6.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $cacc9a171e7222ee$export$1bdbe53f9df1b8(o1, n1, r) {
    let l, s = o1;
    return "object" == typeof o1 ? (s = o1.slot, l = o1) : l = {
        flatten: n1
    }, r ? (0, $25d77143f090efcc$export$4682af2d9ee91415)({
        slot: s,
        flatten: n1,
        selector: r
    }) : (0, $f5e0a05233fe680d$export$757d561a932dc1cb)({
        descriptor: (e1)=>({
                get () {
                    var e2, t1;
                    const o2 = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e2 = this.renderRoot) || void 0 === e2 ? void 0 : e2.querySelector(o2);
                    return null !== (t1 = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t1 ? t1 : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




const $d541ee0c15f1443f$var$eventBus = ()=>({
        addListener: (listener)=>{
            window.globalEventBus ? window.globalEventBus.addListener(listener) : window.addEventListener("eventBus", (e)=>listener(e.detail));
        },
        emit: (event)=>{
            window.globalEventBus ? window.globalEventBus.emit(event) : window.dispatchEvent(new CustomEvent("eventBus", {
                detail: event
            }));
        }
    });
var $d541ee0c15f1443f$export$2e2bcd8739ae039 = $d541ee0c15f1443f$var$eventBus;


const $4ea5dfd1c174acb1$var$apiHost = "http://localhost:8001";
var $4ea5dfd1c174acb1$export$2e2bcd8739ae039 = {
    settingsUrl: `${$4ea5dfd1c174acb1$var$apiHost}/settings`
};


class $5d70b72e6237a5c2$export$fd6e372b6dd169b5 extends (0, $03c8795ed2cf577a$export$3f2f9f5909897157) {
    static styles = (0, $80725b265d16b58f$export$dbf350e5966cf602)`
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
        fetch((0, $4ea5dfd1c174acb1$export$2e2bcd8739ae039).settingsUrl).then((res)=>res.json()).then((settings)=>this.settings = settings).catch((err)=>console.error(err));
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventBus = (0, $d541ee0c15f1443f$export$2e2bcd8739ae039)();
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
        fetch((0, $4ea5dfd1c174acb1$export$2e2bcd8739ae039).settingsUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedSettings)
        }).then((res)=>res.json()).then((settings)=>this.settings = settings);
        this.settingsMode = false;
    }
    render() {
        if (Object.keys(this.settings).length === 0) return (0, $c77abc56020fd254$export$c0bb0b647f701bb5)` <div>Loading settings...</div> `;
        return this.settingsMode ? (0, $c77abc56020fd254$export$c0bb0b647f701bb5)`
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
        ` : (0, $c77abc56020fd254$export$c0bb0b647f701bb5)`
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
(0, $3402b05038f0c645$export$29e00dfd3077644b)([
    (0, $d66dfea38dbda489$export$d541bacb2bda4494)({
        type: Object
    })
], $5d70b72e6237a5c2$export$fd6e372b6dd169b5.prototype, "settings", void 0);
(0, $3402b05038f0c645$export$29e00dfd3077644b)([
    (0, $d66dfea38dbda489$export$d541bacb2bda4494)({
        type: String
    })
], $5d70b72e6237a5c2$export$fd6e372b6dd169b5.prototype, "settingsFieldBgColor", void 0);
(0, $3402b05038f0c645$export$29e00dfd3077644b)([
    (0, $d66dfea38dbda489$export$d541bacb2bda4494)({
        type: Boolean
    })
], $5d70b72e6237a5c2$export$fd6e372b6dd169b5.prototype, "settingsMode", void 0);
(0, $3402b05038f0c645$export$29e00dfd3077644b)([
    (0, $d66dfea38dbda489$export$d541bacb2bda4494)({
        type: String
    })
], $5d70b72e6237a5c2$export$fd6e372b6dd169b5.prototype, "title", void 0);
(0, $3402b05038f0c645$export$29e00dfd3077644b)([
    (0, $d66dfea38dbda489$export$d541bacb2bda4494)({
        type: Number
    })
], $5d70b72e6237a5c2$export$fd6e372b6dd169b5.prototype, "counter", void 0);


window.customElements.define("mfe-one", (0, $5d70b72e6237a5c2$export$fd6e372b6dd169b5));


//# sourceMappingURL=index.js.map
