//fetching all inputs in variables:

let randmBtn = document.querySelector(".randmBtn");
let applyBtn = document.querySelector(".applyBtn");
let inputBox = document.querySelector("#inputBox");
let currentColourValue = document.querySelector(".currentColourValue");
let container = document.querySelector(".container");


//maintaining functions to handle events:
const colorChange = (color) => {
    container.style.backgroundColor = color;
    currentColourValue.innerText = color;
    console.log("Hogya change..");
}

const randomColor = ["lightgreen", "yellow", "lightblue", "purple", "lightseagreen", "lightpink", "pink", "voilet", "red", "blue", "green", "orange", "tomato"]
const randomGenerator = () => {
    let index = Math.floor((Math.random() * randomColor.length) + 1);
    return randomColor[index];
}


const handleRandomButtonClick = () => {                 //function to handle what to do on click of random btn:
    console.log("random button click hua ha ");
    colorChange(randomGenerator());                      //call back function.
    // let color = randomGenerator();
    // colorChange(color);                               //alternate method..
}

const handleApplyButtonClick = () => {                  //function to handle what to do on click of apply btn:
    // console.log("apply button click hua ha ");
    colorChange(inputBox.value);
}

//adding event listners:
randmBtn.addEventListener('click', handleRandomButtonClick);
applyBtn.addEventListener('click', handleApplyButtonClick);

