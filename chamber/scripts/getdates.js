const currentY = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentY + " Michael J. Hafen, Texas";

const oLastModif = document.lastModified;
document.getElementById("lastModified").textContent = " Last Modified on " + oLastModif;

const date = Date.now();
document.getElementById("date").textContent = date;