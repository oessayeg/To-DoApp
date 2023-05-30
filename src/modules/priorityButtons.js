export default function priorityButtonHandler()
{
	const priorityButtons = document.querySelectorAll("#priority-choice > button");

	priorityButtons.forEach(button =>
	{
		button.addEventListener("mouseover", (e) => colorOnHover(button));
		button.addEventListener("mouseleave", (e) =>
		{
			console.log("he");
			if (!button.className)
				colorOnLeave(button);
		});
		button.addEventListener("click", (e) =>
		{
			priorityButtons.forEach(one =>
			{
				colorOnLeave(one);
				one.className = "";
			})
			colorOnHover(button);
			button.className = button.textContent;
		});
	});
}

function colorOnHover(button)
{
	button.style.color = "white";
	if (button.textContent == "Low")
		button.style.backgroundColor = "#00c417";
	else if (button.textContent == "Medium")
		button.style.backgroundColor = "#FFA500";
	else
		button.style.backgroundColor = "#FF0000";
}

function colorOnLeave(button)
{
	button.style.backgroundColor = "white";
	if (button.textContent == "Low")
		button.style.color = "#00c417";
	else if (button.textContent == "Medium")
		button.style.color = "#FFA500";
	else
		button.style.color = "#FF0000";
}