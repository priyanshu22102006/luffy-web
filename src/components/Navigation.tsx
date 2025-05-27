import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between bg-transparent">
          <div className="text-2xl font-bold gradient-ocean bg-clip-text text-transparent bg-transparent">
            Monkey D. Luffy
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="">
                {item.label}
              </button>)}
          </div>

          <Button onClick={() => scrollToSection('contact')} className="gradient-ocean text-white hover:opacity-90 transition-opacity">
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;