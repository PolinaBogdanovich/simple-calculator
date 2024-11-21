/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.calculator {\r\n    height: auto;\r\n    width: 100%;\r\n    max-width: 320px;\r\n    border-radius: 15px;\r\n    background-color: #535353;\r\n    color: white;\r\n    box-shadow: 10px 10px 25px #8b8b8b;\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    font-size: 30px;\r\n    margin: 65px auto;\r\n}\r\n\r\ninput {\r\n    background-color: #535353;\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    font-size: 50px;\r\n    color: white;\r\n    height: 100px;\r\n    width: 100%;\r\n    max-width: 320px;\r\n    border-top-right-radius: 15px;\r\n    border-top-left-radius: 15px;\r\n    text-align: right;\r\n    border: none;  \r\n    padding: 0 20px;\r\n}\r\n\r\n.btns {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.btn {\r\n    display: flex;\r\n    height: 80px;\r\n    background-color: #9c9c9c;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    border: 1px solid #535353;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.btn:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn:active {\r\n    opacity: 0.3;\r\n}\r\n\r\n.btn.color-action-right {\r\n    background-color: orange;\r\n}\r\n\r\n.btn.color-action-top {\r\n    background-color: #6e6e6e;\r\n}\r\n\r\n.btn.zero {\r\n    grid-column: span 2;\r\n    border-bottom-left-radius: 15px;\r\n}\r\n\r\n.btn.equals {\r\n    border-bottom-right-radius: 15px;\r\n}\r\n\r\n.themes {\r\n    display: flex;\r\n    padding: 12px 0 0 15px;\r\n    justify-content: flex-end;\r\n    margin-right: 12px;\r\n}\r\n\r\n.btn.color-theme {\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n}\r\n\r\n.btn.color-theme[data-theme=\"theme1\"] {\r\n    background-color: orange; \r\n}\r\n\r\n.btn.color-theme[data-theme=\"theme2\"] {\r\n    background-color: rgb(0, 157, 255);\r\n}\r\n\r\n.btn.color-theme[data-theme=\"theme3\"] {\r\n    background-color: rgb(191, 90, 106);\r\n}\r\n\r\n/*theme 2*/\r\n.calculator.theme2 .btn.color-action-right {\r\n    background-color: rgb(0, 157, 255);\r\n    color: white;\r\n    border-radius: 50%;\r\n}\r\n\r\n.calculator.theme2 .btn.color-action-top {\r\n    background-color: rgb(148, 176, 185);\r\n    border-radius: 50%;\r\n}\r\n\r\n.calculator.theme2 .btn.btn-input.zero {\r\n    border-radius: 45px;\r\n}\r\n\r\n.calculator.theme2 .btn.btn-input {\r\n    background-color: rgb(209, 209, 209);\r\n    color:#535353;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*theme 3*/\r\n.calculator.theme3 .btn.color-action-right {\r\n    height: 70px;\r\n    background-color: rgb(191, 90, 106);\r\n    border-radius: 30%;\r\n    border: none;\r\n}\r\n\r\n.calculator.theme3 .btn.color-action-top {\r\n    height: 70px;\r\n    background-color: rgb(198, 124, 136);\r\n    border-radius: 30%;\r\n    border: none;\r\n}\r\n\r\n.calculator.theme3 {\r\n    background-color: black;\r\n}\r\n\r\n.calculator.theme3 input {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.calculator.theme3 .btn.btn-input {\r\n    height: 70px;\r\n    border-radius: 20px;\r\n    border: none;\r\n}\r\n\r\n.calculator.theme3 .btns {\r\n    padding: 10px;\r\n    gap: 10px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/operations.js */ \"./src/js/operations.js\");\n/* harmony import */ var _js_themeSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/themeSelector.js */ \"./src/js/themeSelector.js\");\n\r\n\r\n\r\n\r\n_js_operations_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n_js_themeSelector_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n\n//# sourceURL=webpack://calc/./src/index.js?");

/***/ }),

/***/ "./src/js/operationType.js":
/*!*********************************!*\
  !*** ./src/js/operationType.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst OperationType = {\r\n    NONE: 'none',\r\n    PLUS: 'plus',\r\n    MINUS: 'minus',\r\n    DIVIDE: 'divide',\r\n    MULTIPLY: 'multiply',\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationType);\n\n//# sourceURL=webpack://calc/./src/js/operationType.js?");

/***/ }),

/***/ "./src/js/operations.js":
/*!******************************!*\
  !*** ./src/js/operations.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _operationType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operationType.js */ \"./src/js/operationType.js\");\n\r\n\r\nlet leftOperand;\r\nlet rightOperand;\r\nlet equalClickedLast;\r\nlet percentClickedLast;\r\nlet operationClickedLast;\r\nlet currentOperation;\r\n\r\nconst inputText = document.querySelector('input');\r\n\r\nconst reset = () => {\r\n    leftOperand = null;\r\n    rightOperand = null;\r\n    equalClickedLast = false;\r\n    percentClickedLast = false;\r\n    operationClickedLast = false;\r\n    currentOperation = _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].NONE;\r\n    inputText.value = '0';\r\n}\r\n\r\nconst getOperationSymbol = (operation) => {\r\n    switch (operation) {\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PLUS:\r\n            return '+';\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MINUS:\r\n            return '-';\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MULTIPLY:\r\n            return '×';\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIVIDE:\r\n            return '÷';\r\n    }\r\n}\r\n\r\nconst calculate = (left, right, operationType) => {\r\n    switch (operationType) {\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PLUS:\r\n            return left + right;\r\n\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MINUS:\r\n            return left - right;\r\n\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MULTIPLY:\r\n            return left * right;\r\n\r\n        case _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIVIDE:\r\n            return left / right;\r\n    }\r\n}\r\n\r\nconst setResult = (number) => {\r\n    if (!isNaN(number) && isFinite(number)) {\r\n        inputText.value = number;\r\n    }\r\n    else {\r\n        inputText.value = 'Error';\r\n    }\r\n}\r\n\r\nconst equalClick = () => {\r\n    if (!inputText.value.length) return;\r\n    if (leftOperand == null && !equalClickedLast) return;\r\n\r\n    operationClickedLast = false;\r\n\r\n    if (equalClickedLast) leftOperand = parseFloat(inputText.value);\r\n    else rightOperand = parseFloat(inputText.value);\r\n\r\n    const result = calculate(leftOperand, rightOperand, currentOperation);\r\n    setResult(result);\r\n\r\n    leftOperand = null;\r\n    equalClickedLast = true;\r\n\r\n    return result;\r\n}\r\n\r\nconst percentClick = () => {\r\n    if (!inputText.value.length) return;\r\n\r\n    operationClickedLast = false;\r\n\r\n    const operand = parseFloat(inputText.value);    \r\n\r\n    if (leftOperand == null) {\r\n        setResult(operand / 100);\r\n        percentClickedLast = true;\r\n        return;\r\n    }\r\n\r\n    rightOperand = operand;\r\n\r\n    let result;\r\n    if (currentOperation == _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PLUS || currentOperation == _operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MINUS) {\r\n        result = calculate(leftOperand, leftOperand * (rightOperand / 100), currentOperation);\r\n    }\r\n    else {\r\n        result = calculate(leftOperand, rightOperand / 100, currentOperation);\r\n    }\r\n    setResult(result);\r\n\r\n    leftOperand = null;\r\n    percentClickedLast = true;\r\n\r\n    return result;\r\n}\r\n\r\nconst operationClick = (operation) => {\r\n    if (operationClickedLast) return;\r\n    const input = parseFloat(inputText.value);\r\n\r\n    equalClickedLast = false;\r\n    percentClickedLast = false;\r\n\r\n    if (leftOperand == null) leftOperand = input;\r\n    else leftOperand = calculate(leftOperand, input, currentOperation);\r\n\r\n    inputText.value = getOperationSymbol(operation);\r\n    currentOperation = operation;\r\n\r\n    operationClickedLast = true;\r\n}\r\n\r\nconst revertClick = () => {\r\n    setResult(-parseFloat(inputText.value));\r\n}\r\n\r\nconst inputClick = (button) => {\r\n    operationClickedLast = false;\r\n\r\n    // if the last clicked button is \"=\" or \"%\", we need to clear input first\r\n    if (equalClickedLast || percentClickedLast) {\r\n        reset();\r\n    }\r\n\r\n    if (!parseFloat(inputText.value) && !inputText.value.includes('0.')) {\r\n        inputText.value = '';\r\n    }\r\n\r\n    inputText.value += button.getAttribute('value');\r\n\r\n    if (inputText.value == '.') {\r\n        inputText.value = '0.'\r\n    }\r\n};\r\n\r\nconst init = () => {\r\n    // when any digit or '.' is clicked\r\n    document.querySelectorAll('.btn.btn-input').forEach(button => {\r\n        button.addEventListener('click', () => inputClick(button));\r\n    });\r\n\r\n    // operations\r\n    document.querySelector('#operation-ac').addEventListener('click', reset);\r\n    document.querySelector('#operation-plus').addEventListener('click', () => operationClick(_operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PLUS));\r\n    document.querySelector('#operation-minus').addEventListener('click', () => operationClick(_operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MINUS));\r\n    document.querySelector('#operation-multiply').addEventListener('click', () => operationClick(_operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MULTIPLY));\r\n    document.querySelector('#operation-divide').addEventListener('click', () => operationClick(_operationType_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIVIDE));\r\n    document.querySelector('#operation-revert-sign').addEventListener('click', revertClick);\r\n    document.querySelector('#operation-perform').addEventListener('click', equalClick);\r\n    document.querySelector('#operation-percent').addEventListener('click', percentClick);\r\n\r\n    reset();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    init\r\n});\n\n//# sourceURL=webpack://calc/./src/js/operations.js?");

/***/ }),

/***/ "./src/js/themeSelector.js":
/*!*********************************!*\
  !*** ./src/js/themeSelector.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeThemeClick = (button) => {\r\n    const theme = button.getAttribute('data-theme');\r\n    const calculator = document.querySelector('.calculator');\r\n\r\n    calculator.classList.remove('theme1', 'theme2', 'theme3');\r\n    calculator.classList.add(theme);\r\n}\r\n\r\nconst init = () => {\r\n    document.querySelectorAll('.btn.color-theme').forEach(button => {\r\n        button.addEventListener('click', () => changeThemeClick(button));\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ init });\n\n//# sourceURL=webpack://calc/./src/js/themeSelector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;