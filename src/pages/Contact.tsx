import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
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
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your business? Let's discuss your project and create something extraordinary together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="glass-morphism border-primary/20 p-8">
                <h2 className="text-2xl font-bold mb-6">Start Your Project</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select className="w-full mt-2 px-3 py-2 bg-input border border-border rounded-md">
                      <option>Data Analytics & Energy Modeling</option>
                      <option>Custom Web Solutions</option>
                      <option>AI Integration & Automation</option>
                      <option>Multiple Services</option>
                      <option>Not Sure - Need Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="glass-morphism border-primary/20 p-8">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 gradient-primary rounded-lg shadow-glow">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:hello@omniinnovationsllc.com" className="text-primary hover:underline">
                          hello@omniinnovationsllc.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 gradient-primary rounded-lg shadow-glow">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Richland, Washington, United States</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 gradient-primary rounded-lg shadow-glow">
                        <Clock className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass-morphism border-primary/20 p-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Omni Innovations?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>20+ years of technical expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Proven results across DOE sites & startups</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Ethical & transparent technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Family business committed to your success</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;