const myImg = document.querySelector("img");

myImg.addEventListener("click", () => {
  const mySrc = myImg.getAttribute("src");
  
  if (mySrc === "images/geologic_timescale_spiral_ICS.png") {
    myImg.setAttribute("src", "images/GSA_timescale.png")
  } else {
    myImg.setAttribute("src", "images/geologic_timescale_spiral_ICS.png")
  }
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName;
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
