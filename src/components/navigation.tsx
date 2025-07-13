// This is a general purpose straight navigation item
"use client"
import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

interface NavigationProps {
  sections?: Section[];
}

const Navigation: React.FC<NavigationProps> = ({ sections = [] }) => {
  const [activeSection, setActiveSection] = useState(0);

  // Default sections for testing purposes
  const defaultSections: Section[] = [
    { id: 'tacos', label: 'Tacos' },
    { id: 'coolbeans', label: 'Cool Beans' },
  ];

  const navigationSections = sections.length > 0 ? sections : defaultSections;

  // Handle smooth scrolling to section
  const scrollToSection = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(index);
    }
  };

  // Listen for scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      navigationSections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationSections]);

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      {/* Background with  left edge */}
      <div className="relative w-64 flex flex-col justify-center items-end pr-8">
        {/* CSS line clip-path */}
        <div 
          className="absolute inset-0 "
          style={{
            clipPath: 'polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%)'
          }}
        />
        
        {/* White line on the left */}
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        
        {/* Navigation items */}
        <div className=" m-5 relative z-10 space-y-8">
          {navigationSections.map((section, index) => (
            <div key={section.id} className="flex items-center space-x-4">
              {/* line inbetween id and line on wall*/}
              <div 
                className={`w-16 h-0.5 transition-colors duration-300 ${
                  activeSection === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
              
              {/* Section label */}
              <button
                onClick={() => scrollToSection(section.id, index)}
                className={`text-lg font-medium transition-colors duration-300 hover:text-blue-400 ${
                  activeSection === index ? 'text-white' : 'text-gray-400'
                }`}
              >
                {section.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;