
import { renderTasks, renderTaskss } from "./renderTasks";
import { app } from "../app";
import { editTasks } from "./editTasks";
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

    //details popup
    const detailsPopup = document.createElement('div');
    detailsPopup.classList.add('popup-element')
    detailsPopup.classList.add('details-popup')
      body.append(detailsPopup);

    const detailsPopupTitle = document.createElement('h3')
    detailsPopupTitle.classList.add('details-popup-title')
    detailsPopup.append(detailsPopupTitle)

    const detailsPopupDescription = document.createElement('p');
    detailsPopupDescription.classList.add('details-popup-description')
    detailsPopup.append(detailsPopupDescription)

    const detailsPopupDueDate = document.createElement('p')
    detailsPopupDueDate.classList.add('details-popup-due-date')
    detailsPopup.append(detailsPopupDueDate)

    const detailsPopupPriority = document.createElement('p')
    detailsPopupPriority.classList.add('details-popup-priority')
    detailsPopup.append(detailsPopupPriority)
    
    //close details popup
      const closeDetails = document.createElement('button');
      closeDetails.classList.add('close')
      closeDetails.textContent = "x";
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
    titleEditContainer.append(titleEditLabel)

    const titleEdit = document.createElement('textarea');
    titleEdit.classList.add('title-edit')
    
    titleEditContainer.append(titleEdit)

    // description edit container
    const descriptionEditContainer = document.createElement('div')
    editForm.append(descriptionEditContainer)

    const descEditLabel = document.createElement('label')
    descEditLabel.textContent = "Description: "
    descriptionEditContainer.append(descEditLabel)

    const descriptionEdit = document.createElement('textarea')
    descriptionEdit.classList.add('description-edit')
    // descriptionEdit.value = task.getDescription();
    descriptionEditContainer.append(descriptionEdit);

    // due date edit container
    const dueEditCont = document.createElement('div')
    editForm.append(dueEditCont)

    const dueEditLabel = document.createElement('label')
    dueEditLabel.textContent = "Due Date: "
    dueEditCont.append(dueEditLabel)

    const dueDateEdit = document.createElement('input');
    dueDateEdit.classList.add('due-date-edit')
    dueDateEdit.type='date';
    dueEditCont.append(dueDateEdit);


    // priority edit container
    const priorityEditContainer = document.createElement('div');
    editForm.append(priorityEditContainer);

    const priorityLabel = document.createElement('div');
    priorityLabel.textContent = 'Priority: '
    priorityEditContainer.append(priorityLabel);

    const lowRadio = document.createElement('input');
    lowRadio.setAttribute('type', 'radio')
    lowRadio.setAttribute('name', 'priority-edit')
    lowRadio.setAttribute('id','low')
    lowRadio.setAttribute('value','low')
    lowRadio.classList.add('edit-radio')
    priorityEditContainer.append(lowRadio)

    const lowLabel = document.createElement('label')
    lowLabel.textContent="Low"
    lowLabel.setAttribute('for','low')
    priorityEditContainer.append(lowLabel)

    const mediumRadio = document.createElement('input');
    mediumRadio.setAttribute('type','radio')
    mediumRadio.setAttribute('name','priority-edit')
    mediumRadio.setAttribute('id','medium')
    mediumRadio.setAttribute('value','medium')
    mediumRadio.classList.add('edit-radio')
    priorityEditContainer.append(mediumRadio)

    const mediumLabel = document.createElement('label')
    mediumLabel.textContent = 'Medium'
    mediumLabel.setAttribute('for', 'medium')
    priorityEditContainer.append(mediumLabel)

    const highRadio = document.createElement('input')
    highRadio.setAttribute('type','radio')
    highRadio.setAttribute('name','priority-edit')
    highRadio.setAttribute('id','high')
    highRadio.setAttribute('value','high')
    highRadio.classList.add('edit-radio')
    priorityEditContainer.append(highRadio)

    const highLabel = document.createElement('label')
    highLabel.textContent='High'
    highLabel.setAttribute('for', 'high')
    priorityEditContainer.append(highLabel)


    // submit button
    const submitEditForm = document.createElement('input')
    submitEditForm.type='submit'
    submitEditForm.value = "Confirm Edit"
    editForm.append(submitEditForm)

    

    //close edit popup
    const closeEdit = document.createElement('button');
      closeEdit.classList.add('close')
      closeEdit.textContent = "x";
      closeEdit.addEventListener('click', () => {
        editPopup.style.visibility = "hidden";
        body.classList.remove('popup')
        const priorityRadios = document.querySelectorAll('.edit-radio');
        
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

  renderTasks(currentProject)
  editTasks(currentProject)
  

}



export {pageLoad}