const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.showModal();
  });
});

document.getElementById('modal-close').addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});