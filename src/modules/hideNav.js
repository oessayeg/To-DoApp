export default function hideNavigation(button)
{
	button.addEventListener("click", (e) =>
	{
		const navigation = document.querySelector("nav");
		const main = document.querySelector("main");
		const article = document.querySelector("article");
		const navWidth = navigation.offsetWidth;

		if (button.className)
		{
			article.style.marginLeft = "";
			navigation.style.transform = "translate(0px)";
			navigation.style.opacity = "1";
			button.style.transform = "rotate(0deg)";
			button.className = "";
		}
		else
		{
			navigation.style.transform = "translateX(-100%)";
			navigation.style.opacity = "0";
			button.style.transform = "rotate(180deg)";
			console.log(navWidth);
			article.style.marginLeft = (navWidth * -1) + "px";
			button.className = "hidden";
		}
	})
}