export default function displayTask(task, project)
{
	const article = document.querySelector("article");
	const taskDiv = document.createElement("div");
	const checkBox = document.createElement("input");
	const taskName = document.createElement("h3");
	const taskDate = document.createElement("p");
	const taskAndCheckBox = document.createElement("div");
	const remove = document.createElement("p");

	taskAndCheckBox.setAttribute("id", "task-checkbox");
	taskDate.textContent = task.dueDate;
	taskDiv.setAttribute("id", "task");
	taskName.textContent = task.name;
	checkBox.type = "checkbox";
	checkBox.className = "task-check";
	remove.textContent = "x";
	remove.className = "remove-task";

	taskAndCheckBox.appendChild(checkBox);
	taskAndCheckBox.appendChild(taskName);
	if (task.priority == "Low")
		taskDiv.style.borderLeft = "3px solid #00c417";
	else if (task.priority == "Medium")
		taskDiv.style.borderLeft = "3px solid #FFA500";
	else
		taskDiv.style.borderLeft = "3px solid #FF0000";
    taskDiv.appendChild(taskAndCheckBox);
	taskDiv.appendChild(taskDate);
	taskDiv.appendChild(remove);
	article.appendChild(taskDiv);
	//end here
	checkBoxTask(checkBox);
	removeTaskEvent(remove, taskDiv, task, project);
}

function removeTaskEvent(button, taskDiv, task, project)
{
	button.addEventListener("click", (e) =>
	{
		taskDiv.remove();
		project.tasks = project.tasks.filter(e => e.name != task.name);
	});
}

function checkBoxTask(checkBox)
{
	checkBox.addEventListener("click", (e) =>
	{
		if (checkBox.checked)
			checkBox.nextSibling.style.textDecoration = "line-through";
		else
			checkBox.nextSibling.style.textDecoration = "none";
	});
}