/*Tried to count the time between visits
const theDateToday = new Date();


const msToDays = 84600000;
const today = Date.now();
const lastVisit = JSON.parse(time);*/
const visitsDisplay = document.querySelector(".visits");
localStorage.setItem("lastVesitedTime", JSON.stringify(new Date()));

const time = localStorage.getItem("lastVesitedTime");
const lastVisitedTime = JSON.parse(time);
const now =new Date();
const diffDays = now.getDate() - lastVisitedTime.getDate(); 

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