// Preprost drsnik na domači strani
const sliderImage = document.querySelector('#slider-image');
if (sliderImage) {
  const photos = [
    'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85'
  ];
  let currentPhoto = 0;
  function changePhoto(direction) {
    currentPhoto = (currentPhoto + direction + photos.length) % photos.length;
    sliderImage.src = photos[currentPhoto];
  }
  document.querySelector('.prev')?.addEventListener('click', () => changePhoto(-1));
  document.querySelector('.next')?.addEventListener('click', () => changePhoto(1));
}

// Kontaktni obrazec je demonstracijski – brez strežniške povezave.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#form-message').textContent =
      'Hvala za sporočilo! Obrazec je trenutno samo predstavitveni.';
    contactForm.reset();
  });
}
