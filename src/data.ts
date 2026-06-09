import { Project, GalleryItem, StatItem, FAQItem } from "./types";

export const HERO_CONTENT = {
  organizationName: "InAmigos Foundation",
  tagline: "Inspiring Hope, Empowering Lives",
  missionStatement: "We are committed to bridging social inequalities through quality education, rural welfare, active community support, and empowering youth leaders for a brighter, more sustainable tomorrow.",
  imageHero: "/images/ngo_hero_kids.png",
};

export const ABOUT_CONTENT = {
  introTitle: "Who We Are",
  introParagraph1: "InAmigos Foundation is a non-governmental organization (NGO) driven by a relentless passion to foster positive and sustainable social change. Founded with the conviction that collective action and empathy can solve humanity's greatest hurdles, we serve as a beacon of support for marginalized communities.",
  introParagraph2: "By operating on the ground with immediate assistance and structural, long-term programs, we empower individuals to walk on the path of independence. From rural education classrooms to disaster response efforts, our dedicated team of volunteers and change-makers ensures that no one is left behind.",
  mission: {
    title: "Our Mission",
    description: "To design and execute community-first programs focusing on structured education support, direct welfare provision, youth vocational training, and proactive healthcare awareness to spark long-lasting social equity.",
  },
  vision: {
    title: "Our Vision",
    description: "An inclusive, healthy, and self-sufficient society where every child gets access to quality learning, every youth possesses viable skills to thrive, and all communities live with dignity and equal opportunity.",
  },
  coreValues: [
    { title: "Compassion", desc: "Placing human empathy and love at the focal point of every decision and action." },
    { title: "Transparency", desc: "Maintaining complete accountability and open trust with our donors, partners, and the communities we serve." },
    { title: "Innovation", desc: "Leveraging simple, scalable, and creative ground methods to tackle age-old systemic problems." },
    { title: "Collaboration", desc: "Believing that true social transformation occurs when we combine efforts as 'Amigos' (Friends) of society." },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj-vidya",
    title: "Project Vidya (Education Support)",
    category: "Education",
    description: "Our flagship education module provides digital learning infrastructure, student smart labs, direct school supplies, and scholarship support to kids across 15 government school zones. We believe that empowering kids with learning is the ultimate catalyst to lift families out of generational adversity.",
    shortDescription: "Providing books, smart-classroom setups, and direct scholarships to rural children.",
    image: "/images/children_learning.png",
    progress: 82,
    target: "₹4,50,000",
    raised: "₹3,69,000",
    unit: "600+ Children Educated",
    icon: "BookOpen"
  },
  {
    id: "proj-sahayata",
    title: "Project Sahayata (Community Welfare)",
    category: "Welfare",
    description: "Focuses on providing essential food parcels, warm clothing drives, clean water solutions, and hygiene kits during critical seasonal turns or environmental displacements. We construct direct supply drops to resource-scarce colonies and elderly care quarters.",
    shortDescription: "Delivering essential nutrition packs, hygiene kits, and medical support directly to marginalized areas.",
    image: "/images/community_welfare.png",
    progress: 68,
    target: "₹3,00,000",
    raised: "₹2,04,000",
    unit: "1,200+ Families Nourished",
    icon: "HeartHandshake"
  },
  {
    id: "proj-yuva",
    title: "Project Yuva (Youth Empowerment)",
    category: "Youth Support",
    description: "Engages underemployed youth with professional software literacy courses, career transition prep, basic business communication, and hardware apprenticeship connections, laying down actual vocational roadmaps of career self-reliance.",
    shortDescription: "Empowering young minds with professional digital skills, skill bootcamps, and career mentorship.",
    image: "/images/youth_planting.png",
    progress: 75,
    target: "₹2,50,000",
    raised: "₹1,87,500",
    unit: "350+ Youth Mentored",
    icon: "Rocket"
  },
  {
    id: "proj-jagrukta",
    title: "Project Jagrukta (Awareness Drives)",
    category: "Awareness",
    description: "Spreading public awareness regarding physical hygiene, garbage processing, mental health normalization, and child rights advocacy. We coordinate street theaters, wall art murals, and interactive high school symposiums.",
    shortDescription: "Driving sanitation campaigns, waste management, and youth mental health dialogue.",
    image: "/images/awareness_drive.png",
    progress: 90,
    target: "₹1,50,000",
    raised: "₹1,35,000",
    unit: "45+ Awareness Sessions Held",
    icon: "Megaphone"
  }
];

export const STATS: StatItem[] = [
  {
    id: "stat-reached",
    value: 25000,
    suffix: "+",
    label: "People Reached",
    description: "Individuals blessed with direct food aid, diagnostic health camps, or immediate crisis supplies.",
    iconName: "Users"
  },
  {
    id: "stat-students",
    value: 1200,
    suffix: "+",
    label: "Students Adopted",
    description: "Underprivileged children receiving active digital tutoring and yearly learning resources.",
    iconName: "GraduationCap"
  },
  {
    id: "stat-volunteers",
    value: 1500,
    suffix: "+",
    label: "Active Volunteers",
    description: "Passionate college youth, industry professionals, and local guides working on the field daily.",
    iconName: "Heart"
  },
  {
    id: "stat-campaigns",
    value: 95,
    suffix: "+",
    label: "Campaigns Completed",
    description: "Independent drives including cleanups, book collections, medical assemblies, and tree plantations.",
    iconName: "Award"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Smart Lab Setup in Government School",
    category: "education",
    image: "/images/children_learning.png",
    date: "May 2026",
    location: "Rural Haryana District"
  },
  {
    id: "gal-2",
    title: "Village Relief Drive In Kutch",
    category: "welfare",
    image: "/images/community_welfare.png",
    date: "April 2026",
    location: "Kutch Border Villages"
  },
  {
    id: "gal-3",
    title: "Youth Tree Planting Drive",
    category: "youth",
    image: "/images/youth_planting.png",
    date: "June 2026",
    location: "Urban Park Sector-9"
  },
  {
    id: "gal-4",
    title: "Evening Bridge School Circle",
    category: "education",
    image: "/images/ngo_hero_kids.png",
    date: "June 2026",
    location: "Okhla Slum Quarters"
  },
  {
    id: "gal-5",
    title: "Health and Diagnostics Assembly",
    category: "welfare",
    image: "/images/health_camp.png",
    date: "May 2026",
    location: "Community Center Hall"
  },
  {
    id: "gal-6",
    title: "Hygiene and Sanitary Drive",
    category: "drives",
    image: "/images/hygiene_drive.png",
    date: "March 2026",
    location: "Sanjay Slum Colony"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where are InAmigos Foundation's primary operations located?",
    answer: "We are headquartered in Delhi, India, with field operations actively running across community center clusters in Haryana, Uttar Pradesh, Rajasthan, and Gujarat. We deploy specialized mobile teams where direct relief campaigns are initiated."
  },
  {
    id: "faq-2",
    question: "How does my contribution get utilized?",
    answer: "Transparency is our pride. Approximately 85% of each donation directly goes to procuring field materials—such as school books, learning tablets, grains, medical equipment, and camp facilities. Only 15% is spent on organizational administration, logistics, and volunteer coordinates. We publish audited financial accounts on a quarterly basis."
  },
  {
    id: "faq-3",
    question: "Can I volunteer from outside India?",
    answer: "Yes, absolutely! We run dynamic 'Amigos Digital Support' initiatives where international volunteers can assist us server-side with digital curation, creative content writing, online language mentoring, graphic branding, and strategic advisory campaigns."
  },
  {
    id: "faq-4",
    question: "Are donations tax-exempt?",
    answer: "Yes, all processed donations made directly through InAmigos Foundation are eligible for statutory tax exemptions under national NGO exemptions (such as Section 80G in India). You'll receive a detailed fiscal receipt and a certificate of donation with your email."
  }
];
