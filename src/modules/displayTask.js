export default function displayTask(task)
{
	const article = document.querySelector("article");
	const taskDiv = document.createElement("div");
	const checkBox = document.createElement("input");
	const taskName = document.createElement("h3");
	const taskDate = document.createElement("p");
	const taskAndDate = document.createElement("div");
	const remove = document.createElement("p");

	taskAndDate.setAttribute("id", "task-date");
	taskDate.textContent = "29-05-2023";
	taskDiv.setAttribute("id", "task");
	taskName.textContent = task.name;
	checkBox.type = "checkbox";
	checkBox.className = "task-check";
	remove.textContent = "x";

	taskAndDate.appendChild(taskName);
	taskAndDate.appendChild(taskDate);
	taskDiv.appendChild(checkBox);
	taskDiv.appendChild(taskAndDate);
	taskDiv.appendChild(remove);
	article.appendChild(taskDiv);
	// Add x button to remove task
}