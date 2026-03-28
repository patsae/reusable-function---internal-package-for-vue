"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var colorPalette = ["#1e6091", "#E07A5F", "#3D405B", "#81B29A", "#F2CC8F"];
var __VLS_props = defineProps();
var _a = __VLS_props.orientation, orientation = _a === void 0 ? "horizontal" : _a, _b = __VLS_props.items, items = _b === void 0 ? [] : _b;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "devfolio-skill-badge-wrapper" }, { style: ({ flexDirection: orientation === 'horizontal' ? 'row' : 'column' }) }));
/** @type {__VLS_StyleScopedClasses['devfolio-skill-badge-wrapper']} */ ;
for (var _i = 0, _c = __VLS_vFor((items)); _i < _c.length; _i++) {
    var _d = _c[_i], item = _d[0], index = _d[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ class: "devfolio-skill-badge" }, { key: (index) }), { style: ({ backgroundColor: __VLS_ctx.colorPalette[index % __VLS_ctx.colorPalette.length] }) }));
    /** @type {__VLS_StyleScopedClasses['devfolio-skill-badge']} */ ;
    (item);
    // @ts-ignore
    [colorPalette, colorPalette,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
exports.default = {};
