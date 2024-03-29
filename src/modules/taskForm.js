import { cancelHandler, addHandler } from "./andCancelTask";
import priorityButtonHandler from "./priorityButtons.js";

export default function taskForm(project, projectArray)
{
	const article = document.querySelector("#article-container");
	const taskBlock = document.createElement("div");

	taskBlock.setAttribute("id", "task-block");
	if (project.tasks.length != 0)
		taskBlock.style.marginTop = "30px";
	taskBlock.style.width = "100%";
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
	priorityTitle.setAttribute("for", "priority-choice");
	priorityTitle.textContent = "Priority : ";
	priorityBlock.setAttribute("id", "priority-block");
	lowButton.textContent = "Low";
	lowButton.id = "low";
	mediumButton.textContent = "Medium";
	mediumButton.id = "medium";
	highButton.textContent = "High";
	highButton.id = "high";
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

	addButton.id = "add-task-button";
	cancelButton.id = "cancel-task-button";
	buttonBlock.setAttribute("id", "add-cancel-task");
	addButton.textContent = "Add";
	cancelButton.textContent = "Cancel";
	buttonBlock.appendChild(addButton);
	buttonBlock.appendChild(cancelButton);

	// Children to article
	taskBlock.appendChild(titleBlock);
	taskBlock.appendChild(datePriorityBlock);
	taskBlock.appendChild(buttonBlock);
	// taskAndTaskForm.appendChild(taskBlock);
	article.appendChild(taskBlock);

	// Cancel and Add button event
	cancelHandler(cancelButton, project, projectArray);
	addHandler(addButton, project, projectArray);
	taskTitle.focus();
	// Priority buttons event
	priorityButtonHandler();
}