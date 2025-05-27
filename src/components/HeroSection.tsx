import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-ocean opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-indigo-500">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-sunset-400/20 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/15 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Monkey D. 
                <span className="block gradient-sunset bg-clip-text font-normal text-rose-400">
                  Luffy
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-4 font-semibold">
                Future King of the Pirates & Aspiring Web Designer
              </p>
              
              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                A passionate B.Tech Computer Science student with an unbreakable spirit, 
                sailing through the digital seas to master programming and web design. 
                Ready to embark on adventures in technology!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => scrollToSection('about')} size="lg" className="bg-white text-ocean-600 hover:bg-white/90 transition-all transform hover:scale-105">
                  Discover My Journey
                </Button>
                <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-white hover:bg-white transition-all text-orange-500">
                  Join My Crew
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl animate-float">
                <img src="https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop&crop=center" alt="Monkey D. Luffy - Adventurous spirit" className="w-full h-full object-fill" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 gradient-sunset rounded-full animate-wave"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/30 rounded-full animate-wave" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;