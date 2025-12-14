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
