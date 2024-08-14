import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateElements = elements => {
  elements.forEach(
    ({ selector, from, to = { opacity: 1, x: 0, duration: 1.5 } }) => {
      gsap.fromTo(selector, from, {
        ...to,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  );
};
