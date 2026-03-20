import { Link } from "wouter";
import { PageNavigation } from "@/components/PageNavigation";
import { PageFooter } from "@/components/PageFooter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <PageNavigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-10 text-primary tracking-tight" data-testid="text-h1">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Data Controller</h2>
              <p>
                Central Technologies Limited is the data controller for personal information collected through this website
                and during the course of our services. We are registered in England and Wales under Company No. 12231402,
                with VAT registration GB338720296.
              </p>
              <p className="mt-2">
                Hampstead, London &middot; Tel: +44 7718 137455
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Information We Collect</h2>
              <p>
                When you submit an inquiry through our website, we collect the information you provide — typically your name,
                email address, telephone number, and a description of your requirements. We use this solely to respond to your
                inquiry and, where appropriate, to arrange a consultation.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">How We Use Your Information</h2>
              <p>
                Your personal data is used only for the purpose of responding to your inquiry and delivering our services. We do
                not share your information with third parties for marketing purposes, and we do not use tracking or advertising
                cookies on this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Data Retention</h2>
              <p>
                We retain inquiry data for a reasonable period necessary to fulfil the purpose for which it was collected. Once
                an engagement concludes, client records are retained only as long as required by applicable regulations or
                legitimate business needs.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Your Rights</h2>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, you have the right
                to access, correct, or request deletion of your personal data. You may also object to processing or request
                restriction of processing. To exercise any of these rights, please contact us using the details above.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
              <p>
                If you have any questions about how we handle your personal information, please{" "}
                <Link href="/contact" className="text-primary underline underline-offset-4" data-testid="link-privacy-contact">
                  get in touch
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
