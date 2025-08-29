import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Users, Star, Calendar, MapPin, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import easyaiPreview from "@/assets/projects/easyairesume-preview.jpg";

const EasyAiResumePage = () => {
  const projectDetails = {
    title: "EasyAiResume.com",
    client: "Consumer Platform",
    category: "AI Platform",
    timeline: "August 2024",
    location: "Remote",
    status: "Live Platform"
  };

  const metrics = [
    { label: "User Satisfaction", value: "95%", icon: <Star className="w-6 h-6" /> },
    { label: "Resumes Generated", value: "1000+", icon: <Users className="w-6 h-6" /> },
    { label: "Average Improvement", value: "40%", icon: <Zap className="w-6 h-6" /> }
  ];

  const technologies = [
    "OpenAI GPT-4", "Flask", "Auth0", "Stripe", "PostgreSQL", "Celery", "Python", "JavaScript"
  ];

  const features = [
    {
      title: "AI-Powered Optimization",
      description: "Leverages GPT-4 to analyze job descriptions and optimize resume content for maximum impact"
    },
    {
      title: "Secure Authentication",
      description: "Auth0 integration ensures secure user authentication and account management"
    },
    {
      title: "Payment Processing",
      description: "Stripe integration for seamless subscription and payment handling"
    },
    {
      title: "Asynchronous Processing",
      description: "Celery task queue ensures fast response times even with high user volumes"
    },
    {
      title: "Database Management",
      description: "PostgreSQL for reliable data storage and user profile management"
    },
    {
      title: "Responsive Design",
      description: "Modern, mobile-first interface that works across all devices"
    }
  ];

  const challenges = [
    "Integrating multiple third-party services (OpenAI, Auth0, Stripe) seamlessly",
    "Ensuring high-quality AI-generated content that meets professional standards",
    "Maintaining fast response times with growing user base and complex AI processing",
    "Building intuitive user experience for non-technical users"
  ];

  const solutions = [
    "Developed robust API integration layer with comprehensive error handling and fallbacks",
    "Implemented content validation and quality assurance protocols for AI outputs",
    "Deployed Celery task queue system for asynchronous processing and improved performance",
    "Created step-by-step guided interface with real-time feedback and progress indicators"
  ];

  const results = [
    "Achieved 95% user satisfaction rating based on post-service surveys",
    "Successfully processed over 1000 resume optimizations with consistent quality",
    "Reduced job application preparation time by 60% on average",
    "Maintained 99.9% uptime with scalable cloud infrastructure"
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
                    {projectDetails.status}
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  {projectDetails.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  AI-powered resume optimization platform using OpenAI's GPT-4 to analyze job descriptions 
                  and generate keyword-optimized resumes with 95% user satisfaction.
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
                
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Build Similar Platform
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/30 hover:border-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Platform
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={easyaiPreview} 
                  alt="EasyAiResume platform preview"
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
            <h2 className="text-3xl font-bold text-center mb-12">Platform Success Metrics</h2>
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

        {/* Features Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-6">
                  <h3 className="text-lg font-bold mb-3 text-gradient">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
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
              Platform <span className="text-gradient">Impact</span>
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

        {/* User Testimonial */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Card className="glass-morphism border-primary/20 p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-muted-foreground mb-6 italic">
                "EasyAiResume transformed my job search. The AI-optimized resume helped me land 
                interviews at companies I never thought would respond. Absolutely worth it!"
              </blockquote>
              <div className="text-primary font-semibold">Sarah M., Software Engineer</div>
              <div className="text-sm text-muted-foreground">Verified Platform User</div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your AI Platform?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create an AI-powered solution that delivers real value to your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your AI Project
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

export default EasyAiResumePage;