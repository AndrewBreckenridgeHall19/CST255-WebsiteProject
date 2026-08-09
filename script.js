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

// Contact form validation

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const topic = document.getElementById("topic");
  const message = document.getElementById("message");
  const formError = document.getElementById("form-error");
  const formSuccess = document.getElementById("form-success");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formError.textContent = "";
    formSuccess.textContent = "";

    formError.hidden = true;
    formSuccess.hidden = true;

    if (fullName.value.trim() === "") {
      formError.textContent = "Please enter your full name.";
      formError.hidden = false;
      fullName.focus();
      return;
    }

    if (email.value.trim() === "") {
      formError.textContent = "Please enter your email address.";
      formError.hidden = false;
      email.focus();
      return;
    }

    if (topic.value === "") {
      formError.textContent = "Please select a topic.";
      formError.hidden = false;
      topic.focus();
      return;
    }

    if (message.value.trim().length < 10) {
      formError.textContent = "Your message must be at least 10 characters long.";
      formError.hidden = false;
      message.focus();
      return;
    }

    formSuccess.textContent =
      "Thank you! Your message has been submitted successfully.";

    formSuccess.hidden = false;

    contactForm.reset();
  });
}

