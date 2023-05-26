import './style/style.css';
import './style/navigation.css';
import './style/rightContent.css';
import hideNavigation from './modules/hideNav';
import addProjectHandler from './modules/addProjectButton.js';

let projects = [];

addProjectHandler(projects);
hideNavigation(document.querySelector("#hide-nav"));