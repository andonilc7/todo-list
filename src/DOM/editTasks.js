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

  function getTask(index) {
    return project.tasks[index];
  }

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`edit form: ${activeTaskItem.getAttribute('data-index')}`)
    
    project.tasks[activeTaskItem.getAttribute('data-index')].setTitle(titleEdit.value)
    project.tasks[activeTaskItem.getAttribute('data-index')].setDescription(descriptionEdit.value)
    project.tasks[activeTaskItem.getAttribute('data-index')].setDueDate(dueDateEdit.value);
    renderTasks(project);
    // prob should do a edit task-item function instead of 
    //rendering all the tasks
    editPopup.style.visibility = "hidden";
    body.classList.remove('popup');
    console.log(app.projects[0].tasks)
       
  })
    }

//problem is that when this runs, only does it once so when theres a enw activeTask Index,
// it doesn't update that one. Maybe change event to 'click'????

    
    
      

  

