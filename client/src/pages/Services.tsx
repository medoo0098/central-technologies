import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageNavigation } from "@/components/PageNavigation";
import { PageFooter } from "@/components/PageFooter";
import { Button } from "@/components/ui/button";
import { Wifi, Monitor, Shield, Headphones, Home, Tv, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const services = [
  {
    icon: Wifi,
    title: "Network & Connectivity",
    description: "Design and oversight of wired and wireless infrastructure for larger homes, garden offices, guest areas, and multi-building properties. We resolve persistent Wi-Fi issues and improve reliability throughout the property."
  },
  {
    icon: Home,
    title: "Smart Home Integration",
    description: "Coordination and support for lighting, climate, entertainment, and security systems so the household can rely on technology without having to manage technical complexity."
  },
  {
    icon: Monitor,
    title: "Device Setup & Migration",
    description: "Procurement support, setup, and full migration for new computers, phones, and tablets, with careful handover and minimal disruption to the principal or household staff."
  },
  {
    icon: Shield,
    title: "Cybersecurity & Privacy",
    description: "Practical security reviews for private households, including password management, two-factor authentication, privacy settings, and sensible protection for family members and staff."
  },
  {
    icon: Tv,
    title: "AV & Entertainment Systems",
    description: "Specification support, installation oversight, and troubleshooting for multi-room audio, television, and entertainment systems, including coordination with specialist installers when required."
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Maintenance",
    description: "Regular reviews, updates, troubleshooting, and coordination so the household has one trusted point of contact instead of a collection of disconnected suppliers."
  },
];

export default function Services() {
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
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
            Central Technologies provides on-site technology support for private households that expect reliability, discretion, and clear communication.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-6">
            We support principals, families, and the assistants who act on their behalf. Engagements range from resolving a specific issue to acting as an ongoing household technology partner.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            The emphasis is on calm execution, sensible recommendations, and reducing the time the household has to spend thinking about technology.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/50 rounded-lg group-hover:shadow-md transition-all">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-3 mt-2 text-primary">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Engagement & Fees</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Consultations start at GBP300 + VAT. This includes an initial on-site assessment, hands-on work, and clear written follow-up. Ongoing support arrangements are structured around the household's needs and the level of continuity required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" data-testid="link-start-inquiry">
                <Link href="/contact">
                  Start an Inquiry
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground" data-testid="link-home-visits-info">
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
