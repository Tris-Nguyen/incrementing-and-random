// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var minus50Btn = document.getElementById("minus50");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");

var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
// let x = 5;
// x = x + 1; // x becomes 6
// x++ // x becomes 7
// x+=10 // x becomes 17

// let y = 50;
// y = y - 5; // y becomes 45
// y--; // y becomes 44
// y -=10; // y becomes 34

plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
minus1Btn.addEventListener("click", sub1);
minus50Btn.addEventListener("click", sub50);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter--;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;
  stringInEl.value = ""; // clears the input
  story += newWord + " ";
  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4OutEl = document.getElementById("rand4-out");

// Random 0-1
rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random() * 1;
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

// Random 0-100
rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand2 = Math.round(Math.random() * 101);
  rand2OutEl.innerHTML = rand2;
}

// Random -5 to 5
rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand3 = Math.random() * 11 - 6;
  rand3 = rand3.toFixed(2);
  rand3OutEl.innerHTML = rand3;
}

// Random _ to _
rand4Btn.addEventListener("click", showRand4);

let input1 = +document.getElementById("rand-in1").value;
let input2 = +document.getElementById("rand-in2").value;

function showRand4() {
  var rand4 = Math.random() * (input2 - input1) + input1;
  rand4 = rand4.toFixed(2);
  rand4OutEl.innerHTML = rand4;
}

// Random text size
var ranSizeBtn = document.getElementById("random-size");
var ranSize = document.getElementById("BODY");

ranSizeBtn.addEventListener("click", changeSize);

function changeSize() {
  var sizeText = Math.round(Math.random() * (25 - 5) + 5);
  ranSize.style.fontSize = sizeText + "px";
}

// Random color
var ranColorBtn = document.getElementById("random-rgb");
var ranColor = document.getElementById("HTML");

ranColorBtn.addEventListener("click", changeColor);

function changeColor() {
  var r = Math.round(Math.random() * 256);
  var g = Math.round(Math.random() * 256);
  var b = Math.round(Math.random() * 256);

  var rgbString = "rgb(" + r + "," + g + "," + b + ")";
  ranColor.style.background = rgbString;
}

// Reset button
var resBtn = document.getElementById("reset");
var bgColor = document.getElementById("HTML");
var fontSize = document.getElementById("BODY");
var rand1Out = document.getElementById("rand1-out");
var rand2Out = document.getElementById("rand2-out");
var rand3Out = document.getElementById("rand3-out");
var rand4Out = document.getElementById("rand4-out");
var rand1In = document.getElementById("rand-in1");
var rand2In = document.getElementById("rand-in2");
var disBox = document.getElementById("display");
var storyBox = document.getElementById("strOut");

resBtn.addEventListener("click", resetPage);

function resetPage() {
  bgColor.style.background = "#9ae4c8";
  fontSize.style.fontSize = "16px";
  rand1Out.innerHTML = "----------";
  rand2Out.innerHTML = "----------";
  rand3Out.innerHTML = "----------";
  rand4Out.innerHTML = "----------";
  rand1In.value = "";
  rand2In.value = "";
  disBox.innerHTML = "0";
  storyBox.innerHTML = "Once upon a time,";
}
