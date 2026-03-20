import { Link } from "wouter";
import { PageNavigation } from "@/components/PageNavigation";
import { PageFooter } from "@/components/PageFooter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <PageNavigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-10 text-primary tracking-tight" data-testid="text-h1">
            Terms of Service
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">About Central Technologies</h2>
              <p>
                Central Technologies Limited is a technology management service registered in England and Wales
                under Company No. 12231402, with VAT registration GB338720296.
              </p>
              <p className="mt-2">
                Hampstead, London &middot; Tel: +44 7718 137455
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Use of This Website</h2>
              <p>
                This website is provided for informational purposes. By using it, you agree to these terms. We make
                reasonable efforts to keep the content accurate and up to date, but do not warrant that all information
                is complete or error-free at all times.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Services & Engagement</h2>
              <p>
                All services described on this website are delivered by appointment and subject to availability. Specific
                terms, scope, and fees are agreed in writing before any engagement begins. Consultations start at £300 + VAT.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, design, and graphics — is the property of Central Technologies
                Limited unless otherwise stated. You may not reproduce or redistribute any part of this website without our
                prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p>
                Central Technologies Limited accepts no liability for any loss or damage arising from the use of this website
                or reliance on the information it contains. Our liability in relation to services provided is limited to the
                fees paid for the specific engagement in question.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. For any questions, please{" "}
                <Link href="/contact" className="text-primary underline underline-offset-4" data-testid="link-terms-contact">
                  contact us
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
