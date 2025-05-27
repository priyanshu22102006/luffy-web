const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-ocean bg-clip-text mb-4 text-transparent">
              Monkey D. Luffy
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Future King of the Pirates & Aspiring Web Designer. 
              Always ready for the next adventure in technology!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Navigate</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map(item => <button key={item} onClick={() => {
              const element = document.getElementById(item.toLowerCase());
              if (element) element.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="block mx-auto text-gray-400 hover:text-white transition-colors">
                  {item}
                </button>)}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Set Sail Together</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Ready for collaboration?</p>
              <a href="mailto:monkey.d.luffyxroronoa.zoro05@gmail.com" className="text-ocean-400 hover:text-ocean-300 transition-colors block">
                monkey.d.luffyxroronoa.zoro05@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Always open to new adventures and opportunities!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Monkey D. Luffy. Built with passion and determination. 
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Made with</span>
              <span className="text-red-500 text-lg animate-pulse">❤️</span>
              <span className="text-gray-400 text-sm">and React</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-ocean-400 hover:text-ocean-300 transition-colors group">
              <span>Back to Top</span>
              <span className="group-hover:animate-bounce">⬆️</span>
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;