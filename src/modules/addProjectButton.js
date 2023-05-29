import displayProject from './displayProject.js';
import projectPng from '../images/t.png';
import putAddProjectButton from './projectAddButton.js';
// import isEmpty from './taskFormCheck.js';
import isProjectNameEmpty from './projectNameCheck.js';

export default function newProjectButton(projectArray)
{
	const button = document.querySelector("#add-button-icon");
	const projectList = document.querySelector("#Projects");
	const newProjectBlock = document.createElement("div");

	newProjectBlock.setAttribute("id", "project-creator");
	button.addEventListener("click", (e) => 
	{
		button.remove();
		const inputDiv = document.createElement("div");
		const newField = document.createElement("input");
		const submitDiv = document.createElement("div");
		const submit = document.createElement("button");
		const cancel = document.createElement("button");

		submit.className = "submit-project";
		cancel.className = "cancel-project";
		submit.textContent = "Add";
		cancel.textContent = "Cancel";
		newField.setAttribute("id", "projectName");
		newField.type = "text";
		newField.placeholder = "Project name";
		newField.minLength = 1;
		newField.maxLength = 19;
		inputDiv.appendChild(newField);
		if (projectArray.length > 0)
			newProjectBlock.style.marginTop = "8px";
		newProjectBlock.appendChild(inputDiv);
		
		submitDiv.setAttribute("id", "submit-cancel-project");
		submitDiv.appendChild(submit);
		submitDiv.appendChild(cancel);
		newProjectBlock.appendChild(submitDiv);
		if (projectArray.length == 0)
			newProjectBlock.style.marginTop = "15px";
		projectList.appendChild(newProjectBlock);
		newField.focus();
		cancelEvent(cancel, projectArray);
		submitProject(submit, projectArray);
	})
}

function cancelEvent(cancelButton, projectArray)
{
	const projectSection = document.querySelector("#Projects");

	cancelButton.addEventListener("click", (e) => 
	{
		// Always remove children of a div if you will create the same one again
		while (projectSection.lastChild.hasChildNodes())
			projectSection.lastChild.firstChild.remove();
		projectSection.lastChild.remove();
		putAddProjectButton(projectArray.length);
		newProjectButton(projectArray);
	});
}

function submitProject(submitButton, projectArray)
{
	const projectSection = document.querySelector("#Projects");
	const inputField = document.querySelector("#projectName");

	submitButton.addEventListener("click", (e) =>
	{
		if (!isProjectNameEmpty(inputField))
		{
			const newProject = document.createElement("div");
			const projectName = document.createElement("h4");
			const projectIcon = document.createElement("img");
	
			newProject.id = "project-name-icon";
			if (projectArray.length == 0)
				newProject.style.marginTop = "15px";
			projectIcon.style.width = "27px";
			projectIcon.style.height = "27px";
			projectName.textContent = inputField.value;
			projectIcon.src = projectPng;
			let obj = {
				name: inputField.value,
				tasks: []
			}
			projectArray.push(obj);
			newProject.appendChild(projectIcon);
			newProject.appendChild(projectName);
			while (projectSection.lastChild.hasChildNodes())
				projectSection.lastChild.firstChild.remove();
			projectSection.lastChild.remove();
			projectSection.appendChild(newProject);
			putAddProjectButton(projectArray.length);
			newProjectButton(projectArray);
			displayProject(obj, newProject, projectArray);
		}
	});
}