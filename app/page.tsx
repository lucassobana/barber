import Footer from "./components/layout/Foooter";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Merch from "./components/sections/Merch";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Merch />
      <Footer />
    </main>
  );
}