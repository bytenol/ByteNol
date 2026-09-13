export interface Course {
  slug: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  price: string;
  level: string;
  technologies: string[];
  outcomes: string[];
}

export const courses: Course[] = [
  {
    slug: "frontend-web-development",
    title: "Frontend Web Development",
    description:
      "Build responsive, interactive interfaces with modern JavaScript and component-based frameworks.",
    duration: "10 weeks",
    format: "Self-paced, weekly live Q&A",
    price: "$249",
    level: "Beginner to Intermediate",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],
    outcomes: [
      "Structure and style production-ready user interfaces",
      "Manage component state and data flow in React",
      "Consume REST and GraphQL APIs from the client",
      "Optimize for performance, responsiveness, and accessibility",
    ],
  },
  {
    slug: "backend-web-development",
    title: "Backend Web Development",
    description:
      "Design APIs, databases, and server logic that stay reliable as traffic and data grow.",
    duration: "12 weeks",
    format: "Self-paced, weekly live Q&A",
    price: "$299",
    level: "Intermediate",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    outcomes: [
      "Design relational schemas and write efficient queries",
      "Build authenticated, versioned REST APIs",
      "Cache, queue, and rate-limit for real traffic",
      "Containerize and deploy a backend service",
    ],
  },
  {
    slug: "fullstack-web-development",
    title: "Full Stack Web Development",
    description:
      "Combine frontend and backend skills to ship complete products end to end, not just isolated exercises.",
    duration: "20 weeks",
    format: "Cohort-based, live sessions",
    price: "$499",
    level: "Beginner to Advanced",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    outcomes: [
      "Architect a product across client, server, and database",
      "Handle auth, payments, and background jobs",
      "Write tests that catch regressions before users do",
      "Deploy and monitor a live application on AWS",
    ],
  },
  {
    slug: "desktop-app-development",
    title: "Desktop App Development",
    description:
      "Build cross-platform desktop applications with native performance and a polished UI layer.",
    duration: "10 weeks",
    format: "Self-paced, weekly live Q&A",
    price: "$279",
    level: "Intermediate",
    technologies: ["C++", "Qt", "SQLite", "CMake"],
    outcomes: [
      "Structure a maintainable C++ desktop codebase",
      "Build native UI with Qt widgets and layouts",
      "Persist application data locally with SQLite",
      "Package and ship builds for Windows, macOS, and Linux",
    ],
  },
  {
    slug: "reverse-engineering",
    title: "Reverse Engineering",
    description:
      "Analyze compiled binaries and understand how software behaves when the source isn't available.",
    duration: "8 weeks",
    format: "Self-paced, weekly live Q&A",
    price: "$349",
    level: "Advanced",
    technologies: ["Assembly", "Ghidra", "x86/x64", "C"],
    outcomes: [
      "Read and annotate disassembled x86/x64 code",
      "Trace program logic through a debugger",
      "Identify common obfuscation and protection patterns",
      "Document findings in a clear technical report",
    ],
  },
  {
    slug: "automation-and-robotics",
    title: "Automation & Robotics",
    description:
      "Program sensors, actuators, and automated pipelines that operate reliably in the real world.",
    duration: "14 weeks",
    format: "Cohort-based, live sessions",
    price: "$329",
    level: "Intermediate",
    technologies: ["Python", "ROS", "Arduino", "OpenCV"],
    outcomes: [
      "Read sensor input and drive actuators from code",
      "Build a basic perception pipeline with OpenCV",
      "Coordinate nodes and messages in ROS",
      "Automate a repeatable end-to-end task on hardware",
    ],
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    description:
      "Design and ship native Android apps, from first prototype to a listed Play Store release.",
    duration: "10 weeks",
    format: "Self-paced, weekly live Q&A",
    price: "$259",
    level: "Beginner to Intermediate",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
    outcomes: [
      "Build UI declaratively with Jetpack Compose",
      "Manage app state and navigation",
      "Store and sync data with Firebase",
      "Prepare a release build for the Play Store",
    ],
  },
];