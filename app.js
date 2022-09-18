const containerLeft = document.querySelector(".left-box");

const signUpBtn = document.querySelector(".btn-1");

const form = document.querySelector(".signup-form");

// storing the h1 title:
const title = document.querySelector(".title");

// Storing p with content:
const textContent = document.querySelector(".content");

// Media query:
var mediaQuery = window.matchMedia("(max-width: 1000px)");

signUpBtn.addEventListener("click", function () {
  containerLeft.classList.toggle("change");
  form.classList.toggle("change-form");

  if (containerLeft.classList.contains("change")) {
    title.style.fontSize = "2.8rem";
    textContent.style.maxWidth = "200px";
    textContent.style.display = "block";
    textContent.style.fontSize = "12px";
  } else {
    title.style.fontSize = "5rem";
    // textContent.style.display = "none";
    textContent.style.maxWidth = "500px";
    textContent.style.fontSize = "15px";
  }
  myFunction(mediaQuery);
});

function myFunction(mediaQuery) {
  if (mediaQuery.matches < 1000) {
    // If media query matches
    title.style.fontSize = "2.7rem";
  } else {
    location.reload();
  }
}

myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state

// signUpBtn.addEventListener("click", function () {
//   let value = (containerLeft.style.width = "100%");

//   if (value == "100%") {
//     value = containerLeft.style.width = "30%";
//   } else {
//     value = containerLeft.style.width = "100%";
//   }
// });

//The first way to toggle:
// if (links.classList.contains("show-links")) {
//   links.classList.remove("show-links");
// } else {
//   links.classList.add("show-links");
// }

//Second way to toggle:
//   links.classList.toggle("show-links");
// });
