// Reveal love letter
document.getElementById("revealBtn").addEventListener("click", function () {
  document.getElementById("letter").classList.remove("hidden");
  this.style.display = "none";
  spawnHearts();
});

// Floating hearts animation
function spawnHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
}
