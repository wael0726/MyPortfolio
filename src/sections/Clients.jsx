import { useState, useRef, memo } from 'react';

const frameworks = [
  { name: 'REACT', img: '/assets/react.svg', color: '#61DAFB' },
  { name: 'Vite', img: '/assets/vite.png', color: '#646CFF' },
  { name: 'Next.js', img: '/assets/next.png', color: '#000000' },
  { name: 'Flutter', img: '/assets/flutter.webp', color: '#3178C6' },
  { name: 'Bulma', img: '/assets/bulma.png', color: '#00D1B2' },
  { name: 'Tailwind', img: '/assets/tailwindcss.png', color: '#06B6D4' },
  { name: 'Angular', img: '/assets/angular.png', color: '#DD0031' },
  { name: 'GraphQL', img: '/assets/graphQL.png', color: '#E535AB' },
  { name: 'Flask', img: '/assets/flasklogo.png', color: '#4B8BBE' },
  { name: 'Express', img: '/assets/express-js.png', color: '#000000' },
];

const languages = [
  { name: 'HTML', img: '/assets/html5logo.png', color: '#E34F26' },
  { name: 'CSS', img: '/assets/css.svg', color: '#1572B6' },
  { name: 'JavaScript', img: '/assets/javascript.png', color: '#F7DF1E' },
  { name: 'TypeScript', img: '/assets/typescript.png', color: '#3178C6' },
  { name: 'Python', img: '/assets/python.png', color: '#3178C6' },
  { name: 'Java', img: '/assets/Javalogo.png', color: '#007396' },
  { name: 'C++', img: '/assets/C++.png', color: '#00599C' },
  { name: 'C#', img: '/assets/Csharp.png', color: '#6A1E9C' },
  { name: 'Kotlin', img: '/assets/kotlin.png', color: '#7F52FF' },
  { name: 'Dart', img: '/assets/Dartlogo.png', color: '#0175C2' },
];

const LanguageSection = memo(() => {
  const [currentLanguage, setCurrentLanguage] = useState('JavaScript');
  const [currentLanguageColor, setCurrentLanguageColor] = useState('#F7DF1E');
  const [animateLangKey, setAnimateLangKey] = useState(0);
  const prevLanguage = useRef(currentLanguage);

  const handleLanguageChange = (name, color) => {
    if (name !== prevLanguage.current) {
      setCurrentLanguage(name);
      setCurrentLanguageColor(color);
      setAnimateLangKey(prev => prev + 1);
      prevLanguage.current = name;
    }
  };

  const topLanguages = languages.slice(0, 4);
  const bottomLanguages = languages.slice(4, 10);

  const AnimatedTextLanguage = ({ text, color, animationKey }) => (
    <div
      key={animationKey}
      className="animated-text-lang"
      style={{ color, display: 'inline-block' }}
    >
      {text}
    </div>
  );

  return (
    <div className="grid grid-rows-2 gap-0.5 bg-neutral-100 rounded-xl overflow-hidden">
      {/* Première rangée */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0.5">
        <div className="bg-white p-6 flex items-center">
          <h2 className="text-2xl font-medium">
            I worked with<br />
            <AnimatedTextLanguage
              text={currentLanguage}
              color={currentLanguageColor}
              animationKey={animateLangKey}
            /><br />
            as a language
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
          {topLanguages.map(language => (
            <div
              key={language.name}
              className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => handleLanguageChange(language.name, language.color)}
            >
              <div className="aspect-square flex items-center justify-center p-4 md:p-6">
                <img
                  src={language.img}
                  alt={language.name}
                  className="h-16 w-16 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Deuxième rangée */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-0.5">
        {bottomLanguages.map(language => (
          <div
            key={language.name}
            className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => handleLanguageChange(language.name, language.color)}
          >
            <div className="aspect-square flex items-center justify-center p-4 md:p-6">
              <img
                src={language.img}
                alt={language.name}
                className="h-16 w-16 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

const FrameworkSection = memo(() => {
  const [currentFramework, setCurrentFramework] = useState('REACT');
  const [currentFrameworkColor, setCurrentFrameworkColor] = useState('#61DAFB');
  const [animateFrameKey, setAnimateFrameKey] = useState(0);
  const prevFramework = useRef(currentFramework);

  const handleFrameworkChange = (name, color) => {
    if (name !== prevFramework.current) {
      setCurrentFramework(name);
      setCurrentFrameworkColor(color);
      setAnimateFrameKey(prev => prev + 1);
      prevFramework.current = name;
    }
  };

  const topFrameworks = frameworks.slice(0, 4);
  const bottomFrameworks = frameworks.slice(4, 10);

  const AnimatedTextFramework = ({ text, color, animationKey }) => (
    <div
      key={animationKey}
      className="animated-text-frame"
      style={{ color, display: 'inline-block' }}
    >
      {text}
    </div>
  );

  return (
    <div className="grid grid-rows-2 gap-0.5 bg-neutral-100 rounded-xl overflow-hidden">
      {/* Première rangée */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0.5">
        <div className="bg-white p-6 flex items-center">
          <h2 className="text-2xl font-medium">
            I worked with<br />
            <AnimatedTextFramework
              text={currentFramework}
              color={currentFrameworkColor}
              animationKey={animateFrameKey}
            /><br />
            as a framework
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
          {topFrameworks.map(framework => (
            <div
              key={framework.name}
              className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => handleFrameworkChange(framework.name, framework.color)}
            >
              <div className="aspect-square flex items-center justify-center p-4 md:p-6">
                <img
                  src={framework.img}
                  alt={framework.name}
                  className="h-16 w-16 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-0.5">
        {bottomFrameworks.map(framework => (
          <div
            key={framework.name}
            className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => handleFrameworkChange(framework.name, framework.color)}
          >
            <div className="aspect-square flex items-center justify-center p-4 md:p-6">
              <img
                src={framework.img}
                alt={framework.name}
                className="h-16 w-16 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

const Skills = () => {
  return (
    <section className="mx-auto max-w-7xl p-4 md:p-8 space-y-12" id="skills">
      <p className="head-text">My Skills</p>
      <LanguageSection />
      <FrameworkSection />
      <style jsx global>{`
          @keyframes rollDownIn {
              0% {
                  transform: rotateX(-90deg);
                  opacity: 0;
              }
              100% {
                  transform: rotateX(0deg);
                  opacity: 1;
              }
          }
          
          .animated-text-lang {
              transform-origin: top;
              animation: rollDownIn 0.6s ease-out both;
          }
          
          .animated-text-frame {
              transform-origin: top;
              animation: rollDownIn 0.6s ease-out both;
          }
      `}</style>
    </section>
  );
};

export default Skills;
