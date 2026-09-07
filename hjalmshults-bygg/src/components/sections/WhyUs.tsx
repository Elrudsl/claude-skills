import { ShieldCheck, Target, MessageCircle, HardHat } from "lucide-react";
import { strengths } from "@/data/strengths";
import { Reveal } from "@/components/shared/Reveal";

const icons = [ShieldCheck, Target, MessageCircle, HardHat];

export function WhyUs() {
  return (
    <section className="bg-graphite py-24 text-offwhite sm:py-32">
      <div className="container">
        <div className="max-w-xl">
          <Reveal
            as="p"
            className="mb-4 text-xs font-medium uppercase tracking-widest text-sand-light"
          >
            Varför Hjälmshults Bygg?
          </Reveal>
          <Reveal delay={60} as="h2">
            <span className="font-display text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
              Fyra saker vi aldrig ger avkall på
            </span>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-offwhite/10 bg-offwhite/10 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength, index) => {
            const Icon = icons[index];
            return (
              <Reveal
                key={strength.title}
                as="div"
                delay={index * 70}
                className="bg-graphite p-8"
              >
                <Icon className="h-7 w-7 text-sand-light" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl">{strength.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/65">
                  {strength.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
