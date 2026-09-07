import { Phone, Mail, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";

export function CTA() {
  return (
    <section className="bg-graphite-950 py-24 text-offwhite sm:py-32">
      <div className="container flex flex-col items-center text-center">
        <Reveal as="h2" className="max-w-3xl">
          <span className="font-display text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
            Har du ett byggprojekt i tankarna?
          </span>
        </Reveal>

        <Reveal
          delay={80}
          as="p"
          className="mt-6 max-w-xl text-lg leading-relaxed text-offwhite/70"
        >
          Berätta vad du vill bygga, renovera eller utveckla så återkommer vi
          med nästa steg.
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <a
            href="#kontakt"
            className={buttonVariants({ variant: "accent", size: "lg" })}
          >
            Begär offert
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal
          delay={220}
          className="mt-10 flex flex-col items-center gap-4 border-t border-offwhite/10 pt-10 sm:flex-row sm:gap-10"
        >
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-offwhite/80 transition-colors duration-150 ease-out hover:text-offwhite"
          >
            <Phone className="h-4 w-4 text-sand-light" />
            Ring oss — {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="inline-flex items-center gap-2 text-sm text-offwhite/80 transition-colors duration-150 ease-out hover:text-offwhite"
          >
            <Mail className="h-4 w-4 text-sand-light" />
            Skicka e-post — {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
