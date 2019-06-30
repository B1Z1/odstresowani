import { TimelineLite, TweenLite } from "gsap";

export const Testimonial = function() {
  const $Testimonial = [
    ...document.querySelectorAll('[data-jsmodule="Testiomonial"]')
  ];
  $Testimonial.forEach($el => {
    const $TestimonialWave = $el.querySelector("[data-testimonial-wave]"),
      $TestimonialName = $el.querySelector("[data-testimonial-name]"),
      $TestimonialAuthor = $el.querySelector("[data-testimonial-author]"),
      $TestimonialDescription = $el.querySelector(
        "[data-testimonial-description]"
      ),
      $TestimonialRect = $el.querySelector("[data-testimonial-rect]"),
      $TestimonialButton = $el.querySelector("[data-testimonial-button]"),
      $TestimonialLink = $el.querySelector("[data-testimonial-link]");

    $TestimonialButton.onclick = () => {
      let tll = new TimelineLite();
      tll
        .to($TestimonialButton, 1, {
          y: -10,
          opacity: 0
        })
        .to($TestimonialButton, .1, {
          visibility: "hidden"
        })
        .to($TestimonialWave, 1, {
          opacity: 1,
          visibility: "visible"
        })
        .to($TestimonialRect, 7, {
          x: "100%"
        })
        .to(
          $TestimonialName,
          2,
          {
            y: "0",
            opacity: "1",
            visibility: "visible"
          },
          "-=7"
        )
        .to(
          $TestimonialAuthor,
          2,
          {
            y: "0",
            opacity: "1",
            visibility: "visible"
          },
          "-=6.5"
        )
        .to(
          $TestimonialDescription,
          2,
          {
            y: "0",
            opacity: "1",
            visibility: "visible"
          },
          "-=6"
        )
        .to(
          $TestimonialLink,
          2,
          {
            y: "0",
            opacity: "1",
            visibility: "visible"
          },
          "-=5.5"
        );
    };
  });
};
