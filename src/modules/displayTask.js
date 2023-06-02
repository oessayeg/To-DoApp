import deleteTask from "../images/deleteTask.png";
import { displayExcitmentImage } from "./homeDisplay";

export default function displayTask(task, project, projectArray)
{
	const article = document.querySelector("article");
	const taskDiv = document.createElement("div");
	const checkBox = document.createElement("input");
	const taskName = document.createElement("h3");
	const taskDate = document.createElement("p");
	const taskDateBlock = document.createElement("div");
	const taskAndCheckBox = document.createElement("div");
	const remove = document.createElement("img");

	console.log("In displayTask : " + projectArray);
	taskAndCheckBox.setAttribute("id", "task-checkbox");
	taskDateBlock.id = "task-date-block";
	taskDateBlock.style.width = "128px";
	taskDateBlock.style.display = "flex";
	taskDateBlock.style.justifyContent = "center";
	taskDate.textContent = task.dueDate;
	taskDate.style.border = "1px solid black";
	taskDate.style.backgroundColor = "#F9F7F7";
	taskDate.style.color = "#112D4E";
	taskDate.style.display = "inline-block";
	taskDate.style.borderRadius = "7px";
	taskDate.style.marginTop = "10px";
	taskDate.style.marginBottom = "10px";
	taskDate.style.padding = "5px";
	taskDiv.setAttribute("id", "task");
	if (task.isChecked)
	{
		taskName.style.textDecoration = "line-through";
		taskName.style.opacity = "0.5";
		checkBox.checked = true;
	}
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
	taskDateBlock.appendChild(taskDate);
	taskDiv.appendChild(taskAndCheckBox);
    taskDiv.appendChild(taskDateBlock);
	if (!isHomeNav())
		taskDiv.appendChild(remove);
	article.appendChild(taskDiv);
	checkBoxTask(checkBox, task);
	if (!isHomeNav())
		removeTaskEvent(remove, taskDiv, task, project, projectArray);
}

function removeTaskEvent(button, taskDiv, task, project, projectArray)
{
	button.addEventListener("click", (e) =>
	{
		if (!isHomeNav())
		{
			taskDiv.remove();
			console.log(projectArray);
			project.tasks = project.tasks.filter(e => e.name != task.name);
			localStorage.setItem("projects", JSON.stringify(projectArray));
			console.log("Hey from removeTaskEvent");
			if (!taskDiv.nextSibling && isHomeNav())
				displayExcitmentImage();
		}
	});
}

function checkBoxTask(checkBox, task)
{
	checkBox.addEventListener("click", (e) =>
	{
		if (checkBox.checked)
		{
			checkBox.nextSibling.style.textDecoration = "line-through";
			checkBox.nextSibling.style.opacity = "0.4";
			task.isChecked = true;
		}
		else
		{
			checkBox.nextSibling.style.textDecoration = "none";
			checkBox.nextSibling.style.opacity = "1";
			task.isChecked = false;
		}
	});
}

function isHomeNav()
{
	const title = document.querySelector("#project-title-show");

	return (title.textContent == "All tasks" || title.textContent == "This month"
		|| title.textContent == "Today" || title.textContent == "High priority")
}