import displayProject from './displayProject.js';
import projectPng from '../images/t.png';

export default function newProjectButton(projectArray)
{
	const button = document.querySelector("#project-button");
	const projectList = document.querySelector("#Projects");
	const newProjectBlock = document.createElement("div");

	newProjectBlock.setAttribute("id", "project-creator");
	button.addEventListener("click", (e) => 
	{
		if (!button.className)
		{
			const inputDiv = document.createElement("div");
			const newField = document.createElement("input");
			const submitDiv = document.createElement("div");
			const submit = document.createElement("button");
			const cancel = document.createElement("button");

			submit.textContent = "Submit";
			cancel.textContent = "Cancel";
			newField.setAttribute("id", "projectName");
			newField.type = "text";
			newField.placeholder = "Project name";
			newField.minLength = 1;
			newField.maxLength = 19;
			inputDiv.appendChild(newField);
			newProjectBlock.appendChild(inputDiv);
			button.className = "selected";
			
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
		}
	})
}

function cancelEvent(cancelButton, projectArray)
{
	const projectSection = document.querySelector("#Projects");
	const addProjectButton = document.querySelector("#project-button");

	cancelButton.addEventListener("click", (e) => 
	{
		// Always remove children of a div if you will create the same one again
		while (projectSection.lastChild.hasChildNodes())
			projectSection.lastChild.firstChild.remove();
		projectSection.lastChild.remove();
		addProjectButton.className = "";
	});
}

function submitProject(submitButton, projectArray)
{
	const projectSection = document.querySelector("#Projects");
	const inputField = document.querySelector("#projectName");
	const addProjectButton = document.querySelector("#project-button");

	submitButton.addEventListener("click", (e) =>
	{
		const newProject = document.createElement("div");
		const projectName = document.createElement("h4");
		const projectIcon = document.createElement("img");

		if (projectArray.length == 0)
			newProject.style.marginTop = "15px";
		newProject.id = "project-name-icon";
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
		addProjectButton.className = "";
		displayProject(obj, newProject, projectArray);
	});
}