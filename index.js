let temp = document.querySelectorAll("button");

for (let i = 0; i < temp.length; i++) {
  temp[i].addEventListener("click", function () {
    handleClick(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

function handleClick(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", function (event) {
  handleClick(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key).classList;
  activeButton.add("pressed");

  setTimeout(function () {
    activeButton.remove("pressed");
  }, 100);
}
