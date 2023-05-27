import { addTaskButton, addTaskEvent } from "./displayProject";
import { cancelHandler, addHandler } from "./andCancelTask";
import priorityButtonHandler from "./priorityButtons.js";

export default function taskForm(project)
{
	const article = document.querySelector("article");

	// Block that's gonna contain all the task infos
	const taskBlock = document.createElement("div");

	taskBlock.setAttribute("id", "task-block");
	if (project.tasks.length != 0)
		taskBlock.style.marginTop = "30px";
	taskBlock.style.width = "90%";
    taskBlock.style.alignSelf = "center";
	// Task title
	const taskTitle = document.createElement("input");
	const titleLabel = document.createElement("label");
	const titleBlock = document.createElement("div");
	
	taskTitle.type = "text";
	titleBlock.setAttribute("id", "title-block");
	taskTitle.setAttribute("id", "task-title");
	titleLabel.setAttribute("for", "task-title");
	titleLabel.innerHTML = "Task<br>";
	
	titleBlock.appendChild(titleLabel);
	titleBlock.appendChild(taskTitle);
	
	// Due date
	const taskDueDate = document.createElement("input");
	const dueDateLabel = document.createElement("label");
	const datePriorityBlock = document.createElement("div");
	const dateBlock = document.createElement("div");

	dateBlock.setAttribute("id", "due-date");
	datePriorityBlock.setAttribute("id", "date-priority");
	taskDueDate.type = "date";
	taskDueDate.setAttribute("id", "task-due-date");
	dueDateLabel.setAttribute("for", "task-due-date");
	dueDateLabel.innerHTML = "Due date<br>";
	dateBlock.appendChild(dueDateLabel);
	dateBlock.appendChild(taskDueDate);
	datePriorityBlock.appendChild(dateBlock);

	// Priority
	const priorityBlock = document.createElement("div");
	const priorityTitle = document.createElement("label");
	const lowButton = document.createElement("button");
	const mediumButton = document.createElement("button");
	const highButton = document.createElement("button");
	const allButtons = document.createElement("div");

	allButtons.setAttribute("id", "priority-choice")
	// priorityTitle.textContent = "Priority : ";
	priorityTitle.setAttribute("for", "priority-choice");
	priorityTitle.textContent = "Priority : ";
	priorityBlock.setAttribute("id", "priority-block");
	lowButton.textContent = "Low";
	mediumButton.textContent = "medium";
	highButton.textContent = "high";
	allButtons.appendChild(lowButton);
	allButtons.appendChild(mediumButton);
	allButtons.appendChild(highButton);

	priorityBlock.appendChild(priorityTitle);
	priorityBlock.appendChild(allButtons);


	datePriorityBlock.appendChild(priorityBlock);

	// 'Add' and 'Cancel' Button
	const buttonBlock = document.createElement("div");
	const addButton = document.createElement("button");
	const cancelButton = document.createElement("button");

	buttonBlock.setAttribute("id", "add-cancel-task");
	addButton.textContent = "Add";
	cancelButton.textContent = "Cancel";
	buttonBlock.appendChild(addButton);
	buttonBlock.appendChild(cancelButton);

	// Children to article
	taskBlock.appendChild(titleBlock);
	taskBlock.appendChild(datePriorityBlock);
	taskBlock.appendChild(buttonBlock);
	article.appendChild(taskBlock);

	// Cancel and Add button event
	cancelHandler(cancelButton, project);
	addHandler(addButton, project);

	// Priority buttons event
	priorityButtonHandler();

}

// function addAndCancelButtons(project)
// {
// 	const divForm = document.querySelector("#new-task-form");
// 	const addButton = document.createElement("button");
// 	const cancelButton = document.createElement("button");
// 	const taskTitle = document.querySelector("#task-title");
// 	const article = document.querySelector("article");

// 	addButton.setAttribute("id", "add-task");
// 	cancelButton.setAttribute("id", "cancel-task");
// 	divForm.appendChild(addButton);
// 	divForm.appendChild(cancelButton);
// 	addButton.textContent = "Add";
// 	cancelButton.textContent = "Cancel";
// 	cancelButton.addEventListener("click", (e) =>
// 	{
// 		divForm.remove();
// 		addTaskButton();
// 		addTaskEvent();
// 	});

// 	addButton.addEventListener("click", (e) =>
// 	{
// 		const newElement = document.createElement("p");

// 		let task = 
// 		{
// 			title : taskTitle.value,
// 			dueDate : null
// 		}
// 		project.tasks.push(task);
// 		divForm.remove();
// 		newElement.textContent = task.title;
// 		article.appendChild(newElement);
// 		addTaskButton(project);
// 		addTaskEvent(project);	

// 	});
// }