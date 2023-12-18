import Task from "./tasks";
import Project from "./projects";




class App {
  constructor() {
    this.projects = [];
  }

  addProject(name) {
    this.projects.push(new Project(name));

  }

  
}

export const app = new App();



