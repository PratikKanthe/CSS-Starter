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

// let typetext = "User is Typing...";
// let tpg = 0;

// function typing() {
//   if (tpg <= typetext.length) {
//     document.getElementById("typing-txt").innerText = typetext.slice(0, tpg);
//     tpg++;
//     setTimeout(typing, 100);
//   } else {
//     setTimeout(function () {
//       document.querySelector(".cursor").style.display = "inline";
//     }, 3000);
//   }
// }

// console.log("This is Slice:", typetext.slice(10, 15)); // Using slice with start and end index
// console.log("This is Length:", typetext.length);
// console.log("This is Split:", typetext.split(" ")); // Using split with a space as the separator
// console.log("This is CharCodeAT:", typetext.charCodeAt(0)); // Using charCodeAt with the index

// Start the typing effect when the page loads
window.onload = function () {
  type();
};
