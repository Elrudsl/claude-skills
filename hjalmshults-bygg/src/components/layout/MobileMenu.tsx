import { X, Phone, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/components/layout/Header";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent aria-describedby={undefined}>
        <div className="flex h-full flex-col justify-between px-8 py-8 sm:px-10">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-offwhite">
                {site.name}
              </span>
              <SheetClose
                aria-label="Stäng meny"
                className="inline-flex h-11 w-11 items-center justify-center border border-offwhite/20 text-offwhite transition-[transform,background-color] duration-150 ease-out hover:bg-offwhite/10 active:scale-[0.94]"
              >
                <X className="h-5 w-5" />
              </SheetClose>
            </div>

            <nav
              aria-label="Mobilmeny"
              className="mt-16 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="border-b border-offwhite/10 py-4 font-display text-3xl text-offwhite transition-colors duration-150 ease-out hover:text-sand-light"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <SheetClose asChild>
              <a
                href="#kontakt"
                className={cn(
                  buttonVariants({ variant: "accent", size: "lg" }),
                  "w-full",
                )}
              >
                Begär offert
              </a>
            </SheetClose>

            <div className="flex flex-col gap-3 pt-2 text-sm text-offwhite/70">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 hover:text-offwhite"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 hover:text-offwhite"
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
