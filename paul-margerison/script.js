function toggleDescription(element) {
  // Close others
  document.querySelectorAll('.artwork.active').forEach(item => {
    if (item !== element) item.classList.remove('active');
  });

  // Toggle current
  const isNowActive = !element.classList.contains('active');
  element.classList.toggle('active');

  // Scroll to top if activated
  if (isNowActive) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
