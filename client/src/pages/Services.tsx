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
    description: "Design and deployment of wired and wireless infrastructure for homes, garden offices, and multi-building estates. We resolve persistent Wi-Fi issues, eliminate dead spots, and ensure seamless coverage for work, entertainment, and guests throughout your property."
  },
  {
    icon: Home,
    title: "Smart Home Integration",
    description: "Integration of lighting, climate, entertainment, and security systems into a cohesive experience. We work with leading platforms and ensure everything operates reliably — without requiring a manual to use."
  },
  {
    icon: Monitor,
    title: "Device Setup & Migration",
    description: "Independent advice, procurement support, setup, and full data migration for new computers, phones, and tablets. Old devices are securely wiped and prepared for resale, handover, or recycling."
  },
  {
    icon: Shield,
    title: "Cybersecurity & Privacy",
    description: "Practical security assessments tailored for private households. We configure password managers, enable two-factor authentication, review privacy settings, and provide straightforward guidance for every household member."
  },
  {
    icon: Tv,
    title: "AV & Entertainment Systems",
    description: "Specification, installation oversight, and programming of audio-visual equipment across multiple rooms or zones. We coordinate with specialist AV installers and ensure your systems are configured correctly."
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Maintenance",
    description: "Scheduled on-site visits for system health checks, software updates, and proactive maintenance. We monitor your environment and address small issues before they become larger problems."
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
            Central Technologies offers a comprehensive range of on-site IT support and technology management services for London households. Every engagement is delivered at your residence by appointment, with the discretion and professionalism your home deserves.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            We provide both one-off home visits and ongoing support arrangements. Whether you need a specific issue resolved or prefer a long-term technology partner, we tailor our services to suit your household's needs.
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Engagement & Fees</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Consultations start at £300 + VAT. This covers an initial on-site assessment, hands-on work, and a written summary of findings. Ongoing support packages are structured around your household's requirements and are available upon request.
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
