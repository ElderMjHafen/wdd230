const visitsDisplay = document.querySelector(".visits");

let storedDate = window.localStorage.getItem("lastVisitedDate");
const todayDate = Date.now();

if (!storedDate) {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
	storedDate = window.localStorage.setItem("lastVisitedDate", Date.now());
}
else {
	const diffDays = todayDate - storedDate;
	const dateDiff =  Math.round(diffDays/(1000*60*60*24));
	
	if (dateDiff < 1) {
		visitsDisplay.textContent = "Back so soon! Awesome!";
	}
	else if (dateDiff == 1) {
		visitsDisplay.textContent = "You last visited " + dateDiff + " day ago.";
	}
	else if (dateDiff > 1){
		visitsDisplay.textContent = "You last visited " + dateDiff + " days ago.";
	}
}