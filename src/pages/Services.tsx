import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Code, Brain, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & Energy Modeling",
      description: "Transform raw data into actionable insights with advanced analytics, energy simulations, and custom reporting solutions.",
      features: [
        "BeOPT residential energy modeling",
        "Custom data visualization dashboards",
        "Performance optimization analysis",
        "Grid impact assessments",
        "Ultrasonic flow analysis"
      ],
      caseStudy: "California Southern Edison project analyzing 50+ building models across 16 climate zones"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Solutions",
      description: "Build scalable, modern web applications tailored to your business needs with cutting-edge technology stacks.",
      features: [
        "Full-stack web development",
        "Progressive web applications",
        "E-commerce platforms",
        "Database design & optimization",
        "API development & integration"
      ],
      caseStudy: "EasyAiResume.com platform serving 1000+ users with 95% satisfaction"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration & Automation",
      description: "Implement responsible AI solutions that enhance efficiency while maintaining transparency and ethical standards.",
      features: [
        "OpenAI GPT integration",
        "Custom ML model development",
        "Process automation tools",
        "AI-powered analytics",
        "Intelligent document processing"
      ],
      caseStudy: "Automated flight log processing for US Navy HSC-8 reducing manual work by 80%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-dark opacity-50" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business operations and drive measurable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group glass-morphism border-primary/20 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="gradient-primary p-4 rounded-xl shadow-glow">
                            <div className="text-primary-foreground">
                              {service.icon}
                            </div>
                          </div>
                          <h2 className="text-3xl font-bold group-hover:text-gradient transition-all">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
                        <h3 className="text-lg font-semibold text-primary mb-4">Case Study Highlight</h3>
                        <p className="text-foreground leading-relaxed">
                          {service.caseStudy}
                        </p>
                        
                        <Button className="mt-6 gradient-primary text-primary-foreground">
                          View Full Case Study
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-20">
              <Card className="glass-morphism border-primary/20 p-12">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how our expertise can drive your next breakthrough.
                </p>
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;