
"use client";
import {
    className as className3,
    css as css3,
    fonts as fonts3
} from "./chunks/chunk-UZ7LMOW2.js";
import {
    className,
    className2,
    css,
    css2,
    fonts,
    fonts2
} from "./chunks/chunk-NLE7TGFX.js";
import {
    stdin_default
} from "./chunks/chunk-7EJHMPM7.js";

// virtual:cosa-steps
import {
    Fragment as Fragment3
} from "react";
import {
    ContextProviders
} from "unframer";

// /:https://framer.com/m/CosaSteps-lBV7.js
import {
    jsx as _jsx2,
    jsxs as _jsxs2
} from "react/jsx-runtime";
import {
    addFonts as addFonts2,
    addPropertyControls as addPropertyControls2,
    ComponentViewportProvider,
    ControlType as ControlType2,
    cx as cx2,
    getFonts,
    getFontsFromSharedStyle as getFontsFromSharedStyle2,
    RichText as RichText2,
    SmartComponentScopedContainer,
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

// /:https://framerusercontent.com/modules/sJJAe3L3RZKpk2I8Vm44/laGbIWaJW6yZF6dZQvzl/tcl7c_B2U.js
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
    getLoadingLazyAtYPosition,
    Image,
    RichText,
    useComponentViewport,
    useLocaleInfo,
    useVariantState,
    withCSS
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

// /:https://framerusercontent.com/modules/4CUvf43sckRFlcNf8X0q/lUN8hvDvF8w1vQjq7HRR/N6mvyAHzB.js
import {
    fontStore
} from "unframer";
fontStore.loadFonts(["FR;InterDisplay-Medium", "FR;InterDisplay-Bold", "FR;InterDisplay-BoldItalic", "FR;InterDisplay-MediumItalic"]);
var fonts4 = [{
    explicitInter: true,
    fonts: [{
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2",
        weight: "700"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "italic",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2",
        weight: "500"
    }]
}];
var css4 = ['.framer-D8tgY .framer-styles-preset-su1ghg:not(.rich-text-wrapper), .framer-D8tgY .framer-styles-preset-su1ghg.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 38px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-D8tgY .framer-styles-preset-su1ghg:not(.rich-text-wrapper), .framer-D8tgY .framer-styles-preset-su1ghg.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-D8tgY .framer-styles-preset-su1ghg:not(.rich-text-wrapper), .framer-D8tgY .framer-styles-preset-su1ghg.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className4 = "framer-D8tgY";

// /:https://framerusercontent.com/modules/sJJAe3L3RZKpk2I8Vm44/laGbIWaJW6yZF6dZQvzl/tcl7c_B2U.js
var cycleOrder = ["eOLAdzpTS", "gdeLbh8pp"];
var serializationHash = "framer-1x6Tf";
var variantClassNames = {
    eOLAdzpTS: "framer-v-6i32g6",
    gdeLbh8pp: "framer-v-1wmdyik"
};

function addPropertyOverrides(overrides, ...variants) {
    const nextOverrides = {};
    variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
    return nextOverrides;
}
var transition1 = {
    bounce: 0.2,
    delay: 0,
    duration: 0.4,
    type: "spring"
};
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
    Desktop: "eOLAdzpTS",
    Phone: "gdeLbh8pp"
};
var getProps = ({
    height,
    id,
    label,
    title,
    width,
    ...props
}) => {
    return {
        ...props,
        sB9Iwdbsx: label ?? props.sB9Iwdbsx ?? "Kickoff",
        Usf4fiXwj: title ?? props.Usf4fiXwj ?? "Day 1 : Main Day",
        variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "eOLAdzpTS"
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
        className: className5,
        layoutId,
        variant,
        sB9Iwdbsx,
        Usf4fiXwj,
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
        defaultVariant: "eOLAdzpTS",
        ref: refBinding,
        variant,
        variantClassNames
    });
    const layoutDependency = createLayoutDependency(props, variants);
    const sharedStyleClassNames = [className4];
    const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
    return /* @__PURE__ */ _jsx(LayoutGroup, {
        id: layoutId ?? defaultLayoutId,
        children: /* @__PURE__ */ _jsx(Variants, {
            animate: variants,
            initial: false,
            children: /* @__PURE__ */ _jsx(Transition, {
                value: transition1,
                children: /* @__PURE__ */ _jsxs(motion.div, {
                    ...restProps,
                    ...gestureHandlers,
                    className: cx(scopingClassNames, "framer-6i32g6", className5, classNames),
                    "data-framer-name": "Desktop",
                    layoutDependency,
                    layoutId: "eOLAdzpTS",
                    ref: refBinding,
                    style: {
                        ...style
                    },
                    ...addPropertyOverrides({
                        gdeLbh8pp: {
                            "data-framer-name": "Phone"
                        }
                    }, baseVariant, gestureVariant),
                    children: [ /* @__PURE__ */ _jsxs(motion.div, {
                        className: "framer-j8vn5n",
                        "data-framer-name": "Label",
                        layoutDependency,
                        layoutId: "ig7WoqhEk",
                        style: {
                            backgroundColor: "rgb(37, 59, 219)",
                            borderBottomLeftRadius: 24,
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 0
                        },
                        variants: {
                            gdeLbh8pp: {
                                borderBottomLeftRadius: 0,
                                borderTopRightRadius: 16
                            }
                        },
                        children: [ /* @__PURE__ */ _jsx(Image, {
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 578,
                                intrinsicWidth: 965.5,
                                loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (0 + ((componentViewport?.height || 85) - 0 - ((componentViewport?.height || 85) - 0) * 1) / 2) + 0),
                                pixelHeight: 1156,
                                pixelWidth: 1931,
                                sizes: "259px",
                                src: "https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp?scale-down-to=1024",
                                srcSet: "https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp?scale-down-to=512 512w,https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp 1931w"
                            },
                            className: "framer-2qkh6j",
                            "data-framer-name": "Ai summit bg",
                            layoutDependency,
                            layoutId: "NaMXvNRJJ",
                            style: {
                                borderBottomLeftRadius: 24,
                                borderTopLeftRadius: 24,
                                mask: "linear-gradient(0deg, rgba(0,0,0,1) 45.66744087837838%, rgba(0,0,0,0) 100%) add",
                                opacity: 0.74,
                                WebkitMask: "linear-gradient(0deg, rgba(0,0,0,1) 45.66744087837838%, rgba(0,0,0,0) 100%) add"
                            },
                            ...addPropertyOverrides({
                                gdeLbh8pp: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 578,
                                        intrinsicWidth: 965.5,
                                        loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 163) - 0 - 162.8) / 2 + 0 + 0) + 0),
                                        pixelHeight: 1156,
                                        pixelWidth: 1931,
                                        sizes: componentViewport?.width || "100vw",
                                        src: "https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp?scale-down-to=1024",
                                        srcSet: "https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp?scale-down-to=512 512w,https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/pSSINVOSMIf4PhqxNRckBByjw.webp 1931w"
                                    }
                                }
                            }, baseVariant, gestureVariant)
                        }), /* @__PURE__ */ _jsx(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                                children: /* @__PURE__ */ _jsx(motion.h3, {
                                    className: "framer-styles-preset-su1ghg",
                                    "data-styles-preset": "N6mvyAHzB",
                                    children: "Kickoff"
                                })
                            }),
                            className: "framer-1gpbv7e",
                            "data-framer-name": "Kickoff",
                            fonts: ["Inter"],
                            layoutDependency,
                            layoutId: "WF7CAoR9j",
                            style: {
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: sB9Iwdbsx,
                            verticalAlignment: "top",
                            withExternalLayout: true
                        })]
                    }), /* @__PURE__ */ _jsx(motion.div, {
                        className: "framer-pfrlz6",
                        "data-framer-name": "Day",
                        layoutDependency,
                        layoutId: "jPNpFDFl_",
                        style: {
                            backdropFilter: "blur(10px)",
                            backgroundColor: "var(--token-9a7303fe-2324-4aa1-bbd4-e1f1d449de82, rgba(255, 255, 255, 0.12))",
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 24,
                            borderTopRightRadius: 24,
                            WebkitBackdropFilter: "blur(10px)"
                        },
                        variants: {
                            gdeLbh8pp: {
                                borderBottomLeftRadius: 16,
                                borderTopRightRadius: 0
                            }
                        },
                        children: /* @__PURE__ */ _jsx(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                                children: /* @__PURE__ */ _jsx(motion.h3, {
                                    className: "framer-styles-preset-su1ghg",
                                    "data-styles-preset": "N6mvyAHzB",
                                    style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color": "var(--extracted-a0htzi, var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237)))"
                                    },
                                    children: "Day 1 : Main Day"
                                })
                            }),
                            className: "framer-2l8jdg",
                            "data-framer-name": "Day 1 : Main Day",
                            fonts: ["Inter"],
                            layoutDependency,
                            layoutId: "CmKFJ8PGd",
                            style: {
                                "--extracted-a0htzi": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: Usf4fiXwj,
                            verticalAlignment: "top",
                            withExternalLayout: true
                        })
                    })]
                })
            })
        })
    });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1x6Tf.framer-1e6m96p, .framer-1x6Tf .framer-1e6m96p { display: block; }", ".framer-1x6Tf.framer-6i32g6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1120px; }", ".framer-1x6Tf .framer-j8vn5n { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; padding: 18px 24px 18px 24px; position: relative; width: 259px; }", ".framer-1x6Tf .framer-2qkh6j { bottom: 0px; flex: none; left: calc(49.80694980694983% - 100% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 0; }", ".framer-1x6Tf .framer-1gpbv7e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-1x6Tf .framer-pfrlz6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 18px 54px 18px 74px; position: relative; width: 1px; }", ".framer-1x6Tf .framer-2l8jdg { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-1x6Tf.framer-v-1wmdyik.framer-6i32g6 { align-content: flex-start; align-items: flex-start; flex-direction: column; }", ".framer-1x6Tf.framer-v-1wmdyik .framer-j8vn5n { align-self: unset; height: min-content; padding: 14px 20px 14px 20px; width: 100%; }", ".framer-1x6Tf.framer-v-1wmdyik .framer-pfrlz6 { flex: none; padding: 18px 20px 18px 20px; width: 100%; }", ...css4];
var Framertcl7c_B2U = withCSS(Component, css5, "framer-1x6Tf");
var stdin_default2 = Framertcl7c_B2U;
Framertcl7c_B2U.displayName = "Day Title";
Framertcl7c_B2U.defaultProps = {
    height: 85,
    width: 1120
};
addPropertyControls(Framertcl7c_B2U, {
    variant: {
        options: ["eOLAdzpTS", "gdeLbh8pp"],
        optionTitles: ["Desktop", "Phone"],
        title: "Variant",
        type: ControlType.Enum
    },
    sB9Iwdbsx: {
        defaultValue: "Kickoff",
        displayTextArea: false,
        title: "Label",
        type: ControlType.String
    },
    Usf4fiXwj: {
        defaultValue: "Day 1 : Main Day",
        displayTextArea: false,
        title: "Title",
        type: ControlType.String
    }
});
addFonts(Framertcl7c_B2U, [{
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
}, ...getFontsFromSharedStyle(fonts4)], {
    supportsExplicitInterCodegen: true
});

// /:https://framer.com/m/CosaSteps-lBV7.js
var SectionTagFonts = getFonts(stdin_default);
var DayTitleFonts = getFonts(stdin_default2);
var cycleOrder2 = ["UelWR_G2p", "iGlgdQAwM", "k2pQ6B4br"];
var serializationHash2 = "framer-VeuRA";
var variantClassNames2 = {
    iGlgdQAwM: "framer-v-15mij1e",
    k2pQ6B4br: "framer-v-1bf6iei",
    UelWR_G2p: "framer-v-4kkss5"
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
var animation = {
    filter: "blur(10px)",
    opacity: 1e-3,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10
};
var transition2 = {
    delay: 0.05,
    duration: 0.4,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween"
};
var textEffect = {
    effect: animation,
    repeat: false,
    startDelay: 0,
    threshold: 0.5,
    tokenization: "word",
    transition: transition2,
    trigger: "onInView",
    type: "appear"
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
    Desktop: "UelWR_G2p",
    Phone: "k2pQ6B4br",
    Tablet: "iGlgdQAwM"
};
var getProps2 = ({
    height,
    id,
    section1Paragraph,
    section1Subtag,
    section1Tag,
    section1Title,
    section2Paragraph,
    section2Subtag,
    section2Tag,
    section2Title,
    section3Subtag,
    section3Tag,
    section3Title,
    tag,
    text,
    title,
    width,
    ...props
}) => {
    return {
        ...props,
        cUHcvWejE: section3Tag ?? props.cUHcvWejE ?? "Relazioni ",
        FOfg8DhVw: section3Subtag ?? props.FOfg8DhVw ?? "Perch\xE9 \xE8 Importante",
        hcM3hN67p: section1Tag ?? props.hcM3hN67p ?? "Sistemi",
        HpaLN3lmm: section1Paragraph ?? props.HpaLN3lmm ?? /* @__PURE__ */ _jsxs2(React2.Fragment, {
            children: [ /* @__PURE__ */ _jsxs2(motion2.p, {
                children: ["Progettiamo piattaforme client-server personalizzate basate su ", /* @__PURE__ */ _jsx2(motion2.strong, {
                    children: "Machine Learning"
                }), ", ", /* @__PURE__ */ _jsx2(motion2.strong, {
                    children: "Data Mining"
                }), " e ", /* @__PURE__ */ _jsx2(motion2.strong, {
                    children: "Reti Neurali"
                }), ".", /* @__PURE__ */ _jsx2(motion2.br, {}), "I nostri sistemi sono pensati per scoprire correlazioni nascoste nei dati clinici e organizzativi\u2014e rivelare intuizioni dove gli strumenti tradizionali falliscono.", /* @__PURE__ */ _jsx2(motion2.br, {}), /* @__PURE__ */ _jsx2(motion2.br, {}), /* @__PURE__ */ _jsx2(motion2.strong, {
                    children: "Funzionalit\xE0 Principali:"
                })]
            }), /* @__PURE__ */ _jsxs2(motion2.ul, {
                className: "framer-styles-preset-luad1x",
                "data-styles-preset": "QrpSGcou5",
                children: [ /* @__PURE__ */ _jsx2(motion2.li, {
                    className: "framer-styles-preset-luad1x",
                    "data-preset-tag": "p",
                    "data-styles-preset": "QrpSGcou5",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Individuazione di relazioni forti ma sottili nei dati"
                    })
                }), /* @__PURE__ */ _jsx2(motion2.li, {
                    className: "framer-styles-preset-luad1x",
                    "data-preset-tag": "p",
                    "data-styles-preset": "QrpSGcou5",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Addestramento di modelli predittivi e di classificazione"
                    })
                }), /* @__PURE__ */ _jsx2(motion2.li, {
                    className: "framer-styles-preset-luad1x",
                    "data-preset-tag": "p",
                    "data-styles-preset": "QrpSGcou5",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Analisi strutturate e automatizzate per reparti"
                    })
                }), /* @__PURE__ */ _jsx2(motion2.li, {
                    className: "framer-styles-preset-luad1x",
                    "data-preset-tag": "p",
                    "data-styles-preset": "QrpSGcou5",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Validazione AI in tempo reale per ridurre gli errori"
                    })
                }), /* @__PURE__ */ _jsx2(motion2.li, {
                    className: "framer-styles-preset-luad1x",
                    "data-preset-tag": "p",
                    "data-styles-preset": "QrpSGcou5",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Elaborazione dati tokenizzata e conforme al GDPR"
                    })
                })]
            })]
        }),
        I2oRAUKTZ: section1Title ?? props.I2oRAUKTZ ?? "Sistemi di Intelligenza Artificiale su Misura per la Complessit\xE0",
        iawcM_X8n: section1Subtag ?? props.iawcM_X8n ?? "Cosa Realizziamo",
        IX3S2MtpN: section2Paragraph ?? props.IX3S2MtpN ?? /* @__PURE__ */ _jsxs2(React2.Fragment, {
            children: [ /* @__PURE__ */ _jsxs2(motion2.p, {
                children: ["Progettiamo infrastrutture scalabili in grado di connettersi a fonti dati eterogenee nei sistemi sanitari.", /* @__PURE__ */ _jsx2(motion2.br, {}), "Ogni flusso dati \xE8 pienamente conforme al GDPR e predisposto per analisi scientifiche e procedurali sia interne che esterne.", /* @__PURE__ */ _jsx2(motion2.br, {}), /* @__PURE__ */ _jsx2(motion2.br, {}), /* @__PURE__ */ _jsx2(motion2.strong, {
                    children: "Casi d'Uso:"
                })]
            }), /* @__PURE__ */ _jsxs2(motion2.ul, {
                className: "framer-styles-preset-luad1x",
                "data-styles-preset": "QrpSGcou5",
                children: [ /* @__PURE__ */ _jsx2(motion2.li, {
                    "data-preset-tag": "p",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Dashboard per ricerca scientifica interna ed esterna"
                    })
                }), /* @__PURE__ */ _jsx2(motion2.li, {
                    "data-preset-tag": "p",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Indicatori predittivi per ottimizzazione risorse"
                    })
                }), /* @__PURE__ */ _jsx2(motion2.li, {
                    "data-preset-tag": "p",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Classificatori per diagnostica e controllo qualit\xE0"
                    })
                }), /* @__PURE__ */ _jsx2(motion2.li, {
                    "data-preset-tag": "p",
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                        children: "Accesso via API per analisi da parte di partner autorizzati"
                    })
                })]
            })]
        }),
        LS1OEQcql: section2Title ?? props.LS1OEQcql ?? "Scalabile, Tokenizzata, Conforme",
        lU4LIQjBj: section2Tag ?? props.lU4LIQjBj ?? "Data",
        pWO7oO8vL: section2Subtag ?? props.pWO7oO8vL ?? "Infrastruttura Data-Driven",
        rLgKbulDG: tag ?? props.rLgKbulDG ?? "Strategica",
        variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "UelWR_G2p",
        YmxGYOvcz: text ?? props.YmxGYOvcz ?? /* @__PURE__ */ _jsx2(React2.Fragment, {
            children: /* @__PURE__ */ _jsxs2(motion2.p, {
                children: ["Riconoscere connessioni significative tra dataset \xE8 ci\xF2 che trasforma i dati in azioni concrete.", /* @__PURE__ */ _jsx2(motion2.br, {}), "\xC8 questa la nostra specialit\xE0\u2014e la nostra passione. Dalle decisioni manageriali all\u2019assistenza clinica, facciamo parlare i dati con il linguaggio dei risultati."]
            })
        }),
        YRWFpV3NM: section3Title ?? props.YRWFpV3NM ?? "I Dati da Soli non Bastano. Le Relazioni Contano.",
        z1ylKRIk6: title ?? props.z1ylKRIk6 ?? "Dai Dati Grezzi alla Chiarezza Strategica"
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
        className: className5,
        layoutId,
        variant,
        rLgKbulDG,
        z1ylKRIk6,
        hcM3hN67p,
        iawcM_X8n,
        I2oRAUKTZ,
        HpaLN3lmm,
        lU4LIQjBj,
        pWO7oO8vL,
        LS1OEQcql,
        IX3S2MtpN,
        cUHcvWejE,
        FOfg8DhVw,
        YRWFpV3NM,
        YmxGYOvcz,
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
        defaultVariant: "UelWR_G2p",
        ref: refBinding,
        variant,
        variantClassNames: variantClassNames2
    });
    const layoutDependency = createLayoutDependency2(props, variants);
    const sharedStyleClassNames = [className3, className2, className];
    const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
    return /* @__PURE__ */ _jsx2(LayoutGroup2, {
        id: layoutId ?? defaultLayoutId,
        children: /* @__PURE__ */ _jsx2(Variants2, {
            animate: variants,
            initial: false,
            children: /* @__PURE__ */ _jsx2(Transition2, {
                value: transition12,
                children: /* @__PURE__ */ _jsx2(motion2.section, {
                    ...restProps,
                    ...gestureHandlers,
                    className: cx2(scopingClassNames, "framer-4kkss5", className5, classNames),
                    "data-framer-name": "Desktop",
                    layoutDependency,
                    layoutId: "UelWR_G2p",
                    ref: refBinding,
                    style: {
                        ...style
                    },
                    ...addPropertyOverrides2({
                        iGlgdQAwM: {
                            "data-framer-name": "Tablet"
                        },
                        k2pQ6B4br: {
                            "data-framer-name": "Phone"
                        }
                    }, baseVariant, gestureVariant),
                    children: /* @__PURE__ */ _jsxs2(motion2.div, {
                        className: "framer-p6stnn",
                        "data-framer-name": "Container",
                        layoutDependency,
                        layoutId: "qNWKyVymA",
                        children: [ /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: "framer-16fbz0p",
                            "data-framer-name": "Title",
                            layoutDependency,
                            layoutId: "gUqXqkG9m",
                            children: [ /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                                height: 25,
                                y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2083) - 200 - 2248.2) / 2) + 0 + 0 + 0 + 0,
                                ...addPropertyOverrides2({
                                    iGlgdQAwM: {
                                        y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2355) - 200 - 2445) / 2) + 0 + 0 + 0 + 0
                                    },
                                    k2pQ6B4br: {
                                        y: (componentViewport?.y || 0) + (60 + ((componentViewport?.height || 6617) - 120 - 2357) / 2) + 0 + 0 + 0 + 0
                                    }
                                }, baseVariant, gestureVariant),
                                children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, {
                                    className: "framer-1yp2oh9-container",
                                    isModuleExternal: true,
                                    layoutDependency,
                                    layoutId: "SqRy6k3Ro-container",
                                    nodeId: "SqRy6k3Ro",
                                    rendersWithMotion: true,
                                    scopeId: "apIxBNoru",
                                    children: /* @__PURE__ */ _jsx2(stdin_default, {
                                        height: "100%",
                                        id: "SqRy6k3Ro",
                                        layoutId: "SqRy6k3Ro",
                                        nx4Vg5CG3: "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))",
                                        width: "100%",
                                        zbD88MwBd: rLgKbulDG
                                    })
                                })
                            }), /* @__PURE__ */ _jsx2(RichText2, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                    children: /* @__PURE__ */ _jsxs2(motion2.h2, {
                                        style: {
                                            "--font-selector": "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                            "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "-0.04em",
                                            "--framer-text-color": "var(--extracted-1of0zx5, var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237)))"
                                        },
                                        children: ["Dai Dati Grezzi alla ", /* @__PURE__ */ _jsx2(motion2.span, {
                                            style: {
                                                "--framer-text-color": "var(--extracted-1qn201a, rgb(201, 201, 201))"
                                            },
                                            children: "Chiarezza Strategica"
                                        })]
                                    })
                                }),
                                className: "framer-6l04ef",
                                "data-framer-name": "Title",
                                effect: textEffect,
                                fonts: ["FR;InterDisplay-Medium"],
                                layoutDependency,
                                layoutId: "KQ8FVs5XR",
                                style: {
                                    "--extracted-1of0zx5": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                    "--extracted-1qn201a": "rgb(201, 201, 201)",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                text: z1ylKRIk6,
                                verticalAlignment: "top",
                                withExternalLayout: true
                            })]
                        }), /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: "framer-11nldhk",
                            "data-framer-name": "Content",
                            layoutDependency,
                            layoutId: "z5KLHOaGq",
                            children: [ /* @__PURE__ */ _jsxs2(motion2.div, {
                                className: "framer-1jky73w",
                                "data-framer-name": "Schedule 01",
                                layoutDependency,
                                layoutId: "WHTRTMNv2",
                                children: [ /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                                    height: 85,
                                    width: `min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px)`,
                                    y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2083) - 200 - 2248.2) / 2) + 0 + 193 + 0 + 0 + 0 + 0,
                                    ...addPropertyOverrides2({
                                        iGlgdQAwM: {
                                            y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2355) - 200 - 2445) / 2) + 0 + 193 + 0 + 0 + 0 + 0
                                        },
                                        k2pQ6B4br: {
                                            width: `min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px)`,
                                            y: (componentViewport?.y || 0) + (60 + ((componentViewport?.height || 6617) - 120 - 2357) / 2) + 0 + 177 + 0 + 0 + 0 + 0
                                        }
                                    }, baseVariant, gestureVariant),
                                    children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, {
                                        className: "framer-g4hjay-container",
                                        isModuleExternal: true,
                                        layoutDependency,
                                        layoutId: "TXI5i2Mk4-container",
                                        nodeId: "TXI5i2Mk4",
                                        rendersWithMotion: true,
                                        scopeId: "apIxBNoru",
                                        children: /* @__PURE__ */ _jsx2(stdin_default2, {
                                            height: "100%",
                                            id: "TXI5i2Mk4",
                                            layoutId: "TXI5i2Mk4",
                                            sB9Iwdbsx: hcM3hN67p,
                                            style: {
                                                width: "100%"
                                            },
                                            Usf4fiXwj: iawcM_X8n,
                                            variant: "eOLAdzpTS",
                                            width: "100%",
                                            ...addPropertyOverrides2({
                                                k2pQ6B4br: {
                                                    variant: "gdeLbh8pp"
                                                }
                                            }, baseVariant, gestureVariant)
                                        })
                                    })
                                }), /* @__PURE__ */ _jsx2(motion2.div, {
                                    className: "framer-i4ygci",
                                    "data-framer-name": "Time Table",
                                    layoutDependency,
                                    layoutId: "EQrGBEdNg",
                                    children: /* @__PURE__ */ _jsxs2(motion2.div, {
                                        className: "framer-nnflm",
                                        "data-framer-name": "Session 01",
                                        layoutDependency,
                                        layoutId: "PRa_dY8Zn",
                                        children: [ /* @__PURE__ */ _jsx2(RichText2, {
                                            __fromCanvasComponent: true,
                                            children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                                children: /* @__PURE__ */ _jsx2(motion2.h4, {
                                                    style: {
                                                        "--framer-font-size": "24px",
                                                        "--framer-letter-spacing": "-0.03em",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0)))"
                                                    },
                                                    children: /* @__PURE__ */ _jsx2(motion2.br, {
                                                        className: "trailing-break"
                                                    })
                                                })
                                            }),
                                            className: "framer-to3j41",
                                            "data-framer-name": "Time",
                                            fonts: ["Inter"],
                                            layoutDependency,
                                            layoutId: "l1qFr4Crw",
                                            style: {
                                                "--extracted-1eung3n": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                "--framer-paragraph-spacing": "0px"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: true
                                        }), /* @__PURE__ */ _jsx2(motion2.div, {
                                            className: "framer-1ib0jsf",
                                            "data-border": true,
                                            "data-framer-name": "Content",
                                            layoutDependency,
                                            layoutId: "Nq7HyR6LZ",
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
                                            children: /* @__PURE__ */ _jsxs2(motion2.div, {
                                                className: "framer-yzahzr",
                                                "data-framer-name": "Title",
                                                layoutDependency,
                                                layoutId: "QP8pjL2pk",
                                                children: [ /* @__PURE__ */ _jsx2(RichText2, {
                                                    __fromCanvasComponent: true,
                                                    children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                                        children: /* @__PURE__ */ _jsx2(motion2.h3, {
                                                            style: {
                                                                "--font-selector": "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                                                "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                                                                "--framer-font-size": "38px",
                                                                "--framer-font-weight": "500",
                                                                "--framer-letter-spacing": "-0.04em",
                                                                "--framer-line-height": "1.3em",
                                                                "--framer-text-alignment": "left",
                                                                "--framer-text-color": "var(--extracted-a0htzi, var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237)))"
                                                            },
                                                            children: "Sistemi di Intelligenza Artificiale su Misura per la Complessit\xE0"
                                                        })
                                                    }),
                                                    className: "framer-ipzj2x",
                                                    "data-framer-name": "Event",
                                                    fonts: ["FR;InterDisplay-Medium"],
                                                    layoutDependency,
                                                    layoutId: "qi0X4RxMo",
                                                    style: {
                                                        "--extracted-a0htzi": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                        "--framer-paragraph-spacing": "0px"
                                                    },
                                                    text: I2oRAUKTZ,
                                                    verticalAlignment: "top",
                                                    withExternalLayout: true
                                                }), /* @__PURE__ */ _jsx2(RichText2, {
                                                    __fromCanvasComponent: true,
                                                    children: HpaLN3lmm,
                                                    className: "framer-21huk1",
                                                    "data-framer-name": "Description",
                                                    fonts: ["Inter"],
                                                    layoutDependency,
                                                    layoutId: "DnVvSGK5w",
                                                    style: {
                                                        "--framer-paragraph-spacing": "0px"
                                                    },
                                                    stylesPresetsClassNames: {
                                                        a: "framer-styles-preset-1u8pnli",
                                                        h1: "framer-styles-preset-5dzble",
                                                        h2: "framer-styles-preset-y2rde0",
                                                        h3: "framer-styles-preset-su1ghg",
                                                        h4: "framer-styles-preset-w50rcj",
                                                        p: "framer-styles-preset-1t5822r"
                                                    },
                                                    verticalAlignment: "top",
                                                    withExternalLayout: true
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), /* @__PURE__ */ _jsxs2(motion2.div, {
                                className: "framer-1om9rml",
                                "data-framer-name": "Schedule 02",
                                layoutDependency,
                                layoutId: "o2KZi6_Sb",
                                children: [ /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                                    height: 85,
                                    width: `min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px)`,
                                    y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2083) - 200 - 2248.2) / 2) + 0 + 193 + 0 + 898.4 + 0 + 0,
                                    ...addPropertyOverrides2({
                                        iGlgdQAwM: {
                                            y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2355) - 200 - 2445) / 2) + 0 + 193 + 0 + 964 + 0 + 0
                                        },
                                        k2pQ6B4br: {
                                            width: `min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px)`,
                                            y: (componentViewport?.y || 0) + (60 + ((componentViewport?.height || 6617) - 120 - 2357) / 2) + 0 + 177 + 0 + 940 + 0 + 0
                                        }
                                    }, baseVariant, gestureVariant),
                                    children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, {
                                        className: "framer-be4xr9-container",
                                        isModuleExternal: true,
                                        layoutDependency,
                                        layoutId: "bkGNd9LWk-container",
                                        nodeId: "bkGNd9LWk",
                                        rendersWithMotion: true,
                                        scopeId: "apIxBNoru",
                                        children: /* @__PURE__ */ _jsx2(stdin_default2, {
                                            height: "100%",
                                            id: "bkGNd9LWk",
                                            layoutId: "bkGNd9LWk",
                                            sB9Iwdbsx: lU4LIQjBj,
                                            style: {
                                                width: "100%"
                                            },
                                            Usf4fiXwj: pWO7oO8vL,
                                            variant: "eOLAdzpTS",
                                            width: "100%",
                                            ...addPropertyOverrides2({
                                                k2pQ6B4br: {
                                                    variant: "gdeLbh8pp"
                                                }
                                            }, baseVariant, gestureVariant)
                                        })
                                    })
                                }), /* @__PURE__ */ _jsx2(motion2.div, {
                                    className: "framer-rpx3qi",
                                    "data-framer-name": "Time Table",
                                    layoutDependency,
                                    layoutId: "W8UKxJ4oK",
                                    children: /* @__PURE__ */ _jsxs2(motion2.div, {
                                        className: "framer-1hsu37d",
                                        "data-framer-name": "Session 01",
                                        layoutDependency,
                                        layoutId: "bkKjsfCgg",
                                        children: [ /* @__PURE__ */ _jsx2(RichText2, {
                                            __fromCanvasComponent: true,
                                            children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                                children: /* @__PURE__ */ _jsx2(motion2.h4, {
                                                    style: {
                                                        "--framer-font-size": "24px",
                                                        "--framer-letter-spacing": "-0.03em",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0)))"
                                                    },
                                                    children: /* @__PURE__ */ _jsx2(motion2.br, {
                                                        className: "trailing-break"
                                                    })
                                                })
                                            }),
                                            className: "framer-162sb7o",
                                            "data-framer-name": "Time",
                                            fonts: ["Inter"],
                                            layoutDependency,
                                            layoutId: "N2ZanvP32",
                                            style: {
                                                "--extracted-1eung3n": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                "--framer-paragraph-spacing": "0px"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: true
                                        }), /* @__PURE__ */ _jsx2(motion2.div, {
                                            className: "framer-1l98kok",
                                            "data-border": true,
                                            "data-framer-name": "Content",
                                            layoutDependency,
                                            layoutId: "lkAUzBdmB",
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
                                            children: /* @__PURE__ */ _jsxs2(motion2.div, {
                                                className: "framer-1t5t5l0",
                                                "data-framer-name": "Title",
                                                layoutDependency,
                                                layoutId: "NcDFn3sJG",
                                                children: [ /* @__PURE__ */ _jsx2(RichText2, {
                                                    __fromCanvasComponent: true,
                                                    children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                                        children: /* @__PURE__ */ _jsx2(motion2.h3, {
                                                            style: {
                                                                "--font-selector": "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                                                "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                                                                "--framer-font-size": "38px",
                                                                "--framer-font-weight": "500",
                                                                "--framer-letter-spacing": "-0.04em",
                                                                "--framer-line-height": "1.3em",
                                                                "--framer-text-alignment": "left",
                                                                "--framer-text-color": "var(--extracted-a0htzi, var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237)))"
                                                            },
                                                            children: "Scalabile, Tokenizzata, Conforme"
                                                        })
                                                    }),
                                                    className: "framer-4gjki6",
                                                    "data-framer-name": "Event",
                                                    fonts: ["FR;InterDisplay-Medium"],
                                                    layoutDependency,
                                                    layoutId: "iKCWkGRY0",
                                                    style: {
                                                        "--extracted-a0htzi": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                        "--framer-paragraph-spacing": "0px"
                                                    },
                                                    text: LS1OEQcql,
                                                    verticalAlignment: "top",
                                                    withExternalLayout: true
                                                }), /* @__PURE__ */ _jsx2(RichText2, {
                                                    __fromCanvasComponent: true,
                                                    children: IX3S2MtpN,
                                                    className: "framer-1rjpg5q",
                                                    "data-framer-name": "Description",
                                                    fonts: ["Inter"],
                                                    layoutDependency,
                                                    layoutId: "U3j_qBh9N",
                                                    style: {
                                                        "--framer-paragraph-spacing": "0px"
                                                    },
                                                    stylesPresetsClassNames: {
                                                        a: "framer-styles-preset-1u8pnli",
                                                        h1: "framer-styles-preset-5dzble",
                                                        h2: "framer-styles-preset-y2rde0",
                                                        h3: "framer-styles-preset-su1ghg",
                                                        h4: "framer-styles-preset-w50rcj",
                                                        p: "framer-styles-preset-1t5822r"
                                                    },
                                                    verticalAlignment: "top",
                                                    withExternalLayout: true
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), /* @__PURE__ */ _jsxs2(motion2.div, {
                                className: "framer-17y7s45",
                                "data-framer-name": "Schedule 03",
                                layoutDependency,
                                layoutId: "Xd4mXfegq",
                                children: [ /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                                    height: 85,
                                    width: `min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px)`,
                                    y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2083) - 200 - 2248.2) / 2) + 0 + 193 + 0 + 1700.8 + 0 + 0,
                                    ...addPropertyOverrides2({
                                        iGlgdQAwM: {
                                            y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 2355) - 200 - 2445) / 2) + 0 + 193 + 0 + 1832 + 0 + 0
                                        },
                                        k2pQ6B4br: {
                                            width: `min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px)`,
                                            y: (componentViewport?.y || 0) + (60 + ((componentViewport?.height || 6617) - 120 - 2357) / 2) + 0 + 177 + 0 + 1784 + 0 + 0
                                        }
                                    }, baseVariant, gestureVariant),
                                    children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, {
                                        className: "framer-rwjs6p-container",
                                        isModuleExternal: true,
                                        layoutDependency,
                                        layoutId: "WKWKtiYDN-container",
                                        nodeId: "WKWKtiYDN",
                                        rendersWithMotion: true,
                                        scopeId: "apIxBNoru",
                                        children: /* @__PURE__ */ _jsx2(stdin_default2, {
                                            height: "100%",
                                            id: "WKWKtiYDN",
                                            layoutId: "WKWKtiYDN",
                                            sB9Iwdbsx: cUHcvWejE,
                                            style: {
                                                width: "100%"
                                            },
                                            Usf4fiXwj: FOfg8DhVw,
                                            variant: "eOLAdzpTS",
                                            width: "100%",
                                            ...addPropertyOverrides2({
                                                k2pQ6B4br: {
                                                    variant: "gdeLbh8pp"
                                                }
                                            }, baseVariant, gestureVariant)
                                        })
                                    })
                                }), /* @__PURE__ */ _jsx2(motion2.div, {
                                    className: "framer-11k652j",
                                    "data-framer-name": "Time Table",
                                    layoutDependency,
                                    layoutId: "AWNYxnJyG",
                                    children: /* @__PURE__ */ _jsxs2(motion2.div, {
                                        className: "framer-1kow3hx",
                                        "data-framer-name": "Session 01",
                                        layoutDependency,
                                        layoutId: "TLfRQu4ax",
                                        children: [ /* @__PURE__ */ _jsx2(RichText2, {
                                            __fromCanvasComponent: true,
                                            children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                                children: /* @__PURE__ */ _jsx2(motion2.h4, {
                                                    style: {
                                                        "--framer-font-size": "24px",
                                                        "--framer-letter-spacing": "-0.03em",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0)))"
                                                    },
                                                    children: /* @__PURE__ */ _jsx2(motion2.br, {
                                                        className: "trailing-break"
                                                    })
                                                })
                                            }),
                                            className: "framer-2myat3",
                                            "data-framer-name": "Time",
                                            fonts: ["Inter"],
                                            layoutDependency,
                                            layoutId: "pMhQ159jm",
                                            style: {
                                                "--extracted-1eung3n": "var(--token-440020f8-b9e1-49ea-9687-1ea12b43b3de, rgb(0, 0, 0))",
                                                "--framer-paragraph-spacing": "0px"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: true
                                        }), /* @__PURE__ */ _jsx2(motion2.div, {
                                            className: "framer-1hi6aqv",
                                            "data-border": true,
                                            "data-framer-name": "Content",
                                            layoutDependency,
                                            layoutId: "m66kCRKfu",
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
                                            children: /* @__PURE__ */ _jsxs2(motion2.div, {
                                                className: "framer-lbzl91",
                                                "data-framer-name": "Title",
                                                layoutDependency,
                                                layoutId: "YSZiECnxl",
                                                children: [ /* @__PURE__ */ _jsx2(RichText2, {
                                                    __fromCanvasComponent: true,
                                                    children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                                        children: /* @__PURE__ */ _jsx2(motion2.h3, {
                                                            style: {
                                                                "--font-selector": "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                                                "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                                                                "--framer-font-size": "38px",
                                                                "--framer-font-weight": "500",
                                                                "--framer-letter-spacing": "-0.04em",
                                                                "--framer-line-height": "1.3em",
                                                                "--framer-text-alignment": "left",
                                                                "--framer-text-color": "var(--extracted-a0htzi, var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237)))"
                                                            },
                                                            children: "I Dati da Soli non Bastano. Le Relazioni Contano."
                                                        })
                                                    }),
                                                    className: "framer-yg57oe",
                                                    "data-framer-name": "Event",
                                                    fonts: ["FR;InterDisplay-Medium"],
                                                    layoutDependency,
                                                    layoutId: "rmdY6nrPs",
                                                    style: {
                                                        "--extracted-a0htzi": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                                        "--framer-paragraph-spacing": "0px"
                                                    },
                                                    text: YRWFpV3NM,
                                                    verticalAlignment: "top",
                                                    withExternalLayout: true
                                                }), /* @__PURE__ */ _jsx2(RichText2, {
                                                    __fromCanvasComponent: true,
                                                    children: YmxGYOvcz,
                                                    className: "framer-1hk8mhu",
                                                    "data-framer-name": "Description",
                                                    fonts: ["Inter"],
                                                    layoutDependency,
                                                    layoutId: "OMhukTfHs",
                                                    style: {
                                                        "--framer-paragraph-spacing": "0px"
                                                    },
                                                    stylesPresetsClassNames: {
                                                        a: "framer-styles-preset-1u8pnli",
                                                        h1: "framer-styles-preset-5dzble",
                                                        h2: "framer-styles-preset-y2rde0",
                                                        h3: "framer-styles-preset-su1ghg",
                                                        h4: "framer-styles-preset-w50rcj",
                                                        p: "framer-styles-preset-1t5822r"
                                                    },
                                                    verticalAlignment: "top",
                                                    withExternalLayout: true
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    });
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-VeuRA.framer-wg0st0, .framer-VeuRA .framer-wg0st0 { display: block; }", ".framer-VeuRA.framer-4kkss5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 100px 40px 100px 40px; position: relative; width: 1200px; }", ".framer-VeuRA .framer-p6stnn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-VeuRA .framer-16fbz0p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-VeuRA .framer-1yp2oh9-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-VeuRA .framer-6l04ef { flex: none; height: auto; max-width: 820px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-VeuRA .framer-11nldhk, .framer-VeuRA .framer-1jky73w, .framer-VeuRA .framer-i4ygci, .framer-VeuRA .framer-1om9rml, .framer-VeuRA .framer-rpx3qi, .framer-VeuRA .framer-17y7s45, .framer-VeuRA .framer-11k652j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-VeuRA .framer-g4hjay-container, .framer-VeuRA .framer-be4xr9-container, .framer-VeuRA .framer-rwjs6p-container { flex: none; height: auto; position: sticky; top: 82px; width: 100%; z-index: 1; }", ".framer-VeuRA .framer-nnflm, .framer-VeuRA .framer-1hsu37d, .framer-VeuRA .framer-1kow3hx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 74px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 24px; position: relative; width: 100%; }", ".framer-VeuRA .framer-to3j41, .framer-VeuRA .framer-162sb7o, .framer-VeuRA .framer-2myat3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 233px; word-break: break-word; word-wrap: break-word; }", ".framer-VeuRA .framer-1ib0jsf, .framer-VeuRA .framer-1l98kok, .framer-VeuRA .framer-1hi6aqv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 32px 24px 32px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-VeuRA .framer-yzahzr, .framer-VeuRA .framer-1t5t5l0, .framer-VeuRA .framer-lbzl91 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-VeuRA .framer-ipzj2x, .framer-VeuRA .framer-4gjki6, .framer-VeuRA .framer-yg57oe { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-VeuRA .framer-21huk1, .framer-VeuRA .framer-1rjpg5q, .framer-VeuRA .framer-1hk8mhu { flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-VeuRA.framer-v-15mij1e.framer-4kkss5 { width: 810px; }", ".framer-VeuRA.framer-v-15mij1e .framer-nnflm, .framer-VeuRA.framer-v-15mij1e .framer-1hsu37d, .framer-VeuRA.framer-v-15mij1e .framer-1kow3hx { flex-direction: column; gap: 32px; }", ".framer-VeuRA.framer-v-15mij1e .framer-1ib0jsf, .framer-VeuRA.framer-v-15mij1e .framer-1l98kok, .framer-VeuRA.framer-v-15mij1e .framer-1hi6aqv { flex: none; width: 100%; }", ".framer-VeuRA.framer-v-1bf6iei.framer-4kkss5 { padding: 60px 20px 60px 20px; width: 200px; }", ".framer-VeuRA.framer-v-1bf6iei .framer-p6stnn, .framer-VeuRA.framer-v-1bf6iei .framer-1jky73w, .framer-VeuRA.framer-v-1bf6iei .framer-1om9rml, .framer-VeuRA.framer-v-1bf6iei .framer-17y7s45 { gap: 48px; }", ".framer-VeuRA.framer-v-1bf6iei .framer-g4hjay-container, .framer-VeuRA.framer-v-1bf6iei .framer-be4xr9-container, .framer-VeuRA.framer-v-1bf6iei .framer-rwjs6p-container { top: 76px; }", ".framer-VeuRA.framer-v-1bf6iei .framer-nnflm, .framer-VeuRA.framer-v-1bf6iei .framer-1hsu37d, .framer-VeuRA.framer-v-1bf6iei .framer-1kow3hx { flex-direction: column; gap: 24px; padding: 0px; }", ".framer-VeuRA.framer-v-1bf6iei .framer-1ib0jsf, .framer-VeuRA.framer-v-1bf6iei .framer-1l98kok, .framer-VeuRA.framer-v-1bf6iei .framer-1hi6aqv { flex: none; padding: 24px; width: 100%; }", ...css3, ...css2, ...css, '.framer-VeuRA[data-border="true"]::after, .framer-VeuRA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerapIxBNoru = withCSS2(Component2, css6, "framer-VeuRA");
var stdin_default3 = FramerapIxBNoru;
FramerapIxBNoru.displayName = "CosaSteps";
FramerapIxBNoru.defaultProps = {
    height: 2083,
    width: 1200
};
addPropertyControls2(FramerapIxBNoru, {
    variant: {
        options: ["UelWR_G2p", "iGlgdQAwM", "k2pQ6B4br"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: ControlType2.Enum
    },
    rLgKbulDG: {
        defaultValue: "Strategica",
        displayTextArea: false,
        title: "Tag",
        type: ControlType2.String
    },
    z1ylKRIk6: {
        defaultValue: "Dai Dati Grezzi alla Chiarezza Strategica",
        displayTextArea: false,
        title: "Title",
        type: ControlType2.String
    },
    hcM3hN67p: {
        defaultValue: "Sistemi",
        displayTextArea: false,
        title: "Section 1 Tag",
        type: ControlType2.String
    },
    iawcM_X8n: {
        defaultValue: "Cosa Realizziamo",
        displayTextArea: false,
        title: "Section 1 Subtag",
        type: ControlType2.String
    },
    I2oRAUKTZ: {
        defaultValue: "Sistemi di Intelligenza Artificiale su Misura per la Complessit\xE0",
        displayTextArea: false,
        title: "Section 1 Title",
        type: ControlType2.String
    },
    HpaLN3lmm: {
        defaultValue: '<p>Progettiamo piattaforme client-server personalizzate basate su <strong>Machine Learning</strong>, <strong>Data Mining</strong> e <strong>Reti Neurali</strong>.<br>I nostri sistemi sono pensati per scoprire correlazioni nascoste nei dati clinici e organizzativi\u2014e rivelare intuizioni dove gli strumenti tradizionali falliscono.<br><br><strong>Funzionalit\xE0 Principali:</strong></p><ul class="framer-styles-preset-luad1x" data-styles-preset="QrpSGcou5"><li class="framer-styles-preset-luad1x" data-styles-preset="QrpSGcou5" data-preset-tag="p"><p>Individuazione di relazioni forti ma sottili nei dati</p></li><li class="framer-styles-preset-luad1x" data-styles-preset="QrpSGcou5" data-preset-tag="p"><p>Addestramento di modelli predittivi e di classificazione</p></li><li class="framer-styles-preset-luad1x" data-styles-preset="QrpSGcou5" data-preset-tag="p"><p>Analisi strutturate e automatizzate per reparti</p></li><li class="framer-styles-preset-luad1x" data-styles-preset="QrpSGcou5" data-preset-tag="p"><p>Validazione AI in tempo reale per ridurre gli errori</p></li><li class="framer-styles-preset-luad1x" data-styles-preset="QrpSGcou5" data-preset-tag="p"><p>Elaborazione dati tokenizzata e conforme al GDPR</p></li></ul>',
        title: "Section 1 Paragraph",
        type: ControlType2.RichText
    },
    lU4LIQjBj: {
        defaultValue: "Data",
        displayTextArea: false,
        title: "Section 2 Tag",
        type: ControlType2.String
    },
    pWO7oO8vL: {
        defaultValue: "Infrastruttura Data-Driven",
        displayTextArea: false,
        title: "Section 2 Subtag",
        type: ControlType2.String
    },
    LS1OEQcql: {
        defaultValue: "Scalabile, Tokenizzata, Conforme",
        displayTextArea: false,
        title: "Section 2 Title",
        type: ControlType2.String
    },
    IX3S2MtpN: {
        defaultValue: `<p>Progettiamo infrastrutture scalabili in grado di connettersi a fonti dati eterogenee nei sistemi sanitari.<br>Ogni flusso dati \xE8 pienamente conforme al GDPR e predisposto per analisi scientifiche e procedurali sia interne che esterne.<br><br><strong>Casi d'Uso:</strong></p><ul class="framer-styles-preset-luad1x" data-styles-preset="QrpSGcou5"><li data-preset-tag="p"><p>Dashboard per ricerca scientifica interna ed esterna</p></li><li data-preset-tag="p"><p>Indicatori predittivi per ottimizzazione risorse</p></li><li data-preset-tag="p"><p>Classificatori per diagnostica e controllo qualit\xE0</p></li><li data-preset-tag="p"><p>Accesso via API per analisi da parte di partner autorizzati</p></li></ul>`,
        title: "Section 2 Paragraph",
        type: ControlType2.RichText
    },
    cUHcvWejE: {
        defaultValue: "Relazioni ",
        displayTextArea: false,
        title: "Section 3 Tag",
        type: ControlType2.String
    },
    FOfg8DhVw: {
        defaultValue: "Perch\xE9 \xE8 Importante",
        displayTextArea: false,
        title: "Section 3 Subtag",
        type: ControlType2.String
    },
    YRWFpV3NM: {
        defaultValue: "I Dati da Soli non Bastano. Le Relazioni Contano.",
        displayTextArea: false,
        title: "Section 3 Title",
        type: ControlType2.String
    },
    YmxGYOvcz: {
        defaultValue: "<p>Riconoscere connessioni significative tra dataset \xE8 ci\xF2 che trasforma i dati in azioni concrete.<br>\xC8 questa la nostra specialit\xE0\u2014e la nostra passione. Dalle decisioni manageriali all\u2019assistenza clinica, facciamo parlare i dati con il linguaggio dei risultati.</p>",
        title: "Text",
        type: ControlType2.RichText
    }
});
addFonts2(FramerapIxBNoru, [{
    explicitInter: true,
    fonts: [{
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2",
        weight: "500"
    }, {
        family: "Inter Display",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2",
        weight: "500"
    }, {
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
}, ...SectionTagFonts, ...DayTitleFonts, ...getFontsFromSharedStyle2(fonts3), ...getFontsFromSharedStyle2(fonts2), ...getFontsFromSharedStyle2(fonts)], {
    supportsExplicitInterCodegen: true
});

// virtual:cosa-steps
import {
    WithFramerBreakpoints
} from "unframer";
import {
    jsx
} from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
    "base": "k2pQ6B4br",
    "md": "iGlgdQAwM",
    "xl": "UelWR_G2p"
};
stdin_default3.Responsive = ({
    locale,
    ...rest
}) => {
    return /* @__PURE__ */ jsx(
        ContextProviders, {
            routes: {
                "fT8PkIPH6": {
                    "path": "/cosa-facciamo"
                },
                "viyyEENhk": {
                    "path": "/contact"
                },
                "znEI7WOO4": {
                    "path": "/"
                }
            },
            children: /* @__PURE__ */ jsx(
                WithFramerBreakpoints, {
                    Component: stdin_default3,
                    variants: defaultResponsiveVariants,
                    ...rest
                }
            ),
            framerSiteId: "549039614794810cfaf4fa713b9f63c873e17017b49403a5d0c91ba79392b56f",
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
                "fT8PkIPH6": {
                    "path": "/cosa-facciamo"
                },
                "viyyEENhk": {
                    "path": "/contact"
                },
                "znEI7WOO4": {
                    "path": "/"
                }
            },
            children: /* @__PURE__ */ jsx(stdin_default3, {
                ...rest
            }),
            framerSiteId: "549039614794810cfaf4fa713b9f63c873e17017b49403a5d0c91ba79392b56f",
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