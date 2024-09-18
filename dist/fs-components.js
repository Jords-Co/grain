import { a as d } from "./dist/chunk-J7NTLVPZ.js";
import { g as l } from "./dist/chunk-SH3YLSKW.js";
import "./dist/chunk-OHHOFOA4.js";
var u = async (t, n, o = !0) => {
    if (!t)
        return [];
    let e = o ? l.accountsApiProduction : l.accountsApiDev
        , s = async i => {
            let a = new URL(e);
            a.searchParams.set("componentId", i),
                a.searchParams.set("siteId", t);
            try {
                let c = await fetch(a.toString());
                return c.ok ? (await c.json()).valid : (console.error(`Failed to fetch Finsweet Components license for [${i}].`, c.statusText),
                    !1)
            } catch (c) {
                return console.error("Error fetching data:", c),
                    !1
            }
        }
        , r = n.map(async i => {
            let a = await s(i);
            return {
                app: i,
                licensed: a
            }
        }
        );
    return await Promise.all(r)
}
    ;
var w = async t => {
    let n = t?.getAttribute("fs-components-src");
    if (!n)
        throw new Error("Failed to initialize Finsweet Component. No fs-components-src attribute found on script tag.");
    if (n === "dev")
        return console.warn("You are currently in development mode. Configs will be fetched from the Component Configurator for preview mode."),
        {
            dev: 0
        };
    let o = await import(n);
    if (!t)
        throw new Error('No script tag found with type="module" and fs-components-src attribute');
    return o
}
    ;
var f = d({
    fetched: !1,
    license: []
});
f.subscribe(t => {
    let { license: n, fetched: o } = t;
    if (!o || !window?.fsComponents?.solutions)
        return;
    let { solutions: e } = window.fsComponents;
    Object.keys(e).forEach(r => {
        let m = e[r];
        if (m?.destroy) {
            let { destroy: i } = m;
            !n.some(c => c.app === r && c.licensed) && i && i()
        }
    }
    )
}
);
var C = async t => {
    if (!window?.fsComponents || f.get().fetched)
        return;
    let { scripts: n = [] } = window.fsComponents;
    if (n.length === 0)
        return;
    let o = document.documentElement.getAttribute("data-wf-site")
        , e = await u(o, t, !0);
    f.set({
        fetched: !0,
        license: e
    })
}
    ;
var p, y = async t => {
    let { scripts: n = [] } = window.fsComponents
        , [o = null] = n;
    if (p || (p = await w(o)),
        !o)
        throw new Error('No script tag found with type="module" and fs-components-src attribute');
    switch (t) {
        case "consent":
            {
                let { init: e } = await import("./dist/src-JUTF6KME.js");
                return e(p.consent)
            }
        case "slider":
            {
                let { init: e } = await import("./dist/src-36DONMNQ.js");
                return e(p.slider)
            }
        case "tooltip":
            {
                let { init: e } = await import("./dist/src-UA4SZTB4.js");
                return e(p.tooltip)
            }
        case "cursor":
            {
                let { init: e } = await import("./dist/src-GNI4QZMM.js");
                return e(p.cursor)
            }
        case "tabs":
            {
                let { init: e } = await import("./dist/src-PBE255OM.js");
                return e(p.tabs)
            }
        default:
            throw `Finsweet Component "${t}" is not supported.`
    }
}
    ;
var F = () => {
    let { fsComponents: t } = window;
    if (t && !Array.isArray(t)) {
        h();
        return
    }
    let n = Array.isArray(t) ? t : []
        , o = []
        , e = document.querySelector('script[type="module"][fs-components-src="dev"]');
    e ? o = [e] : o = [...document.querySelectorAll(`script[type="module"][src="${import.meta.url}"]`)],
        window.fsComponents = window.FsComponents = {
            scripts: o,
            solutions: {},
            process: new Set,
            load: g,
            push(...s) {
                for (let [r, m] of s)
                    this.solutions[r]?.loading?.then(m)
            },
            destroy() {
                for (let s in this.solutions)
                    this.solutions[s]?.destroy?.()
            }
        },
        h(),
        window.fsComponents.push(...n)
}
    , h = () => {
        let [t] = window.fsComponents.scripts
            , o = (t?.getAttribute("fs-components-installed") || "")?.split(",");
        if (o.length === 0) {
            console.error("No Finsweet Components installed in this project.");
            return
        }
        for (let s of o)
            g(s);
        window.location.href.includes("not.webflow.io") || C(o)
    }
    , g = async t => {
        if (window.fsComponents.process.has(t))
            return;
        window.fsComponents.process.add(t);
        let n = window.fsComponents.solutions[t] ||= {};
        n.loading = new Promise(o => {
            n.resolve = e => {
                o(e),
                    delete n.resolve
            }
        }
        );
        try {
            let { init: o, version: e } = await y(t)
                , { result: s, destroy: r } = await o();
            return n.version = e,
                n.destroy = () => {
                    r?.(),
                        window.fsComponents.process.delete(t)
                }
                ,
                n.restart = () => (n.destroy?.(),
                    window.fsComponents.load(t)),
                n.resolve?.(s),
                s
        } catch (o) {
            console.error(o)
        }
    }
    ;
F();
