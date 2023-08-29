// Selectors
const userText = document.getElementById("user-text");

const lowerCaseBtn = document.getElementById("lower-btn");
const upperCaseBtn = document.getElementById("upper-btn");
const titleCaseBtn = document.getElementById("title-btn");

// Event Listeners
lowerCaseBtn.addEventListener("click", () => {
  const text = userText.value;
  userText.value = text.toLowerCase();
});

upperCaseBtn.addEventListener("click", () => {
  const text = userText.value;
  userText.value = text.toUpperCase();
});

titleCaseBtn.addEventListener("click", () => {
  const text = userText.value;

  userText.value = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
});