import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  Award,
  Leaf,
  Shield,
  Users,
  Globe,
  CheckCircle,
  Star,
  Target,
  Factory
} from "lucide-react";

const certifications = [
  {
    name: "GOTS",
    fullName: "Global Organic Textile Standard",
    description: "Certified for organic textile processing and environmental criteria",
    icon: Leaf,
    color: "bg-green-500",
    benefits: ["Organic fiber processing", "Environmental compliance", "Social responsibility"]
  },
  {
    name: "OEKO-TEX",
    fullName: "OEKO-TEX Standard 100",
    description: "Ensures textiles are free from harmful substances",
    icon: Shield,
    color: "bg-blue-500",
    benefits: ["Human-ecological safety", "Chemical compliance", "Consumer confidence"]
  },
  {
    name: "BCI",
    fullName: "Better Cotton Initiative",
    description: "Sustainable cotton production and supply chain practices",
    icon: Target,
    color: "bg-orange-500",
    benefits: ["Sustainable cotton", "Water efficiency", "Care for soil"]
  },
  {
    name: "H&M Lab",
    fullName: "H&M Laboratory Approved",
    description: "Approved testing facility meeting H&M's quality standards",
    icon: Users,
    color: "bg-purple-500",
    benefits: ["Quality assurance", "Brand compliance", "Testing reliability"]
  },
  {
    name: "M&S Lab",
    fullName: "Marks & Spencer Approved",
    description: "Certified testing laboratory for M&S quality requirements",
    icon: Star,
    color: "bg-red-500",
    benefits: ["Premium standards", "Retail compliance", "Quality certification"]
  }
];

const awards = [
  {
    title: "H&M Gold Supplier",
    year: "2023",
    description: "Achieved Gold Supplier status for exceptional quality and compliance",
    icon: Award
  },
  {
    title: "Birla Cellulose Excellence",
    year: "2022",
    description: "Recognition for outstanding performance in viscose fabric production",
    icon: Star
  },
  {
    title: "Sustainability Leader",
    year: "2021",
    description: "Awarded for pioneering sustainable manufacturing practices",
    icon: Leaf
  },
  {
    title: "Quality Excellence",
    year: "2020",
    description: "Industry recognition for consistent quality delivery",
    icon: Shield
  }
];

const partners = [
  { name: "H&M", relationship: "Gold Supplier", logo: "H&M" },
  { name: "Puma", relationship: "Preferred Partner", logo: "PUMA" },
  { name: "Uniqlo", relationship: "Approved Vendor", logo: "UNIQLO" },
  { name: "M&S", relationship: "Certified Supplier", logo: "M&S" },
  { name: "Birla", relationship: "Excellence Partner", logo: "BIRLA" },
  { name: "Target", relationship: "Strategic Partner", logo: "TARGET" }
];

export default function Certifications() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Certifications & Trust
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Our commitment to quality, sustainability, and ethical practices 
                is validated by international certifications and industry recognition.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                International Certifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Validated standards ensuring quality, safety, and sustainability in every product
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <AnimatedSection 
                  key={cert.name} 
                  animation="scale-in" 
                  delay={index * 100}
                >
                  <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border h-full">
                    <CardContent className="p-0">
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 ${cert.color} rounded-2xl mb-4`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {cert.fullName}
                        </p>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Benefits:</h4>
                        {cert.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-success" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Awards & Recognition
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry acknowledgment of our excellence in manufacturing and sustainability
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <AnimatedSection 
                  key={award.title} 
                  animation="fade-in-up" 
                  delay={index * 100}
                >
                  <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                      <div className="text-sm font-medium text-primary mb-2">
                        {award.year}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {award.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Partners */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted Global Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Long-term partnerships with leading fashion brands worldwide
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <AnimatedSection 
                key={partner.name} 
                animation="slide-in-right" 
                delay={index * 100}
              >
                <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-subtle rounded-2xl flex items-center justify-center border border-border">
                        <span className="font-bold text-lg text-primary">{partner.logo}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {partner.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {partner.relationship}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Quality by Numbers
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our certifications are backed by measurable quality metrics that demonstrate 
                    our commitment to excellence. Every fabric undergoes rigorous testing to 
                    ensure compliance with international standards.
                  </p>
                  <p>
                    With state-of-the-art laboratory facilities and certified testing processes, 
                    we maintain consistent quality that meets the demanding requirements of 
                    global fashion brands.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success" />
                    <span className="text-foreground">99.5% Quality Pass Rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success" />
                    <span className="text-foreground">100% Compliance Record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success" />
                    <span className="text-foreground">Zero Critical Defects</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 border-border">
                  <CardContent className="p-0">
                    <Factory size={32} className="text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">5</div>
                    <div className="text-sm text-muted-foreground">Major Certifications</div>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-border">
                  <CardContent className="p-0">
                    <Award size={32} className="text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">4</div>
                    <div className="text-sm text-muted-foreground">Industry Awards</div>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-border">
                  <CardContent className="p-0">
                    <Users size={32} className="text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Global Partners</div>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-border">
                  <CardContent className="p-0">
                    <Globe size={32} className="text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">21+</div>
                    <div className="text-sm text-muted-foreground">Years Certified</div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Certified Excellence
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Choose Mercury Fabrics for certified quality, sustainable practices, 
              and industry-leading standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Get Certified Quote</Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/sustainability">View Sustainability</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}