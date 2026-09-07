import { Reveal } from "@/components/shared/Reveal";
import { ImageReveal } from "@/components/shared/ImageReveal";

export function About() {
  return (
    <section id="om-oss" className="bg-offwhite py-24 sm:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <ImageReveal className="aspect-[4/5] w-full">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80"
              alt="Hantverkare på en av Hjälmshults Byggs arbetsplatser"
              className="h-full w-full object-cover"
            />
          </ImageReveal>

          <ImageReveal
            delay={200}
            className="absolute -bottom-10 -right-6 hidden aspect-[4/3] w-2/3 border-4 border-offwhite shadow-elevated sm:block"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt="Detalj från ett pågående byggprojekt"
              className="h-full w-full object-cover"
            />
          </ImageReveal>
        </div>

        <div className="lg:pl-6">
          <Reveal
            as="p"
            className="mb-4 text-xs font-medium uppercase tracking-widest text-sand-dark"
          >
            Om oss
          </Reveal>
          <Reveal delay={60} as="h2">
            <span className="font-display text-3xl leading-[1.15] text-graphite sm:text-4xl md:text-[2.75rem]">
              Bakom varje projekt står människor som bryr sig.
            </span>
          </Reveal>

          <Reveal
            delay={140}
            as="p"
            className="mt-6 max-w-lg text-base leading-relaxed text-graphite-500 md:text-lg"
          >
            Hjälmshults Bygg AB drivs med ett enkelt löfte: hantverk som håller
            och en process som känns trygg från start till mål. Vi arbetar
            nära varje kund för att förstå vad som faktiskt behövs, och
            håller det vi lovar under vägen.
          </Reveal>

          <Reveal
            delay={200}
            as="p"
            className="mt-4 max-w-lg text-base leading-relaxed text-graphite-500 md:text-lg"
          >
            Oavsett projektets storlek är arbetssättet detsamma — noggrann
            planering, öppen kommunikation och ett resultat vi själva står
            bakom.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
