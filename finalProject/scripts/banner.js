function closeBanner() {
    document.getElementById("banner").style.display = "none";
}

window.onload = function() {
    if (isMeetAndGreetDay()) {
        document.getElementById("banner").style.display = "block";
    } else {
        document.getElementById("banner").style.display = "none";
    }
};