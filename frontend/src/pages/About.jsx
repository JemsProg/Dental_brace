import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import WhyChooseUs from "../components/about/WhyChooseUs";
import ClinicMap from "../components/about/ClinicMap";
import Safety from "../components/about/Safety";
import FAQs from "../components/about/FAQs";

export default function About() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-secondary to-accent/70">
      <AboutHero />
      <AboutIntro />
      <WhyChooseUs />
      <ClinicMap />
      <Safety />
      <FAQs />
    </main>
  );
}
