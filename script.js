// Back to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";
topButton.title = "Back to Top";

document.body.appendChild(topButton);

topButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.onscroll = function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};