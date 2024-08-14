import {
  About,
  ContactUs,
  Events,
  Footer,
  Hero,
  Navbar,
  Products,
} from "./components";

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
