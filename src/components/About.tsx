import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Lightbulb, 
  Shield, 
  ArrowRight,
  BookOpen,
  Cpu,
  Database
} from "lucide-react";

const expertise = [
  { name: "Python & Data Analytics", level: 95 },
  { name: "AI/ML Integration", level: 90 },
  { name: "Web Development", level: 88 },
  { name: "Energy Modeling", level: 92 },
  { name: "Database Management", level: 85 },
  { name: "Process Automation", level: 93 }
];

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ethical Technology",
    description: "We prioritize transparency and responsible implementation in every solution we deliver."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-Centric",
    description: "Your success is our mission. We build lasting partnerships based on trust and results."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "Cutting-edge solutions that push boundaries while remaining practical and scalable."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <Badge variant="outline" className="border-primary/30 text-primary mb-4">
                Founded in 2024
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Twenty Years of 
                <span className="text-gradient block">Innovation</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At 15, a profound experience sparked a 20-year mission to innovate. 
                This dedication drives technology solutions across industries.
              </p>
              
              <p>
                From DOE nuclear sites to AI platforms, every solution reflects 
                commitment to excellence and ethical innovation that saves time and money.
              </p>

              <p>
                <strong className="text-foreground">Omni Innovations LLC</strong> transforms 
                businesses through cutting-edge expertise and data-driven results.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {values.map((value, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-4">
                  <div className="gradient-primary p-2 rounded-lg w-fit mb-3">
                    <div className="text-primary-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{value.title}</h4>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>

            <Button 
              size="lg" 
              className="mt-8 gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/about'}
            >
              Our Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Column - Expertise & Stats */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Expertise Levels */}
            <Card className="glass-morphism border-primary/20 p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary" />
                Technical Expertise
              </h3>
              <div className="space-y-4">
                {expertise.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="glass-morphism border-primary/20 p-6 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </Card>
              
              <Card className="glass-morphism border-primary/20 p-6 text-center">
                <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient">50TB+</div>
                <div className="text-sm text-muted-foreground">Data Processed</div>
              </Card>
              
              <Card className="glass-morphism border-primary/20 p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </Card>
              
              <Card className="glass-morphism border-primary/20 p-6 text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient">DOE</div>
                <div className="text-sm text-muted-foreground">Certified Expert</div>
              </Card>
            </div>

            {/* Certifications */}
            <Card className="glass-morphism border-primary/20 p-6">
              <h4 className="font-semibold mb-4">Key Certifications & Education</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Bachelor's IT - Columbia Southern University</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Microshield Expert - Radiation Simulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>DOE Nuclear Sites Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Health Physics Technician Lead</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;