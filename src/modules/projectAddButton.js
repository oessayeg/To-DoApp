import plusIcon from '../images/add.png';

export default function putAddProjectButton(length)
{	
	const globalBlock = document.createElement("div");
	const buttonAndIcon = document.createElement("div");
	const button = document.createElement("h4");
	const addIcon = document.createElement("img");

	if (length == 0)
		buttonAndIcon.style.marginTop = "15px";
	globalBlock.id = "global-button-icon";
	buttonAndIcon.id = "add-button-icon";
	addIcon.src = plusIcon;
	addIcon.style.width = "17px";
	addIcon.style.height = "17px";
	button.id = "project-button";
	button.innerHTML = "Add a project";
	buttonAndIcon.appendChild(addIcon)
	buttonAndIcon.appendChild(button)
	globalBlock.appendChild(buttonAndIcon)
	document.querySelector("#Projects").appendChild(globalBlock);
}