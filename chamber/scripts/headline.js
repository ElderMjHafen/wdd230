/*
div = Array.from(document.querySelectorAll("div.line"))
for (elem of div) {
    elem.setAttribute("title", elem.innerText)
}
*/
$("#previewBtn").click(function() {
    $("preview").load("https://www.statesman.com/story/news/state/2024/02/06/dairy-queen-meth-clifton-texas-waco-arrests/72480298007/");
});