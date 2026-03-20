import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageNavigation } from "@/components/PageNavigation";
import { PageFooter } from "@/components/PageFooter";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <PageNavigation />

      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-white to-secondary/30">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-primary tracking-tight text-balance" data-testid="text-h1">
            Request a Consultation
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
            Whether you are enquiring for your own household, a principal, or a family office, you are welcome to send a concise brief.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-6">
            Personal assistants are encouraged to get in touch. We are used to working through assistants, managing agents, and household representatives who need a reliable technology contact they can trust.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            If appropriate, we will arrange an on-site visit at a time that suits the household and communicate clearly about next steps, access requirements, and any decisions that need approval.
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <InquiryForm />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-6 text-primary">What to Expect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We review enquiries personally and aim to respond within one working day. A short note is fine - you do not need to write a technical brief for us to understand the situation.
              </p>
              <p>
                Initial consultations start at GBP300 + VAT and include an on-site assessment, hands-on work, and clear written follow-up. We are happy to coordinate directly with your PA, principal, or household team.
              </p>
              <p>
                We work across all London boroughs and extend our services to select areas in Surrey, Hertfordshire, Buckinghamshire, and Essex.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" size="lg" data-testid="link-view-services">
                <Link href="/services">View Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="link-about-home-visits">
                <Link href="/it-support-home-visit-london">About Home Visits</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
