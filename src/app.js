import Task from "./tasks";
import Project from "./projects";

const home = new Project('Home');

home.createAddTask("Trash", "Take out trash", "2023-12-02", "medium");
console.log(home.tasks[0])
home.createAddTask('do something', "Do this thing but in more detail", "2023-12-07", "low")
console.log(home.tasks)

class App {
  constructor() {
    this.projects = [home]
  }

  addProject(name) {
    this.projects.push(new Project(name));
  }

  
}

export const app = new App();

console.log(app.projects[0].tasks)
