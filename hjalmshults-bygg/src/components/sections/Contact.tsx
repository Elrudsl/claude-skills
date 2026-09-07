import { useState, type FormEvent } from "react";
import { CheckCircle2, Upload, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const { ref: formRef, inView: formInView } = useInView<HTMLFormElement>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    // TODO: wire this up to a real backend or email service, e.g.:
    //   await fetch("/api/offertforfragan", { method: "POST", body: new FormData(event.currentTarget) });
    // The form already produces a complete FormData payload with every
    // field below (including uploaded files), so no markup changes should
    // be needed when the integration is added.
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="kontakt" className="bg-offwhite-soft py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto flex max-w-xl flex-col items-center border border-graphite/10 bg-offwhite px-8 py-16 text-center">
            <CheckCircle2 className="h-12 w-12 text-sand-dark" strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-2xl text-graphite sm:text-3xl">
              Tack! Vi har tagit emot din förfrågan.
            </h2>
            <p className="mt-4 max-w-sm text-graphite-500">
              Vi återkommer till dig så snart vi kan för att prata vidare om
              ditt projekt.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="bg-offwhite-soft py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Kontakt"
          title="Begär en offert"
          description="Fyll i formuläret så återkommer vi med nästa steg i ditt projekt."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <form
            ref={formRef}
            data-visible={formInView}
            style={{ ["--reveal-delay" as string]: "80ms" }}
            onSubmit={handleSubmit}
            className="reveal space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="namn">Namn</Label>
                <Input id="namn" name="namn" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefon">Telefon</Label>
                <Input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  required
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="epost">E-post</Label>
              <Input
                id="epost"
                name="epost"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="projekttyp">Typ av projekt</Label>
                <Select id="projekttyp" name="projekttyp" required defaultValue="">
                  <option value="" disabled>
                    Välj typ av projekt
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Annat">Annat</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="start">Önskad start</Label>
                <Input id="start" name="onskad_start" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="beskrivning">Beskriv projektet</Label>
              <Textarea
                id="beskrivning"
                name="beskrivning"
                required
                placeholder="Berätta kort om vad du vill bygga, renovera eller utveckla."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget (valfritt)</Label>
              <Input
                id="budget"
                name="budget"
                placeholder="T.ex. en ungefärlig prisram"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="filer">Ladda upp bilder eller filer</Label>
              <label
                htmlFor="filer"
                className="flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-graphite/25 bg-white px-6 py-10 text-center transition-colors duration-150 ease-out hover:border-graphite/45"
              >
                <Upload className="h-5 w-5 text-graphite-400" />
                <span className="text-sm text-graphite-600">
                  Klicka för att ladda upp bilder eller filer
                </span>
                <span className="text-xs text-graphite-400">
                  {fileNames.length > 0
                    ? fileNames.join(", ")
                    : "PNG, JPG eller PDF"}
                </span>
                <input
                  id="filer"
                  name="filer"
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  className="sr-only"
                  onChange={(e) =>
                    setFileNames(Array.from(e.target.files ?? []).map((f) => f.name))
                  }
                />
              </label>
            </div>

            <Button type="submit" size="lg" variant="accent" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Skickar…" : "Skicka offertförfrågan"}
            </Button>
          </form>

          <Reveal delay={160} className="h-fit border border-graphite/10 bg-graphite p-8 text-offwhite">
            <h3 className="font-display text-xl">Direktkontakt</h3>
            <p className="mt-2 text-sm text-offwhite/65">
              Föredrar du att prata direkt? Hör av dig så här:
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-start gap-3 text-offwhite/85 transition-colors duration-150 ease-out hover:text-offwhite"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-start gap-3 text-offwhite/85 transition-colors duration-150 ease-out hover:text-offwhite"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
                {site.email}
              </a>
              <div className="flex items-start gap-3 text-offwhite/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
                <span>
                  {site.address.street}, {site.address.postalCode}{" "}
                  {site.address.city}
                </span>
              </div>
              <div className="flex items-start gap-3 text-offwhite/85">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
                {site.openingHours}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
