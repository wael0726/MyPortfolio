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
  const nameRef = useRef(null);
  const lettersRef = useRef([]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Animation d'apparition progressive
  useEffect(() => {
    if (lettersRef.current.length > 0) {
      // Initialisation : lettres invisibles
      gsap.set(lettersRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.8,
      });

      // Animation : apparition des lettres
      gsap.to(lettersRef.current, {
        duration: 0.8,
        opacity: 1, // Assure que l'opacité revient à 1
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.3,
      });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-black font-bold text-xl hover:text-green-500 transition-colors" ref={nameRef}>
            {'Wael'.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                ref={(el) => (lettersRef.current[index] = el)}
              >
                {letter}
              </span>
            ))}
          </a>

          <button
            onClick={toggleMenu}
            className="text-black hover:text-green-500 focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/blackclose.svg' : 'assets/blackmenu.svg'} alt="toggle" className="w-6 h-6" />
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