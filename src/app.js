import Task from "./tasks";
import Project from "./projects";

const home = new Project('Home');

home.createAddTask("Trash", "Take out trash", "Today", "Medium");
console.log(home.tasks[0])

class App {
  constructor() {
    this.projects = [home]
  }

  addProject(name) {
    this.projects.push(new Project(name));
  }

  
}

export const app = new App();


