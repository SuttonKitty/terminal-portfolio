const loader = document.getElementById("loader");
const main = document.getElementById("main");
const images = document.images;
let loaded = 0;

function done() {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.4s ease";

    setTimeout(() => {
    loader.remove();
    main.hidden = false;
    }, 400);
}

if (images.length === 0) done();

for (const img of images) {
    if (img.complete) {
    loaded++;
    } else {
    img.addEventListener("load", () => {
        loaded++;
        if (loaded === images.length) done();
    });
    img.addEventListener("error", () => {
        loaded++;
        if (loaded === images.length) done();
    });
    }
}

if (loaded === images.length) done();