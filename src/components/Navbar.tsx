import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-xl font-bold text-blue-900">Abdul Mohsin</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2 text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors inline-block w-fit"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;