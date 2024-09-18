var n = e => new Promise(o => setTimeout(o, e));
var t = async () => new Promise(e => {
    window.Webflow ||= [],
    window.Webflow.push(e)
}
)
  , s = async () => new Promise(e => {
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e(void 0)
}
);
export {n as a, t as b, s as c};
