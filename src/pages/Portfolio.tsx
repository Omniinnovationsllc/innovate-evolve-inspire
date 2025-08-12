import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Zap, TrendingUp, Calendar, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useParallax";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import project preview images
import beoptPreview from "@/assets/projects/beopt-preview.jpg";
import easyaiPreview from "@/assets/projects/easyairesume-preview.jpg";
import flowPreview from "@/assets/projects/flow-analysis-preview.jpg";
import beachPreview from "@/assets/projects/beach-cities-preview.jpg";

const PortfolioPage = () => {
  const projects = [
    {
      title: "BeOPT Energy Modeling",
      client: "California Southern Edison",
      description: "Comprehensive residential energy simulation analyzing 50+ building models across California's climate zones to optimize grid performance and strategic resource allocation.",
      fullDescription: "Led a complex energy modeling initiative processing extensive datasets using the Building Energy Optimization Tool (BeOPT). Analyzed envelope components, mechanical systems, water heating, lighting, appliances, and renewable energy systems across 16 distinct California climate zones. Delivered critical insights for power grid consumption patterns, enabling data-driven decision making for major utility provider operations.",
      impact: "Enabled strategic resource allocation and demand management for major utility provider",
      technologies: ["Python", "BeOPT", "Data Analytics", "Energy Modeling", "Visual Basic"],
      category: "Energy Analytics",
      icon: <TrendingUp className="w-6 h-6" />,
      preview: beoptPreview,
      timeline: "November 2022 - Present",
      location: "California",
      metrics: {
        modelsProcessed: "50+",
        climateZones: "16", 
        dataPoints: "10M+"
      },
      challenges: [
        "Processing massive datasets across diverse climate conditions",
        "Ensuring accuracy in energy performance modeling",
        "Creating actionable insights for grid optimization"
      ],
      results: [
        "Identified peak usage patterns across all climate zones", 
        "Delivered comprehensive analysis reports",
        "Enabled improved resource allocation strategies"
      ]
    },
    {
      title: "EasyAiResume.com",
      client: "Consumer Platform",
      description: "AI-powered resume optimization platform using OpenAI's GPT-4 to analyze job descriptions and generate keyword-optimized resumes achieving 95% user satisfaction.",
      fullDescription: "Developed a comprehensive web application leveraging OpenAI's ChatGPT-4 API to revolutionize the job application process. Implemented secure user authentication via Auth0, payment processing through Stripe, and robust data management with PostgreSQL. Features asynchronous task processing using Celery for enhanced performance and seamless user experience.",
      impact: "Streamlined job application process for thousands of users",
      technologies: ["OpenAI GPT-4", "Flask", "Auth0", "Stripe", "PostgreSQL", "Celery"],
      category: "AI Platform",
      icon: <Zap className="w-6 h-6" />,
      preview: easyaiPreview,
      timeline: "August 2024",
      location: "Remote",
      metrics: {
        userSatisfaction: "95%",
        resumes: "1000+",
        avgImprovement: "40%"
      },
      challenges: [
        "Integrating multiple third-party services seamlessly",
        "Ensuring high-quality AI-generated content",
        "Maintaining fast response times with large user base"
      ],
      results: [
        "Achieved 95% user satisfaction rating",
        "Processed over 1000 resume optimizations",
        "Reduced job application time by 60%"
      ]
    },
    {
      title: "Front Flats Philadelphia",
      client: "Gary Klein Associates",
      description: "Ultrasonic flow analysis for new construction hot water system validation, ensuring engineering efficiency and performance optimization through advanced data analytics.",
      fullDescription: "Collaborated with Gary Klein Associates and BlueSense partners to validate hot water system efficiency in new construction. Utilized sophisticated ultrasonic flow measurement technology and custom Python analytics to assess system performance, identify optimization opportunities, and provide actionable engineering insights.",
      impact: "Validated system efficiency and provided actionable engineering insights",
      technologies: ["Ultrasonic Analysis", "Python", "Custom Analytics", "Data Validation"],
      category: "Flow Analysis", 
      icon: <Users className="w-6 h-6" />,
      preview: flowPreview,
      timeline: "December 2024",
      location: "Philadelphia, PA",
      metrics: {
        efficiency: "98%",
        accuracy: "99.2%",
        timeReduced: "60%"
      },
      challenges: [
        "Ensuring measurement accuracy in construction environment",
        "Real-time data processing and validation", 
        "Coordinating with multiple engineering teams"
      ],
      results: [
        "Validated 98% system efficiency",
        "Delivered comprehensive performance reports",
        "Reduced analysis time by 60%"
      ]
    },
    {
      title: "Beach Cities Flow Analysis",
      client: "BluesenseIO Partners", 
      description: "Custom interface and database solution for analyzing massive ultrasonic flow meter datasets to detect and validate leak repairs with 99.5% accuracy.",
      fullDescription: "Partnered with Gary Klein & Associates and BluesenseIO to develop a comprehensive data analysis platform. Built custom interfaces using Python, Plotly, JavaScript, HTML, CSS, SQL, and Flask to process and analyze massive ultrasonic flow meter datasets. Enabled rapid identification of system improvements and leak resolution validation.",
      impact: "Rapid identification of system improvements and leak resolution",
      technologies: ["Python", "Plotly", "Flask", "SQL", "Custom UI", "JavaScript"],
      category: "Data Platform",
      icon: <TrendingUp className="w-6 h-6" />,
      preview: beachPreview,
      timeline: "October 2024", 
      location: "Los Angeles, CA",
      metrics: {
        dataProcessed: "1TB+",
        analysisTime: "90% faster",
        accuracy: "99.5%"
      },
      challenges: [
        "Processing terabytes of sensor data efficiently",
        "Creating intuitive interfaces for complex data",
        "Ensuring real-time analysis capabilities"
      ],
      results: [
        "Processed over 1TB of flow data",
        "Achieved 99.5% analysis accuracy",
        "Reduced analysis time by 90%"
      ]
    }
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
                Project <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real projects, measurable outcomes, transformative impact across energy, AI, and data analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              {projects.map((project, index) => (
                <Card 
                  key={index}
                  className="group glass-morphism-strong border-primary/20 hover:border-primary/40 transition-all duration-700 hover:scale-105 hover:shadow-premium"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Project Preview */}
                      <div className="lg:col-span-1">
                        <div className="relative overflow-hidden rounded-xl shadow-premium">
                          <img 
                            src={project.preview} 
                            alt={`${project.title} preview`}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge variant="outline" className="border-primary/30 text-primary mb-2">
                              {project.category}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{project.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="gradient-primary p-3 rounded-lg shadow-glow flex-shrink-0">
                            <div className="text-primary-foreground">
                              {project.icon}
                            </div>
                          </div>
                          <div>
                            <Badge variant="secondary" className="text-xs mb-2">
                              {project.client}
                            </Badge>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.fullDescription}
                        </p>

                        <div className="bg-primary/5 p-4 rounded-lg mb-6 border border-primary/10">
                          <h4 className="text-sm font-semibold text-primary mb-2">Impact</h4>
                          <p className="text-sm text-foreground">{project.impact}</p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="border-muted text-muted-foreground text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.metrics).map(([key, value], idx) => (
                            <div key={idx} className="glass-morphism p-3 rounded-lg text-center">
                              <div className="text-xl font-bold text-gradient mb-1">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button 
                            size="sm" 
                            className="gradient-primary text-primary-foreground"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-primary/30 hover:border-primary"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center mt-20">
              <Card className="glass-morphism-strong border-primary/20 p-12 hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's create something extraordinary together.
                </p>
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-4 shadow-glow hover:scale-105 hover:shadow-premium transition-all duration-300"
                >
                  Start Your Project
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;