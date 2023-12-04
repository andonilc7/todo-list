import { renderTasks } from "./renderTasks";
import { app } from "../app";
import Project from "../projects";

export {handleAddTask}



function handleAddTask(project) {
  const editForm = document.querySelector('.edit-form')
  const editPopup = document.querySelector('.edit-popup');
  const body = document.querySelector('body')
  const titleEdit = document.querySelector('.title-edit')
  const descriptionEdit = document.querySelector('.description-edit')
  const dueDateEdit = document.querySelector('.due-date-edit')
  const priorityRadios = document.querySelectorAll('.edit-radio')
  const submitEditForm = document.querySelector('.submit-edit-form')
  let priorityValue;


  function getFormPriority() {
    priorityRadios.forEach((radio) => {
      if (radio.checked === true) {
        priorityValue = radio.value
      }
    })
    return priorityValue;
  }


  function submitAddFormClick() {
    project.createAddTask(titleEdit.value, descriptionEdit.value, dueDateEdit.value, getFormPriority());
    renderTasks(project)

    editPopup.style.visibility = "hidden";
    body.classList.remove('popup');
    console.log(project.tasks)
  }

  submitEditForm.onclick = submitAddFormClick;
  
}