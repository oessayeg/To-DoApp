import tasksIcon from '../images/allTasks.png'
import todayIcon from '../images/today.png';
import thisMonth from '../images/thisMonth.png';
import highPriority from '../images/highPriority.png';

export default function putHomeNav()
{
	// All tasks
	const tasksBlock = 	document.querySelector("#all-tasks");
	const allTasksImage = document.createElement("img");
	const title1 = document.createElement("h3");

	allTasksImage.src = tasksIcon;
	allTasksImage.style.width = "23px";
	allTasksImage.style.height = "23px";
	title1.textContent = "All tasks";
	tasksBlock.appendChild(allTasksImage);
	tasksBlock.appendChild(title1);


	// Today
	const todayBlock = 	document.querySelector("#today-tasks");
	const todayTaskImage = document.createElement("img");
	const title2 = document.createElement("h3");

	todayTaskImage.src = todayIcon;
	todayTaskImage.style.width = "23px";
	todayTaskImage.style.height = "23px";
	title2.textContent = "Today";
	todayBlock.appendChild(todayTaskImage);
	todayBlock.appendChild(title2);

	// This month
	const thisMonthBlock = document.querySelector("#this-month-tasks");
	const thisMonthIcon = document.createElement("img");
	const title3 = document.createElement("h3");

	thisMonthIcon.src = thisMonth;
	thisMonthIcon.style.width = "23px";
	thisMonthIcon.style.height = "23px";
	title3.textContent = "This month";
	thisMonthBlock.appendChild(thisMonthIcon);
	thisMonthBlock.appendChild(title3);

	// High priority tasks
	const highPriorityBlock = document.querySelector("#high-priority-tasks");
	const highPriorityIcon = document.createElement("img");
	const title4 = document.createElement("h3");

	highPriorityIcon.src = highPriority;
	highPriorityIcon.style.width = "23px";
	highPriorityIcon.style.height = "23px";
	title4.textContent = "High priority";
	highPriorityBlock.appendChild(highPriorityIcon);
	highPriorityBlock.appendChild(title4);
}

