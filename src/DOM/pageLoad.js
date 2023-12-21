
import { renderTasks, renderTaskss } from "./renderTasks";
import { app } from "../app";
import { editTasks } from "./editTasks";
import elementFromHtml from "./elementFromHtml";
import closeSvg from '../assets/window-close.svg'
import plusCircleSvg from '../assets/plus-circle-outline.svg'

const body = document.querySelector('body');


const pageLoad = function () {

  body.textContent = ''
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
  const projectListTitle = document.createElement('h3');
  projectListTitle.textContent = "Projects";
  projectListTitle.classList.add('project-list-title')
  sidebar.append(projectListTitle);

  const projectListContainer = document.createElement('div');
  projectListContainer.classList.add('project-list-container')
  sidebar.append(projectListContainer)

  const projectList = document.createElement('div');
  
  projectList.classList.add('project-list');
  projectListContainer.append(projectList);


  let projectItemIndex=0;
  app.projects.forEach((project) => {
    
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.setAttribute('data-index', projectItemIndex);
    projectList.append(projectItem);
    projectItem.addEventListener('click', () => {
      renderTasks(app.projects[projectItem.getAttribute('data-index')])
    })

    const projectName = document.createElement('h3');
    projectName.classList.add('project-name')
    projectName.textContent = project.name;
    projectItem.append(projectName);

    const deleteProjectBtn = document.createElement('img')
    deleteProjectBtn.src = closeSvg;
    deleteProjectBtn.classList.add('delete-project-btn')
    projectItem.append(deleteProjectBtn)
    
    deleteProjectBtn.addEventListener('click', (e) => {
      app.projects.splice(projectItem.getAttribute('data-index'), 1)
      console.log(app.projects)
      localStorage.setItem('storedProjects', JSON.stringify(app.projects));
      pageLoad();
      renderTasks(app.projects[0]);
    })
    projectItemIndex++;

    });
console.log(projectItemIndex)
     // add project button
     const addProjectBtn = document.createElement('button')
     addProjectBtn.classList.add('add-project-btn')
     addProjectBtn.textContent= 'Add Project' 
     projectListContainer.append(addProjectBtn)
 
     addProjectBtn.addEventListener('click', (e, popup) => {
      localStorage.setItem('storedProjects', JSON.stringify(app.projects));
      addProjectPopup.style.visibility = "visible";
      body.classList.add("popup");
     })

   


    //details popup
    const detailsPopup = document.createElement('div');
    detailsPopup.classList.add('popup-element')
    detailsPopup.classList.add('details-popup')
      body.append(detailsPopup);

    const detailsPopupTitle = document.createElement('h3')
    detailsPopupTitle.classList.add('details-popup-title')
    detailsPopup.append(detailsPopupTitle)

    const detailsDescriptionCont = document.createElement('div');
    detailsDescriptionCont.classList.add('details-category-cont');   
    detailsPopup.append(detailsDescriptionCont); 
    const detailsDescriptionLabel = document.createElement('p');
    detailsDescriptionLabel.classList.add('details-popup-label');
    detailsDescriptionLabel.textContent = "Description: "
    detailsDescriptionCont.append(detailsDescriptionLabel)
    const detailsPopupDescription = document.createElement('p');
    detailsPopupDescription.classList.add('details-popup-description')
    detailsDescriptionCont.append(detailsPopupDescription)

    const detailsDueDateCont = document.createElement('div')
    detailsDueDateCont.classList.add('details-category-cont')
    detailsPopup.append(detailsDueDateCont);
    const detailsDueDateLabel = document.createElement('p');
    detailsDueDateLabel.classList.add('details-popup-label');
    detailsDueDateLabel.textContent = 'Due Date: '
    detailsDueDateCont.append(detailsDueDateLabel)
    const detailsPopupDueDate = document.createElement('p')
    detailsPopupDueDate.classList.add('details-popup-due-date')
    detailsDueDateCont.append(detailsPopupDueDate)

    const detailsPriorityCont = document.createElement('div')
    detailsPriorityCont.classList.add('details-category-cont')
    detailsPopup.append(detailsPriorityCont)
    const detailsPriorityLabel = document.createElement('p')
    detailsPriorityLabel.textContent = 'Priority: '
    detailsPriorityLabel.classList.add('details-popup-label')
    detailsPriorityCont.append(detailsPriorityLabel)
    const detailsPopupPriority = document.createElement('p')
    detailsPopupPriority.classList.add('details-popup-priority')
    detailsPriorityCont.append(detailsPopupPriority)
    
    //close details popup
      const closeDetails = document.createElement('img');
      closeDetails.classList.add('close')
      closeDetails.style.width = "20px"
      closeDetails.src = closeSvg;
      closeDetails.addEventListener('click', () => {
        detailsPopup.style.visibility = "hidden";
        body.classList.remove('popup')

        detailsPopupTitle.textContent = ''
        detailsPopupDescription.textContent = ''
        detailsPopupDueDate.textContent = ''
        detailsPopupPriority.textContent = ''
      })
      detailsPopup.append(closeDetails)
      detailsPopup.style.visibility = "hidden";
   
  

    
 
     //add-project popup
     const addProjectPopup = document.createElement('div');
     addProjectPopup.classList.add('popup-element')
     addProjectPopup.classList.add('add-project-popup')
     body.append(addProjectPopup)
     addProjectPopup.style.visibility = "hidden"
 
     const addProjectForm = document.createElement('form')
     addProjectForm.classList.add('add-project-form')
     addProjectPopup.append(addProjectForm)

     //project name container
     const newProjectNameContainer = document.createElement('div')
     addProjectForm.append(newProjectNameContainer)
     const projectNameLabel = document.createElement('label')
     projectNameLabel.textContent = 'Project Name'
     newProjectNameContainer.append(projectNameLabel)

     const projectNameInput = document.createElement('input')
     projectNameInput.classList.add('project-name-input')
     newProjectNameContainer.append(projectNameInput)

    //submit new project name
    const submitAddProjectForm = document.createElement('input')
    submitAddProjectForm.classList.add('submit-add-project-form')
    submitAddProjectForm.type = "submit"
    submitAddProjectForm.value = "Confirm"
    addProjectForm.append(submitAddProjectForm)
    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      app.addProject(projectNameInput.value)
      localStorage.setItem('storedProjects', JSON.stringify(app.projects));
      console.log(app.projects)
      projectNameInput.value = ''
    addProjectPopup.style.visibility = "hidden";
    body.classList.remove('popup')

      pageLoad();
    })

  //close project popup
  const closeProjectPopup = document.createElement('img')
  closeProjectPopup.src = closeSvg;
  closeProjectPopup.style.width = "20px"
  addProjectPopup.append(closeProjectPopup)
  closeProjectPopup.classList.add('close')

  closeProjectPopup.addEventListener('click', () => {
    projectNameInput.value = ''
    addProjectPopup.style.visibility = "hidden";
    body.classList.remove('popup')

  })

  //edit popup
  const editPopup = document.createElement('div');
    editPopup.classList.add('popup-element')
    editPopup.classList.add('edit-popup')
    body.append(editPopup);
    
    const editForm = document.createElement('form')
    editForm.classList.add('edit-form')
    editPopup.append(editForm)

    //title edit container
    const titleEditContainer = document.createElement('div')
    editForm.append(titleEditContainer)

    const titleEditLabel = document.createElement('label')
    titleEditLabel.textContent = "Title: "
    titleEditLabel.classList.add('edit-category-label')
    titleEditContainer.append(titleEditLabel)

    const titleEdit = document.createElement('textarea');
    titleEdit.rows = "1"
    titleEdit.classList.add('title-edit')
    titleEdit.required = true;
    
    titleEditContainer.append(titleEdit)

    // description edit container
    const descriptionEditContainer = document.createElement('div')
    editForm.append(descriptionEditContainer)

    const descEditLabel = document.createElement('label')
    descEditLabel.textContent = "Description: "
    descEditLabel.classList.add('edit-category-label')
    descriptionEditContainer.append(descEditLabel)

    const descriptionEdit = document.createElement('textarea')
    descriptionEdit.rows = "2"
    descriptionEdit.classList.add('description-edit')
    // descriptionEdit.value = task.getDescription();
    descriptionEditContainer.append(descriptionEdit);

    // due date edit container
    const dueEditCont = document.createElement('div')
    editForm.append(dueEditCont)

    const dueEditLabel = document.createElement('label')
    dueEditLabel.classList.add('edit-category-label')
    dueEditLabel.textContent = "Due Date: "
    dueEditCont.append(dueEditLabel)

    const dueDateEdit = document.createElement('input');
    dueDateEdit.classList.add('due-date-edit')
    dueDateEdit.type='date';
    dueDateEdit.required = true;
    dueEditCont.append(dueDateEdit);


    // priority edit container
    const priorityEditContainer = document.createElement('div');
    editForm.append(priorityEditContainer);
    priorityEditContainer.required = true;
    const priorityLabel = document.createElement('div');
    priorityLabel.textContent = 'Priority: '
    priorityEditContainer.append(priorityLabel);
    priorityEditContainer.id = 'priority-edit-container'

    const priorityRadioContainer = document.createElement('div')
    priorityEditContainer.append(priorityRadioContainer)
    priorityRadioContainer.classList.add('priority-radio-container')

    const lowContainer = document.createElement('div')
    lowContainer.classList.add('low-container')
    priorityRadioContainer.append(lowContainer)

    const lowRadio = document.createElement('input');
    lowRadio.setAttribute('type', 'radio')
    lowRadio.setAttribute('name', 'priority-edit')
    lowRadio.setAttribute('id','low')
    lowRadio.setAttribute('value','low')
    lowRadio.classList.add('edit-radio')
    lowContainer.append(lowRadio)

    
    

    const lowLabel = document.createElement('label')
    lowLabel.textContent="Low"
    lowLabel.setAttribute('for','low')
    lowContainer.append(lowLabel)

    const mediumContainer = document.createElement('div')
    mediumContainer.classList.add('medium-container')
    priorityEditContainer.append(mediumContainer)

    const mediumRadio = document.createElement('input');
    mediumRadio.setAttribute('type','radio')
    mediumRadio.setAttribute('name','priority-edit')
    mediumRadio.setAttribute('id','medium')
    mediumRadio.setAttribute('value','medium')
    mediumRadio.classList.add('edit-radio')
    mediumContainer.append(mediumRadio)

    const mediumLabel = document.createElement('label')
    mediumLabel.textContent = 'Medium'
    mediumLabel.setAttribute('for', 'medium')
    mediumContainer.append(mediumLabel)


    const highContainer = document.createElement('div')
    highContainer.classList.add('high-container')
    priorityEditContainer.append(highContainer)

    const highRadio = document.createElement('input')
    highRadio.setAttribute('type','radio')
    highRadio.setAttribute('name','priority-edit')
    highRadio.setAttribute('id','high')
    highRadio.setAttribute('value','high')
    highRadio.classList.add('edit-radio')
    highContainer.append(highRadio)

    const highLabel = document.createElement('label')
    highLabel.textContent='High'
    highLabel.setAttribute('for', 'high')
    highContainer.append(highLabel)


    // submit button
    const submitEditForm = document.createElement('input')
    submitEditForm.type='submit'
    submitEditForm.value = "Confirm Edit"
    submitEditForm.classList.add('submit-edit-form')
    editForm.addEventListener(('submit'), (event) => {
      event.preventDefault();
    })
    editForm.append(submitEditForm)




    

    //close edit popup
    const closeEdit = document.createElement('img');
      closeEdit.classList.add('close')
      closeEdit.style.width = "20px"
      closeEdit.src = closeSvg;

      closeEdit.addEventListener('click', () => {
        editPopup.style.visibility = "hidden";
        body.classList.remove('popup')
        const priorityRadios = document.querySelectorAll('.edit-radio');
        
        //reset values
        titleEdit.value = ""
        descriptionEdit.value = ""
        dueDateEdit.value = dueDateEdit.defaultValue;
        priorityRadios.forEach((radio) => {
          radio.checked = false;
        })

      })
      editPopup.append(closeEdit)

      editPopup.style.visibility = "hidden"
    


  let currentProject = app.projects[0];


  function changeCurrentProject(newProj) {
    currentProject = newProj;
  }

  function getCurrentProject() {
    return currentProject;
  }

  //load tasks in home project
  const projectDisplay = document.createElement('div');
  projectDisplay.classList.add('project-display');
  content.append(projectDisplay);
  
  const projectDisplayTitle = document.createElement('div');
  projectDisplayTitle.classList.add('project-display-title');
  projectDisplay.append(projectDisplayTitle);

  const taskDisplayContainer = document.createElement('div')
  taskDisplayContainer.classList.add('task-display-container')
  projectDisplay.append(taskDisplayContainer)

  const taskDisplay = document.createElement('div');
  taskDisplay.classList.add('task-display');
  taskDisplayContainer.append(taskDisplay);

  const taskAddContainer = document.createElement('div');
  taskAddContainer.classList.add('task-add-container');
  taskDisplayContainer.append(taskAddContainer)

  


  const taskAddButton = document.createElement('button');
  taskAddButton.classList.add('task-add-button');
  taskAddContainer.append(taskAddButton)
  const taskAddCircle = document.createElement('img');
  taskAddCircle.src = plusCircleSvg;
  const taskAddSpan = document.createElement('span')
  taskAddSpan.classList.add('task-add-span')
  taskAddButton.append(taskAddSpan)
  taskAddSpan.append(taskAddCircle)
  const taskAddText = document.createElement('p')
  taskAddText.textContent = "Add Task"
  taskAddSpan.append(taskAddText)

  renderTasks(currentProject)
  

}



export {pageLoad}