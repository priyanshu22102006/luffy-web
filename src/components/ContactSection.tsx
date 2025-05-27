
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const emailUrl = `mailto:monkey.d.luffyxroronoa.zoro05@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;
    
    window.location.href = emailUrl;
    
    toast({
      title: "Message Ready!",
      description: "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'monkey.d.luffyxroronoa.zoro05@gmail.com',
      icon: '📧',
      action: () => window.location.href = 'mailto:monkey.d.luffyxroronoa.zoro05@gmail.com'
    },
    {
      title: 'Response Time',
      value: 'Within 24 hours',
      icon: '⚡',
      action: null
    },
    {
      title: 'Availability',
      value: 'Open for opportunities',
      icon: '🚀',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Join My Crew
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to embark on an exciting adventure together? Drop me a message and let's chart our course!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 text-center">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this adventure about?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, idea, or how we can work together..."
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-ocean text-white hover:opacity-90 transition-opacity py-3 text-lg"
                >
                  Set Sail Together! 🚀
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 text-center">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title} 
                    className={`flex items-center p-4 rounded-lg ${info.action ? 'cursor-pointer hover:bg-gray-50 transition-colors' : 'bg-gray-50'}`}
                    onClick={info.action || undefined}
                  >
                    <span className="text-3xl mr-4">{info.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-ocean-500 to-sunset-500 text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Adventure?</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Whether you're looking for a passionate developer to join your team, 
                  want to collaborate on an exciting project, or just want to chat about technology and dreams, 
                  I'm always excited to connect with fellow adventurers!
                </p>
                <div className="space-y-3">
                  <p className="text-lg">🌟 <strong>Looking for:</strong></p>
                  <ul className="text-sm space-y-1">
                    <li>• Internship opportunities</li>
                    <li>• Web development projects</li>
                    <li>• Open source collaborations</li>
                    <li>• Learning partnerships</li>
                    <li>• Mentorship opportunities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
