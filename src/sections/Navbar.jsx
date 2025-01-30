import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nameRef = useRef(null); // Référence pour le conteneur du nom "Wael"

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Animation GSAP
  useEffect(() => {
    if (nameRef.current) {
      const letters = Array.from(nameRef.current.children); // Récupère chaque lettre

      // Animation de chaque lettre
      gsap.to(letters, {
        y: -10, // Déplace la lettre vers le haut
        duration: 0.3, // Durée de l'animation
        stagger: 0.1, // Délai entre chaque lettre
        repeat: -1, // Répète indéfiniment
        yoyo: true, // Revient à la position d'origine
        ease: 'power1.inOut', // Effet d'accélération/décélération
      });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {/* Conteneur pour le nom "Wael" */}
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors" ref={nameRef}>
            {'Wael'.split('').map((letter, index) => (
              <span key={index} className="inline-block">
                {letter}
              </span>
            ))}
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;