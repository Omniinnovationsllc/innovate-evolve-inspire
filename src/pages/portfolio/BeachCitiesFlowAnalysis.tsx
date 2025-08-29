import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Database, Zap, Calendar, MapPin, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import beachPreview from "@/assets/projects/beach-cities-preview.jpg";

const BeachCitiesFlowAnalysisPage = () => {
  const projectDetails = {
    title: "Beach Cities Flow Analysis",
    client: "BluesenseIO Partners",
    category: "Data Platform",
    timeline: "October 2024",
    location: "Los Angeles, CA",
    status: "Completed"
  };

  const metrics = [
    { label: "Data Processed", value: "1TB+", icon: <Database className="w-6 h-6" /> },
    { label: "Analysis Speed", value: "90% faster", icon: <Zap className="w-6 h-6" /> },
    { label: "Accuracy Rate", value: "99.5%", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const technologies = [
    "Python", "Plotly", "Flask", "SQL", "JavaScript", "HTML/CSS", "Custom UI", "Data Processing"
  ];

  const platformFeatures = [
    {
      title: "Custom Interface Design",
      description: "Intuitive user interfaces designed specifically for complex ultrasonic flow data visualization"
    },
    {
      title: "Real-time Data Processing",
      description: "High-performance data processing pipelines handling terabytes of sensor data efficiently"
    },
    {
      title: "Interactive Visualizations",
      description: "Advanced Plotly-powered charts and graphs for comprehensive data analysis and insights"
    },
    {
      title: "Database Management",
      description: "Robust SQL database architecture optimized for large-scale flow meter data storage"
    },
    {
      title: "Leak Detection System",
      description: "Automated algorithms for rapid identification and validation of system improvements"
    },
    {
      title: "Reporting Dashboard",
      description: "Comprehensive reporting system generating actionable insights for engineering teams"
    }
  ];

  const challenges = [
    "Processing and analyzing terabytes of ultrasonic flow sensor data efficiently",
    "Creating intuitive user interfaces for complex engineering data visualization",
    "Ensuring real-time analysis capabilities without compromising accuracy",
    "Integrating multiple data sources and sensor types into unified platform"
  ];

  const solutions = [
    "Developed high-performance data processing architecture using Python and optimized SQL queries",
    "Created custom visualization components using Plotly and modern web technologies",
    "Implemented streaming data processing with real-time validation and quality assurance protocols",
    "Built flexible data integration layer supporting multiple sensor types and data formats"
  ];

  const results = [
    "Successfully processed over 1 terabyte of ultrasonic flow measurement data",
    "Achieved 99.5% accuracy in leak detection and system analysis",
    "Reduced data analysis time by 90% compared to traditional methods",
    "Enabled rapid identification of system improvements and leak resolution validation"
  ];

  const partnershipBenefits = [
    { title: "Gary Klein & Associates", description: "Engineering expertise and industry knowledge" },
    { title: "BluesenseIO", description: "Advanced sensor technology and data collection capabilities" },
    { title: "Technical Innovation", description: "Combined expertise delivering cutting-edge solutions" },
    { title: "Industry Impact", description: "Setting new standards for flow analysis and leak detection" }
  ];

  const dataInsights = [
    { metric: "Flow Patterns", value: "24/7", description: "Continuous monitoring and analysis" },
    { metric: "Leak Detection", value: "<1min", description: "Average detection time for system anomalies" },
    { metric: "System Efficiency", value: "98%+", description: "Overall platform performance and reliability" },
    { metric: "Data Accuracy", value: "99.5%", description: "Precision in flow measurement analysis" }
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
                  Custom interface and database solution for analyzing massive ultrasonic flow meter datasets 
                  to detect and validate leak repairs with 99.5% accuracy and 90% faster processing.
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
                  Build Data Analysis Platform
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={beachPreview} 
                  alt="Beach Cities Flow Analysis platform"
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
            <h2 className="text-3xl font-bold text-center mb-12">Platform Performance</h2>
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

        {/* Partnership Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Strategic <span className="text-gradient">Partnerships</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((partner, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6 text-center">
                  <h3 className="font-bold mb-3 text-gradient">{partner.title}</h3>
                  <p className="text-muted-foreground text-sm">{partner.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6">
                  <h3 className="text-lg font-bold mb-3 text-gradient">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-4 text-center">
                  <span className="font-semibold text-foreground text-sm">{tech}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Insights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Platform <span className="text-gradient">Analytics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataInsights.map((insight, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6 text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">{insight.value}</div>
                  <div className="font-semibold text-foreground mb-2">{insight.metric}</div>
                  <div className="text-sm text-muted-foreground">{insight.description}</div>
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
              Project <span className="text-gradient">Impact</span>
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

        {/* Client Testimonial */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Card className="glass-morphism border-primary/20 p-12">
              <blockquote className="text-2xl font-medium text-muted-foreground mb-6 italic">
                "This platform revolutionized how we analyze flow data. The 90% reduction in analysis time 
                and 99.5% accuracy rate has transformed our leak detection capabilities and operational efficiency."
              </blockquote>
              <div className="text-primary font-semibold">BluesenseIO Partners</div>
              <div className="text-sm text-muted-foreground">Technology Partnership</div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Data Analysis Platform?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build a solution that transforms your data into actionable insights and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Data Platform
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

export default BeachCitiesFlowAnalysisPage;