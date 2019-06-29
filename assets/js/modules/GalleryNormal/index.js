import Swiper from "swiper";

export const GalleryNormal = function() {
  const $galleryNormal = [
    ...document.querySelectorAll("[data-module-gallery-normal]")
  ];
  $galleryNormal.forEach($el => {
    const $galleryNormalSwiper = $el.querySelector(
      "[data-gallery-normal-swiper]"
    );
    let swiper = new Swiper($galleryNormalSwiper, {
      direction: "horizontal",
      loop: "true",
      slidesPerView: 2,
      spaceBetween: 32,
      pagination: {
        el: "[data-gallery-normal-pagination]",
        type: "bullets",
        clickable: true
      },
      breakpoints: {
        768: {
            slidesPerView: 1
        }
      }
    });
  });
};
