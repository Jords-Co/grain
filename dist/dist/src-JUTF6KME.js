import {a as p, b as K} from "./chunk-J7NTLVPZ.js";
import {a as Be, b as Ye, d as we} from "./chunk-IIUM3LRL.js";
import {a as Ge} from "./chunk-GXA4JETY.js";
import {a as w, b as N, c as Je} from "./chunk-FK2QG52E.js";
import {b as te, c as qe, d as We, f as Ve} from "./chunk-33MPAVBV.js";
import {a as Ke} from "./chunk-SH3YLSKW.js";
import {a as Xe, b as Qe, c as ne} from "./chunk-XAVVRO7X.js";
import "./chunk-OHHOFOA4.js";
var _t = "0.0.30";
var Ce = (o, e) => {
    let {type: t} = o
      , n = t === "radio";
    if (n || t === "checkbox") {
        if (!Ve(o) || typeof e != "boolean" || e === o.checked || n && e === !1)
            return;
        o.checked = e
    } else {
        if (o.value === e)
            return;
        o.value = e.toString()
    }
    N(o, ["click", "input", "change"])
}
;
var ve = (o, e=!0) => o ? o.split(",").reduce( (n, s) => {
    let r = s.trim();
    return (!e || r) && n.push(r),
    n
}
, []) : [];
var Ze = o => o.replace(/\/+$/, "");
var oe = class {
    constructor({element: e, duration: t}) {
        this.active = !1;
        this.running = !1;
        this.isActive = () => this.active;
        this.isRunning = () => this.running;
        this.untilFinished = () => this.runningPromise;
        this.element = typeof e == "string" ? document.querySelector(e) : e,
        this.duration = {
            first: typeof t == "number" ? t : t?.first ?? 0,
            second: typeof t == "number" ? t : t?.second ?? 0
        }
    }
    async trigger(e) {
        return e === "first" && this.active || e === "second" && !this.active ? !1 : (e || (e = this.active ? "second" : "first"),
        N(this.element, "click"),
        this.running = !0,
        this.runningPromise = Xe(this.duration[e]),
        await this.runningPromise,
        this.running = !1,
        this.active = e === "first",
        !0)
    }
}
;
function Nt(o) {
    if (Array.isArray(o)) {
        for (var e = 0, t = Array(o.length); e < o.length; e++)
            t[e] = o[e];
        return t
    } else
        return Array.from(o)
}
var xe = !1;
typeof window < "u" && (Ee = {
    get passive() {
        xe = !0
    }
},
window.addEventListener("testPassive", null, Ee),
window.removeEventListener("testPassive", null, Ee));
var Ee, se = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), $ = [], re = !1, Se = -1, B = void 0, I = void 0, q = void 0, et = function(e) {
    return $.some(function(t) {
        return !!(t.options.allowTouchMove && t.options.allowTouchMove(e))
    })
}, ie = function(e) {
    var t = e || window.event;
    return et(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(),
    !1)
}, $t = function(e) {
    if (q === void 0) {
        var t = !!e && e.reserveScrollBarGap === !0
          , n = window.innerWidth - document.documentElement.clientWidth;
        if (t && n > 0) {
            let s = parseInt(window.getComputedStyle(window.top.document.body).getPropertyValue("padding-right"), 10);
            q = window.top.document.body.style.paddingRight,
            window.top.document.body.style.paddingRight = `${s + n}px`
        }
    }
    B === void 0 && (B = window.top.document.body.style.overflow,
    window.top.document.body.style.overflow = "hidden")
}, Ut = function() {
    q !== void 0 && (window.top.document.body.style.paddingRight = q,
    q = void 0),
    B !== void 0 && (window.top.document.body.style.overflow = B,
    B = void 0)
}, Ht = function() {
    return window.requestAnimationFrame(function() {
        if (I === void 0) {
            I = {
                position: window.top.body.style.position,
                top: window.top.body.style.top,
                left: window.top.body.style.left
            };
            let {scrollY: e, scrollX: t, innerHeight: n} = window;
            window.top.document.body.style.position = "fixed",
            window.top.document.body.style.top = `${-e}px`,
            window.top.document.body.style.left = `${-t}px`
        }
    })
}, jt = function() {
    if (I !== void 0) {
        let e = -parseInt(window.top.document.body.style.top, 10)
          , t = -parseInt(window.top.document.body.style.left, 10);
        window.top.body.style.position = I.position,
        window.top.body.style.top = I.top,
        window.top.body.style.left = I.left,
        window.scrollTo(t, e),
        I = void 0
    }
}, zt = function(e) {
    return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1
}, Rt = function(e, t) {
    var n = e.targetTouches[0].clientY - Se;
    return et(e.target) ? !1 : t && t.scrollTop === 0 && n > 0 || zt(t) && n < 0 ? ie(e) : (e.stopPropagation(),
    !0)
}, tt = function(e, t) {
    if (!e) {
        console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
        return
    }
    if (!$.some(function(s) {
        return s.targetElement === e
    })) {
        var n = {
            targetElement: e,
            options: t || {}
        };
        $ = [].concat(Nt($), [n]),
        se ? Ht() : $t(t),
        se && (e.ontouchstart = function(s) {
            s.targetTouches.length === 1 && (Se = s.targetTouches[0].clientY)
        }
        ,
        e.ontouchmove = function(s) {
            s.targetTouches.length === 1 && Rt(s, e)
        }
        ,
        re || (document.addEventListener("touchmove", ie, xe ? {
            passive: !1
        } : void 0),
        re = !0))
    }
}, nt = function() {
    se && ($.forEach(function(e) {
        e.targetElement.ontouchstart = null,
        e.targetElement.ontouchmove = null
    }),
    re && (document.removeEventListener("touchmove", ie, xe ? {
        passive: !1
    } : void 0),
    re = !1),
    Se = -1),
    se ? jt() : Ut(),
    $ = []
};
var C = new WeakMap
  , k = new WeakMap
  , h = new WeakMap;
var le = Symbol("anyProducer")
  , ot = Promise.resolve()
  , de = Symbol("listenerAdded")
  , pe = Symbol("listenerRemoved")
  , fe = !1
  , ke = !1
  , ue = o => typeof o == "string" || typeof o == "symbol" || typeof o == "number";
function U(o) {
    if (!ue(o))
        throw new TypeError("`eventName` must be a string, symbol, or number")
}
function ae(o) {
    if (typeof o != "function")
        throw new TypeError("listener must be a function")
}
function H(o, e) {
    let t = k.get(o);
    if (t.has(e))
        return t.get(e)
}
function W(o, e) {
    let t = ue(e) ? e : le
      , n = h.get(o);
    if (n.has(t))
        return n.get(t)
}
function Kt(o, e, t) {
    let n = h.get(o);
    if (n.has(e))
        for (let s of n.get(e))
            s.enqueue(t);
    if (n.has(le)) {
        let s = Promise.all([e, t]);
        for (let r of n.get(le))
            r.enqueue(s)
    }
}
function st(o, e) {
    e = Array.isArray(e) ? e : [e];
    let t = !1
      , n = () => {}
      , s = []
      , r = {
        enqueue(i) {
            s.push(i),
            n()
        },
        finish() {
            t = !0,
            n()
        }
    };
    for (let i of e) {
        let a = W(o, i);
        a || (a = new Set,
        h.get(o).set(i, a)),
        a.add(r)
    }
    return {
        async next() {
            return s ? s.length === 0 ? t ? (s = void 0,
            this.next()) : (await new Promise(i => {
                n = i
            }
            ),
            this.next()) : {
                done: !1,
                value: await s.shift()
            } : {
                done: !0
            }
        },
        async return(i) {
            s = void 0;
            for (let a of e) {
                let c = W(o, a);
                c && (c.delete(r),
                c.size === 0 && h.get(o).delete(a))
            }
            return n(),
            arguments.length > 0 ? {
                done: !0,
                value: await i
            } : {
                done: !0
            }
        },
        [Symbol.asyncIterator]() {
            return this
        }
    }
}
function rt(o) {
    if (o === void 0)
        return it;
    if (!Array.isArray(o))
        throw new TypeError("`methodNames` must be an array of strings");
    for (let e of o)
        if (!it.includes(e))
            throw typeof e != "string" ? new TypeError("`methodNames` element must be a string") : new Error(`${e} is not Emittery method`);
    return o
}
var j = o => o === de || o === pe;
function ce(o, e, t) {
    if (j(e))
        try {
            fe = !0,
            o.emit(e, t)
        } finally {
            fe = !1
        }
}
var u = class o {
    static mixin(e, t) {
        return t = rt(t),
        n => {
            if (typeof n != "function")
                throw new TypeError("`target` must be function");
            for (let i of t)
                if (n.prototype[i] !== void 0)
                    throw new Error(`The property \`${i}\` already exists on \`target\``);
            function s() {
                return Object.defineProperty(this, e, {
                    enumerable: !1,
                    value: new o
                }),
                this[e]
            }
            Object.defineProperty(n.prototype, e, {
                enumerable: !1,
                get: s
            });
            let r = i => function(...a) {
                return this[e][i](...a)
            }
            ;
            for (let i of t)
                Object.defineProperty(n.prototype, i, {
                    enumerable: !1,
                    value: r(i)
                });
            return n
        }
    }
    static get isDebugEnabled() {
        if (typeof globalThis.process?.env != "object")
            return ke;
        let {env: e} = globalThis.process ?? {
            env: {}
        };
        return e.DEBUG === "emittery" || e.DEBUG === "*" || ke
    }
    static set isDebugEnabled(e) {
        ke = e
    }
    constructor(e={}) {
        C.set(this, new Set),
        k.set(this, new Map),
        h.set(this, new Map),
        h.get(this).set(le, new Set),
        this.debug = e.debug ?? {},
        this.debug.enabled === void 0 && (this.debug.enabled = !1),
        this.debug.logger || (this.debug.logger = (t, n, s, r) => {
            try {
                r = JSON.stringify(r)
            } catch {
                r = `Object with the following keys failed to stringify: ${Object.keys(r).join(",")}`
            }
            (typeof s == "symbol" || typeof s == "number") && (s = s.toString());
            let i = new Date
              , a = `${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}.${i.getMilliseconds()}`;
            console.log(`[${a}][emittery:${t}][${n}] Event Name: ${s}
	data: ${r}`)
        }
        )
    }
    logIfDebugEnabled(e, t, n) {
        (o.isDebugEnabled || this.debug.enabled) && this.debug.logger(e, this.debug.name, t, n)
    }
    on(e, t) {
        ae(t),
        e = Array.isArray(e) ? e : [e];
        for (let n of e) {
            U(n);
            let s = H(this, n);
            s || (s = new Set,
            k.get(this).set(n, s)),
            s.add(t),
            this.logIfDebugEnabled("subscribe", n, void 0),
            j(n) || ce(this, de, {
                eventName: n,
                listener: t
            })
        }
        return this.off.bind(this, e, t)
    }
    off(e, t) {
        ae(t),
        e = Array.isArray(e) ? e : [e];
        for (let n of e) {
            U(n);
            let s = H(this, n);
            s && (s.delete(t),
            s.size === 0 && k.get(this).delete(n)),
            this.logIfDebugEnabled("unsubscribe", n, void 0),
            j(n) || ce(this, pe, {
                eventName: n,
                listener: t
            })
        }
    }
    once(e) {
        let t, n = new Promise(s => {
            t = this.on(e, r => {
                t(),
                s(r)
            }
            )
        }
        );
        return n.off = t,
        n
    }
    events(e) {
        e = Array.isArray(e) ? e : [e];
        for (let t of e)
            U(t);
        return st(this, e)
    }
    async emit(e, t) {
        if (U(e),
        j(e) && !fe)
            throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
        this.logIfDebugEnabled("emit", e, t),
        Kt(this, e, t);
        let n = H(this, e) ?? new Set
          , s = C.get(this)
          , r = [...n]
          , i = j(e) ? [] : [...s];
        await ot,
        await Promise.all([...r.map(async a => {
            if (n.has(a))
                return a(t)
        }
        ), ...i.map(async a => {
            if (s.has(a))
                return a(e, t)
        }
        )])
    }
    async emitSerial(e, t) {
        if (U(e),
        j(e) && !fe)
            throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
        this.logIfDebugEnabled("emitSerial", e, t);
        let n = H(this, e) ?? new Set
          , s = C.get(this)
          , r = [...n]
          , i = [...s];
        await ot;
        for (let a of r)
            n.has(a) && await a(t);
        for (let a of i)
            s.has(a) && await a(e, t)
    }
    onAny(e) {
        return ae(e),
        this.logIfDebugEnabled("subscribeAny", void 0, void 0),
        C.get(this).add(e),
        ce(this, de, {
            listener: e
        }),
        this.offAny.bind(this, e)
    }
    anyEvent() {
        return st(this)
    }
    offAny(e) {
        ae(e),
        this.logIfDebugEnabled("unsubscribeAny", void 0, void 0),
        ce(this, pe, {
            listener: e
        }),
        C.get(this).delete(e)
    }
    clearListeners(e) {
        e = Array.isArray(e) ? e : [e];
        for (let t of e)
            if (this.logIfDebugEnabled("clear", t, void 0),
            ue(t)) {
                let n = H(this, t);
                n && n.clear();
                let s = W(this, t);
                if (s) {
                    for (let r of s)
                        r.finish();
                    s.clear()
                }
            } else {
                C.get(this).clear();
                for (let[n,s] of k.get(this).entries())
                    s.clear(),
                    k.get(this).delete(n);
                for (let[n,s] of h.get(this).entries()) {
                    for (let r of s)
                        r.finish();
                    s.clear(),
                    h.get(this).delete(n)
                }
            }
    }
    listenerCount(e) {
        e = Array.isArray(e) ? e : [e];
        let t = 0;
        for (let n of e) {
            if (ue(n)) {
                t += C.get(this).size + (H(this, n)?.size ?? 0) + (W(this, n)?.size ?? 0) + (W(this)?.size ?? 0);
                continue
            }
            n !== void 0 && U(n),
            t += C.get(this).size;
            for (let s of k.get(this).values())
                t += s.size;
            for (let s of h.get(this).values())
                t += s.size
        }
        return t
    }
    bindMethods(e, t) {
        if (typeof e != "object" || e === null)
            throw new TypeError("`target` must be an object");
        t = rt(t);
        for (let n of t) {
            if (e[n] !== void 0)
                throw new Error(`The property \`${n}\` already exists on \`target\``);
            Object.defineProperty(e, n, {
                enumerable: !1,
                value: this[n].bind(this)
            })
        }
    }
}
  , it = Object.getOwnPropertyNames(u.prototype).filter(o => o !== "constructor");
Object.defineProperty(u, "listenerAdded", {
    value: de,
    writable: !1,
    enumerable: !0,
    configurable: !1
});
Object.defineProperty(u, "listenerRemoved", {
    value: pe,
    writable: !1,
    enumerable: !0,
    configurable: !1
});
var at = async ({id: o, endpoint: e, consents: t, action: n, bannerText: s}) => {
    if (e)
        try {
            let r = JSON.stringify({
                id: o,
                action: n,
                consents: t,
                bannerText: s,
                url: window.location.href,
                userAgent: navigator.userAgent
            })
              , i = await fetch(e, {
                body: r,
                method: "POST"
            });
            if (i.ok)
                l.alert("The new consents were successfully POSTed to the API endpoint.", "info");
            else
                throw new Error(`The API returned a ${i.status} status.`)
        } catch (r) {
            l.alert(`There was an error while POSTing to the API: ${r}`, "error")
        }
}
;
var Te = ["banner", "preferences", "open-preferences", "fixed-preferences", "allow", "deny", "close", "submit", "interaction", "placeholder", "form", "checkbox-essential", "checkbox-marketing", "checkbox-personalization", "checkbox-analytics", "internal-component"]
  , Oe = {
    animation: {
        key: "animation",
        values: {
            fade: "fade",
            "slide-up": "slide-up",
            "slide-down": "slide-down",
            "slide-left": "slide-left",
            "slide-right": "slide-right",
            grow: "grow",
            shrink: "shrink",
            spin: "spin"
        }
    },
    duration: {
        key: "duration"
    },
    easing: {
        key: "easing",
        values: {
            linear: "linear",
            ease: "ease",
            "ease-in": "ease-in",
            "ease-out": "ease-out",
            "ease-in-out": "ease-in-out"
        }
    },
    mode: {
        key: "mode",
        values: {
            informational: "informational",
            "opt-out": "opt-out",
            "opt-in": "opt-in"
        }
    },
    source: {
        key: "source"
    },
    resetix: {
        key: "resetix"
    },
    updated: {
        key: "updated"
    },
    domain: {
        key: "domain"
    },
    type: {
        key: "type",
        values: {
            "cookie-consent": "cookie-consent"
        }
    },
    categories: {
        key: "categories",
        values: {
            personalization: "personalization",
            marketing: "marketing",
            analytics: "analytics"
        }
    },
    scroll: {
        key: "scroll",
        values: {
            disable: "disable"
        }
    },
    expires: {
        key: "expires"
    },
    endpoint: {
        key: "endpoint"
    },
    placeholder: {
        key: "placeholder"
    },
    src: {
        key: "src"
    }
}
  , Bt = ["essential"]
  , Me = ["personalization", "analytics", "marketing"]
  , Ae = "uncategorized"
  , ct = [...Me, ...Bt, Ae]
  , L = "fs-consent"
  , lt = ["informational", "opt-in", "opt-out"]
  , dt = {
    allow: "allow",
    deny: "deny",
    submit: "submit"
}
  , P = {
    main: L,
    consentsUpdated: `${L}-updated`
}
  , z = {
    checkbox: o => `[${L}-element="checkbox-${o}"]`,
    gtmEvent: o => `${o}-activated`
};
var V = Object.freeze({
    analytics: !1,
    essential: !0,
    marketing: !1,
    personalization: !1,
    uncategorized: !1
})
  , T = Object.freeze({
    analytics: !0,
    essential: !0,
    marketing: !0,
    personalization: !0,
    uncategorized: !0
})
  , pt = 180;
function me(o) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var n in t)
            o[n] = t[n]
    }
    return o
}
var qt = {
    read: function(o) {
        return o[0] === '"' && (o = o.slice(1, -1)),
        o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(o) {
        return encodeURIComponent(o).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};
function Ie(o, e) {
    function t(s, r, i) {
        if (!(typeof document > "u")) {
            i = me({}, e, i),
            typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)),
            i.expires && (i.expires = i.expires.toUTCString()),
            s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var c in i)
                i[c] && (a += "; " + c,
                i[c] !== !0 && (a += "=" + i[c].split(";")[0]));
            return document.cookie = s + "=" + o.write(r, s) + a
        }
    }
    function n(s) {
        if (!(typeof document > "u" || arguments.length && !s)) {
            for (var r = document.cookie ? document.cookie.split("; ") : [], i = {}, a = 0; a < r.length; a++) {
                var c = r[a].split("=")
                  , g = c.slice(1).join("=");
                try {
                    var A = decodeURIComponent(c[0]);
                    if (i[A] = o.read(g, A),
                    s === A)
                        break
                } catch {}
            }
            return s ? i[s] : i
        }
    }
    return Object.create({
        set: t,
        get: n,
        remove: function(s, r) {
            t(s, "", me({}, r, {
                expires: -1
            }))
        },
        withAttributes: function(s) {
            return Ie(this.converter, me({}, this.attributes, s))
        },
        withConverter: function(s) {
            return Ie(me({}, this.converter, s), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(e)
        },
        converter: {
            value: Object.freeze(o)
        }
    })
}
var m = Ie(qt, {
    path: "/"
});
var Y = p({
    mode: "opt-in",
    source: "",
    resetix: !1,
    domain: "",
    expires: "365",
    endpoint: ""
});
var D = p("opt-in")
  , v = p(Number(pt))
  , F = p(null)
  , Le = p(null)
  , O = p(null)
  , ge = p(!1)
  , y = p({
    ...V
})
  , E = p()
  , X = p("")
  , G = p([])
  , J = p([])
  , ft = () => {
    let {mode: o, expires: e, endpoint: t, source: n, domain: s} = Y.get();
    switch (D.set(te(o, lt) ? o : "opt-in"),
    D.get()) {
    case "informational":
    case "opt-out":
        y.set({
            ...T
        });
        break;
    default:
        y.set({
            ...V
        })
    }
    v.set(Number(e)),
    F.set(t),
    Le.set(n),
    O.set(s),
    l.alert(`The cookie banner is set to ${D.get()} mode with a consent expiry time of ${v.get()} days.${F.get() ? `The consents will be POSTed to ${F.get()}` : ""}`, "info")
}
  , ut = K(ge, o => o)
  , mt = o => {
    G.set([...G.get(), {
        ...o,
        type: "script"
    }])
}
  , gt = o => {
    J.set([...J.get(), {
        ...o,
        type: "iframe"
    }])
}
  , Pe = K([G, J], (o, e) => [...o, ...e])
  , ht = () => {
    let o = Pe.get()
      , e = y.get();
    return o.filter( ({active: n, categories: s}) => !n && s.every(r => e[r]))
}
  , De = o => {
    let e = [];
    return qe(o).forEach(t => {
        if (t === "essential")
            return;
        let n = o[t];
        n === void 0 || n === y.get()[t] || (y.set({
            ...y.get(),
            [t]: n
        }),
        e.push(t))
    }
    ),
    ge.set(!0),
    e
}
  , _ = K([y, E], (o, e) => {
    let t = {
        ...o
    };
    return Object.keys(e).forEach(n => {
        e[n].length === 0 && (t[n] = !1)
    }
    ),
    t
}
)
  , wn = K(y, o => We(o));
var yt = o => {
    o && o.textContent && X.set(o.textContent)
}
  , bt = () => ({
    marketing: ["ad_storage", "ad_user_data", "ad_personalization"],
    analytics: ["analytics_storage"],
    personalization: ["functionality_storage", "personalization_storage"],
    essential: ["security_storage"],
    uncategorized: []
})
  , Fe = o => ({
    consentModes: {
        ad_storage: o?.marketing ? "granted" : "denied",
        ad_user_data: o?.marketing ? "granted" : "denied",
        ad_personalization: o?.marketing ? "granted" : "denied",
        analytics_storage: o?.analytics ? "granted" : "denied",
        functionality_storage: o?.personalization ? "granted" : "denied",
        personalization_storage: o?.personalization ? "granted" : "denied",
        security_storage: "granted"
    },
    consents: o
});
var wt = o => Object.keys(o).every(e => te(e, ct));
var _e = o => {
    if (!o)
        return;
    let {hostname: e} = window.location;
    return e.includes("webflow.io") ? e : o
}
  , Ct = () => {
    let o = m.get(P.main);
    if (!o)
        return;
    let e = JSON.parse(decodeURIComponent(o));
    if (e.consents && wt(e.consents)) {
        let n = E.get()
          , s = {
            ...e.consents
        };
        return Object.keys(n).forEach(r => {
            n[r].length === 0 && (s[r] = !1)
        }
        ),
        s
    }
}
  , vt = (o, e, t=120, n) => {
    let r = encodeURIComponent(JSON.stringify({
        id: o,
        consents: e
    }));
    n = _e(n),
    m.set(P.main, r, {
        expires: t,
        domain: n,
        sameSite: "None",
        secure: !0
    })
}
  , Et = () => {
    let o = m.get();
    for (let e in o) {
        if (e.includes(P.main))
            continue;
        let t = window.location.host.split(".");
        for (; t.length > 1; )
            m.remove(e),
            m.remove(e, {
                domain: `.${t.join(".")}`
            }),
            m.remove(e, {
                domain: `${t.join(".")}`
            }),
            t.splice(0, 1)
    }
}
  , xt = () => !!m.get(P.consentsUpdated)
  , St = (o=120, e) => {
    e = _e(e),
    m.set(P.consentsUpdated, "true", {
        expires: o,
        domain: e,
        sameSite: "None",
        secure: !0
    })
}
  , Ne = (o, e=120, t) => {
    t = _e(t);
    let n = E.get();
    for (let s in o) {
        let r = s
          , i = `${P.main}-${s}`;
        Object.keys(n).find(c => n[c].includes(s)) ? m.set(i, String(o[r] === "granted"), {
            expires: e,
            domain: t
        }) : m.remove(i)
    }
}
;
var {getElementSelector: d, queryElement: b, queryAllElements: Q, getInstance: Fn, getAttribute: x, hasAttributeValue: _n, getSettingSelector: kt} = Je(Ke, Te, Oe)
  , Tt = `<style>${d("banner")},${d("fixed-preferences")},${d("preferences")},${d("interaction")}{display:none}</style>`;
var Ot = async (o, e) => {
    let {origin: t, pathname: n, href: s} = window.location
      , {origin: r, pathname: i, href: a} = new URL(document.baseURI);
    try {
        if (o.startsWith("/")) {
            let be = a === s ? t : r + i;
            o = Ze(be) + o
        }
        let {origin: c, pathname: g} = new URL(o);
        if (c + g === t + n)
            return;
        let f = await (await fetch(o)).text()
          , S = new DOMParser().parseFromString(f, "text/html");
        [d("banner"), d("fixed-preferences"), d("preferences")].forEach(be => {
            let Re = S.querySelector(be);
            Re && document.body.appendChild(Re)
        }
        ),
        e && (await Qe(),
        await Ge(["ix2"]))
    } catch (c) {
        l.alert(`${c}`, "error")
    }
}
  , Mt = (o, e) => {
    let t = o;
    for (; t; ) {
        let n = Array.from(t.children);
        for (let s of n)
            if (s.matches(e))
                return s;
        t = t.parentElement
    }
    return null
}
  , At = () => {
    let o = b("banner")
      , e = d("internal-component")
      , t = o?.closest(e);
    if (!t)
        return;
    t.checkVisibility() || (t.style.display = "block")
}
  , It = o => {
    if (we(o))
        return o;
    let e = o.querySelectorAll("*");
    for (let t of e)
        if (we(t))
            return t
}
  , Lt = ({element: o}) => {
    let e = document.createElement("script")
      , t = o.getAttribute("fs-consent-scripttype");
    t ? e.type = t : e.type = "text/javascript";
    let n = Array.from(o.attributes).map(s => ({
        name: s.name,
        value: s.value
    }))?.filter(s => !s.name.startsWith("fs-consent") && s.name !== "type");
    return e.innerText = o.innerText,
    e.text = o.text,
    o.src && (e.src = o.src),
    n.length > 0 && n?.forEach(s => e.setAttribute(s.name, `${s.value}`)),
    e
}
  , Pt = ({element: o, src: e, placeholder: t}) => {
    let n = document.createElement("iframe");
    for (let {name: s, value: r} of o.attributes)
        n.setAttribute(s, r);
    return n.innerText = o.innerText,
    n.src = e,
    t && n.addEventListener("load", async () => {
        await w.fade.animateOut(t, {
            display: "none"
        })
    }
    ),
    n
}
  , Dt = () => {
    let o = document.querySelectorAll('[fs-consent-element^="checkbox-"]')
      , e = new Set
      , t = bt();
    if (!o || o?.length === 0) {
        let s = Object.entries(T).reduce( (r, [i,a]) => (r[i] = t[i],
        r), {});
        E.set({
            ...s
        });
        return
    }
    o.forEach(s => {
        let r = s.getAttribute("fs-consent-element");
        if (r) {
            let i = r.replace("checkbox-", "");
            e.add(i)
        }
    }
    );
    let n = Object.entries(T).reduce( (s, [r,i]) => (e.has(r) ? s[r] = t[r] : s[r] = [],
    s), {});
    E.set({
        ...n,
        essential: t.essential
    })
}
;
var Wt = {
    info: "green",
    warning: "yellow",
    error: "red"
}
  , l = class {
    static{this.active = !1
    }static activate() {
        this.init(),
        this.active = !0
    }
    static init() {
        this.element = document.createElement("div"),
        Object.assign(this.element.style, {
            position: "fixed",
            left: "auto",
            top: "auto",
            right: "16px",
            bottom: "0px",
            "z-index": "999999",
            "max-width": "320px",
            "font-size": "14px",
            "line-height": "1.25"
        }),
        document.body.appendChild(this.element)
    }
    static alert(e, t) {
        if (!this.active)
            return;
        let n = document.createElement("div");
        Object.assign(n.style, {
            position: "relative",
            padding: "16px",
            opacity: "0",
            "margin-bottom": "16px",
            "border-left": `4px solid ${Wt[t]}`,
            "background-color": "#fff",
            "box-shadow": "1px 1px 3px 0 rgba(0, 0, 0, 0.1)",
            "word-break": "break-all"
        });
        let s = document.createElement("div");
        s.innerText = e,
        n.appendChild(s),
        n.insertAdjacentHTML("beforeend", `<div ${L}-element="close" style="position: absolute; left: auto; top: 4px; right: 8px; bottom: auto; cursor: pointer">\u2716</div>`),
        this.handleCard(n)
    }
    static async handleCard(e) {
        let t = n => {
            n.target instanceof Element && n.target.closest(d("close")) && (e.removeEventListener("click", t),
            e.remove())
        }
        ;
        e.addEventListener("click", t),
        this.element.insertAdjacentElement("afterbegin", e),
        w.fade.prepareIn(e, {
            display: "block"
        }),
        await w.fade.animateIn(e, {
            display: "block"
        })
    }
}
;
var $e = (o, e) => {
    Vt("consent", o, e)
}
  , Ue = o => {
    window.dataLayer = window.dataLayer || [],
    !window.dataLayer.find(t => typeof t == "object" && "event"in t && t.event === o) && (window.dataLayer.push({
        event: o
    }),
    l.alert(`The GTM event ${o} has been fired with its equivalent consent mode.`, "info"))
}
;
function Vt(...o) {
    window.dataLayer = window.dataLayer || [],
    window.dataLayer.push(arguments)
}
var He = (o, e) => {
    let t = new CustomEvent("fs-consent-consentModeUpdate",{
        detail: {
            consentModes: e,
            consents: o
        }
    });
    document.dispatchEvent(t)
}
;
var je = async o => {
    let {analytics: e} = o
      , t = window.Webflow
      , n = t?.analytics?.getIsOptedOut();
    if (console.log("eventData analytics", {
        analytics: e,
        isOptedOut: n,
        wfAnalytics: t?.analytics,
        wf: t
    }),
    e && n) {
        t?.analytics?.optIn();
        return
    }
    !e && !n && t?.analytics?.optOut()
}
;
var R = class extends u {
    constructor(t) {
        super();
        this.element = t;
        this.checkboxes = new Map;
        this.initElements(),
        this.listenEvents(),
        this.updateCheckboxes()
    }
    initElements() {
        let t = Me.filter(n => {
            let s = z.checkbox(n)
              , r = this.element.querySelector(`input${s}, ${s} input`);
            return !r || r.type !== "checkbox" ? !0 : (r.checked && Ce(r, !1),
            this.checkboxes.set(n, r),
            !1)
        }
        );
        t.length && l.alert(`The Consents Form is missing the following checkboxes: ${t.map(n => z.checkbox(n)).join(", ")}.`, "warning")
    }
    listenEvents() {
        this.element.addEventListener("submit", t => this.handleSubmit(t))
    }
    handleSubmit(t) {
        t.preventDefault(),
        t.stopPropagation();
        let n = {};
        this.checkboxes.forEach( (s, r) => {
            n[r] = s.checked ?? !1
        }
        ),
        this.emit("submit", n)
    }
    updateCheckboxes() {
        let t = _.get();
        this.checkboxes.forEach( (n, s) => {
            !!t[s] !== n.checked && Ce(n, t[s])
        }
        )
    }
    submit() {
        N(this.element, "submit")
    }
}
;
var M = class extends u {
    constructor(t) {
        super();
        this.element = t;
        this.disableScrollOnOpen = !1;
        this.init()
    }
    init() {
        this.initElements(),
        this.handleAccessibility(),
        this.listenEvents()
    }
    initElements() {
        let {element: t} = this
          , n = b("form", {
            scope: t
        });
        n && (this.form = new R(n)),
        this.disableScrollOnOpen = x(t, "scroll", !0) === "disable",
        this.disableScrollOnOpen && (this.scrollableElement = It(t));
        let s = b("interaction", {
            scope: t
        });
        return this.displayController = new he({
            element: t,
            interaction: s ? {
                element: s
            } : void 0,
            startsHidden: !0,
            animation: x(t, "animation", !0),
            animationDuration: Number(x(t, "duration")),
            animationEasing: x(t, "easing")
        }),
        !0
    }
    handleAccessibility() {
        let {element: t} = this;
        if (!t)
            return;
        [Q("allow", {
            scope: t
        }), Q("deny", {
            scope: t
        }), Q("submit", {
            scope: t
        }), Q("close", {
            scope: t
        })].flat().forEach(s => {
            s && (s.setAttribute("role", "button"),
            s.setAttribute("tabindex", "0"))
        }
        )
    }
    listenEvents() {
        let {element: t, form: n} = this;
        t && (t.addEventListener("click", s => this.handleMouseAndKeyboard(s)),
        t.addEventListener("keydown", s => this.handleMouseAndKeyboard(s)),
        n?.on("submit", s => this.handleFormSubmit(s)))
    }
    handleMouseAndKeyboard(t) {
        let {target: n} = t
          , [s,r,i,a] = [d("allow"), d("deny"), d("close"), d("submit")];
        n instanceof Element && ("key"in t && t.key !== "Enter" || (n.closest(s) ? (this.emit("allow"),
        this.close()) : n.closest(r) ? (this.emit("deny"),
        this.close()) : n.closest(i) ? this.close() : n.closest(a) && this.form?.submit()))
    }
    handleFormSubmit(t) {
        this.emit("formsubmit", t),
        this.close()
    }
    show(t=!0) {
        let {element: n, displayController: s, disableScrollOnOpen: r, scrollableElement: i} = this;
        !n || !s || s.isVisible() === t || (s[t ? "show" : "hide"](),
        r && (t ? tt(i || n, {
            reserveScrollBarGap: !0
        }) : nt()),
        this.emit(t ? "open" : "close"))
    }
    open() {
        this.show()
    }
    close() {
        this.show(!1)
    }
}
;
var he = class {
    constructor({element: e, interaction: t, animation: n, startsHidden: s, animationEasing: r, animationDuration: i}) {
        this.isVisible = () => this.visible;
        if (this.element = e,
        this.animation = n,
        this.animationEasing = r,
        this.animationDuration = i,
        s ? (this.element.style.display = "none",
        this.visible = !1) : this.visible = Ye(this.element),
        t) {
            let {element: a, duration: c} = t;
            this.interaction = new oe({
                element: a,
                duration: c
            })
        }
    }
    async show() {
        if (this.visible)
            return;
        let {interaction: e, animation: t, element: n, animationDuration: s, animationEasing: r} = this
          , i = "block";
        e ? await e.trigger("first") : t ? (w[t].prepareIn(n, {
            display: i
        }),
        await w[t].animateIn(n, {
            display: i,
            duration: s,
            easing: r
        })) : n.style.display = i,
        this.visible = !0
    }
    async hide() {
        if (!this.visible)
            return;
        let {interaction: e, animation: t, element: n, animationDuration: s, animationEasing: r} = this;
        e ? await e.trigger("second") : t ? await w[t].animateOut(n, {
            display: "none",
            duration: s,
            easing: r
        }) : n.style.display = "none",
        this.visible = !1
    }
}
;
var Z = class extends u {
    constructor() {
        super(),
        this.loadConsents(),
        this.storeElements(),
        this.applyConsents()
    }
    storeElements() {
        let e = document.querySelectorAll(`script[type="${L}"], iframe${kt("src")}`)
          , t = Pe.get();
        [...e].filter(s => !t.find( ({element: r}) => s === r)).forEach(s => {
            let r = [];
            if (x(s, "categories") ? r = ve(`${x(s, "categories")}`, !0) : r = ve(`${Ae}`, !0),
            s instanceof HTMLScriptElement && mt({
                categories: r,
                element: s,
                active: !1
            }),
            s instanceof HTMLIFrameElement) {
                let i = x(s, "src");
                if (!i)
                    return;
                s.src = "";
                let a = Mt(s, '[fs-consent-element="placeholder"]');
                gt({
                    categories: r,
                    element: s,
                    src: i,
                    placeholder: a,
                    active: !1
                })
            }
            l.alert(`Stored the element: ${s.outerHTML} in the categories: ${r.join(", ")}`, "info")
        }
        )
    }
    loadConsents() {
        let e = Ct();
        je(e);
        let {consentModes: t} = Fe(e);
        if (Ne(t, Number(v.get()), O.get()),
        $e("default", t),
        He(e, t),
        !e)
            return;
        for (let s in e || {}) {
            let r = s;
            if (e[r]) {
                let a = z.gtmEvent(r);
                Ue(a)
            }
        }
        l.alert(`The following consents were loaded from the stored cookies: ${JSON.stringify(e)}`, "info"),
        De(e),
        xt() && (Et(),
        l.alert("Previously denied cookies have been deleted.", "info"))
    }
    async applyConsents() {
        let e = ht();
        for (let t of e)
            await new Promise(n => {
                let {element: s} = t, {src: r, parentElement: i} = s, a;
                if (t.type === "script")
                    a = Lt(t);
                else if (t.type === "iframe")
                    a = Pt(t);
                else {
                    n(void 0);
                    return
                }
                let c = () => {
                    t.element = a,
                    t.active = !0,
                    n(void 0)
                }
                ;
                r && a.addEventListener("load", c),
                i?.insertBefore(a, s),
                s.remove(),
                r || c()
            }
            )
    }
    updateConsents(e, t) {
        let n = {
            ...e,
            essential: !0
        }
          , s = E.get();
        Object.keys(s).forEach(f => {
            s[f].length === 0 && (n[f] = !1)
        }
        );
        let r = De(n)
          , i = Be();
        vt(i, _.get(), Number(v.get()), O.get());
        let a = {}
          , c = [];
        for (let f of r) {
            let ye = n[f]
              , S = ye ? "granted" : "denied";
            if (f === "marketing" && (a.ad_storage = S,
            a.ad_user_data = S,
            a.ad_personalization = S),
            f === "analytics" && (a.analytics_storage = S),
            f === "personalization" && (a.functionality_storage = S,
            a.personalization_storage = S),
            ye) {
                let ze = z.gtmEvent(f);
                c.push(ze)
            }
        }
        Ne(a, Number(v.get()), O.get()),
        $e("update", a),
        c.length > 0 && c.forEach(f => Ue(f)),
        window.dataLayer.push({
            event: "fs-consent-consentModeUpdate"
        }),
        He(n, a);
        let g = F.get();
        g && at({
            action: t,
            endpoint: g,
            id: i,
            consents: _.get(),
            bannerText: X.get() || ""
        }),
        r.length && (St(Number(v.get()), O.get()),
        this.applyConsents(),
        l.alert(`The following consents were updated: ${r.join(", ")}`, "info"));
        let A = Fe(n);
        je(A?.consents),
        this.emit("updateconsents", A)
    }
}
;
var ee = class {
    constructor() {
        this.consentController = new Z,
        this.initComponents()
    }
    async initComponents() {
        await ne(),
        At();
        let e = b("banner");
        if (e)
            this.banner = new M(e);
        else {
            l.alert('No [fs-consent-element="banner"] element was found, it is required to have it!', "error");
            return
        }
        let t = b("preferences");
        t ? this.preferences = new M(t) : l.alert('No [fs-consent-element="preferences"] element was found, did you want to use the Preferences component?', "info");
        let n = b("fixed-preferences");
        n ? this.manager = new M(n) : l.alert('No [fs-consent-element="fixed-preferences"] element was found, did you want to use the Manager component?', "info");
        let {manager: s, banner: r} = this;
        ut.get() ? s?.open() : r?.open(),
        this.listenEvents()
    }
    listenEvents() {
        let {allow: e, deny: t, submit: n} = dt
          , s = ["banner", "manager", "preferences"]
          , {consentController: r, banner: i, manager: a} = this;
        document.addEventListener("click", c => this.handleMouseAndKeyboard(c)),
        document.addEventListener("keydown", c => this.handleMouseAndKeyboard(c)),
        yt(i?.element),
        r.on("updateconsents", () => {
            s.forEach(c => this[c]?.form?.updateCheckboxes())
        }
        ),
        s.forEach(c => {
            this[c]?.on("allow", () => {
                l.alert(`Allow button was clicked in the ${c} component.`, "info"),
                r.updateConsents(T, e)
            }
            ),
            this[c]?.on("deny", () => {
                l.alert(`Deny button was clicked in the ${c} component.`, "info"),
                r.updateConsents(V, t)
            }
            ),
            this[c]?.on("formsubmit", g => {
                l.alert(`Consents Form was submitted in the ${c} component with the following consents: ${JSON.stringify(g)}`, "info"),
                r.updateConsents(g, n)
            }
            ),
            c !== "manager" && this[c]?.on("close", () => {
                l.alert(`The ${c} component was closed.`, "info"),
                D.get() === "informational" && (l.alert(`All cookies were accepted because the mode is set to ${D.get()}.`, "warning"),
                r.updateConsents(T, e)),
                a?.open()
            }
            )
        }
        )
    }
    handleMouseAndKeyboard(e) {
        let {target: t} = e
          , {banner: n, manager: s, preferences: r} = this;
        if (!(t instanceof Element) || "key"in e && e.key !== "Enter")
            return;
        let i = d("open-preferences")
          , a = t.closest(i)
          , c = b("fixed-preferences")?.contains(t);
        (a || c) && (n?.close(),
        s?.close(),
        r?.open(),
        l.alert("Open Preferences button was clicked.", "info"))
    }
    getStore() {
        return {
            mode: D.get(),
            cookieMaxAge: v.get(),
            endpoint: F.get(),
            componentsSource: Le.get(),
            domain: O.get(),
            confirmed: ge.get(),
            consents: y.get(),
            bannerText: X.get(),
            scripts: G.get(),
            iFrames: J.get(),
            allConsents: _.get()
        }
    }
    destroy() {
        document.removeEventListener("click", this.handleMouseAndKeyboard),
        document.removeEventListener("keydown", this.handleMouseAndKeyboard),
        this.consentController?.clearListeners(),
        this.banner?.clearListeners(),
        this.preferences?.clearListeners(),
        this.manager?.clearListeners(),
        this.banner?.element?.remove(),
        this.preferences?.element?.remove(),
        this.manager?.element?.remove(),
        l.alert("FsCookieConsent instance destroyed.", "info")
    }
}
;
var Yt = async o => ({
    init: async () => {
        let t = Number(o?.expires) < 1 ? 120 : Number(o?.expires)
          , n = {
            ...o,
            expires: String(t)
        };
        if (Y.set(n),
        ft(),
        new URLSearchParams(window.location.search).get("fs-consent") === "debugger" && l.activate(),
        /bot|crawler|spider|crawling/i.test(navigator.userAgent))
            return;
        document.head.insertAdjacentHTML("beforeend", Tt);
        let {source: i, resetix: a} = Y.get();
        i && await Ot(i, a),
        Dt();
        let c = new ee;
        return await ne(),
        {
            result: c,
            destroy() {
                c.destroy()
            }
        }
    }
    ,
    version: "1.0.0"
});
export {Te as ELEMENTS, Oe as SETTINGS, Yt as init, _t as version};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
