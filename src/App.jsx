import { About, ContactUs, Events, Hero, Navbar, Products } from "./components";

export default function App() {
  return (
    <header className=" bg-[#121517] min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Events />
      <ContactUs />
    </header>
  );
}
