const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);



/*const msToDays = 84600000/1000 * 60/60 *60/60 *24;*/

if (diffDays == 0) {
	visitsDisplay.textContent = "Back so soon! Awesome!";
}
else if (diffDays == 1) {
	visitsDisplay.textContent = "You last visited " + diffDays + " day.";
}
else if (diffDays > 1){
	visitsDisplay.textContent = "You last visited " + diffDays + " days.";
}
else {
	visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}
diffDays = 0;

localStorage.setItem("lastVesitedTime", diffDays);