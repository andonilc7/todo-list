import { app } from "./app";
import { pageLoad } from "./DOM/pageLoad";
import Project from "./projects";
import Task from "./tasks";
import parseISO from "date-fns/parseISO";
import './index.css'

app.projects = [];

let storedProjects = JSON.parse(localStorage.getItem('storedProjects'));
console.log(JSON.stringify(storedProjects))
if ((JSON.stringify(storedProjects) == '[]') || storedProjects === null) {
  app.addProject('Home');
  localStorage.setItem('storedProjects', JSON.stringify(app.projects));
} else {
  for (let i=0; i<storedProjects.length; i++) {
    app.projects.push(new Project(storedProjects[i].name))
    app.projects[i].tasks = 
    storedProjects[i].tasks.map(task => new Task(task.title, task.description, parseISO(task.dueDate), task.priority));
    }
  }
  
  

console.log(app.projects)
pageLoad();