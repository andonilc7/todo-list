import Project from "../projects";
import { renderTasks, taskToDelete } from "./renderTasks";

export {deleteTask}

function deleteTask(project) {
  let deleteIndex = taskToDelete.getAttribute('data-index');
  project.tasks.splice(deleteIndex, 1)
  renderTasks(project)
}