// Css modules
import './style/style.css';
import './style/navigation.css';
import './style/rightContent.css';
import './style/header.css';

// Js modules
import hideNavigation from './modules/hideNav';
import addProjectHandler from './modules/addProjectButton.js';
import putHeader from './modules/header';
import putHomeNav from './modules/homeNav';
import putAddProjectButton from './modules/projectAddButton.js';
import { displayHighPriorityTasks, displayThisMonth,
	displayToday, displayAll, showTodayTasks } from './modules/homeDisplay.js';
import displayNameOfProjects from './modules/displayProjectsName';
import newProjectButton from './modules/addProjectButton.js';

// Initial example tasks (If a user visites the page for the first time)
let obj = [
	{
		name: "Day Routine",
		tasks: [
				{name: "Wake up at 8:30 am.", dueDate: "2023-09-03", priority: "High", isChecked: true},
				{name: "Prepare and eat breakfast at 9:00 am.", dueDate: "2023-09-03", priority: "High", isChecked: true},
				{name: "Work out or read a book for 45 minutes.", dueDate: "2023-09-03", priority: "Medium", isChecked: false},
				{name: "Study for 2h 30min, no break.", dueDate: "2023-09-03", priority: "High", isChecked: false}
			]
	},
	{
		name: "House cleaning",
		tasks: [
			 {name: "Take out the trash.", dueDate: "2023-06-25", priority: "High", isChecked: false},
			{name: "Clean the dishes.", dueDate: "2023-06-25", priority: "High", isChecked: true},
			{name: "Clean the toilet.", dueDate: "2023-06-25", priority: "High", isChecked: false},
			{name: "Buy toilet paper.", dueDate: "2023-06-25", priority: "High", isChecked: false}
		]
	}
]

// Main array object that'll contain projects and tasks
let projects = [];

// localStorage
if (localStorage.getItem("projects"))
	projects = JSON.parse(localStorage.getItem("projects"))
else
	projects = obj;

putAddProjectButton(projects.length);
addProjectHandler(projects);
putHeader();
putHomeNav();
hideNavigation(document.querySelector("#hide-nav"));
displayNameOfProjects(projects);
putAddProjectButton(projects.length);
newProjectButton(projects);
showTodayTasks(document.querySelector("#today-tasks"), projects);

// Home display events
displayHighPriorityTasks(projects);
displayThisMonth(projects);
displayToday(projects);
displayAll(projects);
