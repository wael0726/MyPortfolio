export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Kapelka - Restaurant Management App',
    desc: 'Kapelka is an innovative restaurant management application designed to streamline operations and enhance the customer experience. With its user-friendly interface, it allows restaurants to easily manage customers, products, and orders. The admin panel offers a comprehensive view of customer and order data, giving restaurant managers full control over operations.',
    subdesc:
      'Built using JavaScript, React, Firebase, Redux, Tailwind CSS, and Framer Motion, Kapelka ensures optimal performance. The app also integrates Stripe for secure online payments, providing a seamless checkout experience for customers. The app is powered by modern technologies that ensure scalability and a responsive design.\n' +
      '\n',
    href: 'https://github.com/wael0726/Food-App',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/kapelka.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 5,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
      {
        id: 6,
        name: 'Redux',
        path: '/assets/redux.png',
      },
    ],
  },
  {
    title: 'CloudNest - File Management',
    desc: 'CloudNest is a powerful file management and sharing application designed to streamline file storage and collaboration. It allows users to upload images, videos and other files. Users can rename files, view details, share files, download them, delete, and even leave comments on shared files. Additionally, CloudNest enables file previewing, so users don’t have to download files just to see their contents.',
    subdesc:
      'Built using TypeScript, Next.js, ShadCN/UI, Tailwind CSS, Appwrite, and Chart.js, CloudNest ensures a smooth and responsive experience. The app’s modern interface and seamless functionalities are powered by robust technologies, enabling users to efficiently manage and share their files with ease.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/cloudlogo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'ShadCN',
        path: '/assets/shad.png',
      },
      {
        id: 5,
        name: 'Appwrite',
        path: '/assets/appwrite.png',
      },
      {
        id: 6,
        name: 'Chart.js',
        path: '/assets/chart.png',
      },
    ],
  },
  {
    title: 'EchoFinder - Minecraft Mod',
    desc: 'EchoFinder is a Minecraft mod that introduces a new mineral. The new mineral allows the creation of basic tools, and a portable radar. The radar can detect specific minerals, armor, and even other players, depending on the settings chosen. Additionally, the mod introduces a 3x3 hammer, which allows players to mine a 3x3 area in one swing, making it easier to gather resources in the DeepDark, where this mineral can exclusively be found. The mod also features special armor crafted from the new mineral, which makes the wearer invisible to the radar, adding a layer of stealth and strategy.',
    subdesc:
      'Built with NeoForge, Java, and JSON, the mod enhances the Minecraft experience with new mechanics. ',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/minecraftlogo.jpg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/Javalogo.png',
      },
      {
        id: 2,
        name: 'JSON',
        path: 'assets/json.png',
      },
      {
        id: 3,
        name: 'NeoForge',
        path: '/assets/neoforge.png',
      },
    ],
  },
  {
    title: 'PyCar - Intelligent Vehicle IoT',
    desc: 'PyCar is an innovative electronic vehicle designed for smart and autonomous operation. Equipped with advanced sensors and technologies, the vehicle can drive autonomously by detecting obstacles and following lines on the ground. It also includes cliff detection, automatically stopping the car when it senses a drop beneath it. The SmartCar IoT is further enhanced by its ability to recognize and identify objects through its camera system. Additionally, the car can scan QR codes, recognize faces, and detect road signs. The vehicle can also be remotely controlled via Bluetooth.',
    subdesc:
      'Developed with Python, Arduino/C++, and Raspberry Pi, PyCar leverages cutting-edge technology to bring intelligent features to life.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/pycar.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'C++',
        path: '/assets/C++.png',
      },
      {
        id: 3,
        name: 'Arduino',
        path: 'assets/arduino.svg',
      },
      {
        id: 4,
        name: 'Raspberry Pi',
        path: '/assets/raspberryPi.png',
      },
    ],
  },
  {
    title: 'Ascendia - 3D Platformer Game',
    desc: 'This 3D platformer game offers an exciting adventure filled with diverse levels, each designed with unique challenges and obstacles. Players will navigate through environments featuring bumpers, moving platforms, and enemies equipped with artificial intelligence. The game introduces dynamic elements like air vents that propel players upward, along with various shooting obstacles that test the player\'s agility and timing. With every level, players encounter new gameplay mechanics and increasingly complex scenarios that push their skills to the limit.',
    subdesc:
      'Developed with Unity and C#, the game takes full advantage of Unity\'s powerful engine to create immersive 3D environments and realistic physics.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/Ascendia.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'C#',
        path: '/assets/Csharp.png',
      },
      {
        id: 2,
        name: 'Unity',
        path: 'assets/unity.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
