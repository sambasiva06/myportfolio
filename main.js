var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate");
  document
    .getElementById("visualmodetogglebuttoncontainer")
    .classList.toggle("visualmodeshow");
  document
    .getElementById("soundtogglebuttoncontainer")
    .classList.toggle("soundmodeshow");
}
function playpause() {
  if (document.getElementById("switchforsound").checked == !1) {
    audio.pause();
  } else {
    audio.play();
  }
}
function visualmode() {
  document.body.classList.toggle("light-mode");
  var elements = document.querySelectorAll(".needtobeinvert");
  elements.forEach(function (element) {
    element.classList.toggle("invertapplied");
  });
}
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.toggle("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    .classList.toggle("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.toggle("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.toggle("hamburger-animation3");
}
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.remove("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.remove("hamburger-animation3");
}
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(
  ".navbar .navbar-tabs .navbar-tabs-ul li"
);
const mobilenavLi = document.querySelectorAll(
  ".mobiletogglemenu .mobile-navbar-tabs-ul li"
);
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThistab");
    }
  });
});
console.log(
  "%c Designed and Developed by Saurabh Patil ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);
let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.addEventListener(
  "contextmenu",
  function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  !1
);
let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);
let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;
const mouseMove = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;
  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;
  let pupilXCurrrentPosition = pupilStartPoint + fracXValue * pupilRangeX;
  let pupilYCurrrentPosition = pupilStartPoint + fracYValue * pupilRangeY;
  pupilsArr.forEach((curPupil) => {
    curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  });
};
const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};
window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

//To reset the contact form below function is working
window.onload = function() {
  document.getElementById('contactForm').reset();
}

// Ensure form is reset when navigating back
window.onpageshow = function(event) {
  if (event.persisted) {
    document.getElementById('contactForm').reset();
  }
};

//Email from the let's talk button - sent to the Email service
function openEmailClient() {
  const email = "codersplace2006@gmail.com"; // Replace with your email address
  // Personalize the body of the email..
  let body = "Hi Samba Siva ,\n\nI would like to discuss...\n\n[Write your personal content here]\n\nBest regards,\nYour Name";

  // Encode the body and set the window location
  body = encodeURIComponent(body);
  window.location.href = `mailto:${email}?body=${body}`;
}
