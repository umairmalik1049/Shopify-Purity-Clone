document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav_item.has-mega");

  navItems.forEach(item => {
    const link = item.querySelector("a");

    // For touch devices
    link.addEventListener("click", e => {
      if (window.innerWidth <= 1000) {
        e.preventDefault();
        item.classList.toggle("open");
      }
    });
  });

  // Close on outside click (mobile)
  document.addEventListener("click", e => {
    if (!e.target.closest(".nav_item.has-mega")) {
      document.querySelectorAll(".nav_item.has-mega.open").forEach(i => i.classList.remove("open"));
    }
  });
});
