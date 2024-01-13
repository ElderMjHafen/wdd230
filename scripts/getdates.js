const oLastModif = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified on " + new Date().toDateString("en-US", oLastModif);