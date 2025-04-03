const skillText = document.getElementById('skill-text');
const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Machine Learning',
    'HTML & CSS',
    'Git & GitHub',
    'SQL',
    'Docker',
    'AWS',
    'Vue.js',
    'Angular',
    'C++'
];

let currentSkillIndex = 0;
let isDeleting = false;
let text = '';
let speed = 100; // Typing speed
let deleteSpeed = 75; // Deleting speed
let pauseBetweenSkills = 1000; // Pause between skills

function type() {
    const currentSkill = skills[currentSkillIndex];

    if (!isDeleting) {
        // Add one character to the text string
        text = currentSkill.slice(0, text.length + 1);
        skillText.textContent = text;
    } else {
        // Remove one character from the text string
        text = currentSkill.slice(0, text.length - 1);
        skillText.textContent = text;
    }

    // Check if we should delete or type
    if (!isDeleting && text === currentSkill) {
        // Pause after typing a skill
        setTimeout(() => {
            isDeleting = true;
            setTimeout(type, pauseBetweenSkills); // Pause before deleting
        }, pauseBetweenSkills);
    } else if (isDeleting && text === '') {
        // Move to next skill after erasing
        isDeleting = false;
        currentSkillIndex = (currentSkillIndex + 1) % skills.length; // Cycle through skills
        setTimeout(type, speed); // Pause before typing next skill
    } else {
        // Continue typing or deleting
        setTimeout(type, isDeleting ? deleteSpeed : speed);
    }
}

// Start typing animation
type();
