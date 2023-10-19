// Title Settings 
function mOut(obj) {
 obj.innerHTML = "$~> Alpaca Generator" 
} 
function mOver(obj) {
  obj.innerHTML = ":By Dawit-Sh"
}

// Buttons Start 
const buttonContainerDiv = document.getElementByID("ChangeBtn");
const items = [
  {
    id: "Main_hair",
    trigger: "Hair",
    data: [
      {
        id: "def", // use ids to differentiate which item is currently selected
        btnName: "Default",
        element: "assets/alpaca/hair/default.png",
      },
      {
        id: "curly",
        btnName: "Curly",
        element: "curlyHairImg",
      }, // add more elements
    ],
    // add more elements to triggered here
  },
];

let btns = []; // use this to store all the high level btns like hair, hand menamen
let childBtns = []; // use this to store the current index child buttons of the top variable btns

items.map((item) => {
  const btn = btnCreater(item); // check my old file for this idr hw i wrote it but basically just create a dom element.
  document.getElementById("topDiv").appendChild(btn); // this will through all the items and create buttons for u. All u have to do is just add the item into the div u want. Check the mdn docs about add child i might get the syntax wrong.
  btns.push(btn);
});

let currentItem = 0;

btns.map((btn, index) => {
  // create an event listner for all buttons at the top
  btn.addEventListner("click", (e) => {
    currentItem = index;
  });
});

btns[currentItem].map((btn) => {
  const childBtn = btnCreater(btn);
  buttonContainerDiv.appendChild(childBtn);
  childBtns.push(childBtn);
});

childBtns.map((btn, index) => {
  btn.addEventListner("click", (e) => {
    document.getElementById("imgDiv").innerHTML = "change html here";
  });
});
