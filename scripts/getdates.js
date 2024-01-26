const currentY = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentY + " Michael J. Hafen, Texas";

const oLastModif = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified on " + oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});