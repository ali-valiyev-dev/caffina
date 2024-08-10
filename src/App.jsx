import { useEffect } from "react";
import {
  About,
  ContactUs,
  Events,
  Footer,
  Hero,
  Navbar,
  Products,
} from "./components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Set up the scroll-triggered animation
    gsap.fromTo(
      ".animate-from-bottom",
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".animate-from-bottom", // The element to trigger the animation
          start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
          toggleActions: "play none none none", // Only play the animation once
        },
      }
    );
  }, []);

  return (
    <header className=" bg-dark min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Events />
      <ContactUs />
      <Footer />
    </header>
  );
}
