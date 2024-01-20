const typewriterText = document.getElementById('typewriter');
const phrases = ["Software Engineering Leader", "Cloud Computing Expert", "DevOps Enthusiast"];
const typingSpeed = 120;
const erasingSpeed = 60;
const typingDelay = 2000;
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function typeCharacter() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        typewriterText.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(updateTypewriter, typingSpeed);
    } else {
        setTimeout(() => isTyping = false, typingDelay);
    }
}

function eraseCharacter() {
    if (currentCharIndex > 0) {
        typewriterText.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex);
        currentCharIndex--;
        setTimeout(updateTypewriter, erasingSpeed);
    } else {
        isTyping = true;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
}

function updateTypewriter() {
    if (isTyping) {
        typeCharacter();
    } else {
        eraseCharacter();
    }
}

updateTypewriter();
