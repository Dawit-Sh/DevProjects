// Title Settings 
function mOut(obj) {
 obj.innerHTML = "$~> Alpaca Generator" 
} 
function mOver(obj) {
  obj.innerHTML = ":By Dawit-Sh"
}
console.log('Some Magic Is Happening 🪄')

const MainHair = document.querySelector("#Main_hair")
const Maineyes = document.querySelector("#Main_eyes")
const Mainear = document.querySelector("#Main_ear")
const Mainleg = document.querySelector("#Main_leg")
const Mainmouth = document.querySelector("#Main_mouth")
const Mainneck = document.querySelector("#Main_neck")
const Mainbg = document.querySelector("#Main_bg")
const Mainacces = document.querySelector("#Main_acces")

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

  let button2 = document.createElement('button');
  button2.innerHTML = 'Bang';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button3 = document.createElement('button');
  button3.innerHTML = 'Elegant';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button4 = document.createElement('button');
  button4.innerHTML = 'Short';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button5 = document.createElement('button');
  button5.innerHTML = 'Fancy';
  button5.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button6 = document.createElement('button');
  button6.innerHTML = 'Quiff';
  button6.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
  div.appendChild(button5);
  div.appendChild(button6);
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

  let button2 = document.createElement('button');
  button2.innerHTML = 'Angry';
  button2.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button3 = document.createElement('button');
  button3.innerHTML = 'Star';
  button3.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button4 = document.createElement('button');
  button4.innerHTML = 'Panda';
  button4.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button5 = document.createElement('button');
  button5.innerHTML = 'Smart';
  button5.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  let button6 = document.createElement('button');
  button6.innerHTML = 'Naughty';
  button6.classList.add('btn', 'btn-primary', 'p-3', 'px-6', 'pt-2', 'gap', 'rounded-full', 'text-white', 'bg-blue-600');

  // Add the new buttons to the div element.
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);
  div.appendChild(button4);
  div.appendChild(button5);
  div.appendChild(button6);
});
