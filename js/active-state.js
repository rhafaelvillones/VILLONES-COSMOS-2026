const links = document.querySelectorAll(".headerNav a, .footerNav a");

const currentPath = window.location.pathname;

links.forEach((link) => {
  const href = link.getAttribute("href");

  if (href && currentPath.includes(href.replace("./", ""))) {
    link.classList.add("active");
  }
});
