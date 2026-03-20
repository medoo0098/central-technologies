import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageNavigation } from "@/components/PageNavigation";
import { PageFooter } from "@/components/PageFooter";
import { Button } from "@/components/ui/button";
import { UserCheck, Clock, ShieldCheck, Briefcase, Home, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PrivateHouseholdTechnology() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <PageNavigation />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-secondary/30">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-primary tracking-tight text-balance" data-testid="text-h1">
            Technology Management for Private Households
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
            Central Technologies provides ongoing, on-site technology management for private households across London and the Home Counties. We serve as your household's dedicated technology partner — available when needed, invisible when not.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
            Our clients include busy professionals, families with complex technology environments, and estate managers overseeing multiple properties. Many engagements are arranged through personal assistants, managing agents, or family offices who value a single, trusted point of contact for all technology matters.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            Rather than offering reactive one-off fixes, we focus on understanding your household's specific needs and maintaining systems proactively. This includes scheduled health checks, coordinating with broadband providers and smart home installers, and ensuring every device in your home operates reliably and securely.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Typical Household Requirements</h2>
            <div className="space-y-6">
              {[
                { icon: Home, text: "Whole-home network design and Wi-Fi optimisation for large or multi-storey residences, garden offices, and outbuildings" },
                { icon: UserCheck, text: "Coordination with PAs and managing agents — we liaise on your behalf, handling vendor calls, scheduling, and follow-up" },
                { icon: ShieldCheck, text: "Family-wide cybersecurity — age-appropriate device settings, parental controls, secure password management, and privacy guidance" },
                { icon: Clock, text: "Scheduled maintenance visits to review system health, apply updates, and resolve minor issues before they escalate" },
                { icon: Briefcase, text: "Home office technology for executives — reliable video conferencing, secure file access, and dedicated business connectivity" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2.5 bg-secondary/50 rounded-lg mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We work with a deliberately small number of households to ensure each receives attentive, personalised service. Every engagement is treated with complete confidentiality. We do not discuss one client's setup with another, and we are happy to work under NDA where required.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
              All recommendations are independent — we do not sell hardware or receive commissions from vendors. Our sole interest is in providing solutions that are suitable, reliable, and appropriate for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" data-testid="link-request-consultation">
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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
