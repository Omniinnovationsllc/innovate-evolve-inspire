import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, BarChart3, Zap, Calendar, MapPin, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import flowPreview from "@/assets/projects/flow-analysis-preview.jpg";

const FrontFlatsPhiladelphiaPage = () => {
  const projectDetails = {
    title: "Front Flats Philadelphia",
    client: "Gary Klein Associates",
    category: "Flow Analysis",
    timeline: "December 2024",
    location: "Philadelphia, PA",
    status: "Completed"
  };

  const metrics = [
    { label: "System Efficiency", value: "98%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Measurement Accuracy", value: "99.2%", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Time Reduction", value: "60%", icon: <Zap className="w-6 h-6" /> }
  ];

  const technologies = [
    "Ultrasonic Analysis", "Python", "Custom Analytics", "Data Validation", "Statistical Modeling", "Real-time Processing"
  ];

  const projectScope = [
    {
      title: "System Validation",
      description: "Comprehensive validation of hot water system efficiency in new construction projects"
    },
    {
      title: "Flow Measurement",
      description: "Precision ultrasonic flow measurement technology for accurate system assessment"
    },
    {
      title: "Performance Analysis",
      description: "Custom Python analytics to assess system performance and identify optimization opportunities"
    },
    {
      title: "Engineering Insights",
      description: "Actionable engineering recommendations based on comprehensive data analysis"
    },
    {
      title: "Partnership Collaboration",
      description: "Close collaboration with BlueSense partners for integrated solution delivery"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous validation protocols ensuring construction industry standards compliance"
    }
  ];

  const challenges = [
    "Ensuring measurement accuracy in active construction environment with potential interference",
    "Real-time data processing and validation while maintaining precision standards",
    "Coordinating with multiple engineering teams and construction schedules",
    "Adapting ultrasonic technology to diverse building configurations and materials"
  ];

  const solutions = [
    "Implemented advanced calibration protocols and environmental compensation algorithms",
    "Developed real-time data processing pipeline with immediate validation and quality checks",
    "Created collaborative workflow system enabling seamless multi-team coordination",
    "Designed adaptive measurement protocols for various construction configurations"
  ];

  const results = [
    "Successfully validated 98% system efficiency across all measured parameters",
    "Achieved 99.2% measurement accuracy through advanced ultrasonic analysis techniques",
    "Delivered comprehensive performance reports within project timeline constraints",
    "Reduced analysis time by 60% compared to traditional measurement methods"
  ];

  const impactMetrics = [
    { label: "Construction Projects", value: "Multiple", description: "New construction hot water systems analyzed" },
    { label: "Engineering Teams", value: "3+", description: "Collaborative partnerships established" },
    { label: "Data Points", value: "10,000+", description: "Precision measurements collected and analyzed" },
    { label: "Efficiency Gains", value: "15%", description: "Average system optimization achieved" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            onClick={() => window.location.href = '/portfolio'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-dark opacity-50" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {projectDetails.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {projectDetails.client}
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  {projectDetails.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Advanced ultrasonic flow analysis for new construction hot water system validation, 
                  ensuring engineering efficiency and performance optimization through precision data analytics.
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{projectDetails.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{projectDetails.location}</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Discuss Flow Analysis Project
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={flowPreview} 
                  alt="Front Flats Philadelphia flow analysis project"
                  className="w-full rounded-xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Project Performance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-8 text-center">
                  <div className="gradient-primary p-4 rounded-lg shadow-glow mx-auto mb-4 w-fit">
                    <div className="text-primary-foreground">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Scope */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Project Scope</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectScope.map((scope, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6">
                  <h3 className="text-lg font-bold mb-3 text-gradient">{scope.title}</h3>
                  <p className="text-muted-foreground text-sm">{scope.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies & Methods</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-4 text-center">
                  <span className="font-semibold text-foreground text-sm">{tech}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-gradient">Challenges</span>
                </h2>
                <div className="space-y-6">
                  {challenges.map((challenge, index) => (
                    <Card key={index} className="glass-morphism border-primary/20 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{challenge}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-gradient">Solutions</span>
                </h2>
                <div className="space-y-6">
                  {solutions.map((solution, index) => (
                    <Card key={index} className="glass-morphism border-primary/20 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-400 font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{solution}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Project <span className="text-gradient">Outcomes</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-foreground font-medium">{result}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Project <span className="text-gradient">Impact</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6 text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">{metric.value}</div>
                  <div className="font-semibold text-foreground mb-2">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Quote */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Card className="glass-morphism border-primary/20 p-12">
              <blockquote className="text-2xl font-medium text-muted-foreground mb-6 italic">
                "The precision and efficiency of this flow analysis project exceeded our expectations. 
                The collaborative approach and technical expertise delivered actionable insights that 
                directly improved our construction project outcomes."
              </blockquote>
              <div className="text-primary font-semibold">Gary Klein Associates</div>
              <div className="text-sm text-muted-foreground">Engineering Partnership</div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Precision Flow Analysis?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our ultrasonic analysis expertise can optimize your engineering projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Analysis Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary"
                onClick={() => window.location.href = '/portfolio'}
              >
                View More Projects
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FrontFlatsPhiladelphiaPage;