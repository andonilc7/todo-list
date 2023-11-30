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

/***/ "./src/DOM/elementFromHtml.js":
/*!************************************!*\
  !*** ./src/DOM/elementFromHtml.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ elementFromHtml)\n/* harmony export */ });\nfunction elementFromHtml(html) {\n  const template = document.createElement('template');\n\n  template.innerHtml = html.trim();\n\n  return template.content.firstElementChild;\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/elementFromHtml.js?");

/***/ }),

/***/ "./src/DOM/pageLoad.js":
/*!*****************************!*\
  !*** ./src/DOM/pageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _viewTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewTasks */ \"./src/DOM/viewTasks.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n/* harmony import */ var _elementFromHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementFromHtml */ \"./src/DOM/elementFromHtml.js\");\n\n\n\n\n\nconst body = document.querySelector('body');\n\n\nconst pageLoad = function () {\n  //load header\n    const header = document.createElement('div');\n    header.classList.add('header')\n    body.append(header);\n    const title = document.createElement('h2');\n    title.classList.add('title');\n    title.textContent = \"To-Do List\";\n    header.append(title);\n  \n  \n  //load content\n  const content = document.createElement('div');\n  content.classList.add('content');\n  body.append(content);\n \n  //load sidebar\n  const sidebar = document.createElement('div');\n  sidebar.classList.add('sidebar')\n  content.append(sidebar);\n  const projectList = document.createElement('div');\n  projectList.classList.add('project-list');\n  sidebar.append(projectList);\n\n  _app__WEBPACK_IMPORTED_MODULE_1__.app.projects.forEach((project) => {\n    \n    const projectItem = document.createElement('div');\n    projectItem.classList.add('project-item');\n    projectList.append(projectItem);\n\n    const projectName = document.createElement('h3');\n    projectName.classList.add('project-name')\n    projectName.textContent = project.name;\n    \n    projectItem.append(projectName);\n    });\n  \n  //load tasks in home project\n  const projectDisplay = document.createElement('div');\n  projectDisplay.classList.add('project-display');\n  content.append(projectDisplay);\n\n  (0,_viewTasks__WEBPACK_IMPORTED_MODULE_0__.viewTasks)(_app__WEBPACK_IMPORTED_MODULE_1__.app.projects[0])\n\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/pageLoad.js?");

/***/ }),

/***/ "./src/DOM/viewTasks.js":
/*!******************************!*\
  !*** ./src/DOM/viewTasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   viewTasks: () => (/* binding */ viewTasks)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks */ \"./src/tasks.js\");\n/* harmony import */ var _elementFromHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementFromHtml */ \"./src/DOM/elementFromHtml.js\");\n\n\n\n\n\nfunction viewTasks(project) {\n  const body = document.querySelector('body');\n  const projectDisplay = document.querySelector('.project-display');\n  project.tasks.forEach((task) => {\n    const taskItem = document.createElement('div');\n    taskItem.classList.add('task-item');\n    projectDisplay.append(taskItem)\n\n    const complete = document.createElement('input');\n    complete.type = \"checkbox\";\n    taskItem.append(complete);\n    complete.addEventListener('change', function() {\n      task.toggleComplete();\n      taskTitle.classList.toggle('complete');\n    })\n\n    const taskTitle = document.createElement('p');\n    taskTitle.textContent = task.title;\n    taskTitle.classList.add('task-title')\n    taskItem.append(taskTitle);\n\n    const details = document.createElement('button')\n    details.textContent = \"Details\";\n    taskItem.append(details);\n    const popup = document.createElement('div');\n      popup.classList.add('details-popup')\n      body.append(popup);\n\n    const popupTitle = document.createElement('h3')\n    popupTitle.textContent = task.title;\n    popup.append(popupTitle)\n\n    const description = document.createElement('p');\n    description.textContent = `Description: ${task.description}`;\n    popup.append(description)\n\n    const popupDueDate = document.createElement('p')\n    popupDueDate.textContent = `Due Date: ${task.dueDate}`\n    popup.append(popupDueDate)\n\n    const popupPriority = document.createElement('p')\n    popupPriority.textContent = `Priority: ${task.priority}`\n    popup.append(popupPriority)\n\n      const close = document.createElement('button');\n      close.classList.add('close')\n      close.textContent = \"x\";\n      close.addEventListener('click', () => {\n        popup.style.visibility = \"hidden\";\n        body.classList.remove('popup')\n      })\n      popup.append(close)\n      popup.style.visibility = \"hidden\";\n    details.addEventListener('click', function() {\n      popup.style.visibility = \"visible\";\n      body.classList.add(\"popup\");\n\n    });\n\n\n    const dueDate = document.createElement('p');\n    dueDate.textContent = task.dueDate;\n    taskItem.append(dueDate);\n\n    const edit = document.createElement('button');\n    edit.textContent = \"Edit\";\n    taskItem.append(edit);\n\n    const deleteTask = document.createElement('button');\n    deleteTask.textContent = \"Delete\";\n    taskItem.append(deleteTask);\n\n    \n  })\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/viewTasks.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst home = new _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Home');\n\nhome.createAddTask(\"Trash\", \"Take out trash\", \"Today\", \"Medium\");\nconsole.log(home.tasks[0])\n\nclass App {\n  constructor() {\n    this.projects = [home]\n  }\n\n  addProject(name) {\n    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name));\n  }\n\n  \n}\n\nconst app = new App();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _DOM_pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/pageLoad */ \"./src/DOM/pageLoad.js\");\n\n\n\n\nconsole.log(_app__WEBPACK_IMPORTED_MODULE_0__.app.projects)\n\n;(0,_DOM_pageLoad__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  createAddTask(title, description, dueDate, priority) {\n    this.tasks.push(new _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority));\n  }\n\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n\n\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.complete = false;\n  }\n\n  setTitle(title) {\n    this.title = title;\n  }\n  \n  getTitle() {\n    return this.title;\n  }\n\n  setDescription(description) {\n    this.description = description;\n  }\n\n  getDescription() {\n    return this.description;\n  }\n\n  setDueDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n  getDueDate() {\n    return this.dueDate;\n  }\n  \n  setPriority(priority) {\n    this.priority = priority;\n  }\n\n  getPriority() {\n    return this.priority;\n  }\n\n  toggleComplete() {\n    this.complete = !(this.complete);\n  }\n  \n  getComplete() {\n    return this.complete;\n  }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;