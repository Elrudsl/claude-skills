import { processSteps } from "@/data/process";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Process() {
  return (
    <section className="bg-offwhite-soft py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Vår process"
          title="Från första idé till färdigt projekt"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-graphite/15 lg:block"
          />

          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 80}
              className="relative"
            >
              <span className="relative z-10 inline-flex items-baseline bg-offwhite-soft pr-4 font-display text-3xl text-sand-dark lg:bg-offwhite-soft">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl text-graphite">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-graphite-500">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
