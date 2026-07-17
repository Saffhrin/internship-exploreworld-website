const navbar = document.querySelector(".navbar");
const sentinel = document.getElementById("navSentinel");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  },
  { threshold: 0 }
);

observer.observe(sentinel);