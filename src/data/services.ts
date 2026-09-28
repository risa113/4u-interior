export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string;
  icon: string;
  image: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "home-interiors",
    number: "01",
    title: "Home Interiors",
    subtitle: "Living • Dining • Master Suites",
    description: "Bespoke living environments, luxury multi-generation villas, penthouse suites, and custom sanctuaries tailored to family routines.",
    tags: "Living • Dining • Master Suites",
    icon: "home",
    image: `${import.meta.env.BASE_URL}images/hero-living.jpg`,
    features: [
      "Vastu-compliant architectural floor planning",
      "Bespoke Italian-profile TV consoles & wall panelling",
      "Acoustic slatted timber screens & partitions",
      "Ergonomic master bedroom walk-in wardrobes",
    ],
  },
  {
    id: "office-interiors",
    number: "02",
    title: "Office & Corporate Spaces",
    subtitle: "Executive • Tech • Acoustic",
    description: "High-performance executive suites, boardroom acoustics, ergonomic workstations, and distinguished brand environments in Tirunelveli.",
    tags: "Executive • Tech • Acoustic",
    icon: "corporate_fare",
    image: `${import.meta.env.BASE_URL}images/corporate-office.jpg`,
    features: [
      "Acoustic sound-dampened meeting rooms & phone booths",
      "Concealed cable trays & integrated power docks",
      "Executive mahogany and dark walnut suites",
      "Reception statement desks & accent company signage",
    ],
  },
  {
    id: "commercial-interiors",
    number: "03",
    title: "Commercial Interiors",
    subtitle: "Retail • Hospitality • Clinics",
    description: "Curated retail storefronts, boutique healthcare clinics, dining concepts, and showroom displays engineered for lasting footfall impression.",
    tags: "Retail • Hospitality • Clinics",
    icon: "storefront",
    image: `${import.meta.env.BASE_URL}images/commercial-retail.jpg`,
    features: [
      "High-traffic durable surface treatments",
      "Dynamic retail display shelving & spot lighting",
      "Customer lounge & reception focal zones",
      "Local municipal compliance and fire safety alignment",
    ],
  },
  {
    id: "modular-solutions",
    number: "04",
    title: "Modular & Custom Cabinetry",
    subtitle: "Kitchens • Wardrobes • Vanities",
    description: "German hardware integration, seamless acrylic & veneer modular kitchens, walk-in closets, and fluted acoustic entertainment consoles.",
    tags: "Kitchens • Wardrobes • Vanities",
    icon: "countertops",
    image: `${import.meta.env.BASE_URL}images/penthouse-kitchen.jpg`,
    features: [
      "Blum & Hettich soft-close hydraulic systems",
      "Anti-termite waterproof BWR grade ply cores",
      "Nano-coated quartz & granite countertop integration",
      "Under-cabinet sensor LED illumination channels",
    ],
  },
  {
    id: "false-ceiling",
    number: "05",
    title: "False Ceiling & Lighting",
    subtitle: "Cove • Magnetic Track • Gypsum",
    description: "Precision gypsum drop ceilings, concealed perimeter LED coves, architectural magnetic track systems, and glare-free warm lumens.",
    tags: "Cove • Magnetic Track • Gypsum",
    icon: "wb_incandescent",
    image: `${import.meta.env.BASE_URL}images/sanctuary-bedroom.jpg`,
    features: [
      "Saint-Gobain Gyproc calibrated metal framing",
      "Seamless skim coat plastering without sagging joints",
      "Perimeter 3000K warm architectural mood coves",
      "Magnetic low-voltage recessed track spotlights",
    ],
  },
  {
    id: "turnkey-interior",
    number: "06",
    title: "Turnkey Interior Contracting",
    subtitle: "End-to-End • Single Contact",
    description: "Complete single-point responsibility: 3D modeling, material sourcing, civil adaptations, electrical/MEP, and meticulous final styling.",
    tags: "End-to-End • Single Contact",
    icon: "handshake",
    image: `${import.meta.env.BASE_URL}images/turnkey-execution.jpg`,
    features: [
      "Single accountable project engineer on-site",
      "Weekly milestone photos & progress reports",
      "Zero hidden cost surprises with itemized BOQ",
      "Pristine deep cleaning before ceremonial handover",
    ],
  },
];
