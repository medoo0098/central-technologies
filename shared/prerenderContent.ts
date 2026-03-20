interface PrerenderData {
  title: string;
  description: string;
  html: string;
  robots?: string;
}

const CANONICAL_BASE = "https://centraltechnologies.london";

const ORGANIZATION_SCHEMA = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${CANONICAL_BASE}/#organization`,
  legalName: "Central Technologies Limited",
  name: "Central Technologies",
  url: `${CANONICAL_BASE}/`,
  telephone: "+447718137455",
  vatID: "GB338720296",
  description:
    "Discreet technology management for private households and executives across Greater London",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hampstead",
    addressRegion: "London",
    addressCountry: "GB",
  },
  areaServed: [
    {
      "@type": "City",
      name: "London",
      containedInPlace: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater London",
    },
  ],
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "UK Companies House",
      value: "12231402",
    },
    {
      "@type": "PropertyValue",
      propertyID: "VAT ID",
      value: "GB338720296",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+447718137455",
    areaServed: "GB",
    availableLanguage: ["en-GB"],
  },
  priceRange: "From £300 + VAT",
  knowsAbout: [
    "On-site IT Support",
    "Home Visit IT Support",
    "Home Network Setup",
    "Smart Home Integration",
    "Cybersecurity",
    "Device Management",
    "AV Systems",
    "Technology Consulting",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology Management Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Site IT Support (Home Visits)",
          description:
            "Professional, on-site IT support delivered through scheduled home visits across London. Troubleshooting, device setup, network diagnostics, and ongoing care for private households",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Network & Connectivity",
          description:
            "Design and deployment of wired and wireless infrastructure for homes, garden offices, and multi-building estates",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Home Integration",
          description:
            "Integration of lighting, climate, entertainment, and security systems into a cohesive, user-friendly experience",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Device & Account Management",
          description:
            "Setup, configuration, and ongoing care for all household devices, from personal electronics to shared systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cybersecurity & Privacy",
          description:
            "Assessment of current risks, implementation of protective measures, and training for all household members",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AV & Entertainment Systems",
          description:
            "Specification, installation oversight, and programming of audio-visual equipment across multiple rooms or zones",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Support",
          description:
            "Periodic check-ins, software updates, and system checks to ensure everything runs smoothly",
        },
      },
    ],
  },
};

const prerenderMap: Record<string, PrerenderData> = {
  "/": {
    title: "Central Technologies – Private, On-Site IT Support for London Households",
    description:
      "Discreet technology management and home IT support for busy families, executives, and personal assistants across Greater London. On-site support by appointment. Consultations from £300 + VAT.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Households</a><a href="/contact">Inquire</a></nav>
<h1>Private, On-Site IT Support for London Households</h1>
<p>Discreet technology management and home IT support for busy families, executives, and the personal assistants who support them across Greater London.</p>
<p>From resolving urgent issues to overseeing your entire home technology environment, Central Technologies provides calm, reliable on-site IT support through scheduled home visits across London.</p>
<p>We don’t offer rushed, transactional fixes. We build long-term relationships based on discretion, continuity, and tailored solutions that fit how your household operates.</p>
<p><a href="/it-support-home-visit-london">Home visits by appointment</a> &middot; Serving all London boroughs &middot; PA and managing agent friendly</p>
<h2>What We Do</h2>
<p>We ensure your home’s technology remains dependable, secure, and unobtrusive. Whether resolving persistent connectivity issues, replacing devices without disruption, or coordinating secure data migration, we handle planning, execution, and long-term support—on-site when required and remotely where practical. Our role is to anticipate and prevent problems, not merely react to them.</p>
<h2>Typical Engagements</h2>
<h3>Home Networks</h3>
<p>Reliable Wi-Fi and wired connectivity throughout the property, including difficult layouts and larger homes. Seamless coverage for work, entertainment, and guests.</p>
<h3>New Devices &amp; Replacement</h3>
<p>Independent advice, procurement support, setup, and full data migration. Old devices are securely wiped and prepared for resale, handover, or recycling.</p>
<h3>Privacy &amp; Security</h3>
<p>Practical security reviews, password management setup, two-factor authentication, and data protection measures tailored for private households.</p>
<h3>Ongoing Household Support</h3>
<p>Scheduled health checks, software updates, and system reviews to keep your environment secure and reliable. We offer advice and support when troubleshooting or interacting with service providers, while you remain in control of your accounts and choices.</p>
<h3>Concierge Service</h3>
<p>Our technicians work independently and discreetly, resolving most issues with minimal interaction. Ideal for busy households or when occupants prefer not to be disturbed.</p>
<h2>Our Approach</h2>
<h3>Discretion</h3>
<p>We work quietly and professionally, treating client systems, layouts, and information as strictly confidential.</p>
<h3>Respect for Time</h3>
<p>Appointments are structured to resolve issues properly. Evening and weekend availability is offered, and we coordinate directly with assistants if preferred.</p>
<h3>Independent Advice</h3>
<p>We do not sell hardware or receive commissions. Recommendations are based solely on suitability, longevity, and value.</p>
<h2>About Us</h2>
<p>Central Technologies is led by a seasoned technology professional with years of experience supporting private households and executive clients in London. Our clients come from long-term relationships built on trust and discretion.</p>
<h2>Engagement &amp; Fees</h2>
<p>Central Technologies operates as a professional service, prioritising long-term relationships where we can understand and support your household’s technology needs. Consultations start at £300 + VAT. Detailed fee structures for ongoing support contracts are available upon request following an initial consultation.</p>
<h2>Private Inquiry</h2>
<p>We work with a limited number of households to maintain service quality. Whether you are a homeowner or a personal assistant acting on their behalf, please outline your requirements below.</p>
<footer><p>Central Technologies – Private technology management for households and executives across London and neighbouring counties.</p><p>Service Area: All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.</p><a href="/services">Our Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },

  "/it-support-home-visit-london": {
    title: "IT Support Home Visits Across London | Central Technologies",
    description:
      "Professional on-site IT support for private households across all London boroughs. Home visits by appointment for Wi-Fi, device setup, security, and data recovery. From £300 + VAT.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Households</a><a href="/contact">Inquire</a></nav>
<h1>IT Support Home Visits Across London</h1>
<p>Central Technologies provides professional, on-site IT support for private households across all London boroughs. We visit your home by appointment, working discreetly and efficiently to resolve technology issues without disrupting your routine.</p>
<p>Whether you are dealing with unreliable Wi-Fi, need assistance migrating to a new device, or require ongoing technology oversight, our technicians bring the expertise to you. We work directly with homeowners, executives, and personal assistants who value a considered approach over a rushed one.</p>
<p>Unlike high-volume call-out services, we limit the number of households we support. This allows us to understand your environment thoroughly and deliver permanent, well-planned solutions. Every home visit begins with a proper assessment and ends with clear documentation of the work completed.</p>
<h2>Common Requests</h2>
<ul>
<li>Wi-Fi and network troubleshooting — resolving persistent connectivity issues, dead spots, and slow performance across the property</li>
<li>New device setup and data migration — transferring files, accounts, and settings to new computers, phones, or tablets with zero disruption</li>
<li>Security and privacy review — assessing current risks, configuring password managers, enabling two-factor authentication, and advising on data protection</li>
<li>Backup and recovery — establishing reliable local and cloud backup routines, or recovering data from failing or damaged devices</li>
</ul>
<h2>How It Works</h2>
<p>All engagements begin with a brief consultation — by phone, email, or through your PA — to understand the scope of work. We then schedule a home visit at a time that suits your household. Most visits are completed within a single session, though complex projects may require a planned series of appointments.</p>
<p>Consultations begin at £300 + VAT. This covers an initial assessment, hands-on resolution, and a written summary of findings and recommendations. Ongoing support arrangements are available for households that prefer regular, proactive care.</p>
<p><a href="/contact">Request a Home Visit</a> | <a href="/services">View All Services</a></p>
<footer><p>Central Technologies – Private technology management for households and executives across London and neighbouring counties.</p><p>Service Area: All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.</p><a href="/services">Our Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },

  "/private-household-technology": {
    title: "Technology Management for Private Households | Central Technologies",
    description:
      "Ongoing on-site technology management for private households across London and the Home Counties. Dedicated support for families, executives, PAs, and managing agents.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Households</a><a href="/contact">Inquire</a></nav>
<h1>Technology Management for Private Households</h1>
<p>Central Technologies provides ongoing, on-site technology management for private households across London and the Home Counties. We serve as your household’s dedicated technology partner — available when needed, invisible when not.</p>
<p>Our clients include busy professionals, families with complex technology environments, and estate managers overseeing multiple properties. Many engagements are arranged through personal assistants, managing agents, or family offices who value a single, trusted point of contact for all technology matters.</p>
<p>Rather than offering reactive one-off fixes, we focus on understanding your household’s specific needs and maintaining systems proactively. This includes scheduled health checks, coordinating with broadband providers and smart home installers, and ensuring every device in your home operates reliably and securely.</p>
<h2>Typical Household Requirements</h2>
<ul>
<li>Whole-home network design and Wi-Fi optimisation for large or multi-storey residences, garden offices, and outbuildings</li>
<li>Coordination with PAs and managing agents — we liaise on your behalf, handling vendor calls, scheduling, and follow-up</li>
<li>Family-wide cybersecurity — age-appropriate device settings, parental controls, secure password management, and privacy guidance</li>
<li>Scheduled maintenance visits to review system health, apply updates, and resolve minor issues before they escalate</li>
<li>Home office technology for executives — reliable video conferencing, secure file access, and dedicated business connectivity</li>
</ul>
<h2>Our Commitment</h2>
<p>We work with a deliberately small number of households to ensure each receives attentive, personalised service. Every engagement is treated with complete confidentiality. We do not discuss one client’s setup with another, and we are happy to work under NDA where required.</p>
<p>All recommendations are independent — we do not sell hardware or receive commissions from vendors. Our sole interest is in providing solutions that are suitable, reliable, and appropriate for your home.</p>
<p><a href="/contact">Request a Consultation</a> | <a href="/it-support-home-visit-london">About Home Visits</a></p>
<footer><p>Central Technologies – Private technology management for households and executives across London and neighbouring counties.</p><p>Service Area: All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.</p><a href="/services">Our Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },

  "/services": {
    title: "Our Services | Central Technologies – On-Site IT Support London",
    description:
      "Comprehensive on-site IT support and technology management for London households. Network design, smart home integration, cybersecurity, device setup, AV systems, and ongoing maintenance.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Households</a><a href="/contact">Inquire</a></nav>
<h1>Our Services</h1>
<p>Central Technologies offers a comprehensive range of on-site IT support and technology management services for London households. Every engagement is delivered at your residence by appointment, with the discretion and professionalism your home deserves.</p>
<p>We provide both one-off home visits and ongoing support arrangements. Whether you need a specific issue resolved or prefer a long-term technology partner, we tailor our services to suit your household’s needs.</p>
<h2>Network &amp; Connectivity</h2>
<p>Design and deployment of wired and wireless infrastructure for homes, garden offices, and multi-building estates. We resolve persistent Wi-Fi issues, eliminate dead spots, and ensure seamless coverage for work, entertainment, and guests throughout your property.</p>
<h2>Smart Home Integration</h2>
<p>Integration of lighting, climate, entertainment, and security systems into a cohesive experience. We work with leading platforms and ensure everything operates reliably — without requiring a manual to use.</p>
<h2>Device Setup &amp; Migration</h2>
<p>Independent advice, procurement support, setup, and full data migration for new computers, phones, and tablets. Old devices are securely wiped and prepared for resale, handover, or recycling.</p>
<h2>Cybersecurity &amp; Privacy</h2>
<p>Practical security assessments tailored for private households. We configure password managers, enable two-factor authentication, review privacy settings, and provide straightforward guidance for every household member.</p>
<h2>AV &amp; Entertainment Systems</h2>
<p>Specification, installation oversight, and programming of audio-visual equipment across multiple rooms or zones. We coordinate with specialist AV installers and ensure your systems are configured correctly.</p>
<h2>Ongoing Support &amp; Maintenance</h2>
<p>Scheduled on-site visits for system health checks, software updates, and proactive maintenance. We monitor your environment and address small issues before they become larger problems.</p>
<h2>Engagement &amp; Fees</h2>
<p>Consultations start at £300 + VAT. This covers an initial on-site assessment, hands-on work, and a written summary of findings. Ongoing support packages are structured around your household’s requirements and are available upon request.</p>
<p><a href="/contact">Start an Inquiry</a> | <a href="/it-support-home-visit-london">About Home Visits</a></p>
<footer><p>Central Technologies – Private technology management for households and executives across London and neighbouring counties.</p><p>Service Area: All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.</p><a href="/services">Our Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },

  "/contact": {
    title: "Request a Consultation | Central Technologies – London IT Support",
    description:
      "Request a private technology consultation with Central Technologies. On-site IT support for London households. We work with homeowners, executives, PAs, and managing agents.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Households</a><a href="/contact">Inquire</a></nav>
<h1>Request a Consultation</h1>
<p>Whether you are a homeowner, executive, or personal assistant acting on behalf of a client, we welcome your inquiry. Please outline your requirements below and we will respond promptly if we believe we can be of service.</p>
<p>All consultations begin with a brief conversation to understand your needs. If appropriate, we will arrange an on-site visit at your London residence at a time that suits your schedule. We also work with managing agents and family offices throughout Greater London.</p>
<h2>What to Expect</h2>
<p>After submitting your inquiry, a member of our team will review your requirements and respond within one working day. If your needs align with our expertise, we will schedule a brief introductory call or exchange to discuss the scope of work.</p>
<p>Initial consultations start at £300 + VAT and include an on-site assessment, hands-on work, and a written summary. We are happy to coordinate directly with your PA or managing agent throughout the process.</p>
<p>We work across all London boroughs and extend our services to select areas in Surrey, Hertfordshire, Buckinghamshire, and Essex.</p>
<p><a href="/services">View Our Services</a> | <a href="/it-support-home-visit-london">About Home Visits</a></p>
<footer><p>Central Technologies – Private technology management for households and executives across London and neighbouring counties.</p><p>Service Area: All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.</p><a href="/services">Our Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },

  "/privacy": {
    title: "Privacy Policy | Central Technologies",
    description:
      "Privacy policy for Central Technologies Limited. How we collect, use, and protect your personal data under UK GDPR.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Households</a><a href="/contact">Inquire</a></nav>
<h1>Privacy Policy</h1>
<h2>Data Controller</h2>
<p>Central Technologies Limited is the data controller for personal information collected through this website and during the course of our services. We are registered in England and Wales under Company No. 12231402, with VAT registration GB338720296.</p>
<p>Hampstead, London · Tel: +44 7718 137455</p>
<h2>Information We Collect</h2>
<p>When you submit an inquiry through our website, we collect the information you provide — typically your name, email address, telephone number, and a description of your requirements. We use this solely to respond to your inquiry and, where appropriate, to arrange a consultation.</p>
<h2>How We Use Your Information</h2>
<p>Your personal data is used only for the purpose of responding to your inquiry and delivering our services. We do not share your information with third parties for marketing purposes, and we do not use tracking or advertising cookies on this website.</p>
<h2>Data Retention</h2>
<p>We retain inquiry data for a reasonable period necessary to fulfil the purpose for which it was collected.</p>
<h2>Your Rights</h2>
<p>Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, you have the right to access, correct, or request deletion of your personal data. You may also object to processing or request restriction of processing.</p>
<h2>Contact</h2>
<p>If you have any questions about how we handle your personal information, please <a href="/contact">get in touch</a>.</p>
<footer><p>Central Technologies Limited · Company No. 12231402 · VAT No. GB338720296 · Tel +44 7718 137455 · Hampstead, London</p></footer>
</div>`,
  },

  "/terms": {
    title: "Terms of Service | Central Technologies",
    description:
      "Terms of service for Central Technologies Limited. Website usage terms, service engagement conditions, and governing law.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Households</a><a href="/contact">Inquire</a></nav>
<h1>Terms of Service</h1>
<h2>About Central Technologies</h2>
<p>Central Technologies Limited is a technology management service registered in England and Wales under Company No. 12231402, with VAT registration GB338720296.</p>
<p>Hampstead, London · Tel: +44 7718 137455</p>
<h2>Use of This Website</h2>
<p>This website is provided for informational purposes. By using it, you agree to these terms. We make reasonable efforts to keep the content accurate and up to date.</p>
<h2>Services &amp; Engagement</h2>
<p>All services described on this website are delivered by appointment and subject to availability. Specific terms, scope, and fees are agreed in writing before any engagement begins. Consultations start at £300 + VAT.</p>
<h2>Intellectual Property</h2>
<p>All content on this website is the property of Central Technologies Limited unless otherwise stated.</p>
<h2>Limitation of Liability</h2>
<p>Central Technologies Limited accepts no liability for any loss or damage arising from the use of this website or reliance on the information it contains.</p>
<h2>Governing Law</h2>
<p>These terms are governed by the laws of England and Wales. For any questions, please <a href="/contact">contact us</a>.</p>
<footer><p>Central Technologies Limited · Company No. 12231402 · VAT No. GB338720296 · Tel +44 7718 137455 · Hampstead, London</p></footer>
</div>`,
  },

  "__404__": {
    title: "Page Not Found | Central Technologies",
    description: "The page you are looking for could not be found.",
    html: `<div><h1>404 Page Not Found</h1><p>The page you are looking for could not be found.</p><p><a href="/">Return to Central Technologies homepage</a></p></div>`,
    robots: "noindex, follow",
  },
};

export const VALID_ROUTES = [
  "/",
  "/it-support-home-visit-london",
  "/private-household-technology",
  "/services",
  "/contact",
  "/privacy",
  "/terms",
];

function normalizePath(path: string): string {
  let normalized = path.split("?")[0].split("#")[0];
  if (normalized !== "/" && normalized.endsWith("/")) {
    normalized = normalized.replace(/\/+$/, "");
  }
  return normalized;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getCanonicalPath(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? "/" : normalized;
}

function buildSchema(data: PrerenderData, path: string): string {
  const canonicalPath = getCanonicalPath(path);
  const pageUrl = `${CANONICAL_BASE}${canonicalPath}`;

  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${CANONICAL_BASE}/#website`,
          url: `${CANONICAL_BASE}/`,
          name: "Central Technologies",
          description:
            "Discreet technology management for high-end residential clients across Greater London",
          publisher: { "@id": `${CANONICAL_BASE}/#organization` },
          inLanguage: "en-GB",
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: data.title,
          isPartOf: { "@id": `${CANONICAL_BASE}/#website` },
          description: data.description,
          inLanguage: "en-GB",
        },
        ORGANIZATION_SCHEMA,
      ],
    },
    null,
    2,
  );
}

export function isKnownRoute(path: string): boolean {
  const normalized = normalizePath(path);
  return normalized in prerenderMap && normalized !== "__404__";
}

export function getPrerenderData(path: string): PrerenderData {
  const normalized = normalizePath(path);
  return prerenderMap[normalized] || prerenderMap["__404__"];
}

export function injectPrerenderContent(html: string, path: string): string {
  const data = getPrerenderData(path);
  const canonicalPath = getCanonicalPath(path);
  const robots = data.robots ?? "index, follow";

  let result = html.replace(
    '<div id="root"></div>',
    `<div id="root">${data.html}</div>`,
  );

  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(data.title)}</title>`,
  );

  result = result.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="title" content="${escapeHtml(data.title)}" />`,
  );

  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(data.description)}" />`,
  );

  result = result.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${robots}" />`,
  );

  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${CANONICAL_BASE}${canonicalPath}" />`,
  );

  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${CANONICAL_BASE}${canonicalPath}" />`,
  );

  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(data.title)}" />`,
  );

  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(data.description)}" />`,
  );

  result = result.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${CANONICAL_BASE}${canonicalPath}" />`,
  );

  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(data.title)}" />`,
  );

  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(data.description)}" />`,
  );

  result = result.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${buildSchema(data, path)}\n    </script>`,
  );

  return result;
}
