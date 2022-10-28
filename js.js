const IMG = document.getElementById("img");
const BORDER = document.getElementById("border");
const W_DISPLAY = document.getElementById("w_display");
const H_DISPLAY = document.getElementById("h_display");

function change_width() {
    const w = document.getElementById("w").value;
    IMG.width = w;
    BORDER.style.width = `${w}px`;
    W_DISPLAY.innerHTML = w;
}

function change_height() {
    const h = document.getElementById("h").value;
    IMG.height = h;
    BORDER.style.height = `${h}px`;
    H_DISPLAY.innerHTML = h;
}

change_width();
change_height();