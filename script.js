function showMessage() {
    document.getElementById("message").textContent = "Hello, thanks for clicking!";
}

const text = "My_Portfolio";  // The text to be typed in the header
const typedTextElement = document.getElementById("typed-text");


let index = 0;
const typingSpeed = 100; // Time in ms between each letter being typed

// Function to simulate typing
function typeText() {
    if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index);  // Add one character at a time
        index++;
        setTimeout(typeText, typingSpeed);  // Call typeText again after a delay
    }
}

// Start typing effect when page loads
window.onload = () => {
    typeText();
};