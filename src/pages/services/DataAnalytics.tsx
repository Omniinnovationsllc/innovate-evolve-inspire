import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, CheckCircle, TrendingUp, Database, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import analyticsIcon from "@/assets/analytics-icon.jpg";

const DataAnalyticsPage = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "BeOPT Energy Modeling",
      description: "Advanced residential and commercial energy simulations using industry-standard modeling tools."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Custom Data Visualization",
      description: "Interactive dashboards and reports tailored to your specific data requirements."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Identify bottlenecks and opportunities for improvement through comprehensive analysis."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Grid Impact Assessment",
      description: "Evaluate the impact of energy systems on electrical grid performance and stability."
    }
  ];

  const benefits = [
    "Reduce energy costs by up to 40%",
    "Optimize system performance and efficiency",
    "Make data-driven decisions with confidence",
    "Identify opportunities for improvement",
    "Generate comprehensive analytical reports",
    "Ensure regulatory compliance"
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
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-dark opacity-50" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="border-primary/30 text-primary mb-4">
                  Data Analytics & Energy Modeling
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  Transform Data Into <span className="text-gradient">Actionable Insights</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Harness the power of advanced analytics and energy modeling to optimize performance, 
                  reduce costs, and make informed decisions that drive real business results.
                </p>
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Project
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={analyticsIcon} 
                  alt="Data Analytics"
                  className="w-full rounded-xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Core Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive analytics solutions designed to unlock the value in your data
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="gradient-primary p-3 rounded-lg shadow-glow flex-shrink-0">
                      <div className="text-primary-foreground">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Choose Our <span className="text-gradient">Analytics Solutions</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our proven methodology delivers measurable results that transform how you understand and optimize your operations.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="glass-morphism border-primary/20 p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Case Study Highlight</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-muted-foreground">Building Models Analyzed</div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Partnered with California Southern Edison to analyze residential energy consumption 
                  patterns across 16 climate zones, enabling strategic grid optimization and resource allocation.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:border-primary"
                  onClick={() => window.location.href = '/portfolio/beopt-energy-modeling'}
                >
                  View Full Case Study
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Card className="glass-morphism border-primary/20 p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our analytics expertise can drive measurable improvements in your operations.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Consultation
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DataAnalyticsPage;