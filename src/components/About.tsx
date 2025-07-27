import { Zap, Target, Users, CheckCircle } from 'lucide-react';
import profileImage from '@/assets/adarsh-real-profile.png';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "EV Infrastructure Expert",
      description: "Specialized in coordinating EV charger installations across Kerala"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Project Coordination",
      description: "Successfully managing multiple Tata Power EV charging projects"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Relations",
      description: "Strong communication skills for stakeholder management"
    }
  ];

  const achievements = [
    "Coordinated 50+ EV charger installations across Kerala",
    "Implemented efficient site reporting systems",
    "Reduced project delivery time by 25%",
    "Maintained 98% client satisfaction rate"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building sustainable EV infrastructure in Kerala, 
              combining technical expertise with project management excellence.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Profile Photo */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Adarsh - EV Charger Project Engineer"
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl shadow-elegant object-cover transition-smooth hover:shadow-glow"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
              </div>
            </div>

            {/* Bio & Highlights */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  EV Infrastructure Professional
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As an EV Charger Project Engineer with Tata Power, I specialize in 
                    coordinating the installation and deployment of electric vehicle 
                    charging infrastructure across Kerala. My role encompasses project 
                    planning, site coordination, and stakeholder management.
                  </p>
                  <p>
                    I leverage data analytics tools like Excel, Python, and Power BI 
                    to optimize project workflows, track installation progress, and 
                    provide comprehensive reporting to clients and management teams.
                  </p>
                  <p>
                    My focus is on ensuring seamless EV charging infrastructure 
                    deployment while maintaining the highest standards of quality 
                    and client satisfaction.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg gradient-card shadow-card transition-smooth hover:shadow-elegant">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;