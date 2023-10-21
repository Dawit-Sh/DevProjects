// Title Settings 
function mOut(obj) {
 obj.innerHTML = "$~> Alpaca Generator" 
} 
function mOver(obj) {
  obj.innerHTML = ":By Dawit-Sh"
}
console.log('Some Magic Is Happening 🪄')
// alert 
function Msg() {
  alert('Why Tf you clicking ?? ')
}



const MainHair = document.querySelector("#Main_hair")
const Maineyes = document.querySelector("#Main_eyes")
const Mainear = document.querySelector("#Main_ear")
const Mainleg = document.querySelector("#Main_leg")
const Mainmouth = document.querySelector("#Main_mouth")
const Mainneck = document.querySelector("#Main_neck")
const Mainbg = document.querySelector("#Main_bg")
const Mainacces = document.querySelector("#Main_acces")
const imageElement = document.querySelector('img')

let div = document.getElementById('divbtn')

MainHair.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Normal';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button1.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/hair/default.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button2 = document.createElement('button');
  button2.innerHTML = 'Bang';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button2.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/hair/bang.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button3 = document.createElement('button');
  button3.innerHTML = 'Elegant';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button3.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/hair/elegant.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button4 = document.createElement('button');
  button4.innerHTML = 'Short';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button4.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/hair/short.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button5 = document.createElement('button');
  button5.innerHTML = 'Fancy';
  button5.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button5.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/hair/fancy.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button6 = document.createElement('button');
  button6.innerHTML = 'Quiff';
  button6.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button6.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/hair/quiff.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button7 = document.createElement('button');
  button7.innerHTML = 'Curly';
  button7.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button7.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/hair/curly.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
  div.appendChild(button5);
  div.appendChild(button6);
  div.appendChild(button7);
});

Maineyes.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Normal';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button1.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/eyes/default.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button2 = document.createElement('button');
  button2.innerHTML = 'Angry';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button2.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/eyes/angry.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button3 = document.createElement('button');
  button3.innerHTML = 'Star';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button3.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/eyes/star.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button4 = document.createElement('button');
  button4.innerHTML = 'Panda';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button4.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/eyes/panda.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button5 = document.createElement('button');
  button5.innerHTML = 'Smart';
  button5.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button5.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/eyes/smart.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button6 = document.createElement('button');
  button6.innerHTML = 'Naughty';
  button6.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button6.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/eyes/naughty.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
  div.appendChild(button5);
  div.appendChild(button6);
});

Mainear.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Normal';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button2 = document.createElement('button');
  button2.innerHTML = 'tilt-back';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button3 = document.createElement('button');
  button3.innerHTML = 'tilt-forward';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
});

Mainleg.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Normal';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button2 = document.createElement('button');
  button2.innerHTML = 'bubble-tea';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button3 = document.createElement('button');
  button3.innerHTML = 'cookie';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button4 = document.createElement('button');
  button4.innerHTML = 'tilt-forward';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button5 = document.createElement('button');
  button5.innerHTML = 'game-console';
  button5.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button6 = document.createElement('button');
  button6.innerHTML = 'tilt-back';
  button6.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
  div.appendChild(button5);
  div.appendChild(button6);
});

Mainmouth.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Normal';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button2 = document.createElement('button');
  button2.innerHTML = 'eating';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button3 = document.createElement('button');
  button3.innerHTML = 'tounge';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button4 = document.createElement('button');
  button4.innerHTML = 'laugh';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button5 = document.createElement('button');
  button5.innerHTML = 'astonished';
  button5.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
  div.appendChild(button5);
});

Mainneck.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Normal';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button2 = document.createElement('button');
  button2.innerHTML = 'bend-back';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button3 = document.createElement('button');
  button3.innerHTML = 'bend-forward';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button4 = document.createElement('button');
  button4.innerHTML = 'thick';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
});

Mainacces.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Headphone';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button2 = document.createElement('button');
  button2.innerHTML = 'flower';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button3 = document.createElement('button');
  button3.innerHTML = 'glasses';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button4 = document.createElement('button');
  button4.innerHTML = 'earings';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
});

Mainbg.addEventListener('click', () => {
  // Remove the existing buttons.
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Create new buttons.
  let button1 = document.createElement('button');
  button1.innerHTML = 'Blue-50';
  button1.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button2 = document.createElement('button');
  button2.innerHTML = 'Blue-60';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button3 = document.createElement('button');
  button3.innerHTML = 'Blue-70';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button4 = document.createElement('button');
  button4.innerHTML = 'DarkBlue-30';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button5 = document.createElement('button');
  button5.innerHTML = 'DarkBlue-50';
  button5.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button6 = document.createElement('button');
  button6.innerHTML = 'DarkBlue-70';
  button6.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button7 = document.createElement('button');
  button7.innerHTML = 'Green-50';
  button7.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button8 = document.createElement('button');
  button8.innerHTML = 'Green-60';
  button8.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button9 = document.createElement('button');
  button9.innerHTML = 'Green-70';
  button9.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button10 = document.createElement('button');
  button10.innerHTML = 'Grey-40';
  button10.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button11 = document.createElement('button');
  button11.innerHTML = 'Grey-70';
  button11.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button12 = document.createElement('button');
  button12.innerHTML = 'Grey-80';
  button12.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button13 = document.createElement('button');
  button13.innerHTML = 'Red-50';
  button13.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button14 = document.createElement('button');
  button14.innerHTML = 'Red-60';
  button14.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button15 = document.createElement('button');
  button15.innerHTML = 'Red-70';
  button15.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');
  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});

  let button16 = document.createElement('button');
  button16.innerHTML = 'Yellow-50';
  button16.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});


  let button17 = document.createElement('button');
  button17.innerHTML = 'Yellow-60';
  button17.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  let button18 = document.createElement('button');
  button18.innerHTML = 'Yellow-70';
  button18.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  button14.addEventListener('click', () => {
  imageElement.src = 'assets/alpaca/backgrounds/red60.png';
  imageElement.classList('absolute', 'top-0', 'w-full')
});
  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
  div.appendChild(button5);
  div.appendChild(button6);
  div.appendChild(button7);
  div.appendChild(button8);
  div.appendChild(button9);
  div.appendChild(button10);
  div.appendChild(button11);
  div.appendChild(button12);
  div.appendChild(button13);
  div.appendChild(button14);
  div.appendChild(button15);
  div.appendChild(button16);
  div.appendChild(button17);
  div.appendChild(button18);
});
