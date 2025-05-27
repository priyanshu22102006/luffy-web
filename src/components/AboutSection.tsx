
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the journey of a determined soul with an unshakeable dream
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Student workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-ocean rounded-2xl opacity-80"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                The Spirit of Adventure in Technology
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Just like the vast ocean calls to every pirate, the world of technology beckons to me with endless possibilities. 
                I'm Monkey D. Luffy, a passionate B.Tech Computer Science student who believes that with determination, 
                loyalty, and an unbreakable spirit, any dream can become reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My journey began with a simple fascination for how things work in the digital world. 
                Much like gathering a trusted crew for an adventure, I've been building my skills in 
                programming languages and web design, preparing for the grand voyage ahead.
              </p>
            </div>

            <Card className="border-l-4 border-ocean-500 bg-white shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Education & Foundation</h4>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Current:</span> B.Tech in Computer Science and Engineering
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">University:</span> XYZ University
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Expected Graduation:</span> 2028
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Focus:</span> Programming, Algorithms, Systems Design, Web Development
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">🚀</div>
                  <h5 className="font-semibold text-gray-800">Ambitious</h5>
                  <p className="text-sm text-gray-600">Always reaching for the impossible</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">🤝</div>
                  <h5 className="font-semibold text-gray-800">Loyal</h5>
                  <p className="text-sm text-gray-600">Committed to my team and projects</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">⚡</div>
                  <h5 className="font-semibold text-gray-800">Determined</h5>
                  <p className="text-sm text-gray-600">Never giving up on my dreams</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
