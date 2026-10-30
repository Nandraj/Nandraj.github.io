// Mobile menu
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  hamburger.classList.toggle("open");
});

menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    hamburger.classList.remove("open");
  })
);

// Typewriter
const phrases = [
  "Python & Full-Stack Developer",
  "Backend · APIs · Automation",
  "Web Scraping · Analytics · AI/ML",
  "Django · Flask · GCP",
];

const twEl = document.getElementById("typewriter");
let pi = 0, ci = 0, deleting = true, done = false;

function step() {
  const phrase = phrases[pi % phrases.length];
  let out = "";
  for (let i = 0; i < ci; i++) out += phrase[i];
  twEl.textContent = out;

  if (!deleting) {
    if (ci === phrase.length) { deleting = true; return; }
    ci++;
    setTimeout(step, 55);
  } else {
    if (ci === 0) {
      deleting = false;
      pi++;
      if (pi === phrases.length) done = true;
      ci = 1;
      return;
    }
    ci--;
    setTimeout(step, 35);
  }
}
step();

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));


