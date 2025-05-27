
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'C Programming', level: 85, icon: '⚙️' },
    { name: 'C++', level: 80, icon: '🔧' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Web Design', level: 70, icon: '🎨' },
    { name: 'HTML/CSS', level: 85, icon: '🌐' },
    { name: 'JavaScript', level: 65, icon: '⚡' },
  ];

  const softSkills = [
    { name: 'Problem Solving', description: 'Breaking down complex challenges into manageable solutions' },
    { name: 'Teamwork', description: 'Leading and collaborating effectively with diverse crews' },
    { name: 'Determination', description: 'Persisting through obstacles with unwavering resolve' },
    { name: 'Adaptability', description: 'Quickly learning and adapting to new technologies and environments' },
    { name: 'Leadership', description: 'Inspiring others to achieve their full potential' },
    { name: 'Communication', description: 'Articulating ideas clearly and building strong relationships' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            My Arsenal of Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like any great pirate, I've been gathering powerful tools and abilities for my journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              ⚔️ Technical Weapons
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <Card key={skill.name} className="hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h4 className="text-lg font-semibold text-gray-800 flex-1">{skill.name}</h4>
                      <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-ocean-50 to-sunset-50 border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Currently Learning</h4>
                <p className="text-gray-600">
                  React.js • Node.js • Database Management • Advanced Algorithms
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              🌟 Captain's Qualities
            </h3>
            
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <Card key={skill.name} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Philosophy */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-ocean-500 to-sunset-500 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">My Learning Philosophy</h3>
              <p className="text-lg leading-relaxed">
                "Just like the Grand Line, the world of technology is full of challenges and mysteries. 
                But with each new skill I master and every problem I solve, I get one step closer to 
                achieving my dream of becoming the King of the Pirates... I mean, a master developer! 
                The key is never stop learning, never stop dreaming, and always help your crew along the way."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
