const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
    const p = document.createElement("p");
    p.textContent = "Thank you for buying!";
    

    container.appendChild(p);
}
