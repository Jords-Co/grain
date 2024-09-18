function st(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
var z = (t, e, n) => Math.min(Math.max(n, t), e);
var x = {
    duration: .3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};
var D = t => typeof t == "number";
var O = t => Array.isArray(t) && !D(t[0]);
var xt = (t, e, n) => {
    let i = e - t;
    return ((n - t) % i + i) % i + t
}
;
function Et(t, e) {
    return O(t) ? t[xt(0, t.length, e)] : t
}
var J = (t, e, n) => -n * t + n * e + t;
var B = () => {}
  , E = t => t;
var V = (t, e, n) => e - t === 0 ? 1 : (n - t) / (e - t);
function at(t, e) {
    let n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        let s = V(0, e, i);
        t.push(J(n, 1, s))
    }
}
function vt(t) {
    let e = [0];
    return at(e, t - 1),
    e
}
function ct(t, e=vt(t.length), n=E) {
    let i = t.length
      , s = i - e.length;
    return s > 0 && at(e, s),
    r => {
        let a = 0;
        for (; a < i - 2 && !(r < e[a + 1]); a++)
            ;
        let o = z(0, 1, V(e[a], e[a + 1], r));
        return o = Et(n, a)(o),
        J(t[a], t[a + 1], o)
    }
}
var U = t => Array.isArray(t) && D(t[0]);
var _ = t => typeof t == "object" && !!t.createAnimation;
var w = t => typeof t == "function";
var ft = t => typeof t == "string";
var k = {
    ms: t => t * 1e3,
    s: t => t / 1e3
};
var St = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , Nt = 1e-7
  , Pt = 12;
function _t(t, e, n, i, s) {
    let r, a, o = 0;
    do
        a = e + (n - e) / 2,
        r = St(a, i, s) - t,
        r > 0 ? n = a : e = a;
    while (Math.abs(r) > Nt && ++o < Pt);
    return a
}
function N(t, e, n, i) {
    if (t === e && n === i)
        return E;
    let s = r => _t(r, 0, 1, t, n);
    return r => r === 0 || r === 1 ? r : St(s(r), e, i)
}
var lt = (t, e="end") => n => {
    n = e === "end" ? Math.min(n, .999) : Math.max(n, .001);
    let i = n * t
      , s = e === "end" ? Math.floor(i) : Math.ceil(i);
    return z(0, 1, s / t)
}
;
var jt = {
    ease: N(.25, .1, .25, 1),
    "ease-in": N(.42, 0, 1, 1),
    "ease-in-out": N(.42, 0, .58, 1),
    "ease-out": N(0, 0, .58, 1)
}
  , qt = /\((.*?)\)/;
function j(t) {
    if (w(t))
        return t;
    if (U(t))
        return N(...t);
    let e = jt[t];
    if (e)
        return e;
    if (t.startsWith("steps")) {
        let n = qt.exec(t);
        if (n) {
            let i = n[1].split(",");
            return lt(parseFloat(i[0]), i[1].trim())
        }
    }
    return E
}
var P = class {
    constructor(e, n=[0, 1], {easing: i, duration: s=x.duration, delay: r=x.delay, endDelay: a=x.endDelay, repeat: o=x.repeat, offset: u, direction: p="normal", autoplay: g=!0}={}) {
        if (this.startTime = null,
        this.rate = 1,
        this.t = 0,
        this.cancelTimestamp = null,
        this.easing = E,
        this.duration = 0,
        this.totalDuration = 0,
        this.repeat = 0,
        this.playState = "idle",
        this.finished = new Promise( (m, T) => {
            this.resolve = m,
            this.reject = T
        }
        ),
        i = i || x.easing,
        _(i)) {
            let m = i.createAnimation(n);
            i = m.easing,
            n = m.keyframes || n,
            s = m.duration || s
        }
        this.repeat = o,
        this.easing = O(i) ? E : j(i),
        this.updateDuration(s);
        let A = ct(n, u, O(i) ? i.map(j) : E);
        this.tick = m => {
            var T;
            r = r;
            let c = 0;
            this.pauseTime !== void 0 ? c = this.pauseTime : c = (m - this.startTime) * this.rate,
            this.t = c,
            c /= 1e3,
            c = Math.max(c - r, 0),
            this.playState === "finished" && this.pauseTime === void 0 && (c = this.totalDuration);
            let f = c / this.duration
              , l = Math.floor(f)
              , d = f % 1;
            !d && f >= 1 && (d = 1),
            d === 1 && l--;
            let v = l % 2;
            (p === "reverse" || p === "alternate" && v || p === "alternate-reverse" && !v) && (d = 1 - d);
            let F = c >= this.totalDuration ? 1 : Math.min(d, 1)
              , S = A(this.easing(F));
            e(S),
            this.pauseTime === void 0 && (this.playState === "finished" || c >= this.totalDuration + a) ? (this.playState = "finished",
            (T = this.resolve) === null || T === void 0 || T.call(this, S)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick))
        }
        ,
        g && this.play()
    }
    play() {
        let e = performance.now();
        this.playState = "running",
        this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e),
        this.cancelTimestamp = this.startTime,
        this.pauseTime = void 0,
        this.frameRequestId = requestAnimationFrame(this.tick)
    }
    pause() {
        this.playState = "paused",
        this.pauseTime = this.t
    }
    finish() {
        this.playState = "finished",
        this.tick(0)
    }
    stop() {
        var e;
        this.playState = "idle",
        this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId),
        (e = this.reject) === null || e === void 0 || e.call(this, !1)
    }
    cancel() {
        this.stop(),
        this.tick(this.cancelTimestamp)
    }
    reverse() {
        this.rate *= -1
    }
    commitStyles() {}
    updateDuration(e) {
        this.duration = e,
        this.totalDuration = e * (this.repeat + 1)
    }
    get currentTime() {
        return this.t
    }
    set currentTime(e) {
        this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
    }
    get playbackRate() {
        return this.rate
    }
    set playbackRate(e) {
        this.rate = e
    }
}
;
var mt = function() {};
var H = class {
    setAnimation(e) {
        this.animation = e,
        e?.finished.then( () => this.clearAnimation()).catch( () => {}
        )
    }
    clearAnimation() {
        this.animation = this.generator = void 0
    }
}
;
var ut = new WeakMap;
function Q(t) {
    return ut.has(t) || ut.set(t, {
        transforms: [],
        values: new Map
    }),
    ut.get(t)
}
function At(t, e) {
    return t.has(e) || t.set(e, new H),
    t.get(e)
}
var zt = ["", "X", "Y", "Z"]
  , Bt = ["translate", "scale", "rotate", "skew"]
  , K = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
}
  , Tt = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: t => t + "deg"
}
  , Ut = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: t => t + "px"
    },
    rotate: Tt,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: E
    },
    skew: Tt
}
  , C = new Map
  , et = t => `--motion-${t}`
  , tt = ["x", "y", "z"];
Bt.forEach(t => {
    zt.forEach(e => {
        tt.push(t + e),
        C.set(et(t + e), Ut[t])
    }
    )
}
);
var Ht = (t, e) => tt.indexOf(t) - tt.indexOf(e)
  , Kt = new Set(tt)
  , nt = t => Kt.has(t)
  , bt = (t, e) => {
    K[e] && (e = K[e]);
    let {transforms: n} = Q(t);
    st(n, e),
    t.style.transform = Wt(n)
}
  , Wt = t => t.sort(Ht).reduce(Gt, "").trim()
  , Gt = (t, e) => `${t} ${e}(var(${et(e)}))`;
var W = t => t.startsWith("--")
  , wt = new Set;
function Dt(t) {
    if (!wt.has(t)) {
        wt.add(t);
        try {
            let {syntax: e, initialValue: n} = C.has(t) ? C.get(t) : {};
            CSS.registerProperty({
                name: t,
                inherits: !1,
                syntax: e,
                initialValue: n
            })
        } catch {}
    }
}
var pt = (t, e) => document.createElement("div").animate(t, e)
  , Ot = {
    cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            pt({
                opacity: [1]
            })
        } catch {
            return !1
        }
        return !0
    }
    ,
    finished: () => !!pt({
        opacity: [0, 1]
    }, {
        duration: .001
    }).finished,
    linearEasing: () => {
        try {
            pt({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }
}
  , dt = {}
  , L = {};
for (let t in Ot)
    L[t] = () => (dt[t] === void 0 && (dt[t] = Ot[t]()),
    dt[t]);
var Xt = .015
  , Yt = (t, e) => {
    let n = ""
      , i = Math.round(e / Xt);
    for (let s = 0; s < i; s++)
        n += t(V(0, i - 1, s)) + ", ";
    return n.substring(0, n.length - 2)
}
  , gt = (t, e) => w(t) ? L.linearEasing() ? `linear(${Yt(t, e)})` : x.easing : U(t) ? Zt(t) : t
  , Zt = ([t,e,n,i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`;
function Mt(t, e) {
    for (let n = 0; n < t.length; n++)
        t[n] === null && (t[n] = n ? t[n - 1] : e());
    return t
}
var Ft = t => Array.isArray(t) ? t : [t];
function G(t) {
    return K[t] && (t = K[t]),
    nt(t) ? et(t) : t
}
var X = {
    get: (t, e) => {
        e = G(e);
        let n = W(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
        if (!n && n !== 0) {
            let i = C.get(e);
            i && (n = i.initialValue)
        }
        return n
    }
    ,
    set: (t, e, n) => {
        e = G(e),
        W(e) ? t.style.setProperty(e, n) : t.style[e] = n
    }
};
function it(t, e=!0) {
    if (!(!t || t.playState === "finished"))
        try {
            t.stop ? t.stop() : (e && t.commitStyles(),
            t.cancel())
        } catch {}
}
function It(t, e) {
    var n;
    let i = e?.toDefaultUnit || E
      , s = t[t.length - 1];
    if (ft(s)) {
        let r = ((n = s.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
        r && (i = a => a + r)
    }
    return i
}
function Jt() {
    return window.__MOTION_DEV_TOOLS_RECORD
}
function $t(t, e, n, i={}, s) {
    let r = Jt(), a = i.record !== !1 && r, o, {duration: u=x.duration, delay: p=x.delay, endDelay: g=x.endDelay, repeat: A=x.repeat, easing: m=x.easing, persist: T=!1, direction: c, offset: f, allowWebkitAcceleration: l=!1, autoplay: d=!0} = i, v = Q(t), F = nt(e), S = L.waapi();
    F && bt(t, e);
    let b = G(e)
      , I = At(v.values, b)
      , $ = C.get(b);
    return it(I.animation, !(_(m) && I.generator) && i.record !== !1),
    () => {
        let Z = () => {
            var h, q;
            return (q = (h = X.get(t, b)) !== null && h !== void 0 ? h : $?.initialValue) !== null && q !== void 0 ? q : 0
        }
          , y = Mt(Ft(n), Z)
          , yt = It(y, $);
        if (_(m)) {
            let h = m.createAnimation(y, e !== "opacity", Z, b, I);
            m = h.easing,
            y = h.keyframes || y,
            u = h.duration || u
        }
        if (W(b) && (L.cssRegisterProperty() ? Dt(b) : S = !1),
        F && !L.linearEasing() && (w(m) || O(m) && m.some(w)) && (S = !1),
        S) {
            $ && (y = y.map(R => D(R) ? $.toDefaultUnit(R) : R)),
            y.length === 1 && (!L.partialKeyframes() || a) && y.unshift(Z());
            let h = {
                delay: k.ms(p),
                duration: k.ms(u),
                endDelay: k.ms(g),
                easing: O(m) ? void 0 : gt(m, u),
                direction: c,
                iterations: A + 1,
                fill: "both"
            };
            o = t.animate({
                [b]: y,
                offset: f,
                easing: O(m) ? m.map(R => gt(R, u)) : void 0
            }, h),
            o.finished || (o.finished = new Promise( (R, Vt) => {
                o.onfinish = R,
                o.oncancel = Vt
            }
            ));
            let q = y[y.length - 1];
            o.finished.then( () => {
                T || (X.set(t, b, q),
                o.cancel())
            }
            ).catch(B),
            l || (o.playbackRate = 1.000001)
        } else if (s && F)
            y = y.map(h => typeof h == "string" ? parseFloat(h) : h),
            y.length === 1 && y.unshift(parseFloat(Z())),
            o = new s(h => {
                X.set(t, b, yt ? yt(h) : h)
            }
            ,y,Object.assign(Object.assign({}, i), {
                duration: u,
                easing: m
            }));
        else {
            let h = y[y.length - 1];
            X.set(t, b, $ && D(h) ? $.toDefaultUnit(h) : h)
        }
        return a && r(t, e, y, {
            duration: u,
            delay: p,
            easing: m,
            repeat: A,
            offset: f
        }, "motion-one"),
        I.setAnimation(o),
        o && !d && o.pause(),
        o
    }
}
var kt = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
function Ct(t, e) {
    var n;
    return typeof t == "string" ? e ? ((n = e[t]) !== null && n !== void 0 || (e[t] = document.querySelectorAll(t)),
    t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]),
    Array.from(t || [])
}
var Qt = t => t()
  , Y = (t, e, n=x.duration) => new Proxy({
    animations: t.map(Qt).filter(Boolean),
    duration: n,
    options: e
},ee)
  , te = t => t.animations[0]
  , ee = {
    get: (t, e) => {
        let n = te(t);
        switch (e) {
        case "duration":
            return t.duration;
        case "currentTime":
            return k.s(n?.[e] || 0);
        case "playbackRate":
        case "playState":
            return n?.[e];
        case "finished":
            return t.finished || (t.finished = Promise.all(t.animations.map(ne)).catch(B)),
            t.finished;
        case "stop":
            return () => {
                t.animations.forEach(i => it(i))
            }
            ;
        case "forEachNative":
            return i => {
                t.animations.forEach(s => i(s, t))
            }
            ;
        default:
            return typeof n?.[e] > "u" ? void 0 : () => t.animations.forEach(i => i[e]())
        }
    }
    ,
    set: (t, e, n) => {
        switch (e) {
        case "currentTime":
            n = k.ms(n);
        case "playbackRate":
            for (let i = 0; i < t.animations.length; i++)
                t.animations[i][e] = n;
            return !0
        }
        return !1
    }
}
  , ne = t => t.finished;
function rt(t=.1, {start: e=0, from: n=0, easing: i}={}) {
    return (s, r) => {
        let a = D(n) ? n : ie(n, r)
          , o = Math.abs(a - s)
          , u = t * o;
        if (i) {
            let p = r * t;
            u = j(i)(u / p) * p
        }
        return e + u
    }
}
function ie(t, e) {
    if (t === "first")
        return 0;
    {
        let n = e - 1;
        return t === "last" ? n : n / 2
    }
}
function Lt(t, e, n) {
    return w(t) ? t(e, n) : t
}
function Rt(t) {
    return function(n, i, s={}) {
        n = Ct(n);
        let r = n.length;
        mt(!!r, "No valid element provided."),
        mt(!!i, "No keyframes defined.");
        let a = [];
        for (let o = 0; o < r; o++) {
            let u = n[o];
            for (let p in i) {
                let g = kt(s, p);
                g.delay = Lt(g.delay, o, r);
                let A = $t(u, p, i[p], g, t);
                a.push(A)
            }
        }
        return Y(a, s, s.duration)
    }
}
var ht = Rt(P);
function re(t, e={}) {
    return Y([ () => {
        let n = new P(t,[0, 1],e);
        return n.finished.catch( () => {}
        ),
        n
    }
    ], e, e.duration)
}
function ot(t, e, n) {
    return (w(t) ? re : ht)(t, e, n)
}
var M = ({initialStyles: t, keyframes: e}) => {
    let n = (r, a={}) => {
        let {target: o, insertAfter: u, display: p=""} = a;
        Array.isArray(r) || (r = [r]);
        for (let g of r)
            g.style.display = p,
            Object.assign(g.style, t),
            o && u !== void 0 ? u ? o.insertBefore(g, u.nextSibling) : o.prepend(g) : o && o.appendChild(g)
    }
    ;
    return {
        prepareIn: n,
        animateIn: async (r, a={}) => {
            let {prepared: o, stagger: u, display: p, duration: g, ...A} = a
              , m = g ? g / 1e3 : void 0;
            o || n(r, a);
            let {finished: T} = ot(r, e, {
                ...A,
                delay: u ? rt(u / 1e3) : void 0,
                duration: m
            });
            return await T
        }
        ,
        animateOut: async (r, a={}) => {
            let {remove: o, stagger: u, target: p, insertAfter: g, display: A="none", duration: m, ...T} = a
              , c = m ? m / 1e3 : void 0;
            if (Array.isArray(r) || (r = [r]),
            r = r.filter(l => document.body.contains(l)),
            !r.length)
                return;
            let {finished: f} = ot(r, e, {
                ...T,
                duration: c,
                delay: u ? rt(u / 1e3) : void 0,
                direction: "reverse"
            });
            await f;
            for (let l of r)
                p && g !== void 0 ? g ? p.insertBefore(l, g.nextSibling) : p.prepend(l) : p && p.appendChild(l),
                o ? l.remove() : l.style.display = A
        }
    }
}
;
var Mi = {
    fade: M({
        keyframes: {
            opacity: [0, 1]
        },
        initialStyles: {
            opacity: "0"
        }
    }),
    "slide-up": M({
        keyframes: {
            y: [100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateY(100px)",
            opacity: "0"
        }
    }),
    "slide-down": M({
        keyframes: {
            y: [-100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateY(-100px)",
            opacity: "0"
        }
    }),
    "slide-right": M({
        keyframes: {
            x: [-100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateX(-100px)",
            opacity: "0"
        }
    }),
    "slide-left": M({
        keyframes: {
            x: [100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateX(100px)",
            opacity: "0"
        }
    }),
    grow: M({
        keyframes: {
            scale: [0, 1],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "scale(0)",
            opacity: "0"
        }
    }),
    shrink: M({
        keyframes: {
            scale: [1.25, 1],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "scale(1.25)",
            opacity: "0"
        }
    }),
    spin: M({
        keyframes: {
            rotate: [900, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "rotate(900deg)",
            opacity: "0"
        }
    })
};
var $i = (t, e) => (Array.isArray(e) || (e = [e]),
e.map(i => t.dispatchEvent(new Event(i,{
    bubbles: !0
}))).every(i => i));
var Ci = (t, e, n) => {
    let i = `fs-${t}-element`
      , s = `fs-${t}-instance`
      , r = c => {
        let {key: f} = n[c];
        return `fs-${t}-${f}`
    }
      , a = (c, f, l) => {
        let {values: d={}} = n[c]
          , v = r(c);
        if (f) {
            let F = d[f];
            return `[${v}="${F}" i]`
        }
        return l ? `[${v}="${l}" i]` : `[${v}]`
    }
      , o = (c, {instance: f}={}) => {
        if (!c)
            return `[${i}]`;
        let l = `[${i}="${c}" i]`;
        if (f === void 0)
            return l;
        if (f === null)
            return `${l}:not([${s}], [${s}] ${l})`;
        let d = `[${s}="${f}"]`;
        return `${l}${d}, ${d} ${l}`
    }
      , u = (c, {instance: f, scope: l=document}={}) => {
        let d = o(c, {
            instance: f
        });
        return l.querySelector(d)
    }
      , p = (c, {instance: f, scope: l=document}={}) => {
        let d = o(c, {
            instance: f
        })
          , v = l.querySelectorAll(d);
        return [...Array.from(v)]
    }
      , g = c => {
        let f = c.closest(`[${s}]`);
        return f ? f.getAttribute(s) : null
    }
      , A = (c, f, {instance: l}={}) => {
        let d = o(f, {
            instance: l
        });
        return c.closest(d)
    }
      , m = (c, f, l) => {
        let d = r(f)
          , v = a(f)
          , S = c?.closest(v)?.getAttribute(d);
        if (!S) {
            for (let I of window.fsComponents.scripts)
                if (S = I.getAttribute(d),
                S)
                    break
        }
        if (!S)
            return;
        if (l) {
            let {values: I={}} = n[f];
            if (!Object.values(I).includes(S))
                return
        }
        return S
    }
    ;
    return {
        getClosestElement: A,
        getElementSelector: o,
        getSettingSelector: a,
        getSettingAttributeName: r,
        queryElement: u,
        queryAllElements: p,
        getInstance: g,
        getAttribute: m,
        hasAttributeValue: (c, f, l) => {
            let {values: d={}} = n[f]
              , v = d[l];
            return m(c, f) === v
        }
    }
}
;
export {Mi as a, $i as b, Ci as c};
