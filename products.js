document.querySelectorAll('.event img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
      img.style.transition = 'transform 0.3s ease-in-out';
    });
  
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });