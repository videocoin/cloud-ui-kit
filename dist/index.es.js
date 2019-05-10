import React, { useState, useRef, useEffect, cloneElement, Children, isValidElement, createContext as createContext$1, useContext } from 'react';
import PropTypes__default, { oneOfType, func, element, bool } from 'prop-types';
import ReactDOM, { findDOMNode } from 'react-dom';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ActionBar-module_actionBar__3QSqR {\n  display: flex;\n  justify-content: center; }\n  .ActionBar-module_actionBar__3QSqR > *:not(:last-child) {\n    margin-right: 24px; }\n";
var css$1 = {"actionBar":"ActionBar-module_actionBar__3QSqR"};
styleInject(css);

const ActionBar = ({ children }) => {
    return React.createElement("div", { className: css$1.actionBar }, children);
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var css$2 = "/** display-1 **/\n/** display-2 **/\n/** display-3 **/\n/** small-body **/\n/** small-body-alt **/\n/** small-title **/\n/** subtitle **/\n/** subtitle-alt **/\n/** title **/\n/** body **/\n/** body-alt **/\n/** button **/\n/** caption **/\n/**** Colors ****/\n.Button-module_wrap__28dmB {\n  position: relative;\n  display: inline-block;\n  border-radius: 28px;\n  overflow: hidden; }\n\n.Button-module_root__32E30 {\n  border-radius: 28px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.07px;\n  outline: none;\n  text-transform: uppercase;\n  border: none; }\n  .Button-module_root__32E30:hover {\n    background-image: radial-gradient(at 50% 155%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%); }\n    .Button-module_root__32E30:hover .Button-module_inner__3mg-R {\n      opacity: 0.76; }\n  .Button-module_root__32E30:disabled {\n    background-color: #290f4d;\n    color: #e1ccff;\n    pointer-events: none; }\n    .Button-module_root__32E30:disabled .Button-module_inner__3mg-R {\n      opacity: 0.24; }\n    .Button-module_root__32E30:disabled svg {\n      fill: #a38fc0; }\n\n.Button-module_size-md__VC0gF {\n  font-size: 14px;\n  height: 48px;\n  padding: 0 36px; }\n\n.Button-module_theme-sunkissed__3kfKE {\n  box-shadow: 0 12px 28px rgba(12, 4, 23, 0.74);\n  background-color: #fd9369; }\n  .Button-module_theme-sunkissed__3kfKE svg {\n    fill: #1b0d2f; }\n\n.Button-module_theme-violet-sky__18Wl9 {\n  box-shadow: 0 12px 28px rgba(12, 4, 23, 0.74);\n  background-color: #9056e4; }\n  .Button-module_theme-violet-sky__18Wl9 svg {\n    fill: #1b0d2f; }\n\n.Button-module_theme-perfect-white__3Skaf {\n  box-shadow: 0 12px 28px rgba(12, 4, 23, 0.74);\n  background-color: #efeaf6; }\n  .Button-module_theme-perfect-white__3Skaf svg {\n    fill: #1b0d2f; }\n\n.Button-module_theme-minimal-sunkissed__28Zqv {\n  background-color: transparent;\n  color: #fd9369;\n  transition: color 0.15s ease-in-out; }\n  .Button-module_theme-minimal-sunkissed__28Zqv svg {\n    fill: #fd9369; }\n  .Button-module_theme-minimal-sunkissed__28Zqv:disabled, .Button-module_theme-minimal-sunkissed__28Zqv:hover {\n    background: transparent; }\n\n.Button-module_theme-minimal__2SZRn {\n  background-color: transparent;\n  color: #e1ccff;\n  transition: color 0.15s ease-in-out; }\n  .Button-module_theme-minimal__2SZRn svg {\n    fill: #efeaf6; }\n  .Button-module_theme-minimal__2SZRn:disabled, .Button-module_theme-minimal__2SZRn:hover {\n    background: transparent; }\n\n.Button-module_inner__3mg-R {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .Button-module_inner__3mg-R svg {\n    margin-right: 16px; }\n\n.Button-module_block__3ObFM {\n  display: block;\n  width: 100%; }\n\n.Button-module_loadingBar__3UKRk {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: 0.15s ease-in-out;\n  opacity: 0;\n  visibility: hidden; }\n  .Button-module_loadingBar__3UKRk.Button-module_show__1Mm-E {\n    opacity: 1;\n    visibility: visible; }\n  .Button-module_loadingBar__3UKRk::before {\n    content: '';\n    display: block;\n    will-change: transform;\n    transform: translateZ(0) skewX(-10deg) translateX(-100%);\n    position: absolute;\n    left: -5px;\n    top: 0;\n    width: calc(100% + 10px);\n    height: 100%;\n    background: #7234c8;\n    animation: Button-module_loader__1ba9V 2s;\n    animation-iteration-count: infinite;\n    animation-delay: 0.3s;\n    z-index: 1; }\n  .Button-module_loadingBar__3UKRk::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    border-radius: 28px;\n    overflow: hidden; }\n\n@keyframes Button-module_loader__1ba9V {\n  0% {\n    transform: translateZ(0) skewX(-15deg) translateX(-100%);\n    animation-timing-function: cubic-bezier(0.64, 0, 0.25, 1); }\n  40% {\n    transform: translateZ(0) skewX(-15deg) translateX(0); }\n  60% {\n    animation-timing-function: cubic-bezier(0.64, 0, 0.25, 1);\n    transform: translateZ(0) skewX(-15deg) translateX(0); }\n  100% {\n    transform: translateZ(0) skewX(-15deg) translateX(100%); } }\n";
var css$3 = {"wrap":"Button-module_wrap__28dmB","root":"Button-module_root__32E30","inner":"Button-module_inner__3mg-R","size-md":"Button-module_size-md__VC0gF","theme-sunkissed":"Button-module_theme-sunkissed__3kfKE","theme-violet-sky":"Button-module_theme-violet-sky__18Wl9","theme-perfect-white":"Button-module_theme-perfect-white__3Skaf","theme-minimal-sunkissed":"Button-module_theme-minimal-sunkissed__28Zqv","theme-minimal":"Button-module_theme-minimal__2SZRn","block":"Button-module_block__3ObFM","loadingBar":"Button-module_loadingBar__3UKRk","show":"Button-module_show__1Mm-E","loader":"Button-module_loader__1ba9V"};
styleInject(css$2);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref =
/*#__PURE__*/
React.createElement("path", {
  d: "M12.214 21.368c2.378 0 4.309.78 6.172.78 1.863 0 3.471-.78 5.4-.78a7.714 7.714 0 0 1 7.714 7.715V31.5h-27v-2.417a7.714 7.714 0 0 1 7.714-7.715zM18 18.958c-4.067 0-7.364-4.019-7.364-7.733C10.636 7.51 13.933 4.5 18 4.5s7.364 3.01 7.364 6.725c0 3.714-3.297 7.734-7.364 7.734z",
  fillRule: "evenodd"
});

const SvgAccount = props => React.createElement("svg", _extends({
  viewBox: "0 0 36 36"
}, props), _ref);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 =
/*#__PURE__*/
React.createElement("path", {
  d: "M13 11h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8V3a1 1 0 0 1 2 0v8z",
  fillRule: "evenodd"
});

const SvgAdd = props => React.createElement("svg", _extends$1({
  viewBox: "0 0 24 24"
}, props), _ref$1);

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 =
/*#__PURE__*/
React.createElement("path", {
  d: "M29.753 17l-1.555-7H25a1 1 0 1 1 0-2h4a1 1 0 0 1 .976.783l1.993 8.97c.02.08.031.162.031.247v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-9.978a.996.996 0 0 1 .028-.26l1.996-8.979A1 1 0 0 1 3 8h4a1 1 0 1 1 0 2H3.802l-1.555 7H10a6 6 0 1 0 12 0h7.753zM17 11l2.4-1.8a1 1 0 1 1 1.2 1.6l-3.992 2.994a1 1 0 0 1-1.216 0L11.4 10.8a1 1 0 0 1 1.2-1.6L15 11V3.5a1 1 0 0 1 2 0V11z",
  fillRule: "evenodd"
});

const SvgArchive = props => React.createElement("svg", _extends$2({
  viewBox: "0 0 32 32"
}, props), _ref$2);

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var _ref$3 =
/*#__PURE__*/
React.createElement("path", {
  d: "M8.583 10.183c-.322.451-.838.46-1.166 0L3.583 4.817C3.261 4.366 3.456 4 3.995 4h8.01c.55 0 .74.357.412.817l-3.834 5.366z",
  fillRule: "evenodd"
});

const SvgArrowDown = props => React.createElement("svg", _extends$3({
  viewBox: "0 0 16 16"
}, props), _ref$3);

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var _ref$4 =
/*#__PURE__*/
React.createElement("path", {
  d: "M8.583 4.817c-.322-.451-.838-.46-1.166 0l-3.834 5.366c-.322.451-.127.817.412.817h8.01c.55 0 .74-.357.412-.817L8.583 4.817z",
  fillRule: "evenodd"
});

const SvgArrowUp = props => React.createElement("svg", _extends$4({
  viewBox: "0 0 16 16"
}, props), _ref$4);

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var _ref$5 =
/*#__PURE__*/
React.createElement("g", {
  fillRule: "evenodd"
}, React.createElement("rect", {
  width: 16,
  height: 16,
  rx: 2,
  opacity: 0.527
}), React.createElement("rect", {
  x: 8,
  y: 8,
  width: 16,
  height: 16,
  rx: 2
}));

const SvgCopy = props => React.createElement("svg", _extends$5({
  viewBox: "0 0 24 24"
}, props), _ref$5);

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var _ref$6 =
/*#__PURE__*/
React.createElement("path", {
  d: "M11.085 4A1.5 1.5 0 0 1 12.5 2h7a1.5 1.5 0 0 1 1.415 2H25.5a1.5 1.5 0 0 1 0 3h-19a1.5 1.5 0 0 1 0-3h4.585zM8.19 9h15.62a2 2 0 0 1 1.992 2.181l-1.637 18A2 2 0 0 1 22.174 31H9.826a2 2 0 0 1-1.991-1.819l-1.637-18A2 2 0 0 1 8.19 9z",
  fillRule: "evenodd"
});

const SvgDelete = props => React.createElement("svg", _extends$6({
  viewBox: "0 0 32 32"
}, props), _ref$6);

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var _ref$7 =
/*#__PURE__*/
React.createElement("path", {
  d: "M17.223 8.515a1 1 0 1 1-1.764.943l-3.602-6.735a1 1 0 0 0-1.758-.01L2.506 16.518A1 1 0 0 0 3.383 18H18.53a1 1 0 0 0 .866-1.501l-.264-.455a1 1 0 1 1 1.731-1.002l.263.455A3 3 0 0 1 18.531 20H3.383a3 3 0 0 1-2.63-4.446L8.348 1.75a3 3 0 0 1 5.274.031l3.602 6.735zM11 6a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1zm0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  fillRule: "evenodd"
});

const SvgIncomplete = props => React.createElement("svg", _extends$7({
  viewBox: "0 0 22 20"
}, props), _ref$7);

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var _ref$8 =
/*#__PURE__*/
React.createElement("path", {
  d: "M4 10h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2zm23.428 1.896l5.295-1.528A1 1 0 0 1 34 11.33v13.342a1 1 0 0 1-1.277.96l-5.295-1.527a.5.5 0 0 1-.361-.48V12.376a.5.5 0 0 1 .361-.48zM16 12a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7z",
  fillRule: "evenodd"
});

const SvgLivestreamManager = props => React.createElement("svg", _extends$8({
  viewBox: "0 0 36 36"
}, props), _ref$8);

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var _ref$9 =
/*#__PURE__*/
React.createElement("path", {
  d: "M18 2C9.164 2 2 9.164 2 18s7.164 16 16 16 16-7.164 16-16S26.836 2 18 2zm0 30.857C9.794 32.857 3.143 26.205 3.143 18 3.143 9.795 9.794 3.143 18 3.143c8.205 0 14.857 6.652 14.857 14.857 0 8.205-6.652 14.857-14.857 14.857zM11.02 14.64c-.648.158-1.376.358-1.996.567A2.297 2.297 0 0 1 8.5 16.59a18.562 18.562 0 0 0 2.542 3.463 2.8 2.8 0 0 1 .3-.118c.064-1.324.291-3.12.515-4.33a1.681 1.681 0 0 1-.837-.966zm1.398.186c.58.24 1.31-.114 1.632-.79.32-.676.112-1.42-.468-1.659-.58-.241-1.31.113-1.631.79-.321.676-.112 1.418.467 1.659zm13.816-2.379a1.82 1.82 0 0 1 .158-.121c.4-.271.882-.365 1.372-.307.165-1.183.21-2.37.106-3.535a13.67 13.67 0 0 0-8.488-4.128c.587 1.823 1.641 3.509 2.91 4.924 1.283 1.433 2.594 2.451 3.942 3.167zm-11.276.062a25.305 25.305 0 0 1 1.706-.153c2.486-.13 5.08-.034 7.574.46-2.65-2.011-4.834-5.081-5.708-8.35-1.724 2.04-3.217 4.612-4.208 7.228.296.197.509.482.636.815zm13.874-.12a3.353 3.353 0 0 1 1.27 1.353c.324.055.652.099.98.135a13.687 13.687 0 0 0-2.431-4.512c.153.992.21 2.005.181 3.025zM19.22 27.6c0 .752.761 1.36 1.7 1.36s1.7-.608 1.7-1.36c0-.75-.761-1.36-1.7-1.36s-1.7.61-1.7 1.36zm7.825-14.4c-.61.428-.677 1.402-.15 2.175.527.773 1.45 1.052 2.06.625.61-.428.676-1.402.15-2.175-.529-.772-1.45-1.052-2.06-.625zm-.403 3.224a3.362 3.362 0 0 1-.924-1.374c-2.323-.696-4.748-1.005-6.405-1.087-1.44-.071-2.9-.065-4.351.05a2.6 2.6 0 0 1-.126.323c-.34.691-.94 1.182-1.587 1.373a34.467 34.467 0 0 0-.25 4.208 2.8 2.8 0 0 1 1.895 3.438c1.344.873 2.982 1.732 4.376 2.38a2.941 2.941 0 0 1 1.65-.495c.194 0 .385.02.568.054a25.206 25.206 0 0 0 2.39-3.244c1.047-1.68 2.028-3.601 2.764-5.626zM7.936 13.476c.317.102.568.304.754.56.756-.294 1.533-.54 2.31-.752a2.65 2.65 0 0 1 .164-.42c.412-.84 1.21-1.383 2.005-1.454a25.33 25.33 0 0 1 4.4-7.113 13.7 13.7 0 0 0-11.075 6.244c.123.997.333 1.966.628 2.9.271-.054.548-.051.814.035zM20.92 29.96c-.246 0-.484-.031-.71-.085a17.11 17.11 0 0 1-2.415 1.761l.089.076.116.002c2.606 0 5.042-.726 7.116-1.989a47.682 47.682 0 0 1-2.186-.554c-.494.484-1.21.789-2.01.789zm-2.7-2.36c0-.092.008-.182.02-.27-1.508-.722-2.954-1.565-4.28-2.554-.09.074-.186.14-.285.2.413 1.57 1.55 3.828 2.303 4.658.842-.375 1.65-.834 2.354-1.365a2.087 2.087 0 0 1-.112-.669zm11.463-10.782c-.025.018-.048.04-.075.057-.434.293-.962.379-1.494.289a25.72 25.72 0 0 1-2.738 6.486 27.447 27.447 0 0 1-2.028 2.924c.146.262.237.55.262.856 1.254.372 2.494.608 3.564.763a13.68 13.68 0 0 0 4.518-9.434c-.497-.751-1.19-1.395-2.01-1.941zM12.2 20.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm-6.675-5.943c.138-.362.358-.667.62-.907a14.9 14.9 0 0 1-.378-2.148 13.613 13.613 0 0 0-1.412 4.809c.32-.293.662-.57 1.025-.83a2.25 2.25 0 0 1 .145-.924zm1.26 1.697c.522.18 1.13-.191 1.358-.829.228-.638-.009-1.3-.529-1.48-.52-.18-1.128.191-1.357.829-.229.638.009 1.3.529 1.48zM9.4 22.6c0-.6.19-1.153.51-1.608a19.664 19.664 0 0 1-2.47-3.672 1.637 1.637 0 0 1-.977.004 1.49 1.49 0 0 1-.736-.54c-.556.372-1.054.801-1.44 1.303.035 5.604 3.43 10.409 8.273 12.504.25-.033.5-.068.747-.115-.772-1.567-1.292-3.32-1.608-5.123A2.798 2.798 0 0 1 9.4 22.6z",
  fillRule: "evenodd"
});

const SvgNetworkVisualizer = props => React.createElement("svg", _extends$9({
  viewBox: "0 0 36 36"
}, props), _ref$9);

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var _ref$a =
/*#__PURE__*/
React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10,
  fillRule: "evenodd"
});

const SvgPlaceholderSm = props => React.createElement("svg", _extends$a({
  viewBox: "0 0 24 24"
}, props), _ref$a);

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

var _ref$b =
/*#__PURE__*/
React.createElement("circle", {
  cx: 8,
  cy: 8,
  r: 6,
  fillRule: "evenodd"
});

const SvgPlaceholderXs = props => React.createElement("svg", _extends$b({
  viewBox: "0 0 16 16"
}, props), _ref$b);

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

var _ref$c =
/*#__PURE__*/
React.createElement("path", {
  fillRule: "evenodd",
  d: "M8 6.586L14.293.293a1 1 0 0 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 1 1-1.414-1.414L6.586 8 .293 1.707A1 1 0 1 1 1.707.293L8 6.586z"
});

const SvgRemove = props => React.createElement("svg", _extends$c({
  viewBox: "0 0 16 16"
}, props), _ref$c);

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

var _ref$d =
/*#__PURE__*/
React.createElement("path", {
  d: "M4.783 10.105h26.434A2.783 2.783 0 0 1 34 12.888v11.54a2.783 2.783 0 0 1-2.783 2.783H18.174C17.061 30.014 14.288 32 11.044 32c-3.306 0-6.122-2.062-7.192-4.949A2.784 2.784 0 0 1 2 24.428V10.105C2 7.838 3.869 6 6.174 6h17.739a1.38 1.38 0 0 1 1.391 1.368 1.38 1.38 0 0 1-1.391 1.369H6.173a1.38 1.38 0 0 0-1.39 1.368zm6.26 19.842c3.074 0 5.566-2.45 5.566-5.473 0-3.023-2.492-5.474-5.566-5.474-3.073 0-5.565 2.45-5.565 5.474 0 3.023 2.492 5.473 5.565 5.473zm14.575-17.79a2.053 2.053 0 0 0 0 4.106h6.295v-4.105h-6.295zm.034 3.422a1.38 1.38 0 0 1-1.391-1.368 1.38 1.38 0 0 1 1.391-1.369 1.38 1.38 0 0 1 1.391 1.369 1.38 1.38 0 0 1-1.39 1.368zm-11.316 9.624s-.762.725-2.118 1.531c-1.355.806-2.27 1.106-2.27 1.106-.406.162-.782-.05-.837-.464 0 0-.154-.828-.154-2.562 0-1.735.155-2.579.155-2.579.05-.414.423-.608.823-.434 0 0 .847.323 2.283 1.177 1.436.854 2.103 1.447 2.103 1.447a.49.49 0 0 1 .015.778z",
  fillRule: "evenodd"
});

const SvgVideoCoinWallet = props => React.createElement("svg", _extends$d({
  viewBox: "0 0 36 36"
}, props), _ref$d);

// import { ReactComponent as withdrawal } from './icons/withdrawal.svg';
const ICONS = {
    account: SvgAccount,
    add: SvgAdd,
    archive: SvgArchive,
    arrowDown: SvgArrowDown,
    arrowUp: SvgArrowUp,
    // awaitingInput,
    // back,
    copy: SvgCopy,
    delete: SvgDelete,
    // deposit,
    // expandMenu,
    // failed,
    incomplete: SvgIncomplete,
    livestreamManager: SvgLivestreamManager,
    networkVisualizer: SvgNetworkVisualizer,
    // offline,
    // payment,
    // preparing,
    placeholderSm: SvgPlaceholderSm,
    placeholderXs: SvgPlaceholderXs,
    remove: SvgRemove,
    // retractMenu,
    // streaming,
    // VIDToken,
    // VIDTokenWhite,
    videoCoinWallet: SvgVideoCoinWallet,
};
const Icon = ({ width, height, name, color = '#EEE3FF' }) => {
    const Comp = ICONS[name];
    return (React.createElement(Comp, Object.assign({ fill: color }, width && { width }, height && { height })));
};

const Button = (_a) => {
    var { theme, size, type, href, block, loading, children, icon, disabled } = _a, props = __rest(_a, ["theme", "size", "type", "href", "block", "loading", "children", "icon", "disabled"]);
    const Comp = href ? 'a' : 'button';
    const classes = classnames(css$3.root, css$3[`theme-${theme}`], css$3[`size-${size}`], block && css$3.block, loading && css$3.loading);
    return (React.createElement("div", { className: classnames(css$3.wrap, block && css$3.block) },
        React.createElement(Comp, Object.assign({ type: type }, href && { href }, { className: classes, disabled: disabled || loading }, props),
            React.createElement("span", { className: css$3.inner },
                icon && React.createElement(Icon, { width: 24, height: 24, name: icon }),
                children)),
        React.createElement("div", { className: classnames(css$3.loadingBar, loading && css$3.show) })));
};
Button.defaultProps = {
    theme: 'sunkissed',
    size: 'md',
    type: 'button',
    href: '',
    disabled: false,
};

var css$4 = ".Card-module_card__2R8Y7 {\n  border-radius: 10px;\n  background: linear-gradient(180deg, #7234c8 0%, #4e238e 100%); }\n";
var css$5 = {"card":"Card-module_card__2R8Y7"};
styleInject(css$4);

const Card = ({ children }) => (React.createElement("div", { className: css$5.card }, children));

var css$6 = "/** display-1 **/\n/** display-2 **/\n/** display-3 **/\n/** small-body **/\n/** small-body-alt **/\n/** small-title **/\n/** subtitle **/\n/** subtitle-alt **/\n/** title **/\n/** body **/\n/** body-alt **/\n/** button **/\n/** caption **/\n/**** Colors ****/\n.Checkbox-module_root__1DisM {\n  cursor: pointer;\n  display: flex; }\n\n.Checkbox-module_input__8n1sr {\n  height: 1px;\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n  width: 1px; }\n  .Checkbox-module_input__8n1sr:checked + .Checkbox-module_checkbox__1Sn_b::before {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1); }\n\n.Checkbox-module_checkbox__1Sn_b {\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  border-radius: 4px;\n  height: 24px;\n  margin-right: 12px;\n  position: relative;\n  width: 24px;\n  flex-shrink: 0; }\n  .Checkbox-module_checkbox__1Sn_b::before {\n    background: #fd9369;\n    border-radius: 2px;\n    content: '';\n    display: block;\n    height: 16px;\n    left: 50%;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) scale(0.7);\n    transition: 0.15s ease-in-out;\n    width: 16px; }\n\n.Checkbox-module_label__2r4he {\n  color: #e1ccff;\n  font-size: 14px;\n  line-height: 24px; }\n";
var css$7 = {"root":"Checkbox-module_root__1DisM","input":"Checkbox-module_input__8n1sr","checkbox":"Checkbox-module_checkbox__1Sn_b","label":"Checkbox-module_label__2r4he"};
styleInject(css$6);

const Checkbox = (_a) => {
    var { checked = false, onChange, children } = _a, props = __rest(_a, ["checked", "onChange", "children"]);
    const [isChecked, setIsChecked] = useState(checked);
    const onChangeHandle = (event) => __awaiter(undefined, void 0, void 0, function* () {
        const { currentTarget } = event;
        setIsChecked(currentTarget.checked);
        try {
            yield onChange(event);
        }
        catch (e) {
            setIsChecked(!currentTarget.checked);
            throw e;
        }
    });
    return (React.createElement("label", { className: css$7.root },
        React.createElement("input", Object.assign({ className: css$7.input, type: "checkbox", checked: isChecked, onChange: onChangeHandle }, props)),
        React.createElement("div", { className: css$7.checkbox }),
        React.createElement("div", { className: css$7.label }, children)));
};

var css$8 = "/** display-1 **/\n/** display-2 **/\n/** display-3 **/\n/** small-body **/\n/** small-body-alt **/\n/** small-title **/\n/** subtitle **/\n/** subtitle-alt **/\n/** title **/\n/** body **/\n/** body-alt **/\n/** button **/\n/** caption **/\n/**** Colors ****/\n.FieldAction-module_action__3fKvz {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  width: 56px;\n  height: 56px; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_orange__35zS4 {\n    background: #fd9369; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_violet__3osvv {\n    background: #7234c8; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_pink__1786P {\n    background: #f53568; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_green__2hvb3 {\n    background: #37cb8d; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_grey__20j9S {\n    background: #5f4681; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_white__IeXO2 {\n    background: #efeaf6; }\n    .FieldAction-module_action__3fKvz.FieldAction-module_white__IeXO2 svg {\n      fill: #0c0417; }\n  .FieldAction-module_action__3fKvz:hover + .FieldAction-module_tooltip__3ie7m {\n    opacity: 1;\n    visibility: visible; }\n\n.FieldAction-module_tooltip__3ie7m {\n  position: absolute;\n  border-radius: 4px;\n  padding: 18px 24px;\n  font-size: 12px;\n  color: rgba(12, 4, 23, 0.5);\n  max-width: 300px;\n  right: 28px;\n  bottom: calc(100% + 12px);\n  line-height: 20px;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.15s ease-in-out;\n  pointer-events: none; }\n  .FieldAction-module_tooltip__3ie7m span {\n    position: relative; }\n  .FieldAction-module_tooltip__3ie7m::before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 105%;\n    height: 153%;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjEyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxkZWZzPiAgICA8ZmlsdGVyIHg9Ii03LjUlIiB5PSItMjAuOSUiIHdpZHRoPSIxMTQuOSUiIGhlaWdodD0iMTQxLjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4gICAgICA8ZmVPZmZzZXQgZHk9IjQiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4gICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4gICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNDcwNTg4MjM1IDAgMCAwIDAgMC4wMTU2ODYyNzQ1IDAgMCAwIDAgMC4wOTAxOTYwNzg0IDAgMCAwIDAuNDAwNTQwODY1IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIvPiAgICAgIDxmZU1lcmdlPiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4gICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPiAgICAgIDwvZmVNZXJnZT4gICAgPC9maWx0ZXI+ICA8L2RlZnM+ICA8cGF0aCBkPSJNNCAwaDMwMGE0IDQgMCAwIDEgNCA0djEwNS45ODdsLTI0Ljk2NC0yNi4yNTZBMTIgMTIgMCAwIDAgMjc0LjM0IDgwSDRhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDggNCkiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    left: -7px;\n    top: -3px; }\n";
var css$9 = {"action":"FieldAction-module_action__3fKvz","orange":"FieldAction-module_orange__35zS4","violet":"FieldAction-module_violet__3osvv","pink":"FieldAction-module_pink__1786P","green":"FieldAction-module_green__2hvb3","grey":"FieldAction-module_grey__20j9S","white":"FieldAction-module_white__IeXO2","tooltip":"FieldAction-module_tooltip__3ie7m"};
styleInject(css$8);

const FieldAction = ({ color, icon, children, className, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames(css$9.action, css$9[color], className) },
            React.createElement(Icon, { name: icon, width: 24, height: 24 })),
        children && (React.createElement("div", { className: css$9.tooltip },
            React.createElement("span", null, children)))));
};

const IconButton = (props) => (React.createElement(Button, Object.assign({}, props)));

var css$a = "/** display-1 **/\n/** display-2 **/\n/** display-3 **/\n/** small-body **/\n/** small-body-alt **/\n/** small-title **/\n/** subtitle **/\n/** subtitle-alt **/\n/** title **/\n/** body **/\n/** body-alt **/\n/** button **/\n/** caption **/\n/**** Colors ****/\n.Input-module_root__3BZut {\n  position: relative;\n  display: flex;\n  height: 56px;\n  will-change: opacity, transform, color; }\n  .Input-module_root__3BZut.Input-module_disabled__1NbBs {\n    opacity: 0.36; }\n\n.Input-module_input__1qEAK {\n  align-self: flex-end;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 12px 32px 14px;\n  border-radius: 0;\n  border: none;\n  background: none;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: #ffffff;\n  caret-color: #b280f9; }\n  .Input-module_input__1qEAK:-webkit-autofill {\n    -webkit-animation-name: Input-module_autofill__29mOs;\n    -webkit-animation-fill-mode: both; }\n  .Input-module_input__1qEAK::placeholder {\n    opacity: 0;\n    color: rgba(150, 131, 178, 0.48); }\n  .Input-module_input__1qEAK:focus ~ .Input-module_label__1EkKw, .Input-module_input__1qEAK.Input-module_active__3Rgv5 ~ .Input-module_label__1EkKw {\n    transform: translateY(-160%) scale(0.75);\n    max-width: 133.33333%;\n    text-overflow: clip; }\n  .Input-module_input__1qEAK:focus::placeholder, .Input-module_input__1qEAK.Input-module_active__3Rgv5::placeholder {\n    opacity: 1; }\n  .Input-module_input__1qEAK:focus ~ .Input-module_label__1EkKw {\n    color: rgba(255, 255, 255, 0.87); }\n  .Input-module_input__1qEAK:not(:focus).Input-module_active__3Rgv5 ~ .Input-module_label__1EkKw {\n    color: rgba(184, 168, 206, 0.87); }\n  .Input-module_input__1qEAK:not(:focus).Input-module_error__3RK_4 ~ .Input-module_label__1EkKw, .Input-module_input__1qEAK.Input-module_error__3RK_4 ~ .Input-module_label__1EkKw {\n    color: #ff618b; }\n\n.Input-module_outline__1ZOO3 {\n  display: flex;\n  position: absolute;\n  right: 0;\n  left: 0;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none; }\n  .Input-module_outline__1ZOO3.Input-module_notched__1qvpo .Input-module_leading__amYHU {\n    border-color: #d3b7fb;\n    border-width: 2px; }\n  .Input-module_outline__1ZOO3.Input-module_notched__1qvpo .Input-module_notch__1wYke {\n    padding-left: 0;\n    padding-right: 8px;\n    border-top: none;\n    border-color: #d3b7fb;\n    border-width: 2px; }\n  .Input-module_outline__1ZOO3.Input-module_notched__1qvpo .Input-module_trailing__3I_SZ {\n    border-color: #d3b7fb;\n    border-width: 2px; }\n  .Input-module_outline__1ZOO3.Input-module_error__3RK_4 .Input-module_leading__amYHU {\n    border-color: #ff618b; }\n  .Input-module_outline__1ZOO3.Input-module_error__3RK_4 .Input-module_notch__1wYke {\n    border-color: #ff618b; }\n  .Input-module_outline__1ZOO3.Input-module_error__3RK_4 .Input-module_trailing__3I_SZ {\n    border-color: #ff618b; }\n\n.Input-module_leading__amYHU,\n.Input-module_notch__1wYke,\n.Input-module_trailing__3I_SZ {\n  height: 100%;\n  transition: border 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  pointer-events: none; }\n\n.Input-module_leading__amYHU {\n  border-radius: 4px 0 0 4px;\n  border-left: 1px solid;\n  border-color: #a38fc0;\n  border-right: none;\n  width: 21px; }\n\n.Input-module_notch__1wYke {\n  flex: 0 0 auto;\n  width: 0;\n  max-width: calc(100% - 32px * 2);\n  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1), border 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  border-top: none;\n  border-color: #a38fc0; }\n\n.Input-module_trailing__3I_SZ {\n  border-radius: 0 4px 4px 0;\n  flex-grow: 1;\n  border-left: none;\n  border-right: 1px solid;\n  border-color: #a38fc0; }\n\n.Input-module_label__1EkKw {\n  display: inline-block;\n  position: absolute;\n  bottom: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  will-change: transform;\n  right: auto;\n  left: 32px;\n  color: #9683b2;\n  top: 21px;\n  pointer-events: none;\n  transform-origin: left top;\n  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); }\n\n@-webkit-keyframes Input-module_autofill__29mOs {\n  to {\n    color: #fff;\n    background: transparent;\n    font-family: 'Rubik', sans-serif; } }\n";
var css$b = {"root":"Input-module_root__3BZut","disabled":"Input-module_disabled__1NbBs","input":"Input-module_input__1qEAK","autofill":"Input-module_autofill__29mOs","label":"Input-module_label__1EkKw","active":"Input-module_active__3Rgv5","error":"Input-module_error__3RK_4","outline":"Input-module_outline__1ZOO3","notched":"Input-module_notched__1qvpo","leading":"Input-module_leading__amYHU","notch":"Input-module_notch__1wYke","trailing":"Input-module_trailing__3I_SZ"};
styleInject(css$a);

const NotchedOutline = ({ notched, labelWidth, filled, error, }) => {
    const classes = {
        [css$b.outline]: true,
        [css$b.notched]: notched,
        [css$b.error]: error,
    };
    return (React.createElement("div", { className: classnames(classes) },
        React.createElement("div", { className: css$b.leading }),
        React.createElement("div", { className: css$b.notch, style: { width: notched || filled ? labelWidth : 0 } }),
        React.createElement("div", { className: css$b.trailing })));
};

const Input = (_a) => {
    var { label, disabled, onFocus, onBlur, value, error = false, postfix } = _a, props = __rest(_a, ["label", "disabled", "onFocus", "onBlur", "value", "error", "postfix"]);
    const labelRef = useRef(null);
    const [focused, setFocused] = useState(Boolean(value));
    const [labelWidth, setLabelWidth] = useState(0);
    const onFocusHandler = (e) => {
        setFocused(true);
        onFocus && onFocus(e);
    };
    const onBlurHandler = (e) => {
        setFocused(false);
        onBlur && onBlur(e);
    };
    useEffect(() => {
        setLabelWidth(labelRef && labelRef.current && labelRef.current.offsetWidth > 0
            ? labelRef.current.offsetWidth * 0.75 + 22
            : 0);
    }, []);
    const rootClasses = {
        [css$b.root]: true,
        [css$b.disabled]: disabled,
    };
    const inputClasses = {
        [css$b.input]: true,
        [css$b.active]: Boolean(value),
        [css$b.error]: error,
    };
    return (React.createElement("label", { className: classnames(rootClasses) },
        React.createElement("input", Object.assign({ onFocus: onFocusHandler, onBlur: onBlurHandler, className: classnames(inputClasses), disabled: disabled, value: value }, props)),
        label && (React.createElement("div", { ref: labelRef, className: classnames(css$b.label) }, label)),
        React.createElement(NotchedOutline, { error: error, notched: focused, filled: Boolean(value), labelWidth: labelWidth }),
        postfix && postfix()));
};
Input.defaultProps = {
    disabled: false,
    error: false,
};

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

var _ref$e =
/*#__PURE__*/
React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React.createElement("path", {
  fill: "#1C0937",
  d: "M98.705 48.136l8.15-21.775H100.8l-5.09 15.491-5.09-15.49h-6.056l8.15 21.774h5.992zm15.398-16.331h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.708 0 3.028-1.182 3.028-2.8 0-1.648-1.32-2.83-3.028-2.83-1.707 0-2.996 1.182-2.996 2.83 0 1.618 1.289 2.8 2.996 2.8zm17.815 9.208c0-2.582-1.514-4.044-3.64-4.044-2.191 0-3.64 1.649-3.64 4.044 0 2.426 1.481 3.982 3.64 3.982 2.319 0 3.64-1.805 3.64-3.982zm.193 8.119V46.86c-.483.53-2.094 1.68-4.574 1.68-4.865 0-8.28-3.546-8.28-8.554 0-5.07 3.093-8.586 7.99-8.586 2.577 0 4.155 1.245 4.51 1.649v-7.403h5.38v22.49h-5.026zm24.032-6.813h-11.082c.13 1.462 1.579 2.707 3.576 2.707 2.03 0 3.222-1.276 3.544-1.742l3.543 2.644c-.483.964-2.802 3.608-7.184 3.608-5.573 0-8.987-3.702-8.987-8.523 0-4.79 3.35-8.617 8.311-8.617 5.38 0 8.311 3.329 8.311 8.897 0 .311 0 .653-.032 1.026zm-8.182-5.723c-1.772 0-2.61 1.275-2.739 2.426h5.477c-.065-1.306-1.063-2.426-2.738-2.426zm9.664 4.417c0-4.946 3.962-8.617 9.181-8.617 5.444 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.181-3.608-9.181-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.223 0-3.801 1.649-3.801 4.044zm26.706 8.523c2.802 0 5.057-.778 6.668-1.835l-1.546-4.666c-1.192.778-2.996 1.524-4.93 1.524-4.123 0-6.378-2.955-6.378-6.346 0-3.39 2.255-6.283 6.379-6.283 1.933 0 3.64.746 4.832 1.524l1.546-4.666c-1.61-1.058-3.769-1.835-6.571-1.835-7.023 0-11.92 4.883-11.92 11.26 0 6.408 4.64 11.323 11.92 11.323zm8.343-8.523c0-4.946 3.963-8.617 9.181-8.617 5.445 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.18-3.608-9.18-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.222 0-3.801 1.649-3.801 4.044zm20.843-8.212h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.707 0 3.028-1.182 3.028-2.8 0-1.648-1.321-2.83-3.028-2.83-1.708 0-2.996 1.182-2.996 2.83 0 1.618 1.288 2.8 2.996 2.8zm15.914 17.327h5.38v-9.052c0-3.329-.516-7.684-5.8-7.684-2.125 0-3.607 1.12-4.252 2.085v-1.68h-5.25v16.33h5.38V38.4c0-1.306.837-2.333 2.319-2.333 1.288 0 2.223.81 2.223 2.333v9.737z"
}), React.createElement("path", {
  fill: "#1C0937",
  fillRule: "nonzero",
  d: "M246.02 29.033h-1.42v5.146h-1.608v-5.146h-1.42v-1.439h4.449v1.44zm5.212 4.61h-1.476l-1.45-3.782v4.318h-1.542v-6.585h2.088l1.637 4.167 1.647-4.167h2.088v6.585h-1.543v-4.318l-1.449 3.782z"
}), React.createElement("path", {
  fill: "#0C0417",
  d: "M36.644 72.644c-19.882 0-36-16.118-36-36s16.118-36 36-36 36 16.118 36 36-16.118 36-36 36zm0-3.13c18.153 0 32.87-14.717 32.87-32.87s-14.717-32.87-32.87-32.87-32.87 14.717-32.87 32.87 14.717 32.87 32.87 32.87zm-5.087-3.564l.55-3.082a26.78 26.78 0 0 0 4.708.415c14.696 0 26.609-11.913 26.609-26.608a26.49 26.49 0 0 0-2.8-11.895l2.8-1.401a29.62 29.62 0 0 1 3.13 13.296c0 16.424-13.314 29.739-29.739 29.739a29.91 29.91 0 0 1-5.258-.464zm5.087-59.045v3.13a26.615 26.615 0 0 0-24.64 16.547l-2.898-1.185C13.64 14.305 24.456 6.905 36.644 6.905zm4.149 52.852l-.55-3.082c9.632-1.718 16.749-10.134 16.749-20.031 0-8.23-4.931-15.552-12.372-18.726l1.228-2.88a23.482 23.482 0 0 1 14.274 21.606c0 11.42-8.21 21.13-19.33 23.113zm-4.149-46.591v3.13c-11.238 0-20.348 9.11-20.348 20.348a20.327 20.327 0 0 0 9.319 17.103l-1.7 2.629a23.456 23.456 0 0 1-10.75-19.732c0-12.967 10.512-23.478 23.479-23.478zm0 6.26v3.131c-7.78 0-14.087 6.307-14.087 14.087 0 7.78 6.307 14.087 14.087 14.087 7.78 0 14.087-6.307 14.087-14.087h3.13c0 9.509-7.708 17.217-17.217 17.217-9.509 0-17.217-7.708-17.217-17.217 0-9.509 7.708-17.217 17.217-17.217zm9.651 18.4s-2.143 2.21-5.956 4.669c-3.813 2.46-6.386 3.374-6.386 3.374-1.14.493-2.198-.151-2.352-1.415 0 0-.435-2.525-.435-7.816 0-5.292.437-7.865.437-7.865.143-1.264 1.189-1.857 2.314-1.326 0 0 2.383.986 6.422 3.592 4.04 2.606 5.914 4.412 5.914 4.412.74.635.753 1.706.042 2.375z"
}));

const SvgBlack = props => React.createElement("svg", _extends$e({
  viewBox: "0 0 255 73"
}, props), _ref$e);

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

var _ref$f =
/*#__PURE__*/
React.createElement("path", {
  fill: "#0C0417",
  fillRule: "evenodd",
  d: "M46 92C20.595 92 0 71.405 0 46S20.595 0 46 0s46 20.595 46 46-20.595 46-46 46zm0-4c23.196 0 42-18.804 42-42S69.196 4 46 4 4 22.804 4 46s18.804 42 42 42zm-6.5-4.553l.703-3.938c1.971.352 3.982.53 6.016.53 18.777 0 34-15.222 34-34a33.848 33.848 0 0 0-3.578-15.198l3.577-1.791c2.619 5.23 4 11.013 4 16.99 0 20.986-17.012 38-38 38-2.27 0-4.515-.2-6.718-.593zM46 8v4c-13.935 0-26.301 8.461-31.485 21.142l-3.703-1.513C16.606 17.456 30.426 8 46 8zm5.301 67.533l-.702-3.938C62.906 69.399 72 58.647 72 46c0-10.516-6.3-19.872-15.809-23.927l1.57-3.68C68.73 23.073 76 33.867 76 46c0 14.593-10.491 26.998-24.699 29.533zM46 16v4c-14.36 0-26 11.64-26 26 0 8.935 4.54 17.092 11.907 21.853l-2.171 3.36C21.24 65.722 16 56.307 16 46c0-16.569 13.431-30 30-30zm0 8v4c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18h4c0 12.15-9.85 22-22 22s-22-9.85-22-22 9.85-22 22-22zm12.332 23.51s-2.738 2.823-7.61 5.966c-4.872 3.143-8.16 4.312-8.16 4.312-1.457.63-2.81-.194-3.006-1.808 0 0-.556-3.227-.556-9.988 0-6.761.559-10.05.559-10.05.182-1.614 1.519-2.372 2.957-1.693 0 0 3.044 1.26 8.206 4.589 5.161 3.33 7.556 5.637 7.556 5.637.945.813.962 2.18.054 3.035z"
});

const SvgBlackS = props => React.createElement("svg", _extends$f({
  viewBox: "0 0 92 92"
}, props), _ref$f);

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

var _ref$g =
/*#__PURE__*/
React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React.createElement("path", {
  fill: "#FF8A3C",
  fillRule: "nonzero",
  d: "M36.644 72.644c19.882 0 36-16.118 36-36s-16.118-36-36-36-36 16.118-36 36 16.118 36 36 36zm0-3.13c-18.153 0-32.87-14.717-32.87-32.87s14.717-32.87 32.87-32.87 32.87 14.717 32.87 32.87-14.717 32.87-32.87 32.87z"
}), React.createElement("path", {
  fill: "#FF5D50",
  fillRule: "nonzero",
  d: "M31.557 65.95l.55-3.082a26.78 26.78 0 0 0 4.708.415c14.696 0 26.609-11.913 26.609-26.608a26.49 26.49 0 0 0-2.8-11.895l2.8-1.401a29.62 29.62 0 0 1 3.13 13.296c0 16.424-13.314 29.739-29.739 29.739a29.91 29.91 0 0 1-5.258-.464zm5.087-59.045v3.13a26.615 26.615 0 0 0-24.64 16.547l-2.898-1.185C13.64 14.305 24.456 6.905 36.644 6.905z"
}), React.createElement("path", {
  fill: "#F53568",
  fillRule: "nonzero",
  d: "M40.793 59.757l-.55-3.082c9.632-1.718 16.749-10.134 16.749-20.031 0-8.23-4.931-15.552-12.372-18.726l1.228-2.88a23.482 23.482 0 0 1 14.274 21.606c0 11.42-8.21 21.13-19.33 23.113zm-4.149-46.591v3.13c-11.238 0-20.348 9.11-20.348 20.348a20.327 20.327 0 0 0 9.319 17.103l-1.7 2.629a23.456 23.456 0 0 1-10.75-19.732c0-12.967 10.512-23.478 23.479-23.478z"
}), React.createElement("path", {
  fill: "#7130CC",
  fillRule: "nonzero",
  d: "M36.644 19.427c-9.509 0-17.217 7.708-17.217 17.217 0 9.509 7.708 17.217 17.217 17.217 9.509 0 17.217-7.708 17.217-17.217h-3.13c0 7.78-6.307 14.087-14.087 14.087-7.78 0-14.087-6.307-14.087-14.087 0-7.78 6.307-14.087 14.087-14.087v-3.13z"
}), React.createElement("path", {
  fill: "#0C0417",
  d: "M46.295 37.826s-2.143 2.21-5.956 4.669c-3.813 2.46-6.386 3.374-6.386 3.374-1.14.493-2.198-.151-2.352-1.415 0 0-.435-2.525-.435-7.816 0-5.292.437-7.865.437-7.865.143-1.264 1.189-1.857 2.314-1.326 0 0 2.383.986 6.422 3.592 4.04 2.606 5.914 4.412 5.914 4.412.74.635.753 1.706.042 2.375z"
}), React.createElement("path", {
  fill: "#1C0937",
  d: "M98.705 48.136l8.15-21.775H100.8l-5.09 15.491-5.09-15.49h-6.056l8.15 21.774h5.992zm15.398-16.331h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.708 0 3.028-1.182 3.028-2.8 0-1.648-1.32-2.83-3.028-2.83-1.707 0-2.996 1.182-2.996 2.83 0 1.618 1.289 2.8 2.996 2.8zm17.815 9.208c0-2.582-1.514-4.044-3.64-4.044-2.191 0-3.64 1.649-3.64 4.044 0 2.426 1.481 3.982 3.64 3.982 2.319 0 3.64-1.805 3.64-3.982zm.193 8.119V46.86c-.483.53-2.094 1.68-4.574 1.68-4.865 0-8.28-3.546-8.28-8.554 0-5.07 3.093-8.586 7.99-8.586 2.577 0 4.155 1.245 4.51 1.649v-7.403h5.38v22.49h-5.026zm24.032-6.813h-11.082c.13 1.462 1.579 2.707 3.576 2.707 2.03 0 3.222-1.276 3.544-1.742l3.543 2.644c-.483.964-2.802 3.608-7.184 3.608-5.573 0-8.987-3.702-8.987-8.523 0-4.79 3.35-8.617 8.311-8.617 5.38 0 8.311 3.329 8.311 8.897 0 .311 0 .653-.032 1.026zm-8.182-5.723c-1.772 0-2.61 1.275-2.739 2.426h5.477c-.065-1.306-1.063-2.426-2.738-2.426zm9.664 4.417c0-4.946 3.962-8.617 9.181-8.617 5.444 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.181-3.608-9.181-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.223 0-3.801 1.649-3.801 4.044zm26.706 8.523c2.802 0 5.057-.778 6.668-1.835l-1.546-4.666c-1.192.778-2.996 1.524-4.93 1.524-4.123 0-6.378-2.955-6.378-6.346 0-3.39 2.255-6.283 6.379-6.283 1.933 0 3.64.746 4.832 1.524l1.546-4.666c-1.61-1.058-3.769-1.835-6.571-1.835-7.023 0-11.92 4.883-11.92 11.26 0 6.408 4.64 11.323 11.92 11.323zm8.343-8.523c0-4.946 3.963-8.617 9.181-8.617 5.445 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.18-3.608-9.18-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.222 0-3.801 1.649-3.801 4.044zm20.843-8.212h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.707 0 3.028-1.182 3.028-2.8 0-1.648-1.321-2.83-3.028-2.83-1.708 0-2.996 1.182-2.996 2.83 0 1.618 1.288 2.8 2.996 2.8zm15.914 17.327h5.38v-9.052c0-3.329-.516-7.684-5.8-7.684-2.125 0-3.607 1.12-4.252 2.085v-1.68h-5.25v16.33h5.38V38.4c0-1.306.837-2.333 2.319-2.333 1.288 0 2.223.81 2.223 2.333v9.737z"
}), React.createElement("path", {
  fill: "#1C0937",
  fillRule: "nonzero",
  d: "M246.02 29.033h-1.42v5.146h-1.608v-5.146h-1.42v-1.439h4.449v1.44zm5.212 4.61h-1.476l-1.45-3.782v4.318h-1.542v-6.585h2.088l1.637 4.167 1.647-4.167h2.088v6.585h-1.543v-4.318l-1.449 3.782z"
}));

const SvgColorBlack = props => React.createElement("svg", _extends$g({
  viewBox: "0 0 255 73"
}, props), _ref$g);

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

var _ref$h =
/*#__PURE__*/
React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React.createElement("path", {
  fill: "#FF8A3C",
  fillRule: "nonzero",
  d: "M46 92c25.405 0 46-20.595 46-46S71.405 0 46 0 0 20.595 0 46s20.595 46 46 46zm0-4C22.804 88 4 69.196 4 46S22.804 4 46 4s42 18.804 42 42-18.804 42-42 42z"
}), React.createElement("path", {
  fill: "#FF5D50",
  fillRule: "nonzero",
  d: "M39.5 83.447l.703-3.938c1.971.352 3.982.53 6.016.53 18.777 0 34-15.222 34-34a33.848 33.848 0 0 0-3.578-15.198l3.577-1.791c2.619 5.23 4 11.013 4 16.99 0 20.986-17.012 38-38 38-2.27 0-4.515-.2-6.718-.593zM46 8v4c-13.935 0-26.301 8.461-31.485 21.142l-3.703-1.513C16.606 17.456 30.426 8 46 8z"
}), React.createElement("path", {
  fill: "#F53568",
  fillRule: "nonzero",
  d: "M51.301 75.533l-.702-3.938C62.906 69.399 72 58.647 72 46c0-10.516-6.3-19.872-15.809-23.927l1.57-3.68C68.73 23.073 76 33.867 76 46c0 14.593-10.491 26.998-24.699 29.533zM46 16v4c-14.36 0-26 11.64-26 26 0 8.935 4.54 17.092 11.907 21.853l-2.171 3.36C21.24 65.722 16 56.307 16 46c0-16.569 13.431-30 30-30z"
}), React.createElement("path", {
  fill: "#7130CC",
  fillRule: "nonzero",
  d: "M46 24c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22h-4c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18v-4z"
}), React.createElement("path", {
  fill: "#0C0417",
  d: "M58.332 47.51s-2.738 2.823-7.61 5.966c-4.872 3.143-8.16 4.312-8.16 4.312-1.457.63-2.81-.194-3.006-1.808 0 0-.556-3.227-.556-9.988 0-6.761.559-10.05.559-10.05.182-1.614 1.519-2.372 2.957-1.693 0 0 3.044 1.26 8.206 4.589 5.161 3.33 7.556 5.637 7.556 5.637.945.813.962 2.18.054 3.035z"
}));

const SvgColorBlackS = props => React.createElement("svg", _extends$h({
  viewBox: "0 0 92 92"
}, props), _ref$h);

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

var _ref$i =
/*#__PURE__*/
React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React.createElement("path", {
  fill: "#FFF",
  d: "M98.705 48.136l8.15-21.775H100.8l-5.09 15.491-5.09-15.49h-6.056l8.15 21.774h5.992zm15.398-16.331h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.708 0 3.028-1.182 3.028-2.8 0-1.648-1.32-2.83-3.028-2.83-1.707 0-2.996 1.182-2.996 2.83 0 1.618 1.289 2.8 2.996 2.8zm17.815 9.208c0-2.582-1.514-4.044-3.64-4.044-2.191 0-3.64 1.649-3.64 4.044 0 2.426 1.481 3.982 3.64 3.982 2.319 0 3.64-1.805 3.64-3.982zm.193 8.119V46.86c-.483.53-2.094 1.68-4.574 1.68-4.865 0-8.28-3.546-8.28-8.554 0-5.07 3.093-8.586 7.99-8.586 2.577 0 4.155 1.245 4.51 1.649v-7.403h5.38v22.49h-5.026zm24.032-6.813h-11.082c.13 1.462 1.579 2.707 3.576 2.707 2.03 0 3.222-1.276 3.544-1.742l3.543 2.644c-.483.964-2.802 3.608-7.184 3.608-5.573 0-8.987-3.702-8.987-8.523 0-4.79 3.35-8.617 8.311-8.617 5.38 0 8.311 3.329 8.311 8.897 0 .311 0 .653-.032 1.026zm-8.182-5.723c-1.772 0-2.61 1.275-2.739 2.426h5.477c-.065-1.306-1.063-2.426-2.738-2.426zm9.664 4.417c0-4.946 3.962-8.617 9.181-8.617 5.444 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.181-3.608-9.181-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.223 0-3.801 1.649-3.801 4.044zm26.706 8.523c2.802 0 5.057-.778 6.668-1.835l-1.546-4.666c-1.192.778-2.996 1.524-4.93 1.524-4.123 0-6.378-2.955-6.378-6.346 0-3.39 2.255-6.283 6.379-6.283 1.933 0 3.64.746 4.832 1.524l1.546-4.666c-1.61-1.058-3.769-1.835-6.571-1.835-7.023 0-11.92 4.883-11.92 11.26 0 6.408 4.64 11.323 11.92 11.323zm8.343-8.523c0-4.946 3.963-8.617 9.181-8.617 5.445 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.18-3.608-9.18-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.222 0-3.801 1.649-3.801 4.044zm20.843-8.212h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.707 0 3.028-1.182 3.028-2.8 0-1.648-1.321-2.83-3.028-2.83-1.708 0-2.996 1.182-2.996 2.83 0 1.618 1.288 2.8 2.996 2.8zm15.914 17.327v-9.737c0-1.524-.935-2.333-2.223-2.333-1.482 0-2.32 1.027-2.32 2.333v9.737h-5.38V31.805h5.251v1.68c.645-.965 2.127-2.085 4.253-2.085 5.283 0 5.798 4.355 5.798 7.684v9.052h-5.38zm11.306-19.103h-1.42v5.146h-1.61v-5.146h-1.42v-1.439h4.45v1.44zm5.211 4.61h-1.476l-1.45-3.782v4.318h-1.542v-6.585h2.088l1.637 4.167 1.647-4.167h2.088v6.585h-1.543v-4.318l-1.449 3.782z"
}), React.createElement("path", {
  fill: "#FF8A3C",
  fillRule: "nonzero",
  d: "M36.644 72.644c19.882 0 36-16.118 36-36s-16.118-36-36-36-36 16.118-36 36 16.118 36 36 36zm0-3.13c-18.153 0-32.87-14.717-32.87-32.87s14.717-32.87 32.87-32.87 32.87 14.717 32.87 32.87-14.717 32.87-32.87 32.87z"
}), React.createElement("path", {
  fill: "#FF5D50",
  d: "M31.557 65.95l.55-3.082a26.78 26.78 0 0 0 4.708.415c14.696 0 26.609-11.913 26.609-26.608a26.49 26.49 0 0 0-2.8-11.895l2.8-1.401a29.62 29.62 0 0 1 3.13 13.296c0 16.424-13.314 29.739-29.739 29.739a29.91 29.91 0 0 1-5.258-.464zm5.087-59.045v3.13a26.615 26.615 0 0 0-24.64 16.547l-2.898-1.185C13.64 14.305 24.456 6.905 36.644 6.905z"
}), React.createElement("path", {
  fill: "#F53568",
  d: "M40.793 59.757l-.55-3.082c9.632-1.718 16.749-10.134 16.749-20.031 0-8.23-4.931-15.552-12.372-18.726l1.228-2.88a23.482 23.482 0 0 1 14.274 21.606c0 11.42-8.21 21.13-19.33 23.113zm-4.149-46.591v3.13c-11.238 0-20.348 9.11-20.348 20.348a20.327 20.327 0 0 0 9.319 17.103l-1.7 2.629a23.456 23.456 0 0 1-10.75-19.732c0-12.967 10.512-23.478 23.479-23.478z"
}), React.createElement("path", {
  fill: "#7130CC",
  d: "M36.644 19.427c-9.509 0-17.217 7.708-17.217 17.217 0 9.509 7.708 17.217 17.217 17.217 9.509 0 17.217-7.708 17.217-17.217h-3.13c0 7.78-6.307 14.087-14.087 14.087-7.78 0-14.087-6.307-14.087-14.087 0-7.78 6.307-14.087 14.087-14.087v-3.13z"
}), React.createElement("path", {
  fill: "#FFF",
  d: "M46.295 37.826s-2.143 2.21-5.956 4.669c-3.813 2.46-6.386 3.374-6.386 3.374-1.14.493-2.198-.151-2.352-1.415 0 0-.435-2.525-.435-7.816 0-5.292.437-7.865.437-7.865.143-1.264 1.189-1.857 2.314-1.326 0 0 2.383.986 6.422 3.592 4.04 2.606 5.914 4.412 5.914 4.412.74.635.753 1.706.042 2.375z"
}));

const SvgColorWhite = props => React.createElement("svg", _extends$i({
  viewBox: "0 0 255 73"
}, props), _ref$i);

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

var _ref$j =
/*#__PURE__*/
React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React.createElement("path", {
  fill: "#FF8A3C",
  fillRule: "nonzero",
  d: "M46 92c25.405 0 46-20.595 46-46S71.405 0 46 0 0 20.595 0 46s20.595 46 46 46zm0-4C22.804 88 4 69.196 4 46S22.804 4 46 4s42 18.804 42 42-18.804 42-42 42z"
}), React.createElement("path", {
  fill: "#FF5D50",
  d: "M39.5 83.447l.703-3.938c1.971.352 3.982.53 6.016.53 18.777 0 34-15.222 34-34a33.848 33.848 0 0 0-3.578-15.198l3.577-1.791c2.619 5.23 4 11.013 4 16.99 0 20.986-17.012 38-38 38-2.27 0-4.515-.2-6.718-.593zM46 8v4c-13.935 0-26.301 8.461-31.485 21.142l-3.703-1.513C16.606 17.456 30.426 8 46 8z"
}), React.createElement("path", {
  fill: "#F53568",
  d: "M51.301 75.533l-.702-3.938C62.906 69.399 72 58.647 72 46c0-10.516-6.3-19.872-15.809-23.927l1.57-3.68C68.73 23.073 76 33.867 76 46c0 14.593-10.491 26.998-24.699 29.533zM46 16v4c-14.36 0-26 11.64-26 26 0 8.935 4.54 17.092 11.907 21.853l-2.171 3.36C21.24 65.722 16 56.307 16 46c0-16.569 13.431-30 30-30z"
}), React.createElement("path", {
  fill: "#7130CC",
  d: "M46 24c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22h-4c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18v-4z"
}), React.createElement("path", {
  fill: "#FFF",
  d: "M58.332 47.51s-2.738 2.823-7.61 5.966c-4.872 3.143-8.16 4.312-8.16 4.312-1.457.63-2.81-.194-3.006-1.808 0 0-.556-3.227-.556-9.988 0-6.761.559-10.05.559-10.05.182-1.614 1.519-2.372 2.957-1.693 0 0 3.044 1.26 8.206 4.589 5.161 3.33 7.556 5.637 7.556 5.637.945.813.962 2.18.054 3.035z"
}));

const SvgColorWhiteS = props => React.createElement("svg", _extends$j({
  viewBox: "0 0 92 92"
}, props), _ref$j);

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

var _ref$k =
/*#__PURE__*/
React.createElement("g", {
  fill: "#FFF",
  fillRule: "evenodd"
}, React.createElement("path", {
  d: "M98.705 48.136l8.15-21.775H100.8l-5.09 15.491-5.09-15.49h-6.056l8.15 21.774h5.992zm15.398-16.331h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.708 0 3.028-1.182 3.028-2.8 0-1.648-1.32-2.83-3.028-2.83-1.707 0-2.996 1.182-2.996 2.83 0 1.618 1.289 2.8 2.996 2.8zm17.815 9.208c0-2.582-1.514-4.044-3.64-4.044-2.191 0-3.64 1.649-3.64 4.044 0 2.426 1.481 3.982 3.64 3.982 2.319 0 3.64-1.805 3.64-3.982zm.193 8.119V46.86c-.483.53-2.094 1.68-4.574 1.68-4.865 0-8.28-3.546-8.28-8.554 0-5.07 3.093-8.586 7.99-8.586 2.577 0 4.155 1.245 4.51 1.649v-7.403h5.38v22.49h-5.026zm24.032-6.813h-11.082c.13 1.462 1.579 2.707 3.576 2.707 2.03 0 3.222-1.276 3.544-1.742l3.543 2.644c-.483.964-2.802 3.608-7.184 3.608-5.573 0-8.987-3.702-8.987-8.523 0-4.79 3.35-8.617 8.311-8.617 5.38 0 8.311 3.329 8.311 8.897 0 .311 0 .653-.032 1.026zm-8.182-5.723c-1.772 0-2.61 1.275-2.739 2.426h5.477c-.065-1.306-1.063-2.426-2.738-2.426zm9.664 4.417c0-4.946 3.962-8.617 9.181-8.617 5.444 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.181-3.608-9.181-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.223 0-3.801 1.649-3.801 4.044zm26.706 8.523c2.802 0 5.057-.778 6.668-1.835l-1.546-4.666c-1.192.778-2.996 1.524-4.93 1.524-4.123 0-6.378-2.955-6.378-6.346 0-3.39 2.255-6.283 6.379-6.283 1.933 0 3.64.746 4.832 1.524l1.546-4.666c-1.61-1.058-3.769-1.835-6.571-1.835-7.023 0-11.92 4.883-11.92 11.26 0 6.408 4.64 11.323 11.92 11.323zm8.343-8.523c0-4.946 3.963-8.617 9.181-8.617 5.445 0 9.278 3.609 9.278 8.555 0 4.915-3.93 8.585-9.278 8.585-5.38 0-9.18-3.608-9.18-8.523zm5.38 0c0 2.364 1.61 3.95 3.801 3.95 2.223 0 3.898-1.68 3.898-4.012 0-2.396-1.707-3.982-3.898-3.982-2.222 0-3.801 1.649-3.801 4.044zm20.843-8.212h-5.38v16.33h5.38v-16.33zm-2.738-.996c1.707 0 3.028-1.182 3.028-2.8 0-1.648-1.321-2.83-3.028-2.83-1.708 0-2.996 1.182-2.996 2.83 0 1.618 1.288 2.8 2.996 2.8zm15.914 17.327h5.38v-9.052c0-3.329-.516-7.684-5.8-7.684-2.125 0-3.607 1.12-4.252 2.085v-1.68h-5.25v16.33h5.38V38.4c0-1.306.837-2.333 2.319-2.333 1.288 0 2.223.81 2.223 2.333v9.737z"
}), React.createElement("path", {
  fillRule: "nonzero",
  d: "M246.02 29.033h-1.42v5.146h-1.608v-5.146h-1.42v-1.439h4.449v1.44zm5.212 4.61h-1.476l-1.45-3.782v4.318h-1.542v-6.585h2.088l1.637 4.167 1.647-4.167h2.088v6.585h-1.543v-4.318l-1.449 3.782z"
}), React.createElement("path", {
  d: "M36.644 72.644c-19.882 0-36-16.118-36-36s16.118-36 36-36 36 16.118 36 36-16.118 36-36 36zm0-3.13c18.153 0 32.87-14.717 32.87-32.87s-14.717-32.87-32.87-32.87-32.87 14.717-32.87 32.87 14.717 32.87 32.87 32.87zm-5.087-3.564l.55-3.082a26.78 26.78 0 0 0 4.708.415c14.696 0 26.609-11.913 26.609-26.608a26.49 26.49 0 0 0-2.8-11.895l2.8-1.401a29.62 29.62 0 0 1 3.13 13.296c0 16.424-13.314 29.739-29.739 29.739a29.91 29.91 0 0 1-5.258-.464zm5.087-59.045v3.13a26.615 26.615 0 0 0-24.64 16.547l-2.898-1.185C13.64 14.305 24.456 6.905 36.644 6.905zm4.149 52.852l-.55-3.082c9.632-1.718 16.749-10.134 16.749-20.031 0-8.23-4.931-15.552-12.372-18.726l1.228-2.88a23.482 23.482 0 0 1 14.274 21.606c0 11.42-8.21 21.13-19.33 23.113zm-4.149-46.591v3.13c-11.238 0-20.348 9.11-20.348 20.348a20.327 20.327 0 0 0 9.319 17.103l-1.7 2.629a23.456 23.456 0 0 1-10.75-19.732c0-12.967 10.512-23.478 23.479-23.478zm0 6.26v3.131c-7.78 0-14.087 6.307-14.087 14.087 0 7.78 6.307 14.087 14.087 14.087 7.78 0 14.087-6.307 14.087-14.087h3.13c0 9.509-7.708 17.217-17.217 17.217-9.509 0-17.217-7.708-17.217-17.217 0-9.509 7.708-17.217 17.217-17.217zm9.651 18.4s-2.143 2.21-5.956 4.669c-3.813 2.46-6.386 3.374-6.386 3.374-1.14.493-2.198-.151-2.352-1.415 0 0-.435-2.525-.435-7.816 0-5.292.437-7.865.437-7.865.143-1.264 1.189-1.857 2.314-1.326 0 0 2.383.986 6.422 3.592 4.04 2.606 5.914 4.412 5.914 4.412.74.635.753 1.706.042 2.375z"
}));

const SvgWhite = props => React.createElement("svg", _extends$k({
  viewBox: "0 0 255 73"
}, props), _ref$k);

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

var _ref$l =
/*#__PURE__*/
React.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  d: "M46 92C20.595 92 0 71.405 0 46S20.595 0 46 0s46 20.595 46 46-20.595 46-46 46zm0-4c23.196 0 42-18.804 42-42S69.196 4 46 4 4 22.804 4 46s18.804 42 42 42zm-6.5-4.553l.703-3.938c1.971.352 3.982.53 6.016.53 18.777 0 34-15.222 34-34a33.848 33.848 0 0 0-3.578-15.198l3.577-1.791c2.619 5.23 4 11.013 4 16.99 0 20.986-17.012 38-38 38-2.27 0-4.515-.2-6.718-.593zM46 8v4c-13.935 0-26.301 8.461-31.485 21.142l-3.703-1.513C16.606 17.456 30.426 8 46 8zm5.301 67.533l-.702-3.938C62.906 69.399 72 58.647 72 46c0-10.516-6.3-19.872-15.809-23.927l1.57-3.68C68.73 23.073 76 33.867 76 46c0 14.593-10.491 26.998-24.699 29.533zM46 16v4c-14.36 0-26 11.64-26 26 0 8.935 4.54 17.092 11.907 21.853l-2.171 3.36C21.24 65.722 16 56.307 16 46c0-16.569 13.431-30 30-30zm0 8v4c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18h4c0 12.15-9.85 22-22 22s-22-9.85-22-22 9.85-22 22-22zm12.332 23.51s-2.738 2.823-7.61 5.966c-4.872 3.143-8.16 4.312-8.16 4.312-1.457.63-2.81-.194-3.006-1.808 0 0-.556-3.227-.556-9.988 0-6.761.559-10.05.559-10.05.182-1.614 1.519-2.372 2.957-1.693 0 0 3.044 1.26 8.206 4.589 5.161 3.33 7.556 5.637 7.556 5.637.945.813.962 2.18.054 3.035z"
});

const SvgWhiteS = props => React.createElement("svg", _extends$l({
  viewBox: "0 0 92 92"
}, props), _ref$l);

const LOGOS = {
    black: SvgBlack,
    blacks: SvgBlackS,
    colorBlack: SvgColorBlack,
    colorBlacks: SvgColorBlackS,
    colorWhite: SvgColorWhite,
    colorWhites: SvgColorWhiteS,
    white: SvgWhite,
    whites: SvgWhiteS,
};
const Logo = ({ type, short, width, height }) => {
    const Comp = LOGOS[`${type}${short ? 's' : ''}`];
    return React.createElement(Comp, Object.assign({}, width && { width }, height && { height }));
};
Logo.defaultProps = {
    type: 'colorBlack',
    short: false,
};

var css$c = "/** display-1 **/\n/** display-2 **/\n/** display-3 **/\n/** small-body **/\n/** small-body-alt **/\n/** small-title **/\n/** subtitle **/\n/** subtitle-alt **/\n/** title **/\n/** body **/\n/** body-alt **/\n/** button **/\n/** caption **/\n/**** Colors ****/\n.Modal-module_modal__FqeFw {\n  border-radius: 24px;\n  margin: auto;\n  z-index: 1;\n  position: relative; }\n\n.Modal-module_header__at9sT {\n  background: #4b1f8c;\n  border-radius: 24px 24px 0 0;\n  padding: 20px 48px;\n  color: rgba(255, 255, 255, 0.64); }\n  .Modal-module_header__at9sT:empty {\n    padding: 18px 48px; }\n\n.Modal-module_body__285R0 {\n  padding: 48px;\n  background-image: linear-gradient(-180deg, #290f55 0%, #1b0a33 100%);\n  border-radius: 0 0 24px 24px; }\n\n.Modal-module_close__3VJL0 {\n  position: absolute;\n  background: none;\n  border: none;\n  right: 48px;\n  top: 26px; }\n";
var css$d = {"modal":"Modal-module_modal__FqeFw","header":"Modal-module_header__at9sT","body":"Modal-module_body__285R0","close":"Modal-module_close__3VJL0"};
styleInject(css$c);

function _extends$m() {
  _extends$m = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$m.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var hasClass_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
});

unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = addClass;

var _hasClass = interopRequireDefault(hasClass_1);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
});

var addOneClass = unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.shape({
  enter: PropTypes__default.number,
  exit: PropTypes__default.number,
  appear: PropTypes__default.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.shape({
  enter: PropTypes__default.string,
  exit: PropTypes__default.string,
  active: PropTypes__default.string
}), PropTypes__default.shape({
  enter: PropTypes__default.string,
  enterDone: PropTypes__default.string,
  enterActive: PropTypes__default.string,
  exit: PropTypes__default.string,
  exitDone: PropTypes__default.string,
  exitActive: PropTypes__default.string
})]) : null;

var TransitionGroupContext = React.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = ReactDOM.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = React.Children.only(children);
    return (// allows for nested Transitions
      React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, React.cloneElement(child, childProps))
    );
  };

  return Transition;
}(React.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: oneOfType([func.isRequired, element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addOneClass(node, c);
  });
};

var removeClass$1 = function removeClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass$1(node, className);
    activeClassName && removeClass$1(node, activeClassName);
    doneClassName && removeClass$1(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends$m({}, this.props);

    delete props.classNames;
    return React.createElement(Transition, _extends$m({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends$m({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: func
}) : {};

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends$m({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return React.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, React.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes__default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes__default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes__default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes__default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes__default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes__default.func
} : {};
TransitionGroup.defaultProps = defaultProps;

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = React.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler](findDOMNode(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = React.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return React.createElement(TransitionGroup, props, inProp ? React.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : React.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(React.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: PropTypes__default.bool.isRequired,
  children: function children(props, propName) {
    if (React.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};

var css$e = ".Overlay-module_overlay__gVkwr {\n  position: fixed;\n  left: 0;\n  padding: 20px;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center; }\n  .Overlay-module_overlay__gVkwr > div {\n    margin: auto; }\n  .Overlay-module_overlay__gVkwr::before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0.87;\n    background-image: linear-gradient(-180deg, #1b0d2f 0%, #0c0417 100%); }\n\n.Overlay-module_enter__2VQpt {\n  opacity: 0.01; }\n\n.Overlay-module_enterActive__5jMqD {\n  transition: opacity 0.1s ease-in-out;\n  opacity: 1; }\n\n.Overlay-module_leave__2PakK {\n  opacity: 1; }\n\n.Overlay-module_leaveActive__3F7ko {\n  transition: opacity 0.1s ease-in-out;\n  opacity: 0.01; }\n";
var css$f = {"overlay":"Overlay-module_overlay__gVkwr","enter":"Overlay-module_enter__2VQpt","enterActive":"Overlay-module_enterActive__5jMqD","leave":"Overlay-module_leave__2PakK","leaveActive":"Overlay-module_leaveActive__3F7ko"};
styleInject(css$e);

const Overlay = ({ active, children, onClick }) => {
    const handleInnerClick = (event) => {
        event.stopPropagation();
    };
    return (React.createElement(CSSTransition, { unmountOnExit: true, in: active, classNames: {
            enter: css$f.enter,
            enterActive: css$f.enterActive,
            exit: css$f.leave,
            exitActive: css$f.leaveActive,
        }, timeout: 100 },
        React.createElement("div", { className: css$f.overlay, onClick: onClick },
            React.createElement("div", { onClick: handleInnerClick }, children))));
};

const Modal = ({ isOpen, close, header, children, shouldOverlayClose = true, hideCloseButton = true, }) => {
    const handleClickOverlay = () => {
        if (shouldOverlayClose) {
            close();
        }
    };
    return (React.createElement(Overlay, { active: isOpen, onClick: handleClickOverlay },
        React.createElement("div", { className: css$d.modal },
            !hideCloseButton && (React.createElement("button", { className: css$d.close, type: "button", onClick: close },
                React.createElement(Icon, { name: "remove", width: 20, height: 20 }))),
            React.createElement("div", { className: css$d.header }, header && header()),
            React.createElement("div", { className: css$d.body }, children))));
};

var css$g = ".Navigation-module_nav__2ZY-d {\n  overflow: hidden;\n  max-width: 310px; }\n  @media (max-width: 1439px) {\n    .Navigation-module_nav__2ZY-d {\n      max-width: 92px; } }\n  .Navigation-module_nav__2ZY-d.Navigation-module_expand__3GTds {\n    max-width: 310px; }\n\n.Navigation-module_head__1P8KN {\n  display: flex;\n  white-space: nowrap;\n  padding-left: 22px;\n  align-items: center;\n  margin-bottom: 66px; }\n  .Navigation-module_head__1P8KN svg {\n    flex-shrink: 0;\n    margin-right: 38px; }\n\n.Navigation-module_links__38gsj {\n  display: flex;\n  flex-direction: column; }\n\n.Navigation-module_item__32Dlo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  padding: 14px 28px 14px 30px;\n  opacity: 0.48;\n  cursor: pointer;\n  transition: opacity 0.15s ease-in-out;\n  text-decoration: none; }\n  .Navigation-module_item__32Dlo:not(:last-child) {\n    margin-bottom: 24px; }\n  .Navigation-module_item__32Dlo:hover, .Navigation-module_item__32Dlo.Navigation-module_active__w1Sgw {\n    opacity: 1; }\n  .Navigation-module_item__32Dlo svg {\n    flex-shrink: 0;\n    margin-right: 48px; }\n";
var css$h = {"nav":"Navigation-module_nav__2ZY-d","expand":"Navigation-module_expand__3GTds","head":"Navigation-module_head__1P8KN","links":"Navigation-module_links__38gsj","item":"Navigation-module_item__32Dlo","active":"Navigation-module_active__w1Sgw"};
styleInject(css$g);

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(PropTypes__default);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : invariant_1(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

var _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  return _extends$n({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends$n({}, state, { key: Date.now() + "" });
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var index = 0;
  var stack = [{ pathname: initialPathname, search: "" }];
  var states = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());

var _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = createContext(defaultValue);
  Ctx.Consumer.displayName = name + ".Consumer";
  Ctx.Provider.displayName = name + ".Provider";
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return React.createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : React.createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return React.createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(React.Component);

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: globalHistory
};
process.env.NODE_ENV !== "production" ? LocationProvider.propTypes = {
  history: PropTypes__default.object.isRequired
} : void 0;

////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return React.createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return React.createElement(
        Location,
        null,
        function (locationContext) {
          return React.createElement(RouterImpl, _extends$o({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = React.Children.map(children, createRoute(basepath));
    var pathname = location.pathname;


    var match = pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends$o({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = React.cloneElement(element, props, element.props.children ? React.createElement(
        Router,
        { primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends$o({ uri: uri, location: location, component: component }, domProps) : domProps;

      return React.createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        React.createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(React.PureComponent);

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return React.createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return React.createElement(FocusHandlerImpl, _extends$o({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends$o({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends$o({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (process.env.NODE_ENV === "test") {
      // getting cannot read property focus of null in the tests
      // and that bit of global `initialRender` state causes problems
      // should probably figure it out!
      return;
    }

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$role = _props2.role,
        role = _props2$role === undefined ? "group" : _props2$role,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "role", "component", "uri", "location"]);

    return React.createElement(
      Comp,
      _extends$o({
        style: _extends$o({ outline: "none" }, style),
        tabIndex: "-1",
        role: role,
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      React.createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(React.Component);

polyfill(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = React.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return React.createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return React.createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var isCurrent = location.pathname === href;
          var isPartiallyCurrent = startsWith(location.pathname, href);

          return React.createElement("a", _extends$o({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                navigate(href, { state: state, replace: replace });
              }
            }
          }));
        }
      );
    }
  );
});

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    Promise.resolve().then(function () {
      navigate(insertParams(to, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    if (!noThrow) redirectTo(insertParams(to, props));
    return null;
  };

  return RedirectImpl;
}(React.Component);

var Redirect = function Redirect(props) {
  return React.createElement(
    Location,
    null,
    function (locationContext) {
      return React.createElement(RedirectImpl, _extends$o({}, locationContext, props));
    }
  );
};

process.env.NODE_ENV !== "production" ? Redirect.propTypes = {
  from: PropTypes__default.string,
  to: PropTypes__default.string.isRequired
} : void 0;

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    !(element.props.path || element.props.default || element.type === Redirect) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : invariant_1(false) : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : invariant_1(false) : void 0;

    !!(element.type === Redirect && !validateRedirect(element.props.from, element.props.to)) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : invariant_1(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var css$i = "/** display-1 **/\n/** display-2 **/\n/** display-3 **/\n/** small-body **/\n/** small-body-alt **/\n/** small-title **/\n/** subtitle **/\n/** subtitle-alt **/\n/** title **/\n/** body **/\n/** body-alt **/\n/** button **/\n/** caption **/\n/**** Colors ****/\n.Typography-module_display1__3ERHT {\n  font-size: 92px;\n  letter-spacing: -1.2px;\n  line-height: 96px;\n  font-family: Rubik;\n  font-weight: 300; }\n  .Typography-module_display1__3ERHT.Typography-module_light__3k-UC {\n    color: #e1ccff; }\n  .Typography-module_display1__3ERHT.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_display1__3ERHT.Typography-module_white__2VjCC {\n    color: #ffffff; }\n  .Typography-module_display1__3ERHT.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n\n.Typography-module_display2__37S-e {\n  opacity: 0.87;\n  font-size: 64px;\n  letter-spacing: -0.6px;\n  line-height: 72px;\n  font-family: Rubik;\n  font-weight: 300; }\n  .Typography-module_display2__37S-e.Typography-module_light__3k-UC {\n    color: rgba(225, 204, 255, 0.87); }\n  .Typography-module_display2__37S-e.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.87); }\n  .Typography-module_display2__37S-e.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.87); }\n  .Typography-module_display2__37S-e.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.87); }\n\n.Typography-module_display3__2p1iT {\n  opacity: 0.76;\n  font-size: 48px;\n  letter-spacing: -0.04px;\n  line-height: 56px;\n  font-family: Rubik;\n  font-weight: 300; }\n  .Typography-module_display3__2p1iT.Typography-module_light__3k-UC {\n    color: rgba(225, 204, 255, 0.76); }\n  .Typography-module_display3__2p1iT.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.76); }\n  .Typography-module_display3__2p1iT.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.76); }\n  .Typography-module_display3__2p1iT.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.76); }\n\n.Typography-module_title__f1Z0p {\n  font-size: 32px;\n  letter-spacing: -0.1px;\n  line-height: 40px;\n  font-family: Rubik;\n  font-weight: 400; }\n  .Typography-module_title__f1Z0p.Typography-module_light__3k-UC {\n    color: #b7a5d2; }\n  .Typography-module_title__f1Z0p.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_title__f1Z0p.Typography-module_white__2VjCC {\n    color: #ffffff; }\n  .Typography-module_title__f1Z0p.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n\n.Typography-module_smallTitle__3iyYJ {\n  font-size: 24px;\n  letter-spacing: 0.8px;\n  line-height: 36px;\n  font-family: Rubik;\n  font-weight: 700; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_light__3k-UC {\n    color: #ccb1f2; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_white__2VjCC {\n    color: #ffffff; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n\n.Typography-module_subtitle__38tnJ {\n  font-size: 20px;\n  letter-spacing: -0.1px;\n  line-height: 32px;\n  font-family: Rubik;\n  font-weight: 500;\n  text-transform: uppercase; }\n  .Typography-module_subtitle__38tnJ.Typography-module_light__3k-UC {\n    color: #62517a; }\n  .Typography-module_subtitle__38tnJ.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.36); }\n  .Typography-module_subtitle__38tnJ.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.36); }\n  .Typography-module_subtitle__38tnJ.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.92); }\n\n.Typography-module_subtitleAlt__12I-j {\n  font-size: 20px;\n  letter-spacing: -0.1px;\n  line-height: 32px;\n  font-family: Rubik;\n  font-weight: 500; }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_light__3k-UC {\n    color: #a287ca; }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.76); }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.76); }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.76); }\n\n.Typography-module_body__2Sz8H {\n  font-size: 16px;\n  letter-spacing: 0.12px;\n  line-height: 24px;\n  font-family: Rubik;\n  font-weight: 400; }\n  .Typography-module_body__2Sz8H.Typography-module_light__3k-UC {\n    color: #9683b2; }\n  .Typography-module_body__2Sz8H.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.5); }\n  .Typography-module_body__2Sz8H.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.94); }\n  .Typography-module_body__2Sz8H.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.72); }\n\n.Typography-module_bodyAlt__7pfPX {\n  font-size: 16px;\n  letter-spacing: 0.12px;\n  line-height: 24px;\n  font-family: Rubik;\n  font-weight: 500; }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_light__3k-UC {\n    color: #b79cdd; }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.86); }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.94); }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.92); }\n\n.Typography-module_smallBody__2UuEv {\n  font-size: 14px;\n  letter-spacing: 0.28px;\n  line-height: 24px;\n  font-family: Rubik;\n  font-weight: 400; }\n  .Typography-module_smallBody__2UuEv.Typography-module_light__3k-UC {\n    color: #aa90d0; }\n  .Typography-module_smallBody__2UuEv.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.56); }\n  .Typography-module_smallBody__2UuEv.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.92); }\n  .Typography-module_smallBody__2UuEv.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.72); }\n\n.Typography-module_smallBodyAlt__3L0vg {\n  opacity: 0.76;\n  font-size: 14px;\n  letter-spacing: 0.28px;\n  line-height: 24px;\n  font-family: Rubik;\n  font-weight: 700; }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_light__3k-UC {\n    color: rgba(225, 204, 255, 0.76); }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.76); }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.87); }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.82); }\n\n.Typography-module_caption__Rr-x4 {\n  opacity: 0.72;\n  font-size: 12px;\n  letter-spacing: 0.06px;\n  line-height: 20px;\n  font-family: Rubik;\n  font-weight: 400; }\n  .Typography-module_caption__Rr-x4.Typography-module_light__3k-UC {\n    color: rgba(184, 168, 206, 0.72); }\n  .Typography-module_caption__Rr-x4.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.5); }\n  .Typography-module_caption__Rr-x4.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.87); }\n  .Typography-module_caption__Rr-x4.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.72); }\n\n.Typography-module_button__2PUzl {\n  font-size: 14px;\n  letter-spacing: 0.07px;\n  line-height: 20px;\n  font-family: Rubik;\n  font-weight: 500;\n  text-transform: uppercase; }\n  .Typography-module_button__2PUzl.Typography-module_light__3k-UC {\n    color: #e1ccff; }\n  .Typography-module_button__2PUzl.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_button__2PUzl.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.92); }\n  .Typography-module_button__2PUzl.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n\n.Typography-module_align-inherit__lC37D {\n  text-align: inherit; }\n\n.Typography-module_align-left__3E97E {\n  text-align: left; }\n\n.Typography-module_align-center__3_W1z {\n  text-align: center; }\n\n.Typography-module_align-right__n9nal {\n  text-align: right; }\n\n.Typography-module_align-justify__Kroi0 {\n  text-align: justify; }\n";
var css$j = {"display1":"Typography-module_display1__3ERHT","light":"Typography-module_light__3k-UC","dark":"Typography-module_dark__1H6tC","white":"Typography-module_white__2VjCC","primary":"Typography-module_primary__3JTMr","display2":"Typography-module_display2__37S-e","display3":"Typography-module_display3__2p1iT","title":"Typography-module_title__f1Z0p","smallTitle":"Typography-module_smallTitle__3iyYJ","subtitle":"Typography-module_subtitle__38tnJ","subtitleAlt":"Typography-module_subtitleAlt__12I-j","body":"Typography-module_body__2Sz8H","bodyAlt":"Typography-module_bodyAlt__7pfPX","smallBody":"Typography-module_smallBody__2UuEv","smallBodyAlt":"Typography-module_smallBodyAlt__3L0vg","caption":"Typography-module_caption__Rr-x4","button":"Typography-module_button__2PUzl","align-inherit":"Typography-module_align-inherit__lC37D","align-left":"Typography-module_align-left__3E97E","align-center":"Typography-module_align-center__3_W1z","align-right":"Typography-module_align-right__n9nal","align-justify":"Typography-module_align-justify__Kroi0"};
styleInject(css$i);

const Typography = (_a) => {
    var { tagName: Comp = 'div', type = 'body', theme = 'light', align = 'inherit', className } = _a, props = __rest(_a, ["tagName", "type", "theme", "align", "className"]);
    const classes = classnames(css$j.root, css$j[type], css$j[theme], css$j[`align-${align}`], className);
    return React.createElement(Comp, Object.assign({ className: classes }, props));
};
Typography.defaultProps = {
    tagName: 'div',
    type: 'body',
    theme: 'light',
};

const NavLink = ({ icon, active = false, to, label }) => {
    const classes = classnames({
        [css$h.item]: true,
        [css$h.active]: active,
    });
    return (React.createElement(Link, { to: to, className: classes },
        React.createElement(Icon, { name: icon, width: 28, height: 28 }),
        React.createElement(Typography, { type: "bodyAlt" }, label)));
};

const Navigation = ({ children, expanded }) => {
    return (React.createElement("div", { className: classnames(css$h.nav, expanded && css$h.expand) },
        React.createElement("div", { className: css$h.head },
            React.createElement(Logo, { width: 48, height: 48, type: "colorWhite", short: true }),
            React.createElement(Typography, { type: "bodyAlt" }, "Videocoin Network")),
        React.createElement("div", { className: css$h.links }, children)));
};
Navigation.NavLink = NavLink;

const RadioContext = createContext$1({});
const RadioContextProvider = RadioContext.Provider;

var css$k = "/** display-1 **/\n/** display-2 **/\n/** display-3 **/\n/** small-body **/\n/** small-body-alt **/\n/** small-title **/\n/** subtitle **/\n/** subtitle-alt **/\n/** title **/\n/** body **/\n/** body-alt **/\n/** button **/\n/** caption **/\n/**** Colors ****/\n.Radio-module_group__ubTsy {\n  display: flex; }\n  .Radio-module_group__ubTsy.Radio-module_vertical__1du-F {\n    flex-direction: column; }\n    .Radio-module_group__ubTsy.Radio-module_vertical__1du-F > *:not(:last-child) {\n      margin-bottom: 5px; }\n  .Radio-module_group__ubTsy.Radio-module_horizontal__2G6VE > *:not(:last-child) {\n    margin-right: 25px; }\n\n.Radio-module_root__3ATGC {\n  cursor: pointer;\n  display: flex;\n  align-items: center; }\n\n.Radio-module_input__2G_Xm {\n  height: 1px;\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n  width: 1px; }\n  .Radio-module_input__2G_Xm:checked + .Radio-module_radiobox__2MLPy::before {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1); }\n\n.Radio-module_radiobox__2MLPy {\n  background-color: #0c0417;\n  border: 4px solid #3f2a5d;\n  border-radius: 50%;\n  height: 24px;\n  margin-right: 12px;\n  position: relative;\n  width: 24px; }\n  .Radio-module_radiobox__2MLPy::before {\n    background: #fd9369;\n    border-radius: 50%;\n    content: '';\n    display: block;\n    height: 16px;\n    left: 50%;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) scale(0.7);\n    transition: 0.15s ease-in-out;\n    width: 16px; }\n\n.Radio-module_label__1JwFR {\n  color: #e1ccff;\n  font-size: 14px;\n  line-height: 24px; }\n";
var css$l = {"group":"Radio-module_group__ubTsy","vertical":"Radio-module_vertical__1du-F","horizontal":"Radio-module_horizontal__2G6VE","root":"Radio-module_root__3ATGC","input":"Radio-module_input__2G_Xm","radiobox":"Radio-module_radiobox__2MLPy","label":"Radio-module_label__1JwFR"};
styleInject(css$k);

const RadioBtn = ({ value, children, disabled }) => {
    const { selected, onChange, name, disabled: disabledGroup } = useContext(RadioContext);
    return (React.createElement("label", { className: css$l.root },
        React.createElement("input", { type: "radio", value: value, disabled: disabled || disabledGroup, className: css$l.input, name: name, checked: selected === value, onChange: onChange }),
        React.createElement("div", { className: css$l.radiobox }),
        children ? React.createElement("div", { className: css$l.label }, children) : null));
};

const RadioGroup = ({ defaultSelected, name, onChange, disabled = false, children, direction = 'vertical', }) => {
    const [selected, setSelected] = useState(defaultSelected);
    const onChangeHandle = e => {
        const prevSelected = selected;
        setSelected(e.target.value);
        try {
            onChange(e.target.value);
        }
        catch (e) {
            setSelected(prevSelected);
            throw e;
        }
    };
    return (React.createElement(RadioContextProvider, { value: { name, selected, onChange: onChangeHandle, disabled } },
        React.createElement("div", { className: classnames(css$l.group, css$l[direction]) }, children)));
};
RadioGroup.defaultProps = {
    direction: 'vertical',
    disabled: false,
};
RadioGroup.RadioBtn = RadioBtn;

export { ActionBar, Button, Card, Checkbox, FieldAction, Icon, IconButton, Input, Logo, Modal, Navigation, Overlay, RadioGroup, Typography };
//# sourceMappingURL=index.es.js.map
