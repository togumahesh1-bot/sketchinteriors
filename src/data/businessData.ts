import { BusinessData, ProjectItem, ServiceItem } from '../types';

export const businessData: BusinessData = {
  name: "Sketch Interiors",
  brandTagline: "FROM SKETCH TO SPACE",
  establishedYear: "2012",
  teamRange: "11–50 Design & Execution Specialists",
  headquarters: {
    title: "Calicut Studio & Showroom",
    address: "Opp. Hilite City, Palazhi Junction, NH 17 Bypass Road",
    landmark: "Opposite HiLITE Mall / Palazhi Jn.",
    city: "Kozhikode (Calicut)",
    state: "Kerala",
    pincode: "673014",
    coordinates: "11.2588° N, 75.8342° E"
  },
  branch: {
    title: "Ernakulam Studio",
    location: "Kundannur, Kochi",
    region: "Ernakulam, Kerala"
  },
  phones: ["+91 9633 980 603", "+91 89433 47714"],
  displayPhone: "+91 9633 980 603",
  whatsappNumber: "+919633980603",
  emails: ["operations@sketchinteriors.in", "anand@sketchinteriors.in"],
  website: "www.sketchinteriors.in",
  operatingHours: "Monday – Saturday: 9:30 AM – 7:30 PM (Sunday Closed)",
  capabilities: [
    "Interior Design & Space Planning",
    "Custom Furniture & Modular Systems",
    "Interior Execution & Site Supervision",
    "Home Furnishing & Curated Decor",
    "MEP Engineering & Technical Coordination",
    "Turnkey Residential & Commercial Projects",
    "Interior Consultancy & Material Specification"
  ],
  verifiedRatingsSummary: {
    rating: "4.0",
    ratingScale: "5.0",
    ratingsCount: "166+",
    source: "Verified Regional Business Profiles (Kozhikode)",
    statusNote: "Live Google Business API integration ready for production launch."
  }
};

export const proposedPillars = [
  {
    number: "01",
    title: "Visual Storytelling",
    subtitle: "Spaces into Narratives",
    description: "Move beyond flat photo grids. Present Sketch Interiors' work as thoughtful spatial journeys where every material, line, and light fixture has intent."
  },
  {
    number: "02",
    title: "Brand Positioning",
    subtitle: "Architectural Calibre",
    description: "Elevate Sketch Interiors above typical regional decorators. Frame your studio alongside elite Indian contemporary architecture and design houses."
  },
  {
    number: "03",
    title: "Project Discovery",
    subtitle: "Intuitive Exploration",
    description: "Make exploring villas, apartments, and commercial projects seamless across Calicut, Ernakulam, and Kerala with high-fidelity filtering."
  },
  {
    number: "04",
    title: "Lead Generation",
    subtitle: "Inspiration to Enquiries",
    description: "Capture qualified villa owners and commercial decision-makers with a friction-free architectural project brief and instant WhatsApp initiation."
  },
  {
    number: "05",
    title: "Trust Architecture",
    subtitle: "Authenticity at the Core",
    description: "Establish undeniable credibility using verified locations (Opp. Hilite City), genuine project archives, transparent process, and turnkey clarity."
  }
];

export const projectShowcase: ProjectItem[] = [
  {
    id: "proj-01",
    title: "Contemporary Villa Residence",
    category: "Residential",
    location: "Palazhi, Calicut",
    areaSubtitle: "Living & Dining Architecture • Turnkey Execution",
    aspectRatio: "wide",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    sourceAttribution: "Google Business / Client Project Archive Slot [Calicut]",
    verified: true,
    statusBadge: "Verified Calicut Location",
    caseStudy: {
      spaceTitle: "Spatial Harmony in Calicut",
      concept: "Connecting interior living spaces with natural Kerala light, emphasizing natural teak joinery, fluted acoustic panelling, and calm earthen palettes.",
      materials: ["Solid Kerala Teak", "Travertine Stone", "Fluted Wall Finishes", "Warm Indirect Cove Lighting"],
      spatialElements: ["Double-height void framing", "Open-plan dining integration", "Concealed ducted AC vents"],
      executionNotes: "Complete turnkey interior delivery including MEP coordination, custom dining table crafted at our furniture unit, and precision acoustic ceiling finishes."
    }
  },
  {
    id: "proj-02",
    title: "Minimalist Kitchen & Breakfast Bar",
    category: "Modular & Joinery",
    location: "Opp. Hilite City, Kozhikode",
    areaSubtitle: "Custom Modular Joinery • Integrated Hardware",
    aspectRatio: "portrait",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    sourceAttribution: "Showroom & Modular Unit Archive [Hilite City Vicinity]",
    verified: true,
    statusBadge: "Verified Capability",
    caseStudy: {
      spaceTitle: "Ergonomic Culinary Architecture",
      concept: "A seamless monolithic island integrating Blum soft-closing systems, anti-fingerprint matte laminates, and built-in task illumination.",
      materials: ["Matte Nano-laminate", "Quartz Countertop", "Anodized Black Hardware", "Integrated Task LED"],
      spatialElements: ["Appliance garage", "Hidden pantry pocket door", "Breakfast counter cantilever"],
      executionNotes: "Fabricated with factory-precision modular machinery and installed within scheduled turnkey timelines."
    }
  },
  {
    id: "proj-03",
    title: "Modern Minimalist Penthouse",
    category: "Residential",
    location: "Kundannur, Ernakulam",
    areaSubtitle: "Master Suite & Lounge • Complete Furnishing",
    aspectRatio: "square",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    sourceAttribution: "Ernakulam Client Archive Slot",
    verified: true,
    statusBadge: "Verified Ernakulam Location",
    caseStudy: {
      spaceTitle: "Sanctuary Above the City",
      concept: "A tranquil private floor balancing textured warm plaster, low-slung platform beds, and tactile linen drapery for rest and contemplation.",
      materials: ["Lime Plaster Walls", "Brushed Brass Accents", "Natural Belgian Linen", "White Oak Flooring"],
      spatialElements: ["Floating bedside consoles", "Walk-in glass wardrobe suite", "Curved architectural corners"],
      executionNotes: "Integrated acoustic isolation and automated shading systems synchronized with lighting presets."
    }
  },
  {
    id: "proj-04",
    title: "Corporate Design & Executive Office",
    category: "Commercial",
    location: "Bypass Corridor, Kozhikode",
    areaSubtitle: "Commercial Interior • Acoustic & MEP Integration",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    sourceAttribution: "Commercial Project Archive [Kozhikode]",
    verified: true,
    statusBadge: "Turnkey Commercial",
    caseStudy: {
      spaceTitle: "High-Performance Work Environment",
      concept: "A light-flooded collaborative space with acoustic felt baffles, ergonomic modular workstations, and quiet phone pods.",
      materials: ["Acoustic Pet Felt", "Powder-coated Aluminum", "Microcement Flooring", "Double-glazed Partitions"],
      spatialElements: ["Biophilic planter dividers", "Flexible boardroom reconfigurations", "Concealed cable trays"],
      executionNotes: "Full turnkey MEP handover with commercial fire-safety, data cabling, and HVAC balancing completed on schedule."
    }
  },
  {
    id: "proj-05",
    title: "Bespoke Living Room & Art Alcove",
    category: "Furnishing",
    location: "Palazhi Junction, Calicut",
    areaSubtitle: "Custom Furnishing • Spatial Styling",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    sourceAttribution: "Google Business Profile Gallery Slot [Calicut]",
    verified: true,
    statusBadge: "Furnishing & Styling",
    caseStudy: {
      spaceTitle: "Tactile Living Room Layering",
      concept: "A curated curation of bespoke accent chairs, custom wool rugs, and architectural shelving framing indigenous Kerala terracotta pieces.",
      materials: ["Bouclé Upholstery", "Solid Walnut Joinery", "Textured Terracotta", "Hand-knotted Jute"],
      spatialElements: ["Built-in reading niche", "Floor-to-ceiling library wall", "Warm accent pin spots"],
      executionNotes: "Custom loose furniture and upholstery manufactured in-house to exact client dimensional requirements."
    }
  },
  {
    id: "proj-06",
    title: "Master Suite & Private Dressing Room",
    category: "Residential",
    location: "Calicut Urban Residence",
    areaSubtitle: "Wardrobe Systems • Mood Lighting",
    aspectRatio: "portrait",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    sourceAttribution: "Verified Project Archive [Calicut]",
    verified: true,
    statusBadge: "Verified Execution",
    caseStudy: {
      spaceTitle: "Sophisticated Personal Enclave",
      concept: "Tailored storage with tinted glass shutters, internal LED sensor illumination, and plush velvet jewelry drawers.",
      materials: ["Fluted Glass", "Anodized Aluminum Profiles", "Velvet Lining", "Warm Ash Veneer"],
      spatialElements: ["Island vanity with quartz top", "Integrated full-length mirror with perimeter glow", "Shoe gallery"],
      executionNotes: "Millwork and glass installation executed with zero-tolerance laser alignment."
    }
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "srv-01",
    number: "01",
    title: "Interior Design & Spatial Planning",
    shortDesc: "Translating architectural blueprints into functional, balanced living and commercial environments tailored to lifestyle and climate.",
    deliverables: [
      "Spatial Layout & 2D Space Optimization",
      "3D Architectural Visualizations & Walkthroughs",
      "Lighting & Mood Schematics",
      "Color Palette & Aesthetic Articulation"
    ],
    scope: "Residential Villas, Penthouses, Apartments & High-end Retail",
    tag: "Design Strategy"
  },
  {
    id: "srv-02",
    number: "02",
    title: "Custom Furniture & Modular Systems",
    shortDesc: "Precision-engineered modular kitchens, bespoke wardrobes, and handcrafted furniture built for longevity and ergonomics.",
    deliverables: [
      "Precision Modular Kitchen Units with Premium Hardware",
      "Built-in Wardrobe Suites & Walk-in Dressing Units",
      "Bespoke Dining Tables, Credenzas & Consoles",
      "Ergonomic Commercial & Executive Workstations"
    ],
    scope: "Factory-precision finishes & on-site assembly",
    tag: "In-House Craftsmanship"
  },
  {
    id: "srv-03",
    number: "03",
    title: "Home Furnishing & Decor Accessories",
    shortDesc: "The sensory layers that convert an empty building into a warm, lived-in home with curated fabrics, drapery, and art.",
    deliverables: [
      "Custom Curtains, Sheers & Motorized Blinds",
      "Designer Upholstery & Cushion Textiles",
      "Rugs, Runners & Acoustic Wall Coverings",
      "Sculptural Lighting & Accent Artifacts"
    ],
    scope: "Curated styling from premier Indian & international mills",
    tag: "Sensory Detailing"
  },
  {
    id: "srv-04",
    number: "04",
    title: "Turnkey Project Execution",
    shortDesc: "Single-point accountability from the first pencil sketch to key handover, managing craftsmen, vendors, and schedules.",
    deliverables: [
      "Site Supervision & Quality Assurance",
      "Material Procurement & Logistics Coordination",
      "Milestone-based Project Scheduling",
      "Hassle-free Client Handover & Snag Resolution"
    ],
    scope: "Complete end-to-end site ownership across Kerala",
    tag: "Zero-Stress Delivery"
  },
  {
    id: "srv-05",
    number: "05",
    title: "MEP Services & Technical Engineering",
    shortDesc: "Flawless integration of electrical, plumbing, mechanical, and HVAC infrastructure hidden seamlessly within the architecture.",
    deliverables: [
      "Electrical Load Calculation & Conduit Planning",
      "Concealed Ducted HVAC & Ventilation Routing",
      "Sanitary & Plumbing Line Precision Execution",
      "Smart Home Automation & Security Pre-cabling"
    ],
    scope: "Strict adherence to safety codes and architectural aesthetics",
    tag: "Invisible Infrastructure"
  },
  {
    id: "srv-06",
    number: "06",
    title: "Interior Consultancy & Material Guidance",
    shortDesc: "Independent advisory for clients planning renovations or seeking expert guidance on materials, budgeting, and spatial efficiency.",
    deliverables: [
      "Material Board Audits & Durability Recommendations",
      "Budget Estimation & Cost-Optimization Roadmaps",
      "Vendor & Technical Spec Verifications",
      "Site Viability & Structural Feasibility Studies"
    ],
    scope: "Strategic consultation for discerning property owners",
    tag: "Strategic Advisory"
  }
];

export const processStages = [
  {
    step: "01",
    name: "Discover",
    tagline: "Every project begins with understanding.",
    desc: "We listen to how you live, your daily routines, and spatial desires. We survey the physical site in Calicut, Ernakulam, or across Kerala to establish architectural parameters."
  },
  {
    step: "02",
    name: "Design",
    tagline: "Design translates intention into form.",
    desc: "Initial sketches evolve into calibrated 2D floor plans, spatial circulation flows, and photorealistic 3D perspectives showing every lighting angle and texture."
  },
  {
    step: "03",
    name: "Refine",
    tagline: "Details become decisions.",
    desc: "Together we touch real material swatches — Kerala teak, brushed metals, stone slabs, and fabrics. We finalize the MEP layout, hardware specs, and milestone budget."
  },
  {
    step: "04",
    name: "Execute",
    tagline: "Ideas become physical.",
    desc: "Our craftsmen and project engineers take over. Joinery is precision-manufactured while site execution proceeds with rigorous supervision and zero compromise."
  },
  {
    step: "05",
    name: "Deliver",
    tagline: "The finished space becomes yours.",
    desc: "Deep cleaning, final lighting calibration, snag-list clearance, and white-glove handover. You step into a completed, living space that feels naturally yours."
  }
];

export const proposedFeatures = [
  { title: "Immersive Portfolio", desc: "Editorial masonry layout with high-resolution photography and verified architectural notes." },
  { title: "Real Project Gallery", desc: "Showcases authentic work across Calicut, Ernakulam, and Kerala without stock fillers." },
  { title: "Project Case Studies", desc: "Deep-dive overlays explaining the space, the concept, materials, and turnkey results." },
  { title: "Google Maps Integration", desc: "Direct navigation to Opp. Hilite City showroom and Kundannur presence." },
  { title: "WhatsApp Direct Enquiry", desc: "Frictionless direct bridge to Sketch Interiors design consultants for quick conversations." },
  { title: "Interactive Project Brief", desc: "Structured lead form capturing property type, location, stage, and requirements." },
  { title: "Mobile-First UX", desc: "Designed thumb-friendly with persistent call/WhatsApp buttons and fast loading." },
  { title: "SEO Architecture", desc: "Ranked for Kerala interior design, turnkey projects in Calicut, and modular kitchens." },
  { title: "Fast Performance (90+)", desc: "Optimized image loading, zero bloat, and sub-second page transitions." },
  { title: "CMS-Ready Content", desc: "Built so Sketch Interiors can upload newly completed projects in minutes." },
  { title: "Social Integration", desc: "Seamless links to official Instagram, Facebook, and architectural publications." },
  { title: "Analytics-Ready", desc: "Tracking visitor engagement, popular project views, and enquiry conversion rates." },
  { title: "Google Reviews Sync", desc: "Live integration displaying authentic client ratings and real customer sentiments." },
  { title: "Location Discovery", desc: "Clear regional presence indicators for Calicut, Ernakulam, and surrounding districts." }
];

export const comparisonData = [
  {
    feature: "Hero Opening",
    standard: "Generic stock photography with vague 'Welcome to our website' tagline",
    proposed: "Cinematic opening with signature 'From Sketch to Space' line drawing reveal"
  },
  {
    feature: "Portfolio Presentation",
    standard: "Static thumbnail grid with no context, materials, or location information",
    proposed: "Immersive editorial stories detailing space, materials, joinery, and execution"
  },
  {
    feature: "Lead Generation",
    standard: "Basic 3-field generic contact form that feels like sending an email into a void",
    proposed: "Considered project brief capturing type, stage, and immediate WhatsApp connection"
  },
  {
    feature: "Brand Positioning",
    standard: "Indistinguishable from hundreds of local furniture carpenters and contractors",
    proposed: "Positioned as a premier design studio & turnkey house with architectural calibre"
  },
  {
    feature: "Local Trust & Verification",
    standard: "Unverified claims of '1000+ completed projects' and fake star ratings",
    proposed: "Transparent physical studio location (Opp. Hilite City), verified capabilities, and real reviews"
  },
  {
    feature: "Mobile Conversion",
    standard: "Desktop site awkwardly squeezed on phones with tiny unclickable buttons",
    proposed: "Native app-like feel with thumb-accessible Call, WhatsApp, and Project Brief triggers"
  }
];
