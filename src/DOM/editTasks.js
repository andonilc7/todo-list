import { renderTasks, activeTaskItem } from "./renderTasks";
import { app } from "../app";
import Project from "../projects";
import Task from "../tasks";
export {editTasks}

function editTasks(project) {
  const editForm = document.querySelector('.edit-form')
  const editPopup = document.querySelector('.edit-popup');
  const taskItems = document.querySelectorAll('.task-item')
  const editButtons = document.querySelectorAll('.edit')
  const body = document.querySelector('body')
  const titleEdit = document.querySelector('.title-edit')
  const descriptionEdit = document.querySelector('.description-edit')
  const dueDateEdit = document.querySelector('.due-date-edit')
  const priorityRadios = document.querySelectorAll('.edit-radio')
  const submitEditForm = document.querySelector('.submit-edit-form')

  function getTask(index) {
    return project.tasks[index];
  }


  function submitEditFormClick(event) {
    project.tasks[activeTaskItem.getAttribute('data-index')].setTitle(titleEdit.value)
    project.tasks[activeTaskItem.getAttribute('data-index')].setDescription(descriptionEdit.value)
    project.tasks[activeTaskItem.getAttribute('data-index')].setDueDate(dueDateEdit.value);

    priorityRadios.forEach((radio) => {
      if (radio.checked === true) {
        project.tasks[activeTaskItem.getAttribute('data-index')].setPriority(radio.value);
      }
    })

    renderTasks(project);
 
    editPopup.style.visibility = "hidden";
    body.classList.remove('popup');
  }

  submitEditForm.onclick = submitEditFormClick;
}
      

  

