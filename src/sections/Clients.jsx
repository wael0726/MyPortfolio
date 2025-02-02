import { useState } from 'react';

// Données pour les frameworks
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

// Données pour les langages
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

const Skills = () => {
  const [currentFramework, setCurrentFramework] = useState('REACT');
  const [currentFrameworkColor, setCurrentFrameworkColor] = useState('#61DAFB');

  const [currentLanguage, setCurrentLanguage] = useState('JavaScript');
  const [currentLanguageColor, setCurrentLanguageColor] = useState('#F7DF1E');

  const topFrameworks = frameworks.slice(0, 4);
  const bottomFrameworks = frameworks.slice(4, 10);

  const topLanguages = languages.slice(0, 4);
  const bottomLanguages = languages.slice(4, 10);

  return (
    <section className="mx-auto max-w-7xl p-8 space-y-12" id="skills">
      <p className="head-text">My Skills</p>
      {/* Section Langages */}
      <div
        className="grid grid-rows-2 gap-0.5 bg-neutral-100 rounded-xl overflow-hidden"
        onMouseLeave={() => {
          setCurrentLanguage('JavaScript');
          setCurrentLanguageColor('#F7DF1E');
        }}
      >
        {/* Première ligne */}
        <div className="grid grid-cols-[1fr_2fr] gap-0.5">
          {/* Texte */}
          <div className="bg-white p-6 flex items-center">
            <h2 className="text-2xl font-medium">
              I worked with<br />
              <span
                className="font-bold transition-all duration-500"
                style={{
                  color: currentLanguageColor,
                  textShadow: `0 0 12px ${currentLanguageColor}40`
                }}
              >
                {currentLanguage}
              </span>
              <br />
              as a language
            </h2>
          </div>

          {/* Logos du haut */}
          <div className="grid grid-cols-4 gap-0.5">
            {topLanguages.map((language) => (
              <div
                key={language.name}
                className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => {
                  setCurrentLanguage(language.name);
                  setCurrentLanguageColor(language.color);
                }}
              >
                <div className="aspect-square flex items-center justify-center p-6">
                  <img
                    src={language.img}
                    alt={language.name}
                    className="h-12 w-12 object-contain opacity-90
                    group-hover:opacity-100
                    group-hover:scale-110
                    group-hover:-translate-y-1
                    transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="grid grid-cols-6 gap-0.5">
          {bottomLanguages.map((language) => (
            <div
              key={language.name}
              className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => {
                setCurrentLanguage(language.name);
                setCurrentLanguageColor(language.color);
              }}
            >
              <div className="aspect-square flex items-center justify-center p-6">
                <img
                  src={language.img}
                  alt={language.name}
                  className="h-12 w-12 object-contain opacity-90
                  group-hover:opacity-100
                  group-hover:scale-110
                  group-hover:-translate-y-1
                  transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Frameworks */}
      <div
        className="grid grid-rows-2 gap-0.5 bg-neutral-100 rounded-xl overflow-hidden"
        onMouseLeave={() => {
          setCurrentFramework('REACT');
          setCurrentFrameworkColor('#61DAFB');
        }}
      >
        {/* Première ligne */}
        <div className="grid grid-cols-[1fr_2fr] gap-0.5">
          {/* Texte */}
          <div className="bg-white p-6 flex items-center">
            <h2 className="text-2xl font-medium">
              I worked with<br />
              <span
                className="font-bold transition-all duration-500"
                style={{
                  color: currentFrameworkColor,
                  textShadow: `0 0 12px ${currentFrameworkColor}40`
                }}
              >
                {currentFramework}
              </span>
              <br />
              as a framework
            </h2>
          </div>

          {/* Logos du haut */}
          <div className="grid grid-cols-4 gap-0.5">
            {topFrameworks.map((framework) => (
              <div
                key={framework.name}
                className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => {
                  setCurrentFramework(framework.name);
                  setCurrentFrameworkColor(framework.color);
                }}
              >
                <div className="aspect-square flex items-center justify-center p-6">
                  <img
                    src={framework.img}
                    alt={framework.name}
                    className="h-12 w-12 object-contain opacity-90
                    group-hover:opacity-100
                    group-hover:scale-110
                    group-hover:-translate-y-1
                    transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="grid grid-cols-6 gap-0.5">
          {bottomFrameworks.map((framework) => (
            <div
              key={framework.name}
              className="bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => {
                setCurrentFramework(framework.name);
                setCurrentFrameworkColor(framework.color);
              }}
            >
              <div className="aspect-square flex items-center justify-center p-6">
                <img
                  src={framework.img}
                  alt={framework.name}
                  className="h-12 w-12 object-contain opacity-90
                  group-hover:opacity-100
                  group-hover:scale-110
                  group-hover:-translate-y-1
                  transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;