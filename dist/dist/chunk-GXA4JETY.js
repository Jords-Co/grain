var n = (t=document) => t.documentElement.getAttribute("data-wf-site");
var o = async t => {
    let {Webflow: e} = window;
    if (!(!e || !("destroy"in e) || !("ready"in e) || !("require"in e)) && !(t && !t.length)) {
        if (t || (e.destroy(),
        e.ready()),
        !t || t.includes("ix2")) {
            let r = e.require("ix2");
            r && (e.destroy(),
            e.ready(),
            r.init())
        }
        if (!t || t.includes("commerce")) {
            let r = e.require("commerce")
              , i = n();
            r && i && (r.destroy(),
            r.init({
                siteId: i,
                apiUrl: "https://render.webflow.com"
            }))
        }
        if (t?.includes("lightbox") && e.require("lightbox")?.ready(),
        t?.includes("slider")) {
            let r = e.require("slider");
            r && (r.redraw(),
            r.ready())
        }
        return t?.includes("tabs") && e.require("tabs")?.redraw(),
        new Promise(r => e.push( () => r(void 0)))
    }
}
;
export {o as a};
