import {e as r} from "./chunk-33MPAVBV.js";
var i = (o=21) => crypto.getRandomValues(new Uint8Array(o)).reduce( (e, t) => (t &= 63,
t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_",
e), "");
var d = o => !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length);
var n = o => {
    let e;
    for (let t of Array.from(o.childNodes))
        if (r(t) && t.childNodes.length ? e = n(t) : t.nodeType === Node.TEXT_NODE && t.textContent?.trim() && (e = t),
        e)
            break;
    return e
}
;
var u = o => {
    let {overflow: e} = getComputedStyle(o);
    return e === "auto" || e === "scroll"
}
;
export {i as a, d as b, n as c, u as d};
