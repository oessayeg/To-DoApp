export default function isProjectNameEmpty(inputField)
{
	if (!inputField.value)
	{
		const warning = document.createElement("p");
		const block = document.querySelector("#project-creator").firstChild;

		if (!document.querySelector("#project-name-warning"))
		{
			warning.id = "project-name-warning";
			warning.textContent = "Please enter a name";
			warning.style.color = "red";
			warning.style.textAlign = "left";
			warning.style.margin = "0";
			warning.style.marginLeft = "27px";
			warning.style.marginTop = "2px";
			warning.style.fontSize = "16px";
			block.appendChild(warning);
			checkKeyboardType(inputField);
		}
		return true;
	}
	return false;
}

function checkKeyboardType(inputField)
{
	inputField.addEventListener("input", (e) => 
	{
		if (document.querySelector("#project-name-warning"))
			document.querySelector("#project-name-warning").remove();
	});
}