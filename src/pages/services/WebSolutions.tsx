import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code2, CheckCircle, Globe, Smartphone, ShoppingCart, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import webSolutionsIcon from "@/assets/web-solutions-icon.jpg";

const WebSolutionsPage = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications built with modern frameworks and scalable architecture."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Progressive Web Apps",
      description: "Mobile-first applications that work seamlessly across all devices and platforms."
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Platforms",
      description: "Robust online shopping experiences with integrated payment processing and inventory management."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "API Development",
      description: "RESTful APIs and microservices designed for performance, security, and scalability."
    }
  ];

  const technologies = [
    "React & Next.js", "Node.js & Express", "Python & Flask", "PostgreSQL & MongoDB",
    "TypeScript", "Tailwind CSS", "AWS & Cloud Services", "Docker & Kubernetes"
  ];

  const benefits = [
    "Scalable solutions that grow with your business",
    "Modern, responsive designs for all devices",
    "Secure, high-performance applications",
    "SEO-optimized for maximum visibility",
    "Comprehensive testing and quality assurance",
    "Ongoing maintenance and support"
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
                  Custom Web Solutions
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  Build Your Digital <span className="text-gradient">Foundation</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  From enterprise applications to e-commerce platforms, we create scalable web solutions 
                  that drive business growth and deliver exceptional user experiences.
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
                  src={webSolutionsIcon} 
                  alt="Web Solutions"
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
              <h2 className="text-4xl font-bold mb-6">Our Development Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive web development services tailored to your unique business requirements
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

        {/* Technologies Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Technologies We <span className="text-gradient">Master</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We leverage cutting-edge technologies to build robust, scalable solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="glass-morphism border-primary/20 p-4 text-center">
                  <span className="font-semibold text-foreground">{tech}</span>
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
                  Why Choose Our <span className="text-gradient">Web Solutions</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We deliver more than just code - we create digital experiences that drive business success.
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
                <h3 className="text-2xl font-bold mb-4 text-center">Featured Project</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gradient mb-2">95%</div>
                  <div className="text-muted-foreground">User Satisfaction Rate</div>
                </div>
                <p className="text-muted-foreground mb-6">
                  EasyAiResume.com: A comprehensive AI-powered platform featuring secure authentication, 
                  payment processing, and advanced document processing capabilities.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:border-primary"
                  onClick={() => window.location.href = '/portfolio/easyairesume'}
                >
                  View Project Details
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Card className="glass-morphism border-primary/20 p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's turn your vision into a powerful web solution that drives results.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebSolutionsPage;