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
    featured: true,

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
    id: "speech-sentiment-detection",
    title: "Speech Sentiment Detection System",
    description:
      "An AI-based speech sentiment analysis system that converts speech into text and identifies emotions such as positive, negative, neutral, angry, happy, and sad. The system uses speech recognition, natural language processing, and machine learning models for accurate sentiment classification and analytics.",

    techStack: [
      "Python",
      "Speech Recognition",
      "Machine Learning",
      "NLP",
      "TensorFlow",
      "Scikit-Learn",
      "Librosa",
      "Deep Learning",
    ],

    image: "/projects/speech-sentiment.png",
    featured: true,

    highlights: [
      {
        icon: "Mic",
        label: "Speech Recognition",
        detail: "Converts speech into text in real time",
      },
      {
        icon: "Brain",
        label: "Emotion Analysis",
        detail: "Detects sentiment from spoken language",
      },
      {
        icon: "Activity",
        label: "AI Powered",
        detail: "Uses machine learning classification models",
      },
      {
        icon: "BarChart",
        label: "Analytics",
        detail: "Generates sentiment insights and reports",
      },
    ],
  },

  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description:
      "An innovative project currently under development. Stay tuned for exciting updates.",

    techStack: ["In Progress"],

    image: "/projects/coming-soon-1.png",
    featured: false,
    disabled: true,
  },

  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description:
      "Another exciting project is on the way. Check back soon for future releases.",

    techStack: ["In Progress"],

    image: "/projects/coming-soon-2.png",
    featured: false,
    disabled: true,
  },
];