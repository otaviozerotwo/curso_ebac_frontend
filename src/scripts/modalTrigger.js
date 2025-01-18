document.querySelectorAll('.section-other-images img').forEach(img => {
  img.addEventListener('click', (event) => {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = event.target.src;
  });
});