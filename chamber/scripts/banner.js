function isMeetAndGreetDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday is 1, Tuesday is 2, Wednesday is 3
}

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