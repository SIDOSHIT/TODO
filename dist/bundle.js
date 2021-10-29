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

/***/ "./src/button/index.js":
/*!*****************************!*\
  !*** ./src/button/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Btn)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ \"./src/createElement.js\");\n\r\n\r\nclass Btn {\r\n    constructor(content, className, parent, position, classColor, classSize) {\r\n        this.content = content;\r\n        this.className = className;\r\n        this.parent = parent;\r\n        this.position = position;\r\n        this.classColor = classColor;\r\n        this.classSize = classSize;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo/./src/button/index.js?");

/***/ }),

/***/ "./src/code.js":
/*!*********************!*\
  !*** ./src/code.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _drawTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawTodos */ \"./src/drawTodos.js\");\nconst root = document.getElementById(\"root\");\n\n\n\nconst main_columns = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"columns\", root, \"afterbegin\");\nmain_columns.style.paddingTop = \"2em\";\nconst column = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"column\", main_columns, \"afterbegin\");\ncolumn.classList.add(\"is-half\");\ncolumn.classList.add(\"is-offset-one-quarter\");\nconst input = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", \"\", \"input\", column, \"afterbegin\");\nconst column2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"column\", main_columns, \"beforeEnd\");\nconst btn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", \"add\", \"button\", column2, \"beforeEnd\");\nconst toggle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", '', 'toggle', column2, \"beforeEnd\");\ntoggle.setAttribute(\"type\", \"checkbox\")\nbtn.classList.add(\"is-primary\");\nconst ol = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ol\", \"\", \"ol\", column, \"beforeend\"); // обертка списка\nol.style.margin = \"1em 0 0 2em\";\nol.setAttribute(\"type\", \"a\");\nlet todo = [];\nlet delete_btns = [];\n\nwindow.onload = () => {\n    if (localStorage.getItem(\"todo\")) {\n        todo = JSON.parse(localStorage.getItem('todo'))\n    }\n    if (todo) {\n        (0,_drawTodos__WEBPACK_IMPORTED_MODULE_1__.drawTodos)(todo, ol, delete_btns)\n    }\n}\n\nbtn.onclick = () => {\n    addTodo();\n};\n\ninput.onkeydown = (e) => {\n    if (e.code == \"Enter\") {\n        addTodo();\n    }\n};\n\nlet flag = false;\ntoggle.onchange = () => {\n    if (!flag) {\n        document.body.style.backgroundColor = \"black\";\n        flag = true\n    } else {\n        document.body.style.backgroundColor = \"white\";\n        flag = false;\n    }\n}\n\nfunction addTodo() {\n    if (input.value == \"\") {\n        return;\n    }\n    todo.push(input.value);\n    localStorage.setItem(\"todo\", JSON.stringify(todo))\n    ol.innerHTML = \"\";\n    input.value = \"\";\n    (0,_drawTodos__WEBPACK_IMPORTED_MODULE_1__.drawTodos)(todo, ol, delete_btns);\n}\n\n//# sourceURL=webpack://todo/./src/code.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(tag, content, className, parent, position) {\n    const el = document.createElement(tag);\n    el.innerText = content;\n    el.classList.add(className);\n    parent.insertAdjacentElement(position, el);\n    return el;\n}\n\n//# sourceURL=webpack://todo/./src/createElement.js?");

/***/ }),

/***/ "./src/drawTodos.js":
/*!**************************!*\
  !*** ./src/drawTodos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawTodos\": () => (/* binding */ drawTodos)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/button/index.js\");\n\n\n\nfunction drawTodos(todo, ol, delete_btns) {\n    todo.map((item, index) => {\n        let li = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", item, \"li\", ol, \"beforeend\");\n        li.style.marginTop = \"1em\";\n        li.setAttribute(\"key\", index);\n        let btn_delete = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n            \"button\",\n            \"\",\n            \"button\",\n            li,\n            \"beforeend\"\n        );\n        btn_delete.classList.add(\"is-danger\");\n        btn_delete.classList.add(\"is-small\");\n        btn_delete.style.marginLeft = \"3em\";\n        const bucket = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", \"\", \"mdi-bucket-outline\", btn_delete, \"beforeend\");\n        bucket.classList.add('mdi')\n        delete_btns = [];\n        delete_btns.push(btn_delete);\n        delete_btns.map((btn) => {\n            btn.onclick = () => {\n                const key = btn.parentNode.getAttribute(\"key\");\n                localStorage.setItem(\"todo\", JSON.stringify(todo))\n                todo.splice(key, 1);\n                btn.parentNode.remove();\n            };\n        });\n    });\n}\n\n//# sourceURL=webpack://todo/./src/drawTodos.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/code.js");
/******/ 	
/******/ })()
;