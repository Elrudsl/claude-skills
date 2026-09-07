import { useState } from "react";
import { Menu } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { buttonVariants } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

export const NAV_LINKS = [
  { label: "Hem", href: "#hem" },
  { label: "Våra tjänster", href: "#tjanster" },
  { label: "Projekt", href: "#projekt" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-out",
        scrolled
          ? "border-b border-graphite/10 bg-offwhite/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between md:h-24">
        <a
          href="#hem"
          className={cn(
            "font-display text-lg leading-none tracking-tight transition-colors duration-300 ease-out sm:text-xl",
            scrolled ? "text-graphite" : "text-offwhite",
          )}
        >
          {site.name}
        </a>

        <nav
          aria-label="Huvudmeny"
          className="hidden items-center gap-10 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-medium uppercase tracking-widest transition-colors duration-300 ease-out",
                scrolled
                  ? "text-graphite-500 hover:text-graphite"
                  : "text-offwhite/80 hover:text-offwhite",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className={cn(
              buttonVariants({ variant: "accent", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Begär offert
          </a>

          <button
            type="button"
            aria-label="Öppna meny"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center border transition-colors duration-300 ease-out lg:hidden",
              scrolled
                ? "border-graphite/15 text-graphite"
                : "border-offwhite/30 text-offwhite",
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} />
    </header>
  );
}
