import taskForm from "./taskForm";
import displayTask from "./displayTask";

export default function displayProject(project, list, projectArray)
{
	list.addEventListener("click", (e) =>
	{
		const title = document.createElement("h2");
		const article = document.querySelector("article");

		title.setAttribute("id", "project-title-show");
		while (article.firstChild)
			article.firstChild.remove();
		title.textContent = project.name;
		article.appendChild(title);
		
		project.tasks.forEach(element => displayTask(element, project));
		addTaskButton(project);
		addTaskEvent(project);
	})
}

export function addTaskButton(project)
{
	const addTaskButton = document.createElement("h3");
	const article = document.querySelector("article");

	addTaskButton.setAttribute("id", "task-button");
	addTaskButton.innerHTML = "+&nbsp&nbsp&nbspAdd a task";
	addTaskButton.style.fontSize = "24px";
	addTaskButton.style.textAlign = "right";
	addTaskButton.style.paddingRight = "50px";
	article.appendChild(addTaskButton);
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