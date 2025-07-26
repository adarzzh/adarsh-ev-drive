import { Mail, Linkedin, Github, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "adarzzh@gmail.com",
      href: "mailto:adarzzh@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Kerala, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/adarzzh",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub", 
      href: "https://github.com/adarzzh",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: "https://instagram.com/a_d_a_r_z_h",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in EV infrastructure projects or collaboration opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="gradient-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="font-medium text-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Summary */}
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  Professional Focus
                </h4>
                <p className="text-sm text-muted-foreground">
                  EV Infrastructure Development • Project Coordination • 
                  Data Analytics • Client Relations
                </p>
              </div>
            </div>

            {/* Quick Contact & Social */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="gradient-card rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Quick Contact
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full" 
                    asChild
                  >
                    <a href="mailto:adarzzh@gmail.com" className="flex items-center justify-center space-x-2">
                      <Mail className="h-5 w-5" />
                      <span>Send Email</span>
                    </a>
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="gradient-card rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Follow Me
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 rounded-lg bg-background/50 hover:bg-background transition-smooth group ${social.color}`}
                    >
                      <div className="mb-2 group-hover:scale-110 transition-smooth">
                        {social.icon}
                      </div>
                      <span className="text-xs font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success rounded-full px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Available for EV infrastructure projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;