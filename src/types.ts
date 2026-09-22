export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Modular & Joinery' | 'Furnishing';
  location: string;
  areaSubtitle: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  image: string;
  sketchOverlay?: string;
  sourceAttribution: string;
  verified: boolean;
  statusBadge: string;
  caseStudy: {
    spaceTitle: string;
    concept: string;
    materials: string[];
    spatialElements: string[];
    executionNotes: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  scope: string;
  tag: string;
}

export interface BusinessData {
  name: string;
  brandTagline: string;
  establishedYear: string;
  teamRange: string;
  headquarters: {
    title: string;
    address: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    coordinates: string;
  };
  branch: {
    title: string;
    location: string;
    region: string;
  };
  phones: string[];
  displayPhone: string;
  whatsappNumber: string;
  emails: string[];
  website: string;
  operatingHours: string;
  capabilities: string[];
  verifiedRatingsSummary: {
    rating: string;
    ratingScale: string;
    ratingsCount: string;
    source: string;
    statusNote: string;
  };
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  projectLocation: string;
  projectType: 'Home' | 'Villa' | 'Apartment' | 'Office' | 'Retail' | 'Hospitality' | 'Other';
  projectStage: 'Planning' | 'Under Construction' | 'Renovation' | 'Ready for Interiors';
  requirements: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
}
