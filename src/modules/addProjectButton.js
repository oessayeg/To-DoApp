import project from './project.js'

export default function newProjectButton(projectArray)
{
	const button = document.querySelector("#project-button");
	const projectList = document.querySelector("#Projects").children[1];
	
	button.addEventListener("click", (e) => 
	{
		if (!button.className)
		{
			const newField = document.createElement("input");
			const submitDiv = document.createElement("div");
			const submit = document.createElement("button");
			const cancel = document.createElement("button");

			submit.textContent = "Submit";
			cancel.textContent = "Cancel";

			newField.setAttribute("id", "projectName");
			newField.type = "text";
			newField.minLength = 1;
			newField.maxLength = 15;
			projectList.appendChild(newField);
			newField.focus();
			button.className = "selected";

			submitDiv.appendChild(submit);
			submitDiv.appendChild(cancel);

			projectList.appendChild(submitDiv);

			cancelEvent(cancel, projectArray);
			submitEvent(submit, projectArray);

		}
	})
}

function cancelEvent(cancelButton, projectArray)
{
	const uList = document.querySelector("#Projects").children[1];
	const addProjectButton = document.querySelector("#project-button");

	cancelButton.addEventListener("click", (e) => 
	{
		uList.lastChild.remove();
		uList.lastChild.remove();
		addProjectButton.className = "";
		console.log(projectArray);
	});
}

function submitEvent(submitButton, projectArray)
{
	const uList = document.querySelector("#Projects").children[1];
	const addProjectButton = document.querySelector("#project-button");
	const inputField = document.querySelector("#projectName");

	submitButton.addEventListener("click", (e) =>
	{
		const newList = document.createElement("li");

		newList.textContent = inputField.value;
		projectArray.push({
			name: inputField.value,
			tasks: []
		})
		uList.lastChild.remove();
		uList.lastChild.remove();
		addProjectButton.className = "";
		uList.appendChild(newList);
	})
}