alert("Welcome to Bin Zheng's Portfolio!");

document.getElementById('alertButton').onclick = function() {
    alert("Thanks for clicking!");
}
const hoverButton = document.getElementById("hoverButton");


document.getElementById('hoverButton').onmouseover = function() {
    hoverButton.textContent = "You hovered!"
}

hoverButton.addEventListener("mouseout", () => hoverButton.textContent = "Hover over me!");
document.getElementById('hoverButton').onmouseleave = function() {
    hoverButton.textContent = "Hover over me!"
}

let count = 0;
const countButton = document.getElementById("countButton");
const clickCount = document.getElementById("clickCount");

countButton.addEventListener("click", () => {
    clickCount.textContent = ++count;  

    if (count === 5) alert("You've clicked 5 times!");
});

for (let i = 1; i <= 3; i++) {
    document.getElementById("loopOutput").appendChild(document.createElement("p")).textContent = `Loop count: ${i}`;
}
