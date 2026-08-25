import { ProductItem, CategoryInfo, BannerItem, NewsArticle, ProductCategoryType } from '../types';

export const CATEGORIES_DATA: Record<string, CategoryInfo> = {
  'brake-pads': {
    id: 'brake-pads',
    title: 'Brake Pads',
    shortTitle: 'Brake Pads',
    shortDesc: 'ECE R90 certified copper-free friction formulations with precision anti-squeal shims and scorched thermal bed.',
    fullDesc: 'CIDAK Brake Pads are engineered to meet and exceed strict OE standards. Manufactured using environmentally safe copper-free semi-metallic and ceramic friction matrix formulations, every pad features precision multi-layer vulcanized shims to eliminate high-frequency brake squeal, pre-scorched thermal contact beds for immediate bedding-in, and OE-matching chamfers and slots for optimal thermal dissipation.',
    keyFeatures: [
      'ECE R90 Homologation Certified across 100% of reference range',
      'Advanced Copper-Free low dust ceramic and metallic formulations',
      'Pre-scorched at 650°C for instant stopping power from day one',
      'Multi-layer rubber-steel-rubber vulcanised anti-noise shims',
      'Integrated wear sensors and OE matching hardware included where applicable'
    ],
    techHighlights: [
      {
        title: 'Thermal Scorching Treatment',
        description: 'Pads are scorched under radiant gas plate technology at 650°C to burn off residual volatile gases and prevent brake fade.',
        iconName: 'Flame'
      },
      {
        title: 'Vulcanised Shim Technology',
        description: 'Multi-layer damping shims bonded with viscoelastic adhesive absorb micro-vibrations across all operating temperatures.',
        iconName: 'Layers'
      },
      {
        title: 'Consistent Friction Coefficient (0.38 - 0.42 μ)',
        description: 'Maintains uniform braking response across ambient -40°C winter conditions up to severe 600°C mountain descents.',
        iconName: 'Gauge'
      }
    ],
    standards: ['ECE R90', 'ISO/TS 16949', 'BER 461/2010 OE Matching Quality', 'VCA Certified'],
    schematicNote: 'Precision backing plate with laser-etched R90 batch code, chamfered edge profile, and multi-ply acoustic shim.',
    bannerImage: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=1200&q=80'
  },
  'brake-discs': {
    id: 'brake-discs',
    title: 'Brake Discs',
    shortTitle: 'Brake Discs',
    shortDesc: 'High-carbon metallurgy with Geomet anti-corrosion barrier coating and directional ventilation.',
    fullDesc: 'CIDAK Brake Discs are cast from premium GG20/GG15 high-carbon alloy, delivering superior thermal conductivity, resistance to thermal cracking, and reduced judder. Each rotor is 100% precision balanced to eliminate rotational vibration and treated with an environmentally friendly Geomet 500 coating that resists corrosion on the hub and cooling vanes without needing degreasing before installation.',
    keyFeatures: [
      'High-Carbon formulation resists thermal distortion and cracking under heavy braking',
      'Full Geomet 500® anti-corrosion surface coating - ready to fit without cleaning',
      'Dynamic rotational balancing with tolerances strictly under 0.03mm (DTV < 10μm)',
      'Directional pillar and curved vane internal cooling architecture',
      'Laser-marked minimum thickness (Min Th) and ECE R90 approval codes on outer edge'
    ],
    techHighlights: [
      {
        title: 'High Carbon (HC) Casting',
        description: 'Enriched carbon content improves dampening properties and dissipates heat 25% faster than standard gray iron.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Geomet 500 Protective Shield',
        description: 'Zinc-aluminum flake coating provides 240+ hours salt spray corrosion resistance for clean alloy wheel aesthetics.',
        iconName: 'Sparkles'
      },
      {
        title: 'Micro-Finished Friction Surface',
        description: 'Surface roughness (Ra 0.8 - 1.2μm) ensures smooth friction pad mating and quiet break-in.',
        iconName: 'Compass'
      }
    ],
    standards: ['ECE R90-02', 'ISO 9001:2015', 'DIN EN 1561 GG20', 'TÜV Rheinland'],
    schematicNote: 'Ventilated disc with directional cooling channels, hub mounting bore, and anti-rust coated non-friction areas.',
    bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80'
  },
  'air-filter': {
    id: 'air-filter',
    title: 'Air Filters',
    shortTitle: 'Air Filters',
    shortDesc: 'High-efficiency synthetic micro-fiber pleated media maximizing engine airflow while trapping 99.8% of contaminants.',
    fullDesc: 'CIDAK Engine Air Filters safeguard precision internal combustion engines and turbochargers from abrasive road grit, soot, and airborne particulates. Utilising multi-gradient synthetic and cellulose filter media with embossed pleat stabilization, CIDAK air filters achieve exceptional dust-holding capacity with minimal pressure drop for peak fuel efficiency and engine throttle response.',
    keyFeatures: [
      '99.8% filtration efficiency down to 3 microns complying with ISO 5011',
      'Embossed pleat geometry prevents media bunching and pinching under high turbo boost',
      'Flexible polyurethane (PU) seal ensures airtight fit against engine intake housing',
      'Flame-retardant media treatment protects against accidental intake spark ignition',
      'Maintains optimum air-to-fuel ratio for reduced emissions and improved MPG'
    ],
    techHighlights: [
      {
        title: 'Graded-Density Microfibers',
        description: 'Traps coarse particles on outer layers while microscopic silica is arrested deep within synthetic fibers.',
        iconName: 'Wind'
      },
      {
        title: 'Precision Polyurethane Perimeter',
        description: 'Moulded seal resists temperature extremes from -40°C to +120°C without hardening or cracking.',
        iconName: 'Shield'
      },
      {
        title: 'High Flow Rate Capacity',
        description: 'Engineered airflow channels minimize pressure differential across the intake manifold.',
        iconName: 'Activity'
      }
    ],
    standards: ['ISO 5011', 'IATF 16949', 'OE Spec Dimensional Tolerance', 'REACH Compliant'],
    schematicNote: 'Rectangular and cylindrical filter profiles with uniform pleat spacing and resilient PU sealing collar.',
    bannerImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80'
  },
  'oil-filter': {
    id: 'oil-filter',
    title: 'Oil Filters',
    shortTitle: 'Oil Filters',
    shortDesc: 'Heavy-gauge steel canisters with multi-layer synthetic blend media and silicone anti-drainback valves.',
    fullDesc: 'CIDAK Spin-on and Eco-cartridge Oil Filters protect critical engine bearings, camshafts, and hydraulic lifters from harmful metal shavings, combustion soot, and sludge. Equipped with heavy-gauge steel shells rated to withstand burst pressures exceeding 20 bar, heat-resistant silicone anti-drainback valves to prevent dry cold starts, and calibrated bypass valves for uninterrupted lubrication.',
    keyFeatures: [
      'High-burst pressure canister tested up to 20 bar (290 PSI) without deformation',
      'Premium silicone anti-drainback valve maintains oil column for instant start-up pressure',
      'Synthetic blend filter media captures 99% of particles at 20 microns (ISO 4548-12)',
      'Precision calibrated bypass pressure relief valve ensures oil supply in cold weather',
      'Eco-friendly metal-free filter elements for modern modular oil filter housings'
    ],
    techHighlights: [
      {
        title: 'Silicone Anti-Drainback Diaphragm',
        description: 'Outlasts standard nitrile rubber under prolonged 150°C modern synthetic oil temperatures.',
        iconName: 'Zap'
      },
      {
        title: 'Dual-Lock Seamed Steel Canister',
        description: 'Heavy gauge housing resists oil pressure spikes from cold-start revving and aggressive driving.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Spiral Wound Metal Center Core',
        description: 'Prevents internal media collapse under high pressure differential conditions.',
        iconName: 'Cpu'
      }
    ],
    standards: ['ISO 4548-12', 'ISO 4548-4', 'IATF 16949:2016', 'OE Equivalent'],
    schematicNote: 'Spin-on canister with rolled seal gasket, silicone valve, pleated synthetic element, and internal bypass spring.',
    bannerImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80'
  },
  'fuel-filter': {
    id: 'fuel-filter',
    title: 'Fuel Filters',
    shortTitle: 'Fuel Filters',
    shortDesc: 'Precision micro-filtration and water separation protecting modern Common Rail Diesel & Direct Injection Petrol systems.',
    fullDesc: 'Modern Common Rail Diesel (CRDi) systems operating at up to 2,500 bar and high-pressure petrol direct injection (GDI) require absolute fuel purity. CIDAK Fuel Filters provide multi-stage water separation with >98% efficiency and sub-micron particle arrest, safeguarding sensitive piezo injectors and high-pressure fuel pumps from abrasive wear and fuel water emulsion damage.',
    keyFeatures: [
      'Multi-stage filtration separating free and emulsified water from diesel fuel (>98% efficiency)',
      'Ultra-fine 2 to 5 micron particle retention protecting 2500-bar CRDi injectors',
      'Corrosion-resistant treated aluminum/steel housings with burst resistance',
      'Integrated water sensor ports, electric fuel heaters, and primer valves where specified',
      'Reinforced filter core capable of withstanding aggressive biofuels and ethanol blends (E10/E85/B20)'
    ],
    techHighlights: [
      {
        title: 'Coalescence Water Separation',
        description: 'Hydrophobic meltblown media fuses microscopic water droplets into drainable bulk water pools.',
        iconName: 'Droplet'
      },
      {
        title: 'Biofuel & Bio-Diesel Resistance',
        description: 'Specialised sealing elastomers (FKM) prevent degradation from bio-components and high temperatures.',
        iconName: 'CheckCircle'
      },
      {
        title: 'High Pressure Rating',
        description: 'Rigid canister structure built to handle sustained line pressures in modern returnless systems.',
        iconName: 'Activity'
      }
    ],
    standards: ['ISO 19438', 'ISO 4020', 'IATF 16949', 'ECE Compatible'],
    schematicNote: 'In-line aluminum cylinder with inlet/outlet quick-connect spigots, sediment chamber, and drain screw.',
    bannerImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
  },
  'cabin-filter': {
    id: 'cabin-filter',
    title: 'Cabin & Carbon Filters',
    shortTitle: 'Cabin & Carbon',
    shortDesc: 'Multi-layer bio-functional activated carbon filtration neutralizing allergens, PM2.5 particulates, and toxic exhaust fumes.',
    fullDesc: 'CIDAK Cabin & Carbon Air Filters safeguard passenger health inside the vehicle cockpit. Featuring a 4-tier bio-functional construction incorporating active coconut-shell carbon and antimicrobial polyphenol coatings, our filters arrest PM2.5 pollen and dust, while neutralizing toxic road exhaust gases (NOx, SO2, Benzene) and preventing mold growth within the vehicle HVAC evaporator system.',
    keyFeatures: [
      '4-Layer Bio-Functional technology with coconut-shell activated carbon matrix',
      'Captures >99% of PM2.5 fine dust, pollen, soot, and airborne allergen spores',
      'Adsorbs hazardous exhaust fumes, ozone, sulfur dioxide, and unpleasant road odors',
      'Natural polyphenol antimicrobial barrier prevents mold and bacterial proliferation in air conditioning ducts',
      'Maintains optimum HVAC blower airflow to prevent windscreen misting during humid weather'
    ],
    techHighlights: [
      {
        title: '4-Stage Layered Matrix',
        description: '1. Particle pre-filter → 2. Electrostatic micro-mesh → 3. Granular activated carbon → 4. Bio-functional anti-allergen layer.',
        iconName: 'Layers'
      },
      {
        title: 'High Surface Area Carbon',
        description: '1 gram of CIDAK activated carbon provides over 1,000 m² of internal gas adsorption surface area.',
        iconName: 'Sparkles'
      },
      {
        title: 'Anti-Fog Airflow Balance',
        description: 'Permeable geometry allows maximum conditioned airflow to clear misted vehicle windows rapidly.',
        iconName: 'Wind'
      }
    ],
    standards: ['ISO 11155-1 & 2', 'DIN 71460', 'VDI 6032 Hygiene Certified', 'OE Fit Standard'],
    schematicNote: 'Multi-pleat rectangular cartridge with reinforced edge bands, airflow direction arrows, and activated carbon core.',
    bannerImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
  }
};

export const INITIAL_BANNERS: BannerItem[] = [
  {
    id: 'b-1',
    title: 'ENGINEERED FOR PRECISION STOPPING',
    subtitle: 'ECE R90 Certified Brake Pads & Discs with Pre-Scorched Thermal Beds & Geomet Coating',
    tagline: 'CIDAK FRICTION SYSTEMS',
    badge: '100% OE SPECIFICATION',
    ctaText: 'Find Your Part Number',
    ctaAction: 'vehicle-search',
    bgGradient: 'from-slate-950 via-slate-900 to-red-950',
    accentColor: '#DC2626',
    imageUrl: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=1400&q=80',
    isLive: true,
    order: 1
  },
  {
    id: 'b-2',
    title: 'NEXT-GEN ADVANCED FILTRATION',
    subtitle: 'Ultra-Fine Air, Oil, Fuel & 4-Stage Bio-Functional Carbon Cabin Filters for Modern Powertrains',
    tagline: 'CIDAK FILTRATION PURITY',
    badge: '99.8% EFFICIENCY CERTIFIED',
    ctaText: 'Explore Product Range',
    ctaAction: 'product-category',
    targetCategory: 'cabin-filter',
    bgGradient: 'from-slate-950 via-slate-900 to-blue-950',
    accentColor: '#2563EB',
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1400&q=80',
    isLive: true,
    order: 2
  },
  {
    id: 'b-3',
    title: 'COMPETITOR CROSS-REFERENCE SEARCH',
    subtitle: 'Enter any Bosch, Brembo, Ferodo, Mann or OEM Part Number to instanly view the matching CIDAK unit',
    tagline: 'INSTANT PART LOOKUP',
    badge: 'OVER 15,000+ VEHICLE APPLICATIONS',
    ctaText: 'Search Cross Reference',
    ctaAction: 'vehicle-search',
    bgGradient: 'from-slate-950 via-zinc-900 to-amber-950',
    accentColor: '#D97706',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1400&q=80',
    isLive: true,
    order: 3
  },
  {
    id: 'b-4',
    title: '2-YEAR / 30,000 MILE QUALITY PLEDGE',
    subtitle: 'Every CIDAK component undergoes dynamic dynamometer & metallurgical testing for complete peace of mind',
    tagline: 'UNCOMPROMISING QUALITY',
    badge: 'IATF 16949 / ISO 9001 ACCREDITED',
    ctaText: 'View Quality Lab Benchmarks',
    ctaAction: 'quality',
    bgGradient: 'from-slate-950 via-slate-900 to-emerald-950',
    accentColor: '#059669',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
    isLive: true,
    order: 4
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'n-1',
    title: 'CIDAK Expands Low-Dust Copper-Free Ceramic Brake Pad Line for Electric & Hybrid Fleets',
    slug: 'cidak-expands-low-dust-copper-free-ceramic-brake-pads',
    category: 'Product Launch',
    summary: 'CIDAK has unveiled 140 new ECE R90-certified ceramic brake pad references designed specifically for regenerate braking cycles in EV and PHEV models.',
    content: `CIDAK Automotive is proud to announce the introduction of 140 new brake pad references formulated for modern hybrid and battery-electric vehicles (BEVs). Because electric vehicles utilize regenerative braking, traditional friction materials are susceptible to corrosion and glazing due to infrequent hard friction contact.\n\nCIDAK's new formulation incorporates specialized ceramic fibers with zero copper content, combined with pre-scorched thermal beds and zinc-nickel coated backplates that prevent galvanic rust under light-use conditions.\n\nAll 140 parts are now available across European distributor networks with comprehensive vehicle cross-referencing available in our digital catalogue.`,
    date: 'August 14, 2026',
    readTime: '3 min read',
    author: 'Technical Engineering Team',
    imageUrl: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80',
    tags: ['Brake Pads', 'EV Technology', 'ECE R90', 'New Release'],
    isFeatured: true
  },
  {
    id: 'n-2',
    title: '4-Stage Bio-Functional Cabin Filters Achieve VDI 6032 Hygiene Certification',
    slug: 'bio-functional-cabin-filters-vdi-6032-certified',
    category: 'Quality Standards',
    summary: 'Independent laboratory testing confirms CIDAK active carbon cabin filters neutralize 99.4% of airborne allergens and 99.8% of PM0.3 micro-particulates.',
    content: `CIDAK's research and development facility has completed rigorous verification testing for its flagship 4-stage bio-functional cabin filter line. Tested according to DIN 71460 and ISO 11155-2 standards by independent aerosol laboratories in Germany, the filters demonstrated market-leading filtration efficiency.\n\nThe activated coconut-carbon layer captures hazardous vehicle emissions including nitrogen dioxide (NO2), sulphur dioxide (SO2), and ozone, while the natural bio-flavonoid polyphenol coating neutralizes trapped pollen allergens and stops microbial growth inside dark HVAC air ducts.`,
    date: 'July 28, 2026',
    readTime: '4 min read',
    author: 'CIDAK R&D Division',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    tags: ['Cabin Filters', 'Air Quality', 'ISO 11155', 'Health'],
    isFeatured: true
  },
  {
    id: 'n-3',
    title: 'CIDAK to Showcase Comprehensive Aftermarket Range at Automechanika Frankfurt 2026',
    slug: 'cidak-automechanika-frankfurt-2026',
    category: 'Trade Events',
    summary: 'Visit CIDAK in Hall 4.0, Stand D22 to experience our expanded 2026 friction and filtration ranges, live dynamometer testing demonstrations, and distributor partnership programmes.',
    content: `CIDAK Automotive will be exhibiting at Automechanika Frankfurt 2026, the world's leading automotive aftermarket trade fair. Visitors to Stand D22 in Hall 4.0 can inspect our latest high-carbon Geomet brake disc developments, spin-on oil filter burst pressure demonstrations, and digital B2B ordering portal.\n\nOur technical directors and European commercial team will be on hand to discuss distribution agreements, bulk garage supply programs, and private label engineering solutions.`,
    date: 'June 19, 2026',
    readTime: '2 min read',
    author: 'Commercial Operations',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tags: ['Trade Expo', 'Automechanika', 'Global Distribution', 'Partnership'],
    isFeatured: false
  },
  {
    id: 'n-4',
    title: 'Technical Guide: Preventing Brake Judder & Disc Thickness Variation (DTV)',
    slug: 'technical-guide-preventing-brake-judder-dtv',
    category: 'Technical Bulletin',
    summary: 'Best-practice fitment guide for technicians on hub cleaning, runout verification with dial gauges, and pad bedding procedures.',
    content: `Brake judder is among the most frequent warranty complaints encountered by automotive workshops. Contrary to popular belief, warped discs are rarely the root cause; rather, disc thickness variation (DTV) resulting from runout during installation is the primary culprit.\n\nIn this technical bulletin, CIDAK engineers outline the 5 critical installation steps: 1) Thoroughly clean wheel hub flange with wire brush to bare metal; 2) Measure hub runout with a DTI gauge (must be < 0.02mm); 3) Fit CIDAK Geomet disc without degreasing; 4) Check disc assembled runout (must be < 0.05mm); 5) Follow the 200-mile gentle bedding cycle.`,
    date: 'May 30, 2026',
    readTime: '5 min read',
    author: 'Master Technician Bulletin',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    tags: ['Technical Bulletin', 'Workshop Tips', 'Brake Discs', 'Installation'],
    isFeatured: false
  }
];

export const PRODUCTS_DATABASE: ProductItem[] = [
  // 1. BRAKE PADS
  {
    id: 'cdk-bp-1042',
    partNumber: 'CDK-BP1042',
    name: 'Front Brake Pad Set (ECE R90 Certified)',
    category: 'brake-pads',
    categoryName: 'Brake Pads',
    description: 'High-performance copper-free ceramic friction pad set for front axle with pre-scorched contact bed and multi-layer anti-squeal shims.',
    fittingPosition: 'Front Axle',
    oemReferences: ['1K0 698 151', '5Q0 698 151 B', '1K0 698 151 E', '8V0 698 151 C'],
    competitorCrossRefs: [
      { brand: 'Bosch', partNumber: '0 986 424 797', notes: 'Direct Equivalent' },
      { brand: 'Brembo', partNumber: 'P 85 020', notes: 'Direct Equivalent' },
      { brand: 'Ferodo', partNumber: 'FDB1641', notes: 'Direct Equivalent' },
      { brand: 'TRW', partNumber: 'GDB1550', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV184201', notes: 'Direct Equivalent' },
      { brand: 'Mintex', partNumber: 'MDB2600', notes: 'Direct Equivalent' },
      { brand: 'Febi Bilstein', partNumber: '16447', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Width', value: '146.0', unit: 'mm' },
      { label: 'Height', value: '54.7', unit: 'mm' },
      { label: 'Thickness', value: '19.8', unit: 'mm' },
      { label: 'Brake System', value: 'Teves / ATE' },
      { label: 'Friction Material', value: 'Ceramic Low-Metallic (Copper-Free)' },
      { label: 'Wear Warning', value: 'Prepared for wear indicator' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf VII / Golf VIII', yearRange: '2012 - 2026', engine: '1.4 TSI / 1.5 TSI / 2.0 TDI', kwHp: '110kW / 150HP', chassisCode: '5G1 / CD1', fittingPosition: 'Front Axle' },
      { make: 'Audi', model: 'A3 Sportback', yearRange: '2012 - 2025', engine: '1.6 TDI / 2.0 TDI / 35 TFSI', kwHp: '85-110kW', chassisCode: '8V1 / 8YA', fittingPosition: 'Front Axle' },
      { make: 'Seat', model: 'Leon', yearRange: '2012 - 2026', engine: '1.4 TSI / 2.0 TDI', kwHp: '110kW', chassisCode: '5F1 / KL1', fittingPosition: 'Front Axle' },
      { make: 'Skoda', model: 'Octavia III / IV', yearRange: '2013 - 2026', engine: '1.5 TSI / 2.0 TDI', kwHp: '110kW', chassisCode: '5E3 / NX3', fittingPosition: 'Front Axle' }
    ],
    features: ['ECE R90 Homologated', 'Pre-scorched at 650°C', 'Rubber-Steel vulcanised shims', 'Low brake dust formula'],
    certifications: ['ECE R90: E1 90R-02A0124/1042', 'ISO/TS 16949'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'brake-pad',
    weightKg: 1.85,
    eanBarcode: '5060892010421'
  },
  {
    id: 'cdk-bp-1188',
    partNumber: 'CDK-BP1188',
    name: 'Rear Brake Pad Set with Electric Parking Brake Accessories',
    category: 'brake-pads',
    categoryName: 'Brake Pads',
    description: 'Precision rear brake pad set engineered for electronic park brake (EPB) actuators with anti-drag return springs.',
    fittingPosition: 'Rear Axle',
    oemReferences: ['3C0 698 451', '5Q0 698 451', '1K0 698 451 J', '8K0 698 451'],
    competitorCrossRefs: [
      { brand: 'Bosch', partNumber: '0 986 494 053', notes: 'Direct Equivalent' },
      { brand: 'Brembo', partNumber: 'P 85 073', notes: 'Direct Equivalent' },
      { brand: 'Ferodo', partNumber: 'FDB1636', notes: 'Direct Equivalent' },
      { brand: 'TRW', partNumber: 'GDB1622', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV184203', notes: 'Direct Equivalent' },
      { brand: 'Mintex', partNumber: 'MDB2688', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Width', value: '105.4', unit: 'mm' },
      { label: 'Height', value: '56.0', unit: 'mm' },
      { label: 'Thickness', value: '17.2', unit: 'mm' },
      { label: 'Brake System', value: 'TRW Lucas EPB' },
      { label: 'Friction Material', value: 'Enhanced Semi-Metallic' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Passat B8 / Arteon', yearRange: '2014 - 2026', engine: '2.0 TDI / 2.0 TSI', kwHp: '140kW / 190HP', chassisCode: '3G2 / 3H7', fittingPosition: 'Rear Axle' },
      { make: 'Audi', model: 'A4 B8 / B9', yearRange: '2008 - 2025', engine: '2.0 TDI / 2.0 TFSI', kwHp: '110-140kW', chassisCode: '8K2 / 8W2', fittingPosition: 'Rear Axle' },
      { make: 'Audi', model: 'A6 C7 / C8', yearRange: '2011 - 2024', engine: '2.0 TDI / 3.0 TDI', kwHp: '150-210kW', chassisCode: '4G2 / 4K2', fittingPosition: 'Rear Axle' }
    ],
    features: ['EPB Optimized compound', 'EPB caliper clip set included', 'ECE R90 certified', 'Anti-squeal elastomer damping'],
    certifications: ['ECE R90: E1 90R-02A0441/1188', 'ISO 9001:2015'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'brake-pad',
    weightKg: 1.25,
    eanBarcode: '5060892011886'
  },
  {
    id: 'cdk-bp-2095',
    partNumber: 'CDK-BP2095',
    name: 'Front Performance Brake Pad Set (BMW 3/5 Series)',
    category: 'brake-pads',
    categoryName: 'Brake Pads',
    description: 'High-temperature resistant ceramic friction pads with integrated wear sensor slot for BMW M-Sport and standard caliper systems.',
    fittingPosition: 'Front Axle',
    oemReferences: ['34 11 6 850 568', '34 11 6 854 999', '34 11 6 865 460'],
    competitorCrossRefs: [
      { brand: 'Bosch', partNumber: '0 986 494 656', notes: 'Direct Equivalent' },
      { brand: 'Brembo', partNumber: 'P 06 075', notes: 'Direct Equivalent' },
      { brand: 'Ferodo', partNumber: 'FDB4394', notes: 'Direct Equivalent' },
      { brand: 'TRW', partNumber: 'GDB1942', notes: 'Direct Equivalent' },
      { brand: 'Mintex', partNumber: 'MDB3244', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Width', value: '155.1', unit: 'mm' },
      { label: 'Height', value: '68.4', unit: 'mm' },
      { label: 'Thickness', value: '20.3', unit: 'mm' },
      { label: 'Brake System', value: 'Brembo OE System' },
      { label: 'Friction Material', value: 'High Carbon Ceramic Compound' }
    ],
    compatibleVehicles: [
      { make: 'BMW', model: '3 Series (F30 / G20)', yearRange: '2012 - 2026', engine: '320d / 320i / 330e / 330i', kwHp: '135-190kW', chassisCode: 'F30 / G20', fittingPosition: 'Front Axle' },
      { make: 'BMW', model: '4 Series Gran Coupe', yearRange: '2014 - 2025', engine: '420d / 430i', kwHp: '140-185kW', chassisCode: 'F36 / G26', fittingPosition: 'Front Axle' },
      { make: 'BMW', model: '5 Series (F10 / G30)', yearRange: '2010 - 2024', engine: '520d / 530d', kwHp: '140-195kW', chassisCode: 'F10 / G30', fittingPosition: 'Front Axle' }
    ],
    features: ['High heat fade resistance up to 650°C', 'Low dust clean alloy tech', 'Pre-scorched', 'R90 Certified'],
    certifications: ['ECE R90: E11 90R-02A0982/2095', 'ISO/TS 16949'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'brake-pad',
    weightKg: 2.15,
    eanBarcode: '5060892020956'
  },
  {
    id: 'cdk-bp-3021',
    partNumber: 'CDK-BP3021',
    name: 'Front Brake Pad Set (Ford Focus / Kuga / Transit Connect)',
    category: 'brake-pads',
    categoryName: 'Brake Pads',
    description: 'Commercial & passenger duty friction pads with stainless steel piston clips and chamfered noise suppression channels.',
    fittingPosition: 'Front Axle',
    oemReferences: ['1 809 256', '1 878 024', 'BV61-2M008-AA', 'KTBV61-2M008-AB'],
    competitorCrossRefs: [
      { brand: 'Bosch', partNumber: '0 986 494 433', notes: 'Direct Equivalent' },
      { brand: 'Brembo', partNumber: 'P 24 077', notes: 'Direct Equivalent' },
      { brand: 'Ferodo', partNumber: 'FDB4279', notes: 'Direct Equivalent' },
      { brand: 'TRW', partNumber: 'GDB1938', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADF124211', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Width', value: '155.2', unit: 'mm' },
      { label: 'Height', value: '62.5', unit: 'mm' },
      { label: 'Thickness', value: '18.2', unit: 'mm' },
      { label: 'Brake System', value: 'ATE' }
    ],
    compatibleVehicles: [
      { make: 'Ford', model: 'Focus III / IV', yearRange: '2011 - 2026', engine: '1.0 EcoBoost / 1.5 EcoBlue / 2.0 TDCi', kwHp: '74-110kW', chassisCode: 'C346 / C519', fittingPosition: 'Front Axle' },
      { make: 'Ford', model: 'Kuga II / III', yearRange: '2013 - 2026', engine: '1.5 EcoBoost / 2.0 TDCi', kwHp: '88-132kW', chassisCode: 'DM2 / DFK', fittingPosition: 'Front Axle' },
      { make: 'Ford', model: 'Transit Connect', yearRange: '2013 - 2025', engine: '1.5 TDCi / 1.6 TDCi', kwHp: '55-88kW', chassisCode: 'V408', fittingPosition: 'Front Axle' }
    ],
    features: ['OE Equivalent stopping distances', 'Scorched bed', 'Low rotor wear', 'R90 approved'],
    certifications: ['ECE R90: E1 90R-02A0891/3021', 'ISO 9001'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'brake-pad',
    weightKg: 1.9,
    eanBarcode: '5060892030214'
  },

  // 2. BRAKE DISCS
  {
    id: 'cdk-bd-2042',
    partNumber: 'CDK-BD2042',
    name: 'Vented Front Brake Disc (Geomet® Coated, High Carbon)',
    category: 'brake-discs',
    categoryName: 'Brake Discs',
    description: 'High-carbon ventilated front brake rotor with Geomet 500 corrosion protection and precision dynamic balancing.',
    fittingPosition: 'Front Axle',
    oemReferences: ['1K0 615 301 T', '5Q0 615 301 F', '1K0 615 301 AA', 'JZW 615 301 H'],
    competitorCrossRefs: [
      { brand: 'Bosch', partNumber: '0 986 479 247', notes: 'Direct Equivalent' },
      { brand: 'Brembo', partNumber: '09.9145.11', notes: 'Direct Equivalent' },
      { brand: 'Ferodo', partNumber: 'DDF1223', notes: 'Direct Equivalent' },
      { brand: 'TRW', partNumber: 'DF4464S', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV184305', notes: 'Direct Equivalent' },
      { brand: 'Febi Bilstein', partNumber: '24360', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '288.0', unit: 'mm' },
      { label: 'Brake Disc Thickness', value: '25.0', unit: 'mm' },
      { label: 'Minimum Thickness', value: '22.0', unit: 'mm' },
      { label: 'Brake Disc Type', value: 'Internally Vented' },
      { label: 'Number of Holes', value: '5/9' },
      { label: 'Bolt Hole Circle', value: '112.0', unit: 'mm' },
      { label: 'Centering Diameter', value: '65.0', unit: 'mm' },
      { label: 'Surface Coating', value: 'Geomet 500® (Anti-Corrosion)' },
      { label: 'Material', value: 'High-Carbon Grey Cast Iron GG20' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf VII / VIII', yearRange: '2012 - 2026', engine: '1.4 TSI / 1.5 TSI / 2.0 TDI', kwHp: '110kW / 150HP', chassisCode: '5G1 / CD1', fittingPosition: 'Front Axle' },
      { make: 'Audi', model: 'A3 Sportback', yearRange: '2012 - 2025', engine: '1.4 TFSI / 2.0 TDI', kwHp: '110kW', chassisCode: '8V1 / 8YA', fittingPosition: 'Front Axle' },
      { make: 'Skoda', model: 'Octavia III / IV', yearRange: '2013 - 2026', engine: '1.5 TSI / 2.0 TDI', kwHp: '110kW', chassisCode: '5E3 / NX3', fittingPosition: 'Front Axle' },
      { make: 'Seat', model: 'Leon', yearRange: '2012 - 2026', engine: '1.5 TSI / 2.0 TDI', kwHp: '110kW', chassisCode: '5F1 / KL1', fittingPosition: 'Front Axle' }
    ],
    features: ['Ready to fit - no oil degreasing needed', 'High carbon resists warping and DTV', 'Dynamic balancing < 0.03mm', 'Directional cooling vanes'],
    certifications: ['ECE R90: E1 90R-02C0115/2042', 'TÜV Certified'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'brake-disc',
    weightKg: 7.6,
    eanBarcode: '5060892020420'
  },
  {
    id: 'cdk-bd-2312',
    partNumber: 'CDK-BD2312',
    name: '312mm Performance Front Vented Brake Disc (Geomet® Coated)',
    category: 'brake-discs',
    categoryName: 'Brake Discs',
    description: 'High-thermal capacity 312mm front ventilated rotor for higher output petrol and diesel European vehicles.',
    fittingPosition: 'Front Axle',
    oemReferences: ['1K0 615 301 AA', '5Q0 615 301 G', '3C0 615 301 A', '8P0 615 301 G'],
    competitorCrossRefs: [
      { brand: 'Bosch', partNumber: '0 986 479 098', notes: 'Direct Equivalent' },
      { brand: 'Brembo', partNumber: '09.9772.11', notes: 'Direct Equivalent' },
      { brand: 'Ferodo', partNumber: 'DDF1224', notes: 'Direct Equivalent' },
      { brand: 'TRW', partNumber: 'DF4465S', notes: 'Direct Equivalent' },
      { brand: 'Mintex', partNumber: 'MDC1641', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '312.0', unit: 'mm' },
      { label: 'Brake Disc Thickness', value: '25.0', unit: 'mm' },
      { label: 'Minimum Thickness', value: '22.0', unit: 'mm' },
      { label: 'Brake Disc Type', value: 'Internally Vented' },
      { label: 'Bolt Hole Circle', value: '112.0', unit: 'mm' },
      { label: 'Centering Diameter', value: '65.0', unit: 'mm' },
      { label: 'Surface Coating', value: 'Full Geomet 500' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf GTI / GTD / R-Line', yearRange: '2013 - 2026', engine: '2.0 TSI / 2.0 TDI', kwHp: '135-180kW', chassisCode: '5G1 / CD1', fittingPosition: 'Front Axle' },
      { make: 'Audi', model: 'A3 / S3 / TT', yearRange: '2012 - 2025', engine: '2.0 TFSI / 2.0 TDI', kwHp: '140-169kW', chassisCode: '8V / 8S', fittingPosition: 'Front Axle' },
      { make: 'Skoda', model: 'Superb III / vRS', yearRange: '2015 - 2026', engine: '2.0 TSI / 2.0 TDI', kwHp: '140-206kW', chassisCode: '3V3', fittingPosition: 'Front Axle' }
    ],
    features: ['High carbon alloy GG15', 'Full zinc-aluminum Geomet coating', 'Ultra-low DTV tolerance', 'Anti-fade performance'],
    certifications: ['ECE R90: E1 90R-02C0188/2312', 'ISO 9001:2015'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'brake-disc',
    weightKg: 8.8,
    eanBarcode: '5060892023124'
  },
  {
    id: 'cdk-bd-3300',
    partNumber: 'CDK-BD3300',
    name: '300mm High Carbon Vented Front Brake Disc (BMW 3 Series)',
    category: 'brake-discs',
    categoryName: 'Brake Discs',
    description: 'Precision engineered 300mm directional ventilated rotor for BMW chassis with protective coating against alloy wheel corrosion.',
    fittingPosition: 'Front Axle',
    oemReferences: ['34 11 6 792 217', '34 11 6 854 997', '34 11 6 864 905'],
    competitorCrossRefs: [
      { brand: 'Bosch', partNumber: '0 986 479 735', notes: 'Direct Equivalent' },
      { brand: 'Brembo', partNumber: '09.C114.11', notes: 'Direct Equivalent' },
      { brand: 'Ferodo', partNumber: 'DDF2171C', notes: 'Direct Equivalent' },
      { brand: 'TRW', partNumber: 'DF6015S', notes: 'Direct Equivalent' },
      { brand: 'Febi Bilstein', partNumber: '37188', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '300.0', unit: 'mm' },
      { label: 'Brake Disc Thickness', value: '22.0', unit: 'mm' },
      { label: 'Minimum Thickness', value: '20.4', unit: 'mm' },
      { label: 'Bolt Hole Circle', value: '120.0', unit: 'mm' },
      { label: 'Centering Diameter', value: '75.0', unit: 'mm' },
      { label: 'Surface Coating', value: 'Geomet 500' }
    ],
    compatibleVehicles: [
      { make: 'BMW', model: '3 Series (F30 / F31)', yearRange: '2012 - 2019', engine: '316d / 318d / 320d', kwHp: '85-140kW', chassisCode: 'F30', fittingPosition: 'Front Axle' },
      { make: 'BMW', model: '1 Series (F20 / F21)', yearRange: '2011 - 2019', engine: '118d / 120d / 125i', kwHp: '105-160kW', chassisCode: 'F20', fittingPosition: 'Front Axle' },
      { make: 'BMW', model: '2 Series Coupe', yearRange: '2013 - 2021', engine: '218d / 220d', kwHp: '105-140kW', chassisCode: 'F22', fittingPosition: 'Front Axle' }
    ],
    features: ['High carbon formulation eliminates judder', 'Geomet silver hub coating', 'Precision balanced', 'ECE R90 certified'],
    certifications: ['ECE R90: E11 90R-02C0512/3300', 'ISO/TS 16949'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'brake-disc',
    weightKg: 8.2,
    eanBarcode: '5060892033000'
  },

  // 3. AIR FILTERS
  {
    id: 'cdk-af-4011',
    partNumber: 'CDK-AF4011',
    name: 'Engine Air Filter Element (VAG 1.2 / 1.4 / 1.5 TSI)',
    category: 'air-filter',
    categoryName: 'Air Filter',
    description: 'High-flow synthetic pleated engine intake air filter with polyurethane perimeter seal and flame-retardant media.',
    fittingPosition: 'Engine Bay',
    oemReferences: ['04E 129 620', '04E 129 620 A', '5Q0 129 620 B'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'C 27 009', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 400 489', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'LX 3525', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'A1568', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV182247', notes: 'Direct Equivalent' },
      { brand: 'Fram', partNumber: 'CA11654', notes: 'Direct Equivalent' },
      { brand: 'Wix', partNumber: 'WA9763', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Length', value: '269.0', unit: 'mm' },
      { label: 'Width', value: '190.0', unit: 'mm' },
      { label: 'Height', value: '35.0', unit: 'mm' },
      { label: 'Filter Type', value: 'Filter Insert / Pleated Panel' },
      { label: 'Filtration Efficiency', value: '99.8% @ 3 microns (ISO 5011)' },
      { label: 'Sealing Material', value: 'Flexible PU Polyurethane' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf VII / VIII / Polo / T-Roc', yearRange: '2012 - 2026', engine: '1.0 TSI / 1.2 TSI / 1.4 TSI / 1.5 TSI', kwHp: '63-110kW', chassisCode: '5G / AW / A1', fittingPosition: 'Engine Bay' },
      { make: 'Audi', model: 'A1 / A3 Sportback / Q2', yearRange: '2012 - 2026', engine: '30 TFSI / 35 TFSI / 1.4 TFSI', kwHp: '85-110kW', chassisCode: '8X / 8V / GAB', fittingPosition: 'Engine Bay' },
      { make: 'Seat', model: 'Ibiza / Leon / Arona / Ateca', yearRange: '2013 - 2026', engine: '1.0 TSI / 1.5 TSI', kwHp: '70-110kW', chassisCode: '6F / 5F / KH', fittingPosition: 'Engine Bay' },
      { make: 'Skoda', model: 'Fabia / Octavia / Kamiq / Karoq', yearRange: '2014 - 2026', engine: '1.0 TSI / 1.5 TSI', kwHp: '70-110kW', chassisCode: 'NJ / 5E / NW', fittingPosition: 'Engine Bay' }
    ],
    features: ['OE matching pleat geometry', 'Reinforced synthetic media', 'PU seal prevents unmetered air leaks', 'Protects turbo compressor wheel'],
    certifications: ['ISO 5011', 'IATF 16949:2016'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'air-filter',
    weightKg: 0.35,
    eanBarcode: '5060892040114'
  },
  {
    id: 'cdk-af-4088',
    partNumber: 'CDK-AF4088',
    name: 'Engine Air Filter Panel (BMW 1 / 2 / 3 / 4 / 5 Series & X1/X3)',
    category: 'air-filter',
    categoryName: 'Air Filter',
    description: 'High dust-holding micro-pleated air filter engineered for BMW TwinPower Turbo 4-cylinder engines.',
    fittingPosition: 'Engine Bay',
    oemReferences: ['13 71 8 511 668', '13 71 8 518 111', '13 71 7 811 026'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'C 27 026', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 400 397', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'LX 3073', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'A1578', notes: 'Direct Equivalent' },
      { brand: 'Febi Bilstein', partNumber: '48512', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Length', value: '269.0', unit: 'mm' },
      { label: 'Width', value: '205.0', unit: 'mm' },
      { label: 'Height', value: '43.0', unit: 'mm' },
      { label: 'Filter Media', value: 'Multi-layer Synthetic Fiber' }
    ],
    compatibleVehicles: [
      { make: 'BMW', model: '3 Series (F30 / F31 / G20)', yearRange: '2012 - 2025', engine: '316d / 318d / 320d / 325d (N47/B47)', kwHp: '85-165kW', chassisCode: 'F30 / G20', fittingPosition: 'Engine Bay' },
      { make: 'BMW', model: '5 Series (F10 / G30)', yearRange: '2010 - 2024', engine: '520d / 525d', kwHp: '135-170kW', chassisCode: 'F10 / G30', fittingPosition: 'Engine Bay' },
      { make: 'BMW', model: 'X3 / X4 (F25 / G01)', yearRange: '2011 - 2025', engine: 'xDrive 20d', kwHp: '135-140kW', chassisCode: 'F25 / G01', fittingPosition: 'Engine Bay' }
    ],
    features: ['Low pressure drop under turbo spool', 'Resistant to moisture saturation', 'Exact OE fitment frame'],
    certifications: ['ISO 5011', 'ISO 9001:2015'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'air-filter',
    weightKg: 0.42,
    eanBarcode: '5060892040886'
  },
  {
    id: 'cdk-af-4033',
    partNumber: 'CDK-AF4033',
    name: 'Cylindrical Heavy-Duty Air Filter (Ford Transit 2.0 EcoBlue)',
    category: 'air-filter',
    categoryName: 'Air Filter',
    description: 'Heavy duty commercial van cylindrical air filter element with expanded steel reinforcing mesh.',
    fittingPosition: 'Engine Bay',
    oemReferences: ['2 007 031', '2 018 732', 'GK21-9601-AA', 'GK21-9601-AB'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'C 16 006', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 400 580', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'LX 4268', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADF122232', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '162.0', unit: 'mm' },
      { label: 'Inner Diameter', value: '88.0', unit: 'mm' },
      { label: 'Height', value: '298.0', unit: 'mm' },
      { label: 'Core Reinforcement', value: 'Galvanized Perforated Steel Cage' }
    ],
    compatibleVehicles: [
      { make: 'Ford', model: 'Transit Custom / Tourneo', yearRange: '2016 - 2026', engine: '2.0 EcoBlue Diesel', kwHp: '77-136kW', chassisCode: 'V362', fittingPosition: 'Engine Bay' },
      { make: 'Ford', model: 'Transit V363 (2.0 EcoBlue)', yearRange: '2016 - 2026', engine: '2.0 TDCi / EcoBlue', kwHp: '77-154kW', chassisCode: 'V363', fittingPosition: 'Engine Bay' }
    ],
    features: ['High dirt holding capacity for fleet operations', 'Spiral glue bead pleat lock', 'Flame retardant'],
    certifications: ['ISO 5011', 'IATF 16949'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'air-filter',
    weightKg: 0.68,
    eanBarcode: '5060892040336'
  },

  // 4. OIL FILTERS
  {
    id: 'cdk-of-5012',
    partNumber: 'CDK-OF5012',
    name: 'Spin-On Oil Filter with Anti-Drainback Silicone Valve',
    category: 'oil-filter',
    categoryName: 'Oil Filter',
    description: 'Heavy gauge steel spin-on oil filter with 20-bar burst pressure resistance and synthetic blend media.',
    fittingPosition: 'Engine Bay',
    oemReferences: ['04E 115 561 H', '04E 115 561 B', '04E 115 561 D'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'W 712/95', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 407 157', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'OC 977/1', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'LS969', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV182109', notes: 'Direct Equivalent' },
      { brand: 'Fram', partNumber: 'PH11457', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '76.0', unit: 'mm' },
      { label: 'Connecting Thread', value: '3/4"-16 UNF' },
      { label: 'Height', value: '89.0', unit: 'mm' },
      { label: 'Bypass Opening Pressure', value: '2.5', unit: 'bar' },
      { label: 'Anti-Drainback Valve', value: 'High-Temp Silicone Diaphragm' },
      { label: 'Burst Pressure Rating', value: '> 20 bar (290 PSI)' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf VII / VIII / Polo / T-Cross', yearRange: '2012 - 2026', engine: '1.2 TSI / 1.4 TSI / 1.5 TSI (EA211)', kwHp: '63-110kW', chassisCode: '5G / CD / AW', fittingPosition: 'Engine Bay' },
      { make: 'Audi', model: 'A1 / A3 / Q2 / Q3', yearRange: '2012 - 2026', engine: '30 TFSI / 35 TFSI / 1.4 TFSI', kwHp: '85-110kW', chassisCode: '8V / 8Y / F3', fittingPosition: 'Engine Bay' },
      { make: 'Seat', model: 'Ibiza / Leon / Ateca / Formentor', yearRange: '2013 - 2026', engine: '1.0 TSI / 1.4 TSI / 1.5 TSI', kwHp: '70-110kW', chassisCode: '5F / KL / KM', fittingPosition: 'Engine Bay' },
      { make: 'Skoda', model: 'Fabia / Octavia / Kamiq / Kodiaq', yearRange: '2014 - 2026', engine: '1.0 TSI / 1.5 TSI', kwHp: '70-110kW', chassisCode: 'NJ / 5E / NX / NS', fittingPosition: 'Engine Bay' }
    ],
    features: ['Captures 99% of particles @ 20 microns', 'Silicone anti-drainback prevents dry starts', 'High burst strength steel shell', 'Precision spring bypass'],
    certifications: ['ISO 4548-12', 'IATF 16949:2016'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'oil-filter',
    weightKg: 0.32,
    eanBarcode: '5060892050123'
  },
  {
    id: 'cdk-of-5028',
    partNumber: 'CDK-OF5028',
    name: 'Eco-Cartridge Oil Filter Element with O-Rings (VAG 2.0 TDI)',
    category: 'oil-filter',
    categoryName: 'Oil Filter',
    description: 'Metal-free environmental cartridge oil filter with heat-welded synthetic end caps and FKM fluoroelastomer seals.',
    fittingPosition: 'Engine Bay',
    oemReferences: ['03N 115 562', '03N 115 562 B', '03N 115 466'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'HU 7020 z', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 407 143', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'OX 787 D', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'L974', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV182115', notes: 'Direct Equivalent' },
      { brand: 'Febi Bilstein', partNumber: '100463', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '65.0', unit: 'mm' },
      { label: 'Inner Diameter', value: '29.0', unit: 'mm' },
      { label: 'Height', value: '101.0', unit: 'mm' },
      { label: 'Filter Type', value: 'Eco Cartridge Filter Insert' },
      { label: 'Gasket Kit Included', value: 'Housing O-Ring + Crush Washer' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf / Passat / Tiguan / Transporter T6', yearRange: '2013 - 2026', engine: '1.6 TDI / 2.0 TDI (EA288)', kwHp: '81-176kW', chassisCode: '5G / 3G / AD / 7H', fittingPosition: 'Engine Bay' },
      { make: 'Audi', model: 'A3 / A4 / A5 / A6 / Q3 / Q5', yearRange: '2013 - 2026', engine: '2.0 TDI (Clean Diesel)', kwHp: '100-140kW', chassisCode: '8V / 8W / FY', fittingPosition: 'Engine Bay' },
      { make: 'Skoda', model: 'Octavia / Superb / Kodiaq', yearRange: '2013 - 2026', engine: '2.0 TDI', kwHp: '110-147kW', chassisCode: '5E / 3V / NS', fittingPosition: 'Engine Bay' }
    ],
    features: ['100% Incinerable metal-free design', 'Resists aggressive soot loaded diesel oil', 'Includes replacement housing seals', 'OE pleat count'],
    certifications: ['ISO 4548-12', 'ISO 14001'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'oil-filter',
    weightKg: 0.08,
    eanBarcode: '5060892050284'
  },
  {
    id: 'cdk-of-5077',
    partNumber: 'CDK-OF5077',
    name: 'Eco Cartridge Oil Filter Element (BMW N47 / N57 / B47 / B57)',
    category: 'oil-filter',
    categoryName: 'Oil Filter',
    description: 'Precision molded cartridge element for BMW longitudinal engines with high-flow synthetic core.',
    fittingPosition: 'Engine Bay',
    oemReferences: ['11 42 8 507 683', '11 42 7 805 978', '11 42 7 807 177'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'HU 6004 x', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 407 123', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'OX 404 D', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'L460', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADB112102', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '53.0', unit: 'mm' },
      { label: 'Inner Diameter', value: '19.0', unit: 'mm' },
      { label: 'Height', value: '133.0', unit: 'mm' },
      { label: 'Media Type', value: 'Synthetic Glass Fiber Blend' }
    ],
    compatibleVehicles: [
      { make: 'BMW', model: '1 / 2 / 3 / 4 / 5 Series & X1/X3/X5', yearRange: '2010 - 2025', engine: '18d / 20d / 25d / 30d / 35d', kwHp: '105-230kW', chassisCode: 'F20 / F30 / G30 / F15', fittingPosition: 'Engine Bay' }
    ],
    features: ['High temperature resistance up to 160°C', 'Superior fine particle retention', 'OE specifications'],
    certifications: ['ISO 4548-12', 'IATF 16949'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'oil-filter',
    weightKg: 0.1,
    eanBarcode: '5060892050772'
  },

  // 5. FUEL FILTERS
  {
    id: 'cdk-ff-6022',
    partNumber: 'CDK-FF6022',
    name: 'Common Rail Diesel (CRDi) Fuel Filter with Water Trap (VAG 1.6 / 2.0 TDI)',
    category: 'fuel-filter',
    categoryName: 'Fuel Filter',
    description: 'High-pressure in-line diesel filter with coalescing water separation media and internal electric pre-heater bypass.',
    fittingPosition: 'Engine Bay',
    oemReferences: ['5Q0 127 177', '5Q0 127 177 B', '5Q0 127 400 F', '5Q0 127 400 J'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'PU 8008', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 402 819', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'KX 386', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'C813', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV182315', notes: 'Direct Equivalent' },
      { brand: 'Febi Bilstein', partNumber: '48545', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '75.0', unit: 'mm' },
      { label: 'Inner Diameter', value: '14.0', unit: 'mm' },
      { label: 'Height', value: '136.0', unit: 'mm' },
      { label: 'Filtration Rating', value: '2 microns @ 99.2% efficiency (ISO 19438)' },
      { label: 'Water Separation', value: '> 98% coalescence efficiency (ISO 4020)' },
      { label: 'Application Pressure', value: 'Up to 2,500 bar CRDi systems' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf VII / VIII / Passat B8 / Tiguan', yearRange: '2012 - 2026', engine: '1.6 TDI / 2.0 TDI', kwHp: '81-176kW', chassisCode: '5G / 3G / AD', fittingPosition: 'Engine Bay' },
      { make: 'Audi', model: 'A3 8V / 8Y / Q2 / Q3', yearRange: '2012 - 2026', engine: '1.6 TDI / 2.0 TDI / 30 TDI / 35 TDI', kwHp: '85-147kW', chassisCode: '8V / 8Y / GA / F3', fittingPosition: 'Engine Bay' },
      { make: 'Skoda', model: 'Octavia III / IV / Superb III / Kodiaq', yearRange: '2013 - 2026', engine: '1.6 TDI / 2.0 TDI', kwHp: '85-147kW', chassisCode: '5E / NX / 3V / NS', fittingPosition: 'Engine Bay' },
      { make: 'Seat', model: 'Leon / Ateca / Tarraco', yearRange: '2012 - 2026', engine: '1.6 TDI / 2.0 TDI', kwHp: '85-140kW', chassisCode: '5F / KL / KH / KN', fittingPosition: 'Engine Bay' }
    ],
    features: ['Protects expensive high-pressure common rail pumps', 'Dual-layer water coalescence barrier', 'Compatible with B20/B30 Biodiesel blends', 'OE quality fitment'],
    certifications: ['ISO 19438', 'ISO 4020', 'IATF 16949:2016'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'fuel-filter',
    weightKg: 0.15,
    eanBarcode: '5060892060222'
  },
  {
    id: 'cdk-ff-6091',
    partNumber: 'CDK-FF6091',
    name: 'Aluminum In-Line Fuel Filter with Integrated Sensor Housing (BMW Diesel)',
    category: 'fuel-filter',
    categoryName: 'Fuel Filter',
    description: 'Sealed aluminum fuel filter canister engineered to resist underbody gravel impact with quick-connect fuel unions.',
    fittingPosition: 'Underbody',
    oemReferences: ['13 32 7 823 413', '13 32 8 572 522', '13 32 8 584 874'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'WK 5002 z', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: 'F 026 402 118', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'KL 763 D', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'FCS789', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADB112304', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Outer Diameter', value: '55.0', unit: 'mm' },
      { label: 'Inlet / Outlet Spigot', value: '8.0 / 10.0', unit: 'mm' },
      { label: 'Height', value: '252.0', unit: 'mm' },
      { label: 'Housing Material', value: 'Drawn Seamless Aluminum Alloy' }
    ],
    compatibleVehicles: [
      { make: 'BMW', model: '1 / 2 / 3 / 4 / 5 Series & X1/X3', yearRange: '2011 - 2025', engine: '116d / 118d / 120d / 320d / 330d / 520d / 530d', kwHp: '85-195kW', chassisCode: 'F20 / F30 / G30 / F25', fittingPosition: 'Underbody' }
    ],
    features: ['High-tensile seamless aluminum casing', 'Quick-click fuel pipe lock lugs', 'Water detection port ready', 'Full bio-fuel resistance'],
    certifications: ['ISO 19438', 'IATF 16949'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'fuel-filter',
    weightKg: 0.38,
    eanBarcode: '5060892060918'
  },
  {
    id: 'cdk-ff-6045',
    partNumber: 'CDK-FF6045',
    name: 'High-Pressure Direct Injection In-Line Petrol Fuel Filter',
    category: 'fuel-filter',
    categoryName: 'Fuel Filter',
    description: 'Precision 6.6 bar returnless fuel filter with integrated internal fuel pressure regulator diaphragm.',
    fittingPosition: 'Underbody',
    oemReferences: ['1K0 201 051 K', '1K0 201 051 C', '6Q0 201 051 J'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'WK 69/1', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: '0 450 905 959', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'KL 156/3', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV182301', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Diameter', value: '55.0', unit: 'mm' },
      { label: 'Pressure Rating', value: '6.6', unit: 'bar' },
      { label: 'Ports', value: '3-Port with Internal Pressure Regulator' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf V / VI / Polo / Scirocco', yearRange: '2004 - 2018', engine: '1.2 TSI / 1.4 TSI / 2.0 TFSI', kwHp: '63-199kW', chassisCode: '1K / 6R / 137', fittingPosition: 'Underbody' },
      { make: 'Audi', model: 'A3 / TT', yearRange: '2004 - 2014', engine: '1.4 TFSI / 1.8 TFSI / 2.0 TFSI', kwHp: '92-147kW', chassisCode: '8P / 8J', fittingPosition: 'Underbody' }
    ],
    features: ['Integrated 6.6 bar fuel regulator valve', 'Corrosion-proof alloy shell', 'Protects high-pressure direct injectors'],
    certifications: ['ISO 19438', 'ISO 9001'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'fuel-filter',
    weightKg: 0.22,
    eanBarcode: '5060892060451'
  },

  // 6. CABIN & CARBON FILTERS
  {
    id: 'cdk-cf-7019',
    partNumber: 'CDK-CF7019',
    name: '4-Stage Bio-Functional Activated Carbon Cabin Air Filter',
    category: 'cabin-filter',
    categoryName: 'Cabin & Carbon Filter',
    description: 'Premium 4-layer bio-functional cabin filter with active coconut carbon and antimicrobial polyphenol coating.',
    fittingPosition: 'Interior HVAC',
    oemReferences: ['5Q0 819 653', '5Q0 819 644', '5Q0 819 669', 'JZW 819 653 E'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'CUK 26 009', notes: 'Active Carbon Equivalent' },
      { brand: 'Mann-Filter', partNumber: 'FP 26 009', notes: 'FreciousPlus Bio-Functional' },
      { brand: 'Bosch', partNumber: '1 987 435 500', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'LAK 888', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'AHC392', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADV182512', notes: 'Direct Equivalent' },
      { brand: 'Febi Bilstein', partNumber: '48485', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Length', value: '254.0', unit: 'mm' },
      { label: 'Width', value: '235.0', unit: 'mm' },
      { label: 'Height', value: '32.0', unit: 'mm' },
      { label: 'Filter Type', value: '4-Layer Bio-Functional Active Carbon with Polyphenol' },
      { label: 'Particulate Retention', value: '> 99.4% PM2.5 / PM0.3 allergen particles (ISO 11155-1)' },
      { label: 'Gas Adsorption', value: 'NO2, Ozone, SO2, Benzene, Road Odors (ISO 11155-2)' },
      { label: 'Hygiene Rating', value: 'VDI 6032 Certified (Anti-Bacterial & Anti-Mold)' }
    ],
    compatibleVehicles: [
      { make: 'Volkswagen', model: 'Golf VII / Golf VIII / Passat B8 / Tiguan / ID.3 / ID.4', yearRange: '2012 - 2026', engine: 'All Engines (TSI, TDI, e-Hybrid, Electric)', kwHp: '63-235kW', chassisCode: 'MQB / MEB Platforms', fittingPosition: 'Interior HVAC' },
      { make: 'Audi', model: 'A3 / S3 / RS3 / Q2 / Q3 / TT', yearRange: '2012 - 2026', engine: 'All Engines (TFSI, TDI, TFSI e)', kwHp: '85-294kW', chassisCode: '8V / 8Y / GA / F3', fittingPosition: 'Interior HVAC' },
      { make: 'Seat / Cupra', model: 'Leon / Formentor / Ateca / Born', yearRange: '2012 - 2026', engine: 'All Engines', kwHp: '66-228kW', chassisCode: '5F / KL / KM / K1', fittingPosition: 'Interior HVAC' },
      { make: 'Skoda', model: 'Octavia III / IV / Superb III / Kodiaq / Enyaq', yearRange: '2013 - 2026', engine: 'All Engines', kwHp: '63-206kW', chassisCode: '5E / NX / 3V / NY', fittingPosition: 'Interior HVAC' }
    ],
    features: ['4-Stage Bio-Functional matrix', 'Eliminates 99.4% allergens and pollen', 'Adsorbs toxic diesel smog and NO2 fumes', 'Prevents windscreen fogging and musty A/C odors'],
    certifications: ['ISO 11155-1 & 2', 'DIN 71460', 'VDI 6032 Hygiene Certified'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'cabin-filter',
    weightKg: 0.28,
    eanBarcode: '5060892070191'
  },
  {
    id: 'cdk-cf-7082',
    partNumber: 'CDK-CF7082',
    name: 'Dual-Set Activated Carbon Cabin Filters (BMW 5 / 6 / 7 Series & X5 / X6)',
    category: 'cabin-filter',
    categoryName: 'Cabin & Carbon Filter',
    description: 'High surface area activated carbon 2-piece dual filter set for dual-zone BMW climate control systems.',
    fittingPosition: 'Interior HVAC',
    oemReferences: ['64 11 9 272 642', '64 11 9 163 329', '64 11 6 991 537'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'CUK 2533-2', notes: 'Dual Set Equivalent' },
      { brand: 'Bosch', partNumber: '1 987 432 315', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'LAK 467/S', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'AHC315-2', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADB112504', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Length', value: '248.0', unit: 'mm' },
      { label: 'Width', value: '118.0', unit: 'mm' },
      { label: 'Height', value: '38.0', unit: 'mm' },
      { label: 'Quantity per Pack', value: '2-Piece Set (Matched Pair)' },
      { label: 'Media', value: 'Fine Particle Fleece + Granular Carbon Bed' }
    ],
    compatibleVehicles: [
      { make: 'BMW', model: '5 Series (F10 / F11 / F07 GT)', yearRange: '2010 - 2017', engine: '520d / 525d / 530d / 535d / 528i / 535i / M5', kwHp: '135-412kW', chassisCode: 'F10 / F11', fittingPosition: 'Interior HVAC' },
      { make: 'BMW', model: '6 Series (F12 / F13 / F06 Gran Coupe)', yearRange: '2011 - 2018', engine: '640d / 640i / 650i / M6', kwHp: '230-412kW', chassisCode: 'F06 / F12 / F13', fittingPosition: 'Interior HVAC' },
      { make: 'BMW', model: '7 Series (F01 / F02)', yearRange: '2008 - 2015', engine: '730d / 740d / 750i / 760i', kwHp: '180-400kW', chassisCode: 'F01 / F02', fittingPosition: 'Interior HVAC' },
      { make: 'BMW', model: 'X5 / X6 (F15 / F16)', yearRange: '2013 - 2019', engine: 'xDrive 30d / 40d / M50d / 35i / 50i', kwHp: '190-423kW', chassisCode: 'F15 / F16', fittingPosition: 'Interior HVAC' }
    ],
    features: ['Matched dual filter set for complete cabin coverage', 'High adsorption capacity for urban diesel fumes', 'Reinforced acoustic border bands'],
    certifications: ['ISO 11155', 'DIN 71460'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'cabin-filter',
    weightKg: 0.36,
    eanBarcode: '5060892070825'
  },
  {
    id: 'cdk-cf-7044',
    partNumber: 'CDK-CF7044',
    name: 'Bio-Functional Anti-Allergen Cabin Filter (Ford Focus / Kuga / Transit)',
    category: 'cabin-filter',
    categoryName: 'Cabin & Carbon Filter',
    description: 'High-density active carbon cabin filter element capturing pollen, mold spores, and soot emissions.',
    fittingPosition: 'Interior HVAC',
    oemReferences: ['1 709 013', '1 776 360', 'AV6N-19G244-AA', 'AV6N-19G244-BA'],
    competitorCrossRefs: [
      { brand: 'Mann-Filter', partNumber: 'CUK 25 007', notes: 'Direct Equivalent' },
      { brand: 'Bosch', partNumber: '1 987 432 598', notes: 'Direct Equivalent' },
      { brand: 'Mahle', partNumber: 'LAK 812', notes: 'Direct Equivalent' },
      { brand: 'Purflux', partNumber: 'AHC338', notes: 'Direct Equivalent' },
      { brand: 'Blueprint', partNumber: 'ADF122502', notes: 'Direct Equivalent' }
    ],
    technicalSpecs: [
      { label: 'Length', value: '254.0', unit: 'mm' },
      { label: 'Width', value: '200.0', unit: 'mm' },
      { label: 'Height', value: '35.0', unit: 'mm' },
      { label: 'Material', value: 'Active Coconut Carbon + Electrostatic Fleece' }
    ],
    compatibleVehicles: [
      { make: 'Ford', model: 'Focus III / C-Max II / Kuga II', yearRange: '2010 - 2020', engine: '1.0 EcoBoost / 1.5 TDCi / 2.0 TDCi', kwHp: '74-134kW', chassisCode: 'C346 / DM2', fittingPosition: 'Interior HVAC' },
      { make: 'Ford', model: 'Transit Connect / Tourneo Connect', yearRange: '2013 - 2024', engine: '1.5 TDCi / 1.6 TDCi / 1.0 EcoBoost', kwHp: '55-88kW', chassisCode: 'V408', fittingPosition: 'Interior HVAC' },
      { make: 'Volvo', model: 'V40 / V40 Cross Country', yearRange: '2012 - 2019', engine: 'D2 / D3 / D4 / T2 / T3 / T4', kwHp: '84-140kW', chassisCode: '525', fittingPosition: 'Interior HVAC' }
    ],
    features: ['Captures 99% of particulate matter down to 2.5 microns', 'Eliminates musty A/C odors', 'Maintains optimal demisting airflow'],
    certifications: ['ISO 11155-1', 'ISO 9001:2015'],
    inStock: true,
    warrantyMonths: 24,
    diagramSvgType: 'cabin-filter',
    weightKg: 0.24,
    eanBarcode: '5060892070443'
  }
];

export const VEHICLE_MAKES = [
  'Audi',
  'BMW',
  'Ford',
  'Mercedes-Benz',
  'Nissan',
  'Peugeot',
  'Seat',
  'Skoda',
  'Toyota',
  'Vauxhall',
  'Volkswagen'
];

export const QUALITY_BENCHMARKS = [
  {
    title: 'ECE R90 Homologation Certification',
    code: 'ECE R90-02',
    scope: '100% of Brake Pads & Discs',
    metric: 'Friction coefficient stability within ±10% of OE baseline at all speeds and temperatures up to 650°C.',
    iconName: 'Award',
    status: 'Certified E-Mark Homologated'
  },
  {
    title: 'IATF 16949 / ISO 9001:2015 Quality Management',
    code: 'IATF 16949:2016',
    scope: 'Manufacturing Plant & Supply Chain',
    metric: 'Automotive tier-1 quality control with automated optical inspection and zero-defect tolerance framework.',
    iconName: 'CheckCircle2',
    status: 'Audited & Accredited'
  },
  {
    title: 'Dynamic Dynamometer Endurance Testing',
    code: 'SAE J2522 / AK Master',
    scope: 'Thermal Bedding & High-Speed Fade',
    metric: 'Over 1,200 simulated high-deceleration stops under extreme Alpine descent conditions without thermal fade.',
    iconName: 'Activity',
    status: 'Passed > 1200 Cycles'
  },
  {
    title: 'Multi-Pass Filtration Efficiency (ISO 5011 / ISO 4548)',
    code: 'ISO 5011 / 4548-12',
    scope: 'Air, Oil, Fuel & Cabin Filters',
    metric: 'Guaranteed 99.8% filtration efficiency down to 3 microns with 20+ bar hydraulic burst resistance.',
    iconName: 'ShieldCheck',
    status: 'Lab Verified'
  }
];
