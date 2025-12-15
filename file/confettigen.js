function launchConfetti() {
    var container = document.getElementById("confetti-container");
    var colors = ["#ff0", "#f00", "#0f0", "#00f", "#ff69b4", "#00ffff"];
    var confettiElements = [];

    // Create confetti pieces
    for (let i = 0; i < 100; i++) { 
        let confetti = document.createElement("div");
        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
        confetti.style.width = 6 + Math.random() * 6 + "px";
        confetti.style.height = 8 + Math.random() * 10 + "px";

        container.appendChild(confetti);
        confettiElements.push(confetti);
    }

    
    setTimeout(() => {
        confettiElements.forEach(confetti => confetti.remove());
    }, 6000); 
}
