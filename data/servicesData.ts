export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  thesis: string;
  focusAreas: string[];
  outputs: string[];
  duration: string;
}

export interface EngagementSprint {
  id: string;
  number: string;
  title: string;
  duration: string;
  badge: string;
  isPopular?: boolean;
  tagline: string;
  description: string;
  idealFor: string;
  squad: string;
  deliverables: string[];
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  domain: 'brand' | 'digital' | 'spatial';
  domainLabel: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  relatedProjectSlug?: string;
}

export interface ServiceDomainGroup {
  id: 'brand' | 'digital' | 'spatial';
  label: string;
  index: string;
  description: string;
  services: ServiceDetail[];
}

export interface ServicesPageData {
  hero: {
    sectionIndex: string;
    sectionLabel: string;
    headline: string;
    headlineSub: string;
    description: string;
    stats: Array<{ label: string; value: string; description: string }>;
  };
  stages: ProcessStage[];
  sprints: EngagementSprint[];
  domainGroups: ServiceDomainGroup[];
  principles: Array<{ number: string; title: string; description: string }>;
}

export const servicesData: ServicesPageData = {
  hero: {
    sectionIndex: '02',
    sectionLabel: 'SERVICES & METHODOLOGY',
    headline: 'FROM RAW INTENT',
    headlineSub: 'TO DIGITAL REALITY.',
    description:
      'We reject agency bureaucracy, diluted handoffs, and generic templates. Chosen Creators operates as a high-precision, senior-led creative and engineering studio. We partner with visionary founders and established brands to transform conceptual friction into category-defining visual identities, bespoke digital systems, and immersive spatial worlds.',
    stats: [
      {
        label: 'EXECUTION SYSTEM',
        value: '4-STAGE',
        description: 'Predictable, milestone-driven transformation pipeline',
      },
      {
        label: 'SPRINT CYCLES',
        value: '2 — 10 WKS',
        description: 'Fixed timelines, rapid iteration, zero agency bloat',
      },
      {
        label: 'CORE DISCIPLINES',
        value: '09 FIELDS',
        description: 'End-to-end synergy from brand strategy to WebGL',
      },
      {
        label: 'SQUAD ARCHITECTURE',
        value: '100% SENIOR',
        description: 'Designers who code and strategists who ship',
      },
    ],
  },
  stages: [
    {
      id: 'understand',
      number: '01',
      title: 'UNDERSTAND & DIAGNOSE',
      subtitle: 'Ground Truth & Strategic Archaeological Audit',
      thesis:
        'Before we draw a vector or write a single line of code, we expose the underlying tension in your category and clarify what must exist.',
      focusAreas: [
        'Root-cause business & market diagnostics',
        'Competitive differentiation vector mapping',
        'Technical stack & architectural constraints audit',
        'Audience psychology & resonance profiling',
      ],
      outputs: [
        'Strategic Architecture Document',
        'Creative Intent & Scope Blueprint',
        'Core Differentiation Tenets',
      ],
      duration: 'Week 1',
    },
    {
      id: 'define',
      number: '02',
      title: 'DEFINE & VECTOR',
      subtitle: 'Conceptual Architecture & Art Direction',
      thesis:
        'We establish an unmistakable aesthetic posture and system foundation that separates your brand entirely from category noise.',
      focusAreas: [
        'Visual territory exploration & mood world creation',
        'Typographic scale & editorial hierarchy planning',
        'Design token framework (color, grid, spatial rhythm)',
        'Tone of voice & narrative positioning guidelines',
      ],
      outputs: [
        'Design Token Specification',
        'Visual Identity Core & Spatial Direction',
        'Interactive Style Prototypes',
      ],
      duration: 'Week 2 — 3',
    },
    {
      id: 'create',
      number: '03',
      title: 'CREATE & PROTOTYPE',
      subtitle: 'Visceral Form, Interaction & Spatial 3D',
      thesis:
        'Translating strategic intent into living interface choreography, tactile interactions, and bespoke digital artifacts in high fidelity.',
      focusAreas: [
        'Comprehensive multi-page UI/UX system design',
        'Interactive 3D / WebGL scene choreography',
        'Fluid motion curves & kinetic typography systems',
        'Component state mapping & responsive stress testing',
      ],
      outputs: [
        'High-Fidelity Interactive Prototypes',
        'Complete Design System Library',
        '3D Assets & Animation Timelines',
      ],
      duration: 'Week 4 — 6',
    },
    {
      id: 'execute',
      number: '04',
      title: 'EXECUTE & HARDEN',
      subtitle: 'Production Engineering & Global Deployment',
      thesis:
        'Engineering with uncompromising standards: sub-second latency, accessible DOM structure, hardened security, and rock-solid deployment.',
      focusAreas: [
        'Modern Next.js & React full-stack implementation',
        'Three.js / WebGL performance optimization (60 FPS)',
        'Headless CMS integration & structured data modeling',
        'Cross-browser QA, Lighthouse 100 tuning & Edge CDN setup',
      ],
      outputs: [
        'Production-Hardened Codebase',
        'Global Edge Vercel Deployment',
        'Comprehensive Architecture Handover & Training',
      ],
      duration: 'Week 7 — 10',
    },
  ],
  sprints: [
    {
      id: 'studio-sprint',
      number: '01',
      title: 'THE STUDIO SPRINT',
      duration: '2 — 4 WEEKS',
      badge: 'RAPID VELOCITY',
      isPopular: false,
      tagline: 'Rapid brand launch or high-impact digital showcase for fast-moving founders.',
      description:
        'Designed for seed-stage startups, product unveilings, or brand refreshes that need world-class aesthetic authority on an aggressive timeline without compromising precision.',
      idealFor: 'Early-stage tech founders, product launches, event showcases, brand refreshes.',
      squad: '1 Senior Art Director + 1 Lead Creative Technologist',
      deliverables: [
        'Visual identity framework & typography rules',
        'High-performance Next.js flagship landing page',
        'Custom interactive micro-interactions & motion',
        'Mobile-first responsive optimization',
        'Global Vercel Edge deployment & analytics setup',
      ],
    },
    {
      id: 'flagship-transformation',
      number: '02',
      title: 'FLAGSHIP TRANSFORMATION',
      duration: '6 — 10 WEEKS',
      badge: 'MOST POPULAR',
      isPopular: true,
      tagline: 'End-to-end category-defining brand identity, digital ecosystem, and custom 3D.',
      description:
        'Our signature comprehensive engagement. We rebuild your brand perception from the ground up: complete visual identity system, multi-page bespoke web architecture, 3D spatial scenes, and headless CMS.',
      idealFor: 'Scale-ups, established luxury brands, digital products redefining their sector.',
      squad: '1 Design Director + 1 Lead Full-Stack Architect + 1 3D/Motion Specialist',
      deliverables: [
        'Full brand strategy & comprehensive identity guidelines',
        'Multi-page bespoke Next.js 14 web platform',
        'Custom 3D / WebGL spatial models and shader scenes',
        'Content management system (Sanity / Headless CMS)',
        'Kinetic motion design system & video assets',
        'Performance optimization (100 Lighthouse benchmark)',
      ],
    },
    {
      id: 'embedded-partnership',
      number: '03',
      title: 'EMBEDDED PARTNERSHIP',
      duration: 'MONTHLY RETAINER',
      badge: 'FRACTIONAL STUDIO',
      isPopular: false,
      tagline: 'Continuous senior design direction and high-velocity engineering on demand.',
      description:
        'An agile fractional creative squad plugged directly into your team. We act as your external Head of Design and Principal Creative Technologist, iterating on new features, brand collateral, and experimental R&D.',
      idealFor: 'Venture-backed companies, scaling platforms, agencies needing elite firepower.',
      squad: 'Dedicated Fractional Senior Studio Squad (Dedicated allocation)',
      deliverables: [
        'Ongoing product UI/UX sprints and feature design',
        'Continuous frontend development and feature shipping',
        'Creative technology R&D (AI integrations, 3D, WebGL)',
        'Marketing assets, investor decks & motion collateral',
        'Bi-weekly release cycles with real-time Slack/Discord sync',
      ],
    },
  ],
  domainGroups: [
    {
      id: 'brand',
      index: '01',
      label: 'BRAND ARCHITECTURE & STRATEGY',
      description:
        'Establishing the intellectual and visual bedrock that gives your organization undeniable cultural gravity.',
      services: [
        {
          id: 'brand-strategy',
          number: '01',
          title: 'Brand Strategy & Positioning',
          domain: 'brand',
          domainLabel: 'POSITION & PURPOSE',
          tagline: 'Clarifying the position, purpose, and unmistakable vector behind your brand.',
          description:
            'We conduct rigorous market archaeology to uncover the white space in your industry. Through sharp diagnostic workshops, we crystallize your brand thesis, narrative architecture, and value proposition so every piece of communication speaks with singular authority.',
          deliverables: [
            'Market archeology & competitive territory mapping',
            'Brand thesis, vision, and core philosophical tenets',
            'Tone of voice & editorial messaging framework',
            'Naming conventions & product nomenclature hierarchy',
            'Target audience resonance profiles & personas',
          ],
          technologies: ['Strategic Diagnostic', 'Narrative Framework', 'Positioning Matrix'],
          relatedProjectSlug: 'sample-brand-system',
        },
        {
          id: 'visual-identity',
          number: '02',
          title: 'Visual Identity Systems',
          domain: 'brand',
          domainLabel: 'SYSTEM & CHARACTER',
          tagline: 'Forging a distinct, coherent visual language that commands immediate recognition.',
          description:
            'A brand is an operating system, not just a logo. We craft comprehensive visual frameworks—including bespoke mark design, typographic scales, harmonious color systems, grid rules, and tactile stationery—engineered to scale effortlessly across physical and digital environments.',
          deliverables: [
            'Primary logo, logomark & dynamic responsive lockups',
            'Curated typography hierarchy & font licensing guide',
            'Cohesive chromatic palette (light, dark & atmospheric)',
            'Comprehensive 60+ page brand guidelines manual',
            'Design token system for seamless design-to-code sync',
            'Physical stationery & digital collateral templates',
          ],
          technologies: ['Figma', 'Illustrator', 'Design Tokens', 'Vector Architecture'],
          relatedProjectSlug: 'sample-brand-system',
        },
        {
          id: 'creative-direction',
          number: '05',
          title: 'Creative Direction & Campaign Vision',
          domain: 'brand',
          domainLabel: 'VISION & ALIGNMENT',
          tagline: 'Harmonizing visual, conceptual, and sensory touchpoints into a unified reality.',
          description:
            'We provide relentless artistic governance across all brand touchpoints. From campaign lookbooks and digital product photography to cross-platform experiential stunts, we ensure that every artifact meets our uncompromising standard of luxury, restraint, and relevance.',
          deliverables: [
            'Campaign concept development & mood orchestration',
            'Art direction for photography, video, and CGI',
            'Styling guides & visual tone benchmarks',
            'Cross-channel launch choreography & rollouts',
            'Creative quality assurance across all vendor partners',
          ],
          technologies: ['Art Direction', 'Visual Governance', 'Campaign Architecture'],
          relatedProjectSlug: 'sample-visual-world',
        },
      ],
    },
    {
      id: 'digital',
      index: '02',
      label: 'DIGITAL SYSTEMS & CREATIVE ENGINEERING',
      description:
        'Architecting high-performance web platforms where architectural beauty meets uncompromising engineering rigor.',
      services: [
        {
          id: 'web-design',
          number: '03',
          title: 'Web Design & Interaction (UI/UX)',
          domain: 'digital',
          domainLabel: 'INTERACTION & UI',
          tagline: 'Designing digital environments with clarity, character, and fluid interaction.',
          description:
            'We architect user experiences that captivate on first touch and remain intuitive across thousands of visits. Every layout, responsive transition, and micro-interaction is intentionally designed to heighten perception, communicate complex concepts effortlessly, and drive decisive conversion.',
          deliverables: [
            'Information architecture & user journey mapping',
            'Wireframing & rapid low-fidelity flow testing',
            'High-fidelity interactive UI designs across all breakpoints',
            'Custom micro-interaction and physics choreography',
            'Comprehensive component design library in Figma',
            'Accessibility (WCAG AA) compliance verification',
          ],
          technologies: ['Figma', 'Protopie', 'Design Systems', 'Micro-Interactions'],
          relatedProjectSlug: 'sample-digital-experience',
        },
        {
          id: 'web-development',
          number: '04',
          title: 'Full-Stack Web Engineering',
          domain: 'digital',
          domainLabel: 'ENGINEERING & CODE',
          tagline: 'Turning considered design into blazing-fast, robust, and accessible digital code.',
          description:
            'We write clean, modular, production-ready TypeScript. Utilizing modern frameworks like Next.js 14, Tailwind CSS, and edge infrastructure, we build websites that load instantaneously, boast perfect 100 Lighthouse performance metrics, and remain simple for your internal team to maintain.',
          deliverables: [
            'Full-stack Next.js 14 (App Router) & React 18 codebase',
            'Type-safe TypeScript & modern CSS architecture',
            'Headless CMS integration (Sanity, Strapi, or Contentful)',
            'API integrations, serverless functions & webhooks',
            'Sub-second TTFB performance & automated SEO schema',
            'Edge caching, CI/CD pipeline & automated deployment',
          ],
          technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Headless CMS'],
          relatedProjectSlug: 'sample-digital-experience',
        },
        {
          id: 'ai-experiences',
          number: '09',
          title: 'AI Experiences & Emerging Tech',
          domain: 'digital',
          domainLabel: 'INTELLIGENCE & R&D',
          tagline: 'Building intelligent, generative, and responsive ways for humans to interact with software.',
          description:
            'We bridge the gap between speculative AI research and tangible brand products. Whether building custom conversational interfaces, real-time generative visual canvasses, or algorithmic design workflows, we harness modern machine intelligence to create unforgettable user moments.',
          deliverables: [
            'Custom LLM interface design & prompt engineering pipelines',
            'Real-time generative visual canvases and shaders',
            'Intelligent search & semantic retrieval tools',
            'Automated content workflow prototypes',
            'Creative technology proof-of-concepts & sandbox demos',
          ],
          technologies: ['OpenAI API', 'LangChain', 'Vector Search', 'WebGPU', 'Generative UI'],
          relatedProjectSlug: 'sample-experimental-prototype',
        },
      ],
    },
    {
      id: 'spatial',
      index: '03',
      label: 'SPATIAL, MOTION & CONTENT PRODUCTION',
      description:
        'Expanding brand expression beyond flat screens through kinetic motion, WebGL 3D, and cinematic storytelling.',
      services: [
        {
          id: 'motion',
          number: '06',
          title: 'Motion Design & Kinetic Systems',
          domain: 'spatial',
          domainLabel: 'TIMING & EXPRESSION',
          tagline: 'Using movement, pacing, and kinetic rhythm to give static ideas living energy.',
          description:
            'Motion is the pulse of modern digital identity. We develop comprehensive motion design systems that define how a brand behaves across states—from subtle UI easing and magnetic hover cues to dynamic brand reveal films and kinetic typography reels.',
          deliverables: [
            'Brand motion identity principles & easing curve specs',
            'Kinetic typography animations & interface transitions',
            'Lottie & SVG vector micro-animations',
            'Social launch teaser animations & sizzle reels',
            'Interactive CSS & Framer Motion animation code snippets',
          ],
          technologies: ['After Effects', 'Framer Motion', 'Lottie', 'Cavalry', 'GLSL Transitions'],
          relatedProjectSlug: 'sample-visual-world',
        },
        {
          id: '3d',
          number: '07',
          title: '3D & Spatial WebGL Environments',
          domain: 'spatial',
          domainLabel: 'SPATIAL & FORM',
          tagline: 'Creating tactile spatial forms and interactive 3D experiences right in the browser.',
          description:
            'We liberate websites from flat two-dimensional grids. By crafting custom 3D models, shaders, and lighting setups optimized for Three.js and React Three Fiber, we build interactive spatial hero environments that respond dynamically to scroll and cursor movement at a silky 60 FPS.',
          deliverables: [
            'Custom 3D model modeling, texturing & GLTF/GLB optimization',
            'Interactive Three.js & React Three Fiber web canvas scenes',
            'Custom GLSL shaders (lighting, atmospheric glow, refraction)',
            'Camera movement choreographies tied to scroll physics',
            'Fallback rendering states for low-powered mobile devices',
          ],
          technologies: ['Three.js', 'React Three Fiber', 'Blender', 'GLSL', 'Drei'],
          relatedProjectSlug: 'sample-visual-world',
        },
        {
          id: 'film-content',
          number: '08',
          title: 'Film & Editorial Content Production',
          domain: 'spatial',
          domainLabel: 'STORY & ATMOSPHERE',
          tagline: 'Producing visual content that communicates with cinematic atmosphere and intent.',
          description:
            'We direct and produce high-end short-form video, digital lookbooks, and campaign trailers. Every frame is graded and edited to immerse viewers into the universe of your brand, establishing emotional resonance that static copy alone cannot achieve.',
          deliverables: [
            'Storyboarding, treatment development & scriptwriting',
            'Cinematic digital production & editorial direction',
            'Color grading (DaVinci Resolve) & high-end post-production',
            'Sound design & bespoke acoustic atmospheres',
            'Multi-ratio video exports optimized for web and social channels',
          ],
          technologies: ['DaVinci Resolve', 'Premiere Pro', 'Sound Design', 'Cinematography'],
          relatedProjectSlug: 'sample-visual-world',
        },
      ],
    },
  ],
  principles: [
    {
      number: '01',
      title: 'Zero Agency Bloat',
      description:
        'You work directly with the senior strategists, designers, and engineers executing the work. No account managers playing telephone. No junior delegating.',
    },
    {
      number: '02',
      title: 'Fixed Timeframes & Scope Clarity',
      description:
        'Every project runs on fixed sprint cadences with unambiguous milestones. We do not bill open-ended hourly fees or let timelines drift.',
    },
    {
      number: '03',
      title: 'Designers Who Code',
      description:
        'Our designers understand engineering constraints; our engineers possess refined aesthetic taste. This eliminates friction and preserves design fidelity in production.',
    },
    {
      number: '04',
      title: 'Full Intellectual Property Ownership',
      description:
        'Upon final delivery and milestone completion, 100% of all code, assets, design files, 3D models, and source material belong entirely to you.',
    },
  ],
};

export default servicesData;
