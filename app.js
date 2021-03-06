//variables
let inputName;

let today = new Date();
date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Creates interval
const interval = setInterval(() => {
  // Get current time
  const now = new Date();

  // Format date as in mm/dd/aaaa hh:ii:ss
  let time =
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  // Display the date and time on the screen using div#date-time
  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = date;
  document.querySelector(".portfolio-date").innerHTML = date;
}, 1000);

//event listeners
window.addEventListener("load", () => {
  //shows the intro of the first page
  setTimeout(showLineA, 1000);
  setTimeout(showLineB, 2000);
  setTimeout(showLineC, 2700);
  setTimeout(showLineD, 4000);
  setTimeout(removeIntro, 5000);
  setTimeout(showSecond, 6500);
  setTimeout(showTextBox, 8000);
});

document.querySelector(".text-box").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    inputName = document.getElementById("textbox").value;
    document.querySelector(".username").innerHTML = inputName;
    //shows the terminal messages
    setTimeout(showLine1, 50);
    setTimeout(showLine2, 200);
    setTimeout(showLine3, 1000);
    setTimeout(showLine4, 2500);
    setTimeout(showLine4, 2600);
    setTimeout(removeSecond, 3500);
    setTimeout(showThird, 4500);
    setTimeout(removeThird, 6000);
    setTimeout(showFourth, 7500);
  }
});

document.querySelector(".computer-navbar img").addEventListener("click", () => {
  document.querySelector(".computer-info-dropdown").style.opacity = 1;
  document.querySelector(".computer-info-dropdown .close").style.cursor =
    "pointer";
});

//close portfolio
document
  .querySelector(".computer-info-dropdown .close")
  .addEventListener("click", () => {
    document.querySelector(".computer-info-dropdown").style.opacity = 0;
    document.querySelector(".computer-info-dropdown .close").style.cursor =
      "default";
    document.querySelector(".computer-info-dropdown").style.pointerEvents =
      "none";
  });

//add portfolio
document.querySelector(".folder-1").addEventListener("click", () => {
  document.querySelector(".portfolio").style.opacity = 1;
  document.querySelector(".portfolio").style.zIndex = 100;
  document.querySelector(".red").style.cursor = "pointer";
  document.documentElement.style.overflow = "unset";
  document.documentElement.style.overflowX = "hidden";
  showFourth();
});

// document.querySelector(".folder-2").addEventListener("click", () => {
//   document.querySelector(".portfolio").style.opacity = 1;
//   document.querySelector(".portfolio").style.zIndex = 100;
//   document.querySelector(".red").style.cursor = "pointer";
//   document.body.style.overflow = "unset";
//   document.body.style.overflowX = "hidden";
// });

// document.querySelector(".folder-3").addEventListener("click", () => {
//   document.querySelector(".portfolio").style.opacity = 1;
//   document.querySelector(".portfolio").style.zIndex = 100;
//   document.querySelector(".red").style.cursor = "pointer";
//   document.body.style.overflow = "unset";
//   document.body.style.overflowX = "hidden";
// });

//remove portfolio

document.querySelector(".red").addEventListener("click", () => {
  document.querySelector(".portfolio").style.opacity = 0;
  document.querySelector(".portfolio").style.zIndex = -100;

  document.documentElement.querySelector(".red").style.cursor = "default";
  document.documentElement.style.overflow = "hidden";
});
//funtions
const showSecond = () => {
  document.querySelector(".second-page").style.opacity = 1;
  document.querySelector(".second-page").style.pointerEvents = "all";
};

const showThird = () => {
  document.querySelector(".third-page").style.opacity = 1;
  document.querySelector(".third-page").style.pointerEvents = "all";
  document.querySelector(".third-page").style.zIndex = 10;
  document.querySelector(".third-footer").innerHTML = inputName;
};

const removeSecond = () => {
  document.querySelector(".second-page").style.opacity = 0;
  document.querySelector(".second-page").style.pointerEvents = "none";
  document.querySelector(".second-page").style.zIndex = -10;
  // document.querySelector(".second-page").style.transition = "none";
};

const removeThird = () => {
  document.querySelector(".third-page").style.opacity = 0;
  document.querySelector(".third-page").style.pointerEvents = "none";
  document.querySelector(".third-page").style.zIndex = -10;
  // document.querySelector(".second-page").style.transition = "none";
};

//main page

const showFourth = () => {
  document.querySelector(".third-page").style.opacity = 0;
  document.querySelector(".third-page").style.pointerEvents = "none";
  document.querySelector(".third-page").style.zIndex = -1000;
  document.querySelector(".main-page").style.opacity = 1;
  document.querySelector(".main-page").style.pointerEvents = "all";
  document.querySelector(".main-page").style.zIndex = 100;
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

const showLineA = () => {
  document.querySelector(".para-a").style.opacity = 1;
};

const showLineB = () => {
  document.querySelector(".para-b").style.opacity = 1;
};

const showLineC = () => {
  document.querySelector(".para-c").style.opacity = 1;
};

const showLineD = () => {
  document.querySelector(".para-d").style.opacity = 1;
};

const showLine = () => {
  document.querySelector;
};
