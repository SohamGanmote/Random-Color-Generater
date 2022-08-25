const btn = document.querySelector("#partyBtn");
const box = document.querySelector("#contener");
const colorCode = document.querySelector(".box");

btn.addEventListener("click", function() {

    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    box.style.backgroundColor = `rgb(${r},${g},${b})`;

    const color = document.querySelector("#textColor")
    color.innerText = `rgb(${r},${g},${b})`;
})