import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Zap, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "BeOPT Energy Modeling",
    client: "California Southern Edison",
    description: "Comprehensive residential energy simulation project analyzing 50+ building models across California's diverse climate zones to optimize state electricity grid performance.",
    impact: "Enabled strategic resource allocation and demand management for major utility provider",
    technologies: ["Python", "BeOPT", "Data Analytics", "Energy Modeling"],
    category: "Energy Analytics",
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: {
      modelsProcessed: "50+",
      climateZones: "16",
      dataPoints: "10M+"
    }
  },
  {
    title: "EasyAiResume.com",
    client: "Consumer Platform",
    description: "AI-powered resume optimization platform using OpenAI's GPT-4 to analyze job descriptions and generate keyword-optimized resumes with 95% user satisfaction.",
    impact: "Streamlined job application process for thousands of users",
    technologies: ["OpenAI GPT-4", "Flask", "Auth0", "Stripe", "PostgreSQL"],
    category: "AI Platform",
    icon: <Zap className="w-6 h-6" />,
    metrics: {
      userSatisfaction: "95%",
      resumes: "1000+",
      avgImprovement: "40%"
    }
  },
  {
    title: "Front Flats Philadelphia",
    client: "Gary Klein Associates",
    description: "Ultrasonic flow analysis for new construction hot water system validation, ensuring engineering efficiency and performance optimization.",
    impact: "Validated system efficiency and provided actionable engineering insights",
    technologies: ["Ultrasonic Analysis", "Python", "Custom Analytics"],
    category: "Flow Analysis",
    icon: <Users className="w-6 h-6" />,
    metrics: {
      efficiency: "98%",
      accuracy: "99.2%",
      timeReduced: "60%"
    }
  },
  {
    title: "Beach Cities Flow Analysis",
    client: "BluesenseIO Partners",
    description: "Custom interface and database solution for analyzing massive ultrasonic flow meter datasets to detect and validate leak repairs.",
    impact: "Rapid identification of system improvements and leak resolution",
    technologies: ["Python", "Plotly", "Flask", "SQL", "Custom UI"],
    category: "Data Platform",
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: {
      dataProcessed: "1TB+",
      analysisTime: "90% faster",
      accuracy: "99.5%"
    }
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 gradient-dark opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, measurable outcomes, transformative impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group glass-morphism border-primary/20 hover:border-primary/40 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="gradient-primary p-3 rounded-lg shadow-glow flex-shrink-0">
                        <div className="text-primary-foreground">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {project.category}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {project.client}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="bg-primary/5 p-4 rounded-lg mb-6 border border-primary/10">
                      <h4 className="text-sm font-semibold text-primary mb-2">Impact</h4>
                      <p className="text-sm text-foreground">{project.impact}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="border-muted text-muted-foreground text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="gradient-primary text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary/30 hover:border-primary"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3 max-w-xs">
                    <h4 className="font-semibold text-foreground mb-4">Key Metrics</h4>
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="glass-morphism p-3 rounded-lg">
                        <div className="text-xl font-bold text-gradient mb-1">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <Button 
            size="lg" 
            className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/portfolio'}
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;