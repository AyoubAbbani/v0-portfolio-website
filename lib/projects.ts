export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "radar-visualization",
    title: "Radar Coverage Visualization",
    category: "Aviation Software - EUROCONTROL",
    shortDescription:
      "Advanced radar detection range visualization system with C++ Qt/QML for Air Navigation Service Providers.",
    description: [
      "Developed a comprehensive radar coverage visualization system as part of the SASS-C software suite for EUROCONTROL & Thales. This professional project provides critical visualization capabilities for civil and military Air Navigation Service Providers (ANSPs).",
      "The visualization system features advanced radar detection range computations including Line of Sight (LoS), Visibility, and horizon calculations. These computations enable accurate modeling of radar coverage areas, which is essential for air traffic management and planning.",
      "Implemented using C++ with Qt 5.15/QML for the frontend, the system delivers high-performance graphics rendering while maintaining a responsive user interface. The backend algorithms process complex geographical and atmospheric data to generate accurate radar coverage models.",
    ],
    features: [
      "Interactive 3D visualization of radar coverage areas",
      "Advanced detection range computations (LoS, Visibility, horizon)",
      "Support for multiple radar types (PSR/SSR, ADS-B, MLAT)",
      "High-performance rendering of complex geographical data",
      "Integration with existing SASS-C software suite",
      "User-configurable visualization parameters",
    ],
    technologies: ["C++17", "Qt5", "QML", "TDD", "OOP/D", "GTest", "CMake", "Linux"],
    coverImage: "/project-placeholder.png",
    thumbnailImage: "/project-placeholder.png",
    gallery: [
      { url: "/project-placeholder.png", caption: "Radar Coverage Visualization" },
      { url: "/project-placeholder.png", caption: "Detection Range Analysis" },
      { url: "/project-placeholder.png", caption: "Multi-Radar Integration" },
      { url: "/project-placeholder.png", caption: "Geographical Overlay" },
    ],
    client: "EUROCONTROL & Thales",
    timeline: "6 months (2023-2024)",
    role: "C++ Software Engineer",
    githubUrl: "https://github.com/AyoubAbbani",
    relatedProjects: [
      {
        slug: "trajectory-reconstruction",
        title: "Aircraft Trajectory Reconstruction",
        category: "Aviation Software - EUROCONTROL",
        image: "/project-placeholder.png",
      },
      {
        slug: "data-import-module",
        title: "EDIS Data Import System",
        category: "Web/Desktop Application - EUROCONTROL",
        image: "/project-placeholder.png",
      },
    ],
  },
  {
    id: 2,
    slug: "trajectory-reconstruction",
    title: "Aircraft Trajectory Reconstruction",
    category: "Aviation Software - EUROCONTROL",
    shortDescription: "Enhanced aircraft trajectory simulation system using Deep Learning/RNN for improved accuracy.",
    description: [
      "Developed an advanced aircraft trajectory reconstruction system as part of the VERIF 24.10 project for EUROCONTROL. This professional project significantly improves the accuracy of aircraft trajectory simulations through the implementation of Deep Learning techniques.",
      "The system utilizes Recurrent Neural Networks (RNN) to analyze historical flight data and predict aircraft trajectories with higher precision than traditional methods. The initial prototype was developed in Python to validate the approach, followed by a full implementation in C++ for production use.",
      "The trajectory reconstruction system integrates with existing radar data processing systems and provides valuable insights for air traffic management, safety analysis, and performance evaluation.",
    ],
    features: [
      "Deep Learning/RNN-based trajectory prediction",
      "High-accuracy flight path reconstruction",
      "Integration with radar data processing systems",
      "Support for various aircraft types and flight conditions",
      "Performance optimization for real-time processing",
      "Comprehensive validation against historical data",
    ],
    technologies: ["C++17", "Python", "Deep Learning", "RNN", "TDD", "CMake", "Linux"],
    coverImage: "/project-placeholder.png",
    thumbnailImage: "/project-placeholder.png",
    gallery: [
      { url: "/project-placeholder.png", caption: "Trajectory Reconstruction Interface" },
      { url: "/project-placeholder.png", caption: "Flight Path Analysis" },
      { url: "/project-placeholder.png", caption: "Prediction Accuracy Visualization" },
      { url: "/project-placeholder.png", caption: "Data Integration Dashboard" },
    ],
    client: "EUROCONTROL",
    timeline: "4 months (2023-2024)",
    role: "C++ Software Engineer",
    githubUrl: "https://github.com/AyoubAbbani",
    relatedProjects: [
      {
        slug: "radar-visualization",
        title: "Radar Coverage Visualization",
        category: "Aviation Software - EUROCONTROL",
        image: "/project-placeholder.png",
      },
      {
        slug: "data-import-module",
        title: "EDIS Data Import System",
        category: "Web/Desktop Application - EUROCONTROL",
        image: "/project-placeholder.png",
      },
    ],
  },
  {
    id: 3,
    slug: "data-import-module",
    title: "EDIS Data Import System",
    category: "Web/Desktop Application - EUROCONTROL",
    shortDescription: "Cross-platform application for managing and integrating Flight/GPS data in VERIF-DB.",
    description: [
      "Designed and implemented EDIS (Enhanced Data Import System), a comprehensive web and desktop application for managing and integrating Flight/GPS data into the VERIF-DB database system for EUROCONTROL.",
      "The application was built using a hybrid approach with Python and Flask for the backend services, and Electron for the cross-platform desktop interface. This professional project allows for flexible deployment options while maintaining a consistent user experience.",
      "EDIS streamlines the data import process, providing validation, transformation, and integration capabilities for various data formats used in aviation. The system significantly reduces the time required to prepare and import flight data for analysis and visualization.",
    ],
    features: [
      "Cross-platform support (Windows, Linux, macOS)",
      "Intuitive user interface for data import and management",
      "Automated validation and error correction",
      "Support for multiple data formats (CSV, JSON, XML, proprietary)",
      "Batch processing capabilities",
      "Integration with VERIF-DB database system",
      "User authentication and access control",
    ],
    technologies: ["Python", "Flask", "Electron", "NodeJS", "SQL", "MariaDB", "JavaScript", "HTML/CSS"],
    coverImage: "/project-placeholder.png",
    thumbnailImage: "/project-placeholder.png",
    gallery: [
      { url: "/project-placeholder.png", caption: "EDIS Main Interface" },
      { url: "/project-placeholder.png", caption: "Data Import Wizard" },
      { url: "/project-placeholder.png", caption: "Validation and Error Handling" },
      { url: "/project-placeholder.png", caption: "Database Integration" },
    ],
    client: "EUROCONTROL",
    timeline: "3 months (2024)",
    role: "Software Engineer",
    githubUrl: "https://github.com/AyoubAbbani",
    relatedProjects: [
      {
        slug: "radar-visualization",
        title: "Radar Coverage Visualization",
        category: "Aviation Software - EUROCONTROL",
        image: "/project-placeholder.png",
      },
      {
        slug: "trajectory-reconstruction",
        title: "Aircraft Trajectory Reconstruction",
        category: "Aviation Software - EUROCONTROL",
        image: "/project-placeholder.png",
      },
    ],
  },
  {
    id: 4,
    slug: "adas-hackathon",
    title: "ADAS Feature with Embedded Linux/ML",
    category: "Embedded Systems - AMSA Hackathon",
    shortDescription:
      "Award-winning ADAS prototype developed for the AMSA national hackathon using Raspberry Pi and ML.",
    description: [
      "Developed an innovative Advanced Driver Assistance System (ADAS) feature that won the national hackathon for innovative software in AI & Embedded systems organized by AMSA in 2020/21.",
      "The competition project leveraged Embedded Linux running on a Raspberry Pi 4, combined with Machine Learning algorithms to create a real-time driver assistance system that could detect and respond to road conditions, traffic signs, and potential hazards.",
      "The solution demonstrated practical applications of embedded systems and AI in automotive safety, showcasing how relatively low-cost hardware could be used to implement sophisticated driver assistance features typically found in high-end vehicles.",
    ],
    features: [
      "Real-time object detection and classification",
      "Traffic sign recognition system",
      "Lane departure warning",
      "Forward collision warning",
      "Driver attention monitoring",
      "Low-latency processing on embedded hardware",
      "Integration with vehicle systems via CAN bus",
    ],
    technologies: ["C++", "Python", "Raspberry Pi 4", "TensorFlow Lite", "OpenCV", "Linux", "CAN", "GPIO"],
    coverImage: "/project-placeholder.png",
    thumbnailImage: "/project-placeholder.png",
    gallery: [
      { url: "/project-placeholder.png", caption: "ADAS System Overview" },
      { url: "/project-placeholder.png", caption: "Object Detection Demo" },
      { url: "/project-placeholder.png", caption: "Hardware Setup" },
      { url: "/project-placeholder.png", caption: "Performance Metrics" },
    ],
    client: "AMSA Hackathon",
    timeline: "2 months (2020-2021)",
    role: "Lead Developer",
    githubUrl: "https://github.com/AyoubAbbani",
    relatedProjects: [
      {
        slug: "radar-visualization",
        title: "Radar Coverage Visualization",
        category: "Aviation Software - EUROCONTROL",
        image: "/project-placeholder.png",
      },
      {
        slug: "trajectory-reconstruction",
        title: "Aircraft Trajectory Reconstruction",
        category: "Aviation Software - EUROCONTROL",
        image: "/project-placeholder.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
