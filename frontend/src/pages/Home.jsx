import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import InstallmentBanner from "../components/home/InstallmentBanner";
import Gallery from "../components/home/Gallery";
import Locations from "../components/home/Locations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <InstallmentBanner />
      <Gallery />
      <Locations />
    </main>
  );
}
