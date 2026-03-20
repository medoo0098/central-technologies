import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { ArrowDown, Shield, Wifi, RefreshCw, Headphones, CheckCircle2, UserCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const assistantPoints = [
  {
    title: "Low-Friction Coordination",
    text: "A concise brief is enough to get started. We can coordinate directly with the assistant, principal, household staff, or trusted vendors as appropriate."
  },
  {
    title: "Clear Follow-Up",
    text: "After each visit, we provide a concise written summary of what was done, what still needs attention, and any decisions that require approval."
  },
  {
    title: "Discreet On-Site Service",
    text: "We arrive prepared, work calmly, and aim to resolve issues with minimal disruption to the household, diary, or working day."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <Navigation />
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-20 pb-12 overflow-hidden bg-gradient-to-b from-white to-secondary/30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] z-10 pointer-events-none" />

        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="container mx-auto max-w-4xl text-center z-20"
        >
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 text-primary tracking-tight text-balance" data-testid="text-h1">
            Private, On-Site IT Support for London Households
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground font-light mb-8 text-balance leading-relaxed">
            Discreet technology support for private households, principals, and the personal assistants who keep everything running.
          </motion.p>

          <motion.div variants={fadeIn} className="max-w-3xl mx-auto mb-8">
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">Central Technologies acts as a trusted, low-friction point of contact for household technology - resolving urgent issues, planning upgrades, coordinating vendors, and keeping home and executive setups dependable.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="max-w-3xl mx-auto mb-12">
            <p className="text-base md:text-lg text-muted-foreground/70 leading-relaxed">Our service is designed for clients who value continuity, discretion, and clear communication over quick-fix call-out support. We work with a limited number of households so each engagement is handled properly.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="max-w-2xl mx-auto mb-12">
            <p className="text-sm text-muted-foreground/60 leading-relaxed tracking-wide">
              <Link href="/it-support-home-visit-london" className="underline underline-offset-4 hover:text-primary transition-colors" data-testid="link-hero-home-visits">Home visits by appointment</Link> &middot; Serving all London boroughs &middot; Trusted by personal assistants and household representatives
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              data-testid="button-hero-cta"
            >
              Request a Consultation
            </ScrollLink>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border border-primary/30 text-primary text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-primary/5 hover:-translate-y-0.5 transition-all"
              data-testid="link-hero-services"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce opacity-50" />
        </motion.div>
      </section>

      <section id="expertise" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4 relative inline-block">
                What We Do
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary/20"></span>
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                We keep household technology dependable, secure, and easy to live with. That may mean resolving persistent connectivity issues, replacing devices without disruption, preparing a home office before an important trip, or quietly coordinating with suppliers so the household does not have to. Our role is to reduce friction, protect continuity, and make technology one less thing to manage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32 bg-secondary/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Typical Engagements</h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Home Networks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reliable Wi-Fi and wired connectivity throughout the property, including larger homes, garden offices, guest areas, and difficult layouts.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.1 }} className="group">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Device Replacement & Migration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Procurement support, setup, and full migration for new computers, phones, and tablets, with minimal interruption to the household or working day.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="group">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Privacy & Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Practical security reviews, password management, two-factor authentication, and privacy measures suited to private households and executive lifestyles.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.3 }} className="group">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Ongoing Household Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scheduled reviews, updates, troubleshooting, and oversight so issues are handled before they become interruptions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.4 }} className="group md:col-span-2">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">PA & Vendor Coordination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We can work directly with personal assistants, family offices, managing agents, and specialist installers - helping reduce admin, simplify vendor conversations, and keep decisions moving.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
             <div className="w-16 h-1 bg-primary/20"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discretion",
                text: "We work quietly and professionally, treating client systems, routines, and information as strictly confidential."
              },
              {
                title: "Clear Communication",
                text: "We explain what matters, avoid noise, and leave concise follow-up notes so principals and assistants know exactly where things stand."
              },
              {
                title: "Independent Advice",
                text: "We do not sell hardware or receive commissions. Recommendations are based on suitability, longevity, and the practical needs of the household."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-secondary/20 rounded-lg border border-border/50 hover:border-border transition-colors"
              >
                <div className="mb-4 text-primary opacity-80">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="assistants" className="py-24 md:py-32 bg-secondary/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">For Personal Assistants</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that assistants are often asked to solve technology issues quickly, discreetly, and with minimal supervision. Our service is built to make that easier: one reliable contact, calm on-site delivery, and clear written follow-up.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {assistantPoints.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-lg border border-border/50"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4 relative inline-block">
                About Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary/20"></span>
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">Central Technologies is led by a senior technology professional with experience supporting private households and executive clients in London. Our work is built around trust, continuity, and the ability to operate confidently in environments where discretion matters.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="fees" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Engagement & Fees</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Consultations start at GBP300 + VAT. This covers an initial assessment, hands-on work, and clear written follow-up. Ongoing support arrangements are available for households that prefer continuity and a single trusted point of contact.
            </p>

            <p className="text-primary-foreground/70 italic text-lg">
              The aim is not a quick temporary fix, but a considered solution that reduces ongoing disruption.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Private Inquiry</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you are enquiring for your own household or on behalf of a principal, you are welcome to send a concise brief. We will review the requirements and respond if we believe we are the right fit.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}>
            <InquiryForm />
          </motion.div>
        </div>
      </section>

      <footer className="py-12 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
              <div className="md:w-1/3">
                <p className="font-semibold text-sm tracking-wider uppercase text-primary mb-4">
                  Central Technologies
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Trusted on-site technology support for private households, principals, and personal assistants across London and neighbouring counties.
                </p>
              </div>
              <div className="md:w-1/3">
                <p className="font-semibold text-xs tracking-wider uppercase text-muted-foreground mb-4">
                  Pages
                </p>
                <div className="flex flex-col space-y-2">
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-services">Our Services</Link>
                  <Link href="/it-support-home-visit-london" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home-visits">Home Visits</Link>
                  <Link href="/private-household-technology" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-households">Private Households</Link>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Request Consultation</Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <p className="font-semibold text-xs tracking-wider uppercase text-muted-foreground mb-4">
                  Service Area
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4">
              <Link href="/privacy" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors" data-testid="link-footer-privacy">Privacy</Link>
              <Link href="/terms" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors" data-testid="link-footer-terms">Terms</Link>
            </div>
            <div className="w-12 h-px bg-border mx-auto my-6"></div>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest text-center">
              &copy; {new Date().getFullYear()} Central Technologies Limited. All rights reserved.
            </p>
            <p className="text-[11px] text-muted-foreground/40 text-center mt-3 tracking-wide">
              Central Technologies Limited &middot; Company No. 12231402 &middot; VAT No. GB338720296 &middot; Tel +44 7718 137455 &middot; Hampstead, London
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
