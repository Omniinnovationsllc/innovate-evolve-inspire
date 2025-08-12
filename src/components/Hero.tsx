import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useParallax, useIntersectionObserver } from "@/hooks/useParallax";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const parallaxOffset = useParallax(0.3);
  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-30 scale-110 animate-parallax"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0 gradient-dark opacity-80" />
      </div>

      {/* Enhanced floating particles with parallax */}
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
              transform: `translateY(${parallaxOffset * (0.1 + Math.random() * 0.3)}px)`,
            }}
          />
        ))}
        
        {/* Large gradient orbs */}
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translateY(${parallaxOffset * 0.4}px)`
          }} 
        />
      </div>

      {/* Enhanced Content with staggered animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div>
          <div className={`flex items-center justify-center gap-2 mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : ''}`}>
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              Innovation • Technology • Excellence
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight transition-all duration-1200 delay-200 ${isVisible ? 'animate-reveal' : ''}`}>
            Transform Your
            <br />
            <span className="text-gradient animate-gradient">Business Future</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'animate-reveal' : ''}`}>
            Emerging technology into practical solutions driving{" "}
            <span className="text-primary font-semibold">measurable growth</span>{" "}
            through data analytics, custom solutions, and responsible AI.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in' : ''}`}>
            <Button 
              size="lg" 
              className="group gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 hover:shadow-premium transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="gradient-border">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background border-none text-foreground hover:bg-primary/5 font-semibold px-8 py-4 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats with glass morphism */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'animate-scale-in' : ''}`}>
          <div className="glass-morphism-strong p-6 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="glass-morphism-strong p-6 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="glass-morphism-strong p-6 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Innovation Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;