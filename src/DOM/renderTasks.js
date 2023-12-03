import { app } from "../app";
import { editTasks } from "./editTasks";
import Task from "../tasks";
import Project from "../projects";
import elementFromHtml from "./elementFromHtml";
import { handleAddTask } from "./handleAddTask";

let activeTaskItem;
function renderTasks(project) {
  const body = document.querySelector('body');
  const projectDisplay = document.querySelector('.project-display');
  const taskDisplay = document.querySelector('.task-display')
  taskDisplay.textContent = "";
  const taskAddButton = document.querySelector('.task-add-button')


  const detailsPopup = document.querySelector('.details-popup')
  const detailsPopupTitle = document.querySelector('.details-popup-title')
  const detailsPopupDescription = document.querySelector('.details-popup-description')
  const detailsPopupDueDate = document.querySelector('.details-popup-due-date')
  const detailsPopupPriority = document.querySelector('.details-popup-priority')

  const editPopup = document.querySelector('.edit-popup')
  const titleEdit = document.querySelector('.title-edit')
  const descriptionEdit = document.querySelector('.description-edit')
  const dueDateEdit = document.querySelector('.due-date-edit')
  const priorityRadios = document.querySelectorAll('.edit-radio')
  const editForm = document.querySelector('.edit-form')
  const submitEditForm = document.querySelector('.submit-edit-form')
  submitEditForm.onclick = null;

  console.log(`${project.tasks[0]}`)


  let index = 0;
  project.tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.setAttribute('data-index', index);
    index++;
    taskDisplay.append(taskItem)
    
    const complete = document.createElement('input');
    complete.type = "checkbox";
    taskItem.append(complete);
    complete.addEventListener('change', function() {
      task.toggleComplete();
      taskTitle.classList.toggle('complete');
    })

    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.getTitle();
    taskTitle.classList.add('task-title')
    taskItem.append(taskTitle);

    const details = document.createElement('button')
    details.textContent = "Details";
    details.classList.add('details');
    taskItem.append(details);
 


      details.addEventListener('click', function(e) {
        detailsPopupTitle.textContent = `${task.getTitle()}`
        detailsPopupDescription.textContent = `Description: ${task.getDescription()}`
        detailsPopupDueDate.textContent = `Due Date: ${task.getDueDate()}`
        detailsPopupPriority.textContent = `Priority: ${task.getPriority()}`
        detailsPopup.style.visibility = "visible";
        body.classList.add("popup");
        
      });  
      






    const dueDate = document.createElement('p');
    dueDate.textContent = task.getDueDate();
    taskItem.append(dueDate);

    //edit button
    const edit = document.createElement('button');
    edit.textContent = "Edit";
    edit.classList.add('edit')
    taskItem.append(edit);

    edit.addEventListener('click', (e) => {
      submitEditForm.value = 'Confirm Edit'
      editPopup.style.visibility = "visible";
      body.classList.add("popup");
      activeTaskItem = e.target.parentElement;
      console.log(activeTaskItem);

      titleEdit.value=task.getTitle();
      descriptionEdit.value = task.getDescription()
      dueDateEdit.value = task.getDueDate()
      
      priorityRadios.forEach((radio) => {
        if (radio.value === task.getPriority()) {
          radio.checked = true;
        }
      })

      
      editTasks(project);

      

    })

    





    
    const deleteTask = document.createElement('button');
    deleteTask.textContent = "Delete";
    taskItem.append(deleteTask);

    
  });

  taskAddButton.addEventListener('click', (e) => {
    submitEditForm.value = 'Add Task';

    titleEdit.value = ""
    descriptionEdit.value = ""
    dueDateEdit.value = dueDateEdit.defaultValue
    priorityRadios.forEach((radio) => {
      radio.checked = false;
    })
    editPopup.style.visibility = "visible";
    body.classList.add("popup");
    handleAddTask(project);
  })

}



export {renderTasks, activeTaskItem}