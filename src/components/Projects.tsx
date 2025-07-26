import { ExternalLink, Github, Calendar, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectCoordination from '@/assets/project-coordination.jpg';
import projectReporting from '@/assets/project-reporting.jpg';
import projectPresentation from '@/assets/project-presentation.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tata EV Charger Install Coordination",
      description: "Comprehensive project management system for coordinating EV charger installations across Kerala. Includes site assessment, vendor management, and progress tracking.",
      image: projectCoordination,
      technologies: ["Project Management", "Site Coordination", "Vendor Relations", "Quality Control"],
      highlights: [
        "Coordinated 50+ installations",
        "Reduced deployment time by 25%",
        "98% client satisfaction rate"
      ],
      stats: [
        { icon: <Calendar className="h-4 w-4" />, label: "Timeline", value: "6 Months" },
        { icon: <Users className="h-4 w-4" />, label: "Sites", value: "50+" },
        { icon: <BarChart className="h-4 w-4" />, label: "Efficiency", value: "+25%" }
      ]
    },
    {
      id: 2,
      title: "EV Site Reporting System",
      description: "Excel-based automated reporting system for tracking installation progress, site metrics, and performance analytics across all EV charging projects.",
      image: projectReporting,
      technologies: ["Excel VBA", "Data Analysis", "Automation", "Dashboard Creation"],
      highlights: [
        "Automated daily reporting",
        "Real-time progress tracking",
        "Custom analytics dashboard"
      ],
      stats: [
        { icon: <Calendar className="h-4 w-4" />, label: "Duration", value: "3 Months" },
        { icon: <BarChart className="h-4 w-4" />, label: "Reports", value: "200+" },
        { icon: <Users className="h-4 w-4" />, label: "Users", value: "15+" }
      ]
    },
    {
      id: 3,
      title: "Client Proposal & Presentation Kit",
      description: "Professional presentation templates and proposal framework for EV infrastructure projects, including cost analysis and project timelines.",
      image: projectPresentation,
      technologies: ["PowerPoint", "Data Visualization", "Business Analysis", "Communication"],
      highlights: [
        "Professional presentation suite",
        "Standardized proposal format",
        "Improved client engagement"
      ],
      stats: [
        { icon: <Calendar className="h-4 w-4" />, label: "Templates", value: "10+" },
        { icon: <Users className="h-4 w-4" />, label: "Clients", value: "25+" },
        { icon: <BarChart className="h-4 w-4" />, label: "Success Rate", value: "85%" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key projects showcasing my expertise in EV infrastructure coordination, 
              data analysis, and project management.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Title and Description */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center p-3 gradient-card rounded-lg">
                          <div className="flex justify-center text-primary mb-1">
                            {stat.icon}
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li 
                            key={highlightIndex}
                            className="flex items-center space-x-2 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>View Details</span>
                      </Button>
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <Github className="h-4 w-4" />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;