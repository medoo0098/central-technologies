import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", to: "expertise" },
    { name: "Services", to: "services" },
    { name: "Approach", to: "approach" },
    { name: "Fees", to: "fees" },
  ];

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
        <ScrollLink
          to="hero"
          smooth={true}
          duration={800}
          className="cursor-pointer font-semibold text-lg tracking-wider uppercase text-primary"
          onClick={() => setIsOpen(false)}
        >
          Central Technologies
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-100}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer uppercase tracking-wide"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-all cursor-pointer"
          >
            Inquire
          </ScrollLink>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-100}
                className="text-base font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              className="mt-4 px-5 py-3 bg-primary text-primary-foreground text-center font-medium rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              Start Inquiry
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
}
