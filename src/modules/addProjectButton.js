import displayProject from './displayProject.js';
import project from './project.js'

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
			if (projectArray.length > 0)
			newProjectBlock.style.marginTop = "-15px";
			projectList.appendChild(newProjectBlock);
			newField.focus();
			cancelEvent(cancel, projectArray);
			submitEvent(submit, projectArray);

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

function submitEvent(submitButton, projectArray)
{
	const uList = document.querySelector("#Projects").children[1];
	const addProjectButton = document.querySelector("#project-button");
	const inputField = document.querySelector("#projectName");
	const projectSection = document.querySelector("#Projects");

	submitButton.addEventListener("click", (e) =>
	{
		const newList = document.createElement("li");

		newList.textContent = inputField.value;
		let obj = {
			name: inputField.value,
			tasks: []
		}
		projectArray.push(obj);
		while (projectSection.lastChild.hasChildNodes())
			projectSection.lastChild.firstChild.remove();
		projectSection.lastChild.remove();
		addProjectButton.className = "";
		uList.appendChild(newList);
		displayProject(obj, newList, projectArray);
	})
}