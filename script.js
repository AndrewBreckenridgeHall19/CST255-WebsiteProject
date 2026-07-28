"use strict";

// Feature 1: Show or hide additional information on the home page
const interestsButton = document.getElementById("toggle-interests");
const extraInterests = document.getElementById("extra-interests");

if (interestsButton && extraInterests) {
  interestsButton.addEventListener("click", function () {
    extraInterests.hidden = !extraInterests.hidden;

    if (extraInterests.hidden) {
      interestsButton.textContent = "Show more";
    } else {
      interestsButton.textContent = "Hide details";
    }
  });
}

// Feature 2: Change content on the career page
const careerButton = document.getElementById("career-message-button");
const careerMessage = document.getElementById("career-message");

if (careerButton && careerMessage) {
  careerButton.addEventListener("click", function () {
    careerMessage.textContent =
      "My goal is to use computer science and web development skills to build useful technology and improve my clothing brand website.";

    careerButton.textContent = "Message displayed";
  });
}