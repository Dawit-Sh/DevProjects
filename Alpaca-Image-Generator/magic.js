console.log('Some Magic Is Happening 🪄')

// vars 
const eyesP = document.getElementById('eyes')



// arrays for src 
const hair = [
    { text: "Default", src: "./alpaca/hair/default.png" },
    { text: "Bang", src: "./alpaca/hair/bang.png" },
    { text: "Curls", src: "./alpaca/hair/curls.png" },
    { text: "Elegant", src: "./alpaca/hair/elegant.png" },
    { text: "Fancy", src: "./alpaca/hair/fancy.png" },
    { text: "Quiff", src: "./alpaca/hair/quiff.png" },
    { text: "Short", src: "./alpaca/hair/short.png" }
]

const eyes = [
    { text: "Default", src: "./alpaca/eyes/default.png" },
    { text: "Angry", src: "./alpaca/eyes/angry.png" },
    { text: "Naughty", src: "./alpaca/eyes/naughty.png" },
    { text: "Panda", src: "./alpaca/eyes/panda.png" },
    { text: "Smart", src: "./alpaca/eyes/smart.png" },
    { text: "Star", src: "./alpaca/eyes/star.png" }
]

const ears = [
    { text: "Default", src: "./alpaca/ears/default.png" },
    { text: "Tilt Backward", src: "./alpaca/ears/tilt-backward.png" },
    { text: "Tilt Forward", src: "./alpaca/ears/tilt-forward.png" }
]

const leg = [
    { text: "Default", src: "./alpaca/leg/default.png" },
    { text: "Bubble Tea", src: "./alpaca/leg/bubble-tea.png" },
    { text: "Cookie", src: "./alpaca/leg/cookie.png" },
    { text: "Game Console", src: "./alpaca/leg/game-console.png" },
    { text: "Tilt Backward", src: "./alpaca/leg/tilt-backward.png" },
    { text: "Tilt Forward", src: "./alpaca/leg/tilt-forward.png" }
]

const mouth = [
    { text: "Default", src: "./alpaca/mouth/default.png" },
    { text: "Astonished", src: "./alpaca/mouth/astonished.png" },
    { text: "Eating", src: "./alpaca/mouth/eating.png" },
    { text: "Laughing", src: "./alpaca/mouth/laugh.png" },
    { text: "Tongue", src: "./alpaca/mouth/tongue.png" }
]

const neck = [
    { text: "Default", src: "./alpaca/neck/default.png" },
    { text: "Thick", src: "./alpaca/neck/thick.png" },
    { text: "Bend Backward", src: "./alpaca/neck/bend-backward.png" },
    { text: "Bend Forward", src: "./alpaca/neck/bend-forward.png" }
]

const accessories = [
    { text: "None", src: "./alpaca/accessories/empty.png" },
    { text: "Earings", src: "./alpaca/accessories/earings.png" },
    { text: "Flower", src: "./alpaca/accessories/flower.png" },
    { text: "Glasses", src: "./alpaca/accessories/glasses.png" },
    { text: "Headphones", src: "./alpaca/accessories/headphone.png" }
]

const background = [
    { name: "Blue 50", color: "#5596f6" },
    { name: "Blue 60", color: "#2a7bf4" },
    { name: "Blue 70", color: "#2a5ca7" },
    { name: "Dark Blue 30", color: "#7a8faf" },
    { name: "Dark Blue 50", color: "#002966" },
    { name: "Dark Blue 70", color: "#00193d" },
    { name: "Green 50", color: "#9fd966" },
    { name: "Green 60", color: "#74bd29" },
    { name: "Green 70", color: "#6a9440" },
    { name: "Yellow 50", color: "#fcd33f" },
    { name: "Yellow 60", color: "#e6b60d" },
    { name: "Yellow 70", color: "#cf8e10" },
    { name: "Red 50", color: "#e85e23" },
    { name: "Red 60", color: "#cb4c15" },
    { name: "Red 70", color: "#9f370a" },
    { name: "Grey 40", color: "#cccccc" },
    { name: "Grey 70", color: "#666666" },
    { name: "Grey 80", color: "#333333" }
]

// Change Button Color 
function hairColor() {
document.getElementById("hair").style.backgroundColor = orange;
 
}
