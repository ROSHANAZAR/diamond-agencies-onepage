import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Products from "@/app/components/products";
import Footer from "@/app/components/Footer";
import Choose from "@/app/components/Choose";
import Contact from "@/app/components/Contact"

export default function Home() {
  return (
    
    <main className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Choose />
      <Contact />
      <Footer />
    </main>
  );
}
