import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { ImageReveal } from "@/components/shared/ImageReveal";

export function Intro() {
  return (
    <section className="bg-offwhite py-24 sm:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal
            as="p"
            className="mb-4 text-xs font-medium uppercase tracking-widest text-sand-dark"
          >
            Om Hjälmshults Bygg
          </Reveal>

          <Reveal delay={60} as="h2">
            <span className="font-display text-3xl leading-[1.15] text-graphite sm:text-4xl md:text-[2.75rem]">
              Ett byggföretag att lita på
            </span>
          </Reveal>

          <Reveal
            delay={140}
            as="p"
            className="mt-6 max-w-lg text-base leading-relaxed text-graphite-500 md:text-lg"
          >
            Hjälmshults Bygg AB arbetar med kvalitet, noggrannhet och
            långsiktiga resultat i varje uppdrag. Vi tror på tydlig
            kommunikation och hantverk som håller, oavsett om det handlar om
            en mindre renovering eller ett större entreprenadprojekt.
          </Reveal>

          <Reveal
            delay={200}
            as="p"
            className="mt-4 max-w-lg text-base leading-relaxed text-graphite-500 md:text-lg"
          >
            Från första kontakt till färdigt resultat är målet detsamma: ett
            genomarbetat projekt du kan lita på i många år framöver.
          </Reveal>

          <Reveal delay={260} className="mt-9">
            <a
              href="#om-oss"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-graphite"
            >
              Läs mer om oss
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <ImageReveal className="aspect-[4/5] w-full lg:aspect-[5/6]">
          <img
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1400&q=80"
            alt="Hantverkare som noggrant arbetar med ett byggprojekt"
            className="h-full w-full object-cover"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
