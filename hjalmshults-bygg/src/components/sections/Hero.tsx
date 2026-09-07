import { Check } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trustPoints = [
  "Professionellt hantverk",
  "Personlig service",
  "Kvalitet i varje detalj",
];

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(50);

  return (
    <section
      id="hem"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-graphite-950"
    >
      {/* Extends beyond the section bounds so the parallax translate never reveals an edge */}
      <div
        ref={parallaxRef}
        className="absolute inset-x-0 -inset-y-20 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Modernt svenskt hus i skandinavisk arkitektur, exempel på ett exklusivt byggprojekt"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 -z-10 bg-graphite-950/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-graphite-950 via-graphite-950/50 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite-950/70 via-transparent to-transparent" />

      <div className="container pb-20 pt-40 sm:pb-28 sm:pt-48">
        <div className="max-w-2xl">
          <p
            className="hero-enter mb-6 text-xs font-medium uppercase tracking-widest text-sand-light"
            style={{ ["--hero-delay" as string]: "0ms" }}
          >
            {"Hjälmshults Bygg AB"}
          </p>

          <h1
            className="hero-enter font-display text-4xl leading-[1.08] text-offwhite sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            style={{ ["--hero-delay" as string]: "80ms" }}
          >
            Vi bygger med kvalitet som håller.
          </h1>

          <p
            className="hero-enter mt-6 max-w-lg text-lg leading-relaxed text-offwhite/85 md:text-xl"
            style={{ ["--hero-delay" as string]: "220ms" }}
          >
            Professionellt byggarbete från idé till färdigt resultat.
          </p>

          <div
            className="hero-enter mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ ["--hero-delay" as string]: "360ms" }}
          >
            <a
              href="#kontakt"
              className={buttonVariants({ variant: "accent", size: "lg" })}
            >
              Begär offert
            </a>
            <a
              href="#projekt"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Se våra projekt
            </a>
          </div>

          <ul
            className="hero-enter mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
            style={{ ["--hero-delay" as string]: "480ms" }}
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-offwhite/80"
              >
                <Check className="h-4 w-4 shrink-0 text-sand-light" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className={cn(
          "absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-offwhite/60 sm:flex",
        )}
      >
        <span className="text-[10px] uppercase tracking-widest">Scrolla</span>
        <span className="h-10 w-px bg-offwhite/40" />
      </div>
    </section>
  );
}
