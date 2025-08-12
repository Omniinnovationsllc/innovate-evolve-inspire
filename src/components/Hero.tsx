import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-dark opacity-80" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              Innovation • Technology • Excellence
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            Transform Your
            <br />
            <span className="text-gradient">Business Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Emerging technology into practical solutions driving{" "}
            <span className="text-primary font-semibold">measurable growth</span>{" "}
            through data analytics, custom solutions, and responsible AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-morphism border-primary/30 hover:border-primary/60 text-foreground font-semibold px-8 py-4 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
          <div className="glass-morphism p-6 rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="glass-morphism p-6 rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="glass-morphism p-6 rounded-xl">
            <div className="text-4xl font-bold text-gradient mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Innovation Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;