export default function isEmpty()
{
	const taskName = document.querySelector("#task-title");
	const date = document.querySelector("#task-due-date");
	
	if (document.querySelector(".task-warning") || document.querySelector(".date-warning"))
		return true;
	else if (!taskName.value)
	{
		const warning = document.createElement("p");
		const titleBlock = document.querySelector("#title-block");

		warning.className = "task-warning";
		warning.textContent = "Please specify a task name";
		warning.style.color = "red";
		warning.style.fontSize = "15px";
		warning.style.margin = "0";
		titleBlock.appendChild(warning);
		taskName.addEventListener("input", (e) =>
		{
			warning.remove();
		})
		return true;
	}
	else if (!date.value)
	{
		console.log("Here");
		const dateWarning = document.createElement("p");
		const dueDate = document.querySelector("#due-date");

		dateWarning.className = "date-warning";
		dateWarning.textContent = "Please specify a date";
		dateWarning.style.color = "red";
		dateWarning.style.fontSize = "15px";
		dateWarning.style.margin = "0";
		dueDate.appendChild(dateWarning);
		date.addEventListener("input", (e) =>
		{
			dateWarning.remove();
		})
		return true;
	}
	return false;
}
