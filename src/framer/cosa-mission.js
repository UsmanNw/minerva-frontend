"use client";
import { cosa } from '../config/website'; 
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

// virtual:cosa-mission
import {
    Fragment as Fragment2
} from "react";
import {
    ContextProviders
} from "unframer";

// /:https://framerusercontent.com/modules/jKkBQrBX8PXo4SqsyH3j/hXVDsjj9eEBVR3qJ01SY/s0Kz29lUU.js
import {
    jsx as _jsx,
    jsxs as _jsxs
} from "react/jsx-runtime";
import {
    addFonts,
    addPropertyControls,
    ComponentViewportProvider,
    ControlType,
    cx,
    getFonts,
    getFontsFromSharedStyle,
    getLoadingLazyAtYPosition,
    Image,
    RichText,
    SmartComponentScopedContainer,
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
var SectionTagFonts = getFonts(stdin_default);
var ImageWithFX = withFX(Image);
var cycleOrder = ["A4wVey3bp", "tcITakXEK", "igNBplcVY"];
var serializationHash = "framer-lIseU";
var variantClassNames = {
    A4wVey3bp: "framer-v-1j56f0i",
    igNBplcVY: "framer-v-1yniwkh",
    tcITakXEK: "framer-v-114iaap"
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
    threshold: 0.5,
    tokenization: "word",
    transition: transition2,
    trigger: "onInView",
    type: "appear"
};
var toResponsiveImage = (value) => {
    if (typeof value === "object" && value !== null && typeof value.src === "string") {
        return value;
    }
    return typeof value === "string" ? {
        src: value
    } : void 0;
};
var animation1 = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.8,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
};
var transition3 = {
    delay: 0,
    duration: 0.4,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween"
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
    Desktop: "A4wVey3bp",
    Phone: "igNBplcVY",
    Tablet: "tcITakXEK"
};
var getProps = ({
    height,
    id,
    image1,
    image2,
    image3,
    image4,
    paragraph,
    subheading,
    tag,
    title,
    width,
    ...props
}) => {
    return {
        ...props,
        BHDmIakQL: image1 ?? props.BHDmIakQL ?? {
            alt: "",
            pixelHeight: 720,
            pixelWidth: 1280,
            src: "https://framerusercontent.com/images/Yg9FazlImaXHfRgLvV58QIiMDM.png",
            srcSet: "https://framerusercontent.com/images/Yg9FazlImaXHfRgLvV58QIiMDM.png?scale-down-to=512 512w,https://framerusercontent.com/images/Yg9FazlImaXHfRgLvV58QIiMDM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Yg9FazlImaXHfRgLvV58QIiMDM.png 1280w"
        },
        dGcReU3Qy: image3 ?? props.dGcReU3Qy ?? {
            alt: "",
            pixelHeight: 720,
            pixelWidth: 1280,
            src: "https://framerusercontent.com/images/R2LRojVOYUS4wCCjcgTMyslm9E.png",
            srcSet: "https://framerusercontent.com/images/R2LRojVOYUS4wCCjcgTMyslm9E.png?scale-down-to=512 512w,https://framerusercontent.com/images/R2LRojVOYUS4wCCjcgTMyslm9E.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/R2LRojVOYUS4wCCjcgTMyslm9E.png 1280w"
        },
        gZpKz1EC4: image4 ?? props.gZpKz1EC4 ?? {
            alt: "",
            pixelHeight: 720,
            pixelWidth: 1280,
            src: "https://framerusercontent.com/images/SXdWqc3hZDzYQWNuvzPvBAsHBU.png",
            srcSet: "https://framerusercontent.com/images/SXdWqc3hZDzYQWNuvzPvBAsHBU.png?scale-down-to=512 512w,https://framerusercontent.com/images/SXdWqc3hZDzYQWNuvzPvBAsHBU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SXdWqc3hZDzYQWNuvzPvBAsHBU.png 1280w"
        },
        Hh0StJSIZ: subheading ?? props.Hh0StJSIZ ?? "Rendiamo Causale ci\xF2 che Apparentemente \xE8 Casuale",
        variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "A4wVey3bp",
xZ8up07Xd:
  cosa.paragraph
    ? /* @__PURE__ */ _jsx(React.Fragment, {
        children: /* @__PURE__ */ _jsxs(motion.p, {
          children: cosa.paragraph.flatMap((text, i, arr) => [
            text,
            i < arr.length - 1 ? _jsx(motion.br, {}, `br-${i}`) : null
          ])
        })
      })
    : paragraph ?? props.xZ8up07Xd ?? /* @__PURE__ */ _jsx(React.Fragment, {
        children: /* @__PURE__ */ _jsxs(motion.p, {
          children: [
            "Crediamo in un mondo in cui le macchine siano al servizio dell’uomo e non il contrario.",
            _jsx(motion.br, {}),
            "La nostra missione è riportare l’essere umano al centro, fornendogli gli strumenti necessari per prendere decisioni più giuste, rapide e consapevoli."
          ]
        })
      }),
        yjyHlKiTp: tag ?? props.yjyHlKiTp ?? "Missione",
        yQTkAvTTR: title ?? props.yQTkAvTTR ?? "La Nostra Missione",
        ytBZ4OYug: image2 ?? props.ytBZ4OYug ?? {
            alt: "",
            pixelHeight: 720,
            pixelWidth: 1280,
            src: "https://framerusercontent.com/images/cpQVe0nVad3nqNtVyESyetSA.png",
            srcSet: "https://framerusercontent.com/images/cpQVe0nVad3nqNtVyESyetSA.png?scale-down-to=512 512w,https://framerusercontent.com/images/cpQVe0nVad3nqNtVyESyetSA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/cpQVe0nVad3nqNtVyESyetSA.png 1280w"
        }
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
        className: className4,
        layoutId,
        variant,
        yjyHlKiTp,
        yQTkAvTTR,
        Hh0StJSIZ,
        BHDmIakQL,
        ytBZ4OYug,
        dGcReU3Qy,
        gZpKz1EC4,
        xZ8up07Xd,
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
        defaultVariant: "A4wVey3bp",
        ref: refBinding,
        variant,
        variantClassNames
    });
    const layoutDependency = createLayoutDependency(props, variants);
    const sharedStyleClassNames = [className3, className2, className];
    const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
    return /* @__PURE__ */ _jsx(LayoutGroup, {
        id: layoutId ?? defaultLayoutId,
        children: /* @__PURE__ */ _jsx(Variants, {
            animate: variants,
            initial: false,
            children: /* @__PURE__ */ _jsx(Transition, {
                value: transition1,
                children: /* @__PURE__ */ _jsx(motion.section, {
                    ...restProps,
                    ...gestureHandlers,
                    className: cx(scopingClassNames, "framer-1j56f0i", className4, classNames),
                    "data-framer-name": "Desktop",
                    layoutDependency,
                    layoutId: "A4wVey3bp",
                    ref: refBinding,
                    style: {
                        ...style
                    },
                    ...addPropertyOverrides({
                        igNBplcVY: {
                            "data-framer-name": "Phone"
                        },
                        tcITakXEK: {
                            "data-framer-name": "Tablet"
                        }
                    }, baseVariant, gestureVariant),
                    children: /* @__PURE__ */ _jsxs(motion.div, {
                        className: "framer-87ruwx",
                        "data-framer-name": "Container",
                        layoutDependency,
                        layoutId: "QMOSu3FD2",
                        children: [ /* @__PURE__ */ _jsxs(motion.div, {
                            className: "framer-saqnj0",
                            "data-framer-name": "Content",
                            layoutDependency,
                            layoutId: "XPBBeBekX",
                            children: [ /* @__PURE__ */ _jsxs(motion.div, {
                                className: "framer-1han0vm",
                                "data-framer-name": "Title",
                                layoutDependency,
                                layoutId: "NSpoYZonm",
                                children: [ /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                                    height: 25,
                                    y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 535) / 2) + 0 + 0 + 0 + 0 + 0,
                                    ...addPropertyOverrides({
                                        igNBplcVY: {
                                            y: (componentViewport?.y || 0) + (60 + ((componentViewport?.height || 200) - 120 - 937.4) / 2) + 0 + 0 + 0 + 0 + 0 + 0
                                        },
                                        tcITakXEK: {
                                            y: (componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 989.4) / 2) + 0 + 0 + 0 + 0 + 0 + 0
                                        }
                                    }, baseVariant, gestureVariant),
                                    children: /* @__PURE__ */ _jsx(SmartComponentScopedContainer, {
                                        className: "framer-1rudrl7-container",
                                        isModuleExternal: true,
                                        layoutDependency,
                                        layoutId: "uzZEsgnla-container",
                                        nodeId: "uzZEsgnla",
                                        rendersWithMotion: true,
                                        scopeId: "s0Kz29lUU",
                                        children: /* @__PURE__ */ _jsx(stdin_default, {
                                            height: "100%",
                                            id: "uzZEsgnla",
                                            layoutId: "uzZEsgnla",
                                            nx4Vg5CG3: "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))",
                                            width: "100%",
                                            zbD88MwBd: yjyHlKiTp
                                        })
                                    })
                                }), /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.h2, {
                                            style: {
                                                "--font-selector": "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                                "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                                                "--framer-font-size": "60px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.04em",
                                                "--framer-text-color": "var(--extracted-1of0zx5, var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237)))"
                                            },
                                            children: "La Nostra Missione"
                                        })
                                    }),
                                    className: "framer-1twjmu2",
                                    "data-framer-name": "Title",
                                    effect: textEffect,
                                    fonts: ["FR;InterDisplay-Medium"],
                                    layoutDependency,
                                    layoutId: "h2bUucjhh",
                                    style: {
                                        "--extracted-1of0zx5": "var(--token-c465f8c5-7fa9-436d-b203-2cb129c31fb1, rgb(237, 237, 237))",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    text: yQTkAvTTR,
                                    verticalAlignment: "top",
                                    withExternalLayout: true
                                }), /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.h3, {
                                            style: {
                                                "--font-selector": "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                                "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                                                "--framer-font-size": "38px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.04em",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-a0htzi, var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255)))"
                                            },
                                            children: "Rendiamo Causale ci\xF2 che Apparentemente \xE8 Casuale"
                                        })
                                    }),
                                    className: "framer-1gmlvge",
                                    "data-framer-name": "Title",
                                    effect: textEffect,
                                    fonts: ["FR;InterDisplay-Medium"],
                                    layoutDependency,
                                    layoutId: "q4m1antx0",
                                    style: {
                                        "--extracted-a0htzi": "var(--token-873fb35c-2084-47f0-9254-cb5d8b65f475, rgb(255, 255, 255))",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    text: Hh0StJSIZ,
                                    verticalAlignment: "top",
                                    withExternalLayout: true
                                })]
                            }), /* @__PURE__ */ _jsx(motion.div, {
                                className: "framer-80uzmu",
                                "data-framer-name": "From Host",
                                layoutDependency,
                                layoutId: "KfZwuqnlz",
                                children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: xZ8up07Xd,
                                    className: "framer-8yyami",
                                    "data-framer-name": "Launched in 2016, Anyone was founded with the goal of uniting creatively minded people, regardless of their experience or profession, to share their knowledge, ideas, and interests.\u2028\u200D\u2028After a hiatus, Anyone Events returns in 2024 with a renewed mission to nurture creative partnerships, support local talent, and build a thriving creative community in Leeds and beyond.\u2028\u200D",
                                    fonts: ["Inter"],
                                    layoutDependency,
                                    layoutId: "CxpM0BT_w",
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
                                })
                            })]
                        }), /* @__PURE__ */ _jsx(motion.div, {
                            className: "framer-1cxzbb1",
                            "data-framer-name": "Images",
                            layoutDependency,
                            layoutId: "JmbBE8v6W",
                            children: /* @__PURE__ */ _jsxs(motion.div, {
                                className: "framer-41yllp",
                                "data-framer-name": "Container",
                                layoutDependency,
                                layoutId: "GieIwbgjD",
                                children: [ /* @__PURE__ */ _jsxs(motion.div, {
                                    className: "framer-phlew9",
                                    "data-framer-name": "Group 1",
                                    layoutDependency,
                                    layoutId: "gnVxEG1tL",
                                    children: [ /* @__PURE__ */ _jsx(ImageWithFX, {
                                        __framer__animate: {
                                            transition: transition3
                                        },
                                        __framer__animateOnce: true,
                                        __framer__enter: animation1,
                                        __framer__styleAppearEffectEnabled: true,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: false,
                                        __smartComponentFX: true,
                                        __targetOpacity: 1,
                                        as: "figure",
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 535) / 2) + 0 + 0 + 0 + 20 + 0),
                                            pixelHeight: 720,
                                            pixelWidth: 1280,
                                            sizes: `max((max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 100px) / 2.2, 1px) - 20px) / 2, 1px)`,
                                            ...toResponsiveImage(BHDmIakQL)
                                        },
                                        className: "framer-65gj4t",
                                        "data-border": true,
                                        "data-framer-name": "Image 1",
                                        layoutDependency,
                                        layoutId: "X2b93lnrB",
                                        style: {
                                            "--border-bottom-width": "1px",
                                            "--border-color": "var(--token-9a7303fe-2324-4aa1-bbd4-e1f1d449de82, rgba(255, 255, 255, 0.12))",
                                            "--border-left-width": "1px",
                                            "--border-right-width": "1px",
                                            "--border-style": "solid",
                                            "--border-top-width": "1px",
                                            borderBottomLeftRadius: 24,
                                            borderBottomRightRadius: 24,
                                            borderTopLeftRadius: 24,
                                            borderTopRightRadius: 24
                                        },
                                        ...addPropertyOverrides({
                                            igNBplcVY: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (60 + ((componentViewport?.height || 200) - 120 - 937.4) / 2) + 0 + 402.4 + 0 + 0 + 0 + 20 + 0),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(BHDmIakQL)
                                                }
                                            },
                                            tcITakXEK: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 989.4) / 2) + 0 + 454.4 + 0 + 0 + 0 + 20 + 0),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(BHDmIakQL)
                                                }
                                            }
                                        }, baseVariant, gestureVariant)
                                    }), /* @__PURE__ */ _jsx(ImageWithFX, {
                                        __framer__animate: {
                                            transition: transition3
                                        },
                                        __framer__animateOnce: true,
                                        __framer__enter: animation1,
                                        __framer__styleAppearEffectEnabled: true,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: false,
                                        __smartComponentFX: true,
                                        __targetOpacity: 1,
                                        as: "figure",
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 535) / 2) + 0 + 0 + 0 + 20 + 316),
                                            pixelHeight: 720,
                                            pixelWidth: 1280,
                                            sizes: `max((max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 100px) / 2.2, 1px) - 20px) / 2, 1px)`,
                                            ...toResponsiveImage(ytBZ4OYug)
                                        },
                                        className: "framer-n4c36p",
                                        "data-border": true,
                                        "data-framer-name": "Image 2",
                                        layoutDependency,
                                        layoutId: "AjFKFrdwk",
                                        style: {
                                            "--border-bottom-width": "1px",
                                            "--border-color": "var(--token-9a7303fe-2324-4aa1-bbd4-e1f1d449de82, rgba(255, 255, 255, 0.12))",
                                            "--border-left-width": "1px",
                                            "--border-right-width": "1px",
                                            "--border-style": "solid",
                                            "--border-top-width": "1px",
                                            borderBottomLeftRadius: 24,
                                            borderBottomRightRadius: 24,
                                            borderTopLeftRadius: 24,
                                            borderTopRightRadius: 24
                                        },
                                        ...addPropertyOverrides({
                                            igNBplcVY: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (60 + ((componentViewport?.height || 200) - 120 - 937.4) / 2) + 0 + 402.4 + 0 + 0 + 0 + 20 + 316),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(ytBZ4OYug)
                                                }
                                            },
                                            tcITakXEK: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 989.4) / 2) + 0 + 454.4 + 0 + 0 + 0 + 20 + 316),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(ytBZ4OYug)
                                                }
                                            }
                                        }, baseVariant, gestureVariant)
                                    })]
                                }), /* @__PURE__ */ _jsxs(motion.div, {
                                    className: "framer-1nelwyj",
                                    "data-framer-name": "Group 2",
                                    layoutDependency,
                                    layoutId: "Q7c8QtwWX",
                                    children: [ /* @__PURE__ */ _jsx(ImageWithFX, {
                                        __framer__animate: {
                                            transition: transition3
                                        },
                                        __framer__animateOnce: true,
                                        __framer__enter: animation1,
                                        __framer__styleAppearEffectEnabled: true,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: false,
                                        __smartComponentFX: true,
                                        __targetOpacity: 1,
                                        as: "figure",
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 535) / 2) + 0 + 0 + 0 + 0 + 0),
                                            pixelHeight: 720,
                                            pixelWidth: 1280,
                                            sizes: `max((max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 100px) / 2.2, 1px) - 20px) / 2, 1px)`,
                                            ...toResponsiveImage(dGcReU3Qy)
                                        },
                                        className: "framer-207vhs",
                                        "data-border": true,
                                        "data-framer-name": "Image 3",
                                        layoutDependency,
                                        layoutId: "DTBWCYc0n",
                                        style: {
                                            "--border-bottom-width": "1px",
                                            "--border-color": "var(--token-9a7303fe-2324-4aa1-bbd4-e1f1d449de82, rgba(255, 255, 255, 0.12))",
                                            "--border-left-width": "1px",
                                            "--border-right-width": "1px",
                                            "--border-style": "solid",
                                            "--border-top-width": "1px",
                                            borderBottomLeftRadius: 24,
                                            borderBottomRightRadius: 24,
                                            borderTopLeftRadius: 24,
                                            borderTopRightRadius: 24
                                        },
                                        ...addPropertyOverrides({
                                            igNBplcVY: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (60 + ((componentViewport?.height || 200) - 120 - 937.4) / 2) + 0 + 402.4 + 0 + 0 + 0 + 0 + 0),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(dGcReU3Qy)
                                                }
                                            },
                                            tcITakXEK: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 989.4) / 2) + 0 + 454.4 + 0 + 0 + 0 + 0 + 0),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(dGcReU3Qy)
                                                }
                                            }
                                        }, baseVariant, gestureVariant)
                                    }), /* @__PURE__ */ _jsx(ImageWithFX, {
                                        __framer__animate: {
                                            transition: transition3
                                        },
                                        __framer__animateOnce: true,
                                        __framer__enter: animation1,
                                        __framer__styleAppearEffectEnabled: true,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: false,
                                        __smartComponentFX: true,
                                        __targetOpacity: 1,
                                        as: "figure",
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 535) / 2) + 0 + 0 + 0 + 0 + 219),
                                            pixelHeight: 720,
                                            pixelWidth: 1280,
                                            sizes: `max((max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 100px) / 2.2, 1px) - 20px) / 2, 1px)`,
                                            ...toResponsiveImage(gZpKz1EC4)
                                        },
                                        className: "framer-14pzqpi",
                                        "data-border": true,
                                        "data-framer-name": "Image 4",
                                        layoutDependency,
                                        layoutId: "BKGKs6b68",
                                        style: {
                                            "--border-bottom-width": "1px",
                                            "--border-color": "var(--token-9a7303fe-2324-4aa1-bbd4-e1f1d449de82, rgba(255, 255, 255, 0.12))",
                                            "--border-left-width": "1px",
                                            "--border-right-width": "1px",
                                            "--border-style": "solid",
                                            "--border-top-width": "1px",
                                            borderBottomLeftRadius: 24,
                                            borderBottomRightRadius: 24,
                                            borderTopLeftRadius: 24,
                                            borderTopRightRadius: 24
                                        },
                                        ...addPropertyOverrides({
                                            igNBplcVY: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (60 + ((componentViewport?.height || 200) - 120 - 937.4) / 2) + 0 + 402.4 + 0 + 0 + 0 + 0 + 219),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 40px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(gZpKz1EC4)
                                                }
                                            },
                                            tcITakXEK: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (100 + ((componentViewport?.height || 200) - 200 - 989.4) / 2) + 0 + 454.4 + 0 + 0 + 0 + 0 + 219),
                                                    pixelHeight: 720,
                                                    pixelWidth: 1280,
                                                    sizes: `max((min(max(${componentViewport?.width || "100vw"} - 80px, 1px), 1440px) - 20px) / 2, 1px)`,
                                                    ...toResponsiveImage(gZpKz1EC4)
                                                }
                                            }
                                        }, baseVariant, gestureVariant)
                                    })]
                                })]
                            })
                        })]
                    })
                })
            })
        })
    });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-lIseU.framer-ard5af, .framer-lIseU .framer-ard5af { display: block; }", ".framer-lIseU.framer-1j56f0i { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 40px 100px 40px; position: relative; width: 1200px; }", ".framer-lIseU .framer-87ruwx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-lIseU .framer-saqnj0 { align-content: center; align-items: center; display: flex; flex: 1.2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 660px; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-lIseU .framer-1han0vm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-lIseU .framer-1rudrl7-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-lIseU .framer-1twjmu2, .framer-lIseU .framer-1gmlvge { flex: none; height: auto; max-width: 820px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-lIseU .framer-80uzmu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-lIseU .framer-8yyami { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-lIseU .framer-1cxzbb1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-lIseU .framer-41yllp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-lIseU .framer-phlew9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 1px; }", ".framer-lIseU .framer-65gj4t, .framer-lIseU .framer-14pzqpi { aspect-ratio: 0.8209459459459459 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 244px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-lIseU .framer-n4c36p, .framer-lIseU .framer-207vhs { aspect-ratio: 1.221105527638191 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 164px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-lIseU .framer-1nelwyj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 20px 0px; position: relative; width: 1px; }", ".framer-lIseU.framer-v-114iaap.framer-1j56f0i { width: 810px; }", ".framer-lIseU.framer-v-114iaap .framer-87ruwx { flex-direction: column; }", ".framer-lIseU.framer-v-114iaap .framer-saqnj0, .framer-lIseU.framer-v-114iaap .framer-41yllp, .framer-lIseU.framer-v-1yniwkh .framer-41yllp { flex: none; width: 100%; }", ".framer-lIseU.framer-v-114iaap .framer-1cxzbb1 { flex: none; flex-direction: column; width: 100%; }", ".framer-lIseU.framer-v-1yniwkh.framer-1j56f0i { padding: 60px 20px 60px 20px; width: 200px; }", ".framer-lIseU.framer-v-1yniwkh .framer-87ruwx { flex-direction: column; gap: 48px; }", ".framer-lIseU.framer-v-1yniwkh .framer-saqnj0 { flex: none; order: 0; width: 100%; }", ".framer-lIseU.framer-v-1yniwkh .framer-1cxzbb1 { flex: none; flex-direction: column; order: 1; width: 100%; }", ...css3, ...css2, ...css, '.framer-lIseU[data-border="true"]::after, .framer-lIseU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var Framers0Kz29lUU = withCSS(Component, css4, "framer-lIseU");
var stdin_default2 = Framers0Kz29lUU;
Framers0Kz29lUU.displayName = "CosaMission";
Framers0Kz29lUU.defaultProps = {
    height: 692,
    width: 1200
};
addPropertyControls(Framers0Kz29lUU, {
    variant: {
        options: ["A4wVey3bp", "tcITakXEK", "igNBplcVY"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: ControlType.Enum
    },
    yjyHlKiTp: {
        defaultValue: "Missione",
        displayTextArea: false,
        title: "Tag",
        type: ControlType.String
    },
    yQTkAvTTR: {
        defaultValue: "La Nostra Missione",
        displayTextArea: false,
        title: "Title",
        type: ControlType.String
    },
    Hh0StJSIZ: {
        defaultValue: "Rendiamo Causale ci\xF2 che Apparentemente \xE8 Casuale",
        displayTextArea: false,
        title: "Subheading",
        type: ControlType.String
    },
    BHDmIakQL: {
        __defaultAssetReference: "data:framer/asset-reference,Yg9FazlImaXHfRgLvV58QIiMDM.png?originalFilename=vlcsnap-2025-06-20-15h06m46s457.png&preferredSize=auto",
        __vekterDefault: {
            alt: "",
            assetReference: "data:framer/asset-reference,Yg9FazlImaXHfRgLvV58QIiMDM.png?originalFilename=vlcsnap-2025-06-20-15h06m46s457.png&preferredSize=auto"
        },
        title: "Image 1",
        type: ControlType.ResponsiveImage
    },
    ytBZ4OYug: {
        __defaultAssetReference: "data:framer/asset-reference,cpQVe0nVad3nqNtVyESyetSA.png?originalFilename=vlcsnap-2025-06-20-15h06m36s084.png&preferredSize=auto",
        __vekterDefault: {
            alt: "",
            assetReference: "data:framer/asset-reference,cpQVe0nVad3nqNtVyESyetSA.png?originalFilename=vlcsnap-2025-06-20-15h06m36s084.png&preferredSize=auto"
        },
        title: "Image 2",
        type: ControlType.ResponsiveImage
    },
    dGcReU3Qy: {
        __defaultAssetReference: "data:framer/asset-reference,R2LRojVOYUS4wCCjcgTMyslm9E.png?originalFilename=vlcsnap-2025-06-20-15h07m14s582.png&preferredSize=auto",
        __vekterDefault: {
            alt: "",
            assetReference: "data:framer/asset-reference,R2LRojVOYUS4wCCjcgTMyslm9E.png?originalFilename=vlcsnap-2025-06-20-15h07m14s582.png&preferredSize=auto"
        },
        title: "Image 3",
        type: ControlType.ResponsiveImage
    },
    gZpKz1EC4: {
        __defaultAssetReference: "data:framer/asset-reference,SXdWqc3hZDzYQWNuvzPvBAsHBU.png?originalFilename=vlcsnap-2025-06-20-15h07m29s705.png&preferredSize=auto",
        __vekterDefault: {
            alt: "",
            assetReference: "data:framer/asset-reference,SXdWqc3hZDzYQWNuvzPvBAsHBU.png?originalFilename=vlcsnap-2025-06-20-15h07m29s705.png&preferredSize=auto"
        },
        title: "Image 4",
        type: ControlType.ResponsiveImage
    },
    xZ8up07Xd: {
        defaultValue: "<p>Crediamo in un mondo in cui le macchine siano al servizio dell\u2019uomo e non il contrario.<br>La nostra missione \xE8 riportare l\u2019essere umano al centro, fornendogli gli strumenti necessari per prendere decisioni pi\xF9 giuste, rapide e consapevoli.</p>",
        title: "Paragraph",
        type: ControlType.RichText
    }
});
addFonts(Framers0Kz29lUU, [{
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
}, ...SectionTagFonts, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
    supportsExplicitInterCodegen: true
});

// virtual:cosa-mission
import {
    WithFramerBreakpoints
} from "unframer";
import {
    jsx
} from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
    "base": "igNBplcVY",
    "md": "tcITakXEK",
    "xl": "A4wVey3bp"
};
stdin_default2.Responsive = ({
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
                    Component: stdin_default2,
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
            children: /* @__PURE__ */ jsx(stdin_default2, {
                ...rest
            }),
            framerSiteId: "549039614794810cfaf4fa713b9f63c873e17017b49403a5d0c91ba79392b56f",
            locale,
            locales
        }
    );
}
Object.assign(ComponentWithRoot, stdin_default2);
export {
    ComponentWithRoot as
    default
};