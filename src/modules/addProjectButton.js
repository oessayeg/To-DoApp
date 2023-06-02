import putAddProjectButton from './projectAddButton.js';
import isProjectNameEmpty from './projectNameCheck.js';
import deleteIcon from '../images/delete.png'
import displayNameOfProjects from './displayProjectsName.js';
import { isCreated } from './projectNameCheck.js';

export default function newProjectButton(projectArray)
{
	const button = document.querySelector("#add-button-icon");
	const projectList = document.querySelector("#Projects");
	const newProjectBlock = document.createElement("div");

	newProjectBlock.setAttribute("id", "project-creator");
	button.addEventListener("click", (e) => 
	{
		document.querySelector("#global-button-icon").remove();
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
		newField.maxLength = 23;
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
	submitButton.addEventListener("click", (e) =>
	{
		createAndDisplayProject(projectArray);
	});
	document.querySelector("#projectName").addEventListener("keydown", (e) =>
	{
		if (e.key === "Enter")
		{
			createAndDisplayProject(projectArray);
		}
	});
}

export function addDeleteProjectEvent(block, projectArray, objToFind)
{
	const removeIcon = document.createElement("img");

	removeIcon.id = "remove-project-icon";
	removeIcon.src = deleteIcon;
	removeIcon.style.width = "10px";
	removeIcon.style.height = "10px";

	// Add delete icon when hovered
	block.addEventListener("mouseover", (event) => 
	{
		block.appendChild(removeIcon);
		removeIcon.addEventListener("click", (e) =>
		{
			let index = projectArray.indexOf(objToFind);
			if (index >= 0)
			{
				projectArray.splice(index, 1);
				localStorage.setItem("projects", JSON.stringify(projectArray));
				displayNameOfProjects(projectArray);
				putAddProjectButton(projectArray.length);
				newProjectButton(projectArray);
			}
		});
	});

	// Remove delete icon when mouse leaves
	block.addEventListener("mouseleave", (event) =>
	{
		if (document.querySelector("#remove-project-icon"))
			document.querySelector("#remove-project-icon").remove();
	});
}

function createAndDisplayProject(projectArray)
{
	const inputField = document.querySelector("#projectName");

	if (!isProjectNameEmpty(inputField) && !isCreated(inputField, projectArray))
	{
		let obj = {
			name: inputField.value,
			tasks: []
		}
		projectArray.push(obj);
		localStorage.setItem("projects", JSON.stringify(projectArray));
		displayNameOfProjects(projectArray);
		putAddProjectButton(projectArray.length);
		newProjectButton(projectArray);
	}
}