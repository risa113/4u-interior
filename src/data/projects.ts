export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  category: "all" | "living" | "bedroom" | "kitchen" | "commercial";
  categoryLabel: string;
  location: string;
  tag: string;
  subtitle: string;
  description: string;
  image: string;
  completedYear: string;
  scope: string[];
  materials: string[];
  area?: string;
}

export const portfolioCategories = [
  { id: "all", label: "All Works" },
  { id: "living", label: "Living Rooms" },
  { id: "bedroom", label: "Master Suites" },
  { id: "kitchen", label: "Kitchen & Bath" },
  { id: "commercial", label: "Commercial" },
];

export const projectsData: ProjectItem[] = [
  {
    id: "nellaiappar-residence",
    code: "TNL-01",
    title: "The Nellaiappar Residence",
    category: "living",
    categoryLabel: "Living Rooms",
    location: "Swami Nellaiappar High Rd, Tirunelveli",
    tag: "Residential Architecture • Tirunelveli",
    subtitle: "Fluted Walnut & Curved Bouclé Salon",
    description: "An expansive 2,400 sq.ft living architecture project combining sculptural acoustic walnut fluting, bespoke curved bouclé seating, and 2700K warm perimeter cove lighting.",
    image: `${import.meta.env.BASE_URL}images/hero-living.jpg`,
    completedYear: "2024",
    area: "2,400 sq.ft",
    scope: ["False ceiling cove lighting", "Custom fluted wood wall panelling", "Bespoke media console", "Integrated acoustic panels"],
    materials: ["Smoked Walnut", "Italian Botticino Marble", "Warm Brass Detailing", "Bouclé Fabric"],
  },
  {
    id: "high-road-villa",
    code: "TNL-24",
    title: "High Road Executive Villa",
    category: "bedroom",
    categoryLabel: "Master Suites",
    location: "High Road, Tirunelveli",
    tag: "Master Bedroom Sanctuary • Tirunelveli",
    subtitle: "Minimalist linen drapery, slatted partition divider, and integrated brass reading fixtures.",
    description: "A serene master sanctuary designed for restorative comfort with acoustic wood slatted dividers, integrated headboard reading lights, and walk-in wardrobe joinery.",
    image: `${import.meta.env.BASE_URL}images/sanctuary-bedroom.jpg`,
    completedYear: "2024",
    area: "650 sq.ft",
    scope: ["Custom cushioned headboard with concealed LED", "Acoustic timber partition", "Walk-in wardrobe with tinted glass", "Double vanity console"],
    materials: ["Natural White Oak", "Pure Linen Fabric", "Muted Copper Fixtures", "BWR Marine Ply"],
  },
  {
    id: "vannarpettai-corporate",
    code: "TNL-CORP",
    title: "Vannarpettai Executive Suite",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "Vannarpettai, Tirunelveli",
    tag: "Corporate Architecture • Vannarpettai",
    subtitle: "Deep espresso walnut paneling, brushed brass accent trims, and seamless acoustic ceiling baffles.",
    description: "Executive boardroom and private partner suites crafted for an established commercial enterprise, featuring seamless soundproofing and architectural lighting.",
    image: `${import.meta.env.BASE_URL}images/corporate-office.jpg`,
    completedYear: "2024",
    area: "1,850 sq.ft",
    scope: ["Acoustic boardroom wall system", "Executive desk in smoked veneer", "Magnetic track spot lighting", "Glass partition framing"],
    materials: ["Espresso Walnut", "Brushed Brass Trims", "Acoustic Felt Baffles", "Toughened Fluted Glass"],
  },
  {
    id: "palayamkottai-penthouse-kitchen",
    code: "TNL-RES",
    title: "Palayamkottai Penthouse Kitchen",
    category: "kitchen",
    categoryLabel: "Kitchen & Bath",
    location: "Palayamkottai, Tirunelveli",
    tag: "Culinary Atelier • Palayamkottai",
    subtitle: "Natural Kadappa slate surfaces, fluted warm oak cabinetry, and recessed bronze handles.",
    description: "Monolithic modular kitchen designed with anti-scratch matte acrylic panels, German Blum hardware, concealed pantry, and integrated island breakfast bar.",
    image: `${import.meta.env.BASE_URL}images/penthouse-kitchen.jpg`,
    completedYear: "2023",
    area: "420 sq.ft",
    scope: ["Modular parallel island kitchen", "Quartz heat-resistant countertops", "Under-cabinet profile lighting", "Soft-close tandem drawers"],
    materials: ["Fluted Warm Oak", "Kadappa Honed Slate", "German Blum Aventos", "Bronze Anodized Handles"],
  },
  {
    id: "maharaja-nagar-residence",
    code: "TNL-MH",
    title: "Maharaja Nagar Minimalist Salon",
    category: "living",
    categoryLabel: "Living Rooms",
    location: "Maharaja Nagar, Tirunelveli",
    tag: "Contemporary Villa • Tirunelveli",
    subtitle: "Double-height stone cladding with floating credenza & cove glow.",
    description: "A double-height living room featuring imported travertine wall panels, integrated hidden AC vents, and minimalistic false ceiling architecture.",
    image: `${import.meta.env.BASE_URL}images/luxury-salon.jpg`,
    completedYear: "2023",
    area: "1,200 sq.ft",
    scope: ["Double height feature wall", "Floating cantilevered TV console", "Architectural drop ceiling", "Integrated sheer motorized tracks"],
    materials: ["Travertine Stone", "Teak Veneer", "Muted Copper Profiles", "Gyproc Gypsum"],
  },
  {
    id: "south-bypass-boutique",
    code: "TNL-RET",
    title: "South Bypass Couture Boutique",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "South Bypass Rd, Tirunelveli",
    tag: "Commercial Atelier • Tirunelveli",
    subtitle: "Curved display niches, warm arched partitions, and brass hanging rails.",
    description: "Curated retail experience with organic plaster arches, recessed brass garment hardware, and flattering warm CRI95 spotlighting.",
    image: `${import.meta.env.BASE_URL}images/commercial-boutique.jpg`,
    completedYear: "2023",
    area: "980 sq.ft",
    scope: ["Curved lime-plaster arches", "Bespoke brass clothing racks", "Cash counter with stone face", "Fitting lounge sanctuaries"],
    materials: ["Micro-cement Plaster", "Satin Brass", "Oak Baseboard", "Warm 3000K Luminaires"],
  },
];
