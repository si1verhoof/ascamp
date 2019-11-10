if (document.querySelector('.swiper-container')) {
  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
}

window.addEventListener("scroll", event => {
    document
        .querySelectorAll(".parallax")
        .forEach(elem => {
            const speed = elem.getAttribute("data-speed");

            elem.style.transform = `
                translateY(${-(window.pageYOffset * speed / 250)}px)
            `;
        });
});