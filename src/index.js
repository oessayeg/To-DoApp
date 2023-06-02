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

// Main array object that'll contain projects and tasks
let projects = [];

// localStorage
if (localStorage.getItem("projects"))
	projects = JSON.parse(localStorage.getItem("projects"))
else
	projects = [];

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