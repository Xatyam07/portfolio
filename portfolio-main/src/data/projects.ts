import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "cyberthreatai",
    title: "CyberThreatAI",
    description:
      "An AI-powered cybersecurity platform that detects phishing websites, fake news, malicious URLs, cyber threats, and online scams using Machine Learning and Natural Language Processing. The platform provides real-time threat analysis, threat intelligence, URL scanning, fake news detection, and security recommendations to help users stay protected online.",

    techStack: [
      "Python",
      "FastAPI",
      "Machine Learning",
      "Artificial Intelligence",
      "NLP",
      "Scikit-Learn",
      "OpenCV",
      "SQLite",
      "Cybersecurity",
      "Streamlit",
    ],

    liveUrl: "https://cyberthreatai.me/",
    image: "/projects/cyberthreatai.png",
    featured: true,

    highlights: [
      {
        icon: "ShieldCheck",
        label: "AI Threat Detection",
        detail: "Detects phishing websites and malicious URLs",
      },
      {
        icon: "Brain",
        label: "Machine Learning",
        detail: "Uses AI models for cyber threat prediction",
      },
      {
        icon: "Globe",
        label: "Live Platform",
        detail: "Available online for real-time security analysis",
      },
      {
        icon: "Lock",
        label: "Cyber Security",
        detail: "Improves online safety and awareness",
      },
    ],
  },

  {
    id: "venueverse",
    title: "VenueVerse",
    description:
      "VenueVerse is a modern venue discovery, comparison and booking marketplace that helps customers find event venues, compare amenities, check availability and manage bookings while providing venue owners and administrators with powerful management and analytics tools.",

    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Firebase",
      "Cloudinary",
      "Tailwind CSS",
      "Neon",
      "Render",
      "Vercel",
    ],

    liveUrl: "https://venueverse-lime.vercel.app",
    githubUrl: "https://github.com/Xatyam07/VenueVerse",
    image: "/projects/venueverse.jpg",
    featured: true,

    highlights: [
      {
        icon: "MapPin",
        label: "Venue Discovery",
        detail: "Find venues, check amenities and availability",
      },
      {
        icon: "Users",
        label: "Multi-Role Dashboards",
        detail: "Dedicated customer, owner, and admin dashboards",
      },
      {
        icon: "Zap",
        label: "Booking Management",
        detail: "Track availability, book event spaces, manage reservations",
      },
      {
        icon: "BarChart",
        label: "Revenue Analytics",
        detail: "Deep performance and income insights for owners",
      },
    ],
  },

  {
    id: "foodbridge",
    title: "FoodBridge",
    description:
      "A food donation and distribution platform that connects restaurants, NGOs, donors, and needy individuals. The system reduces food wastage by enabling real-time food donation requests, pickup scheduling, donation tracking, location-based matching, and beneficiary management.",

    techStack: [
      "Android Studio",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "REST API",
      "JavaScript",
      "Flutter",
    ],

    image: "/projects/foodbridge.png",
    featured: false,

    highlights: [
      {
        icon: "Users",
        label: "Community Support",
        detail: "Connects donors with beneficiaries",
      },
      {
        icon: "MapPin",
        label: "Live Tracking",
        detail: "Tracks food pickup and delivery",
      },
      {
        icon: "Heart",
        label: "Reduce Food Waste",
        detail: "Helps distribute excess food efficiently",
      },
      {
        icon: "Building",
        label: "NGO Integration",
        detail: "Supports organizations and volunteers",
      },
    ],
  },

  {
    id: "speech-to-text",
    title: "Speech-to-Text System",
    description:
      "A real-time speech-to-text platform built using React, Nhost Authentication and Deepgram Speech AI. Users can securely authenticate, access protected dashboards and convert live microphone audio into text with instant transcription updates.",

    techStack: [
      "React 19",
      "JavaScript",
      "Vite",
      "Nhost",
      "Deepgram",
      "Tailwind CSS",
      "Vercel",
    ],

    githubUrl: "https://github.com/Xatyam07/Vocallab-assessment",
    liveUrl: "https://vocallab-assessment.vercel.app",
    image: "/projects/speech.png",
    featured: false,

    highlights: [
      {
        icon: "Lock",
        label: "Nhost Auth",
        detail: "Secure user authentication and session management",
      },
      {
        icon: "Mic",
        label: "Live Transcription",
        detail: "Real-time speech-to-text translation using Deepgram",
      },
      {
        icon: "Activity",
        label: "WebSockets",
        detail: "Instant audio streaming and transcription updates",
      },
      {
        icon: "Zap",
        label: "Vite & React",
        detail: "Fast, responsive dashboard built with React 19",
      },
    ],
  },
];