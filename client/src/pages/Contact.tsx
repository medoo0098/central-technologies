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
            Whether you are a homeowner, executive, or personal assistant acting on behalf of a client, we welcome your inquiry. Please outline your requirements below and we will respond promptly if we believe we can be of service.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            All consultations begin with a brief conversation to understand your needs. If appropriate, we will arrange an on-site visit at your London residence at a time that suits your schedule. We also work with managing agents and family offices throughout Greater London.
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <InquiryForm />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">What to Expect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                After submitting your inquiry, a member of our team will review your requirements and respond within one working day. If your needs align with our expertise, we will schedule a brief introductory call or exchange to discuss the scope of work.
              </p>
              <p>
                Initial consultations start at £300 + VAT and include an on-site assessment, hands-on work, and a written summary. We are happy to coordinate directly with your PA or managing agent throughout the process.
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
