// Example: Add hover effect to footer links
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = 'orange';
    });
  
    link.addEventListener('mouseleave', () => {
      link.style.color = 'white';
    });
  });
  