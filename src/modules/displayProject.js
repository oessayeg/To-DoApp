import taskForm from "./taskForm";
import displayTask from "./displayTask";
import { toNormalState } from "./homeDisplay.js"

export default function displayProject(project, list, projectArray)
{
	list.addEventListener("click", (e) =>
	{
		const titleBlock = document.createElement("div");
		const title = document.createElement("h2");
		const article = document.querySelector("article");

		toNormalState(document.querySelectorAll("#Home > div"));
		titleBlock.id = "title-of-project";
		title.setAttribute("id", "project-title-show");
		while (article.firstChild)
			article.firstChild.remove();
		title.textContent = project.name;
		titleBlock.appendChild(title);
		article.appendChild(titleBlock);
		
		project.tasks.forEach(element => displayTask(element, project, projectArray));
		addTaskButton(project);
		addTaskEvent(project, projectArray);
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
	addTaskButton.style.marginRight = "60px";
	addTaskBlock.appendChild(addTaskButton);
	article.appendChild(addTaskBlock);
}

export function addTaskEvent(project, projectArray)
{
	const addNoteButton = document.querySelector("#task-button");

	addNoteButton.addEventListener("click", (e) =>
	{
		addNoteButton.remove();
		taskForm(project, projectArray);
	})
}