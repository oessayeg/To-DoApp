import displayTask from "./displayTask";

export function displayAll(projectArray)
{
	const allButton = document.querySelector("#all-tasks");

	allButton.addEventListener("click", (e) =>
	{
		toNormalState(document.querySelectorAll("#Home > div"));
		enlargeButton(allButton);
		displayTitle("All tasks");
		projectArray.forEach(project => {
			project.tasks.forEach(task => {
				displayTask(task, project);
			})
		})
	})
}

export function displayToday(projectArray)
{
	const todayButton = document.querySelector("#today-tasks");

	todayButton.addEventListener("click", (e) =>
	{
		toNormalState(document.querySelectorAll("#Home > div"));
		enlargeButton(todayButton);
		displayTitle("Today");
		projectArray.forEach(project =>
			{
				project.tasks.forEach(task =>
				{
					if (task.dueDate.split("-")[2] == new Date().getDate())
						displayTask(task, project);
				})
			})
	})
}

export function displayThisMonth(projectArray)
{
	const thisMonthButton = document.querySelector("#this-month-tasks");

	thisMonthButton.addEventListener("click", (e) =>
	{
		toNormalState(document.querySelectorAll("#Home > div"));
		enlargeButton(thisMonthButton);
		displayTitle("This month");
		projectArray.forEach(project => {
			project.tasks.forEach(task => {
				if (Number(task.dueDate.split("-")[1]) == new Date().getMonth() + 1)
					displayTask(task, project);
			})
		})
	})
}

export function displayHighPriorityTasks(projectArray)
{
	const highPriority = document.querySelector("#high-priority-tasks");

	highPriority.addEventListener("click", (e) =>
	{
		toNormalState(document.querySelectorAll("#Home > div"));
		enlargeButton(highPriority);
		displayTitle("High priority");

		projectArray.forEach(project => 
			{
				project.tasks.forEach(task =>
					{
						if (task.priority === "High")
							displayTask(task, project);
					})
			})
	})
}

function enlargeButton(button)
{
	if (!button.className)
	{
		button.className = "clicked";
		button.style.transform = "scale(1.10)";
		button.style.paddingLeft = "32px";
		button.lastChild.style.fontWeight = "900";
	}
}

export function toNormalState(homeButtons)
{
	homeButtons.forEach(button => 
	{
		if (button.className)
		{
			button.style.transform = "none";
			button.className = "";
			button.style.paddingLeft = "22px";
			button.lastChild.style.fontWeight = "400";
			button.addEventListener("mouseover", () =>
			{
				button.style.transform = "scale(1.10)";
				button.style.paddingLeft = "32px";
			})
			button.addEventListener("mouseleave", () =>
			{
				if (!button.className)
				{
					button.style.transform = "none";
					button.style.paddingLeft = "22px";
				}
			})
		}
	})
}

/* Here I should create a function that takes as parameter a
	task array and displays all those tasks
	function displayTasks(tasksArray, titleOfTheHomeMavigation)
	*/

function displayTitle(homeNavTitle)
{
	const article = document.querySelector("article");
	const titleBlock = document.createElement("div");
	const title = document.createElement("h2");
	
	while (article.firstChild)
		article.firstChild.remove();
	titleBlock.id = "title-of-project";
	title.setAttribute("id", "project-title-show");
	title.textContent = homeNavTitle;
	titleBlock.appendChild(title);
	article.appendChild(titleBlock);
}

function displayHomeTasks(tasksArray, homeNavTitle)
{
	// Task displaying
	// const taskDiv = document.createElement("div");
	// const checkBox = document.createElement("input");
	// const taskName = document.createElement("h3");
	// const taskDate = document.createElement("p");
	// const taskDateBlock = document.createElement("div");
	// const taskAndCheckBox = document.createElement("div");
	// const remove = document.createElement("img");

	// taskAndCheckBox.setAttribute("id", "task-checkbox");
	// taskDateBlock.id = "task-date-block";
	// taskDateBlock.style.width = "128px";
	// taskDateBlock.style.display = "flex";
	// taskDateBlock.style.justifyContent = "center";
	// taskDate.textContent = task.dueDate;
	// taskDate.style.border = "1px solid grey";
	// taskDate.style.display = "inline-block";
	// taskDate.style.borderRadius = "7px";
	// taskDate.style.marginTop = "10px";
	// taskDate.style.marginBottom = "10px";
	// taskDate.style.padding = "5px";
	// taskDiv.setAttribute("id", "task");
	// taskName.textContent = task.name;
	// checkBox.type = "checkbox";
	// checkBox.className = "task-check";
	// // remove.src = deleteTask;
	// remove.style.width = "30px";
	// remove.style.height = "30px";
	// remove.className = "remove-task";

	// taskAndCheckBox.appendChild(checkBox);
	// taskAndCheckBox.appendChild(taskName);
	// if (task.priority == "Low")
	// 	taskDiv.style.borderLeft = "3px solid #00c417";
	// else if (task.priority == "Medium")
	// 	taskDiv.style.borderLeft = "3px solid #FFA500";
	// else
	// 	taskDiv.style.borderLeft = "3px solid #FF0000";
	// taskDateBlock.appendChild(taskDate);
	// taskDiv.appendChild(taskAndCheckBox);
    // taskDiv.appendChild(taskDateBlock);
	// taskDiv.appendChild(remove);
	// article.appendChild(taskDiv);
}