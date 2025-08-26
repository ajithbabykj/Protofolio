// Mock data for Ajith Baby's Portfolio
export const personalInfo = {
  name: "Ajith Baby",
  title: "Mechatronics Engineer",
  tagline: "Leading Innovation & Technology | Mastermind of Precision Engineering",
  email: "ajithbabykj@gmail.com",
  phone: "+91 9489 137711",
  location: "Bangalore, India",
  linkedin: "linkedin.com/in/ajithbaby",
  availabilityStatus: "Available for groundbreaking high-tech ventures",
  profileSummary: "Visionary Mechatronics Engineer with 10+ years of pioneering expertise in architecting revolutionary systems across Defense & Aerospace, Consumer Technology, and Industrial Automation. Master of AI-driven solutions and next-generation automation technologies. Proven track record of transforming complex engineering challenges into breakthrough products for India's most critical sectors including DRDO, ISRO, HAL, and cutting-edge startups. Early adopter of emerging technologies with deep specialization in precision engineering, system integration, and intelligent automation solutions."
};

export const skills = {
  "Design & CAD": ["SolidWorks", "Creo", "Fusion 360", "AutoCAD", "CATIA V5"],
  "Simulation & Analysis": ["MATLAB", "FEA", "DFMA", "GD&T", "Tolerance Stack-up", "Computational Modeling"],
  "Manufacturing & Testing": ["DFM/DFA", "FMEA", "Validation", "Quality Assurance", "Process Optimization", "Precision Metrology"],
  "Technologies": ["IoT Integration", "Thermal Management", "Sensor Technology", "Automation", "Robotics"],
  "Leadership": ["Project Management", "Cross-functional Leadership", "Technology Implementation", "Strategic Innovation", "R&D Direction"]
};

export const experience = [
  {
    id: 1,
    company: "Wakefit Innovations Pvt Ltd",
    role: "Mechatronics Engineer",
    location: "Bangalore, India",
    duration: "Jan 2024 - Present",
    achievements: [
      "Architected India's first AI-driven mattress temperature control ecosystem (Regul8) integrating IoT, thermal dynamics, and machine learning algorithms",
      "Pioneered revolutionary contactless sleep tracking technology (Track8) using advanced sensor fusion and AI analytics",
      "Led cross-functional innovation teams implementing Industry 4.0 principles and smart manufacturing technologies",
      "Orchestrated end-to-end product development from concept to market launch, achieving 40% faster time-to-market through AI-optimized design processes"
    ]
  },
  {
    id: 2,
    company: "Mechstore",
    role: "Senior Design Engineer",
    location: "Bangalore, India", 
    duration: "Jun 2023 - Dec 2023",
    achievements: [
      "Spearheaded development of next-generation industrial dispensing systems with integrated AI-powered precision control",
      "Implemented advanced thermal management solutions using computational fluid dynamics and machine learning optimization",
      "Delivered modular component architectures enabling 50% reduction in assembly complexity through intelligent design automation",
      "Championed sustainable engineering practices integrating AI-driven material optimization and lifecycle analysis"
    ]
  },
  {
    id: 3,
    company: "Load Master",
    role: "R&D Engineer - Defense & Aerospace Systems",
    location: "Bangalore, India",
    duration: "Nov 2017 - May 2023",
    achievements: [
      "Engineered sophisticated Wind Tunnel Balance systems (Strain Gauge Balances) for India's Defense and Aerospace sectors including DRDO (DRDL), ISRO (VSSC), HAL, NAL, and other premier research facilities - achieving unprecedented precision in aerospace testing",
      "Developed cutting-edge thrust measurement systems for ROTEX916 Sport Aircraft Engine, enabling critical performance validation for Indian aviation sector",
      "Pioneered automated torque wrench calibration systems integrating AI-driven precision control, revolutionizing maintenance protocols across defense establishments",
      "Executed comprehensive strain measurement campaigns on aircraft structures, satellite bodies, and high-voltage transmission towers, contributing to national infrastructure security",
      "Designed specialized testing equipment for Delhi Metro (BMRCL) including fatigue, static, cyclic, drop, and frequency analysis systems ensuring passenger safety standards",
      "Led ILRT (Integrated Leak Rate Testing) strain measurement projects for Nuclear Reactor containment systems, supporting India's clean energy initiatives",
      "Innovated hand-held Tensiometer systems for Indian Air Force and Navy wire rope tension validation, enhancing defense maintenance efficiency",
      "Developed precision instrumentation for Indian Railways and other critical infrastructure projects, demonstrating versatile engineering capabilities across sectors"
    ]
  },
  {
    id: 4,
    company: "Cherry Precision Products",
    role: "R&D Engineer - Precision Systems",
    location: "Coimbatore, India",
    duration: "Jul 2015 - Oct 2017",
    achievements: [
      "Conceptualized and deployed automated calibration systems integrating early-stage IoT technologies and sensor networks",
      "Pioneered control logic implementations reducing operational downtime by 40% through predictive maintenance algorithms",
      "Designed special-purpose measurement devices and testing machines serving automotive and precision manufacturing sectors",
      "Established foundation expertise in sensor technology and automation that evolved into current AI-driven solutions"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Regul8 - AI-Driven Temperature Control Ecosystem",
    description: "Revolutionary IoT-enabled mattress temperature regulation system leveraging machine learning algorithms for personalized thermal comfort. Features advanced sensor fusion, predictive temperature modeling, and energy optimization achieving 60% improved sleep quality metrics.",
    technologies: ["AI/ML Integration", "IoT Architecture", "Thermal Dynamics", "Edge Computing", "SolidWorks"],
    category: "Consumer Technology",
    status: "Market Ready",
    image: "https://customer-assets.emergentagent.com/job_tech-innovator-15/artifacts/zto4mdes_regul8_product.png"
  },
  {
    id: 2,
    title: "Track8 - Contactless Sleep Intelligence Platform",
    description: "India's pioneering non-invasive sleep monitoring ecosystem utilizing advanced sensor arrays, AI-powered sleep pattern analysis, and real-time health insights. Breakthrough technology eliminating wearable dependency while delivering clinical-grade sleep analytics.",
    technologies: ["Sensor Fusion", "AI Analytics", "Biomedical Engineering", "Data Science", "Creo"],
    category: "Healthcare Technology",
    status: "Market Ready",
    image: "https://images.unsplash.com/photo-1671459922221-be8beec5c9fa"
  },
  {
    id: 3,
    title: "6-Axis Precision Dispensing Automation System",
    description: "Next-generation robotic dispensing platform featuring dynamic mixer integration and intelligent path optimization. Engineered for aerospace-grade precision in adhesive and sealant applications with sub-millimeter accuracy and real-time quality monitoring.",
    technologies: ["Robotics", "AI-Driven Control", "Precision Engineering", "Industrial Automation", "MATLAB"],
    category: "Industrial Automation",
    status: "Deployed",
    image: "https://customer-assets.emergentagent.com/job_tech-innovator-15/artifacts/6wvsdw4u_2k_valve.png"
  },
  {
    id: 4,
    title: "Automated Torque Calibration Intelligence System - BEML",
    description: "Revolutionary automated torque wrench calibration platform integrating AI-driven precision control and predictive maintenance algorithms. Deployed across defense manufacturing facilities achieving 99.8% calibration accuracy and 70% reduced maintenance cycles.",
    technologies: ["AI Automation", "Precision Metrology", "Industrial IoT", "Predictive Analytics", "FEA"],
    category: "Defense & Aerospace",
    status: "Operational",
    image: "https://images.unsplash.com/photo-1708728428891-ce375314e569"
  },
  {
    id: 5,
    title: "Wind Tunnel Balance Systems - DRDO/ISRO/HAL",
    description: "Sophisticated strain gauge balance systems engineered for India's premier aerospace testing facilities. Enabling critical aerodynamic research for aircraft and spacecraft development with unprecedented measurement precision and reliability for national defense programs.",
    technologies: ["Aerospace Engineering", "Precision Instrumentation", "Structural Analysis", "Defense Systems"],
    category: "Defense & Aerospace",
    status: "Classified Success",
    image: "https://images.unsplash.com/photo-1752614671052-92e18f534db1"
  },
  {
    id: 6,
    title: "Digital Air Gauge - Smart Manufacturing Interface",
    description: "Intelligent precision measurement system for bore and shaft diameter analysis featuring AI-powered auto-offsetting for CNC machines. Revolutionizing manufacturing quality control through autonomous measurement protocols and real-time process optimization.",
    technologies: ["Smart Manufacturing", "AI Integration", "Precision Measurement", "Industrial IoT"],
    category: "Manufacturing Intelligence", 
    status: "Industry Standard",
    image: "https://customer-assets.emergentagent.com/job_tech-innovator-15/artifacts/xosp8r99_air_gauge.png"
  }
];

export const education = [
  {
    degree: "M.Tech in Design Engineering",
    institution: "BITS Pilani",
    duration: "Graduated: Dec 2024",
    cgpa: "7.3"
  },
  {
    degree: "B.Sc. in Mechatronics Engineering", 
    institution: "Anna University, Chennai",
    duration: "Graduated: May 2015",
    cgpa: "7.3"
  }
];