import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Home Visits", href: "/it-support-home-visit-london" },
  { name: "Households", href: "/private-household-technology" },
];

export function PageNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-md py-4 border-border/50 shadow-sm"
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="cursor-pointer font-semibold text-lg tracking-wider uppercase text-primary"
          onClick={() => setIsOpen(false)}
          data-testid="link-home"
        >
          Central Technologies
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors cursor-pointer uppercase tracking-wide",
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
              data-testid={`link-nav-${link.name.toLowerCase().replace(/\s/g, "-")}`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild data-testid="link-nav-inquire">
            <Link href="/contact">Inquire</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 border-b border-border/50",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4" data-testid="link-mobile-inquire">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Start Inquiry
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
