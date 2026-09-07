import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
