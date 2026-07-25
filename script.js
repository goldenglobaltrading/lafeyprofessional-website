const AMAZON_URL = "https://www.amazon.com/";

document.querySelectorAll("[data-amazon-link]").forEach(link => {
  link.href = AMAZON_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
