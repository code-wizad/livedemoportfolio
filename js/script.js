// Progressbar js
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressbar").style.width = scrolled + "%";
    document.getElementById("progressvalue").textContent = Math.round(scrolled) + "%";
}