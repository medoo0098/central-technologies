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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <Navigation />
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-20 pb-12 overflow-hidden bg-gradient-to-b from-white to-secondary/30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] z-10 pointer-events-none" />
        
        {/* Subtle background pattern/decoration */}
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
            Discreet technology management and home IT support for busy families, executives, and the personal assistants who support them across Greater London.
          </motion.p>
          
          <motion.div variants={fadeIn} className="max-w-2xl mx-auto mb-8">
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">From resolving urgent issues to overseeing your entire home technology environment, Central Technologies provides calm, reliable on-site IT support through scheduled home visits across London.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="max-w-2xl mx-auto mb-12">
            <p className="text-base md:text-lg text-muted-foreground/70 leading-relaxed">We don't offer rushed, transactional fixes. We build long-term relationships based on discretion, continuity, and tailored solutions that fit how your household operates.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="max-w-2xl mx-auto mb-12">
            <p className="text-sm text-muted-foreground/60 leading-relaxed tracking-wide">
              <Link href="/it-support-home-visit-london" className="underline underline-offset-4 hover:text-primary transition-colors" data-testid="link-hero-home-visits">Home visits by appointment</Link> &middot; Serving all London boroughs &middot; PA and managing agent friendly
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
              Request a Home Visit
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
      {/* WHAT WE DO */}
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
                We ensure your home’s technology remains dependable, secure, and unobtrusive. Whether resolving persistent connectivity issues, replacing devices without disruption, or coordinating secure data migration, we handle planning, execution, and long-term support—on-site when required and remotely where practical. Our role is to anticipate and prevent problems, not merely react to them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* TYPICAL ENGAGEMENTS */}
      <section id="services" className="py-24 md:py-32 bg-secondary/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Typical Engagements</h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Home Networks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reliable Wi-Fi and wired connectivity throughout the property, including difficult layouts and larger homes. Seamless coverage for work, entertainment, and guests.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">New Devices & Replacement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Independent advice, procurement support, setup, and full data migration. Old devices are securely wiped and prepared for resale, handover, or recycling.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Privacy & Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Practical security reviews, password management setup, two-factor authentication, and data protection measures tailored for private households.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Ongoing Household Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scheduled health checks, software updates, and system reviews to keep your environment secure and reliable. We offer advice and support when troubleshooting or interacting with service providers, while you remain in control of your accounts and choices.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Concierge Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our technicians work independently and discreetly, resolving most issues with minimal interaction. Ideal for busy households or when occupants prefer not to be disturbed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* OUR APPROACH */}
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
                text: "We work quietly and professionally, treating client systems, layouts, and information as strictly confidential."
              },
              {
                title: "Respect for Time",
                text: "Appointments are structured to resolve issues properly. Evening and weekend availability is offered, and we coordinate directly with assistants if preferred."
              },
              {
                title: "Independent Advice",
                text: "We do not sell hardware or receive commissions. Recommendations are based solely on suitability, longevity, and value."
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
      {/* ABOUT US */}
      <section id="about" className="py-24 md:py-32 bg-secondary/30 border-y border-border/40">
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
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">Central Technologies is led by a seasoned technology professional with years of experience supporting private households and executive clients in London. Our clients come from long-term relationships built on trust and discretion. we bring an exceptional track record and deep industry knowledge to make the proccess as smooth as possible.</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ENGAGEMENT & FEES */}
      <section id="fees" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Engagement & Fees</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Central Technologies operates as a professional service, prioritising long-term relationships where we can understand and support your household's technology needs. Consultations start at £300 + VAT. Detailed fee structures for ongoing support contracts are available upon request following an initial consultation.
            </p>
            
            <p className="text-primary-foreground/70 italic text-lg">
              This allows us to deliver considered, permanent solutions rather than temporary fixes.
            </p>
          </motion.div>
        </div>
      </section>
      {/* PRIVATE INQUIRY FORM */}
      <section id="contact" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Private Inquiry</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We work with a limited number of households to maintain service quality. Whether you are a homeowner or a personal assistant acting on their behalf, please outline your requirements below. We will respond if we believe we are a suitable fit.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <InquiryForm />
          </motion.div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-12 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
              <div className="md:w-1/3">
                <p className="font-semibold text-sm tracking-wider uppercase text-primary mb-4">
                  Central Technologies
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Private technology management for households and executives across London and neighbouring counties.
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
