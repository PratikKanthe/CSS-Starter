const text = "CSS Boiler Plate Template";
let index = 0;

function type() {
  if (index <= text.length) {
    document.getElementById("typed-text").innerText = text.slice(0, index);
    index++;
    setTimeout(type, 100);
  } else {
    // Typing animation complete, show cursor after 3 seconds
    setTimeout(function () {
      document.querySelector(".cursor").style.display = "inline";
    }, 3000);
  }
}

// Start the typing effect when the page loads
window.onload = function () {
  type();
};
