import { addTaskButton, addTaskEvent } from "./displayProject.js";
import displayTask from "./displayTask.js";
import isEmpty from "./taskFormCheck.js"

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
		if (!isEmpty())
		{
			let task = 
			{
				name : taskName.value,
				dueDate: null,
				priority: null
			};
			project.tasks.push(task);
			document.querySelector("#task-block").remove();
			displayTask(task);
			addTaskButton(project);
			addTaskEvent(project);
		}
	})
}