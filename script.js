const text = "My_Portfolio";  // The text to be typed in the header
const typedTextElement = document.getElementById("typed-text");


let index = 0;
const typingSpeed = 100;// Time in ms between each letter being typed


// Function to simulate typing
function typeText() {
    if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index);  // Add one character at a time
        index++;
        setTimeout(typeText, typingSpeed);  // Call typeText again after a delay
    }
}

const intro = "Hi! I'm Bhargava Malladi. I'm an engineer with fascination towards Physics and Robotics.";
const fileContentElement = document.getElementById("file-content");

let i = 0;
const fileSpeed = 10;

function typeIntro() {
    if (i < intro.length) {
        fileContentElement.innerHTML += intro.charAt(i);
        i++;
        setTimeout(typeIntro, fileSpeed);
    }
}

const tabs = document.querySelectorAll(".nav-tab");
const sections = document.querySelectorAll(".panel");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");
  
      // Update tab styles
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
  
      // Show the target section, hide others
      panels.forEach(panel => {
        panel.classList.toggle("visible", panel.id === targetId);
      });
    });
  });
// Start typing effect when page loads
window.onload = () => {
    typeText();
    typeIntro();
};
