// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Glitch trigger
const glitchTexts = document.querySelectorAll(".glitch");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

glitchTexts.forEach(el => observer.observe(el));

// Theme toggle
const themeBtn = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

themeBtn.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : ""
  );
};

// Music toggle
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
let playing = false;

musicBtn.onclick = () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "❚❚";
  } else {
    music.pause();
    musicBtn.textContent = "▶";
  }
  playing = !playing;
};
