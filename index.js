document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");

    if (slides.length === 0) return;

    let index = 0;

    // Показываем первый слайд
    slides.forEach((slide, i) => {
      slide.style.opacity = i === 0 ? "1" : "0";
    });

    setInterval(() => {
      // Скрываем текущий
      slides[index].style.opacity = "0";

      // Следующий индекс
      index = (index + 1) % slides.length;

      // Показываем следующий
      slides[index].style.opacity = "1";
    }, 2000);
  });
});