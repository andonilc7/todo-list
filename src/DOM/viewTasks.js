import { app } from "../app";
import Task from "../tasks";
import elementFromHtml from "./elementFromHtml";


function viewTasks(project) {
  const body = document.querySelector('body');
  const projectDisplay = document.querySelector('.project-display');
  project.tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    projectDisplay.append(taskItem)

    const complete = document.createElement('input');
    complete.type = "checkbox";
    taskItem.append(complete);
    complete.addEventListener('change', function() {
      task.toggleComplete();
      taskTitle.classList.toggle('complete');
    })

    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    taskTitle.classList.add('task-title')
    taskItem.append(taskTitle);

    const details = document.createElement('button')
    details.textContent = "Details";
    taskItem.append(details);
    const popup = document.createElement('div');
      popup.classList.add('details-popup')
      body.append(popup);

    const popupTitle = document.createElement('h3')
    popupTitle.textContent = task.title;
    popup.append(popupTitle)

    const description = document.createElement('p');
    description.textContent = `Description: ${task.description}`;
    popup.append(description)

    const popupDueDate = document.createElement('p')
    popupDueDate.textContent = `Due Date: ${task.dueDate}`
    popup.append(popupDueDate)

    const popupPriority = document.createElement('p')
    popupPriority.textContent = `Priority: ${task.priority}`
    popup.append(popupPriority)

      const close = document.createElement('button');
      close.classList.add('close')
      close.textContent = "x";
      close.addEventListener('click', () => {
        popup.style.visibility = "hidden";
        body.classList.remove('popup')
      })
      popup.append(close)
      popup.style.visibility = "hidden";
    details.addEventListener('click', function() {
      popup.style.visibility = "visible";
      body.classList.add("popup");

    });


    const dueDate = document.createElement('p');
    dueDate.textContent = task.dueDate;
    taskItem.append(dueDate);

    const edit = document.createElement('button');
    edit.textContent = "Edit";
    taskItem.append(edit);

    const deleteTask = document.createElement('button');
    deleteTask.textContent = "Delete";
    taskItem.append(deleteTask);

    
  })
}


export {viewTasks}