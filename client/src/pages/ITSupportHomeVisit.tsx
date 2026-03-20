import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageNavigation } from "@/components/PageNavigation";
import { PageFooter } from "@/components/PageFooter";
import { Button } from "@/components/ui/button";
import { Wifi, Monitor, Shield, HardDrive, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ITSupportHomeVisit() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <PageNavigation />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-secondary/30">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-primary tracking-tight text-balance" data-testid="text-h1">
            IT Support Home Visits Across London
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
            Central Technologies provides professional, on-site IT support for private households across London. Visits are by appointment and designed to be calm, discreet, and efficient.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
            We support homeowners, principals, and personal assistants who need technology issues handled properly, without unnecessary disruption or repeated chasing.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            Unlike high-volume call-out services, we limit the number of households we support. That allows us to understand the property, work confidently on-site, and provide clear follow-up after each visit.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Common Requests</h2>
            <div className="space-y-6">
              {[
                { icon: Wifi, text: "Wi-Fi and network troubleshooting for persistent connectivity issues, dead spots, and inconsistent coverage across the property" },
                { icon: Monitor, text: "New device setup and data migration for principals, family members, or staff, completed with minimal interruption" },
                { icon: Shield, text: "Security and privacy reviews, including password managers, two-factor authentication, and practical protection for household accounts" },
                { icon: HardDrive, text: "Backup, recovery, and handover support, especially where there is urgency around travel, device failure, or important work commitments" },
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every engagement begins with a concise consultation by phone, email, or through your PA. Once we understand the requirement, we schedule a visit at a time that suits the household and arrive prepared to handle the work properly.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
              Consultations begin at GBP300 + VAT. This covers the initial assessment, hands-on work, and clear written follow-up with any recommendations or next steps. Ongoing support is available where continuity is helpful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" data-testid="link-request-visit">
                <Link href="/contact">
                  Request a Home Visit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="link-view-services">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
