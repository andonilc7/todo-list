import Project from "../projects";
import { app } from "../app";
import { renderTasks, taskToDelete } from "./renderTasks";

export {deleteTask}

function deleteTask(project) {
  let deleteIndex = taskToDelete.getAttribute('data-index');
  project.tasks.splice(deleteIndex, 1)
  localStorage.setItem('storedProjects', JSON.stringify(app.projects));
  renderTasks(project)
}
