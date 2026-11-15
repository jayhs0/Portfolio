/* ABOUT HIGHTLIGHT FIX*/

const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

function setActive() {
  let current = sections[0].id;

  sections.forEach((s) => {
    if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) {
      current = s.id;
    }
  });

  // At the very bottom of the page, highlight the last section
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    current = sections[sections.length - 1].id;
  }

  links.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", setActive);
setActive();

// Experience hightlight fix


const jobsList = document.querySelector(".jobs");

if (jobsList) {
  const jobs = jobsList.querySelectorAll(".job");

  function highlight(job) {
    jobsList.classList.add("is-hovering");
    job.classList.add("is-highlighted");
  }

  function clearHighlight(job) {
    jobsList.classList.remove("is-hovering");
    job.classList.remove("is-highlighted");
  }

  jobs.forEach((job) => {
    job.addEventListener("mouseenter", () => highlight(job));
    job.addEventListener("mouseleave", () => clearHighlight(job));
    job.addEventListener("focusin", () => highlight(job));    // keyboard users
    job.addEventListener("focusout", () => clearHighlight(job));
  });
}