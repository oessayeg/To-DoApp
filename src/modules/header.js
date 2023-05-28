import paramIcon from '../images/para.png';
import logoIcon from '../images/task.png';

export default function putHeader()
{
	const header = document.querySelector("header");
	const logoBlock = document.createElement("div");
	const paramImage = document.createElement("img");
	const title = document.createElement("h1");
	const logoImage = document.createElement("img");

	logoImage.src = logoIcon;
	logoImage.style.width = "80px";
	logoImage.style.height = "80px";
	paramImage.src = paramIcon;
	paramImage.style.width = "30px";
	paramImage.style.height = "30px";
	paramImage.id = "hide-nav";
	logoBlock.id = "logo";

	title.textContent = "To-Do List";
	header.appendChild(paramImage);
	logoBlock.appendChild(logoImage);
	logoBlock.appendChild(title);
	header.appendChild(logoBlock);

}