export default function displayTask(task, project)
{
	const article = document.querySelector("article");
	const taskDiv = document.createElement("div");
	const checkBox = document.createElement("input");
	const taskName = document.createElement("h3");
	const taskDate = document.createElement("p");
	const taskAndDate = document.createElement("div");
	const remove = document.createElement("p");

	taskAndDate.setAttribute("id", "task-date");
	taskDate.textContent = task.dueDate;
	taskDiv.setAttribute("id", "task");
	taskName.textContent = task.name;
	checkBox.type = "checkbox";
	checkBox.className = "task-check";
	remove.textContent = "x";
	remove.className = "remove-task";

	taskAndDate.appendChild(taskName);
	taskAndDate.appendChild(taskDate);
	taskDiv.appendChild(checkBox);
	taskDiv.appendChild(taskAndDate);
	taskDiv.appendChild(remove);
	article.appendChild(taskDiv);
	
	removeTaskEvent(remove, taskDiv, task, project);
}

function removeTaskEvent(button, taskDiv, task, project)
{
	button.addEventListener("click", (e) =>
	{
		taskDiv.remove();
		console.log(project.tasks.filter(e => e.name != task.name));
		project.tasks = project.tasks.filter(e => e.name != task.name);

	});
}