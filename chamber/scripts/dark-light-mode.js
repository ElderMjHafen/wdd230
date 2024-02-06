const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌕")) {
		main.style.background = "#003";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#3d2cb9";
		main.style.color = "#fff";
		modeButton.textContent = "🌕";
	}
});