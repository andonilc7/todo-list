import { app } from "../app";
import { editTasks } from "./editTasks";
import Task from "../tasks";
import Project from "../projects";
import { deleteTask } from "./deleteTask";
import { handleAddTask } from "./handleAddTask";
import closeSvg from '../assets/window-close.svg'
import { format } from "date-fns";

let activeTaskItem;
let taskToDelete;
function renderTasks(project) {
  //for when delete a project, defaults to showing home project
  if (project == undefined) {
    project = app.projects[0];
  }
  const body = document.querySelector('body');
  const projectDisplay = document.querySelector('.project-display');
  const projectDisplayTitle = document.querySelector('.project-display-title')
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

  projectDisplayTitle.textContent = project.name;

  let index = 0;
  project.tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.setAttribute('data-index', index);
    index++;
    taskDisplay.append(taskItem)
    
    const complete = document.createElement('input');
    complete.type = "checkbox";
    complete.classList.add('complete-task-checkbox')
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
        detailsPopupDueDate.textContent = `Due Date: ${format(task.getDueDate(), 'MMMM dd, yyyy')}`
        
        
        detailsPopupPriority.textContent = `Priority: ${task.getPriority()}`
        detailsPopup.style.visibility = "visible";
        body.classList.add("popup");
        
      });  
      






    const dueDate = document.createElement('p');
    dueDate.textContent = format(task.getDueDate(), 'MMM dd, yyyy');
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
      dueDateEdit.value = format(task.getDueDate(), 'yyyy-MM-dd')
      
      priorityRadios.forEach((radio) => {
        if (radio.value === task.getPriority()) {
          radio.checked = true;
        }
      })

      
      editTasks(project);

      

    })

    





    
    const deleteTaskButton = document.createElement('img');
    deleteTaskButton.src = closeSvg
    deleteTaskButton.classList.add('delete-task-btn')
    taskItem.append(deleteTaskButton);

    deleteTaskButton.addEventListener('click', (e) => {
      taskToDelete = e.target.parentElement;
      deleteTask(project);
    })

    
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



export {renderTasks, activeTaskItem, taskToDelete}