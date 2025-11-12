const skins = [
    "SKINS/skin1.css",
    "SKINS/skin2.css",
    "SKINS/skin3.css"
];

let currentSkin = 0;

function changeSkin() {
    debugger; // DEBUG breakpoint
    const link = document.getElementById("skinLink");
    currentSkin = (currentSkin + 1) % skins.length;
    link.href = skins[currentSkin];
}
