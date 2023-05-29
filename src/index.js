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

let projects = [];

putAddProjectButton(projects.length);
addProjectHandler(projects);
putHeader();
putHomeNav();
hideNavigation(document.querySelector("#hide-nav"));
