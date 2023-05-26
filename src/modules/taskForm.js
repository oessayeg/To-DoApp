import { addTaskButton, addTaskEvent } from "./displayProject";

export default function taskForm(project)
{
	const article = document.querySelector("article");
	const divForm = document.createElement("div");
	const taskTitle = document.createElement("input");
	const taskDueDate = document.createElement("input");
	const titleLabel = document.createElement("label");
	const dueDateLabel = document.createElement("label");

	divForm.setAttribute("id", "new-task-form");
	taskTitle.type = "text";
	taskTitle.setAttribute("id", "task-title");
	taskDueDate.type = "date";
	taskDueDate.setAttribute("id", "task-due-date");
	titleLabel.setAttribute("for", "task-title");
	titleLabel.innerHTML = "Task<br>";
	dueDateLabel.setAttribute("for", "task-due-date");
	dueDateLabel.innerHTML = "Due date<br>";

	divForm.appendChild(titleLabel);
	divForm.appendChild(taskTitle);
	article.appendChild(divForm);
	// article.appendChild(dueDateLabel);
	// article.appendChild(taskDueDate);
	addAndCancelButtons(project);
}

function addAndCancelButtons(project)
{
	const divForm = document.querySelector("#new-task-form");
	const addButton = document.createElement("button");
	const cancelButton = document.createElement("button");
	const taskTitle = document.querySelector("#task-title");
	const article = document.querySelector("article");

	addButton.setAttribute("id", "add-task");
	cancelButton.setAttribute("id", "cancel-task");
	divForm.appendChild(addButton);
	divForm.appendChild(cancelButton);
	addButton.textContent = "Add";
	cancelButton.textContent = "Cancel";
	cancelButton.addEventListener("click", (e) =>
	{
		divForm.remove();
		addTaskButton();
		addTaskEvent();
	});

	addButton.addEventListener("click", (e) =>
	{
		const newElement = document.createElement("p");

		let task = 
		{
			title : taskTitle.value,
			dueDate : null
		}
		console.log(project.tasks);
		project.tasks.push(task);
		divForm.remove();
		newElement.textContent = task.title;
		article.appendChild(newElement);
		addTaskButton(project);
		addTaskEvent(project);	

	});
}