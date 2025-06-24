"use client";
import {
    className as className2,
    css as css2,
    fonts as fonts2
} from "./chunks/chunk-4H4CZE4L.js";
import {
    className as className4,
    css as css4,
    fonts as fonts4
} from "./chunks/chunk-I7AUDPT2.js";
import {
    className as className3,
    css as css3,
    fonts as fonts3
} from "./chunks/chunk-LTAVNNOZ.js";
import {
    className,
    css,
    fonts
} from "./chunks/chunk-RN7LRJPU.js";

// virtual:contact-body
import {
    Fragment as Fragment4
} from "react";
import {
    ContextProviders
} from "unframer";

// /:https://framer.com/m/ContactBody-sgjS.js
import {
    jsx as _jsx3,
    jsxs as _jsxs3,
    Fragment as _Fragment
} from "react/jsx-runtime";
import {
    addFonts as addFonts3,
    addPropertyControls as addPropertyControls3,
    ComponentViewportProvider,
    ControlType as ControlType3,
    cx as cx3,
    FormContainer,
    FormPlainTextInput,
    getFonts,
    getFontsFromSharedStyle as getFontsFromSharedStyle3,
    RichText as RichText3,
    SmartComponentScopedContainer,
    useComponentViewport as useComponentViewport3,
    useLocaleInfo as useLocaleInfo3,
    useVariantState as useVariantState3,
    withCSS as withCSS3,
    withFX as withFX2
} from "unframer";
import {
    LayoutGroup as LayoutGroup3,
    motion as motion3,
    MotionConfigContext as MotionConfigContext3
} from "unframer";
import * as React3 from "react";
import {
    useRef as useRef3
} from "react";

// /:https://framerusercontent.com/modules/2Jxg8Zzgwf2bJKMDmCH3/4HZYvFXk2GZg81y517yG/ck6MnBDfu.js
import {
    jsx as _jsx,
    jsxs as _jsxs
} from "react/jsx-runtime";
import {
    addFonts,
    addPropertyControls,
    ControlType,
    cx,
    getFontsFromSharedStyle,
    RichText,
    useComponentViewport,
    useLocaleInfo,
    useVariantState,
    withCSS,
    withFX
} from "unframer";
import {
    LayoutGroup,
    motion,
    MotionConfigContext
} from "unframer";
import * as React from "react";
import {
    useRef
} from "react";

// /:https://framerusercontent.com/modules/zGVbhM9EDxljYPLZS1uC/9el9WDnXvfcpHFf1Gg9K/WA7YBUoWN.js
import {
    fontStore
} from "unframer";
fontStore.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts5 = [{
    explicitInter: true,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/qrVgiXNd6RuQjETYQiVQ9nqCk.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2",
        weight: "600"
    }]
}];
var css5 = ['.framer-g8p4K .framer-styles-preset-1xv2ouf:not(.rich-text-wrapper), .framer-g8p4K .framer-styles-preset-1xv2ouf.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className5 = "framer-g8p4K";

// /:https://framerusercontent.com/modules/2Jxg8Zzgwf2bJKMDmCH3/4HZYvFXk2GZg81y517yG/ck6MnBDfu.js
var MotionDivWithFX = withFX(motion.div);
var enabledGestures = {
    sR8uaJmvU: {
        hover: true,
        pressed: true
    }
};
var cycleOrder = ["sR8uaJmvU", "HsLliaHmA", "MWO5PjDFA", "jLwjSMWpk", "wbYWinPat", "JxchebADB"];
var serializationHash = "framer-jXLRo";
var variantClassNames = {
    HsLliaHmA: "framer-v-19b0nvk",
    jLwjSMWpk: "framer-v-16o4wzl",
    JxchebADB: "framer-v-ue1qcw",
    MWO5PjDFA: "framer-v-knhgq5",
    sR8uaJmvU: "framer-v-1c57ea3",
    wbYWinPat: "framer-v-1gve4ty"
};

function addPropertyOverrides(overrides, ...variants) {
    const nextOverrides = {};
    variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
    return nextOverrides;
}
var transition1 = {
    delay: 0,
    duration: 0.4,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween"
};
var transition2 = {
    delay: 0,
    duration: 0.5,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween"
};
var transition3 = {
    delay: 0,
    duration: 1,
    ease: [0, 0, 1, 1],
    type: "tween"
};
var animation = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
};
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var Transition = ({
    value,
    children
}) => {
    const config = React.useContext(MotionConfigContext);
    const transition = value ?? config.transition;
    const contextValue = React.useMemo(() => ({
        ...config,
        transition
    }), [JSON.stringify(transition)]);
    return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, {
        value: contextValue,
        children
    });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = {
    Default: "sR8uaJmvU",
    Disabled: "MWO5PjDFA",
    Error: "wbYWinPat",
    Loading: "HsLliaHmA",
    Phone: "JxchebADB",
    Success: "jLwjSMWpk"
};
var getProps = ({
    height,
    id,
    width,
    ...props
}) => {
    return {
        ...props,
        variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "sR8uaJmvU"
    };
};
var createLayoutDependency = (props, variants) => {
    if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    const fallbackRef = useRef(null);
    const refBinding = ref ?? fallbackRef;
    const defaultLayoutId = React.useId();
    const {
        activeLocale,
        setLocale
    } = useLocaleInfo();
    const componentViewport = useComponentViewport();
    const {
        style,
        className: className7,
        layoutId,
        variant,
        ...restProps
    } = getProps(props);
    const {
        baseVariant,
        classNames,
        clearLoadingGesture,
        gestureHandlers,
        gestureVariant,
        isLoading,
        setGestureState,
        setVariant,
        variants
    } = useVariantState({
        cycleOrder,
        defaultVariant: "sR8uaJmvU",
        enabledGestures,
        ref: refBinding,
        variant,
        variantClassNames
    });
    const layoutDependency = createLayoutDependency(props, variants);
    const sharedStyleClassNames = [className5];
    const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
    const isDisplayed = () => {
        if (baseVariant === "HsLliaHmA") return false;
        return true;
    };
    const isDisplayed1 = () => {
        if (baseVariant === "HsLliaHmA") return true;
        return false;
    };
    return /* @__PURE__ */ _jsx(LayoutGroup, {
        id: layoutId ?? defaultLayoutId,
        children: /* @__PURE__ */ _jsx(Variants, {
            animate: variants,
            initial: false,
            children: /* @__PURE__ */ _jsx(Transition, {
                value: transition1,
                ...addPropertyOverrides({
                    "sR8uaJmvU-hover": {
                        value: transition2
                    }
                }, baseVariant, gestureVariant),
                children: /* @__PURE__ */ _jsxs(motion.button, {
                    ...restProps,
                    ...gestureHandlers,
                    className: cx(scopingClassNames, "framer-1c57ea3", className7, classNames),
                    "data-border": true,
                    "data-framer-name": "Default",
                    "data-reset": "button",
                    layoutDependency,
                    layoutId: "sR8uaJmvU",
                    ref: refBinding,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-f1c81b52-2a59-4da2-a47f-3f4bfb2f2b58, rgb(1, 30, 255))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 999,
                        borderBottomRightRadius: 999,
                        borderTopLeftRadius: 999,
                        borderTopRightRadius: 999,
                        boxShadow: "none",
                        opacity: 1,
                        ...style
                    },
                    variants: {
                        "sR8uaJmvU-hover": {
                            "--border-color": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))",
                            backgroundColor: "var(--token-f1c81b52-2a59-4da2-a47f-3f4bfb2f2b58, rgb(1, 30, 255))",
                            boxShadow: "none",
                            opacity: 1
                        },
                        "sR8uaJmvU-pressed": {
                            boxShadow: "none",
                            opacity: 1
                        },
                        jLwjSMWpk: {
                            opacity: 1
                        },
                        JxchebADB: {
                            boxShadow: "none",
                            opacity: 1
                        },
                        MWO5PjDFA: {
                            opacity: 0.5
                        },
                        wbYWinPat: {
                            "--border-color": "var(--token-3f7ab7b0-88eb-47f2-ab4d-dd4761361ee0, rgb(255, 34, 68))",
                            boxShadow: "-12px 0px 21px -3px var(--token-3a5ebd19-1975-41f4-a3b4-f278efe98054, rgb(255, 34, 68)), -7px 0px 10px -5px rgb(255, 56, 132)",
                            opacity: 1
                        }
                    },
                    ...addPropertyOverrides({
                        "sR8uaJmvU-hover": {
                            "data-framer-name": void 0
                        },
                        "sR8uaJmvU-pressed": {
                            "data-framer-name": void 0
                        },
                        HsLliaHmA: {
                            "data-framer-name": "Loading"
                        },
                        jLwjSMWpk: {
                            "data-framer-name": "Success"
                        },
                        JxchebADB: {
                            "data-framer-name": "Phone"
                        },
                        MWO5PjDFA: {
                            "data-framer-name": "Disabled"
                        },
                        wbYWinPat: {
                            "data-framer-name": "Error"
                        }
                    }, baseVariant, gestureVariant),
                    children: [isDisplayed() && /* @__PURE__ */ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                                className: "framer-styles-preset-1xv2ouf",
                                "data-styles-preset": "WA7YBUoWN",
                                children: "Invia"
                            })
                        }),
                        className: "framer-1gio027",
                        fonts: ["Inter"],
                        layoutDependency,
                        layoutId: "cXCEpl4P3",
                        style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline"
                        },
                        variants: {
                            "sR8uaJmvU-hover": {
                                "--extracted-r6o4lv": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))"
                            },
                            jLwjSMWpk: {
                                "--extracted-r6o4lv": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))"
                            },
                            wbYWinPat: {
                                "--extracted-r6o4lv": "var(--token-3f7ab7b0-88eb-47f2-ab4d-dd4761361ee0, rgb(255, 34, 68))"
                            }
                        },
                        verticalAlignment: "top",
                        withExternalLayout: true,
                        ...addPropertyOverrides({
                            "sR8uaJmvU-hover": {
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                    children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: "framer-styles-preset-1xv2ouf",
                                        "data-styles-preset": "WA7YBUoWN",
                                        style: {
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                        },
                                        children: "Invia"
                                    })
                                })
                            },
                            jLwjSMWpk: {
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                    children: /* @__PURE__ */ _jsx(motion.p, {
                                        style: {
                                            "--font-selector": "RlM7UG9wcGlucy1zZW1pYm9sZA==",
                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "600",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0)))"
                                        },
                                        children: "Thank you"
                                    })
                                }),
                                fonts: ["FS;Poppins-semibold"]
                            },
                            wbYWinPat: {
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                    children: /* @__PURE__ */ _jsx(motion.p, {
                                        style: {
                                            "--font-selector": "RlM7UG9wcGlucy1zZW1pYm9sZA==",
                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "600",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-3f7ab7b0-88eb-47f2-ab4d-dd4761361ee0, rgb(255, 34, 68)))"
                                        },
                                        children: "Someting went wrong"
                                    })
                                }),
                                fonts: ["FS;Poppins-semibold"]
                            }
                        }, baseVariant, gestureVariant)
                    }), isDisplayed1() && /* @__PURE__ */ _jsx(motion.div, {
                        className: "framer-1aqzcxf",
                        "data-framer-name": "Spinner",
                        layoutDependency,
                        layoutId: "LCNUfBGGF",
                        style: {
                            mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                            WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
                        },
                        children: /* @__PURE__ */ _jsx(MotionDivWithFX, {
                            __framer__loop: animation,
                            __framer__loopEffectEnabled: true,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: "loop",
                            __framer__loopTransition: transition3,
                            __perspectiveFX: false,
                            __smartComponentFX: true,
                            __targetOpacity: 1,
                            className: "framer-1s11gbx",
                            "data-framer-name": "Conic",
                            layoutDependency,
                            layoutId: "PVE3MpTSU",
                            style: {
                                backgroundColor: "var(--token-d87dc5f7-2638-4b77-9368-a8568c56fcca, rgb(38, 38, 38))"
                            },
                            children: /* @__PURE__ */ _jsx(motion.div, {
                                className: "framer-14zye2k",
                                "data-framer-name": "Rounding",
                                layoutDependency,
                                layoutId: "UkGCYQ3XP",
                                style: {
                                    backgroundColor: "var(--token-9a7303fe-2324-4aa1-bbd4-e1f1d449de82, rgba(255, 255, 255, 0.12))",
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    borderTopLeftRadius: 1,
                                    borderTopRightRadius: 1
                                },
                                transformTemplate: transformTemplate1
                            })
                        })
                    })]
                })
            })
        })
    });
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-jXLRo.framer-1e2qtz, .framer-jXLRo .framer-1e2qtz { display: block; }", ".framer-jXLRo.framer-1c57ea3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 6px 6px 6px 16px; position: relative; width: 240px; }", ".framer-jXLRo .framer-1gio027 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-jXLRo .framer-1aqzcxf { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-jXLRo .framer-1s11gbx { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-jXLRo .framer-14zye2k { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 9px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 10px; }", ".framer-jXLRo.framer-v-19b0nvk.framer-1c57ea3, .framer-jXLRo.framer-v-knhgq5.framer-1c57ea3, .framer-jXLRo.framer-v-16o4wzl.framer-1c57ea3, .framer-jXLRo.framer-v-1gve4ty.framer-1c57ea3, .framer-jXLRo.framer-v-ue1qcw.framer-1c57ea3 { cursor: unset; }", ".framer-jXLRo.framer-v-19b0nvk .framer-14zye2k { height: var(--framer-aspect-ratio-supported, 10px); }", ...css5, '.framer-jXLRo[data-border="true"]::after, .framer-jXLRo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var Framerck6MnBDfu = withCSS(Component, css6, "framer-jXLRo");
var stdin_default = Framerck6MnBDfu;
Framerck6MnBDfu.displayName = "Submit Button";
Framerck6MnBDfu.defaultProps = {
    height: 40,
    width: 240
};
addPropertyControls(Framerck6MnBDfu, {
    variant: {
        options: ["sR8uaJmvU", "HsLliaHmA", "MWO5PjDFA", "jLwjSMWpk", "wbYWinPat", "JxchebADB"],
        optionTitles: ["Default", "Loading", "Disabled", "Success", "Error", "Phone"],
        title: "Variant",
        type: ControlType.Enum
    }
});
addFonts(Framerck6MnBDfu, [{
    explicitInter: true,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }, {
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/E6J4GS76KHNRRUWODFCFOX2JRKNRSFVY/3GYVT5S4AH7VMPASDDKOTIPV6P3WJXGI/24R4YOH3G2SFDSTCNHOVGYEX3DMRC3CE.woff2",
        weight: "600"
    }]
}, ...getFontsFromSharedStyle(fonts5)], {
    supportsExplicitInterCodegen: true
});

// /:https://framerusercontent.com/modules/hr8vWhbINKKPPeFdWhYa/Qvhj33YPbtzZdHtHkXNg/LEyQbci0Z.js
import {
    jsx as _jsx2,
    jsxs as _jsxs2
} from "react/jsx-runtime";
import {
    addFonts as addFonts2,
    addPropertyControls as addPropertyControls2,
    ControlType as ControlType2,
    cx as cx2,
    getFontsFromSharedStyle as getFontsFromSharedStyle2,
    getLoadingLazyAtYPosition,
    Image,
    Link,
    RichText as RichText2,
    useComponentViewport as useComponentViewport2,
    useLocaleInfo as useLocaleInfo2,
    useVariantState as useVariantState2,
    withCSS as withCSS2
} from "unframer";
import {
    LayoutGroup as LayoutGroup2,
    motion as motion2,
    MotionConfigContext as MotionConfigContext2
} from "unframer";
import * as React2 from "react";
import {
    useRef as useRef2
} from "react";

// /:https://framerusercontent.com/modules/kRwV7uIaVNPWeiwP2eij/YAZd28cWZup7DiHCnQCe/hDifVqNQA.js
import {
    fontStore as fontStore2
} from "unframer";
fontStore2.loadFonts([]);
var fonts6 = [{
    explicitInter: true,
    fonts: []
}];
var css7 = [".framer-jHPR2 .framer-styles-preset-btyrpf:not(.rich-text-wrapper), .framer-jHPR2 .framer-styles-preset-btyrpf.rich-text-wrapper a { --framer-link-current-text-color: #d9d9d9; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #87c7ff; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; }"];
var className6 = "framer-jHPR2";

// /:https://framerusercontent.com/modules/hr8vWhbINKKPPeFdWhYa/Qvhj33YPbtzZdHtHkXNg/LEyQbci0Z.js
var enabledGestures2 = {
    rRvQnsnSr: {
        hover: true
    }
};
var cycleOrder2 = ["rRvQnsnSr", "oCy7VuqmD"];
var serializationHash2 = "framer-qbsZe";
var variantClassNames2 = {
    oCy7VuqmD: "framer-v-1jyxahz",
    rRvQnsnSr: "framer-v-2oi24e"
};

function addPropertyOverrides2(overrides, ...variants) {
    const nextOverrides = {};
    variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
    return nextOverrides;
}
var transition12 = {
    bounce: 0.2,
    delay: 0,
    duration: 0.4,
    type: "spring"
};
var toResponsiveImage = (value) => {
    if (typeof value === "object" && value !== null && typeof value.src === "string") {
        return value;
    }
    return typeof value === "string" ? {
        src: value
    } : void 0;
};
var Transition2 = ({
    value,
    children
}) => {
    const config = React2.useContext(MotionConfigContext2);
    const transition = value ?? config.transition;
    const contextValue = React2.useMemo(() => ({
        ...config,
        transition
    }), [JSON.stringify(transition)]);
    return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, {
        value: contextValue,
        children
    });
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap2 = {
    Desktop: "rRvQnsnSr",
    Phone: "oCy7VuqmD"
};
var getProps2 = ({
    height,
    id,
    image,
    info,
    link,
    link2,
    phone,
    text,
    title,
    width,
    ...props
}) => {
    return {
        ...props,
        AS1KgU6Yu: title ?? props.AS1KgU6Yu ?? "Send a Email",
        B3zBQny7t: image ?? props.B3zBQny7t ?? {
            pixelHeight: 717,
            pixelWidth: 717,
            src: "https://framerusercontent.com/images/Xe1OOsUygahVWOsMln8FJXzQUo.png?scale-down-to=512",
            srcSet: "https://framerusercontent.com/images/Xe1OOsUygahVWOsMln8FJXzQUo.png?scale-down-to=512 512w,https://framerusercontent.com/images/Xe1OOsUygahVWOsMln8FJXzQUo.png 717w"
        },
        BoxHsnoqY: link ?? props.BoxHsnoqY,
        dlpb4yTc1: text ?? props.dlpb4yTc1 ?? "Need assistance? Drop us a message anytime.",
        q4l00wNjp: info ?? props.q4l00wNjp ?? "info@aicron.com",
        QbugZ2sWr: phone ?? props.QbugZ2sWr ?? "+ 3 9 347 4120780",
        variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "rRvQnsnSr",
        YQKo4_kys: link2 ?? props.YQKo4_kys
    };
};
var createLayoutDependency2 = (props, variants) => {
    if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
    const fallbackRef = useRef2(null);
    const refBinding = ref ?? fallbackRef;
    const defaultLayoutId = React2.useId();
    const {
        activeLocale,
        setLocale
    } = useLocaleInfo2();
    const componentViewport = useComponentViewport2();
    const {
        style,
        className: className7,
        layoutId,
        variant,
        B3zBQny7t,
        AS1KgU6Yu,
        dlpb4yTc1,
        q4l00wNjp,
        BoxHsnoqY,
        QbugZ2sWr,
        YQKo4_kys,
        ...restProps
    } = getProps2(props);
    const {
        baseVariant,
        classNames,
        clearLoadingGesture,
        gestureHandlers,
        gestureVariant,
        isLoading,
        setGestureState,
        setVariant,
        variants
    } = useVariantState2({
        cycleOrder: cycleOrder2,
        defaultVariant: "rRvQnsnSr",
        enabledGestures: enabledGestures2,
        ref: refBinding,
        variant,
        variantClassNames: variantClassNames2
    });
    const layoutDependency = createLayoutDependency2(props, variants);
    const sharedStyleClassNames = [className4, className3, className6];
    const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
    return /* @__PURE__ */ _jsx2(LayoutGroup2, {
        id: layoutId ?? defaultLayoutId,
        children: /* @__PURE__ */ _jsx2(Variants2, {
            animate: variants,
            initial: false,
            children: /* @__PURE__ */ _jsx2(Transition2, {
                value: transition12,
                children: /* @__PURE__ */ _jsxs2(motion2.div, {
                    ...restProps,
                    ...gestureHandlers,
                    className: cx2(scopingClassNames, "framer-2oi24e", className7, classNames),
                    "data-framer-name": "Desktop",
                    layoutDependency,
                    layoutId: "rRvQnsnSr",
                    ref: refBinding,
                    style: {
                        ...style
                    },
                    ...addPropertyOverrides2({
                        "rRvQnsnSr-hover": {
                            "data-framer-name": void 0
                        },
                        oCy7VuqmD: {
                            "data-framer-name": "Phone"
                        }
                    }, baseVariant, gestureVariant),
                    children: [ /* @__PURE__ */ _jsx2(Image, {
                        as: "figure",
                        background: {
                            alt: "",
                            fit: "fill",
                            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 256) - 0 - 519.6) / 2 + 0 + 0)),
                            pixelHeight: 61,
                            pixelWidth: 61,
                            sizes: "60px",
                            ...toResponsiveImage(B3zBQny7t)
                        },
                        className: "framer-1cwnqf4",
                        "data-framer-name": "Icon",
                        layoutDependency,
                        layoutId: "sCP0UqD2g"
                    }), /* @__PURE__ */ _jsxs2(motion2.div, {
                        className: "framer-13tauxq",
                        "data-framer-name": "Content",
                        layoutDependency,
                        layoutId: "EHXRaIQXw",
                        children: [ /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: "framer-3un7c2",
                            "data-framer-name": "Text",
                            layoutDependency,
                            layoutId: "fZXmWov0J",
                            children: [ /* @__PURE__ */ _jsx2(RichText2, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                    children: /* @__PURE__ */ _jsx2(motion2.h4, {
                                        className: "framer-styles-preset-quy3e0",
                                        "data-styles-preset": "zjIZS4r46",
                                        children: "Send a Email"
                                    })
                                }),
                                className: "framer-bp9w99",
                                "data-framer-name": "Send a Email",
                                fonts: ["Inter"],
                                layoutDependency,
                                layoutId: "rRf2olSqM",
                                style: {
                                    "--framer-paragraph-spacing": "0px"
                                },
                                text: AS1KgU6Yu,
                                verticalAlignment: "top",
                                withExternalLayout: true,
                                ...addPropertyOverrides2({
                                    oCy7VuqmD: {
                                        children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                            children: /* @__PURE__ */ _jsx2(motion2.h4, {
                                                className: "framer-styles-preset-quy3e0",
                                                "data-styles-preset": "zjIZS4r46",
                                                style: {
                                                    "--framer-text-alignment": "center"
                                                },
                                                children: "Send a Email"
                                            })
                                        })
                                    }
                                }, baseVariant, gestureVariant)
                            }), /* @__PURE__ */ _jsx2(RichText2, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                                        className: "framer-styles-preset-dsr0r",
                                        "data-styles-preset": "Erxl6HnxD",
                                        style: {
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-80ffe7cf-9d09-4fa3-9c39-3c4b6492f37f, rgb(191, 191, 191)))"
                                        },
                                        children: "Need assistance? Drop us a message anytime."
                                    })
                                }),
                                className: "framer-es26dj",
                                "data-framer-name": "Need assistance? Drop us a message anytime.",
                                fonts: ["Inter"],
                                layoutDependency,
                                layoutId: "zpeZGB_Wg",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-80ffe7cf-9d09-4fa3-9c39-3c4b6492f37f, rgb(191, 191, 191))",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                text: dlpb4yTc1,
                                verticalAlignment: "top",
                                withExternalLayout: true,
                                ...addPropertyOverrides2({
                                    oCy7VuqmD: {
                                        children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                            children: /* @__PURE__ */ _jsx2(motion2.p, {
                                                className: "framer-styles-preset-dsr0r",
                                                "data-styles-preset": "Erxl6HnxD",
                                                style: {
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-80ffe7cf-9d09-4fa3-9c39-3c4b6492f37f, rgb(191, 191, 191)))"
                                                },
                                                children: "Need assistance? Drop us a message anytime."
                                            })
                                        })
                                    }
                                }, baseVariant, gestureVariant)
                            })]
                        }), /* @__PURE__ */ _jsx2(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    className: "framer-styles-preset-dsr0r",
                                    "data-styles-preset": "Erxl6HnxD",
                                    children: /* @__PURE__ */ _jsx2(Link, {
                                        href: YQKo4_kys,
                                        motionChild: true,
                                        nodeId: "fCOv0lW1J",
                                        openInNewTab: false,
                                        relValues: [],
                                        scopeId: "LEyQbci0Z",
                                        smoothScroll: false,
                                        children: /* @__PURE__ */ _jsx2(motion2.a, {
                                            className: "framer-styles-preset-btyrpf",
                                            "data-styles-preset": "hDifVqNQA",
                                            children: "info@aicron.com"
                                        })
                                    })
                                })
                            }),
                            className: "framer-px7umi",
                            "data-framer-name": "info@cawar.com",
                            fonts: ["Inter"],
                            layoutDependency,
                            layoutId: "fCOv0lW1J",
                            style: {
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: q4l00wNjp,
                            variants: {
                                "rRvQnsnSr-hover": {
                                    "--extracted-r6o4lv": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: true,
                            ...addPropertyOverrides2({
                                "rRvQnsnSr-hover": {
                                    children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                        children: /* @__PURE__ */ _jsx2(motion2.p, {
                                            className: "framer-styles-preset-dsr0r",
                                            "data-styles-preset": "Erxl6HnxD",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                            },
                                            children: /* @__PURE__ */ _jsx2(Link, {
                                                href: YQKo4_kys,
                                                motionChild: true,
                                                nodeId: "fCOv0lW1J",
                                                openInNewTab: false,
                                                relValues: [],
                                                scopeId: "LEyQbci0Z",
                                                smoothScroll: false,
                                                children: /* @__PURE__ */ _jsx2(motion2.a, {
                                                    className: "framer-styles-preset-btyrpf",
                                                    "data-styles-preset": "hDifVqNQA",
                                                    children: "info@aicron.com"
                                                })
                                            })
                                        })
                                    })
                                },
                                oCy7VuqmD: {
                                    children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                        children: /* @__PURE__ */ _jsx2(motion2.p, {
                                            className: "framer-styles-preset-dsr0r",
                                            "data-styles-preset": "Erxl6HnxD",
                                            style: {
                                                "--framer-text-alignment": "center"
                                            },
                                            children: /* @__PURE__ */ _jsx2(Link, {
                                                href: YQKo4_kys,
                                                motionChild: true,
                                                nodeId: "fCOv0lW1J",
                                                openInNewTab: false,
                                                relValues: [],
                                                scopeId: "LEyQbci0Z",
                                                smoothScroll: false,
                                                children: /* @__PURE__ */ _jsx2(motion2.a, {
                                                    className: "framer-styles-preset-btyrpf",
                                                    "data-styles-preset": "hDifVqNQA",
                                                    children: "info@aicron.com"
                                                })
                                            })
                                        })
                                    })
                                }
                            }, baseVariant, gestureVariant)
                        }), /* @__PURE__ */ _jsx2(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    className: "framer-styles-preset-dsr0r",
                                    "data-styles-preset": "Erxl6HnxD",
                                    style: {
                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                    },
                                    children: /* @__PURE__ */ _jsx2(Link, {
                                        href: BoxHsnoqY,
                                        motionChild: true,
                                        nodeId: "axdUAccJa",
                                        openInNewTab: false,
                                        relValues: [],
                                        scopeId: "LEyQbci0Z",
                                        smoothScroll: false,
                                        children: /* @__PURE__ */ _jsx2(motion2.a, {
                                            className: "framer-styles-preset-btyrpf",
                                            "data-styles-preset": "hDifVqNQA",
                                            children: "+ 3 9 347 4120780"
                                        })
                                    })
                                })
                            }),
                            className: "framer-1gmzo8c",
                            "data-framer-name": "info@cawar.com",
                            fonts: ["Inter"],
                            layoutDependency,
                            layoutId: "axdUAccJa",
                            style: {
                                "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: QbugZ2sWr,
                            verticalAlignment: "top",
                            withExternalLayout: true,
                            ...addPropertyOverrides2({
                                oCy7VuqmD: {
                                    children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                        children: /* @__PURE__ */ _jsx2(motion2.p, {
                                            className: "framer-styles-preset-dsr0r",
                                            "data-styles-preset": "Erxl6HnxD",
                                            style: {
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: /* @__PURE__ */ _jsx2(Link, {
                                                href: BoxHsnoqY,
                                                motionChild: true,
                                                nodeId: "axdUAccJa",
                                                openInNewTab: false,
                                                relValues: [],
                                                scopeId: "LEyQbci0Z",
                                                smoothScroll: false,
                                                children: /* @__PURE__ */ _jsx2(motion2.a, {
                                                    className: "framer-styles-preset-btyrpf",
                                                    "data-styles-preset": "hDifVqNQA",
                                                    children: "+ 3 9 347 4120780"
                                                })
                                            })
                                        })
                                    })
                                }
                            }, baseVariant, gestureVariant)
                        })]
                    })]
                })
            })
        })
    });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-qbsZe.framer-1dn15km, .framer-qbsZe .framer-1dn15km { display: block; }", ".framer-qbsZe.framer-2oi24e { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 224px; }", ".framer-qbsZe .framer-1cwnqf4 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 60px); overflow: hidden; position: relative; width: 60px; }", ".framer-qbsZe .framer-13tauxq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-qbsZe .framer-3un7c2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-qbsZe .framer-bp9w99, .framer-qbsZe .framer-es26dj, .framer-qbsZe .framer-px7umi, .framer-qbsZe .framer-1gmzo8c { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-qbsZe.framer-v-1jyxahz.framer-2oi24e { align-content: center; align-items: center; cursor: unset; }", ".framer-qbsZe.framer-v-1jyxahz .framer-3un7c2 { align-content: center; align-items: center; }", ".framer-qbsZe.framer-v-1jyxahz .framer-es26dj { max-width: 220px; }", ...css4, ...css3, ...css7];
var FramerLEyQbci0Z = withCSS2(Component2, css8, "framer-qbsZe");
var stdin_default2 = FramerLEyQbci0Z;
FramerLEyQbci0Z.displayName = "Contact Card";
FramerLEyQbci0Z.defaultProps = {
    height: 256,
    width: 224
};
addPropertyControls2(FramerLEyQbci0Z, {
    variant: {
        options: ["rRvQnsnSr", "oCy7VuqmD"],
        optionTitles: ["Desktop", "Phone"],
        title: "Variant",
        type: ControlType2.Enum
    },
    B3zBQny7t: {
        __defaultAssetReference: "data:framer/asset-reference,Xe1OOsUygahVWOsMln8FJXzQUo.png?originalFilename=email.png&preferredSize=auto",
        title: "Image",
        type: ControlType2.ResponsiveImage
    },
    AS1KgU6Yu: {
        defaultValue: "Send a Email",
        displayTextArea: false,
        title: "Title",
        type: ControlType2.String
    },
    dlpb4yTc1: {
        defaultValue: "Need assistance? Drop us a message anytime.",
        displayTextArea: false,
        title: "Text",
        type: ControlType2.String
    },
    q4l00wNjp: {
        defaultValue: "info@aicron.com",
        displayTextArea: false,
        title: "Info",
        type: ControlType2.String
    },
    BoxHsnoqY: {
        title: "Link",
        type: ControlType2.Link
    },
    QbugZ2sWr: {
        defaultValue: "+ 3 9 347 4120780",
        displayTextArea: false,
        title: "Phone",
        type: ControlType2.String
    },
    YQKo4_kys: {
        title: "Link 2",
        type: ControlType2.Link
    }
});
addFonts2(FramerLEyQbci0Z, [{
    explicitInter: true,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...getFontsFromSharedStyle2(fonts4), ...getFontsFromSharedStyle2(fonts3), ...getFontsFromSharedStyle2(fonts6)], {
    supportsExplicitInterCodegen: true
});

// /:https://framer.com/m/ContactBody-sgjS.js
var ContactCardFonts = getFonts(stdin_default2);
var SmartComponentScopedContainerWithFX = withFX2(SmartComponentScopedContainer);
var SubmitButtonFonts = getFonts(stdin_default);
var FormContainerWithFX = withFX2(FormContainer);
var cycleOrder3 = ["Y8pCsrogV", "QNGfPt3kL", "MaoW3tviV"];
var serializationHash3 = "framer-X1I6O";
var variantClassNames3 = {
    MaoW3tviV: "framer-v-ngjnb6",
    QNGfPt3kL: "framer-v-33lt8j",
    Y8pCsrogV: "framer-v-1h1148"
};

function addPropertyOverrides3(overrides, ...variants) {
    const nextOverrides = {};
    variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
    return nextOverrides;
}
var transition13 = {
    bounce: 0.2,
    delay: 0,
    duration: 0.4,
    type: "spring"
};
var animation2 = {
    filter: "blur(10px)",
    opacity: 1e-3,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10
};
var transition22 = {
    delay: 0.05,
    duration: 0.4,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween"
};
var textEffect = {
    effect: animation2,
    repeat: false,
    startDelay: 0,
    threshold: 0.5,
    tokenization: "word",
    transition: transition22,
    trigger: "onInView",
    type: "appear"
};
var animation1 = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 50
};
var transition32 = {
    delay: 0,
    duration: 0.6,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween"
};
var toResponsiveImage2 = (value) => {
    if (typeof value === "object" && value !== null && typeof value.src === "string") {
        return value;
    }
    return typeof value === "string" ? {
        src: value
    } : void 0;
};
var transition4 = {
    delay: 0.2,
    duration: 0.6,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween"
};
var formVariants = (form, variants, currentVariant) => {
    switch (form.state) {
        case "success":
            return variants.success ?? currentVariant;
        case "pending":
            return variants.pending ?? currentVariant;
        case "error":
            return variants.error ?? currentVariant;
        case "incomplete":
            return variants.incomplete ?? currentVariant;
    }
};
var Transition3 = ({
    value,
    children
}) => {
    const config = React3.useContext(MotionConfigContext3);
    const transition = value ?? config.transition;
    const contextValue = React3.useMemo(() => ({
        ...config,
        transition
    }), [JSON.stringify(transition)]);
    return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, {
        value: contextValue,
        children
    });
};
var Variants3 = motion3.create(React3.Fragment);
var humanReadableVariantMap3 = {
    Desktop: "Y8pCsrogV",
    Phone: "MaoW3tviV",
    Tablet: "QNGfPt3kL"
};
var getProps3 = ({
    designation1,
    designation2,
    email1,
    email2,
    emailLink1,
    emailLink2,
    height,
    icon1,
    id,
    image2,
    name1,
    name2,
    phone1,
    phone2,
    telLink1,
    telLink2,
    width,
    ...props
}) => {
    return {
        ...props,
        An68ScGMB: email2 ?? props.An68ScGMB ?? "giacomo.cavallini@minervadigitalintelligence.com",
        aW7Xq3jn0: phone2 ?? props.aW7Xq3jn0 ?? "+39 3454722756",
        dgrP5h8Oc: name1 ?? props.dgrP5h8Oc ?? "Dott. Vittorio Ramella",
        DXz9fqCHP: name2 ?? props.DXz9fqCHP ?? "Giacomo Cavallini",
        feJ0KpcNs: icon1 ?? props.feJ0KpcNs ?? {
            pixelHeight: 717,
            pixelWidth: 717,
            src: "https://framerusercontent.com/images/c5QhHCV3GizmMPq0ajjpIa2hk0.webp",
            srcSet: "https://framerusercontent.com/images/c5QhHCV3GizmMPq0ajjpIa2hk0.webp?scale-down-to=512 512w,https://framerusercontent.com/images/c5QhHCV3GizmMPq0ajjpIa2hk0.webp 717w"
        },
        Id8MArGda: emailLink2 ?? props.Id8MArGda,
        JCR0Wka9g: image2 ?? props.JCR0Wka9g ?? {
            pixelHeight: 717,
            pixelWidth: 717,
            src: "https://framerusercontent.com/images/Xe1OOsUygahVWOsMln8FJXzQUo.png",
            srcSet: "https://framerusercontent.com/images/Xe1OOsUygahVWOsMln8FJXzQUo.png?scale-down-to=512 512w,https://framerusercontent.com/images/Xe1OOsUygahVWOsMln8FJXzQUo.png 717w"
        },
        kdnVhoDSL: designation2 ?? props.kdnVhoDSL ?? "Account Manager",
        L7qT5n8vZ: telLink1 ?? props.L7qT5n8vZ,
        o5I79txzW: telLink2 ?? props.o5I79txzW,
        pOwU4CXsS: phone1 ?? props.pOwU4CXsS ?? "+39 3474120780",
        variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "Y8pCsrogV",
        WR21Y4yYC: emailLink1 ?? props.WR21Y4yYC,
        ytEYbtmpF: designation1 ?? props.ytEYbtmpF ?? "Presidente Esecutivo",
        YZtrf2lw9: email1 ?? props.YZtrf2lw9 ?? "vittorio.ramella@minervadigitalintelligence.com"
    };
};
var createLayoutDependency3 = (props, variants) => {
    if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
    const fallbackRef = useRef3(null);
    const refBinding = ref ?? fallbackRef;
    const defaultLayoutId = React3.useId();
    const {
        activeLocale,
        setLocale
    } = useLocaleInfo3();
    const componentViewport = useComponentViewport3();
    const {
        style,
        className: className7,
        layoutId,
        variant,
        feJ0KpcNs,
        dgrP5h8Oc,
        ytEYbtmpF,
        YZtrf2lw9,
        L7qT5n8vZ,
        pOwU4CXsS,
        WR21Y4yYC,
        JCR0Wka9g,
        DXz9fqCHP,
        kdnVhoDSL,
        An68ScGMB,
        o5I79txzW,
        aW7Xq3jn0,
        Id8MArGda,
        ...restProps
    } = getProps3(props);
    const {
        baseVariant,
        classNames,
        clearLoadingGesture,
        gestureHandlers,
        gestureVariant,
        isLoading,
        setGestureState,
        setVariant,
        variants
    } = useVariantState3({
        cycleOrder: cycleOrder3,
        defaultVariant: "Y8pCsrogV",
        ref: refBinding,
        variant,
        variantClassNames: variantClassNames3
    });
    const layoutDependency = createLayoutDependency3(props, variants);
    const sharedStyleClassNames = [className, className2];
    const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
    return /* @__PURE__ */ _jsx3(LayoutGroup3, {
        id: layoutId ?? defaultLayoutId,
        children: /* @__PURE__ */ _jsx3(Variants3, {
            animate: variants,
            initial: false,
            children: /* @__PURE__ */ _jsx3(Transition3, {
                value: transition13,
                children: /* @__PURE__ */ _jsx3(motion3.section, {
                    ...restProps,
                    ...gestureHandlers,
                    className: cx3(scopingClassNames, "framer-1h1148", className7, classNames),
                    "data-framer-name": "Desktop",
                    layoutDependency,
                    layoutId: "Y8pCsrogV",
                    ref: refBinding,
                    style: {
                        ...style
                    },
                    ...addPropertyOverrides3({
                        MaoW3tviV: {
                            "data-framer-name": "Phone"
                        },
                        QNGfPt3kL: {
                            "data-framer-name": "Tablet"
                        }
                    }, baseVariant, gestureVariant),
                    children: /* @__PURE__ */ _jsxs3(motion3.div, {
                        className: "framer-lybs4t",
                        "data-framer-name": "Container",
                        layoutDependency,
                        layoutId: "t929lS6eC",
                        children: [ /* @__PURE__ */ _jsx3(motion3.div, {
                            className: "framer-133plqz",
                            "data-framer-name": "Title",
                            layoutDependency,
                            layoutId: "xZLqV0IAA",
                            children: /* @__PURE__ */ _jsx3(RichText3, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                    children: /* @__PURE__ */ _jsxs3(motion3.h2, {
                                        className: "framer-styles-preset-y2rde0",
                                        "data-styles-preset": "ukkzEhTCI",
                                        children: ["Hai domande, richieste o vuoi semplicemente salutarci? ", /* @__PURE__ */ _jsx3(motion3.span, {
                                            style: {
                                                "--framer-text-color": "var(--extracted-1qn201a, var(--token-a1a0c7e5-1e4d-414c-8dba-5e69e14eca12, rgb(138, 138, 138)))"
                                            },
                                            children: "Siamo qui per aiutarti!"
                                        })]
                                    })
                                }),
                                className: "framer-ed62fc",
                                "data-framer-name": "Title",
                                effect: textEffect,
                                fonts: ["Inter"],
                                layoutDependency,
                                layoutId: "TLO5GNUZr",
                                style: {
                                    "--extracted-1qn201a": "var(--token-a1a0c7e5-1e4d-414c-8dba-5e69e14eca12, rgb(138, 138, 138))",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: true
                            })
                        }), /* @__PURE__ */ _jsxs3(motion3.div, {
                            className: "framer-4aecbj",
                            "data-framer-name": "Container",
                            layoutDependency,
                            layoutId: "qX4WE7psL",
                            children: [ /* @__PURE__ */ _jsx3(motion3.div, {
                                className: "framer-qaihth",
                                "data-framer-name": "Content",
                                layoutDependency,
                                layoutId: "gfPkBsR3i",
                                children: /* @__PURE__ */ _jsxs3(motion3.div, {
                                    className: "framer-fai272",
                                    "data-framer-name": "Contact Cards",
                                    layoutDependency,
                                    layoutId: "nkZoVPel9",
                                    children: [ /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                                        height: 256,
                                        width: `max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 64px) / 1.9, 1px)`,
                                        ...addPropertyOverrides3({
                                            MaoW3tviV: {
                                                width: `min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px)`
                                            },
                                            QNGfPt3kL: {
                                                width: `min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px)`
                                            }
                                        }, baseVariant, gestureVariant),
                                        children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainerWithFX, {
                                            __framer__animate: {
                                                transition: transition32
                                            },
                                            __framer__animateOnce: true,
                                            __framer__enter: animation1,
                                            __framer__styleAppearEffectEnabled: true,
                                            __framer__threshold: 0,
                                            __perspectiveFX: false,
                                            __smartComponentFX: true,
                                            __targetOpacity: 1,
                                            className: "framer-1jog3rx-container",
                                            layoutDependency,
                                            layoutId: "Z3JzhK2xI-container",
                                            nodeId: "Z3JzhK2xI",
                                            rendersWithMotion: true,
                                            scopeId: "nXcO5hqsL",
                                            ...addPropertyOverrides3({
                                                MaoW3tviV: {
                                                    __framer__styleAppearEffectEnabled: void 0
                                                }
                                            }, baseVariant, gestureVariant),
                                            children: /* @__PURE__ */ _jsx3(stdin_default2, {
                                                AS1KgU6Yu: dgrP5h8Oc,
                                                B3zBQny7t: toResponsiveImage2(feJ0KpcNs),
                                                BoxHsnoqY: L7qT5n8vZ,
                                                dlpb4yTc1: ytEYbtmpF,
                                                height: "100%",
                                                id: "Z3JzhK2xI",
                                                layoutId: "Z3JzhK2xI",
                                                q4l00wNjp: YZtrf2lw9,
                                                QbugZ2sWr: pOwU4CXsS,
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "rRvQnsnSr",
                                                width: "100%",
                                                YQKo4_kys: WR21Y4yYC,
                                                ...addPropertyOverrides3({
                                                    MaoW3tviV: {
                                                        variant: "oCy7VuqmD"
                                                    }
                                                }, baseVariant, gestureVariant)
                                            })
                                        })
                                    }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                                        height: 256,
                                        width: `max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 64px) / 1.9, 1px)`,
                                        ...addPropertyOverrides3({
                                            MaoW3tviV: {
                                                width: `min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px)`
                                            },
                                            QNGfPt3kL: {
                                                width: `min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px)`
                                            }
                                        }, baseVariant, gestureVariant),
                                        children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainerWithFX, {
                                            __framer__animate: {
                                                transition: transition4
                                            },
                                            __framer__animateOnce: true,
                                            __framer__enter: animation1,
                                            __framer__styleAppearEffectEnabled: true,
                                            __framer__threshold: 0,
                                            __perspectiveFX: false,
                                            __smartComponentFX: true,
                                            __targetOpacity: 1,
                                            className: "framer-y1zlrh-container",
                                            layoutDependency,
                                            layoutId: "zxrpNUmLG-container",
                                            nodeId: "zxrpNUmLG",
                                            rendersWithMotion: true,
                                            scopeId: "nXcO5hqsL",
                                            children: /* @__PURE__ */ _jsx3(stdin_default2, {
                                                AS1KgU6Yu: DXz9fqCHP,
                                                B3zBQny7t: toResponsiveImage2(JCR0Wka9g),
                                                BoxHsnoqY: o5I79txzW,
                                                dlpb4yTc1: kdnVhoDSL,
                                                height: "100%",
                                                id: "zxrpNUmLG",
                                                layoutId: "zxrpNUmLG",
                                                q4l00wNjp: An68ScGMB,
                                                QbugZ2sWr: aW7Xq3jn0,
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "rRvQnsnSr",
                                                width: "100%",
                                                YQKo4_kys: Id8MArGda,
                                                ...addPropertyOverrides3({
                                                    MaoW3tviV: {
                                                        variant: "oCy7VuqmD"
                                                    }
                                                }, baseVariant, gestureVariant)
                                            })
                                        })
                                    })]
                                })
                            }), /* @__PURE__ */ _jsx3(FormContainerWithFX, {
                                __framer__animate: {
                                    transition: transition32
                                },
                                __framer__animateOnce: true,
                                __framer__enter: animation1,
                                __framer__styleAppearEffectEnabled: true,
                                __framer__threshold: 0,
                                __perspectiveFX: false,
                                __smartComponentFX: true,
                                __targetOpacity: 1,
                                action: "https://api.framer.com/forms/v1/forms/9fc42f8a-ce2b-4ad8-abb1-f725b7fbf4e1/submit",
                                className: "framer-vko7cj",
                                "data-border": true,
                                "data-framer-name": "Contact Form",
                                layoutDependency,
                                layoutId: "De434SKdn",
                                nodeId: "De434SKdn",
                                style: {
                                    "--border-bottom-width": "1px",
                                    "--border-color": "var(--token-d87dc5f7-2638-4b77-9368-a8568c56fcca, rgb(38, 38, 38))",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    backgroundColor: "var(--token-12cbfa94-9c5f-41d3-a67b-614d50367bfe, rgb(17, 17, 20))",
                                    borderBottomLeftRadius: 24,
                                    borderBottomRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24
                                },
                                children: (formState) => /* @__PURE__ */ _jsxs3(_Fragment, {
                                    children: [ /* @__PURE__ */ _jsxs3(motion3.div, {
                                        className: "framer-1m20tgr",
                                        "data-framer-name": "Name",
                                        layoutDependency,
                                        layoutId: "rbsk0GITO",
                                        children: [ /* @__PURE__ */ _jsxs3(motion3.label, {
                                            className: "framer-1xvgj12",
                                            layoutDependency,
                                            layoutId: "AIwwAjds5",
                                            children: [ /* @__PURE__ */ _jsx3(RichText3, {
                                                __fromCanvasComponent: true,
                                                children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                                    children: /* @__PURE__ */ _jsx3(motion3.p, {
                                                        className: "framer-styles-preset-dsr0r",
                                                        "data-styles-preset": "Erxl6HnxD",
                                                        style: {
                                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                                        },
                                                        children: "Nome"
                                                    })
                                                }),
                                                className: "framer-17jgoj7",
                                                fonts: ["Inter"],
                                                layoutDependency,
                                                layoutId: "mNbDBFTTh",
                                                style: {
                                                    "--extracted-r6o4lv": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))"
                                                },
                                                verticalAlignment: "top",
                                                withExternalLayout: true
                                            }), /* @__PURE__ */ _jsx3(FormPlainTextInput, {
                                                className: "framer-14f9oa2",
                                                inputName: "zTz0ZJBFx",
                                                layoutDependency,
                                                layoutId: "zTz0ZJBFx",
                                                placeholder: "",
                                                required: true,
                                                style: {
                                                    "--framer-input-background": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                    "--framer-input-border-radius-bottom-left": "10px",
                                                    "--framer-input-border-radius-bottom-right": "10px",
                                                    "--framer-input-border-radius-top-left": "10px",
                                                    "--framer-input-border-radius-top-right": "10px",
                                                    "--framer-input-font-color": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                    "--framer-input-icon-color": "rgb(153, 153, 153)",
                                                    "--framer-input-placeholder-color": "var(--token-a1a0c7e5-1e4d-414c-8dba-5e69e14eca12, rgb(138, 138, 138))"
                                                },
                                                type: "text",
                                                ...addPropertyOverrides3({
                                                    MaoW3tviV: {
                                                        inputName: "MaoW3tviVzTz0ZJBFx"
                                                    },
                                                    QNGfPt3kL: {
                                                        inputName: "QNGfPt3kLzTz0ZJBFx"
                                                    }
                                                }, baseVariant, gestureVariant)
                                            })]
                                        }), /* @__PURE__ */ _jsxs3(motion3.label, {
                                            className: "framer-1b0l3y0",
                                            layoutDependency,
                                            layoutId: "ag8jUjsD_",
                                            children: [ /* @__PURE__ */ _jsx3(RichText3, {
                                                __fromCanvasComponent: true,
                                                children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                                    children: /* @__PURE__ */ _jsx3(motion3.p, {
                                                        className: "framer-styles-preset-dsr0r",
                                                        "data-styles-preset": "Erxl6HnxD",
                                                        style: {
                                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                                        },
                                                        children: "Cognome"
                                                    })
                                                }),
                                                className: "framer-nzuize",
                                                fonts: ["Inter"],
                                                layoutDependency,
                                                layoutId: "kODFy35yd",
                                                style: {
                                                    "--extracted-r6o4lv": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))"
                                                },
                                                verticalAlignment: "top",
                                                withExternalLayout: true
                                            }), /* @__PURE__ */ _jsx3(FormPlainTextInput, {
                                                className: "framer-1mbycd0",
                                                inputName: "Last Name",
                                                layoutDependency,
                                                layoutId: "ZjNyxmB9j",
                                                placeholder: "",
                                                required: true,
                                                style: {
                                                    "--framer-input-background": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                    "--framer-input-border-radius-bottom-left": "10px",
                                                    "--framer-input-border-radius-bottom-right": "10px",
                                                    "--framer-input-border-radius-top-left": "10px",
                                                    "--framer-input-border-radius-top-right": "10px",
                                                    "--framer-input-font-color": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                    "--framer-input-icon-color": "rgb(153, 153, 153)",
                                                    "--framer-input-placeholder-color": "var(--token-a1a0c7e5-1e4d-414c-8dba-5e69e14eca12, rgb(138, 138, 138))"
                                                },
                                                type: "text"
                                            })]
                                        })]
                                    }), /* @__PURE__ */ _jsxs3(motion3.label, {
                                        className: "framer-7y4t73",
                                        layoutDependency,
                                        layoutId: "Qzkh8wYEw",
                                        children: [ /* @__PURE__ */ _jsx3(RichText3, {
                                            __fromCanvasComponent: true,
                                            children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                                    className: "framer-styles-preset-dsr0r",
                                                    "data-styles-preset": "Erxl6HnxD",
                                                    style: {
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                                    },
                                                    children: "Email"
                                                })
                                            }),
                                            className: "framer-1grir5m",
                                            fonts: ["Inter"],
                                            layoutDependency,
                                            layoutId: "wrg8Ala8B",
                                            style: {
                                                "--extracted-r6o4lv": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: true
                                        }), /* @__PURE__ */ _jsx3(FormPlainTextInput, {
                                            className: "framer-wdmzo6",
                                            inputName: "Email",
                                            layoutDependency,
                                            layoutId: "ubk2SO0k6",
                                            placeholder: "@",
                                            required: true,
                                            style: {
                                                "--framer-input-background": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                "--framer-input-border-radius-bottom-left": "10px",
                                                "--framer-input-border-radius-bottom-right": "10px",
                                                "--framer-input-border-radius-top-left": "10px",
                                                "--framer-input-border-radius-top-right": "10px",
                                                "--framer-input-font-color": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                "--framer-input-icon-color": "rgb(153, 153, 153)",
                                                "--framer-input-placeholder-color": "var(--token-a1a0c7e5-1e4d-414c-8dba-5e69e14eca12, rgb(138, 138, 138))"
                                            },
                                            type: "email"
                                        })]
                                    }), /* @__PURE__ */ _jsxs3(motion3.label, {
                                        className: "framer-yafwdu",
                                        layoutDependency,
                                        layoutId: "LVG4EFW3s",
                                        children: [ /* @__PURE__ */ _jsx3(RichText3, {
                                            __fromCanvasComponent: true,
                                            children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                                    className: "framer-styles-preset-dsr0r",
                                                    "data-styles-preset": "Erxl6HnxD",
                                                    style: {
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                                    },
                                                    children: "Numero di contatto"
                                                })
                                            }),
                                            className: "framer-1vqwe2n",
                                            fonts: ["Inter"],
                                            layoutDependency,
                                            layoutId: "f7fsPIzrI",
                                            style: {
                                                "--extracted-r6o4lv": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: true
                                        }), /* @__PURE__ */ _jsx3(FormPlainTextInput, {
                                            className: "framer-1w10qe",
                                            inputName: "Number",
                                            layoutDependency,
                                            layoutId: "SeNciYvbh",
                                            placeholder: "+39",
                                            required: true,
                                            style: {
                                                "--framer-input-background": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                "--framer-input-border-radius-bottom-left": "10px",
                                                "--framer-input-border-radius-bottom-right": "10px",
                                                "--framer-input-border-radius-top-left": "10px",
                                                "--framer-input-border-radius-top-right": "10px",
                                                "--framer-input-font-color": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                "--framer-input-icon-color": "rgb(153, 153, 153)",
                                                "--framer-input-placeholder-color": "var(--token-a1a0c7e5-1e4d-414c-8dba-5e69e14eca12, rgb(138, 138, 138))"
                                            },
                                            type: "tel"
                                        })]
                                    }), /* @__PURE__ */ _jsxs3(motion3.label, {
                                        className: "framer-xk6ug7",
                                        layoutDependency,
                                        layoutId: "R2LibhFrx",
                                        children: [ /* @__PURE__ */ _jsx3(RichText3, {
                                            __fromCanvasComponent: true,
                                            children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                                    className: "framer-styles-preset-dsr0r",
                                                    "data-styles-preset": "Erxl6HnxD",
                                                    style: {
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                                    },
                                                    children: "Messaggio"
                                                })
                                            }),
                                            className: "framer-axso83",
                                            fonts: ["Inter"],
                                            layoutDependency,
                                            layoutId: "xr2i8QG1v",
                                            style: {
                                                "--extracted-r6o4lv": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: true
                                        }), /* @__PURE__ */ _jsx3(FormPlainTextInput, {
                                            className: "framer-1s129fh",
                                            inputName: "Query",
                                            layoutDependency,
                                            layoutId: "q3aqWhTHD",
                                            placeholder: "",
                                            required: true,
                                            style: {
                                                "--framer-input-background": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                "--framer-input-border-radius-bottom-left": "10px",
                                                "--framer-input-border-radius-bottom-right": "10px",
                                                "--framer-input-border-radius-top-left": "10px",
                                                "--framer-input-border-radius-top-right": "10px",
                                                "--framer-input-font-color": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                "--framer-input-icon-color": "rgb(153, 153, 153)",
                                                "--framer-input-placeholder-color": "var(--token-a1a0c7e5-1e4d-414c-8dba-5e69e14eca12, rgb(138, 138, 138))"
                                            },
                                            type: "textarea"
                                        })]
                                    }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                                        height: 48,
                                        width: `calc(min(max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 64px) * 0.4737, 1px), 629px) - 48px)`,
                                        ...addPropertyOverrides3({
                                            MaoW3tviV: {
                                                width: `calc(min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px) - 48px)`
                                            },
                                            QNGfPt3kL: {
                                                width: `calc(min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 48px)`
                                            }
                                        }, baseVariant, gestureVariant),
                                        children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, {
                                            className: "framer-1o6wy8k-container",
                                            layoutDependency,
                                            layoutId: "XPQKw0mzq-container",
                                            nodeId: "XPQKw0mzq",
                                            rendersWithMotion: true,
                                            scopeId: "nXcO5hqsL",
                                            children: /* @__PURE__ */ _jsx3(stdin_default, {
                                                height: "100%",
                                                id: "XPQKw0mzq",
                                                layoutId: "XPQKw0mzq",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                type: "submit",
                                                variant: formVariants(formState, {
                                                    error: "wbYWinPat",
                                                    pending: "HsLliaHmA",
                                                    success: "jLwjSMWpk"
                                                }, "sR8uaJmvU"),
                                                width: "100%",
                                                ...addPropertyOverrides3({
                                                    MaoW3tviV: {
                                                        variant: formVariants(formState, {
                                                            error: "wbYWinPat",
                                                            pending: "HsLliaHmA",
                                                            success: "jLwjSMWpk"
                                                        }, "JxchebADB")
                                                    }
                                                }, baseVariant, gestureVariant)
                                            })
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            })
        })
    });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-X1I6O.framer-1wr19w5, .framer-X1I6O .framer-1wr19w5 { display: block; }", ".framer-X1I6O.framer-1h1148 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 40px 100px 40px; position: relative; width: 1200px; }", ".framer-X1I6O .framer-lybs4t { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-X1I6O .framer-133plqz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-X1I6O .framer-ed62fc { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-X1I6O .framer-4aecbj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-X1I6O .framer-qaihth { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-X1I6O .framer-fai272 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-X1I6O .framer-1jog3rx-container, .framer-X1I6O .framer-y1zlrh-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-X1I6O .framer-vko7cj { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 629px; overflow: hidden; padding: 40px 24px 24px 24px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-X1I6O .framer-1m20tgr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-X1I6O .framer-1xvgj12, .framer-X1I6O .framer-1b0l3y0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }", ".framer-X1I6O .framer-17jgoj7, .framer-X1I6O .framer-nzuize, .framer-X1I6O .framer-1grir5m, .framer-X1I6O .framer-1vqwe2n, .framer-X1I6O .framer-axso83 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", '.framer-X1I6O .framer-14f9oa2, .framer-X1I6O .framer-1mbycd0, .framer-X1I6O .framer-wdmzo6, .framer-X1I6O .framer-1w10qe { --framer-input-focused-border-color: var(--token-f1c81b52-2a59-4da2-a47f-3f4bfb2f2b58, #011eff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }', ".framer-X1I6O .framer-7y4t73, .framer-X1I6O .framer-yafwdu, .framer-X1I6O .framer-xk6ug7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", '.framer-X1I6O .framer-1s129fh { --framer-input-focused-border-color: var(--token-f1c81b52-2a59-4da2-a47f-3f4bfb2f2b58, #011eff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }', ".framer-X1I6O .framer-1o6wy8k-container { flex: none; height: 48px; position: relative; width: 100%; }", ".framer-X1I6O.framer-v-33lt8j.framer-1h1148 { width: 810px; }", ".framer-X1I6O.framer-v-33lt8j .framer-4aecbj { flex-direction: column; }", ".framer-X1I6O.framer-v-33lt8j .framer-qaihth, .framer-X1I6O.framer-v-ngjnb6 .framer-1xvgj12, .framer-X1I6O.framer-v-ngjnb6 .framer-1b0l3y0 { flex: none; width: 100%; }", ".framer-X1I6O.framer-v-33lt8j .framer-vko7cj { flex: none; max-width: unset; width: 100%; }", ".framer-X1I6O.framer-v-ngjnb6.framer-1h1148 { padding: 60px 20px 60px 20px; width: 200px; }", ".framer-X1I6O.framer-v-ngjnb6 .framer-lybs4t { gap: 48px; }", ".framer-X1I6O.framer-v-ngjnb6 .framer-4aecbj { flex-direction: column; gap: 48px; }", ".framer-X1I6O.framer-v-ngjnb6 .framer-qaihth { flex: none; gap: 48px; width: 100%; }", ".framer-X1I6O.framer-v-ngjnb6 .framer-fai272 { gap: 32px; }", ".framer-X1I6O.framer-v-ngjnb6 .framer-vko7cj { flex: none; gap: 24px; max-width: unset; width: 100%; }", ".framer-X1I6O.framer-v-ngjnb6 .framer-1m20tgr { flex-direction: column; gap: 24px; }", ...css, ...css2, '.framer-X1I6O[data-border="true"]::after, .framer-X1I6O [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramernXcO5hqsL = withCSS3(Component3, css9, "framer-X1I6O");
var stdin_default3 = FramernXcO5hqsL;
FramernXcO5hqsL.displayName = "ContactBody";
FramernXcO5hqsL.defaultProps = {
    height: 1004,
    width: 1200
};
addPropertyControls3(FramernXcO5hqsL, {
    variant: {
        options: ["Y8pCsrogV", "QNGfPt3kL", "MaoW3tviV"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: ControlType3.Enum
    },
    feJ0KpcNs: {
        __defaultAssetReference: "data:framer/asset-reference,c5QhHCV3GizmMPq0ajjpIa2hk0.webp?originalFilename=email.webp&preferredSize=auto",
        title: "Icon 1",
        type: ControlType3.ResponsiveImage
    },
    dgrP5h8Oc: {
        defaultValue: "Dott. Vittorio Ramella",
        displayTextArea: false,
        title: "Name 1",
        type: ControlType3.String
    },
    ytEYbtmpF: {
        defaultValue: "Presidente Esecutivo",
        displayTextArea: false,
        title: "Designation 1",
        type: ControlType3.String
    },
    YZtrf2lw9: {
        defaultValue: "vittorio.ramella@minervadigitalintelligence.com",
        displayTextArea: false,
        title: "Email 1",
        type: ControlType3.String
    },
    L7qT5n8vZ: {
        title: "Tel Link 1",
        type: ControlType3.Link
    },
    pOwU4CXsS: {
        defaultValue: "+39 3474120780",
        displayTextArea: false,
        title: "Phone 1",
        type: ControlType3.String
    },
    WR21Y4yYC: {
        title: "Email Link 1",
        type: ControlType3.Link
    },
    JCR0Wka9g: {
        __defaultAssetReference: "data:framer/asset-reference,Xe1OOsUygahVWOsMln8FJXzQUo.png?originalFilename=email.png&preferredSize=auto",
        title: "Image 2",
        type: ControlType3.ResponsiveImage
    },
    DXz9fqCHP: {
        defaultValue: "Giacomo Cavallini",
        displayTextArea: false,
        title: "Name 2",
        type: ControlType3.String
    },
    kdnVhoDSL: {
        defaultValue: "Account Manager",
        displayTextArea: false,
        title: "Designation 2",
        type: ControlType3.String
    },
    An68ScGMB: {
        defaultValue: "giacomo.cavallini@minervadigitalintelligence.com",
        displayTextArea: false,
        title: "Email 2",
        type: ControlType3.String
    },
    o5I79txzW: {
        title: "Tel Link 2",
        type: ControlType3.Link
    },
    aW7Xq3jn0: {
        defaultValue: "+39 3454722756",
        displayTextArea: false,
        title: "Phone 2",
        type: ControlType3.String
    },
    Id8MArGda: {
        title: "Email Link 2",
        type: ControlType3.Link
    }
});
addFonts3(FramernXcO5hqsL, [{
    explicitInter: true,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...ContactCardFonts, ...SubmitButtonFonts, ...getFontsFromSharedStyle3(fonts), ...getFontsFromSharedStyle3(fonts2)], {
    supportsExplicitInterCodegen: true
});

// virtual:contact-body
import {
    WithFramerBreakpoints
} from "unframer";
import {
    jsx
} from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
    "base": "MaoW3tviV",
    "md": "QNGfPt3kL",
    "xl": "Y8pCsrogV"
};
stdin_default3.Responsive = ({
    locale,
    ...rest
}) => {
    return /* @__PURE__ */ jsx(
        ContextProviders, {
            routes: {
                "Aw1bp1qBS": {
                    "path": "/agenda"
                },
                "H5KkvzB6J": {
                    "path": "/speakers"
                },
                "Kwh8cVRvS": {
                    "path": "/cosa-facciamo"
                },
                "LZKCF9PiE": {
                    "path": "/terms-and-conditions"
                },
                "YxIQjPGTi": {
                    "path": "/404"
                },
                "ngHctEoI7": {
                    "path": "/"
                },
                "tgsKZLLek": {
                    "path": "/contact"
                },
                "vrrKLizBH": {
                    "path": "/venue"
                }
            },
            children: /* @__PURE__ */ jsx(
                WithFramerBreakpoints, {
                    Component: stdin_default3,
                    variants: defaultResponsiveVariants,
                    ...rest
                }
            ),
            framerSiteId: "5bb563c7ee3ea456dbe86c8faf61fcfa60d7ce5df7d6bbf832cd0c33e8c321f4",
            locale,
            locales
        }
    );
};

function ComponentWithRoot({
    locale,
    ...rest
}) {
    return /* @__PURE__ */ jsx(
        ContextProviders, {
            routes: {
                "Aw1bp1qBS": {
                    "path": "/agenda"
                },
                "H5KkvzB6J": {
                    "path": "/speakers"
                },
                "Kwh8cVRvS": {
                    "path": "/cosa-facciamo"
                },
                "LZKCF9PiE": {
                    "path": "/terms-and-conditions"
                },
                "YxIQjPGTi": {
                    "path": "/404"
                },
                "ngHctEoI7": {
                    "path": "/"
                },
                "tgsKZLLek": {
                    "path": "/contact"
                },
                "vrrKLizBH": {
                    "path": "/venue"
                }
            },
            children: /* @__PURE__ */ jsx(stdin_default3, {
                ...rest
            }),
            framerSiteId: "5bb563c7ee3ea456dbe86c8faf61fcfa60d7ce5df7d6bbf832cd0c33e8c321f4",
            locale,
            locales
        }
    );
}
Object.assign(ComponentWithRoot, stdin_default3);
export {
    ComponentWithRoot as
    default
};