import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const ProjectsSection = () => {
  const currentProjects = [{
    title: 'Personal Portfolio Website',
    description: 'This very website you\'re browsing! Built with React, TypeScript, and Tailwind CSS.',
    status: 'Completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    icon: '🌐'
  }];
  const upcomingProjects = [{
    title: 'Smart Blind Stick',
    description: 'An IoT-based assistive device for visually impaired individuals with obstacle detection and GPS navigation.',
    status: 'Planned',
    technologies: ['Arduino', 'IoT Sensors', 'GPS Module', 'Mobile App'],
    icon: '🦯'
  }, {
    title: 'Water Quality Testing Device',
    description: 'A portable device to monitor and analyze water quality parameters for environmental safety.',
    status: 'Research Phase',
    technologies: ['Microcontrollers', 'Sensors', 'Data Analytics', 'Mobile Interface'],
    icon: '💧'
  }, {
    title: 'E-Commerce Platform',
    description: 'A full-stack web application for online shopping with modern UI and secure payment integration.',
    status: 'Planning',
    technologies: ['React', 'Node.js', 'Database', 'Payment Gateway'],
    icon: '🛒'
  }];
  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            My Adventures in Code
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every great pirate needs a treasure map. Here's mine - charting my journey through the digital seas!
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ⚓ Current Voyage
          </h3>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {currentProjects.map((project, index) => <Card key={project.title} className="hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{project.icon}</span>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        {project.status}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-ocean-100 text-ocean-800 rounded-full text-sm">
                        {tech}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            🗺️ Future Expeditions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => <Card key={project.title} className="hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{project.icon}</div>
                  <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                    {project.title}
                  </CardTitle>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${project.status === 'Planned' ? 'bg-blue-100 text-blue-800' : project.status === 'Research Phase' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'}`}>
                    {project.status}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-ocean-500 to-sunset-500 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-4">Join My Adventure!</h3>
              <p className="text-lg mb-6 leading-relaxed">
                As I embark on building my portfolio and gaining real-world experience, 
                I'm always excited to collaborate on meaningful projects. Whether it's contributing to open source, 
                joining a team, or starting something new together - let's create something amazing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-ocean-600 hover:bg-white/90 transition-all transform hover:scale-105" onClick={() => window.open('https://github.com', '_blank')}>
                  View on GitHub
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="border-white transition-all bg-white text-sunset-600">
                  Collaborate With Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;