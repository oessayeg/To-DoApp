import { addTaskButton, addTaskEvent } from "./displayProject";
import displayTask from "./displayTask";

export function cancelHandler(cancelButton, project)
{
	cancelButton.addEventListener("click", (e) =>
	{
		document.querySelector("#task-block").remove();
		addTaskButton(project);
		addTaskEvent(project);
	})
}

export function addHandler(addButton, project)
{
	const taskName = document.querySelector("#task-title");

	addButton.addEventListener("click", (e) =>
	{
		let task = 
		{
			name : taskName.value,
			dueDate: null,
			priority: null
		};
		project.tasks.push(task);
		document.querySelector("#task-block").remove();
		console.log(project);
		displayTask(task);
		addTaskButton(project);
		addTaskEvent(project);
	})
}