/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from a\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2EuanMuanMiLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hLWRlbW8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgY3R4LmJvZHkgPSB7XHJcbiAgICBcIm1lc3NhZ2VcIjogXCJoZWxsbyBmcm9tIGFcIlxyXG4gIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQ0FBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLEdBQUcsRUFBRTtFQUM5QkEsR0FBRyxDQUFDQyxJQUFJLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDYixDQUFDO0FBQ0gsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from b\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2IuanMuanMiLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hLWRlbW8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN0eCl7XHJcbiAgY3R4LmJvZHkgPSB7XHJcbiAgICAgIFwibWVzc2FnZVwiOiBcImhlbGxvIGZyb20gYlwiXHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBU0MsR0FBRyxFQUFDO0VBQzVCQSxHQUFHLENBQUNDLElBQUksR0FBRztJQUNQLFNBQVMsRUFBRTtFQUNmLENBQUM7QUFDSCxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const routers = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\nconst cors = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\nconst {\n  koaBody\n} = __webpack_require__(/*! koa-body */ \"koa-body\");\nconst koaJson = __webpack_require__(/*! koa-json */ \"koa-json\");\nconst app = new Koa();\napp.use(koaBody());\napp.use(cors());\napp.use(koaJson({\n  pretty: false,\n  param: 'pretty'\n}));\napp.use(routers());\napp.listen(4000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFpQixDQUFDO0FBRTFDLE1BQU1DLEdBQUcsR0FBR0QsbUJBQU8sQ0FBQyxnQkFBSyxDQUFDO0FBQzFCLE1BQU1FLElBQUksR0FBR0YsbUJBQU8sQ0FBQyw0QkFBVyxDQUFDO0FBQ2pDLE1BQU07RUFBQ0c7QUFBTyxDQUFDLEdBQUdILG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUNyQyxNQUFNSSxPQUFPLEdBQUdKLG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUVuQyxNQUFNSyxHQUFHLEdBQUcsSUFBSUosR0FBRyxDQUFDLENBQUM7QUFFckJJLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2xCRSxHQUFHLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNmRyxHQUFHLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0VBQUNHLE1BQU0sRUFBRSxLQUFLO0VBQUVDLEtBQUssRUFBRTtBQUFRLENBQUMsQ0FBQyxDQUFDO0FBRWxESCxHQUFHLENBQUNDLEdBQUcsQ0FBQ1AsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUVsQk0sR0FBRyxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hLWRlbW8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXJzID0gcmVxdWlyZSgnLi9yb3V0ZXMvcm91dGVzJylcclxuXHJcbmNvbnN0IEtvYSA9IHJlcXVpcmUoJ2tvYScpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdAa29hL2NvcnMnKVxyXG5jb25zdCB7a29hQm9keX0gPSByZXF1aXJlKCdrb2EtYm9keScpXHJcbmNvbnN0IGtvYUpzb24gPSByZXF1aXJlKCdrb2EtanNvbicpXHJcblxyXG5jb25zdCBhcHAgPSBuZXcgS29hKClcclxuXHJcbmFwcC51c2Uoa29hQm9keSgpKVxyXG5hcHAudXNlKGNvcnMoKSlcclxuYXBwLnVzZShrb2FKc29uKHtwcmV0dHk6IGZhbHNlLCBwYXJhbTogJ3ByZXR0eSd9KSlcclxuXHJcbmFwcC51c2Uocm91dGVycygpKVxyXG5cclxuYXBwLmxpc3Rlbig0MDAwKSJdLCJuYW1lcyI6WyJyb3V0ZXJzIiwicmVxdWlyZSIsIktvYSIsImNvcnMiLCJrb2FCb2R5Iiwia29hSnNvbiIsImFwcCIsInVzZSIsInByZXR0eSIsInBhcmFtIiwibGlzdGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! @koa/router */ \"@koa/router\");\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL2FSb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFhLENBQUM7QUFDckMsTUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLGdDQUFVLENBQUM7QUFFN0IsTUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQU0sQ0FBQyxDQUFDO0FBRTNCRyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUVGLENBQUMsQ0FBQztBQUVuQkcsTUFBTSxDQUFDQyxPQUFPLEdBQUdILE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXMvYVJvdXRlci5qcz85MmJjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ0Brb2Evcm91dGVyJylcclxuY29uc3QgYSA9IHJlcXVpcmUoJy4uL2FwaS9hJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnL2EnLCBhKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiXSwibmFtZXMiOlsiUm91dGVyIiwicmVxdWlyZSIsImEiLCJyb3V0ZXIiLCJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! @koa/router */ \"@koa/router\");\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL2JSb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFhLENBQUM7QUFDckMsTUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLGdDQUFVLENBQUM7QUFFN0IsTUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQU0sQ0FBQyxDQUFDO0FBRTNCRyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUVGLENBQUMsQ0FBQztBQUVuQkcsTUFBTSxDQUFDQyxPQUFPLEdBQUdILE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXMvYlJvdXRlci5qcz8yZmU3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ0Brb2Evcm91dGVyJylcclxuY29uc3QgYiA9IHJlcXVpcmUoJy4uL2FwaS9iJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnL2InLCBiKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiXSwibmFtZXMiOlsiUm91dGVyIiwicmVxdWlyZSIsImIiLCJyb3V0ZXIiLCJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\nconst aroutes = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\nconst broutes = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\nmodule.exports = combineRoutes(aroutes, broutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsZ0RBQXFCLENBQUM7QUFFcEQsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLDBDQUFXLENBQUM7QUFDcEMsTUFBTUUsT0FBTyxHQUFHRixtQkFBTyxDQUFDLDBDQUFXLENBQUM7QUFFcENHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHTCxhQUFhLENBQzVCRSxPQUFPLEVBQ1BDLE9BQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYS1kZW1vLy4vc3JjL3JvdXRlcy9yb3V0ZXMuanM/NjQxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21iaW5lUm91dGVzID0gcmVxdWlyZSgna29hLWNvbWJpbmUtcm91dGVycycpXHJcblxyXG5jb25zdCBhcm91dGVzID0gcmVxdWlyZSgnLi9hUm91dGVyJylcclxuY29uc3QgYnJvdXRlcyA9IHJlcXVpcmUoJy4vYlJvdXRlcicpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSb3V0ZXMoXHJcbiAgYXJvdXRlcyxcclxuICBicm91dGVzXHJcbikiXSwibmFtZXMiOlsiY29tYmluZVJvdXRlcyIsInJlcXVpcmUiLCJhcm91dGVzIiwiYnJvdXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/cors");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/router");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-body");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-json");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;