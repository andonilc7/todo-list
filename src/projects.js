import Task from "./tasks";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  createAddTask(title, description, dueDate, priority) {
    this.tasks.push(new Task(title, description, dueDate, priority));
  }

  getTasks() {
    return this.tasks;
  }


}
