export default function priorityButtonHandler()
{
	const priorityButtons = document.querySelectorAll("#priority-choice > button");

	priorityButtons.forEach(button =>
	{
		button.addEventListener("click", (e) =>
		{
			priorityButtons.forEach(one =>
			{
				one.className = "";
			})
			button.className = button.textContent;
		});
	});
}
