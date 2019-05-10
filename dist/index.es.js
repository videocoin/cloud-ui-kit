import React, { useState, useRef, useEffect, cloneElement, Children, isValidElement, createContext, useContext } from 'react';
import PropTypes__default, { oneOfType, func, element, bool } from 'prop-types';
import ReactDOM, { findDOMNode } from 'react-dom';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

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

var css = ".Button-module_root__32E30 {\n  border: 2px solid transparent;\n  border-radius: 28px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.07px;\n  outline: none;\n  text-transform: uppercase; }\n  .Button-module_root__32E30:hover {\n    background-image: radial-gradient(at 50% 155%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);\n    color: rgba(12, 4, 23, 0.76); }\n  .Button-module_root__32E30:disabled {\n    background-color: rgba(238, 227, 255, 0.1);\n    border-color: rgba(255, 255, 255, 0.18);\n    color: rgba(225, 204, 255, 0.22);\n    pointer-events: none; }\n\n.Button-module_size-md__VC0gF {\n  font-size: 14px;\n  height: 48px;\n  padding: 14px 36px; }\n\n.Button-module_theme-primary__2orBO {\n  box-shadow: 0 12px 28px rgba(12, 4, 23, 0.74);\n  background-color: #fd9369; }\n\n.Button-module_theme-secondary__3fRzm {\n  box-shadow: 0 12px 28px rgba(12, 4, 23, 0.74);\n  background-color: #7234c8; }\n\n.Button-module_theme-white__1PC6L {\n  box-shadow: 0 12px 28px rgba(12, 4, 23, 0.74);\n  background-color: #fff; }\n\n.Button-module_theme-ghost-primary__ybjZf {\n  background-color: transparent;\n  color: #fd9369; }\n  .Button-module_theme-ghost-primary__ybjZf:hover {\n    background: transparent;\n    color: rgba(253, 147, 105, 0.76); }\n\n.Button-module_theme-ghost-secondary__3vM6x {\n  background-color: transparent;\n  color: #e1ccff; }\n  .Button-module_theme-ghost-secondary__3vM6x:hover {\n    background: transparent;\n    color: rgba(225, 204, 255, 0.76); }\n\n.Button-module_block__3ObFM {\n  width: 100%; }\n";
var css$1 = {"root":"Button-module_root__32E30","size-md":"Button-module_size-md__VC0gF","theme-primary":"Button-module_theme-primary__2orBO","theme-secondary":"Button-module_theme-secondary__3fRzm","theme-white":"Button-module_theme-white__1PC6L","theme-ghost-primary":"Button-module_theme-ghost-primary__ybjZf","theme-ghost-secondary":"Button-module_theme-ghost-secondary__3vM6x","block":"Button-module_block__3ObFM"};
styleInject(css);

var Button = function (_a) {
    var theme = _a.theme, size = _a.size, type = _a.type, href = _a.href, isBlock = _a.isBlock, props = __rest(_a, ["theme", "size", "type", "href", "isBlock"]);
    var Comp = href ? 'a' : 'button';
    var classes = classnames(css$1.root, css$1["theme-" + theme], css$1["size-" + size], isBlock && css$1.block);
    return (React.createElement(Comp, __assign({ type: type }, href && { href: href }, { className: classes }, props)));
};
Button.defaultProps = {
    theme: 'primary',
    size: 'md',
    type: 'button',
    href: '',
    disabled: false,
};

var css$2 = ".Card-module_card__2R8Y7 {\n  border-radius: 10px;\n  background: linear-gradient(180deg, #7234c8 0%, #4e238e 100%); }\n";
var css$3 = {"card":"Card-module_card__2R8Y7"};
styleInject(css$2);

var Card = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: css$3.card }, children));
};

var css$4 = ".Checkbox-module_root__1DisM {\n  cursor: pointer;\n  display: flex; }\n\n.Checkbox-module_input__8n1sr {\n  height: 1px;\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n  width: 1px; }\n  .Checkbox-module_input__8n1sr:checked + .Checkbox-module_checkbox__1Sn_b::before {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1); }\n\n.Checkbox-module_checkbox__1Sn_b {\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  border-radius: 4px;\n  height: 24px;\n  margin-right: 12px;\n  position: relative;\n  width: 24px;\n  flex-shrink: 0; }\n  .Checkbox-module_checkbox__1Sn_b::before {\n    background: #fd9369;\n    border-radius: 2px;\n    content: '';\n    display: block;\n    height: 16px;\n    left: 50%;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) scale(0.7);\n    transition: 0.15s ease-in-out;\n    width: 16px; }\n\n.Checkbox-module_label__2r4he {\n  color: #e1ccff;\n  font-size: 14px;\n  line-height: 24px; }\n";
var css$5 = {"root":"Checkbox-module_root__1DisM","input":"Checkbox-module_input__8n1sr","checkbox":"Checkbox-module_checkbox__1Sn_b","label":"Checkbox-module_label__2r4he"};
styleInject(css$4);

var _this = undefined;
var Checkbox = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, onChange = _a.onChange, children = _a.children, props = __rest(_a, ["checked", "onChange", "children"]);
    var _c = useState(checked), isChecked = _c[0], setIsChecked = _c[1];
    var onChangeHandle = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var currentTarget, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentTarget = event.currentTarget;
                    setIsChecked(currentTarget.checked);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onChange(event)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    setIsChecked(!currentTarget.checked);
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("label", { className: css$5.root },
        React.createElement("input", __assign({ className: css$5.input, type: "checkbox", checked: isChecked, onChange: onChangeHandle }, props)),
        React.createElement("div", { className: css$5.checkbox }),
        React.createElement("div", { className: css$5.label }, children)));
};

var css$6 = ".FieldAction-module_action__3fKvz {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  width: 56px;\n  height: 100%;\n  position: absolute;\n  right: 0; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_orange__35zS4 {\n    background: #fd9369; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_violet__3osvv {\n    background: #7234c8; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_pink__1786P {\n    background: #f53568; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_green__2hvb3 {\n    background: #37cb8d; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_grey__20j9S {\n    background: #5f4681; }\n  .FieldAction-module_action__3fKvz.FieldAction-module_white__IeXO2 {\n    background: #efeaf6; }\n  .FieldAction-module_action__3fKvz:hover + .FieldAction-module_tooltip__3ie7m {\n    opacity: 1;\n    visibility: visible; }\n\n.FieldAction-module_tooltip__3ie7m {\n  position: absolute;\n  border-radius: 4px;\n  padding: 18px 24px;\n  font-size: 12px;\n  color: rgba(12, 4, 23, 0.5);\n  max-width: 300px;\n  right: 28px;\n  bottom: calc(100% + 12px);\n  line-height: 20px;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.15s ease-in-out;\n  pointer-events: none; }\n  .FieldAction-module_tooltip__3ie7m span {\n    position: relative; }\n  .FieldAction-module_tooltip__3ie7m::before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 105%;\n    height: 153%;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjEyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxkZWZzPiAgICA8ZmlsdGVyIHg9Ii03LjUlIiB5PSItMjAuOSUiIHdpZHRoPSIxMTQuOSUiIGhlaWdodD0iMTQxLjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4gICAgICA8ZmVPZmZzZXQgZHk9IjQiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4gICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4gICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNDcwNTg4MjM1IDAgMCAwIDAgMC4wMTU2ODYyNzQ1IDAgMCAwIDAgMC4wOTAxOTYwNzg0IDAgMCAwIDAuNDAwNTQwODY1IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIvPiAgICAgIDxmZU1lcmdlPiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4gICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPiAgICAgIDwvZmVNZXJnZT4gICAgPC9maWx0ZXI+ICA8L2RlZnM+ICA8cGF0aCBkPSJNNCAwaDMwMGE0IDQgMCAwIDEgNCA0djEwNS45ODdsLTI0Ljk2NC0yNi4yNTZBMTIgMTIgMCAwIDAgMjc0LjM0IDgwSDRhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDggNCkiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    left: -7px;\n    top: -3px; }\n";
var css$7 = {"action":"FieldAction-module_action__3fKvz","orange":"FieldAction-module_orange__35zS4","violet":"FieldAction-module_violet__3osvv","pink":"FieldAction-module_pink__1786P","green":"FieldAction-module_green__2hvb3","grey":"FieldAction-module_grey__20j9S","white":"FieldAction-module_white__IeXO2","tooltip":"FieldAction-module_tooltip__3ie7m"};
styleInject(css$6);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref =
/*#__PURE__*/
React.createElement("path", {
  d: "M17.223 8.515a1 1 0 1 1-1.764.943l-3.602-6.735a1 1 0 0 0-1.758-.01L2.506 16.518A1 1 0 0 0 3.383 18H18.53a1 1 0 0 0 .866-1.501l-.264-.455a1 1 0 1 1 1.731-1.002l.263.455A3 3 0 0 1 18.531 20H3.383a3 3 0 0 1-2.63-4.446L8.348 1.75a3 3 0 0 1 5.274.031l3.602 6.735zM11 6a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1zm0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  fill: "#EEE3FF",
  fillRule: "evenodd"
});

const SvgWarn = props => React.createElement("svg", _extends({
  width: 22,
  height: 20
}, props), _ref);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 =
/*#__PURE__*/
React.createElement("path", {
  d: "M10 8.232L17.866.366a1.25 1.25 0 0 1 1.768 1.768L11.768 10l7.866 7.866a1.25 1.25 0 0 1-1.768 1.768L10 11.768l-7.866 7.866a1.25 1.25 0 0 1-1.768-1.768L8.232 10 .366 2.134A1.25 1.25 0 0 1 2.134.366L10 8.232z",
  fill: "#FFF",
  fillRule: "evenodd"
});

const SvgClose = props => React.createElement("svg", _extends$1({
  width: 20,
  height: 20
}, props), _ref$1);

var ICONS = {
    warn: SvgWarn,
    close: SvgClose,
};
var Icon = function (_a) {
    var width = _a.width, height = _a.height, name = _a.name;
    var Comp = ICONS[name];
    return React.createElement(Comp, __assign({}, width && { width: width }, height && { height: height }));
};

var FieldAction = function (_a) {
    var color = _a.color, icon = _a.icon, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames(css$7.action, css$7[color]) },
            React.createElement(Icon, { name: icon, width: 24, height: 24 })),
        children && (React.createElement("div", { className: css$7.tooltip },
            React.createElement("span", null, children)))));
};

var css$8 = ".index-module_container__21j-9 {\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 8px);\n  margin: 0 -4px; }\n\n.index-module_item__2Jnk8 {\n  margin: 0;\n  flex-grow: 0;\n  padding: 4px; }\n  .index-module_item__2Jnk8.index-module_grid-xs-true__2570h {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-auto__1DA15 {\n    flex-basis: auto;\n    flex-grow: 0;\n    max-width: none; }\n  .index-module_item__2Jnk8.index-module_grid-xs-1__2RMNB {\n    max-width: 8.33333%;\n    flex-grow: 0;\n    flex-basis: 8.33333%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-2__2DpIJ {\n    max-width: 16.66667%;\n    flex-grow: 0;\n    flex-basis: 16.66667%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-3__3Jcu6 {\n    max-width: 25%;\n    flex-grow: 0;\n    flex-basis: 25%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-4__20ui6 {\n    max-width: 33.33333%;\n    flex-grow: 0;\n    flex-basis: 33.33333%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-5__wBECJ {\n    max-width: 41.66667%;\n    flex-grow: 0;\n    flex-basis: 41.66667%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-6__2aEcd {\n    max-width: 50%;\n    flex-grow: 0;\n    flex-basis: 50%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-7__3bUMi {\n    max-width: 58.33333%;\n    flex-grow: 0;\n    flex-basis: 58.33333%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-8__1gNoe {\n    max-width: 66.66667%;\n    flex-grow: 0;\n    flex-basis: 66.66667%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-9__3SVi6 {\n    max-width: 75%;\n    flex-grow: 0;\n    flex-basis: 75%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-10__3W1uP {\n    max-width: 83.33333%;\n    flex-grow: 0;\n    flex-basis: 83.33333%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-11__3Pbz7 {\n    max-width: 91.66667%;\n    flex-grow: 0;\n    flex-basis: 91.66667%; }\n  .index-module_item__2Jnk8.index-module_grid-xs-12__26caM {\n    max-width: 100%;\n    flex-grow: 0;\n    flex-basis: 100%; }\n\n.index-module_zeroMinWidth__1c9z8 {\n  min-width: 0; }\n\n/* Styles applied to the root element if `direction=\"column\"`. */\n.index-module_direction-xs-column__k6BY1 {\n  flex-direction: column; }\n\n/* Styles applied to the root element if `direction=\"column-reverse\"`. */\n.index-module_direction-xs-column-reverse__2fjWD {\n  flex-direction: column-reverse; }\n\n/* Styles applied to the root element if `direction=\"rwo-reverse\"`. */\n.index-module_direction-xs-row-reverse__2hJxt {\n  flex-direction: row-reverse; }\n\n/* Styles applied to the root element if `wrap=\"nowrap\"`. */\n.index-module_wrap-xs-nowrap__IxvYY {\n  flex-wrap: nowrap; }\n\n/* Styles applied to the root element if `wrap=\"reverse\"`. */\n.index-module_wrap-xs-wrap-reverse__2hUZ1 {\n  flex-wrap: wrap-reverse; }\n\n/* Styles applied to the root element if `alignItems=\"center\"`. */\n.index-module_align-items-xs-center__2LPxP {\n  align-items: center; }\n\n/* Styles applied to the root element if `alignItems=\"center\"`. */\n.index-module_align-items-xs-center__2LPxP {\n  align-items: center; }\n\n/* Styles applied to the root element if `alignItems=\"flex-start\"`. */\n.index-module_align-items-xs-flex-start__3-aHB {\n  align-items: flex-start; }\n\n/* Styles applied to the root element if `alignItems=\"flex-end\"`. */\n.index-module_align-items-xs-flex-end__YZmCk {\n  align-items: flex-end; }\n\n/* Styles applied to the root element if `alignItems=\"baseline\"`. */\n.index-module_align-items-xs-baseline__2cQ7t {\n  align-items: baseline; }\n\n/* Styles applied to the root element if `alignContent=\"center\"`. */\n.index-module_align-content-xs-center__dqqLa {\n  align-content: center; }\n\n/* Styles applied to the root element if `alignContent=\"flex-start\"`. */\n.index-module_align-content-xs-flex-start__8L2e3 {\n  align-content: flex-start; }\n\n/* Styles applied to the root element if `alignContent=\"flex-end\"`. */\n.index-module_align-content-xs-flex-end__S9cGv {\n  align-content: flex-end; }\n\n/* Styles applied to the root element if `alignContent=\"space-between\"`. */\n.index-module_align-content-xs-space-between__2swH9 {\n  align-content: space-between; }\n\n/* Styles applied to the root element if `alignContent=\"space-around\"`. */\n.index-module_align-content-xs-space-around__2ruC0 {\n  align-content: space-around; }\n\n/* Styles applied to the root element if `justify=\"center\"`. */\n.index-module_justify-xs-center__1YpNq {\n  justify-content: center; }\n\n/* Styles applied to the root element if `justify=\"flex-end\"`. */\n.index-module_justify-xs-flex-end__1t1nc {\n  justify-content: flex-end; }\n\n/* Styles applied to the root element if `justify=\"space-between\"`. */\n.index-module_justify-xs-space-between__uAD-p {\n  justify-content: space-between; }\n\n/* Styles applied to the root element if `justify=\"space-around\"`. */\n.index-module_justify-xs-space-around__7eHOd {\n  justify-content: space-around; }\n\n/* Styles applied to the root element if `justify=\"space-evenly\"`. */\n.index-module_justify-xs-space-evenly__T28v_ {\n  justify-content: space-evenly; }\n";
var css$9 = {"container":"index-module_container__21j-9","item":"index-module_item__2Jnk8","grid-xs-true":"index-module_grid-xs-true__2570h","grid-xs-auto":"index-module_grid-xs-auto__1DA15","grid-xs-1":"index-module_grid-xs-1__2RMNB","grid-xs-2":"index-module_grid-xs-2__2DpIJ","grid-xs-3":"index-module_grid-xs-3__3Jcu6","grid-xs-4":"index-module_grid-xs-4__20ui6","grid-xs-5":"index-module_grid-xs-5__wBECJ","grid-xs-6":"index-module_grid-xs-6__2aEcd","grid-xs-7":"index-module_grid-xs-7__3bUMi","grid-xs-8":"index-module_grid-xs-8__1gNoe","grid-xs-9":"index-module_grid-xs-9__3SVi6","grid-xs-10":"index-module_grid-xs-10__3W1uP","grid-xs-11":"index-module_grid-xs-11__3Pbz7","grid-xs-12":"index-module_grid-xs-12__26caM","zeroMinWidth":"index-module_zeroMinWidth__1c9z8","direction-xs-column":"index-module_direction-xs-column__k6BY1","direction-xs-column-reverse":"index-module_direction-xs-column-reverse__2fjWD","direction-xs-row-reverse":"index-module_direction-xs-row-reverse__2hJxt","wrap-xs-nowrap":"index-module_wrap-xs-nowrap__IxvYY","wrap-xs-wrap-reverse":"index-module_wrap-xs-wrap-reverse__2hUZ1","align-items-xs-center":"index-module_align-items-xs-center__2LPxP","align-items-xs-flex-start":"index-module_align-items-xs-flex-start__3-aHB","align-items-xs-flex-end":"index-module_align-items-xs-flex-end__YZmCk","align-items-xs-baseline":"index-module_align-items-xs-baseline__2cQ7t","align-content-xs-center":"index-module_align-content-xs-center__dqqLa","align-content-xs-flex-start":"index-module_align-content-xs-flex-start__8L2e3","align-content-xs-flex-end":"index-module_align-content-xs-flex-end__S9cGv","align-content-xs-space-between":"index-module_align-content-xs-space-between__2swH9","align-content-xs-space-around":"index-module_align-content-xs-space-around__2ruC0","justify-xs-center":"index-module_justify-xs-center__1YpNq","justify-xs-flex-end":"index-module_justify-xs-flex-end__1t1nc","justify-xs-space-between":"index-module_justify-xs-space-between__uAD-p","justify-xs-space-around":"index-module_justify-xs-space-around__7eHOd","justify-xs-space-evenly":"index-module_justify-xs-space-evenly__T28v_"};
styleInject(css$8);

var Grid = function (_a) {
    var _b;
    var container = _a.container, item = _a.item, zeroMinWidth = _a.zeroMinWidth, spacing = _a.spacing, direction = _a.direction, wrap = _a.wrap, alignItems = _a.alignItems, alignContent = _a.alignContent, justify = _a.justify, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, children = _a.children;
    var className = classnames((_b = {},
        _b[css$9.container] = container,
        _b[css$9.item] = item,
        _b[css$9.zeroMinWidth] = zeroMinWidth,
        _b[css$9["spacing-xs-" + String(spacing)]] = container && spacing !== 0,
        _b[css$9["direction-xs-" + String(direction)]] = direction !== Grid.defaultProps.direction,
        _b[css$9["wrap-xs-" + String(wrap)]] = wrap !== Grid.defaultProps.wrap,
        _b[css$9["align-items-xs-" + String(alignItems)]] = alignItems !== Grid.defaultProps.alignItems,
        _b[css$9["align-content-xs-" + String(alignContent)]] = alignContent !== Grid.defaultProps.alignContent,
        _b[css$9["justify-xs-" + String(justify)]] = justify !== Grid.defaultProps.justify,
        _b[css$9["grid-xs-" + String(xs)]] = xs !== false,
        _b[css$9["grid-sm-" + String(sm)]] = sm !== false,
        _b[css$9["grid-md-" + String(md)]] = md !== false,
        _b[css$9["grid-lg-" + String(lg)]] = lg !== false,
        _b[css$9["grid-xl-" + String(xl)]] = xl !== false,
        _b));
    return React.createElement("div", { className: className }, children);
};
Grid.propTypes = {};
Grid.defaultProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    component: 'div',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    lg: false,
    md: false,
    sm: false,
    spacing: 0,
    wrap: 'wrap',
    xl: false,
    xs: false,
    zeroMinWidth: false,
};

var css$a = ".Input-module_root__3BZut {\n  position: relative;\n  display: flex;\n  height: 56px;\n  will-change: opacity, transform, color; }\n  .Input-module_root__3BZut.Input-module_disabled__1NbBs {\n    opacity: 0.36; }\n\n.Input-module_input__1qEAK {\n  align-self: flex-end;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 12px 32px 14px;\n  border-radius: 0;\n  border: none;\n  background: none;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: #fff;\n  caret-color: #b280f9; }\n  .Input-module_input__1qEAK:-webkit-autofill {\n    -webkit-animation-name: Input-module_autofill__29mOs;\n    -webkit-animation-fill-mode: both; }\n  .Input-module_input__1qEAK::placeholder {\n    opacity: 0;\n    color: rgba(150, 131, 178, 0.48); }\n  .Input-module_input__1qEAK:focus ~ .Input-module_label__1EkKw, .Input-module_input__1qEAK.Input-module_active__3Rgv5 ~ .Input-module_label__1EkKw {\n    transform: translateY(-160%) scale(0.75);\n    max-width: 133.33333%;\n    text-overflow: clip; }\n  .Input-module_input__1qEAK:focus::placeholder, .Input-module_input__1qEAK.Input-module_active__3Rgv5::placeholder {\n    opacity: 1; }\n  .Input-module_input__1qEAK:focus ~ .Input-module_label__1EkKw {\n    color: rgba(255, 255, 255, 0.87); }\n  .Input-module_input__1qEAK:not(:focus).Input-module_active__3Rgv5 ~ .Input-module_label__1EkKw {\n    color: rgba(184, 168, 206, 0.87); }\n  .Input-module_input__1qEAK:not(:focus).Input-module_error__3RK_4 ~ .Input-module_label__1EkKw, .Input-module_input__1qEAK.Input-module_error__3RK_4 ~ .Input-module_label__1EkKw {\n    color: #ff618b; }\n\n.Input-module_outline__1ZOO3 {\n  display: flex;\n  position: absolute;\n  right: 0;\n  left: 0;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none; }\n  .Input-module_outline__1ZOO3.Input-module_notched__1qvpo .Input-module_leading__amYHU {\n    border-color: #d3b7fb;\n    border-width: 2px; }\n  .Input-module_outline__1ZOO3.Input-module_notched__1qvpo .Input-module_notch__1wYke {\n    padding-left: 0;\n    padding-right: 8px;\n    border-top: none;\n    border-color: #d3b7fb;\n    border-width: 2px; }\n  .Input-module_outline__1ZOO3.Input-module_notched__1qvpo .Input-module_trailing__3I_SZ {\n    border-color: #d3b7fb;\n    border-width: 2px; }\n  .Input-module_outline__1ZOO3.Input-module_error__3RK_4 .Input-module_leading__amYHU {\n    border-color: #ff618b; }\n  .Input-module_outline__1ZOO3.Input-module_error__3RK_4 .Input-module_notch__1wYke {\n    border-color: #ff618b; }\n  .Input-module_outline__1ZOO3.Input-module_error__3RK_4 .Input-module_trailing__3I_SZ {\n    border-color: #ff618b; }\n\n.Input-module_leading__amYHU,\n.Input-module_notch__1wYke,\n.Input-module_trailing__3I_SZ {\n  height: 100%;\n  transition: border 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  pointer-events: none; }\n\n.Input-module_leading__amYHU {\n  border-radius: 4px 0 0 4px;\n  border-left: 1px solid;\n  border-color: #a38fc0;\n  border-right: none;\n  width: 21px; }\n\n.Input-module_notch__1wYke {\n  flex: 0 0 auto;\n  width: 0;\n  max-width: calc(100% - 32px * 2);\n  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1), border 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  border-top: none;\n  border-color: #a38fc0; }\n\n.Input-module_trailing__3I_SZ {\n  border-radius: 0 4px 4px 0;\n  flex-grow: 1;\n  border-left: none;\n  border-right: 1px solid;\n  border-color: #a38fc0; }\n\n.Input-module_label__1EkKw {\n  display: inline-block;\n  position: absolute;\n  bottom: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  will-change: transform;\n  right: auto;\n  left: 32px;\n  color: #9683b2;\n  top: 21px;\n  pointer-events: none;\n  transform-origin: left top;\n  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); }\n\n@-webkit-keyframes Input-module_autofill__29mOs {\n  to {\n    color: #fff;\n    background: transparent;\n    font-family: 'Rubik', sans-serif; } }\n";
var css$b = {"root":"Input-module_root__3BZut","disabled":"Input-module_disabled__1NbBs","input":"Input-module_input__1qEAK","autofill":"Input-module_autofill__29mOs","label":"Input-module_label__1EkKw","active":"Input-module_active__3Rgv5","error":"Input-module_error__3RK_4","outline":"Input-module_outline__1ZOO3","notched":"Input-module_notched__1qvpo","leading":"Input-module_leading__amYHU","notch":"Input-module_notch__1wYke","trailing":"Input-module_trailing__3I_SZ"};
styleInject(css$a);

var NotchedOutline = function (_a) {
    var _b;
    var notched = _a.notched, labelWidth = _a.labelWidth, filled = _a.filled, error = _a.error;
    var classes = (_b = {},
        _b[css$b.outline] = true,
        _b[css$b.notched] = notched,
        _b[css$b.error] = error,
        _b);
    return (React.createElement("div", { className: classnames(classes) },
        React.createElement("div", { className: css$b.leading }),
        React.createElement("div", { className: css$b.notch, style: { width: notched || filled ? labelWidth : 0 } }),
        React.createElement("div", { className: css$b.trailing })));
};

var Input = function (_a) {
    var _b, _c;
    var label = _a.label, disabled = _a.disabled, onFocus = _a.onFocus, onBlur = _a.onBlur, value = _a.value, _d = _a.error, error = _d === void 0 ? false : _d, postfix = _a.postfix, props = __rest(_a, ["label", "disabled", "onFocus", "onBlur", "value", "error", "postfix"]);
    var labelRef = useRef(null);
    var _e = useState(Boolean(value)), focused = _e[0], setFocused = _e[1];
    var _f = useState(0), labelWidth = _f[0], setLabelWidth = _f[1];
    var onFocusHandler = function (e) {
        setFocused(true);
        onFocus && onFocus(e);
    };
    var onBlurHandler = function (e) {
        setFocused(false);
        onBlur && onBlur(e);
    };
    useEffect(function () {
        setLabelWidth(labelRef && labelRef.current && labelRef.current.offsetWidth > 0
            ? labelRef.current.offsetWidth * 0.75 + 22
            : 0);
    }, []);
    var rootClasses = (_b = {},
        _b[css$b.root] = true,
        _b[css$b.disabled] = disabled,
        _b);
    var inputClasses = (_c = {},
        _c[css$b.input] = true,
        _c[css$b.active] = Boolean(value),
        _c[css$b.error] = error,
        _c);
    return (React.createElement("label", { className: classnames(rootClasses) },
        React.createElement("input", __assign({ onFocus: onFocusHandler, onBlur: onBlurHandler, className: classnames(inputClasses), disabled: disabled, value: value }, props)),
        label && (React.createElement("div", { ref: labelRef, className: classnames(css$b.label) }, label)),
        React.createElement(NotchedOutline, { error: error, notched: focused, filled: Boolean(value), labelWidth: labelWidth }),
        postfix && postfix()));
};
Input.defaultProps = {
    disabled: false,
    error: false,
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 =
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

const SvgBlack = props => React.createElement("svg", _extends$2({
  viewBox: "0 0 255 73"
}, props), _ref$2);

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var _ref$3 =
/*#__PURE__*/
React.createElement("path", {
  fill: "#0C0417",
  fillRule: "evenodd",
  d: "M46 92C20.595 92 0 71.405 0 46S20.595 0 46 0s46 20.595 46 46-20.595 46-46 46zm0-4c23.196 0 42-18.804 42-42S69.196 4 46 4 4 22.804 4 46s18.804 42 42 42zm-6.5-4.553l.703-3.938c1.971.352 3.982.53 6.016.53 18.777 0 34-15.222 34-34a33.848 33.848 0 0 0-3.578-15.198l3.577-1.791c2.619 5.23 4 11.013 4 16.99 0 20.986-17.012 38-38 38-2.27 0-4.515-.2-6.718-.593zM46 8v4c-13.935 0-26.301 8.461-31.485 21.142l-3.703-1.513C16.606 17.456 30.426 8 46 8zm5.301 67.533l-.702-3.938C62.906 69.399 72 58.647 72 46c0-10.516-6.3-19.872-15.809-23.927l1.57-3.68C68.73 23.073 76 33.867 76 46c0 14.593-10.491 26.998-24.699 29.533zM46 16v4c-14.36 0-26 11.64-26 26 0 8.935 4.54 17.092 11.907 21.853l-2.171 3.36C21.24 65.722 16 56.307 16 46c0-16.569 13.431-30 30-30zm0 8v4c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18h4c0 12.15-9.85 22-22 22s-22-9.85-22-22 9.85-22 22-22zm12.332 23.51s-2.738 2.823-7.61 5.966c-4.872 3.143-8.16 4.312-8.16 4.312-1.457.63-2.81-.194-3.006-1.808 0 0-.556-3.227-.556-9.988 0-6.761.559-10.05.559-10.05.182-1.614 1.519-2.372 2.957-1.693 0 0 3.044 1.26 8.206 4.589 5.161 3.33 7.556 5.637 7.556 5.637.945.813.962 2.18.054 3.035z"
});

const SvgBlackS = props => React.createElement("svg", _extends$3({
  viewBox: "0 0 92 92"
}, props), _ref$3);

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var _ref$4 =
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

const SvgColorBlack = props => React.createElement("svg", _extends$4({
  viewBox: "0 0 255 73"
}, props), _ref$4);

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var _ref$5 =
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

const SvgColorBlackS = props => React.createElement("svg", _extends$5({
  viewBox: "0 0 92 92"
}, props), _ref$5);

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var _ref$6 =
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

const SvgColorWhite = props => React.createElement("svg", _extends$6({
  viewBox: "0 0 255 73"
}, props), _ref$6);

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var _ref$7 =
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

const SvgColorWhiteS = props => React.createElement("svg", _extends$7({
  viewBox: "0 0 92 92"
}, props), _ref$7);

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var _ref$8 =
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

const SvgWhite = props => React.createElement("svg", _extends$8({
  viewBox: "0 0 255 73"
}, props), _ref$8);

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var _ref$9 =
/*#__PURE__*/
React.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  d: "M46 92C20.595 92 0 71.405 0 46S20.595 0 46 0s46 20.595 46 46-20.595 46-46 46zm0-4c23.196 0 42-18.804 42-42S69.196 4 46 4 4 22.804 4 46s18.804 42 42 42zm-6.5-4.553l.703-3.938c1.971.352 3.982.53 6.016.53 18.777 0 34-15.222 34-34a33.848 33.848 0 0 0-3.578-15.198l3.577-1.791c2.619 5.23 4 11.013 4 16.99 0 20.986-17.012 38-38 38-2.27 0-4.515-.2-6.718-.593zM46 8v4c-13.935 0-26.301 8.461-31.485 21.142l-3.703-1.513C16.606 17.456 30.426 8 46 8zm5.301 67.533l-.702-3.938C62.906 69.399 72 58.647 72 46c0-10.516-6.3-19.872-15.809-23.927l1.57-3.68C68.73 23.073 76 33.867 76 46c0 14.593-10.491 26.998-24.699 29.533zM46 16v4c-14.36 0-26 11.64-26 26 0 8.935 4.54 17.092 11.907 21.853l-2.171 3.36C21.24 65.722 16 56.307 16 46c0-16.569 13.431-30 30-30zm0 8v4c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18h4c0 12.15-9.85 22-22 22s-22-9.85-22-22 9.85-22 22-22zm12.332 23.51s-2.738 2.823-7.61 5.966c-4.872 3.143-8.16 4.312-8.16 4.312-1.457.63-2.81-.194-3.006-1.808 0 0-.556-3.227-.556-9.988 0-6.761.559-10.05.559-10.05.182-1.614 1.519-2.372 2.957-1.693 0 0 3.044 1.26 8.206 4.589 5.161 3.33 7.556 5.637 7.556 5.637.945.813.962 2.18.054 3.035z"
});

const SvgWhiteS = props => React.createElement("svg", _extends$9({
  viewBox: "0 0 92 92"
}, props), _ref$9);

var LOGOS = {
    black: SvgBlack,
    blacks: SvgBlackS,
    colorBlack: SvgColorBlack,
    colorBlacks: SvgColorBlackS,
    colorWhite: SvgColorWhite,
    colorWhites: SvgColorWhiteS,
    white: SvgWhite,
    whites: SvgWhiteS,
};
var Logo = function (_a) {
    var type = _a.type, short = _a.short, width = _a.width, height = _a.height;
    var Comp = LOGOS["" + type + (short ? 's' : '')];
    return React.createElement(Comp, __assign({}, width && { width: width }, height && { height: height }));
};
Logo.defaultProps = {
    type: 'colorBlack',
    short: false,
};

var css$c = ".Modal-module_modal__FqeFw {\n  border-radius: 24px;\n  margin: auto;\n  z-index: 1;\n  position: relative; }\n\n.Modal-module_header__at9sT {\n  background: #4b1f8c;\n  border-radius: 24px 24px 0 0;\n  padding: 20px 48px;\n  color: rgba(255, 255, 255, 0.64); }\n  .Modal-module_header__at9sT:empty {\n    padding: 18px 48px; }\n\n.Modal-module_body__285R0 {\n  padding: 48px;\n  background-image: linear-gradient(-180deg, #290f55 0%, #1b0a33 100%);\n  border-radius: 0 0 24px 24px; }\n\n.Modal-module_close__3VJL0 {\n  position: absolute;\n  background: none;\n  border: none;\n  right: 48px;\n  top: 26px; }\n";
var css$d = {"modal":"Modal-module_modal__FqeFw","header":"Modal-module_header__at9sT","body":"Modal-module_body__285R0","close":"Modal-module_close__3VJL0"};
styleInject(css$c);

function _extends$a() {
  _extends$a = Object.assign || function (target) {
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

  return _extends$a.apply(this, arguments);
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
    var props = _extends$a({}, this.props);

    delete props.classNames;
    return React.createElement(Transition, _extends$a({}, props, {
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
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends$a({}, Transition.propTypes, {
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
        var children = _extends$a({}, state.children);

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

var Overlay = function (_a) {
    var active = _a.active, children = _a.children, onClick = _a.onClick;
    var handleInnerClick = function (event) {
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

var Modal = function (_a) {
    var isOpen = _a.isOpen, close = _a.close, header = _a.header, children = _a.children, _b = _a.shouldOverlayClose, shouldOverlayClose = _b === void 0 ? true : _b, hideCloseButton = _a.hideCloseButton;
    var handleClickOverlay = function () {
        if (shouldOverlayClose) {
            close();
        }
    };
    return (React.createElement(Overlay, { active: isOpen, onClick: handleClickOverlay },
        React.createElement("div", { className: css$d.modal },
            !hideCloseButton && (React.createElement("button", { className: css$d.close, type: "button", onClick: close },
                React.createElement(Icon, { name: "close", width: 20, height: 20 }))),
            React.createElement("div", { className: css$d.header }, header && header()),
            React.createElement("div", { className: css$d.body }, children))));
};

var RadioContext = createContext({});
var RadioContextProvider = RadioContext.Provider;

var css$g = ".Radio-module_group__ubTsy {\n  display: flex; }\n  .Radio-module_group__ubTsy.Radio-module_vertical__1du-F {\n    flex-direction: column; }\n    .Radio-module_group__ubTsy.Radio-module_vertical__1du-F > *:not(:last-child) {\n      margin-bottom: 5px; }\n  .Radio-module_group__ubTsy.Radio-module_horizontal__2G6VE > *:not(:last-child) {\n    margin-right: 25px; }\n\n.Radio-module_root__3ATGC {\n  cursor: pointer;\n  display: flex;\n  align-items: center; }\n\n.Radio-module_input__2G_Xm {\n  height: 1px;\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n  width: 1px; }\n  .Radio-module_input__2G_Xm:checked + .Radio-module_radiobox__2MLPy::before {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1); }\n\n.Radio-module_radiobox__2MLPy {\n  background-color: #0c0417;\n  border: 4px solid #3f2a5d;\n  border-radius: 50%;\n  height: 24px;\n  margin-right: 12px;\n  position: relative;\n  width: 24px; }\n  .Radio-module_radiobox__2MLPy::before {\n    background: #fd9369;\n    border-radius: 50%;\n    content: '';\n    display: block;\n    height: 16px;\n    left: 50%;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) scale(0.7);\n    transition: 0.15s ease-in-out;\n    width: 16px; }\n\n.Radio-module_label__1JwFR {\n  color: #e1ccff;\n  font-size: 14px;\n  line-height: 24px; }\n";
var css$h = {"group":"Radio-module_group__ubTsy","vertical":"Radio-module_vertical__1du-F","horizontal":"Radio-module_horizontal__2G6VE","root":"Radio-module_root__3ATGC","input":"Radio-module_input__2G_Xm","radiobox":"Radio-module_radiobox__2MLPy","label":"Radio-module_label__1JwFR"};
styleInject(css$g);

var Radio = function (_a) {
    var value = _a.value, children = _a.children, disabled = _a.disabled;
    var _b = useContext(RadioContext), selected = _b.selected, onChange = _b.onChange, name = _b.name, disabledGroup = _b.disabled;
    return (React.createElement("label", { className: css$h.root },
        React.createElement("input", { type: "radio", value: value, disabled: disabled || disabledGroup, className: css$h.input, name: name, checked: selected === value, onChange: onChange }),
        React.createElement("div", { className: css$h.radiobox }),
        children ? React.createElement("div", { className: css$h.label }, children) : null));
};

var RadioGroup = function (_a) {
    var defaultSelected = _a.defaultSelected, name = _a.name, onChange = _a.onChange, _b = _a.disabled, disabled = _b === void 0 ? false : _b, children = _a.children, _c = _a.direction, direction = _c === void 0 ? 'vertical' : _c;
    var _d = useState(defaultSelected), selected = _d[0], setSelected = _d[1];
    var onChangeHandle = function (e) {
        var prevSelected = selected;
        setSelected(e.target.value);
        try {
            onChange(e.target.value);
        }
        catch (e) {
            setSelected(prevSelected);
            throw e;
        }
    };
    return (React.createElement(RadioContextProvider, { value: { name: name, selected: selected, onChange: onChangeHandle, disabled: disabled } },
        React.createElement("div", { className: classnames(css$h.group, css$h[direction]) }, children)));
};
RadioGroup.defaultProps = {
    direction: 'vertical',
    disabled: false,
};
RadioGroup.RadioBtn = Radio;

var css$i = ".Typography-module_display1__3ERHT {\n  font-size: 92px;\n  font-weight: 300;\n  letter-spacing: -1.2px;\n  line-height: 96px; }\n  .Typography-module_display1__3ERHT.Typography-module_light__3k-UC {\n    color: #e1ccff; }\n  .Typography-module_display1__3ERHT.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_display1__3ERHT.Typography-module_white__2VjCC {\n    color: #fff; }\n  .Typography-module_display1__3ERHT.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n\n.Typography-module_display2__37S-e {\n  font-size: 64px;\n  font-weight: 300;\n  letter-spacing: -0.6px;\n  line-height: 72px; }\n  .Typography-module_display2__37S-e.Typography-module_light__3k-UC {\n    color: rgba(225, 204, 255, 0.87); }\n  .Typography-module_display2__37S-e.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.87); }\n  .Typography-module_display2__37S-e.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.87); }\n  .Typography-module_display2__37S-e.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.87); }\n\n.Typography-module_display3__2p1iT {\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: -0.04px;\n  line-height: 56px; }\n  .Typography-module_display3__2p1iT.Typography-module_light__3k-UC {\n    color: rgba(225, 204, 255, 0.76); }\n  .Typography-module_display3__2p1iT.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.76); }\n  .Typography-module_display3__2p1iT.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.76); }\n  .Typography-module_display3__2p1iT.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.76); }\n\n.Typography-module_title__f1Z0p {\n  font-size: 32px;\n  letter-spacing: -0.1px;\n  line-height: 40px; }\n  .Typography-module_title__f1Z0p.Typography-module_light__3k-UC {\n    color: #b7a5d2; }\n  .Typography-module_title__f1Z0p.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_title__f1Z0p.Typography-module_white__2VjCC {\n    color: #fff; }\n  .Typography-module_title__f1Z0p.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n\n.Typography-module_smallTitle__3iyYJ {\n  font-size: 24px;\n  font-weight: bold;\n  left: 36px;\n  letter-spacing: 0.8px; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_light__3k-UC {\n    color: #ccb1f2; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_white__2VjCC {\n    color: #fff; }\n  .Typography-module_smallTitle__3iyYJ.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n\n.Typography-module_subtitle__38tnJ {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: -0.1px;\n  line-height: 32px;\n  text-transform: uppercase; }\n  .Typography-module_subtitle__38tnJ.Typography-module_light__3k-UC {\n    color: #62517a; }\n  .Typography-module_subtitle__38tnJ.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.36); }\n  .Typography-module_subtitle__38tnJ.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.36); }\n  .Typography-module_subtitle__38tnJ.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.92); }\n\n.Typography-module_subtitleAlt__12I-j {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: -0.1px;\n  line-height: 32px; }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_light__3k-UC {\n    color: #a287ca; }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.76); }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.76); }\n  .Typography-module_subtitleAlt__12I-j.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.76); }\n\n.Typography-module_body__2Sz8H {\n  letter-spacing: 0.12px;\n  line-height: 24px; }\n  .Typography-module_body__2Sz8H.Typography-module_light__3k-UC {\n    color: #9683b2; }\n  .Typography-module_body__2Sz8H.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.5); }\n  .Typography-module_body__2Sz8H.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.94); }\n  .Typography-module_body__2Sz8H.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.72); }\n\n.Typography-module_bodyAlt__7pfPX {\n  font-weight: 500;\n  letter-spacing: 0.12px;\n  line-height: 24px; }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_light__3k-UC {\n    color: #b79cdd; }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.86); }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.94); }\n  .Typography-module_bodyAlt__7pfPX.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.92); }\n\n.Typography-module_smallBody__2UuEv {\n  font-size: 14px;\n  letter-spacing: 0.28px;\n  line-height: 24px; }\n  .Typography-module_smallBody__2UuEv.Typography-module_light__3k-UC {\n    color: #aa90d0; }\n  .Typography-module_smallBody__2UuEv.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.56); }\n  .Typography-module_smallBody__2UuEv.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.92); }\n  .Typography-module_smallBody__2UuEv.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.72); }\n\n.Typography-module_smallBodyAlt__3L0vg {\n  font-size: 14px;\n  letter-spacing: 0.28px;\n  line-height: 24px; }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_light__3k-UC {\n    color: rgba(225, 204, 255, 0.76); }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.76); }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.87); }\n  .Typography-module_smallBodyAlt__3L0vg.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.82); }\n\n.Typography-module_caption__Rr-x4 {\n  font-size: 12px;\n  letter-spacing: 0.06px;\n  line-height: 20px; }\n  .Typography-module_caption__Rr-x4.Typography-module_light__3k-UC {\n    color: rgba(184, 168, 206, 0.72); }\n  .Typography-module_caption__Rr-x4.Typography-module_dark__1H6tC {\n    color: rgba(12, 4, 23, 0.5); }\n  .Typography-module_caption__Rr-x4.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.87); }\n  .Typography-module_caption__Rr-x4.Typography-module_primary__3JTMr {\n    color: rgba(253, 147, 105, 0.72); }\n\n.Typography-module_button__2PUzl {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.07px;\n  text-transform: uppercase; }\n  .Typography-module_button__2PUzl.Typography-module_light__3k-UC {\n    color: #e1ccff; }\n  .Typography-module_button__2PUzl.Typography-module_dark__1H6tC {\n    color: #0c0417; }\n  .Typography-module_button__2PUzl.Typography-module_white__2VjCC {\n    color: rgba(255, 255, 255, 0.92); }\n  .Typography-module_button__2PUzl.Typography-module_primary__3JTMr {\n    color: #fd9369; }\n";
var css$j = {"display1":"Typography-module_display1__3ERHT","light":"Typography-module_light__3k-UC","dark":"Typography-module_dark__1H6tC","white":"Typography-module_white__2VjCC","primary":"Typography-module_primary__3JTMr","display2":"Typography-module_display2__37S-e","display3":"Typography-module_display3__2p1iT","title":"Typography-module_title__f1Z0p","smallTitle":"Typography-module_smallTitle__3iyYJ","subtitle":"Typography-module_subtitle__38tnJ","subtitleAlt":"Typography-module_subtitleAlt__12I-j","body":"Typography-module_body__2Sz8H","bodyAlt":"Typography-module_bodyAlt__7pfPX","smallBody":"Typography-module_smallBody__2UuEv","smallBodyAlt":"Typography-module_smallBodyAlt__3L0vg","caption":"Typography-module_caption__Rr-x4","button":"Typography-module_button__2PUzl"};
styleInject(css$i);

var Typography = function (_a) {
    var _b = _a.tagName, Comp = _b === void 0 ? 'div' : _b, _c = _a.type, type = _c === void 0 ? 'body' : _c, _d = _a.theme, theme = _d === void 0 ? 'light' : _d, className = _a.className, props = __rest(_a, ["tagName", "type", "theme", "className"]);
    return (React.createElement(Comp, __assign({ className: classnames(css$j.root, css$j[type], theme && css$j[theme], className) }, props)));
};
Typography.defaultProps = {
    tagName: 'div',
    type: 'body',
    theme: 'light',
};

var index = {
    Button: Button,
    Card: Card,
    Checkbox: Checkbox,
    FieldAction: FieldAction,
    Grid: Grid,
    Icon: Icon,
    Input: Input,
    Logo: Logo,
    Modal: Modal,
    Radio: RadioGroup,
    Typography: Typography,
};

export default index;
export { Button, Card, Checkbox, FieldAction, Grid, Icon, Input, Logo, Modal, RadioGroup as Radio, Typography };
//# sourceMappingURL=index.es.js.map
