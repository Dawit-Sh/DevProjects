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
  let default = document.createElement('default');
  button1.innerHTML = 'Default';

  let bang = document.createElement('button');
  button2.innerHTML = 'Bang';

  let elegant = document.createElement('button');
  button3.innerHTML = 'Elegant';

  let short = document.createElement('button');
  button4.innerHTML = 'Short';

  let fancy = document.createElement('button');
  button5.innerHTML = 'Fancy';

  let quiff = document.createElement('button');
  button6.innerHTML = 'Quiff';

  // Add the new buttons to the div element.
  div.appendChild(default);
  div.appendChild(bang);
  div.appendChild(elegant);
  div.appendChild(short);
  div.appendChild(fancy);
  div.appendChild(quiff);
});
