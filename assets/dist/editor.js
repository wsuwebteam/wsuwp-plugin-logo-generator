/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/blocks/logo-generator/canvas.js":
/*!****************************************************!*\
  !*** ./assets/src/blocks/logo-generator/canvas.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);



function Canvas({
  attributes,
  setAttributes,
  textColor,
  logoColor,
  fontFamily,
  typekitID
}) {
  const logo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [loadingFont, setLoadingFont] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // load font from Adobe
    webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({
      typekit: {
        id: typekitID
      },

      fontactive() {
        setLoadingFont(false);
        drawLogoContents();
      }

    });
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    drawLogoContents();
  }, [attributes.textLine1, attributes.textLine2, attributes.campus]);

  function drawLogoContents() {
    setTimeout(() => {
      const svgBox = logo.current.getBBox();

      if (attributes.width !== svgBox.width) {
        setAttributes({
          width: svgBox.width
        });
      }

      if (attributes.height !== svgBox.height) {
        setAttributes({
          height: svgBox.height
        });
      }
    }, 0);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    ref: logo,
    style: {
      visibility: loadingFont ? 'hidden' : 'visible'
    },
    width: "100%",
    viewBox: `0 0 ${attributes.width} ${attributes.height}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    style: {
      fill: logoColor
    },
    d: "M48.46 78.71s4-1.72 6.22-8.36a16.53 16.53 0 0 1 1.44 8.21c-1.78.4-7.66.15-7.66.15M70.05 40.71s2.45 13.35-6.23 13.81C55.44 55 51.5 42.36 51.5 42.36s2 24.61 13.77 23c13.22-1.82 4.78-24.64 4.78-24.64M6.27 75.53c9.79-2.23 17.29-13.66 19.49-18.24l1.4-2.91.84 3.11a34.63 34.63 0 0 1 1 8.13v1.53c3.38.13 5.79-.55 7.29-2.11 2.16-2.22 2.8-6.44 2-12.88-.39-3.08-1.53-8-2.54-12.31-.52-2.21-1-4.3-1.3-5.78-1.89-9.46.45-15.34 2.75-18.6A16.72 16.72 0 0 1 38.31 14 45.48 45.48 0 0 0 20 25.69l4.13 4.78 1.68-1.58a27.25 27.25 0 0 1 .45 11.41 47.81 47.81 0 0 0-4.73-6l1.12-1.88-3.71-4.32-.43-.48a40.78 40.78 0 0 0-6 11.41l3.24 3 1.89 1.71.63-1.82a14.32 14.32 0 0 1 .3 12.62A23.16 23.16 0 0 0 15.64 49l.9-3-4.82-4.36C6.7 57.33 0 62.4 0 62.4a104.47 104.47 0 0 0 11.29-2.66 32.9 32.9 0 0 1-5 15.79"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    style: {
      fill: logoColor
    },
    d: "m79.47 19-11.58.49a12.69 12.69 0 0 1-.62 4.05c1.08 4.73.33 7.29.33 7.29-1.94-4.5-3.41-5.76-3.41-5.76-10.64-4.72-16.62 6-16 12.86.52 5.66 2.58 13.18 4.18 25 1.35 9.93-3.68 14.22-9.46 15.2l-.38.07h-.09a19.16 19.16 0 0 1-3 .14H39c-.45 0-.89-.08-1.33-.13-4.5-.62-14.57-2.45-25-2.7 6.12-3.58 10.91-9.76 13.58-14.15a33.59 33.59 0 0 1 .28 4.33c0 .81 0 1.67-.11 2.54l-.1 1.2 1.2.1c4.79.42 8.18-.5 10.4-2.78 2.71-2.83 3.55-7.54 2.63-14.85-.4-3.2-1.56-8.17-2.58-12.55-.51-2.19-1-4.27-1.28-5.71C35 25 37.07 19.73 39.1 16.85a12.36 12.36 0 0 1 6.18-4.69h.12L49.36 0h1.24l-2.66 11.66c.62-.11 1.24-.2 1.87-.3L53.23.61h1.23L52.22 11c3.53-.45 7.37-.81 11.62-1.12a5.11 5.11 0 0 1 2.09 2.18l11.14-3.41.42 1.2L66.83 14c.08.22.17.44.24.68l11.65-1.45.19 1.25-11.3 2.25c0 .22.07.43.11.64l11.76.38Zm-33.56 5.21A16.51 16.51 0 0 1 56 21.6c.94.07 1.74-.18.72-.72-2.79-1.47-9.29-1-11.59.6a7.34 7.34 0 0 0-3 7.09 13.51 13.51 0 0 1 3.8-4.36"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    style: {
      fill: textColor
    },
    d: "M92.55 15.76h1.72v60.79h-1.72z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", {
    x: "112",
    y: attributes.textLine2 ? '28' : '35.74',
    style: {
      fontFamily: fontFamily,
      fontWeight: '600',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '.2em',
      fill: textColor
    }
  }, attributes.campus.name.toUpperCase()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", {
    x: "112",
    y: attributes.textLine2 ? '50' : '57.53',
    style: {
      fontFamily: fontFamily,
      fontWeight: '700',
      fontSize: '20px',
      fill: textColor
    }
  }, attributes.textLine1 || 'Example Content'), attributes.textLine2 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", {
    x: "112",
    y: "70",
    style: {
      fontFamily: fontFamily,
      fontWeight: '700',
      fontSize: '20px',
      fill: textColor
    }
  }, attributes.textLine2)))));
} // import { Button } from '@wordpress/components';
// import { useRef, useState, useEffect} from '@wordpress/element';
// import WebFont from 'webfontloader';
// export default function Canvas({ text, color, width, height, fontSize, fontFamily, padding, bold, italic, typekitID, attributes}) {
//     const canvas = useRef(null);
//     const ctx = useRef(null);
//     console.log(attributes);
//     const [offset, setOffset] = useState({ x: 0, y: 0 })
//     const [loadingFont, setLoadingFont] = useState(false)
//     useEffect(() => {
//         // setup canvas
//         ctx.current = canvas.current.getContext('2d')
//         // for retina
//         canvas.current.width = width * 2
//         canvas.current.height = height * 2
//         canvas.current.style.width = `${width}px`
//         canvas.current.style.height = `${height}px`
//         // load font from Adobe
//         WebFont.load({
//             typekit: {
//                 id: typekitID
//             },
//             loading() {
//                 setLoadingFont(true)
//             },
//             active() {
//                 drawCanvasContents()
//                 setLoadingFont(false)
//             },
//             inactive() {
//                 setLoadingFont(false)
//             }
//         });
//     }, []);
//     useEffect(() => {
//         console.log(text);
//         drawCanvasContents();
//     }, [text]);
//     function drawCanvasContents() {
//         let measure = ctx.current.measureText(text)
//         console.log(measure);
//         // const fontSize = height - padding * 2
//         const fontProperties = []
//         if (italic) { fontProperties.push('italic') }
//         if (bold) { fontProperties.push('bold') }
//         fontProperties.push(`${fontSize * 2}px`)
//         fontProperties.push(fontFamily)
//         ctx.current.font = fontProperties.filter(Boolean).join(' ');
//         // ctx.current.textAlign = 'center'
//         ctx.current.textBaseline = 'top'
//         // clear canvas
//         ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
//         // load logo base
//         const logo = new Image();
//         let imageHeight = 0;
//         logo.src = "/wp-content/plugins/wsuwp-plugin-logo-generator/assets/images/horz.png";
//         logo.onload = function() {
//             const hwRatio = this.height / this.width;
//             const height = width * 2 * hwRatio;
//             ctx.current.drawImage(logo, 0, 0, width * 2, height);
//             // draw text
//             ctx.current.fillStyle = color;
//             ctx.current.fillText(text,  .35 * width * 2, .4475 * height );
//             // ctx.current.fillStyle = color;
//             // // ctx.current.fillText(text, width + offset.x, height + offset.y);
//             // const l1 = 'College of Agricultural, Human,';
//             // ctx.current.fillText(l1, .35 * width * 2, .4475 * height );
//             // const l2 = 'and Natural Resource Sciences';
//             // // ctx.current.fillText(l2, .35 * width * 2, .45 * (height + fontSize * 2 + 125) );
//             // ctx.current.fillText(l2, .35 * width * 2, (.4475 * height) + (.255 * height) );
//             let measure = ctx.current.measureText(text)
//             console.log(measure);
//         };
//         console.log(ctx);
//     }
//     function exportPNG(){
//         console.log('Export PNG');
//         const png = canvas.current.toDataURL('image/png');
//         var link = document.createElement('a');
//         link.download = `${text}.png`;
//         link.href = png;
//         link.click();
//     }
//     return (
//         <div>
//             <div style={{ width, height }}>
//                 <canvas style={{ visibility: loadingFont ? 'hidden' : 'visible' }} width={width} height={height} ref={canvas}></canvas>
//             </div>
//             <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 412.25 78.78716278076172">
//                 <g>
//                     <g>
//                         <path style={{ fill: '#A60F2D' }} d="M48.46 78.71s4-1.72 6.22-8.36a16.53 16.53 0 0 1 1.44 8.21c-1.78.4-7.66.15-7.66.15M70.05 40.71s2.45 13.35-6.23 13.81C55.44 55 51.5 42.36 51.5 42.36s2 24.61 13.77 23c13.22-1.82 4.78-24.64 4.78-24.64M6.27 75.53c9.79-2.23 17.29-13.66 19.49-18.24l1.4-2.91.84 3.11a34.63 34.63 0 0 1 1 8.13v1.53c3.38.13 5.79-.55 7.29-2.11 2.16-2.22 2.8-6.44 2-12.88-.39-3.08-1.53-8-2.54-12.31-.52-2.21-1-4.3-1.3-5.78-1.89-9.46.45-15.34 2.75-18.6A16.72 16.72 0 0 1 38.31 14 45.48 45.48 0 0 0 20 25.69l4.13 4.78 1.68-1.58a27.25 27.25 0 0 1 .45 11.41 47.81 47.81 0 0 0-4.73-6l1.12-1.88-3.71-4.32-.43-.48a40.78 40.78 0 0 0-6 11.41l3.24 3 1.89 1.71.63-1.82a14.32 14.32 0 0 1 .3 12.62A23.16 23.16 0 0 0 15.64 49l.9-3-4.82-4.36C6.7 57.33 0 62.4 0 62.4a104.47 104.47 0 0 0 11.29-2.66 32.9 32.9 0 0 1-5 15.79"/>
//                         <path style={{ fill: '#A60F2D' }} d="m79.47 19-11.58.49a12.69 12.69 0 0 1-.62 4.05c1.08 4.73.33 7.29.33 7.29-1.94-4.5-3.41-5.76-3.41-5.76-10.64-4.72-16.62 6-16 12.86.52 5.66 2.58 13.18 4.18 25 1.35 9.93-3.68 14.22-9.46 15.2l-.38.07h-.09a19.16 19.16 0 0 1-3 .14H39c-.45 0-.89-.08-1.33-.13-4.5-.62-14.57-2.45-25-2.7 6.12-3.58 10.91-9.76 13.58-14.15a33.59 33.59 0 0 1 .28 4.33c0 .81 0 1.67-.11 2.54l-.1 1.2 1.2.1c4.79.42 8.18-.5 10.4-2.78 2.71-2.83 3.55-7.54 2.63-14.85-.4-3.2-1.56-8.17-2.58-12.55-.51-2.19-1-4.27-1.28-5.71C35 25 37.07 19.73 39.1 16.85a12.36 12.36 0 0 1 6.18-4.69h.12L49.36 0h1.24l-2.66 11.66c.62-.11 1.24-.2 1.87-.3L53.23.61h1.23L52.22 11c3.53-.45 7.37-.81 11.62-1.12a5.11 5.11 0 0 1 2.09 2.18l11.14-3.41.42 1.2L66.83 14c.08.22.17.44.24.68l11.65-1.45.19 1.25-11.3 2.25c0 .22.07.43.11.64l11.76.38Zm-33.56 5.21A16.51 16.51 0 0 1 56 21.6c.94.07 1.74-.18.72-.72-2.79-1.47-9.29-1-11.59.6a7.34 7.34 0 0 0-3 7.09 13.51 13.51 0 0 1 3.8-4.36"/>
//                         <path style={{ fill: '#5F6062' }} d="M92.55 15.76h1.72v60.79h-1.72z" />
//                     </g>
//                     <g>
//                         <text x="112.22" y="35.74" style={{
//                             fontFamily: 'proxima-nova',
//                             fontWeight: 'semibold',
//                             fontSize: '10px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '.2em',
//                             fill: color }}>Washington State University</text>
//                         <text x="112.36" y="57.53" style={{
//                             fontFamily: 'proxima-nova',
//                             fontWeight: 'bold',
//                             fontSize: '20px',
//                             fill: color }}>{ text }</text>
//                     </g>
//                 </g>
//             </svg>
//             <div>
//                 <Button
//                     isPrimary={true}
//                     onClick={exportPNG}
//                     text="Download PNG"
//                 />
//             </div>
//         </div>
//     )
// }

/***/ }),

/***/ "./assets/src/blocks/logo-generator/edit.js":
/*!**************************************************!*\
  !*** ./assets/src/blocks/logo-generator/edit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas */ "./assets/src/blocks/logo-generator/canvas.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./assets/src/blocks/logo-generator/editor.scss");







const campusOptions = [{
  key: 'washington-state-university',
  name: 'Washington State University'
}, {
  key: 'wsu-pullman',
  name: 'WSU Pullman'
}, {
  key: 'wsu-spokane',
  name: 'WSU Spokane'
}, {
  key: 'wsu-tri-cities',
  name: 'WSU Tri-Cities'
}, {
  key: 'wsu-vancouver',
  name: 'WSU Vancouver'
}, {
  key: 'wsu-everett',
  name: 'WSU Everett'
}, {
  key: 'wsu-global-campus',
  name: 'WSU Global Campus'
}];
function Edit({
  className,
  clientId,
  attributes,
  setAttributes,
  ...props
}) {
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(); // store clientId for a unique idenifier

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setAttributes({
      blockId: clientId
    });
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // dynamically set the post title
    const postTitle = `${attributes.textLine1}${attributes.textLine2 ? ' ' + attributes.textLine2 : ''} | ${attributes.campus.name}`;
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/editor').editPost({
      title: postTitle.trim()
    }); // lock saving if logo text is empty

    if (!attributes.textLine1) {
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/editor').lockPostSaving('logo-lock');
    } else {
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/editor').unlockPostSaving('logo-lock');
    }
  }, [attributes.textLine1, attributes.textLine2, attributes.campus]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Directory Filters",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CustomSelectControl"], {
    className: "wsu-logo-generator__select-control",
    label: "Campus",
    options: campusOptions,
    onChange: selector => {
      setAttributes({
        campus: selector.selectedItem
      });
    },
    value: campusOptions.find(option => option.key === attributes.campus.key)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "Text Line 1",
    placeholder: "School of Engineering",
    value: attributes.textLine1,
    onChange: newval => setAttributes({
      textLine1: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "Text Line 2",
    placeholder: "and Computer Science",
    value: attributes.textLine2,
    onChange: newval => setAttributes({
      textLine2: newval
    })
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_canvas__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    typekitID: "uav0tuz",
    fontFamily: "proxima-nova",
    logoColor: "#A60F2D",
    textColor: "#5F6062"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      marginTop: '3rem'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Instructions"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna felis, dignissim sit amet turpis nec, ornare cursus nisi. Maecenas rhoncus consequat ultrices. Fusce nisi lacus, vehicula eu efficitur ut, blandit vel eros. Cras vel urna ex. Nam sit amet ullamcorper ante. Fusce quis dui eget mi finibus feugiat vel lacinia lorem. Proin elementum lorem sed malesuada tristique."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna felis, dignissim sit amet turpis nec, ornare cursus nisi. Maecenas rhoncus consequat ultrices. Fusce nisi lacus, vehicula eu efficitur ut, blandit vel eros. Cras vel urna ex. Nam sit amet ullamcorper ante."))));
} // const { __ } = wp.i18n;
// const { useBlockProps, InspectorControls } = wp.blockEditor;
// const { TextControl, SelectControl, PanelBody, PanelRow } = wp.components;
// import React, { useState, useEffect } from 'react';
// import './editor.scss';
// export default function Edit({ className, attributes, setAttributes }) {
//     const [profiles, setProfiles] = useState([]);
//     const attributeKeys = Object.keys(attributes);
//     const debouncedAttributes = useDebounce(attributes, 1000);
//     useEffect(() => {
//         async function loadProfiles(){
//             // build url params based on attributes
//             const params = attributeKeys.reduce(function(acc, curr, idx){
//                 if(attributes[curr]){
//                     acc.push(curr.replace('_', '-') + '=' + attributes[curr]);
//                 }
//                 return acc;
//             }, []).join('&');
//             // make request
//             const response = await fetch('http://peopleapi.local/wp-json/peopleapi/v1/people?' + params);
//             if ( !response.ok ) { return; }
//             // update state
//             const profilesJson = await response.json();
//             setProfiles(JSON.parse(profilesJson));
//         }
//         loadProfiles();
//     }, [debouncedAttributes]); // only run on init and when attributes are changed
//     return (
//         <div {...useBlockProps()}>
//             <InspectorControls>
//                 <PanelBody
//                     title="Directory Filters"
//                     initialOpen={true}
//                 >
//                     <PanelRow>
//                         <TextControl
//                             label="Number of Results"
//                             help="Number of results per page. 'All' returns all profiles. Defaults to 10."
//                             value={ attributes.count }
//                             onChange={(newval) => setAttributes({ count: newval })}
//                         />
//                     </PanelRow>
//                     <PanelRow>
//                         <TextControl
//                             label="Page"
//                             help="Integer representing the page of results to return"
//                             value={ attributes.page }
//                             onChange={(newval) => setAttributes({ page: newval })}
//                         />
//                     </PanelRow>
//                     <PanelRow>
//                         <TextControl
//                             label="Network IDs"
//                             help="Comma delimited list of people network ids"
//                             value={ attributes.nid }
//                             onChange={(newval) => setAttributes({ nid: newval })}
//                         />
//                     </PanelRow>
//                     <PanelRow>
//                         <TextControl
//                             label="University Category"
//                             help="Comma delimited list of wsuwp_university_category taxonomy slugs"
//                             value={ attributes.university_category }
//                             onChange={(newval) => setAttributes({ university_category: newval })}
//                         />
//                     </PanelRow>
//                     <PanelRow>
//                         <TextControl
//                             label="University Location"
//                             help="Comma delimited list of wsuwp_university_location taxonomy slugs"
//                             value={ attributes.university_location }
//                             onChange={(newval) => setAttributes({ university_location: newval })}
//                         />
//                     </PanelRow>
//                     <PanelRow>
//                         <TextControl
//                             label="University Organization"
//                             help="Comma delimited list of wsuwp_university_org taxonomy slugs"
//                             value={ attributes.university_organization }
//                             onChange={(newval) => setAttributes({ university_organization: newval })}
//                         />
//                     </PanelRow>
//                     <PanelRow>
//                         <SelectControl
//                             label="Photo Size"
//                             help="Photo size (thumbnail, medium, medium_large, large, full). Defaults to medium."
//                             value={ attributes.size }
//                             onChange={(newval) => setAttributes({ size: newval })}
//                             options={ [
//                                 { label: 'Thumbnail', value: 'thumbnail' },
//                                 { label: 'Medium', value: 'medium' },
//                                 { label: 'Medium Large', value: 'medium_large' },
//                                 { label: 'Large', value: 'large' },
//                                 { label: 'Full', value: 'full' },
//                             ]}
//                         />
//                     </PanelRow>
//                 </PanelBody>
//             </InspectorControls>
//             <div className="profiles">
//                 {profiles.map((p, index) =>
//                     <div className="profile" key={index}>
//                         <div className="profile__img-container">
//                             <img className="profile__img" src={p.photo}/>
//                         </div>
//                         <h2 className="profile__name">{p.name}</h2>
//                         {p.title.map((t, index) =>
//                             <div key={index}>{t}</div>
//                         )}
//                         {p.university_organization.map((o, index) =>
//                             <div key={index}>{o.name}</div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div >
//     );
// }
// // useDebounce Hook - https://usehooks.com/useDebounce/
// function useDebounce(value, delay) {
//     // State and setters for debounced value
//     const [debouncedValue, setDebouncedValue] = useState(value);
//     useEffect(
//       () => {
//         // Update debounced value after delay
//         const handler = setTimeout(() => {
//           setDebouncedValue(value);
//         }, delay);
//         // Cancel the timeout if value changes (also on delay change or unmount)
//         // This is how we prevent debounced value from updating if value is changed ...
//         // .. within the delay period. Timeout gets cleared and restarted.
//         return () => {
//           clearTimeout(handler);
//         };
//       },
//       [value, delay] // Only re-call effect if value or delay changes
//     );
//     return debouncedValue;
//   }

/***/ }),

/***/ "./assets/src/blocks/logo-generator/editor.scss":
/*!******************************************************!*\
  !*** ./assets/src/blocks/logo-generator/editor.scss ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/blocks/logo-generator/index.js":
/*!***************************************************!*\
  !*** ./assets/src/blocks/logo-generator/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/blocks/logo-generator/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/blocks/logo-generator/save.js");



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wsuwp/logo-generator', {
  title: 'Logo Generator',
  icon: 'art',
  category: 'design',
  attributes: {
    blockId: {
      type: 'string'
    },
    campus: {
      type: 'object',
      default: {
        key: 'washington-state-university',
        name: 'Washington State University'
      }
    },
    textLine1: {
      type: 'string',
      default: ''
    },
    textLine2: {
      type: 'string',
      default: ''
    },
    width: {
      type: 'integer',
      default: 0
    },
    height: {
      type: 'integer',
      default: 0
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./assets/src/blocks/logo-generator/save.js":
/*!**************************************************!*\
  !*** ./assets/src/blocks/logo-generator/save.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);


const variations = [{
  key: 'rgb',
  label: 'RGB',
  backgroundColor: 'transparent',
  logoColor: '#a60f2d',
  textColor: '#5f6062'
}, {
  key: 'cmyk',
  label: 'CMYK',
  backgroundColor: 'transparent',
  logoColor: '#af0737',
  textColor: '#3b3b3b'
}, {
  key: 'rev',
  label: 'Reverse / White',
  backgroundColor: '#4d4d4d',
  logoColor: '#fff',
  textColor: '#fff'
}];
function Save({
  attributes
}) {
  const hwRatio = attributes.height / attributes.width;
  const width = 2000;
  const height = Math.round(width * hwRatio);
  const filename = slugify__WEBPACK_IMPORTED_MODULE_1___default()(attributes.textLine1 + ' ' + attributes.textLine2, {
    lower: true,
    trim: true,
    remove: /[*+~.()'"!:@]/g
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-logo-generator__logo-collection",
    "data-logo-width": attributes.width,
    "data-logo-height": attributes.height,
    "data-logo-filename": filename
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", {
    className: "wsu-logo-generator__logo-collection-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "wsu-logo-generator__logo-collection-title"
  }, attributes.textLine1 + ' ' + attributes.textLine2, " Logos"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-logo-generator__controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-logo-generator__control-output-label"
  }, "Dimensions"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "wsu-logo-generator__control-output-width",
    type: "text",
    inputmode: "numeric",
    placeholder: "0",
    value: "2000",
    pattern: "[0-9]*"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-logo-generator__output-height-spacer"
  }, "x"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-logo-generator__output-height"
  }, height)))), variations.map(v => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-logo-generator__logo",
    key: v.key
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "wsu-logo-generator__logo-label"
  }, "Color | ", v.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-logo-generator__logo-outer-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-logo-generator__logo-container",
    style: {
      backgroundColor: v.backgroundColor
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-logo-generator__logo-canvas"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: `logo-${attributes.blockId}-${v.key}`,
    viewBox: `0 0 ${attributes.width} ${attributes.height}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    style: {
      fill: v.logoColor
    },
    d: "M48.46 78.71s4-1.72 6.22-8.36a16.53 16.53 0 0 1 1.44 8.21c-1.78.4-7.66.15-7.66.15M70.05 40.71s2.45 13.35-6.23 13.81C55.44 55 51.5 42.36 51.5 42.36s2 24.61 13.77 23c13.22-1.82 4.78-24.64 4.78-24.64M6.27 75.53c9.79-2.23 17.29-13.66 19.49-18.24l1.4-2.91.84 3.11a34.63 34.63 0 0 1 1 8.13v1.53c3.38.13 5.79-.55 7.29-2.11 2.16-2.22 2.8-6.44 2-12.88-.39-3.08-1.53-8-2.54-12.31-.52-2.21-1-4.3-1.3-5.78-1.89-9.46.45-15.34 2.75-18.6A16.72 16.72 0 0 1 38.31 14 45.48 45.48 0 0 0 20 25.69l4.13 4.78 1.68-1.58a27.25 27.25 0 0 1 .45 11.41 47.81 47.81 0 0 0-4.73-6l1.12-1.88-3.71-4.32-.43-.48a40.78 40.78 0 0 0-6 11.41l3.24 3 1.89 1.71.63-1.82a14.32 14.32 0 0 1 .3 12.62A23.16 23.16 0 0 0 15.64 49l.9-3-4.82-4.36C6.7 57.33 0 62.4 0 62.4a104.47 104.47 0 0 0 11.29-2.66 32.9 32.9 0 0 1-5 15.79"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    style: {
      fill: v.logoColor
    },
    d: "m79.47 19-11.58.49a12.69 12.69 0 0 1-.62 4.05c1.08 4.73.33 7.29.33 7.29-1.94-4.5-3.41-5.76-3.41-5.76-10.64-4.72-16.62 6-16 12.86.52 5.66 2.58 13.18 4.18 25 1.35 9.93-3.68 14.22-9.46 15.2l-.38.07h-.09a19.16 19.16 0 0 1-3 .14H39c-.45 0-.89-.08-1.33-.13-4.5-.62-14.57-2.45-25-2.7 6.12-3.58 10.91-9.76 13.58-14.15a33.59 33.59 0 0 1 .28 4.33c0 .81 0 1.67-.11 2.54l-.1 1.2 1.2.1c4.79.42 8.18-.5 10.4-2.78 2.71-2.83 3.55-7.54 2.63-14.85-.4-3.2-1.56-8.17-2.58-12.55-.51-2.19-1-4.27-1.28-5.71C35 25 37.07 19.73 39.1 16.85a12.36 12.36 0 0 1 6.18-4.69h.12L49.36 0h1.24l-2.66 11.66c.62-.11 1.24-.2 1.87-.3L53.23.61h1.23L52.22 11c3.53-.45 7.37-.81 11.62-1.12a5.11 5.11 0 0 1 2.09 2.18l11.14-3.41.42 1.2L66.83 14c.08.22.17.44.24.68l11.65-1.45.19 1.25-11.3 2.25c0 .22.07.43.11.64l11.76.38Zm-33.56 5.21A16.51 16.51 0 0 1 56 21.6c.94.07 1.74-.18.72-.72-2.79-1.47-9.29-1-11.59.6a7.34 7.34 0 0 0-3 7.09 13.51 13.51 0 0 1 3.8-4.36"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    style: {
      fill: v.textColor
    },
    d: "M92.55 15.76h1.72v60.79h-1.72z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", {
    x: "112",
    y: attributes.textLine2 ? '28' : '35.74',
    style: {
      fontFamily: 'proxima-nova',
      fontWeight: '600',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '.2em',
      fill: v.textColor
    }
  }, attributes.campus.name.toUpperCase()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", {
    x: "112",
    y: attributes.textLine2 ? '50' : '57.53',
    style: {
      fontFamily: 'proxima-nova',
      fontWeight: '700',
      fontSize: '20px',
      fill: v.textColor
    }
  }, attributes.textLine1), attributes.textLine2 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", {
    x: "112",
    y: "70",
    style: {
      fontFamily: 'proxima-nova',
      fontWeight: '700',
      fontSize: '20px',
      fill: v.textColor
    }
  }, attributes.textLine2)))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-logo-generator__download-btn-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wsu-logo-generator__download-btn wsu-button wsu-button--size-small",
    "data-svg": `logo-${attributes.blockId}-${v.key}`,
    "data-variation": v.key
  }, "Download")))))));
}

/***/ }),

/***/ "./assets/src/editor.js":
/*!******************************!*\
  !*** ./assets/src/editor.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_logo_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/logo-generator */ "./assets/src/blocks/logo-generator/index.js");


/***/ }),

/***/ "./node_modules/slugify/slugify.js":
/*!*****************************************!*\
  !*** ./node_modules/slugify/slugify.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else {}
}('slugify', this, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","„":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}')
  var locales = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"}}')

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var locale = locales[options.locale] || {}

    var replacement = options.replacement === undefined ? '-' : options.replacement

    var trim = options.trim === undefined ? true : options.trim

    var slug = string.normalize().split('')
      // replace characters based on charMap
      .reduce(function (result, ch) {
        return result + (locale[ch] || charMap[ch] ||  (ch === replacement ? ' ' : ch))
          // remove not allowed characters
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
      }, '');

    if (options.strict) {
      slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
    }

    if (trim) {
      slug = slug.trim()
    }

    // Replace spaces with replacement character, treating multiple consecutive
    // spaces as a single space.
    slug = slug.replace(/\s+/g, replacement);

    if (options.lower) {
      slug = slug.toLowerCase()
    }

    return slug
  }

  replace.extend = function (customMap) {
    Object.assign(charMap, customMap)
  }

  return replace
}))


/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map