(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 6224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 2997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport default from dynamic */ next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "LayoutRouter": () => (/* reexport default from dynamic */ next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "RenderFromTemplateContext": () => (/* reexport default from dynamic */ next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "renderToReadableStream": () => (/* reexport safe */ next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6__.renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4__.requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3__.staticGenerationAsyncStorage),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2315);
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2333);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2885);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(683);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3269);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5746);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8208);
/* harmony import */ var next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6__);

    const tree = {
      children: [
        '',
        {
      children: ['', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6182, 23)), "C:\\Users\\God Yuvi\\Documents\\Projects\\HackWithMAIT\\God\\FairFare\\app\\page.js"]}]
    },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1977)), "C:\\Users\\God Yuvi\\Documents\\Projects\\HackWithMAIT\\God\\FairFare\\app\\layout.js"],
'head': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2725)), "C:\\Users\\God Yuvi\\Documents\\Projects\\HackWithMAIT\\God\\FairFare\\app\\head.js"],
        }
      ]
    }.children;
    const pages = ["C:\\Users\\God Yuvi\\Documents\\Projects\\HackWithMAIT\\God\\FairFare\\app\\page.js"]

    
    
    

    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
  

/***/ }),

/***/ 5064:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 376))

/***/ }),

/***/ 589:
/***/ (() => {



/***/ }),

/***/ 8469:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 2725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);

const Head = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Fair Fare"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Head);


/***/ }),

/***/ 1977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6495);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const RootLayout = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://stijndv.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://stijndv.com/fonts/Eudoxus-Sans.css"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: children
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);


/***/ }),

/***/ 6182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("C:\\Users\\God Yuvi\\Documents\\Projects\\HackWithMAIT\\God\\FairFare\\app\\page.js");


/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

;// CONCATENATED MODULE: external "next/dist/compiled/react/jsx-runtime"
const jsx_runtime_namespaceObject = require("next/dist/compiled/react/jsx-runtime");
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 183 modules
var dom_motion = __webpack_require__(274);
;// CONCATENATED MODULE: ./styles/index.js
const styles_styles = {
    innerWidth: "2xl:max-w-[1280px] w-full",
    interWidth: "lg:w-[80%] w-[100%]",
    paddings: "sm:p-16 xs:p-8 px-6 py-12",
    yPaddings: "sm:py-16 xs:py-8 py-12",
    xPaddings: "sm:px-16 px-6",
    topPaddings: "sm:pt-16 xs:pt-8 pt-12",
    bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexEnd: "flex justify-end",
    navPadding: "pt-[98px]",
    // hero section
    heroHeading: "font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
    heroDText: "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"
};
/* harmony default export */ const styles_0 = (styles_styles);

;// CONCATENATED MODULE: ./utils/motion.js
const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 1
        }
    }
};
const motion_slideIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const motion_staggerContainer = (staggerChildren, delayChildren)=>({
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    });
const motion_textVariant = (delay)=>({
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay
            }
        }
    });
const textContainer = {
    hidden: {
        opacity: 0
    },
    show: (i = 1)=>({
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: i * 0.1
            }
        })
};
const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeIn"
        }
    }
};
const motion_fadeIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const motion_planetVariants = (direction)=>({
        hidden: {
            x: direction === "left" ? "-100%" : "100%",
            rotate: 120
        },
        show: {
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                duration: 1.8,
                delay: 0.5
            }
        }
    });
const zoomIn = (delay, duration)=>({
        hidden: {
            scale: 0,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5
        }
    }
};

;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = ()=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(dom_motion/* motion.nav */.E.nav, {
        variants: navVariants,
        initial: "hidden",
        whileInView: "show",
        className: `${styles_0.xPaddings} py-8 relative`,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "absolute w-[50%] inset-0 gradient-01"
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: `${styles_0.innerWidth} mx-auto flex justify-between gap-8`,
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                        src: "/search.svg",
                        alt: "search",
                        className: "w-[24px] h-[24px] object-contain"
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                        className: "font-extrabold text-[24px] leading-[30.24px] text-white",
                        children: "FAIR-FARE"
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                        src: "/menu.svg",
                        alt: "menu",
                        className: "w-[24px] h-[24px] object-contain"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/CustomTexts.jsx



const CustomTexts_TypingText = ({ title , textStyles  })=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(dom_motion/* motion.p */.E.p, {
        variants: textContainer,
        className: `font-extrabold  text-[24px] text-secondary-white ${textStyles}`,
        children: Array.from(title).map((letter, index)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(dom_motion/* motion.span */.E.span, {
                variants: textVariant2,
                children: letter === " " ? "\xa0" : letter
            }, index))
    });
const CustomTexts_TitleText = ({ title , textStyles  })=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(dom_motion/* motion.h2 */.E.h2, {
        variants: textVariant2,
        initial: "hidden",
        whileInView: "show",
        className: `mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`,
        children: title
    });

;// CONCATENATED MODULE: ./components/ExploreCard.jsx




const ExploreCard_ExploreCard = ({ id , imgUrl , title , index , active , handleClick  })=>/*#__PURE__*/ _jsxs(motion.div, {
        variants: fadeIn("right", "spring", index * 0.5, 0.75),
        className: `relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`,
        onClick: ()=>handleClick(id),
        children: [
            /*#__PURE__*/ _jsx("img", {
                src: imgUrl,
                alt: "planet-04",
                className: "absolute w-full h-full object-cover rounded-[24px]"
            }),
            active !== id ? /*#__PURE__*/ _jsx("h3", {
                className: "font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]",
                children: title
            }) : /*#__PURE__*/ _jsxs("div", {
                className: "absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: `${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`,
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "/headset.svg",
                            alt: "headset",
                            className: "w-1/2 h-1/2 object-contain"
                        })
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "font-normal text-[16px] leading-[20.16px] text-white uppercase",
                        children: "FAIR FARE"
                    }),
                    /*#__PURE__*/ _jsx("h2", {
                        className: "mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white",
                        children: title
                    })
                ]
            })
        ]
    });
/* harmony default export */ const components_ExploreCard = ((/* unused pure expression or super */ null && (ExploreCard_ExploreCard)));

;// CONCATENATED MODULE: ./components/StartSteps.jsx


const StartSteps = ({ number , text  })=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: `${styles_0.flexCenter} flex-row`,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: `${styles_0.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`,
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                    className: "font-bold text-[20px] text-white",
                    children: number
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                className: "flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",
                children: text
            })
        ]
    });
/* harmony default export */ const components_StartSteps = (StartSteps);

;// CONCATENATED MODULE: ./components/NewFeatures.jsx


const NewFeatures_NewFeatures = ({ imgUrl , title , subtitle  })=>/*#__PURE__*/ _jsxs("div", {
        className: "flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: `${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`,
                children: /*#__PURE__*/ _jsx("img", {
                    src: imgUrl,
                    alt: "icon",
                    className: "w-1/2 h-1/2 object-contain"
                })
            }),
            /*#__PURE__*/ _jsxs("h1", {
                className: "mt-[26px] font-bold text-[24px] leading-[30.24px] text-white",
                children: [
                    "Title ",
                    title
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",
                children: subtitle
            })
        ]
    });
/* harmony default export */ const components_NewFeatures = ((/* unused pure expression or super */ null && (NewFeatures_NewFeatures)));

;// CONCATENATED MODULE: ./components/InsightCard.jsx



const InsightCard_InsightCard = ({ imgUrl , title , subtitle , index  })=>/*#__PURE__*/ _jsxs(motion.div, {
        variants: fadeIn("up", "spring", index * 0.5, 1),
        className: "flex md:flex-row flex-col gap-4",
        children: [
            /*#__PURE__*/ _jsx("img", {
                src: imgUrl,
                alt: "planet-01",
                className: "md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "w-full flex justify-between items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex-1 md:ml-[62px] flex flex-col max-w-[650px]",
                        children: [
                            /*#__PURE__*/ _jsx("h4", {
                                className: "font-normal lg:text-[42px] text-[26px] text-white",
                                children: title
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white",
                                children: subtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white",
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "/arrow.svg",
                            alt: "arrow",
                            className: "w-[40%] h-[40%] object-contain"
                        })
                    })
                ]
            })
        ]
    });
/* harmony default export */ const components_InsightCard = ((/* unused pure expression or super */ null && (InsightCard_InsightCard)));

;// CONCATENATED MODULE: ./constants/index.js
const constants_exploreWorlds = [
    {
        id: "world-1",
        imgUrl: "/planet-01.png",
        title: "autos"
    },
    {
        id: "world-2",
        imgUrl: "/planet-02.png",
        title: "Battery rickshaw"
    },
    {
        id: "world-3",
        imgUrl: "/planet-03.png",
        title: "carpool"
    },
    {
        id: "world-4",
        imgUrl: "/planet-04.png",
        title: "car pool for womens"
    },
    {
        id: "world-5",
        imgUrl: "/planet-05.png",
        title: "Taxis"
    }
];
const startingFeatures = [
    "Find a world that suits you and you want to enter",
    "Enter the world by reading about astronomy"
];
const constants_newFeatures = [
    {
        imgUrl: "/vrpano.svg",
        title: "Learn new things",
        subtitle: "we have the latest update with new world for you to try never mind"
    },
    {
        imgUrl: "/headset.svg",
        title: "Explore Galaxy",
        subtitle: "In the latest update, your eyes are narrow, making the world more realistic than ever"
    }
];
const constants_insights = [
    {
        imgUrl: "/planet-06.png",
        title: "Amateur astronomer Jennifer Willis explores reconnection via the night sky.",
        subtitle: "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
    },
    {
        imgUrl: "/planet-07.png",
        title: "Learn the fundamental principles of astrophotography",
        subtitle: "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum"
    },
    {
        imgUrl: "/planet-08.png",
        title: "Find out what’s new in spaceflight, with an astronomy angle",
        subtitle: "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem"
    }
];
const socials = [
    {
        name: "twitter",
        url: "/twitter.svg"
    },
    {
        name: "linkedin",
        url: "/linkedin.svg"
    },
    {
        name: "instagram",
        url: "/instagram.svg"
    },
    {
        name: "facebook",
        url: "/facebook.svg"
    }
];

;// CONCATENATED MODULE: ./components/Footer.jsx





const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(dom_motion/* motion.footer */.E.footer, {
        variants: footerVariants,
        initial: "hidden",
        whileInView: "show",
        className: `${styles_0.xPaddings} py-8 relative`,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "footer-gradient"
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: `${styles_0.innerWidth} mx-auto flex flex-col gap-8`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "flex items-center justify-between flex-wrap gap-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h4", {
                                className: "font-bold md:text-[64px] text-[44px] text-white",
                                children: "FAIR FARE"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("button", {
                                type: "button",
                                className: "flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                                        src: "/headset.svg",
                                        alt: "headset",
                                        className: "w-[24px] h-[24px] object-contain"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                        className: "font-normal text-[16px] text-white",
                                        children: "FAIR-FARE"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "mb-[50px] h-[2px] bg-white opacity-10"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "flex items-center justify-between flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h4", {
                                        className: "font-extrabold text-[24px] text-white",
                                        children: "FARE FAIR FOR EVERYONE"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                        className: "font-normal text-[14px] text-white opacity-50",
                                        children: "Copyright \xa9 2022 FF. All rights reserved."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                        className: "flex gap-4",
                                        children: socials.map((social)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                                                src: social.url,
                                                alt: social.name,
                                                className: "w-[24px] h-[24px] object-contain cursor-pointer"
                                            }, social.name))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/index.js









;// CONCATENATED MODULE: ./sections/Hero.jsx




const Hero = ()=>/*#__PURE__*/ _jsx("section", {
        className: `${styles.yPaddings} sm:pl-16 pl-6`,
        children: /*#__PURE__*/ _jsxs(motion.div, {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${styles.innerWidth} mx-auto flex flex-col`,
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "flex justify-center items-center flex-col relative z-10",
                    children: [
                        /*#__PURE__*/ _jsx(motion.h1, {
                            variants: textVariant(1.1),
                            className: styles.heroHeading,
                            children: "FAIR"
                        }),
                        /*#__PURE__*/ _jsx(motion.div, {
                            variants: textVariant(1.2),
                            className: "flex flex-row justify-center items-center",
                            children: /*#__PURE__*/ _jsx("h1", {
                                className: styles.heroHeading,
                                children: "FARE"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(motion.div, {
                    variants: slideIn("right", "tween", 0.2, 1),
                    className: "relative w-full md:-mt-[20px] -mt-[12px]",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"
                        }),
                        /*#__PURE__*/ _jsx("img", {
                            src: "/cover.png",
                            alt: "hero_cover",
                            className: "w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            href: "#explore",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/stamp.png",
                                    alt: "stamp",
                                    className: "sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const sections_Hero = ((/* unused pure expression or super */ null && (Hero)));

;// CONCATENATED MODULE: ./sections/About.jsx





const About = ()=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
        className: `${styles_0.paddings} relative z-10`,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "gradient-02 z-0"
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(dom_motion/* motion.div */.E.div, {
                variants: motion_staggerContainer,
                initial: "hidden",
                whileInView: "show",
                viewport: {
                    once: false,
                    amount: 0.25
                },
                className: `${styles_0.innerWidth} mx-auto ${styles_0.flexCenter} flex-col`,
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(CustomTexts_TypingText, {
                        title: "About FAIR-FARE",
                        textStyles: "text-center"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(dom_motion/* motion.p */.E.p, {
                        variants: motion_fadeIn("up", "tween", 0.2, 1),
                        className: "mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                className: "font-extrabold text-white",
                                children: "FAIR FARE"
                            }),
                            " is a new software whic can be regulated by government to regularise fare payment for the customers",
                            " ",
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                className: "font-extrabold text-white"
                            }),
                            " ",
                            " ",
                            " ",
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                className: "font-extrabold text-white",
                                children: "explore"
                            }),
                            " the madness of the FAIR FARE by scrolling down"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(dom_motion/* motion.img */.E.img, {
                        variants: motion_fadeIn("up", "tween", 0.3, 1),
                        src: "/arrow-down.svg",
                        alt: "arrow down",
                        className: "w-[18px] h-[28px] object-contain mt-[28px]"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const sections_About = (About);

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./sections/Explore.jsx







const Explore = ()=>{
    const [active, setActive] = useState("world-2");
    return /*#__PURE__*/ _jsx("section", {
        className: `${styles.paddings}`,
        id: "explore",
        children: /*#__PURE__*/ _jsxs(motion.div, {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${styles.innerWidth} mx-auto flex flex-col`,
            children: [
                /*#__PURE__*/ _jsx(TypingText, {
                    title: "SERVICES",
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ _jsx(TitleText, {
                    title: /*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                            "Choose the vehicle service ",
                            /*#__PURE__*/ _jsx("br", {
                                className: "md:block hidden"
                            }),
                            " to explore"
                        ]
                    }),
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5",
                    children: exploreWorlds.map((world, index)=>/*#__PURE__*/ _jsx(ExploreCard, {
                            ...world,
                            index: index,
                            active: active,
                            handleClick: setActive
                        }, world.id))
                })
            ]
        })
    });
};
/* harmony default export */ const sections_Explore = ((/* unused pure expression or super */ null && (Explore)));

;// CONCATENATED MODULE: ./sections/GetStarted.jsx






const GetStarted = ()=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("section", {
        className: `${styles_0.paddings} relative z-10`,
        id: "GetStarted",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(dom_motion/* motion.div */.E.div, {
            variants: motion_staggerContainer,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${styles_0.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`,
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(dom_motion/* motion.div */.E.div, {
                    variants: motion_planetVariants("left"),
                    className: `flex-1 ${styles_0.flexCenter}`,
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                        src: "/get-started1.png",
                        alt: "get-started",
                        className: "w-[90%] h-[90%] object-contain"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(dom_motion/* motion.div */.E.div, {
                    variants: motion_fadeIn("left", "tween", 0.2, 1),
                    className: "flex-[0.75] flex justify-center flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(CustomTexts_TypingText, {
                            title: "FAIR FARE"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(CustomTexts_TitleText, {
                            title: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(jsx_runtime_namespaceObject.Fragment, {
                                children: "Get started and use Fair fare"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "mt-[31px] flex flex-col max-w-[370px] gap-[24px]",
                            children: startingFeatures.map((feature, index)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_StartSteps, {
                                    number: `${index < 10 ? "0" : ""} ${index + 1}`,
                                    text: feature
                                }, feature))
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const sections_GetStarted = (GetStarted);

;// CONCATENATED MODULE: ./sections/WhatsNew.jsx






const WhatsNew = ()=>/*#__PURE__*/ _jsx("section", {
        className: `${styles.paddings} relative z-10`,
        children: /*#__PURE__*/ _jsxs(motion.div, {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`,
            children: [
                /*#__PURE__*/ _jsxs(motion.div, {
                    variants: fadeIn("right", "tween", 0.2, 1),
                    className: "flex-[0.95] flex justify-center flex-col",
                    children: [
                        /*#__PURE__*/ _jsx(TypingText, {
                            title: " Whats new?"
                        }),
                        /*#__PURE__*/ _jsx(TitleText, {
                            title: /*#__PURE__*/ _jsx(_Fragment, {
                                children: "What's new about PAW?"
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "mt-[48px] flex flex-wrap justify-between gap-[24px]",
                            children: newFeatures.map((feature)=>/*#__PURE__*/ _jsx(NewFeatures, {
                                    ...feature
                                }, feature.title))
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(motion.div, {
                    variants: planetVariants("right"),
                    className: `flex-1 ${styles.flexCenter}`,
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/whats-new.png",
                        alt: "get-started",
                        className: "w-[90%] h-[90%] object-contain"
                    })
                })
            ]
        })
    });
/* harmony default export */ const sections_WhatsNew = ((/* unused pure expression or super */ null && (WhatsNew)));

;// CONCATENATED MODULE: ./sections/World.jsx

const World = ()=>/*#__PURE__*/ _jsx("section", {
        children: "World section"
    });
/* harmony default export */ const sections_World = ((/* unused pure expression or super */ null && (World)));

;// CONCATENATED MODULE: ./sections/Insights.jsx






const Insights = ()=>/*#__PURE__*/ _jsx("section", {
        className: `${styles.paddings} relative z-10`,
        children: /*#__PURE__*/ _jsxs(motion.div, {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${styles.innerWidth} mx-auto flex flex-col`,
            children: [
                /*#__PURE__*/ _jsx(TypingText, {
                    title: " Blogs",
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ _jsx(TitleText, {
                    title: /*#__PURE__*/ _jsx(_Fragment, {
                        children: "Insight about PAW"
                    }),
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "mt-[50px] flex flex-col gap-[30px]",
                    children: insights.map((item, index)=>/*#__PURE__*/ _jsx(InsightCard, {
                            ...item,
                            index: index + 1
                        }, `insight-${index}`))
                })
            ]
        })
    });
/* harmony default export */ const sections_Insights = ((/* unused pure expression or super */ null && (Insights)));

;// CONCATENATED MODULE: ./sections/Feedback.jsx





const Feedback = (prop)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
        className: `${styles_0.paddings}`,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(dom_motion/* motion.div */.E.div, {
                variants: motion_fadeIn("right", "tween", 0.2, 1),
                className: "relative flex-1 flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                    src: "/planet-09.png",
                    alt: "planet-09",
                    className: "w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: " h-screen w-full",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "bg-gray-800 flex-col justify-center rounded-[40px]",
                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("form", {
                        onSubmit: prop.getDistance,
                        className: "max-w-[800px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                                className: "text-4xl dark:text-white font-bold text-center",
                                children: "LOCATION"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "flex flex-col text-gray-400 py-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                                        children: "FROM"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                                        value: prop.from,
                                        onChange: prop.changeFrom,
                                        className: "rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none",
                                        type: "text"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "flex flex-col text-gray-400 py-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("label", {
                                        children: "WHERE"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                                        value: prop.to,
                                        onChange: prop.changeTo,
                                        className: "p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none",
                                        type: "text"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "flex justify-between text-gray-400 py-2",
                                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                    children: "Ride safe"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                                type: "submit",
                                className: "w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg",
                                children: "TIME TO REACH :"
                            })
                        ]
                    })
                })
            })
        ]
    });
/* harmony default export */ const sections_Feedback = (Feedback);

;// CONCATENATED MODULE: ./sections/index.js










// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 42 modules
var axios = __webpack_require__(1819);
;// CONCATENATED MODULE: ./app/page.js





function Page() {
    const [from, setFrom] = (0,react_.useState)("Janak Puri");
    const [distance, setDistance] = (0,react_.useState)(null);
    const [to, setTo] = (0,react_.useState)("Tagore Garden");
    const key = "JuNkCXmB4VXmxBy3rsUkrspPpnYYj";
    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${from}&destinations=${to}&departure_time=now&key=JuNkCXmB4VXmxBy3rsUkrspPpnYYj`;
    function changeFrom(event) {
        const newFrom = event.target.value;
        setFrom(newFrom);
    }
    function changeTo(event) {
        const newTo = event.target.value;
        setTo(newTo);
    }
    function getDistance(e) {
        e.preventDefault();
        // alert('triggered');
        axios/* default.get */.Z.get(url).then((response)=>{
            let d = response?.data?.rows[0]?.elements[0]?.distance?.text;
            d = d?.split(" ");
            setDistance(d?.[0]);
        });
        calculateFare();
    // console.log(to);
    }
    // let date = new date();
    // console.log(date.toLocaleTimeString());
    const fixed = 25;
    const fpk = 8;
    function calculateFare() {
        console.log("Calculating fair: ");
        console.log(distance);
        if (distance !== null && +distance <= 2) {
            console.log("Fare=", fixed);
        } else if (distance !== null && +distance > 2) {
            const fare = +distance * fpk + 10;
            console.log("Fare: ", fare);
            console.log(fare);
        }
    }
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(jsx_runtime_namespaceObject.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "bg-primary-black overflow-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_Navbar, {}),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "gradient-02 z-0"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "gradient-03 z-0"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(sections_About, {}),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "gradient-03 z-0"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: "gradient-04 z-0"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "gradient-03 z-0"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(sections_Feedback, {
                            getDistance: getDistance,
                            from: from,
                            to: to,
                            changeFrom: changeFrom,
                            changeTo: changeTo
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_Footer, {}),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(sections_GetStarted, {})
            ]
        })
    });
}
/* harmony default export */ const page = (Page);


/***/ }),

/***/ 6495:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668], () => (__webpack_exec__(2997)));
module.exports = __webpack_exports__;

})();