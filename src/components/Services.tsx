import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Code2, Brain, ArrowRight } from "lucide-react";
import analyticsIcon from "@/assets/analytics-icon.jpg";
import webSolutionsIcon from "@/assets/web-solutions-icon.jpg";
import aiIcon from "@/assets/ai-integration-icon.jpg";

const services = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data-Driven Analytics",
    description: "Transform datasets into actionable insights. Energy modeling, flow analysis, and performance optimization.",
    image: analyticsIcon,
    features: ["Energy Optimization", "Performance Tracking", "Custom Reporting", "Predictive Analytics"],
    caseStudy: "California Southern Edison project: Processed 50+ building energy models to optimize state electricity grid performance."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Custom Web Solutions",
    description: "Enterprise applications to e-commerce platforms - scalable solutions that grow with your business.",
    image: webSolutionsIcon,
    features: ["Full-Stack Development", "E-commerce Platforms", "Custom Interfaces", "API Integration"],
    caseStudy: "RizzCat Clothing: Creating a premium online shopping experience with cutting-edge technology."
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Responsible AI Integration",
    description: "Ethical AI implementations with transparent processes delivering measurable results.",
    image: aiIcon,
    features: ["AI Automation", "Natural Language Processing", "Document Analysis", "Intelligent Search"],
    caseStudy: "EasyAiResume.com: AI-powered resume optimization achieving 95% user satisfaction rate."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core pillars of innovation that transform businesses into industry leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group glass-morphism border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                {/* Service Icon & Image */}
                <div className="relative mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Case Study */}
                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2">Case Study</h4>
                  <p className="text-sm text-muted-foreground">{service.caseStudy}</p>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group border-primary/30 hover:border-primary text-foreground font-semibold"
                  onClick={() => {
                    const servicePages = ['/services/data-analytics', '/services/web-solutions', '/services/ai-integration'];
                    window.location.href = servicePages[index];
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;