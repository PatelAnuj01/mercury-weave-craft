import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  Calendar,
  TrendingUp,
  Users,
  Award,
  Factory,
  Target,
  Globe,
  Heart
} from "lucide-react";
import aboutImage from "@/assests/about.jpg";

const milestones = [
  {
    year: "1950s",
    title: "Humble Beginnings",
    description: "Started as a small textile operation in Ludhiana, Punjab",
    icon: Factory
  },
  {
    year: "2003",
    title: "Official Incorporation",
    description: "Mercury Fabrics officially incorporated with $4M initial revenue",
    icon: Calendar
  },
  {
    year: "2010",
    title: "International Expansion",
    description: "First major contracts with international fashion brands",
    icon: Globe
  },
  {
    year: "2015",
    title: "Sustainability Focus",
    description: "Launched Target Zero initiative for environmental responsibility",
    icon: Target
  },
  {
    year: "2020",
    title: "Premium Certifications",
    description: "Achieved GOTS, OEKO-TEX, and H&M Gold Supplier status",
    icon: Award
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Reached $40M annual revenue, serving 50+ global clients",
    icon: TrendingUp
  }
];

const values = [
  {
    title: "Innovation",
    description: "Continuously pushing boundaries in textile technology and sustainable manufacturing processes.",
    icon: Target
  },
  {
    title: "Quality",
    description: "Uncompromising commitment to premium standards in every fabric we produce.",
    icon: Award
  },
  {
    title: "Sustainability",
    description: "Leading the industry towards zero waste, zero carbon, and responsible manufacturing.",
    icon: Heart
  },
  {
    title: "Partnership",
    description: "Building long-term relationships based on trust, reliability, and shared success.",
    icon: Users
  }
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
   <section 
  className="py-20 border-t border-gray-800 text-white relative"
  style={{ 
    backgroundImage: `linear-gradient(rgba(33, 13, 13, 0.7), rgba(33, 13, 13, 0.7)), url(${aboutImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection animation="fade-in-up">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Our Story of Growth
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From a small textile operation in Ludhiana to a global leader in 
          sustainable fabric manufacturing, our journey spans over seven decades.
        </p>
      </div>
    </AnimatedSection>
  </div>
</section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Mercury Fabrics: A Legacy of Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in the heart of India's textile hub, Mercury Fabrics has grown from 
                    humble beginnings in the 1950s to become a premier manufacturer of innovative 
                    knitted fabrics. Our journey is one of continuous evolution, driven by a 
                    commitment to quality, sustainability, and customer satisfaction.
                  </p>
                  <p>
                    Today, we operate state-of-the-art facilities that combine traditional 
                    craftsmanship with cutting-edge technology. Our comprehensive value chain 
                    ensures complete control over quality while maintaining the flexibility to 
                    meet diverse customer requirements.
                  </p>
                  <p>
                    With annual production capacity of 8,400 tonnes and revenue of $40M, we serve 
                    over 50 global clients including industry leaders like H&M, Puma, and Uniqlo. 
                    Our success is built on trust, innovation, and an unwavering commitment to 
                    sustainable manufacturing practices.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/value-chain">Explore Our Process</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Card className="p-8 shadow-strong border-border">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">21+</div>
                        <div className="text-sm text-muted-foreground">Years Incorporated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">8,400</div>
                        <div className="text-sm text-muted-foreground">Tonnes/Year</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">$40M</div>
                        <div className="text-sm text-muted-foreground">Annual Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Global Clients</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey Through Time
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Key milestones that shaped Mercury Fabrics into the industry leader we are today
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <AnimatedSection 
                    key={milestone.year} 
                    animation="fade-in-up" 
                    delay={index * 100}
                  >
                    <div className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                        <Card className={`p-6 shadow-medium border-border ml-12 md:ml-0 ${!isEven ? 'md:text-right' : ''}`}>
                          <CardContent className="p-0">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl ${!isEven ? 'md:order-2' : ''}`}>
                                <Icon size={20} className="text-primary-foreground" />
                              </div>
                              <div className={`${!isEven ? 'md:order-1' : ''}`}>
                                <div className="text-sm font-medium text-primary">{milestone.year}</div>
                                <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                              </div>
                            </div>
                            <p className="text-muted-foreground">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background"></div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision and drive our success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection 
                  key={value.title} 
                  animation="scale-in" 
                  delay={index * 150}
                >
                  <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-4">
                          <Icon size={32} className="text-secondary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Success Story
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Partner with Mercury Fabrics and become part of our continuing journey 
              of innovation, quality, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Start Partnership</Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}