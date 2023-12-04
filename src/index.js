import { app } from "./app";
import { pageLoad } from "./DOM/pageLoad";
import Project from "./projects";


const work = new Project('Work');
console.log(app.projects)
app.addProject("Work")

pageLoad();