import { ArrowDown, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="EV Charging Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Professional Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Project Engineer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm{' '}
            <span className="text-primary font-bold select-none">
              Adarsh
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-muted-foreground">
            EV Charger Project Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            Driving EV Infrastructure in Kerala
          </p>

          {/* Location */}
          <div className="inline-flex items-center space-x-2 mb-8 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Kerala, India • Tata Power</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-flex items-center text-foreground/60 hover:text-primary transition-smooth">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;