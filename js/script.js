document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Slider
  document.querySelectorAll(".slider").forEach(slider => {
    const images = slider.querySelectorAll("img");
    let index = 0;

    if (images.length <= 1) return;

    images[0].classList.add("active");

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000);
  });

});
