export interface Project {
    slug: string
    title: string
    description: string
    longDescription: string
    tags: string[]
    link: string
    icon: string
    image?: string
    isViewMore?: boolean
    features?: string[]
    techDetails?: string
    gallery?: string[]
}

export const projects: Project[] = [
    {
        slug: "dev-kid",
        title: "Dev-Kid",
        description: "A mobile app for aspiring tech professionals and career switchers who don't know where to start. DevKid provides personalized learning roadmaps, curated resources, and AI-driven guidance to help users break into the tech industry with confidence.",
        longDescription: "Dev-Kid is a comprehensive mobile application designed to bridge the gap between aspiring tech professionals and the overwhelming world of technology careers. Built with Flutter for cross-platform compatibility, it leverages OpenAI's powerful language models to provide personalized career guidance and learning paths.\n\nThe app analyzes users' backgrounds, interests, and goals to generate customized roadmaps that break down complex tech career paths into manageable, step-by-step learning journeys. Whether you're interested in web development, data science, mobile development, or cloud engineering, Dev-Kid creates a tailored plan just for you.",
        tags: ["Flutter", "OpenAI", "LocalSQL"],
        link: "#",
        icon: "🤖",
        image: "/devkid-removebg-preview.png",
        features: [
            "AI-powered personalized learning roadmaps",
            "Career path recommendations based on user profile",
            "Curated resource library with tutorials and courses",
            "Progress tracking and milestone achievements",
            "Offline support with local SQL database",
            "Interactive quizzes and skill assessments"
        ],
        techDetails: "Built with Flutter for iOS and Android, using OpenAI GPT API for intelligent recommendations. Local data persistence with SQLite for offline functionality. State management using Provider pattern.",
        gallery: [
            "/Screenshot 2026-02-03 201837.png",
            "/Screenshot 2026-02-03 201904.png",
            "/Screenshot 2026-02-03 201934.png",
            "/Screenshot 2026-02-03 202005.png",
            "/Screenshot 2026-02-03 202033.png",
            "/Screenshot 2026-02-03 202059.png"
        ]
    },
    {
        slug: "inine-linechatbot",
        title: "I'Nine-LineChatBot",
        description: "A LINE chatbot powered by image recognition that analyzes rice plant diseases from user-uploaded photos. It provides expert-level diagnosis and treatment recommendations to help farmers protect their crops effectively.",
        longDescription: "I'Nine-LineChatBot is an innovative agricultural technology solution that empowers rice farmers with instant, AI-powered disease diagnosis. By simply sending a photo of their rice plants through the LINE messaging platform, farmers receive accurate disease identification and actionable treatment recommendations within seconds.\n\nThe system utilizes YOLOv8 object detection model trained on thousands of rice plant disease images, achieving high accuracy in identifying common diseases such as rice blast, brown spot, and bacterial leaf blight. The chatbot communicates in Thai language, making it accessible to local farmers.",
        tags: ["LINE API", "Python", "YOLO"],
        link: "#",
        icon: "☁️",
        image: "/inine.png",
        features: [
            "Real-time rice disease detection from photos",
            "YOLOv8-based image recognition model",
            "Thai language support for local farmers",
            "Treatment and prevention recommendations",
            "Disease history tracking per user",
            "Integration with LINE messaging platform"
        ],
        techDetails: "Python backend with Flask, LINE Messaging API for chatbot interface. YOLOv8 model trained on custom rice disease dataset. Deployed on cloud server for 24/7 availability.",
        gallery: [
            "/IMG_4130.png",
            "/IMG_4131.png",
            "/IMG_4132.png"
        ]
    },
    {
        slug: "more-projects",
        title: "More Projects",
        description: "Explore my other technical projects, data experiments, and open-source contributions on GitHub.",
        longDescription: "Visit my GitHub profile to explore a wide range of projects spanning data engineering, web development, mobile applications, and more. Each repository showcases different skills and technologies I've been learning and experimenting with.",
        tags: ["GitHub", "Repos", "Lab"],
        link: "https://github.com/Rawit101",
        icon: "🚀",
        isViewMore: true,
        features: [
            "Data engineering pipelines and ETL workflows",
            "Web applications with React and Next.js",
            "Mobile apps built with Flutter",
            "Cloud infrastructure projects",
            "Open-source contributions"
        ],
        techDetails: "Various technologies including Python, TypeScript, Go, Flutter, AWS, Docker, and more."
    }
]
