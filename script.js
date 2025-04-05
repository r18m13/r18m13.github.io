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

        // Get all navigation tabs
        const navTabs = document.querySelectorAll('.nav-tab');
        
        // Hide all sections except the first one initially
        const sections = document.querySelectorAll('.content-section');
        sections.forEach((section, index) => {
            if (index !== 0) {
                section.style.display = 'none';
            }
        });
        
        // Add click event listeners to each tab
        navTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                navTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all content sections
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show the target section
                const targetSectionId = this.getAttribute('data-target');
                const targetSection = document.getElementById(targetSectionId);
                targetSection.style.display = 'block';
                
                // Scroll to the target section with smooth behavior
                // Add a small delay to ensure the section is visible before scrolling
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 50);
            });
        });
        document.querySelector('.menu-toggle').addEventListener('click', function () {
          document.querySelector('.nav-list').classList.toggle('show');
          document.body.classList.toggle('show-nav-open');
      });


        // Start typing effect when page loads
  window.onload = () => {
    typeText();
    typeIntro();
  };

  src="https://cdn.emailjs.com/dist/email.min.js">

  (function(){
    emailjs.init("lCiqTH89c0WBh-ZAL");
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  emailjs.sendForm('service_m35yhih', this)
      .then(() => {
          alert("Message sent!");
      }, (error) => {
          alert("Failed to send message. Error: " + error);
      });
});
  