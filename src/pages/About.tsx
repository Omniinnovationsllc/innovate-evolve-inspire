import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Briefcase, ArrowRight } from "lucide-react";
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6">
                  About <span className="text-gradient">Brian</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  At 15, I realized life had handed me an incredible opportunity to grow and refine myself into anything. Twenty years later, that mission continues to fuel my passion for innovation, education, and technology.
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="gradient-primary text-primary-foreground font-semibold"
                  >
                    Download Resume
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/30 hover:border-primary"
                  >
                    LinkedIn Profile
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-morphism p-8 rounded-2xl border border-primary/20">
                  <h3 className="text-2xl font-bold mb-6">Core Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Turning emerging technology into practical tools that save time and money. Across DOE nuclear sites, start-ups, and research projects, I've used conviction and commitment to deliver results that matter."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">
                Professional <span className="text-gradient">Experience</span>
              </h2>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card 
                  key={index}
                  className="glass-morphism border-primary/20 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="gradient-primary p-3 rounded-lg shadow-glow flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {job.period}
                          </Badge>
                        </div>
                        <h4 className="text-lg text-primary mb-3">{job.company}</h4>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        <div className="space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card key={index} className="glass-morphism border-primary/20 p-6">
                      <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-primary mb-1">{edu.school}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span>{edu.status}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Award className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Certifications</h2>
                </div>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="glass-morphism border-primary/20 p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-foreground">{cert}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
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