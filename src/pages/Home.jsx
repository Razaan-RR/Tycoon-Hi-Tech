import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import ProductCategories from "../components/sections/ProductCategories";
import Highlights from "../components/sections/Highlights";
import AboutBrand from "../components/sections/AboutBrand";
import ProductShowcase from "../components/sections/ProductShowcase";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import VideoMarquee from "../components/sections/VideoMarquee";

function Home() {
  return (
    <>
      <Navbar />
      <VideoMarquee></VideoMarquee>
      <Hero />
      <ProductCategories />
      <Highlights />
      <AboutBrand />
      {/* <ProductShowcase></ProductShowcase>
      <Testimonials></Testimonials>
      <Contact></Contact> */}
      <Footer />
    </>
  );
}

export default Home;
