export default function hideNavigation(button)
{
	button.addEventListener("click", (e) =>
	{
		const navigation = document.querySelector("nav");
		const main = document.querySelector("main");

		if (button.className)
		{
			navigation.style.display = "flex";
			button.style.transform = "rotate(0deg)";
			button.style.transition = "transform 700ms";
			main.style.gridTemplateColumns = "auto 1fr";
			button.className = "";
		}
		else
		{
			button.style.transform = "rotate(180deg)";
			button.style.transition = "transform 700ms";
			main.style.gridTemplateColumns = "1fr";
			navigation.style.display = "none";
			button.className = "hidden";
		}
	})
}