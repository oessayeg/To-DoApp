import taskForm from "./taskForm";

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
		// title.style.fontSize = "55px";
		article.appendChild(title);

		for (let proj of project.tasks)
		{
			const newP = document.createElement("p");

			newP.textContent = proj.title;
			article.appendChild(newP);
		}
		addTaskButton(project);
		addTaskEvent(project);
	})
}

export function addTaskButton(project)
{
	const addNoteButton = document.createElement("button");
	const article = document.querySelector("article");

	addNoteButton.setAttribute("id", "task-button");
	addNoteButton.textContent = "New task";
	article.appendChild(addNoteButton);
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