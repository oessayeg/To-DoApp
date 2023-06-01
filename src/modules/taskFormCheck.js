export default function isEmpty()
{
	const taskName = document.querySelector("#task-title");
	const date = document.querySelector("#task-due-date");
	
	if (document.querySelector(".task-warning") || document.querySelector(".date-warning")
		|| document.querySelector(".priority-warning"))
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
		const dateWarning = document.createElement("p");
		const dueDate = document.querySelector("#due-date");

		dateWarning.className = "date-warning";
		dateWarning.textContent = "Please specify a date";
		dateWarning.style.color = "red";
		dateWarning.style.fontSize = "15px";
		dateWarning.style.margin = "0";
		dateWarning.style.marginBottom = "-17px";
		dueDate.appendChild(dateWarning);
		console.log("Here");
		date.addEventListener("input", (e) =>
		{
			dateWarning.remove();
		})
		return true;
	}
	else
	{
		const buttons = document.querySelectorAll("#priority-choice > button");

		if (!buttons[0].className && !buttons[1].className && !buttons[2].className)
		{
			const priorityWarning = document.createElement("p");
			const pBlock = document.querySelector("#priority-block");

			priorityWarning.className = "priority-warning";
			priorityWarning.textContent = "Please specify a level";
			priorityWarning.style.color = "red";
			priorityWarning.style.fontSize = "15px";
			priorityWarning.style.margin = "0"; 
			priorityWarning.style.marginBottom = "-15px";
			pBlock.appendChild(priorityWarning);
			pBlock.style.justifyContent = "center";
			document.querySelector("#date-priority").style.alignItems = "normal";
			buttons.forEach(button =>
				{
					button.addEventListener("click", (e) =>
					{
						priorityWarning.remove();
						document.querySelector("#date-priority").style.alignItems = "center";
					})
				})
			return true;
		}
	}
	return false;
}
