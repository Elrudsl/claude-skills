import {
  Hammer,
  Expand,
  Building2,
  Layers,
  Ruler,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services, type ServiceIcon } from "@/data/services";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const icons: Record<ServiceIcon, LucideIcon> = {
  hammer: Hammer,
  expand: Expand,
  building: Building2,
  layers: Layers,
  ruler: Ruler,
  handshake: Handshake,
};

export function Services() {
  return (
    <section id="tjanster" className="bg-offwhite-soft py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Våra tjänster"
          title="Helhetslösningar för ditt byggprojekt"
          description="Från mindre snickeriarbeten till stora entreprenader — vi tar ansvar för hela processen."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-graphite/10 bg-graphite/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                key={service.slug}
                as="article"
                delay={(index % 3) * 60}
                className="group relative flex flex-col bg-offwhite-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-graphite-950/0 transition-colors duration-300 ease-out group-hover:bg-graphite-950/10" />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-offwhite/50 bg-offwhite/90 text-graphite backdrop-blur-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl text-graphite">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-500">
                    {service.description}
                  </p>
                  <a
                    href="#kontakt"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-graphite"
                  >
                    Läs mer
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
