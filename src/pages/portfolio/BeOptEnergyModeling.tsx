import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, BarChart3, Zap, Users, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import beoptPreview from "@/assets/projects/beopt-preview.jpg";

const BeOptEnergyModelingPage = () => {
  const projectDetails = {
    title: "BeOPT Energy Modeling",
    client: "California Southern Edison",
    category: "Energy Analytics",
    timeline: "November 2022 - Present",
    location: "California",
    status: "Completed"
  };

  const metrics = [
    { label: "Building Models Processed", value: "50+", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Climate Zones Analyzed", value: "16", icon: <MapPin className="w-6 h-6" /> },
    { label: "Data Points Processed", value: "10M+", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const technologies = [
    "Python", "BeOPT", "Data Analytics", "Energy Modeling", "Visual Basic", "Statistical Analysis"
  ];

  const challenges = [
    "Processing massive datasets across diverse climate conditions while maintaining accuracy",
    "Ensuring energy performance modeling precision across 16 distinct California climate zones",
    "Creating actionable insights for grid optimization and strategic resource allocation",
    "Handling complex building envelope components and mechanical systems analysis"
  ];

  const solutions = [
    "Developed automated data processing pipelines using Python for efficient dataset management",
    "Implemented robust validation protocols ensuring 99%+ accuracy in energy modeling results",
    "Created comprehensive analysis framework covering envelope, mechanical, water heating, lighting systems",
    "Built custom reporting system delivering actionable insights for utility grid optimization"
  ];

  const results = [
    "Successfully analyzed 50+ residential building models across all 16 California climate zones",
    "Identified critical peak usage patterns enabling strategic resource allocation decisions",
    "Delivered comprehensive performance reports supporting major utility provider operations",
    "Enabled data-driven grid optimization strategies for improved demand management"
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
                  Comprehensive residential energy simulation analyzing 50+ building models across 
                  California's 16 climate zones to optimize grid performance and strategic resource allocation.
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
                  Discuss Similar Project
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={beoptPreview} 
                  alt="BeOPT Energy Modeling project preview"
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
            <h2 className="text-3xl font-bold text-center mb-12">Project Impact</h2>
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

        {/* Technologies Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-4 text-center">
                  <span className="font-semibold text-foreground text-sm">{tech}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="py-20">
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
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Project <span className="text-gradient">Results</span>
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

        {/* Impact Quote */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Card className="glass-morphism border-primary/20 p-12">
              <blockquote className="text-2xl font-medium text-muted-foreground mb-6 italic">
                "This comprehensive analysis enabled strategic resource allocation and demand management 
                for major utility provider operations across California."
              </blockquote>
              <div className="text-primary font-semibold">Project Impact Statement</div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Similar Energy Analytics?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our energy modeling expertise can optimize your systems and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
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

export default BeOptEnergyModelingPage;