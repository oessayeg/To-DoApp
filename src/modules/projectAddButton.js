export default function putAddProjectButton()
{
	const button = document.createElement("h4");

	button.id = "project-button";
	button.innerHTML = "+ &nbsp&nbspAdd a project";
	document.querySelector("#Projects").appendChild(button);
}