//variables
const inputName = document.querySelector(".text-box");

//event listeners
window.addEventListener("load", () => {
  setTimeout(removeIntro, 5000);
  setTimeout(showSecond, 6500);
  setTimeout(showTextBox, 7500);
});

document.querySelector(".text-box").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    setTimeout(showLine1, 100);
    setTimeout(showLine2, 200);
    setTimeout(showLine3, 1000);
    setTimeout(showLine4, 2500);
    setTimeout(showLine4, 2600);
    setTimeout(removeSecond, 3500);
  }
});

//funtions
const showSecond = () => {
  document.querySelector(".second-page").style.opacity = 1;
  document.querySelector(".second-page").style.pointerEvents = "all";
};

const removeSecond = () => {
  document.querySelector(".second-page").style.opacity = 0;
  document.querySelector(".second-page").style.pointerEvents = "none";
  document.querySelector(".second-page").style.zIndex = -10;
  // document.querySelector(".second-page").style.transition = "none";
};
const showTextBox = () => {
  document.querySelector(".main-page-entry").style.opacity = 1;
  document.querySelector(".main-page-entry").style.pointerEvents = "all";
};

const removeIntro = () => {
  document.querySelector(".opening-page").style.opacity = 0;
  document.querySelector(".opening-page").style.pointerEvents = "none";
  document.querySelector(".opening-page").style.zIndex = 0;
};

const showLine1 = () => {
  document.querySelector(".line-1").style.opacity = 1;
};

const showLine2 = () => {
  document.querySelector(".line-2").style.opacity = 1;
};

const showLine3 = () => {
  document.querySelector(".line-3").style.opacity = 1;
};

const showLine4 = () => {
  document.querySelector(".line-4").style.opacity = 1;
};
