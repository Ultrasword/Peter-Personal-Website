import {
  mobile,
  backend,
  creator,
  web,
  peterlogo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  robot,
  youtube,
  gamedev,
  frontend,
  petthepotat,
  pomorise,
  accnlogo,
  java,
  python,
  qiskit,
  pygame,
  cpp,
  godot,
  opengl,
  soragl,
  pomoriseProject,
  qiskitFallfest,
  htn2022,
  htn2023
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: frontend,
    link: "https://github.com/Ultrasword/Peter-Personal-Website"
  },
  {
    title: "Game Developer",
    icon: gamedev,
    link: "https://github.com/Ultrasword-Game-Development/RPG-Game-2D"
  },
  {
    title: "Computer Engineer",
    icon: robot,
    link: "https://www.instagram.com/ramsrobotics/"
  },
  {
    title: "Content Creator",
    icon: youtube,
    link: "https://www.youtube.com/@petthepotat"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "Qiskit",
    icon: qiskit
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Pygame",
    icon: pygame
  },
  {
    name: "OpenGL",
    icon: opengl
  },
  {
    name: "C++",
    icon: cpp
  },
  {
    name: "Godot",
    icon: godot
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Personal Website",
    company_name: "PeterZ.dev",
    icon: peterlogo,
    iconBg: "#010606",
    date: "Jan 2024",
    points: [
      "Developed and designed a fully functional, reactive website using vite-react and threejs for 3D visuals.",
      "Created a custom 3D model for the website using Blender, and used ThreeJS along with React useRef to create an animated background.",
      "Used TailwindCSS for styling and responsiveness, and deployed the website using Vercel.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ECE198 - PomoRise",
    icon: pomorise,
    iconBg: "#ffffff",
    date: "Sept 2023 - Dec 2023",
    points: [
      "Designed and implemented firmware on the STM32F401RE micro-processor and Arduion Uno (testing) in C++ for the functionality of a Pomodoro / Digital Alarm Clock.",
      "Built a fully functional Digital Alarm Clock with an 16x2 LCD Display, 4 Button Keypad, and a Piezo Buzzer.",
      "We used I2C Communication between and a custom PWM Config for the Piezo Buzzer and for communication between hardware components.",
      "Led and fulfilled the software design with component abstraction and OOP. Used Git for version control.",
    ],
  },
  {
    title: "Java/Web/CAD Teacher",
    company_name: "African American Christian Network",
    icon: accnlogo,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Guided 30+ middle and high school students from novice to advanced proficiency in Java, OnShape, and HTML/CSS JS Web Development in 2 months with a hands-on teaching method.",
      "Taught students the fundamentals of OOP; abstraction, encapsulation, polymorphism, and inheritance.",
      "Mentored 25+ students to create a Discord Clone, Personal Website, 3D Models in OnShape, and Console Applications in Java",
      "Students reached out for mentoring opportunities. Currently mentoring one student to develop their portfolio in software development.",
    ],
  },
  {
    title: "Python and OpenGL Game Engine",
    company_name: "SoraGL",
    icon: petthepotat,
    iconBg: "#ffffff",
    date: "March 2022 - Current",
    points: [
      "Designed and implemented an Entity Component System, Graphics Rendering Pipeline with OpenGL, and Simple Agent AI in pathfinding and heuristic algorithms for entity movement calculations.",
      "Developed a chunking system for optimized grass, particle, and entity rendering to render over 10000 entities at 60fps with minimal performance loss; (GTX 780Ti, 3.6GHz i7).",
      "Self-taught OpenGL, Python, Pygame and PyOpenGL to develop a game engine from scratch.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website 2024",
    description:
      "A Vite-React Three JS and Tailwind CSS website for my personal portfolio!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: frontend,
    source_code_link: "https://github.com/Ultrasword/Peter-Personal-Website",
  },
  {
    name: "SoraGL - Python OpenGL Game Engine",
    description:
      "Pythonic Game Engine with GPU Accelerated graphics for 3D and 2D games.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "GLSL / OpenGL",
        color: "pink-text-gradient",
      },
    ],
    image: soragl,
    source_code_link: "https://github.com/Ultrasword-Game-Development/SoraGL-Python",
  },
  {
    name: "ECE198 - Pomorise",
    description:
      "A Digital Alarm Clock / Pomodoro Timer with a 16x2 LCD Display, 4 Button Keypad, and a Piezo Buzzer.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "STM32IDE",
        color: "green-text-gradient",
      },
      {
        name: "Arduino IDE",
        color: "pink-text-gradient",
      },
    ],
    image: pomoriseProject,
    source_code_link: "https://github.com/pet-waterloo/ECE198-Pomorise",
  },
  {
    name: "Qiskit Fallfest 202",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Qiskit",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: qiskitFallfest,
    source_code_link: "https://github.com/AkiraY1/QiskitFallFest2023/",
  },
  {
    name: "HackTheNorth 2024 - MyEye",
    description:
      "A OpenCV based hands free Computer interface for the physically impaired. Used google mediapipe for hand/gesture tracking and adhawk glasses for monitor tracking.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      }
    ],
    image: htn2023,
    source_code_link: "https://github.com/petthepotat-dump/htn-hack-2023-24",
  },
  {
    name: "HackTheNorth 2023 - brAInstorm",
    description:
      "A BCI to convolutionary neural network interface that collects EEG data from the user (via a Brain Computer interface) and uses it to train a CNN to visualize the user's thoughts through abstract art.",
    tags: [
      {
        name: "Convolutionary Neural Network",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Arduino and BCI",
        color: "purple-text-gradient",
      }
    ],
    image: htn2022,
    source_code_link: "https://devpost.com/software/brainstorm-2qkdtw",
  }
];

export { services, technologies, experiences, testimonials, projects };