const IMG = $("#img");
const BORDER = $("#border");
const W_DISPLAY = $("#w_display");
const H_DISPLAY = $("#h_display");

function change_width() {
    const w = $("#w").val();
    IMG.width(w);
    BORDER.width(w);
    W_DISPLAY.innerHTML = w;
}

function change_height() {
    const h = $("#h").val();
    IMG.height(h);
    BORDER.height(h);
    H_DISPLAY.innerHTML = h;
}

change_width();
change_height();