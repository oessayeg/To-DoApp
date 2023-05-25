export default function displayProject(project, list, projectArray)
{
	list.addEventListener("click", (e) =>
	{
		const title = document.createElement("h2");
		const article = document.querySelector("article");

		while (article.firstChild)
			article.firstChild.remove();
		title.textContent = project.name;
		article.appendChild(title);
		// Here I should display all tasks
		addTaskButton(project, projectArray);
	})
}

function addTaskButton(project, projectArray)
{
	const addNoteButton = document.createElement("button");
	const article = document.querySelector("article");

	addNoteButton.setAttribute("id", "task-button");
	addNoteButton.textContent = "New task";
	article.appendChild(addNoteButton);
	addNoteButton.addEventListener("click", (e) =>
	{
		let currentProject;
		
		currentProject = projectArray.find(element => element.name === project.name);

	})
}