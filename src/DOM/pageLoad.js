
import { viewTasks } from "./viewTasks";
import { app } from "../app";
import elementFromHtml from "./elementFromHtml";

const body = document.querySelector('body');


const pageLoad = function () {
  //load header
    const header = document.createElement('div');
    header.classList.add('header')
    body.append(header);
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "To-Do List";
    header.append(title);
  
  
  //load content
  const content = document.createElement('div');
  content.classList.add('content');
  body.append(content);
 
  //load sidebar
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar')
  content.append(sidebar);
  const projectList = document.createElement('div');
  projectList.classList.add('project-list');
  sidebar.append(projectList);

  app.projects.forEach((project) => {
    
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectList.append(projectItem);

    const projectName = document.createElement('h3');
    projectName.classList.add('project-name')
    projectName.textContent = project.name;
    
    projectItem.append(projectName);
    });
  
  //load tasks in home project
  const projectDisplay = document.createElement('div');
  projectDisplay.classList.add('project-display');
  content.append(projectDisplay);

  viewTasks(app.projects[0])

}



export {pageLoad}