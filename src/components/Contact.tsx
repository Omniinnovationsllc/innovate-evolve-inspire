import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const benefits = [
  "Free initial consultation",
  "Custom solution roadmap",
  "Transparent pricing",
  "Ongoing support included"
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-dark opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
            <Badge variant="outline" className="border-primary/30 text-primary">
              Ready to Transform?
            </Badge>
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Start Your <span className="text-gradient">Innovation Journey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with cutting-edge technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-morphism border-primary/20 p-8 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Get Started Today
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-muted/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-muted/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input 
                  placeholder="Your Company Name" 
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <select className="w-full p-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none">
                  <option>Data Analytics & Insights</option>
                  <option>Custom Web Application</option>
                  <option>AI Integration</option>
                  <option>Energy Modeling</option>
                  <option>Process Automation</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  className="bg-muted/50 border-primary/20 focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Direct Contact */}
            <Card className="glass-morphism border-primary/20 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">hello@omniinnovationsllc.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Schedule Call</div>
                    <div className="text-sm text-muted-foreground">Book a free consultation</div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-6 border-primary/30 hover:border-primary"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Free Consultation
              </Button>
            </Card>

            {/* What You Get */}
            <Card className="glass-morphism border-primary/20 p-8">
              <h3 className="text-xl font-bold mb-6">What You Get</h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Response Time */}
            <Card className="glass-morphism border-primary/20 p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">&lt; 24hrs</div>
              <div className="text-sm text-muted-foreground">Average response time</div>
              <div className="text-xs text-primary mt-2">We typically respond within a few hours</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;