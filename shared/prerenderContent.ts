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
    "Discreet technology management for private households and executive clients across Greater London",
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
  priceRange: "From GBP300 + VAT",
  knowsAbout: [
    "Private Household IT Support",
    "Home Visit IT Support",
    "Personal Assistant Technology Coordination",
    "Home Network Setup",
    "Smart Home Integration",
    "Cybersecurity",
    "Device Management",
    "Technology Consulting",
  ],
};

const prerenderMap: Record<string, PrerenderData> = {
  "/": {
    title: "Private IT Support for London Households | Central Technologies",
    description:
      "Discreet on-site IT support and technology management for private households, principals, and personal assistants across London. Home visits by appointment from GBP300 + VAT.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></nav>
<h1>Private, On-Site IT Support for London Households</h1>
<p>Discreet technology support for private households, principals, and the personal assistants who keep everything running.</p>
<p>Central Technologies acts as a trusted, low-friction point of contact for household technology - resolving urgent issues, planning upgrades, coordinating vendors, and keeping home and executive setups dependable.</p>
<p>Our service is designed for clients who value continuity, discretion, and clear communication over quick-fix call-out support. We work with a limited number of households so each engagement is handled properly.</p>
<p><a href="/it-support-home-visit-london">Home visits by appointment</a> &middot; Serving all London boroughs &middot; Trusted by personal assistants and household representatives</p>
<h2>What We Do</h2>
<p>We keep household technology dependable, secure, and easy to live with. That may mean resolving persistent connectivity issues, replacing devices without disruption, preparing a home office before an important trip, or quietly coordinating with suppliers so the household does not have to.</p>
<h2>Typical Engagements</h2>
<h3>Home Networks</h3>
<p>Reliable Wi-Fi and wired connectivity throughout the property, including larger homes, guest areas, and difficult layouts.</p>
<h3>Device Replacement &amp; Migration</h3>
<p>Procurement support, setup, and full migration for new computers, phones, and tablets, with minimal interruption.</p>
<h3>Privacy &amp; Security</h3>
<p>Practical security reviews, password management, and privacy measures suited to private households and executive lifestyles.</p>
<h3>Ongoing Household Support</h3>
<p>Scheduled reviews, updates, troubleshooting, and oversight so issues are handled before they become interruptions.</p>
<h3>PA &amp; Vendor Coordination</h3>
<p>We can work directly with personal assistants, family offices, managing agents, and specialist suppliers to reduce admin and keep decisions moving.</p>
<h2>For Personal Assistants</h2>
<p>We understand that assistants are often asked to solve technology issues quickly, discreetly, and with minimal supervision. Our service is built to make that easier: one reliable contact, calm on-site delivery, and clear written follow-up.</p>
<h2>About Us</h2>
<p>Central Technologies is led by a senior technology professional with experience supporting private households and executive clients in London. Our work is built around trust, continuity, and the ability to operate confidently in environments where discretion matters.</p>
<h2>Engagement &amp; Fees</h2>
<p>Consultations start at GBP300 + VAT and include an initial assessment, hands-on work, and clear written follow-up. Ongoing support arrangements are available for households that prefer continuity and a single trusted point of contact.</p>
<h2>Private Inquiry</h2>
<p>Whether you are enquiring for your own household or on behalf of a principal, you are welcome to send a concise brief. We will review the requirements and respond if we believe we are the right fit.</p>
<footer><p>Trusted on-site technology support for private households, principals, and personal assistants across London and neighbouring counties.</p><p>Service Area: All London boroughs and nearby commuter regions including Surrey, Hertfordshire, Buckinghamshire, and Essex.</p><a href="/services">Our Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },
  "/it-support-home-visit-london": {
    title: "IT Support Home Visits Across London | Central Technologies",
    description:
      "Professional on-site IT support for private households, principals, and personal assistants across London. Home visits by appointment from GBP300 + VAT.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></nav>
<h1>IT Support Home Visits Across London</h1>
<p>Central Technologies provides professional, on-site IT support for private households across London. Visits are by appointment and designed to be calm, discreet, and efficient.</p>
<p>We support homeowners, principals, and personal assistants who need technology issues handled properly, without unnecessary disruption or repeated chasing.</p>
<p>Unlike high-volume call-out services, we limit the number of households we support. That allows us to understand the property, work confidently on-site, and provide clear follow-up after each visit.</p>
<h2>Common Requests</h2>
<ul>
<li>Wi-Fi and network troubleshooting for persistent connectivity issues, dead spots, and inconsistent coverage across the property</li>
<li>New device setup and data migration for principals, family members, or staff, completed with minimal interruption</li>
<li>Security and privacy reviews, including password managers, two-factor authentication, and practical protection for household accounts</li>
<li>Backup, recovery, and handover support where there is urgency around travel, device failure, or important work commitments</li>
</ul>
<h2>How It Works</h2>
<p>Every engagement begins with a concise consultation by phone, email, or through your PA. Once we understand the requirement, we schedule a visit at a time that suits the household and arrive prepared to handle the work properly.</p>
<p>Consultations begin at GBP300 + VAT. This covers the initial assessment, hands-on work, and clear written follow-up with any recommendations or next steps.</p>
<p><a href="/contact">Request a Home Visit</a> | <a href="/services">View All Services</a></p>
<footer><p>Trusted on-site technology support for private households, principals, and personal assistants across London and neighbouring counties.</p><a href="/services">Our Services</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },
  "/private-household-technology": {
    title: "Technology Management for Private Households | Central Technologies",
    description:
      "Ongoing on-site technology management for private households across London and the Home Counties, with discreet coordination for principals, assistants, and household teams.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></nav>
<h1>Technology Management for Private Households</h1>
<p>Central Technologies provides ongoing, on-site technology management for private households across London and the Home Counties. We serve as a trusted technology partner for homes where discretion, continuity, and ease matter.</p>
<p>Our clients include busy professionals, family households, principals with demanding schedules, and assistants who need one reliable point of contact for household technology.</p>
<p>Rather than offering reactive one-off fixes, we focus on understanding how the household operates, maintaining systems proactively, and coordinating smoothly with assistants, staff, and external suppliers.</p>
<h2>Typical Household Requirements</h2>
<ul>
<li>Whole-home network design and Wi-Fi optimisation for larger residences, guest spaces, garden offices, and outbuildings</li>
<li>Coordination with personal assistants, managing agents, and household representatives so issues are handled without unnecessary back-and-forth</li>
<li>Family-wide cybersecurity, privacy settings, and sensible controls for shared devices, staff access, and household accounts</li>
<li>Scheduled maintenance visits to review system health, apply updates, and prevent minor issues from becoming disruptions</li>
<li>Home office and executive support, including reliable video calls, device readiness, travel preparation, and secure access</li>
</ul>
<h2>Our Commitment</h2>
<p>We work with a deliberately limited number of households so each client receives careful attention. Every engagement is handled confidentially, and we are comfortable working in environments where discretion and trust are essential.</p>
<p>Recommendations are independent and practical. Our job is to make the household easier to run, not to introduce unnecessary complexity or vendor noise.</p>
<p><a href="/contact">Request a Consultation</a> | <a href="/it-support-home-visit-london">About Home Visits</a></p>
<footer><p>Trusted on-site technology support for private households, principals, and personal assistants across London and neighbouring counties.</p><a href="/services">Our Services</a><a href="/contact">Request Consultation</a></footer>
</div>`,
  },
  "/services": {
    title: "Our Services | Central Technologies",
    description:
      "On-site technology support for private households in London, including network reliability, device migration, privacy, smart home coordination, and ongoing household support.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></nav>
<h1>Our Services</h1>
<p>Central Technologies provides on-site technology support for private households that expect reliability, discretion, and clear communication.</p>
<p>We support principals, families, and the assistants who act on their behalf. Engagements range from resolving a specific issue to acting as an ongoing household technology partner.</p>
<p>The emphasis is on calm execution, sensible recommendations, and reducing the time the household has to spend thinking about technology.</p>
<h2>Services Include</h2>
<h3>Network &amp; Connectivity</h3>
<p>Design and oversight of wired and wireless infrastructure for larger homes, garden offices, guest areas, and multi-building properties.</p>
<h3>Smart Home Integration</h3>
<p>Coordination and support for lighting, climate, entertainment, and security systems so the household can rely on technology without managing technical complexity.</p>
<h3>Device Setup &amp; Migration</h3>
<p>Procurement support, setup, and full migration for new computers, phones, and tablets, with careful handover and minimal disruption.</p>
<h3>Cybersecurity &amp; Privacy</h3>
<p>Practical security reviews for private households, including password management, two-factor authentication, privacy settings, and sensible protection for family members and staff.</p>
<h3>AV &amp; Entertainment Systems</h3>
<p>Specification support, installation oversight, and troubleshooting for multi-room audio, television, and entertainment systems.</p>
<h3>Ongoing Support &amp; Maintenance</h3>
<p>Regular reviews, updates, troubleshooting, and coordination so the household has one trusted point of contact instead of disconnected suppliers.</p>
<h2>Engagement &amp; Fees</h2>
<p>Consultations start at GBP300 + VAT and include an initial on-site assessment, hands-on work, and clear written follow-up.</p>
<p><a href="/contact">Start an Inquiry</a> | <a href="/it-support-home-visit-london">About Home Visits</a></p>
<footer><p>Trusted on-site technology support for private households, principals, and personal assistants across London and neighbouring counties.</p><a href="/contact">Request Consultation</a></footer>
</div>`,
  },
  "/contact": {
    title: "Request a Consultation | Central Technologies",
    description:
      "Request a private technology consultation for your household or on behalf of a principal. Personal assistants and household representatives are welcome to enquire.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></nav>
<h1>Request a Consultation</h1>
<p>Whether you are enquiring for your own household, a principal, or a family office, you are welcome to send a concise brief.</p>
<p>Personal assistants are encouraged to get in touch. We are used to working through assistants, managing agents, and household representatives who need a reliable technology contact they can trust.</p>
<p>If appropriate, we will arrange an on-site visit at a time that suits the household and communicate clearly about next steps, access requirements, and any decisions that need approval.</p>
<h2>What to Expect</h2>
<p>We review enquiries personally and aim to respond within one working day. A short note is fine - you do not need to write a technical brief for us to understand the situation.</p>
<p>Initial consultations start at GBP300 + VAT and include an on-site assessment, hands-on work, and clear written follow-up.</p>
<p>We work across all London boroughs and extend our services to select areas in Surrey, Hertfordshire, Buckinghamshire, and Essex.</p>
<p><a href="/services">View Our Services</a> | <a href="/it-support-home-visit-london">About Home Visits</a></p>
<footer><p>Trusted on-site technology support for private households, principals, and personal assistants across London and neighbouring counties.</p></footer>
</div>`,
  },
  "/privacy": {
    title: "Privacy Policy | Central Technologies",
    description:
      "Privacy policy for Central Technologies Limited. How we collect, use, and protect personal data under UK GDPR.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></nav>
<h1>Privacy Policy</h1>
<h2>Data Controller</h2>
<p>Central Technologies Limited is the data controller for personal information collected through this website and during the course of our services. We are registered in England and Wales under Company No. 12231402, with VAT registration GB338720296.</p>
<p>Hampstead, London | Tel: +44 7718 137455</p>
<h2>Information We Collect</h2>
<p>When you submit an inquiry through our website, we collect the information you provide, typically your name, email address, telephone number, and a description of your requirements.</p>
<h2>How We Use Your Information</h2>
<p>Your personal data is used only for the purpose of responding to your inquiry and delivering our services. We do not share your information with third parties for marketing purposes.</p>
<h2>Your Rights</h2>
<p>Under UK GDPR and the Data Protection Act 2018, you have the right to access, correct, or request deletion of your personal data.</p>
<footer><p>Central Technologies Limited | Company No. 12231402 | VAT No. GB338720296</p></footer>
</div>`,
  },
  "/terms": {
    title: "Terms of Service | Central Technologies",
    description:
      "Terms of service for Central Technologies Limited. Website usage terms, service engagement conditions, and governing law.",
    html: `<div>
<nav><a href="/">Central Technologies</a><a href="/services">Services</a><a href="/it-support-home-visit-london">Home Visits</a><a href="/private-household-technology">Private Households</a><a href="/contact">Request Consultation</a></nav>
<h1>Terms of Service</h1>
<h2>About Central Technologies</h2>
<p>Central Technologies Limited is a technology management service registered in England and Wales under Company No. 12231402, with VAT registration GB338720296.</p>
<p>Hampstead, London | Tel: +44 7718 137455</p>
<h2>Use of This Website</h2>
<p>This website is provided for informational purposes. By using it, you agree to these terms.</p>
<h2>Services &amp; Engagement</h2>
<p>All services described on this website are delivered by appointment and subject to availability. Consultations start at GBP300 + VAT.</p>
<footer><p>Central Technologies Limited | Company No. 12231402 | VAT No. GB338720296</p></footer>
</div>`,
  },
  "__404__": {
    title: "Page Not Found | Central Technologies",
    description: "The page you are looking for could not be found.",
    html: `<div><h1>404 Page Not Found</h1><p>The page you are looking for could not be found.</p><p><a href="/">Return to the Central Technologies homepage</a></p></div>`,
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
            "Discreet technology support for private households, principals, and personal assistants across London",
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
