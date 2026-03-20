import { Link } from "wouter";

export function PageFooter() {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
            <div className="md:w-1/3">
              <p className="font-semibold text-sm tracking-wider uppercase text-primary mb-4">
                Central Technologies
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trusted on-site technology support for private households, principals, and personal assistants across London and neighbouring counties.
              </p>
            </div>
            <div className="md:w-1/3">
              <p className="font-semibold text-xs tracking-wider uppercase text-muted-foreground mb-4">
                Pages
              </p>
              <div className="flex flex-col space-y-2">
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-services">Our Services</Link>
                <Link href="/it-support-home-visit-london" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home-visits">Home Visits</Link>
                <Link href="/private-household-technology" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-households">Private Households</Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Request Consultation</Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <p className="font-semibold text-xs tracking-wider uppercase text-muted-foreground mb-4">
                Service Area
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4">
            <Link href="/privacy" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors" data-testid="link-footer-privacy">Privacy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors" data-testid="link-footer-terms">Terms</Link>
          </div>
          <div className="w-12 h-px bg-border mx-auto my-6"></div>
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest text-center">
            &copy; {new Date().getFullYear()} Central Technologies Limited. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground/40 text-center mt-3 tracking-wide">
            Central Technologies Limited &middot; Company No. 12231402 &middot; VAT No. GB338720296 &middot; Tel +44 7718 137455 &middot; Hampstead, London
          </p>
        </div>
      </div>
    </footer>
  );
}
