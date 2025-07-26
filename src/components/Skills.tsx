import { 
  FileSpreadsheet, 
  Code, 
  Database, 
  BarChart3, 
  Users, 
  MessageCircle, 
  Settings,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "Excel", level: 90, icon: <FileSpreadsheet className="h-5 w-5" /> },
        { name: "Python", level: 75, icon: <Code className="h-5 w-5" /> },
        { name: "SQL", level: 70, icon: <Database className="h-5 w-5" /> },
        { name: "Power BI", level: 80, icon: <BarChart3 className="h-5 w-5" /> }
      ]
    },
    {
      title: "Project Management",
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: "Project Coordination", level: 95, icon: <Settings className="h-5 w-5" /> },
        { name: "Client Communication", level: 85, icon: <MessageCircle className="h-5 w-5" /> },
        { name: "EV Site Execution", level: 90, icon: <Zap className="h-5 w-5" /> },
        { name: "Stakeholder Management", level: 85, icon: <Users className="h-5 w-5" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set covering technical analysis, project management, 
              and EV infrastructure coordination.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="gradient-card rounded-2xl p-8 shadow-card">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="text-primary group-hover:scale-110 transition-smooth">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Site Assessment",
                "Technical Documentation", 
                "Regulatory Compliance",
                "Quality Assurance",
                "Team Leadership",
                "Problem Solving"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-smooth"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;