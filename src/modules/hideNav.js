export default function hideNavigation(button)
{
	button.addEventListener("click", (e) =>
	{
		const navigation = document.querySelector("nav");
		const main = document.querySelector("main");

		if (button.className)
		{
			navigation.style.display = "flex";
			main.style.gridTemplateColumns = "auto 1fr";
			button.className = "";
		}
		else
		{
			main.style.gridTemplateColumns = "1fr";
			navigation.style.display = "none";
			button.className = "hidden";
		}
	})
}