document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openContact');
  const closeBtn = document.getElementById('closeContact');
  const modal = document.getElementById('contactModal');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


document.addEventListener("click", function (e) {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");

  if (!toggle || !menu) return;

  if (toggle.contains(e.target)) {
    menu.classList.toggle("open");
  } else if (!menu.contains(e.target)) {
    menu.classList.remove("open");
  }
});
