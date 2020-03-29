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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/chirpstore.js":
/*!**********************************!*\
  !*** ./src/server/chirpstore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\r\nlet chirps = { nextid: 0 };\r\n\r\nif (fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"]('chirps.json')) {\r\n    chirps = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0__[\"readFileSync\"]('chirps.json'));\r\n}\r\n\r\nlet getChirps = () => {\r\n    return Object.assign({}, chirps); //create a copy and return it\r\n}\r\n\r\nlet getChirp = id => {\r\n    return Object.assign({}, chirps[id]); //create a copy and return it\r\n}\r\n\r\nlet createChirp = (chirp) => {\r\n    chirps[chirps.nextid++] = chirp;\r\n    writeChirps();\r\n};\r\n\r\nlet updateChirp = (id, chirp) => {\r\n    chirps[id] = chirp;\r\n    writeChirps();\r\n}\r\n\r\nlet deleteChirp = id => {\r\n    delete chirps[id];\r\n    writeChirps();\r\n}\r\n\r\nlet writeChirps = () => {\r\n    fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"]('chirps.json', JSON.stringify(chirps));\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    CreateChirp: createChirp,\r\n    DeleteChirp: deleteChirp,\r\n    GetChirps: getChirps,\r\n    GetChirp: getChirp,\r\n    UpdateChirp: updateChirp\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/server/chirpstore.js?");

/***/ }),

/***/ "./src/server/routes/chirps.ts":
/*!*************************************!*\
  !*** ./src/server/routes/chirps.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar chirpstore_1 = __webpack_require__(/*! ../chirpstore */ \"./src/server/chirpstore.js\");\r\nvar chirpsRoute = express.Router();\r\nchirpsRoute.get('/:id?', function (req, res) {\r\n    var id = req.params.id;\r\n    if (id) {\r\n        res.json(chirpstore_1.default.GetChirp(id));\r\n    }\r\n    else {\r\n        res.json(chirpstore_1.default.GetChirps());\r\n    }\r\n});\r\nchirpsRoute.post('/', function (req, res) {\r\n    chirpstore_1.default.CreateChirp(req.body);\r\n    res.status(200).json(\"posted\");\r\n});\r\nchirpsRoute.put('/:id?', function (req, res) {\r\n    var id = req.params.id;\r\n    if (id) {\r\n        res.json(chirpstore_1.default.UpdateChirp(id, req.body));\r\n    }\r\n    else {\r\n        res.send(400);\r\n    }\r\n});\r\nchirpsRoute.delete('/:id?', function (req, res) {\r\n    var id = req.params.id;\r\n    if (id) {\r\n        res.sendStatus(200).json(chirpstore_1.default.DeleteChirp(id));\r\n    }\r\n    else {\r\n        res.status(400);\r\n    }\r\n});\r\nexports.default = chirpsRoute;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/chirps.ts\");\r\nvar router = express.Router();\r\nrouter.use('/chirps', chirps_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\napp.use(express.json());\r\napp.use(express.static('public'));\r\napp.use('/api', routes_1.default);\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });