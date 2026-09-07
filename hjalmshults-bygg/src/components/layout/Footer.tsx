import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/components/layout/Header";
import { site } from "@/data/site";

const socialLinks = [
  { key: "facebook", href: site.social.facebook, Icon: Facebook, label: "Facebook" },
  { key: "instagram", href: site.social.instagram, Icon: Instagram, label: "Instagram" },
  { key: "linkedin", href: site.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
].filter((link) => link.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-offwhite/10 bg-graphite-950 text-offwhite">
      <div className="container grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-display text-lg">{site.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-offwhite/60">
            Professionellt byggarbete från idé till färdigt resultat —
            renovering, tillbyggnad, nybyggnation och entreprenad.
          </p>

          {socialLinks.length > 0 && (
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center border border-offwhite/15 text-offwhite/70 transition-colors duration-150 ease-out hover:border-offwhite/40 hover:text-offwhite"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-offwhite/50">
            Navigation
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-offwhite/75 transition-colors duration-150 ease-out hover:text-offwhite"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-offwhite/50">
            Kontakt
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-offwhite/75">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
              <a href={site.phoneHref} className="hover:text-offwhite">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
              <a href={site.emailHref} className="hover:text-offwhite">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
              <span>
                {site.address.street}, {site.address.postalCode}{" "}
                {site.address.city}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-offwhite/50">
            Öppettider
          </h4>
          <p className="mt-5 text-sm text-offwhite/75">{site.openingHours}</p>
        </div>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-offwhite/50 sm:flex-row">
          <p>© {year} {site.name}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-offwhite">
              Integritetspolicy
            </a>
            <a href="#" className="hover:text-offwhite">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
