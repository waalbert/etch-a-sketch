const container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "one";
    container.appendChild(newDiv);
}

const divs = document.querySelectorAll("#one");
divs.forEach(div => div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "#444444";
}));