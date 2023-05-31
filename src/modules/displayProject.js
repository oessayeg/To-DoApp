import taskForm from "./taskForm";
import displayTask from "./displayTask";

export default function displayProject(project, list, projectArray)
{
	list.addEventListener("click", (e) =>
	{
		const titleBlock = document.createElement("div");
		const title = document.createElement("h2");
		const article = document.querySelector("article");

		titleBlock.id = "title-of-project";
		title.setAttribute("id", "project-title-show");
		while (article.firstChild)
			article.firstChild.remove();
		title.textContent = project.name;
		titleBlock.appendChild(title);
		article.appendChild(titleBlock);
		
		project.tasks.forEach(element => displayTask(element, project));
		addTaskButton(project);
		addTaskEvent(project);
	})
}

export function addTaskButton(project)
{
	const addTaskButton = document.createElement("h3");
	const article = document.querySelector("article");
	const addTaskBlock = document.createElement("div");

	addTaskBlock.id = "add-task-block";
	addTaskButton.setAttribute("id", "task-button");
	addTaskButton.innerHTML = "+&nbsp&nbsp&nbspAdd a task";
	addTaskButton.style.fontSize = "24px";
	addTaskButton.style.display = "inline-block";
	addTaskButton.style.marginRight = "30px";
	addTaskBlock.appendChild(addTaskButton);
	article.appendChild(addTaskBlock);
}

export function addTaskEvent(project)
{
	const addNoteButton = document.querySelector("#task-button");

	addNoteButton.addEventListener("click", (e) =>
	{
		addNoteButton.remove();
		taskForm(project);
	})
}