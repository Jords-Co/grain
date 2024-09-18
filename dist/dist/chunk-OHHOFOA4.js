var N = Object.defineProperty;
var n = (T, a) => {
    for (var e in a)
        N(T, e, {
            get: a[e],
            enumerable: !0
        })
}
;
var E = {
    INSTANCE: "fs-slider-instance",
    ELEMENT: "fs-slider-element",
    CONFIG: "fs-slider-config",
    TYPE: "fs-slider-type"
}
  , L = {
    INSTANCE: {
        name: E.INSTANCE,
        value: "fs-slider"
    },
    CONFIG: {
        name: E.CONFIG,
        value: JSON.stringify({})
    },
    TYPE: {
        name: E.TYPE,
        value: "static"
    },
    LIST_WRAPPER: {
        name: E.ELEMENT,
        value: "list-wrapper"
    },
    LIST: {
        name: E.ELEMENT,
        value: "list"
    },
    SLIDE: {
        name: E.ELEMENT,
        value: "slide"
    },
    NAVIGATION: {
        name: E.ELEMENT,
        value: "navigation"
    },
    BUTTON_PREVIOUS: {
        name: E.ELEMENT,
        value: "previous"
    },
    BUTTON_NEXT: {
        name: E.ELEMENT,
        value: "next"
    },
    PAGINATION: {
        name: E.ELEMENT,
        value: "pagination"
    },
    PAGINATION_BULLET: {
        name: E.ELEMENT,
        value: "pagination-bullet"
    },
    PAGINATION_BULLET_ACTIVE: {
        name: E.ELEMENT,
        value: "pagination-bullet-active"
    },
    PAGINATION_FRACTION_CURRENT: {
        name: E.ELEMENT,
        value: "pagination-fraction-current"
    },
    PAGINATION_FRACTION_TOTAL: {
        name: E.ELEMENT,
        value: "pagination-fraction-total"
    },
    PROGRESS: {
        name: E.ELEMENT,
        value: "progress"
    },
    SCROLLBAR: {
        name: E.ELEMENT,
        value: "scrollbar"
    },
    SCROLLBAR_DRAG: {
        name: E.ELEMENT,
        value: "scrollbar-drag"
    }
};
export {n as a, L as b};
