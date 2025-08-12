import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Briefcase, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useParallax";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const experience = [
    {
      title: "Co-Founder & CEO",
      company: "Omni Innovations LLC",
      period: "August 2024 - Present",
      description: "Leading digital transformation for SMBs through data analytics, AI integration, and custom solutions.",
      achievements: ["Founded family business focused on ethical technology", "Delivered measurable growth for clients"]
    },
    {
      title: "Sr. Research Scientist",
      company: "Bira Energy (California Southern Edison)",
      period: "November 2022 - Present", 
      description: "Advanced energy analytics using BeOPT across California's climate zones for grid optimization.",
      achievements: ["Analyzed 50+ building models", "Delivered strategic insights for utility operations"]
    },
    {
      title: "Lead Health Physics Technician",
      company: "Hanford Tank Waste Operations",
      period: "June 2019 - Present",
      description: "Safety leadership, custom software development, and emergency response coordination.",
      achievements: ["ALARA Committee voting member", "Primary Building Warden", "Custom VBA solutions"]
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Information Technology",
      school: "Columbia Southern University", 
      period: "2020 - 2026",
      status: "In Progress"
    },
    {
      degree: "Associate of Science",
      school: "Columbia Southern University",
      period: "2021 - 2022",
      status: "Completed"
    },
    {
      degree: "Computer & Electrical Pre-Engineering",
      school: "Spokane Colleges",
      period: "2016 - 2018", 
      status: "3.5 GPA"
    }
  ];

  const certifications = [
    "Microshield Expert - Radiation Shielding Simulations",
    "Emergency Response - Primary Building Warden",
    "ALARA Committee - Voting Member",
    "VBA Programming - Custom Solutions Development"
  ];

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
                About <span className="text-gradient">Omni Innovations</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A husband and wife partnership dedicated to bringing modern technology solutions to small and medium businesses while reshaping tech for a sustainable future.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="glass-morphism-strong p-8 rounded-2xl border border-primary/20 hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe technology should ease our lives, not burden them. Our mission is to help fellow SMBs harness the power of modern tech solutions while building a more sustainable, renewable future.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a family business, we're committed to ethical innovation that delivers real, measurable value to our clients and contributes to a better tomorrow.
                </p>
              </div>
              
              <div className="glass-morphism-strong p-8 rounded-2xl border border-primary/20 hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our Partnership</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded as a husband and wife LLC, Omni Innovations combines decades of technical expertise with a shared vision for responsible technology implementation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We leverage cutting-edge expertise in data analytics, AI integration, and custom solutions to transform businesses while maintaining our commitment to transparency and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">
                Our <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Two decades of innovation across DOE nuclear sites, energy research, and cutting-edge technology development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="glass-morphism border-primary/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Technical Leadership</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Brian brings 20+ years of experience from DOE nuclear sites to cutting-edge AI platforms, with expertise spanning:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Data Analytics & AI Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Energy Modeling & Grid Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Custom Software Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Process Automation & Optimization</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-morphism border-primary/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Our Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">15+</div>
                    <div className="text-sm text-muted-foreground">Major Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">50TB+</div>
                    <div className="text-sm text-muted-foreground">Data Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">100%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">DOE</div>
                    <div className="text-sm text-muted-foreground">Certified</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values & Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">
                Our <span className="text-gradient">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-morphism border-primary/20 p-8 text-center">
                <div className="gradient-primary p-4 rounded-lg w-fit mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sustainable Innovation</h3>
                <p className="text-muted-foreground">
                  We develop solutions that contribute to a renewable future, ensuring technology serves humanity responsibly.
                </p>
              </Card>

              <Card className="glass-morphism border-primary/20 p-8 text-center">
                <div className="gradient-primary p-4 rounded-lg w-fit mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">SMB Partnership</h3>
                <p className="text-muted-foreground">
                  We believe small and medium businesses are the backbone of innovation and deserve world-class technology.
                </p>
              </Card>

              <Card className="glass-morphism border-primary/20 p-8 text-center">
                <div className="gradient-primary p-4 rounded-lg w-fit mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ethical Technology</h3>
                <p className="text-muted-foreground">
                  Transparency, responsibility, and human-centered design guide every solution we create.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="glass-morphism border-primary/20 p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your vision into reality? Let's discuss how we can create something extraordinary.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;