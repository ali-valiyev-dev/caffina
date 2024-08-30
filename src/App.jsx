import { About, ContactUs, Events, Hero, Products } from "./sections";

import { Footer, Navbar } from "./components";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Products />
        <Events />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
