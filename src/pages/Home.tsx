import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  Factory, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  Leaf,
  Target,
  Clock
} from "lucide-react";

const stats = [
  { label: "Annual Production", value: "8,400", unit: "tonnes", icon: Factory },
  { label: "Annual Revenue", value: "$40M", unit: "USD", icon: TrendingUp },
  { label: "Years of Excellence", value: "21+", unit: "years", icon: Clock },
  { label: "Global Clients", value: "50+", unit: "partners", icon: Globe },
];

const clients = [
  { name: "H&M", logo: "H&M" },
  { name: "Puma", logo: "PUMA" },
  { name: "Uniqlo", logo: "UNIQLO" },
  { name: "M&S", logo: "M&S" },
  { name: "Birla", logo: "BIRLA" },
  { name: "Target", logo: "TARGET" },
];

const features = [
  {
    icon: Leaf,
    title: "Sustainable Manufacturing",
    description: "Committed to zero waste water, zero carbon, and eco-friendly processes."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "GOTS, OEKO-TEX certified with H&M Gold Supplier status."
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "State-of-the-art R&D lab developing next-generation fabrics."
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    description: "Long-term relationships with global fashion leaders."
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up" delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Knitting Innovation.<br />
              <span className="text-accent-soft">Weaving Trust.</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Leading textile manufacturer with 21+ years of excellence in sustainable 
              fabric production, serving global fashion brands with innovation and quality.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating Animation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Delivering Excellence Since 2003
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings in Ludhiana to becoming a trusted global partner
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection 
                  key={stat.label} 
                  animation="scale-in" 
                  delay={index * 100}
                >
                  <Card className="text-center p-8 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                        <Icon size={32} className="text-primary-foreground" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-accent font-medium mb-1">
                        {stat.unit}
                      </div>
                      <div className="text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Mercury Fabrics?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Combining traditional craftsmanship with modern innovation for superior results
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection 
                  key={feature.title} 
                  animation="slide-in-right" 
                  delay={index * 150}
                >
                  <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-xl">
                            <Icon size={24} className="text-secondary-foreground" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted by Global Brands
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proud to partner with leading fashion retailers worldwide
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <AnimatedSection 
                key={client.name} 
                animation="fade-in" 
                delay={index * 100}
              >
                <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-subtle rounded-2xl flex items-center justify-center mx-auto border border-border shadow-soft">
                    <span className="font-bold text-lg text-primary">{client.logo}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{client.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Discover how Mercury Fabrics can elevate your product line with 
              sustainable, innovative textile solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/value-chain">View Our Process</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}