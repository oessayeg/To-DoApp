import displayTask from "./displayTask";
import excitedImage from "../images/ExcitedBg.png"

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
				displayTask(task, project, projectArray);
			})
		})
		if (projectArray.every(project => project.tasks.length == 0))
			displayExcitmentImage();
	})
}

export function displayToday(projectArray)
{
	const todayButton = document.querySelector("#today-tasks");

	todayButton.addEventListener("click", (e) =>
	{
		showTodayTasks(todayButton, projectArray);
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
					displayTask(task, project, projectArray);
			})
		})
		let isSameMonth = true;

		projectArray.forEach(project => {
			project.tasks.forEach(t => {
				if (Number(t.dueDate.split("-")[1]) == new Date().getMonth() + 1)
					isSameMonth = false;
			});
		})
		if (isSameMonth)
			displayExcitmentImage();
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
							displayTask(task, project, projectArray);
					})
			})
			let isHigh = true;

			projectArray.forEach(project => {
				if (!project.tasks.every(task => task.priority != "High"))
					isHigh = false;
			})
			if (isHigh)
				displayExcitmentImage();
			
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

export function displayExcitmentImage()
{
	const article = document.querySelector("article");
	const imageToAdd = document.createElement("img");
	const excitedBlock = document.createElement("div");
	const title = document.createElement("h3");

	title.textContent = "Hurray ! No tasks !";
	title.id = "no-tasks-title";
	excitedBlock.id = "excited-vector";
	imageToAdd.src = excitedImage;
	imageToAdd.style.width = "490px";
	imageToAdd.style.height = "490px";
	excitedBlock.appendChild(title);
	excitedBlock.appendChild(imageToAdd);
	article.appendChild(excitedBlock);
}

export function showTodayTasks(todayButton, projectArray)
{
	toNormalState(document.querySelectorAll("#Home > div"));
	enlargeButton(todayButton);
	displayTitle("Today");
	projectArray.forEach(project =>
		{
			project.tasks.forEach(task =>
			{
				if (task.dueDate.split("-")[2] == new Date().getDate())
					displayTask(task, project, projectArray);
			})
		})
		let isToday = true;

		projectArray.forEach(project => {
			if (!project.tasks.every(task => task.dueDate.split("-")[2] != new Date().getDate()))
				isToday = false;
		})
		if (isToday)
			displayExcitmentImage();
}