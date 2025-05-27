
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Creating modern, responsive websites that capture your brand\'s spirit and engage your audience.',
      features: ['Responsive Design', 'Modern UI/UX', 'Fast Loading', 'SEO Optimized'],
      icon: '🌐',
      status: 'Available'
    },
    {
      title: 'Frontend Development',
      description: 'Building interactive and dynamic user interfaces using the latest web technologies.',
      features: ['React Applications', 'JavaScript ES6+', 'CSS3 & Animations', 'Cross-browser Compatibility'],
      icon: '⚡',
      status: 'Learning'
    },
    {
      title: 'Programming Solutions',
      description: 'Developing efficient algorithms and solutions for complex programming challenges.',
      features: ['Algorithm Design', 'Code Optimization', 'Problem Solving', 'Technical Documentation'],
      icon: '🔧',
      status: 'Available'
    },
    {
      title: 'Project Collaboration',
      description: 'Ready to join teams and contribute to exciting projects that make a difference.',
      features: ['Team Collaboration', 'Agile Development', 'Version Control', 'Code Reviews'],
      icon: '🤝',
      status: 'Open'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to embark on your next digital adventure? Let's set sail together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:animate-wave">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </CardTitle>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  service.status === 'Available' ? 'bg-green-100 text-green-800' :
                  service.status === 'Learning' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {service.status}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">What I Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-ocean-500 to-sunset-500 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h3>
              <p className="text-xl mb-8 leading-relaxed">
                Whether you need a website that captures your vision, want to collaborate on an exciting project, 
                or are looking for a passionate developer to join your crew, I'm ready to help you achieve your goals!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white text-ocean-600 hover:bg-white/90 transition-all transform hover:scale-105"
                >
                  Let's Work Together
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean-600 transition-all"
                >
                  Discuss Your Project
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg">
                  💡 <strong>Currently Seeking:</strong> Internships, collaborations, and exciting projects 
                  to grow my expertise and make meaningful contributions!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
