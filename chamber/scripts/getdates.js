/****
if (window.matchMedia != (window.matchMedia("(only screen and max-width: 600px)").matches)) {
	const currentY = new Date().getFullYear();
	document.getElementById("currentYear").textContent = currentY + "Michael J. Hafen, Texas";

	const oLastModif = document.lastModified;
	document.getElementById("lastModified").textContent = "Last Modified on " + oLastModif;
}
else if (window.matchMedia == (window.matchMedia("(only screen and max-width: 600px)").matches)) {
	const currentY = new Date().getFullYear();
	document.getElementById("currentYear").textContent = currentY + " Michael J. Hafen, Texas |";

	const oLastModif = document.lastModified;
	document.getElementById("lastModified").textContent = "| Last Modified on " + oLastModif;
}
/*/
const currentY = new Date().getFullYear();
	document.getElementById("currentYear").textContent = currentY + " Michael J. Hafen, Texas";

	const oLastModif = document.lastModified;
	document.getElementById("lastModified").textContent = " Last Modified on " + oLastModif;
/** */