const authContainer = document.getElementById("authContainer");
const portfolio = document.getElementById("portfolio");
const toggleForm = document.getElementById("toggleForm");
const authTitle = document.getElementById("authTitle");
const nameField = document.getElementById("nameField");
const authButton = document.getElementById("authButton");

let isLogin = true;

toggleForm.addEventListener("click", () => {
  isLogin = !isLogin;

  if (isLogin) {
    authTitle.textContent = "Login";
    authButton.textContent = "Login";
    toggleForm.textContent = "Don't have an account? Sign Up";
    nameField.style.display = "none";
  } else {
    authTitle.textContent = "Sign Up";
    authButton.textContent = "Sign Up";
    toggleForm.textContent = "Already have an account? Login";
    nameField.style.display = "block";
  }
});

function authenticate() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    authContainer.style.display = "none";
    portfolio.style.display = "block";
  } else {
    alert("Please enter email and password.");
  }
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const skipLogin = params.get("open");

  if (skipLogin === "portfolio") {
    authContainer.style.display = "none";
    portfolio.style.display = "block";
  } else {
    authContainer.style.display = "flex";
    portfolio.style.display = "none";
  }
};

const typingText = document.getElementById("typingText");

const words = [
  "Programmer",
  "Web Developer",
  "UI/UX Designer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
