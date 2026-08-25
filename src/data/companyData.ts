import { OfficeLocation, DirectorInfo, ProductSectionDetail, QualityStep, BannerItem } from '../types';

export const COMPANY_INFO = {
  name: 'CIDAK AUTO PARTS LTD',
  tagline: 'Independent Leading Aftermarket Automotive Spare Parts Distributor',
  description: 'CIDAK AUTO PARTS LTD is an independent leading company in United Kingdom and Europe, distributing aftermarket automotive spare parts to wholesaler and distributors worldwide. The head office located in Ascot (35 minutes from Central London) with 3PL warehouse facility in UK, Slovenia and Bulgaria.',
  missionQuote: '“We aim is to offer CIDAK branded aftermarket parts at very competitive prices and premium quality. We aim to build up a strong and long-term partnership with our customers. This partnership approach allows us and our partners to continue grow together and enjoy commercial benefit for long term”.',
  warrantyHeadline: '3 Years or 60,000 KMs No Quibble Warranty',
  warrantyText: 'CIDAK offers 3 years or 60,000 kms no quibble warranty due to high standards of quality level across our entire product range.',
  pillars: [
    {
      title: 'Premium Quality',
      description: 'Manufactured to matching OE quality standards with certified ECE R90 approvals and strict quality controls at each manufacturing stage.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Competitive Price',
      description: 'Direct manufacturer-to-distributor commercial pricing structures that allow our partners to maximize their market profitability.',
      icon: 'TrendingUp'
    },
    {
      title: 'Extended Range',
      description: 'Rapidly growing catalog covering European, Asian, and American passenger and light commercial vehicle applications.',
      icon: 'Layers'
    },
    {
      title: 'High Stock Availability',
      description: 'Strategically positioned 3PL logistics and warehouse facilities in the UK, Slovenia, and Bulgaria for prompt regional dispatch.',
      icon: 'Boxes'
    },
    {
      title: 'Excellent Customer Service',
      description: 'Dedicated account managers providing flexible commercial terms, rapid order processing, and multi-lingual trade support.',
      icon: 'Headphones'
    },
    {
      title: 'Excellent Technical Support',
      description: 'In-house technical engineers, dimensional fitment assistance, cross-referencing support, and workshop advisory.',
      icon: 'Wrench'
    }
  ]
};

export const DIRECTORS: DirectorInfo[] = [
  {
    name: 'Harvinder Handa',
    role: 'Commercial Director',
    bio: 'Overseeing global business expansion, distributor network development, strategic purchasing, and commercial sales partnerships across the UK, Europe, and international aftermarket territories.',
    email: 'harvinder@cidakautoparts.com',
    phone: '+44 7931522602'
  },
  {
    name: 'Dr Sukh Handa',
    role: 'Operational Director',
    bio: 'Directing international 3PL supply chain logistics, quality homologation standards, vendor factory auditing, and European distribution hubs in the UK, Slovenia, and Bulgaria.',
    email: 'harvinder@cidakautoparts.com',
    phone: '+44 7931522602'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'head-office-ascot',
    type: 'Head Office',
    companyName: 'CIDAK AUTO PARTS LTD',
    addressLines: [
      'Craven Lodge, Coronation Road',
      'Ascot, Berkshire'
    ],
    postcode: 'HP22 5EN',
    country: 'United Kingdom',
    phone: '+44 7931522602',
    email: 'harvinder@cidakautoparts.com',
    description: 'Corporate headquarters located in Ascot, approximately 35 minutes from Central London. Central hub for commercial strategy, finance, and global distributor relations.',
    badge: 'HQ & Commercial Hub',
    coordinates: { lat: 51.4116, lng: -0.6728 }
  },
  {
    id: 'uk-office-bracknell',
    type: 'UK Office',
    companyName: 'CIDAK AUTO PARTS LTD',
    addressLines: [
      'Venture House, Downshire Way',
      'Arlington Square, Bracknell'
    ],
    postcode: 'RG12 1WA',
    country: 'United Kingdom',
    phone: '+44 7931522602',
    email: 'harvinder@cidakautoparts.com',
    description: 'UK operational and trade support office coordinating domestic logistics, customer support, and motor factor distribution across England, Scotland, Wales, and Northern Ireland.',
    badge: 'UK Trade Operations',
    coordinates: { lat: 51.4147, lng: -0.7588 }
  },
  {
    id: 'slovenia-logistics',
    type: 'Overseas Logistic Centre',
    companyName: 'CIDAK AUTO PARTS LTD',
    facilityName: '2HM Logistics',
    addressLines: [
      'Kidriceva Cesta 92',
      '4220 Skofja Loka'
    ],
    country: 'Slovenia (EU)',
    phone: '+44 7931522602',
    email: 'harvinder@cidakautoparts.com',
    description: 'Central European strategic 3PL bonded warehouse and logistics center providing rapid cross-border pallet and container freight dispatch across Central and Western Europe.',
    badge: 'Central EU 3PL Hub',
    coordinates: { lat: 46.1655, lng: 14.3063 }
  },
  {
    id: 'bulgaria-office-warehouse',
    type: 'Overseas Office & Warehouse',
    companyName: 'CIDAK AUTO PARTS LTD',
    addressLines: [
      '81 Tzar Boris III Blvd',
      'Entrance V, 6th Floor Studio 1',
      'SOFIA, 1612'
    ],
    country: 'Bulgaria (EU)',
    phone: '+44 7931522602',
    email: 'harvinder@cidakautoparts.com',
    description: 'Southeast European regional office and warehousing facility serving the Balkan and Eastern European wholesale market with direct buffer stock inventory.',
    badge: 'Balkans & Eastern EU Hub',
    coordinates: { lat: 42.6845, lng: 23.2981 }
  }
];

export const PRODUCTS_DETAILED: Record<string, ProductSectionDetail> = {
  'brake-pads': {
    id: 'brake-pads',
    name: 'Brake Pads',
    headline: 'Safe & Noise Free Braking',
    intro: 'When it comes to “Safe & Noise Free Braking” CIDAK brake pad range offers an exclusive product to automotive aftermarket with consist braking performance. The points below demonstrate, CIDAK brake pads high quality features.',
    bulletPoints: [
      'CIDAK brake pads are being designed and produced in high standards manufacturing facilities under strict quality control and standards.',
      'All CIDAK brake pads are ECE R90 (E-Marked) approved, which confirms that brake pad performance within +/- 15% of original part in term of performance tests.',
      'CIDAK unique friction material compound blends of raw material to deliver excellent braking performance. Whilst, the “ceramic material” produces premium quality brake pads, a “semi metallic” material also produces a high-quality brake pad to deliver excellent braking results.',
      'All CIDAK brake pads having RMR (Rubber Metal Rubber) shim, an “anti-noise” shim to reduce the noise level.',
      'The EPA (United States Environmental Protection Agency) took initiative to reduce Copper content in brake pad to protect the environment, CIDAK brake pads are completely “Copper Free”.',
      'Excellent braking performance has proved that CIDAK brake pads will go long-lasting with consistent performance.'
    ],
    keyHighlights: [
      {
        title: 'ECE R90 Homologated',
        description: '100% certified under ECE R90 regulations, guaranteeing stopping power strictly within ±15% of the original equipment part.'
      },
      {
        title: 'RMR Anti-Noise Shim',
        description: 'Multi-layer Rubber-Metal-Rubber damping shim vulcanized to the backing plate to eliminate squeal and brake noise vibrations.'
      },
      {
        title: 'EPA Copper-Free Matrix',
        description: 'Eco-conscious ceramic and semi-metallic friction compounds with zero copper content for environmental protection.'
      },
      {
        title: 'Long-Lasting & Consistent',
        description: 'High thermal durability formulation ensuring consistent pedal feel under extreme temperature fluctuations.'
      }
    ],
    images: [
      {
        url: '/images/hero_banner_2.jpg',
        caption: 'CIDAK ECE R90 Certified Copper-Free Ceramic Brake Pad with RMR Anti-Noise Shim',
        badge: 'Copper-Free & R90'
      },
      {
        url: '/images/hero_banner_1.jpg',
        caption: 'Precision Friction Compound Pressing and Chamfered Edge Profile',
        badge: 'OE Formulated'
      }
    ],
    specifications: [
      { label: 'Homologation Standard', value: 'ECE R90 (E-Marked) Approved' },
      { label: 'Friction Formulations', value: 'Ceramic & Semi-Metallic Blends' },
      { label: 'Acoustic Damping', value: 'RMR (Rubber-Metal-Rubber) Shim' },
      { label: 'Environmental Status', value: '100% Copper Free (EPA Compliant)' },
      { label: 'Performance Tolerance', value: 'Within ±15% of OE benchmark' },
      { label: 'Warranty', value: '3 Years / 60,000 kms No Quibble' }
    ]
  },

  'brake-discs': {
    id: 'brake-discs',
    name: 'Brake Discs',
    headline: 'Excellent Braking & Corrosion-Resistant Silver Coating',
    intro: 'When it comes to “Excellent Braking” CIDAK brake disc range offers an exclusive product to automotive aftermarket with consist braking performance. The points below demonstrate, CIDAK brake discs high quality features.',
    bulletPoints: [
      'CIDAK brake discs are being designed and produced in high standards manufacturing facilities under strict quality controls.',
      'High quality standards are maintained whilst selection of raw material, melting iron, casting in a foundry, and machining at CNC (computer numeric controlled) machines.',
      'All CIDAK brake discs are having unique “silver coating” to protect from corrosion and give a stunning appearance, at the same time easy to fit in a vehicle as it doesn’t need to remove dirt/oil from discs surface.',
      'All CIDAK brake discs are ECE R90 (E-Marked) approved, which confirms that brake pad performance within +/- 15% of original part in term of performance tests.'
    ],
    keyHighlights: [
      {
        title: 'Unique Protective Silver Coating',
        description: 'Advanced anti-corrosion silver shield protects the entire hub and vanes. Ready to fit immediately without cleaning off transport oil.'
      },
      {
        title: 'Precision Foundry & CNC Machining',
        description: 'Strict metallurgical iron casting and computerized numeric controlled machining for zero disc thickness variation (DTV).'
      },
      {
        title: 'ECE R90 Certified Safety',
        description: 'Fully compliant with European ECE R90 brake disc regulations for consistent high-friction thermal dissipation.'
      },
      {
        title: 'Dynamic Balancing',
        description: 'Individually precision balanced to eliminate high-speed steering wobble and brake judder.'
      }
    ],
    images: [
      {
        url: '/images/hero_banner_1.jpg',
        caption: 'CIDAK Ventilated Brake Disc with Anti-Corrosion Silver Shield Coating',
        badge: 'Silver Coated'
      },
      {
        url: '/images/hero_banner_2.jpg',
        caption: 'High-Carbon Casting & CNC Precision Micro-Finishing',
        badge: 'CNC Machined'
      }
    ],
    specifications: [
      { label: 'Surface Protection', value: 'Full Protective Silver Coating' },
      { label: 'Fitment Convenience', value: 'Ready to fit — no oil/dirt removal needed' },
      { label: 'Manufacturing Process', value: 'Foundry Casting + High-Precision CNC' },
      { label: 'Homologation Standard', value: 'ECE R90 (E-Marked) Approved' },
      { label: 'Dynamic Balance Tolerance', value: '< 0.03mm (Zero Judder)' },
      { label: 'Warranty', value: '3 Years / 60,000 kms No Quibble' }
    ]
  },

  'filters': {
    id: 'filters',
    name: 'Filters (Air, Oil, Fuel, Cabin & Carbon)',
    headline: 'High Quality Filter Media Close to Original Part Standards',
    intro: 'High quality of filtration is essential for vehicle which needs a high quality of filter media. CIDAK filters are being manufacture with standards close to original part. The range covers Air, Oil, Fuel, Cabin. Carbon Filters.',
    bulletPoints: [
      'All CIDAK filters being manufactures with high quality filter media. These media have capability to deliver excellent filtration results.',
      'The Air filter is design to have a sufficient pleat to conduct proper filtration and to fit securely in filtration housing.',
      'The Oil filter is vital component to feed dirt free oil to engine. The range covers metal type and ecological filters. All parts conducted pressure test to demonstrate the efficient filtration.',
      'The Fuel filters is also a vital component to remove impurities and dirt from fuel and feed clean fuel to engine to avoid damage engine. All parts are designed and manufactured as per high standard to deliver such results.',
      'The Cabin and Carbon filters are being manufactured with high quality paper media to provide a fresh and clean air to cabin.'
    ],
    keyHighlights: [
      {
        title: 'High-Grade Filter Media',
        description: 'Engineered synthetic, cellulose, and bio-carbon media delivering superior particulate capture and long service life.'
      },
      {
        title: '100% Pressure-Tested Oil Filters',
        description: 'Metal canister and eco-cartridge oil filters rigorously pressure tested to ensure reliable hydraulic integrity.'
      },
      {
        title: 'High-Pressure Fuel Protection',
        description: 'Removes micro-particles, rust, and water moisture to protect sensitive common-rail fuel injectors and pumps.'
      },
      {
        title: 'Air & Cabin Bio-Purity',
        description: 'Optimized pleat count for maximum airflow and activated carbon layers to neutralize hazardous airborne allergens and odors.'
      }
    ],
    subFilters: [
      {
        name: 'Air Filters',
        description: 'Designed with sufficient, stabilized pleat geometry to ensure complete air filtration and airtight seating in the vehicle intake housing.',
        image: '/images/air_filter.jpg',
        highlights: ['Sufficient pleat count', 'Air intake housing secure seal', 'Maximizes engine performance']
      },
      {
        name: 'Oil Filters',
        description: 'Vital component feeding dirt-free oil to the engine. The range covers heavy-duty metal spin-on canisters and ecological cartridge filters, all 100% pressure-tested.',
        image: '/images/oil_filter.jpg',
        highlights: ['Metal spin-on & eco-cartridges', 'Hydraulic burst pressure tested', 'Anti-drainback silicone valve']
      },
      {
        name: 'Fuel Filters',
        description: 'Critical line of defense to remove impurities, dirt, and water from fuel before reaching the engine, safeguarding against severe engine and injector damage.',
        image: '/images/fuel_filter.jpg',
        highlights: ['Micro-impurity removal', 'Protects high-pressure injectors', 'High flow rate stability']
      },
      {
        name: 'Cabin & Carbon Filters',
        description: 'Manufactured with premium particulate paper media and activated coconut carbon to trap dust, pollen, and toxic fumes for fresh, clean cabin air.',
        image: '/images/cabin_filter.jpg',
        highlights: ['Activated carbon odor barrier', 'Pollen & PM2.5 capture', 'Healthy vehicle interior climate']
      }
    ],
    images: [
      {
        url: '/images/air_filter.jpg',
        caption: 'CIDAK High-Efficiency Pleated Engine Air Filter',
        badge: 'Air Filter'
      },
      {
        url: '/images/oil_filter.jpg',
        caption: 'CIDAK Heavy-Duty Pressure-Tested Spin-On & Eco Oil Filters',
        badge: 'Oil Filter'
      },
      {
        url: '/images/fuel_filter.jpg',
        caption: 'CIDAK High-Precision Inline & In-Tank Fuel Filter',
        badge: 'Fuel Filter'
      },
      {
        url: '/images/cabin_filter.jpg',
        caption: 'CIDAK Bio-Functional Activated Carbon Cabin Filter',
        badge: 'Cabin & Carbon'
      }
    ]
  },

  'steering-suspension': {
    id: 'steering-suspension',
    name: 'Steering & Suspension',
    headline: 'Safety-Critical Components with Modern Robotics & CNC Precision',
    intro: 'Steering & suspension are key components for vehicle safety. CIDAK steering & suspension manufacturing partners are designing and producing parts with high standard and modern Technology. The range covers Control Arms, Ball Joint, Stabilizer Link, Bushes, Tie rods, Suspension Kits.',
    bulletPoints: [
      'The raw material of all parts being selected as per original manufactures standards and maintain the quality parameters during very manufacturing process.',
      'The modern production technology has offered a great quality to entire steering & suspension range. This includes CNC machines and robotics.',
      'All parts being tested at each stage of manufacturing for performance and reliability.',
      'All parts being painted and performed the salt spray test to avoid corrosion.'
    ],
    keyHighlights: [
      {
        title: 'OE Selected Raw Materials',
        description: 'High-tensile forged steel and lightweight aluminum alloys matching original vehicle manufacturer specifications.'
      },
      {
        title: 'Modern Robotics & CNC Technology',
        description: 'Precision automated machining tolerances ensure perfect geometric alignment and smooth ball joint articulation.'
      },
      {
        title: 'Multi-Stage Testing',
        description: 'Rigorous tensile, fatigue, torsional load, and push-out testing conducted at every phase of production.'
      },
      {
        title: 'Salt Spray Anti-Corrosion Protection',
        description: 'E-coated protective painting rigorously validated via continuous salt spray testing to prevent underbody rust.'
      }
    ],
    subSteeringComponents: [
      {
        name: 'Control Arms & Wishbones',
        description: 'Precision-welded and cast alloy suspension arms fitted with premium vulcanized rubber bushings for superior handling stability.',
        image: '/images/steering_suspension.jpg',
        standards: ['OE geometry specification', 'High-tensile forged steel/alloy', 'Anti-corrosion electrophoretic coat']
      },
      {
        name: 'Ball Joints',
        description: 'Induction-hardened ball pins with high-performance POM-polyoxymethylene ball seats and chloroprene rubber dust boots.',
        image: '/images/steering_suspension.jpg',
        standards: ['High pull-out resistance', 'Synthetic low-friction grease', 'Tear-resistant silicone boot']
      },
      {
        name: 'Stabilizer Links / Sway Bar Links',
        description: 'Reinforced linkage rods designed to prevent body roll and maintain steering stability through tight cornering.',
        image: '/images/steering_suspension.jpg',
        standards: ['Laser-welded joints', 'Zinc-plated anti-rust finish', 'High angular deflection capacity']
      },
      {
        name: 'Tie Rods & Axial Joints',
        description: 'Direct-response steering rack ends and outer tie rod ends engineered for precise toe-in adjustment and road tracking.',
        image: '/images/steering_suspension.jpg',
        standards: ['CNC thread accuracy', 'Dynamic fatigue tested', '3-year / 60,000 km warranty']
      },
      {
        name: 'Rubber-Metal Bushes',
        description: 'Natural rubber bonded bushings providing optimal NVH (noise, vibration, harshness) dampening and long service life.',
        image: '/images/steering_suspension.jpg',
        standards: ['Resists ozone & oil degradation', 'Vulcanized steel casing', 'Exact OE elasticity']
      },
      {
        name: 'Complete Suspension Kits',
        description: 'All-in-one overhaul kits including control arms, ball joints, links, and hardware for complete axle refurbishment.',
        image: '/images/steering_suspension.jpg',
        standards: ['Matched axle pairing', 'Includes fixing bolts & nuts', 'Reduces workshop repair time']
      }
    ],
    images: [
      {
        url: '/images/steering_suspension.jpg',
        caption: 'CIDAK High-Tensile Suspension Control Arm & Components Layout',
        badge: 'Steering & Suspension'
      }
    ]
  },

  'under-development': {
    id: 'under-development',
    name: 'Product Range Under Development',
    headline: 'Continuous Engineering & Product Expansion Roadmap',
    intro: 'In alignment with our strategy to deliver an extended range of premium aftermarket parts to wholesalers worldwide, CIDAK is actively developing and homologating several new product lines in partnership with certified manufacturing facilities.',
    bulletPoints: [
      'New product lines follow the exact same stringent quality controls, OE matching material selection, and multi-stage testing.',
      'All friction and safety critical systems undergo strict ECE homologation and comprehensive endurance benchmarking.',
      'Distributors and wholesalers can register early interest to access initial batch production allocations and launch discounts.'
    ],
    keyHighlights: [
      {
        title: 'Water Pumps & Cooling',
        description: 'High-flow mechanical and electric engine coolant water pumps with silicon-carbide mechanical face seals.'
      },
      {
        title: 'Clutch Kits & Slave Cylinders',
        description: 'Complete 3-piece clutch kits and concentric slave cylinders (CSC) engineered for smooth torque transmission.'
      },
      {
        title: 'Shock Absorbers & Gas Struts',
        description: 'Twin-tube nitrogen gas charged dampers with micro-smooth chrome plated piston rods.'
      },
      {
        title: 'Wheel Hub Bearing Units (Gen 1-3)',
        description: 'Integrated ABS magnetic sensor ring hub assemblies precision ground to sub-micron tolerances.'
      }
    ],
    images: [
      {
        url: '/images/under_development.jpg',
        caption: 'Engineering Prototype Testing & Laser Metrology for Upcoming CIDAK Range',
        badge: 'R&D Testing Lab'
      }
    ]
  }
};

export const QUALITY_MAP_STEPS: QualityStep[] = [
  {
    stepNumber: 1,
    stageName: 'Stage 01',
    title: 'Raw Material Selection & Spectroscopy',
    description: '100% of raw materials (cast iron, friction compounds, filter media, forged steel alloys) are inspected using chemical spectrometry and ultrasonic testing to verify metallurgy before batch release.',
    controlMeasures: ['Chemical composition analysis', 'Hardness testing (HB/HRC)', 'Tensile strength verification'],
    standard: 'ISO 9001 / DIN EN Standards',
    iconName: 'Microscope'
  },
  {
    stepNumber: 2,
    stageName: 'Stage 02',
    title: 'Foundry Casting & Automated Forming',
    description: 'Molten iron casting in automated foundry lines with computerized temperature control and precision sand-core molds to prevent internal porosity or structural defects.',
    controlMeasures: ['Thermal imaging analysis', 'Porosity ultrasonic scans', 'Grain structure metallography'],
    standard: 'Automated Foundry Protocols',
    iconName: 'Flame'
  },
  {
    stepNumber: 3,
    stageName: 'Stage 03',
    title: 'Precision CNC Machining & Robotics',
    description: 'State-of-the-art Computerized Numeric Controlled (CNC) machine centers mill, bore, and grind friction surfaces and mounting faces with sub-micron geometric tolerances.',
    controlMeasures: ['3D Coordinate Measuring (CMM)', 'Runout & DTV checks (<10μm)', 'Surface roughness testing (Ra)'],
    standard: 'Sub-Micron CNC Accuracy',
    iconName: 'Cpu'
  },
  {
    stepNumber: 4,
    stageName: 'Stage 04',
    title: 'Surface Treatment & Anti-Corrosion Coating',
    description: 'Brake discs receive our signature silver protective shield coating, while steering components undergo electrophoretic painting and continuous 240+ hour salt spray testing.',
    controlMeasures: ['Salt spray chamber testing (ASTM B117)', 'Coating thickness gauge', 'Adhesion cross-hatch test'],
    standard: '240h+ Salt Spray Protection',
    iconName: 'Sparkles'
  },
  {
    stepNumber: 5,
    stageName: 'Stage 05',
    title: 'ECE R90 & Laboratory Performance Testing',
    description: 'Dynamometer test bench simulations test brake fade resistance, friction coefficient stability, filter burst pressure, and suspension fatigue loads under extreme road conditions.',
    controlMeasures: ['ECE R90-02 Homologation', 'Dyno brake fade simulations', 'Oil filter burst pressure tests'],
    standard: 'ECE R90 / ISO 5011 / ISO 4548',
    iconName: 'CheckCircle2'
  },
  {
    stepNumber: 6,
    stageName: 'Stage 06',
    title: 'Final Quality Gate & Warehouse Logistics',
    description: 'Laser batch marking with traceability codes, barcode labeling, security seals, and secure palletization at our UK, Slovenia, and Bulgaria warehouse distribution hubs.',
    controlMeasures: ['100% laser barcode tracking', 'Batch retention samples', 'Moisture-sealed protective packaging'],
    standard: '3 Years / 60,000 KM Warranty',
    iconName: 'PackageCheck'
  }
];

export const HERO_BANNERS: BannerItem[] = [
  {
    id: 'hero-1',
    title: 'CIDAK AUTO PARTS LTD',
    subtitle: 'Independent Leading Aftermarket Automotive Spare Parts Distributor',
    tagline: 'Delivering Premium Quality & Competitive Pricing to Wholesalers Worldwide',
    badge: 'UK & European Aftermarket Leader',
    ctaText: 'Explore Product Range',
    ctaAction: 'products',
    targetCategory: 'brake-pads',
    imageUrl: '/images/hero_banner_1.jpg',
    isLive: true,
    order: 1
  },
  {
    id: 'hero-2',
    title: 'Safe & Noise Free Braking',
    subtitle: 'ECE R90 Approved Brake Pads & Silver Coated Brake Discs',
    tagline: 'Copper-Free Ceramic Formulations with RMR Anti-Noise Shims',
    badge: '3 Years / 60,000 KM Warranty',
    ctaText: 'View Brake Range',
    ctaAction: 'products',
    targetCategory: 'brake-pads',
    imageUrl: '/images/hero_banner_2.jpg',
    isLive: true,
    order: 2
  },
  {
    id: 'hero-3',
    title: 'Strategic European Logistics Network',
    subtitle: 'Warehouses in UK, Slovenia and Bulgaria',
    tagline: 'High Stock Availability & Fast International Distribution',
    badge: 'Ascot Head Office • 3PL European Hubs',
    ctaText: 'Our Locations & Offices',
    ctaAction: 'locations',
    imageUrl: '/images/hero_banner_3.jpg',
    isLive: true,
    order: 3
  }
];
