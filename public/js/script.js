// Add event listeners to display "Read More" button on hover
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const button = card.querySelector('.card-button');
  card.addEventListener('mouseenter', () => {
    button.style.display = 'block';
  });
  card.addEventListener('mouseleave', () => {
    button.style.display = 'none';
  });
});


