import deleteTask from "../images/deleteTask.png";

export default function displayTask(task, project)
{
	const article = document.querySelector("article");
	const taskDiv = document.createElement("div");
	const checkBox = document.createElement("input");
	const taskName = document.createElement("h3");
	const taskDate = document.createElement("p");
	const taskAndCheckBox = document.createElement("div");
	const remove = document.createElement("img");

	taskAndCheckBox.setAttribute("id", "task-checkbox");
	taskDate.textContent = task.dueDate;
	taskDate.style.border = "1px solid grey";
	taskDate.style.padding = "4px";
	taskDate.style.borderRadius = "7px";
	taskDate.style.marginTop = "10px";
	taskDate.style.marginBottom = "10px";
	taskDiv.setAttribute("id", "task");
	taskName.textContent = task.name;
	checkBox.type = "checkbox";
	checkBox.className = "task-check";
	remove.src = deleteTask;
	remove.style.width = "30px";
	remove.style.height = "30px";
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
		{
			checkBox.nextSibling.style.textDecoration = "line-through";
			checkBox.nextSibling.style.opacity = "0.6";
		}
		else
		{
			checkBox.nextSibling.style.textDecoration = "none";
			checkBox.nextSibling.style.opacity = "1";
		}
	});
}