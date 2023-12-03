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

/***/ "./src/DOM/editTasks.js":
/*!******************************!*\
  !*** ./src/DOM/editTasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editTasks: () => (/* binding */ editTasks)\n/* harmony export */ });\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks */ \"./src/DOM/renderTasks.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks */ \"./src/tasks.js\");\n\n\n\n\n\n\nfunction editTasks(project) {\n  const editForm = document.querySelector('.edit-form')\n  const editPopup = document.querySelector('.edit-popup');\n  const taskItems = document.querySelectorAll('.task-item')\n  const editButtons = document.querySelectorAll('.edit')\n  const body = document.querySelector('body')\n  const titleEdit = document.querySelector('.title-edit')\n  const descriptionEdit = document.querySelector('.description-edit')\n  const dueDateEdit = document.querySelector('.due-date-edit')\n  const priorityRadios = document.querySelectorAll('.edit-radio')\n  const submitEditForm = document.querySelector('.submit-edit-form')\n\n  function getTask(index) {\n    return project.tasks[index];\n  }\n\n\n  function submitEditFormClick(event) {\n    project.tasks[_renderTasks__WEBPACK_IMPORTED_MODULE_0__.activeTaskItem.getAttribute('data-index')].setTitle(titleEdit.value)\n    project.tasks[_renderTasks__WEBPACK_IMPORTED_MODULE_0__.activeTaskItem.getAttribute('data-index')].setDescription(descriptionEdit.value)\n    project.tasks[_renderTasks__WEBPACK_IMPORTED_MODULE_0__.activeTaskItem.getAttribute('data-index')].setDueDate(dueDateEdit.value);\n\n    priorityRadios.forEach((radio) => {\n      if (radio.checked === true) {\n        project.tasks[_renderTasks__WEBPACK_IMPORTED_MODULE_0__.activeTaskItem.getAttribute('data-index')].setPriority(radio.value);\n      }\n    })\n\n    ;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project);\n \n    editPopup.style.visibility = \"hidden\";\n    body.classList.remove('popup');\n  }\n\n  submitEditForm.onclick = submitEditFormClick;\n}\n      \n\n  \n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/editTasks.js?");

/***/ }),

/***/ "./src/DOM/elementFromHtml.js":
/*!************************************!*\
  !*** ./src/DOM/elementFromHtml.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ elementFromHtml)\n/* harmony export */ });\nfunction elementFromHtml(html) {\n  const template = document.createElement('template');\n\n  template.innerHtml = html.trim();\n\n  return template.content.firstElementChild;\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/elementFromHtml.js?");

/***/ }),

/***/ "./src/DOM/handleAddTask.js":
/*!**********************************!*\
  !*** ./src/DOM/handleAddTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAddTask: () => (/* binding */ handleAddTask)\n/* harmony export */ });\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks */ \"./src/DOM/renderTasks.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects */ \"./src/projects.js\");\n\n\n\n\n\n\n\n\nfunction handleAddTask(project) {\n  const editForm = document.querySelector('.edit-form')\n  const editPopup = document.querySelector('.edit-popup');\n  const body = document.querySelector('body')\n  const titleEdit = document.querySelector('.title-edit')\n  const descriptionEdit = document.querySelector('.description-edit')\n  const dueDateEdit = document.querySelector('.due-date-edit')\n  const priorityRadios = document.querySelectorAll('.edit-radio')\n  const submitEditForm = document.querySelector('.submit-edit-form')\n  let priorityValue;\n\n\n  function getFormPriority() {\n    priorityRadios.forEach((radio) => {\n      if (radio.checked === true) {\n        priorityValue = radio.value\n      }\n    })\n    return priorityValue;\n  }\n\n\n  function submitAddFormClick() {\n    project.createAddTask(titleEdit.value, descriptionEdit.value, dueDateEdit.value, getFormPriority());\n    (0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project)\n\n    editPopup.style.visibility = \"hidden\";\n    body.classList.remove('popup');\n    console.log(project.tasks)\n  }\n\n  submitEditForm.onclick = submitAddFormClick;\n  \n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/handleAddTask.js?");

/***/ }),

/***/ "./src/DOM/pageLoad.js":
/*!*****************************!*\
  !*** ./src/DOM/pageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks */ \"./src/DOM/renderTasks.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTasks */ \"./src/DOM/editTasks.js\");\n/* harmony import */ var _elementFromHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementFromHtml */ \"./src/DOM/elementFromHtml.js\");\n\n\n\n\n\n\nconst body = document.querySelector('body');\n\n\nconst pageLoad = function () {\n  //load header\n    const header = document.createElement('div');\n    header.classList.add('header')\n    body.append(header);\n    const title = document.createElement('h2');\n    title.classList.add('title');\n    title.textContent = \"To-Do List\";\n    header.append(title);\n  \n  \n  //load content\n  const content = document.createElement('div');\n  content.classList.add('content');\n  body.append(content);\n \n  //load sidebar\n  const sidebar = document.createElement('div');\n  sidebar.classList.add('sidebar')\n  content.append(sidebar);\n  const projectList = document.createElement('div');\n  projectList.classList.add('project-list');\n  sidebar.append(projectList);\n\n  _app__WEBPACK_IMPORTED_MODULE_1__.app.projects.forEach((project) => {\n    \n    const projectItem = document.createElement('div');\n    projectItem.classList.add('project-item');\n    projectList.append(projectItem);\n\n    const projectName = document.createElement('h3');\n    projectName.classList.add('project-name')\n    projectName.textContent = project.name;\n    \n    projectItem.append(projectName);\n    });\n\n    //details popup\n    const detailsPopup = document.createElement('div');\n    detailsPopup.classList.add('popup-element')\n    detailsPopup.classList.add('details-popup')\n      body.append(detailsPopup);\n\n    const detailsPopupTitle = document.createElement('h3')\n    detailsPopupTitle.classList.add('details-popup-title')\n    detailsPopup.append(detailsPopupTitle)\n\n    const detailsPopupDescription = document.createElement('p');\n    detailsPopupDescription.classList.add('details-popup-description')\n    detailsPopup.append(detailsPopupDescription)\n\n    const detailsPopupDueDate = document.createElement('p')\n    detailsPopupDueDate.classList.add('details-popup-due-date')\n    detailsPopup.append(detailsPopupDueDate)\n\n    const detailsPopupPriority = document.createElement('p')\n    detailsPopupPriority.classList.add('details-popup-priority')\n    detailsPopup.append(detailsPopupPriority)\n    \n    //close details popup\n      const closeDetails = document.createElement('button');\n      closeDetails.classList.add('close')\n      closeDetails.textContent = \"x\";\n      closeDetails.addEventListener('click', () => {\n        detailsPopup.style.visibility = \"hidden\";\n        body.classList.remove('popup')\n\n        detailsPopupTitle.textContent = ''\n        detailsPopupDescription.textContent = ''\n        detailsPopupDueDate.textContent = ''\n        detailsPopupPriority.textContent = ''\n      })\n      detailsPopup.append(closeDetails)\n      detailsPopup.style.visibility = \"hidden\";\n   \n  \n  //edit popup\n  const editPopup = document.createElement('div');\n    editPopup.classList.add('popup-element')\n    editPopup.classList.add('edit-popup')\n    body.append(editPopup);\n    \n    const editForm = document.createElement('form')\n    editForm.classList.add('edit-form')\n    editPopup.append(editForm)\n\n    //title edit container\n    const titleEditContainer = document.createElement('div')\n    editForm.append(titleEditContainer)\n\n    const titleEditLabel = document.createElement('label')\n    titleEditLabel.textContent = \"Title: \"\n    titleEditContainer.append(titleEditLabel)\n\n    const titleEdit = document.createElement('textarea');\n    titleEdit.classList.add('title-edit')\n    \n    titleEditContainer.append(titleEdit)\n\n    // description edit container\n    const descriptionEditContainer = document.createElement('div')\n    editForm.append(descriptionEditContainer)\n\n    const descEditLabel = document.createElement('label')\n    descEditLabel.textContent = \"Description: \"\n    descriptionEditContainer.append(descEditLabel)\n\n    const descriptionEdit = document.createElement('textarea')\n    descriptionEdit.classList.add('description-edit')\n    // descriptionEdit.value = task.getDescription();\n    descriptionEditContainer.append(descriptionEdit);\n\n    // due date edit container\n    const dueEditCont = document.createElement('div')\n    editForm.append(dueEditCont)\n\n    const dueEditLabel = document.createElement('label')\n    dueEditLabel.textContent = \"Due Date: \"\n    dueEditCont.append(dueEditLabel)\n\n    const dueDateEdit = document.createElement('input');\n    dueDateEdit.classList.add('due-date-edit')\n    dueDateEdit.type='date';\n    dueEditCont.append(dueDateEdit);\n\n\n    // priority edit container\n    const priorityEditContainer = document.createElement('div');\n    editForm.append(priorityEditContainer);\n\n    const priorityLabel = document.createElement('div');\n    priorityLabel.textContent = 'Priority: '\n    priorityEditContainer.append(priorityLabel);\n\n    const lowRadio = document.createElement('input');\n    lowRadio.setAttribute('type', 'radio')\n    lowRadio.setAttribute('name', 'priority-edit')\n    lowRadio.setAttribute('id','low')\n    lowRadio.setAttribute('value','low')\n    lowRadio.classList.add('edit-radio')\n    priorityEditContainer.append(lowRadio)\n\n    const lowLabel = document.createElement('label')\n    lowLabel.textContent=\"Low\"\n    lowLabel.setAttribute('for','low')\n    priorityEditContainer.append(lowLabel)\n\n    const mediumRadio = document.createElement('input');\n    mediumRadio.setAttribute('type','radio')\n    mediumRadio.setAttribute('name','priority-edit')\n    mediumRadio.setAttribute('id','medium')\n    mediumRadio.setAttribute('value','medium')\n    mediumRadio.classList.add('edit-radio')\n    priorityEditContainer.append(mediumRadio)\n\n    const mediumLabel = document.createElement('label')\n    mediumLabel.textContent = 'Medium'\n    mediumLabel.setAttribute('for', 'medium')\n    priorityEditContainer.append(mediumLabel)\n\n    const highRadio = document.createElement('input')\n    highRadio.setAttribute('type','radio')\n    highRadio.setAttribute('name','priority-edit')\n    highRadio.setAttribute('id','high')\n    highRadio.setAttribute('value','high')\n    highRadio.classList.add('edit-radio')\n    priorityEditContainer.append(highRadio)\n\n    const highLabel = document.createElement('label')\n    highLabel.textContent='High'\n    highLabel.setAttribute('for', 'high')\n    priorityEditContainer.append(highLabel)\n\n\n    // submit button\n    const submitEditForm = document.createElement('input')\n    submitEditForm.type='submit'\n    submitEditForm.value = \"Confirm Edit\"\n    submitEditForm.classList.add('submit-edit-form')\n    editForm.addEventListener(('submit'), (event) => {\n      event.preventDefault();\n    })\n    editForm.append(submitEditForm)\n\n\n\n\n    \n\n    //close edit popup\n    const closeEdit = document.createElement('button');\n      closeEdit.classList.add('close')\n      closeEdit.textContent = \"x\";\n      closeEdit.addEventListener('click', () => {\n        editPopup.style.visibility = \"hidden\";\n        body.classList.remove('popup')\n        const priorityRadios = document.querySelectorAll('.edit-radio');\n        \n        //reset values\n        titleEdit.value = \"\"\n        descriptionEdit.value = \"\"\n        dueDateEdit.value = dueDateEdit.defaultValue;\n        priorityRadios.forEach((radio) => {\n          radio.checked = false;\n        })\n\n      })\n      editPopup.append(closeEdit)\n\n      editPopup.style.visibility = \"hidden\"\n    \n\n\n  let currentProject = _app__WEBPACK_IMPORTED_MODULE_1__.app.projects[0];\n\n  function changeCurrentProject(newProj) {\n    currentProject = newProj;\n  }\n\n  function getCurrentProject() {\n    return currentProject;\n  }\n\n  //load tasks in home project\n  const projectDisplay = document.createElement('div');\n  projectDisplay.classList.add('project-display');\n  content.append(projectDisplay);\n  \n  const taskDisplay = document.createElement('div');\n  taskDisplay.classList.add('task-display');\n  projectDisplay.append(taskDisplay);\n\n  const taskAddContainer = document.createElement('div');\n  taskAddContainer.classList.add('task-add-container');\n  projectDisplay.append(taskAddContainer)\n  const taskAddButton = document.createElement('button');\n  taskAddButton.classList.add('task-add-button');\n  taskAddButton.textContent = \"Add Task\"\n  taskAddContainer.append(taskAddButton)\n\n  ;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(currentProject)\n  \n\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/pageLoad.js?");

/***/ }),

/***/ "./src/DOM/renderTasks.js":
/*!********************************!*\
  !*** ./src/DOM/renderTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeTaskItem: () => (/* binding */ activeTaskItem),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTasks */ \"./src/DOM/editTasks.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects */ \"./src/projects.js\");\n/* harmony import */ var _elementFromHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementFromHtml */ \"./src/DOM/elementFromHtml.js\");\n/* harmony import */ var _handleAddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleAddTask */ \"./src/DOM/handleAddTask.js\");\n\n\n\n\n\n\n\nlet activeTaskItem;\nfunction renderTasks(project) {\n  const body = document.querySelector('body');\n  const projectDisplay = document.querySelector('.project-display');\n  const taskDisplay = document.querySelector('.task-display')\n  taskDisplay.textContent = \"\";\n  const taskAddButton = document.querySelector('.task-add-button')\n\n\n  const detailsPopup = document.querySelector('.details-popup')\n  const detailsPopupTitle = document.querySelector('.details-popup-title')\n  const detailsPopupDescription = document.querySelector('.details-popup-description')\n  const detailsPopupDueDate = document.querySelector('.details-popup-due-date')\n  const detailsPopupPriority = document.querySelector('.details-popup-priority')\n\n  const editPopup = document.querySelector('.edit-popup')\n  const titleEdit = document.querySelector('.title-edit')\n  const descriptionEdit = document.querySelector('.description-edit')\n  const dueDateEdit = document.querySelector('.due-date-edit')\n  const priorityRadios = document.querySelectorAll('.edit-radio')\n  const editForm = document.querySelector('.edit-form')\n  const submitEditForm = document.querySelector('.submit-edit-form')\n  submitEditForm.onclick = null;\n\n  console.log(`${project.tasks[0]}`)\n\n\n  let index = 0;\n  project.tasks.forEach((task) => {\n    const taskItem = document.createElement('div');\n    taskItem.classList.add('task-item');\n    taskItem.setAttribute('data-index', index);\n    index++;\n    taskDisplay.append(taskItem)\n    \n    const complete = document.createElement('input');\n    complete.type = \"checkbox\";\n    taskItem.append(complete);\n    complete.addEventListener('change', function() {\n      task.toggleComplete();\n      taskTitle.classList.toggle('complete');\n    })\n\n    const taskTitle = document.createElement('p');\n    taskTitle.textContent = task.getTitle();\n    taskTitle.classList.add('task-title')\n    taskItem.append(taskTitle);\n\n    const details = document.createElement('button')\n    details.textContent = \"Details\";\n    details.classList.add('details');\n    taskItem.append(details);\n \n\n\n      details.addEventListener('click', function(e) {\n        detailsPopupTitle.textContent = `${task.getTitle()}`\n        detailsPopupDescription.textContent = `Description: ${task.getDescription()}`\n        detailsPopupDueDate.textContent = `Due Date: ${task.getDueDate()}`\n        detailsPopupPriority.textContent = `Priority: ${task.getPriority()}`\n        detailsPopup.style.visibility = \"visible\";\n        body.classList.add(\"popup\");\n        \n      });  \n      \n\n\n\n\n\n\n    const dueDate = document.createElement('p');\n    dueDate.textContent = task.getDueDate();\n    taskItem.append(dueDate);\n\n    //edit button\n    const edit = document.createElement('button');\n    edit.textContent = \"Edit\";\n    edit.classList.add('edit')\n    taskItem.append(edit);\n\n    edit.addEventListener('click', (e) => {\n      submitEditForm.value = 'Confirm Edit'\n      editPopup.style.visibility = \"visible\";\n      body.classList.add(\"popup\");\n      activeTaskItem = e.target.parentElement;\n      console.log(activeTaskItem);\n\n      titleEdit.value=task.getTitle();\n      descriptionEdit.value = task.getDescription()\n      dueDateEdit.value = task.getDueDate()\n      \n      priorityRadios.forEach((radio) => {\n        if (radio.value === task.getPriority()) {\n          radio.checked = true;\n        }\n      })\n\n      \n      ;(0,_editTasks__WEBPACK_IMPORTED_MODULE_1__.editTasks)(project);\n\n      \n\n    })\n\n    \n\n\n\n\n\n    \n    const deleteTask = document.createElement('button');\n    deleteTask.textContent = \"Delete\";\n    taskItem.append(deleteTask);\n\n    \n  });\n\n  taskAddButton.addEventListener('click', (e) => {\n    submitEditForm.value = 'Add Task';\n\n    titleEdit.value = \"\"\n    descriptionEdit.value = \"\"\n    dueDateEdit.value = dueDateEdit.defaultValue\n    priorityRadios.forEach((radio) => {\n      radio.checked = false;\n    })\n    editPopup.style.visibility = \"visible\";\n    body.classList.add(\"popup\");\n    (0,_handleAddTask__WEBPACK_IMPORTED_MODULE_5__.handleAddTask)(project);\n  })\n\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/renderTasks.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst home = new _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Home');\n\nhome.createAddTask(\"Trash\", \"Take out trash\", \"2023-12-02\", \"medium\");\nconsole.log(home.tasks[0])\nhome.createAddTask('do something', \"Do this thing but in more detail\", \"2023-12-07\", \"low\")\nconsole.log(home.tasks)\n\nclass App {\n  constructor() {\n    this.projects = [home]\n  }\n\n  addProject(name) {\n    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name));\n  }\n\n  \n}\n\nconst app = new App();\n\nconsole.log(app.projects[0].tasks)\n\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  createAddTask(title, description, dueDate, priority) {\n    this.tasks.push(new _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority));\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

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