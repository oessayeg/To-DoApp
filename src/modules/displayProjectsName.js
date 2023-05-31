import projectPng from '../images/t.png';
import displayProject from './displayProject';
import { addDeleteProjectEvent } from './addProjectButton';

export default function displayNameOfProjects(projectArray)
{
	const projectSection = document.querySelector("#Projects");

	removeNameAndInput();
	projectArray.forEach(project =>
	{
		const newProject = document.createElement("div");
		const projectName = document.createElement("h4");
		const projectIcon = document.createElement("img");

		newProject.id = "project-name-icon";
		if (projectArray.indexOf(project) == 0)
			newProject.style.marginTop = "15px";
		projectIcon.style.width = "27px";
		projectIcon.style.height = "27px";
		projectName.textContent = project.name;
		projectName.style.width = "180px";
		projectName.style.wordWrap = "break-word";
		projectIcon.src = projectPng;
		newProject.appendChild(projectIcon);
		newProject.appendChild(projectName);
		projectSection.appendChild(newProject);
		if (projectName.offsetHeight > 48 && projectArray.indexOf(project) > 0)
		{
			newProject.style.marginBottom = "20px";
			newProject.style.marginTop = "30px";
		}
		else if (projectName.offsetHeight > 48)
		{
			newProject.style.marginTop = "30px";
			newProject.style.marginBottom = "20px";
		}
		else if (projectName.offsetHeight > 25 && projectArray.indexOf(project) > 0)
		{
			newProject.style.marginBottom = "10px";
			newProject.style.marginTop = "10px";
		}
		else if (projectName.offsetHeight > 25)
		{
			newProject.style.marginTop = "20px";
			newProject.style.marginBottom = "10px";
		}
		
		addDeleteProjectEvent(newProject, projectArray, project);
		displayProject(project, newProject, projectArray);
	})
}

function removeNameAndInput()
{
	const projectSection = document.querySelector("#Projects");
	const allNames = document.querySelectorAll("#project-name-icon");

	allNames.forEach(block =>
	{
		block.remove();
	})

	while (projectSection.lastChild.hasChildNodes())
		projectSection.lastChild.firstChild.remove();
	projectSection.lastChild.remove();
}