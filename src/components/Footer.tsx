import { Button } from "@/components/ui/button";
import { Sparkles, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-primary/20">
      <div className="absolute inset-0 gradient-dark opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="gradient-primary p-2 rounded-lg shadow-glow">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-black text-xl text-gradient">OMNI INNOVATIONS</div>
                <div className="text-xs text-muted-foreground font-mono -mt-1">LLC</div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transforming businesses through cutting-edge technology, data-driven analytics, 
              and responsible AI integration. Your partner in digital transformation.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Richland, Washington, United States</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@omniinnovationsllc.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <div className="space-y-2">
              {[
                "Data Analytics",
                "Custom Web Solutions", 
                "AI Integration",
                "Energy Modeling",
                "Process Automation",
                "Consulting"
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <div className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
                { label: "Current Site", href: "http://omniinnovationsllc.com/", external: true }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {item.label}
                  {item.external && <ExternalLink className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Omni Innovations LLC. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/brian-hamm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              
              <Button 
                size="sm" 
                className="gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;