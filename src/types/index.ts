export type ProductCategoryType = 
  | 'brake-pads' 
  | 'brake-discs' 
  | 'filters'
  | 'air-filter' 
  | 'oil-filter' 
  | 'fuel-filter' 
  | 'cabin-filter'
  | 'steering-suspension'
  | 'under-development';

export interface CompetitorRef {
  brand: string;
  partNumber: string;
  notes?: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface VehicleCompatibility {
  make: string;
  model: string;
  yearRange: string;
  engine: string;
  kwHp?: string;
  chassisCode?: string;
  fittingPosition?: string;
}

export interface ProductItem {
  id: string;
  partNumber: string;
  name: string;
  category: ProductCategoryType;
  categoryName: string;
  description: string;
  fittingPosition?: string;
  oemReferences: string[];
  competitorCrossRefs: CompetitorRef[];
  technicalSpecs: TechnicalSpec[];
  compatibleVehicles: VehicleCompatibility[];
  features: string[];
  certifications: string[];
  inStock: boolean;
  warrantyMonths: number;
  diagramSvgType?: string;
  weightKg: number;
  eanBarcode?: string;
}

export interface CategoryInfo {
  id: string;
  title: string;
  shortTitle: string;
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  techHighlights: {
    title: string;
    description: string;
    iconName: string;
  }[];
  standards: string[];
  schematicNote: string;
  bannerImage: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  notes?: string;
}

export interface OfficeLocation {
  id: string;
  type: 'Head Office' | 'UK Office' | 'Overseas Logistic Centre' | 'Overseas Office & Warehouse';
  companyName: string;
  facilityName?: string;
  addressLines: string[];
  postcode?: string;
  country: string;
  phone?: string;
  email?: string;
  description: string;
  badge: string;
  coordinates?: { lat: number; lng: number };
}

export interface DirectorInfo {
  name: string;
  role: string;
  bio?: string;
  email?: string;
  phone?: string;
  image?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductSectionDetail {
  id: ProductCategoryType;
  name: string;
  headline: string;
  intro: string;
  bulletPoints: string[];
  keyHighlights: ProductFeature[];
  images: {
    url: string;
    caption: string;
    badge?: string;
  }[];
  specifications?: { label: string; value: string }[];
  subFilters?: {
    name: string;
    description: string;
    image: string;
    highlights: string[];
  }[];
  subSteeringComponents?: {
    name: string;
    description: string;
    image: string;
    standards: string[];
  }[];
}

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  ctaText: string;
  ctaAction: string;
  targetCategory?: ProductCategoryType;
  imageUrl?: string;
  bgGradient?: string;
  accentColor?: string;
  isLive: boolean;
  order: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface QualityStep {
  stepNumber: number;
  stageName: string;
  title: string;
  description: string;
  controlMeasures: string[];
  standard: string;
  iconName: string;
}

export interface TradeInquiry {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  businessType: 'Wholesaler' | 'Distributor' | 'Motor Factor' | 'Fleet / Workshop' | 'Other';
  interestedProducts: string[];
  estimatedMonthlyVolume?: string;
  message: string;
}
