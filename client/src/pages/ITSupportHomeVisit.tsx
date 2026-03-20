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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-primary tracking-tight text-balance" data-testid="text-h1">
            IT Support Home Visits Across London
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
            Central Technologies provides professional, on-site IT support for private households across all London boroughs. We visit your home by appointment, working discreetly and efficiently to resolve technology issues without disrupting your routine.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
            Whether you are dealing with unreliable Wi-Fi, need assistance migrating to a new device, or require ongoing technology oversight, our technicians bring the expertise to you. We work directly with homeowners, executives, and personal assistants who value a considered approach over a rushed one.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            Unlike high-volume call-out services, we limit the number of households we support. This allows us to understand your environment thoroughly and deliver permanent, well-planned solutions. Every home visit begins with a proper assessment and ends with clear documentation of the work completed.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Common Requests</h2>
            <div className="space-y-6">
              {[
                { icon: Wifi, text: "Wi-Fi and network troubleshooting — resolving persistent connectivity issues, dead spots, and slow performance across the property" },
                { icon: Monitor, text: "New device setup and data migration — transferring files, accounts, and settings to new computers, phones, or tablets with zero disruption" },
                { icon: Shield, text: "Security and privacy review — assessing current risks, configuring password managers, enabling two-factor authentication, and advising on data protection" },
                { icon: HardDrive, text: "Backup and recovery — establishing reliable local and cloud backup routines, or recovering data from failing or damaged devices" },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              All engagements begin with a brief consultation — by phone, email, or through your PA — to understand the scope of work. We then schedule a home visit at a time that suits your household. Most visits are completed within a single session, though complex projects may require a planned series of appointments.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
              Consultations begin at £300 + VAT. This covers an initial assessment, hands-on resolution, and a written summary of findings and recommendations. Ongoing support arrangements are available for households that prefer regular, proactive care.
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
