import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

const SocialStrip = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      <a
        href="https://www.linkedin.com/in/brian-hamm"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 glass-morphism border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 rounded-lg group"
      >
        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </a>
      
      <a
        href="mailto:hello@omniinnovationsllc.com"
        className="p-3 glass-morphism border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 rounded-lg group"
      >
        <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </a>
      
      <a
        href="http://omniinnovationsllc.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 glass-morphism border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 rounded-lg group"
      >
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </a>
    </div>
  );
};

export default SocialStrip;