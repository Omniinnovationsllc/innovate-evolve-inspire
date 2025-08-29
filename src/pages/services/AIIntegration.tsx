import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, CheckCircle, Bot, FileText, Search, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aiIcon from "@/assets/ai-integration-icon.jpg";

const AIIntegrationPage = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "OpenAI GPT Integration",
      description: "Leverage the power of GPT-4 and other advanced language models for intelligent automation."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Processing",
      description: "Automated document analysis, extraction, and processing with high accuracy rates."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Intelligent Search",
      description: "AI-powered search capabilities that understand context and intent for better results."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Automation",
      description: "Streamline workflows and eliminate repetitive tasks with intelligent automation."
    }
  ];

  const useCases = [
    "Resume and document optimization",
    "Automated content generation",
    "Intelligent data extraction",
    "Customer service chatbots",
    "Document classification and routing",
    "Sentiment analysis and insights"
  ];

  const benefits = [
    "Reduce manual processing time by up to 80%",
    "Improve accuracy and consistency",
    "Scale operations without increasing headcount",
    "Enhance customer experience with intelligent responses",
    "Generate actionable insights from unstructured data",
    "Maintain transparency and ethical AI practices"
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
                  AI Integration & Automation
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  Responsible <span className="text-gradient">AI Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Implement ethical AI solutions that enhance efficiency while maintaining transparency. 
                  Our responsible approach ensures AI serves your business goals without compromising trust.
                </p>
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Explore AI Solutions
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={aiIcon} 
                  alt="AI Integration"
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
              <h2 className="text-4xl font-bold mb-6">AI Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge AI technologies implemented with ethical considerations and measurable outcomes
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

        {/* Use Cases Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                AI <span className="text-gradient">Use Cases</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Real-world applications where AI delivers measurable business value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-4 text-center">
                  <span className="font-semibold text-foreground">{useCase}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Choose Our <span className="text-gradient">AI Solutions</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We prioritize ethical AI implementation that delivers tangible business results while maintaining transparency and trust.
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
                <h3 className="text-2xl font-bold mb-4 text-center">Success Story</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gradient mb-2">80%</div>
                  <div className="text-muted-foreground">Reduction in Manual Work</div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Automated flight log processing for US Navy HSC-8, eliminating tedious manual data entry 
                  and significantly improving operational efficiency.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:border-primary"
                  onClick={() => window.location.href = '/portfolio'}
                >
                  View AI Projects
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Ethics Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-gradient">Ethical Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We believe AI should enhance human capabilities, not replace them. Our implementations prioritize:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-morphism border-primary/20 p-6">
                <h3 className="font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground text-sm">Clear explanations of how AI makes decisions</p>
              </Card>
              <Card className="glass-morphism border-primary/20 p-6">
                <h3 className="font-bold mb-2">Accountability</h3>
                <p className="text-muted-foreground text-sm">Human oversight and responsibility for AI outcomes</p>
              </Card>
              <Card className="glass-morphism border-primary/20 p-6">
                <h3 className="font-bold mb-2">Fairness</h3>
                <p className="text-muted-foreground text-sm">Bias detection and mitigation in all AI systems</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Card className="glass-morphism border-primary/20 p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Implement Responsible AI?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your operations while maintaining ethical standards.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule AI Consultation
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIIntegrationPage;