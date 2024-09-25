let currentImage = 0

//Elementene vi trenger fra HTML
let allImages = document.querySelectorAll(".carusell img");

function showImage(imageindex) {}

function moveImage(offset) {
// Hvilket bilde er vi på nå

// Regn ut hvilket bilde som blir neste
let newImageIndex = currentImage + offset;

for (let image of allImages) {
    console.log(image);
// Fjern "current-image" klassen fra nåværende bilde
//Legg til "current-image" på det nye bilde
}
}
console.log(allImages);
moveImage(1);
console.log(allImages);
