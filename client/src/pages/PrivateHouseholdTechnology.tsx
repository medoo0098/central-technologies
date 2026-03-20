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
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-primary tracking-tight text-balance" data-testid="text-h1">
            Technology Management for Private Households
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
            Central Technologies provides ongoing, on-site technology management for private households across London and the Home Counties. We serve as a trusted technology partner for homes where discretion, continuity, and ease matter.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
            Our clients include busy professionals, family households, principals with demanding schedules, and assistants who need one reliable point of contact for household technology.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            Rather than offering reactive one-off fixes, we focus on understanding how the household operates, maintaining systems proactively, and coordinating smoothly with assistants, staff, and external suppliers.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Typical Household Requirements</h2>
            <div className="space-y-6">
              {[
                { icon: Home, text: "Whole-home network design and Wi-Fi optimisation for larger residences, guest spaces, garden offices, and outbuildings" },
                { icon: UserCheck, text: "Coordination with personal assistants, managing agents, and household representatives so issues are handled without unnecessary back-and-forth" },
                { icon: ShieldCheck, text: "Family-wide cybersecurity, privacy settings, and sensible controls for shared devices, staff access, and household accounts" },
                { icon: Clock, text: "Scheduled maintenance visits to review system health, apply updates, and prevent minor issues from becoming disruptions" },
                { icon: Briefcase, text: "Home office and executive support, including reliable video calls, device readiness, travel preparation, and secure access" },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We work with a deliberately limited number of households so each client receives careful attention. Every engagement is handled confidentially, and we are comfortable working in environments where discretion and trust are essential.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
              Recommendations are independent and practical. Our job is to make the household easier to run, not to introduce unnecessary complexity or vendor noise.
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
