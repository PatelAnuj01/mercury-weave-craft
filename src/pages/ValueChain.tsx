import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Palette,
  TestTube,
  Cpu,
  Factory,
  Search,
  Package,
  Droplets,
  Sparkles,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Yarn",
    description: "Premium quality yarn sourcing and preparation with strict quality controls",
    icon: Package,
    color: "bg-blue-500",
    details: ["Cotton", "Viscose", "Bamboo", "Blends"]
  },
  {
    id: 2,
    title: "Knitting",
    description: "Advanced knitting machinery producing various fabric structures",
    icon: Factory,
    color: "bg-green-500",
    details: ["Jersey", "Rib", "Fleece", "Pique", "Waffle"]
  },
  {
    id: 3,
    title: "Interim Inspection",
    description: "Quality checkpoint ensuring fabric meets specifications",
    icon: Search,
    color: "bg-yellow-500",
    details: ["Weight check", "Width verification", "Visual inspection"]
  },
  {
    id: 4,
    title: "Greige Warehouse",
    description: "Organized storage of unfinished fabrics with inventory management",
    icon: Package,
    color: "bg-purple-500",
    details: ["Climate controlled", "FIFO system", "Batch tracking"]
  },
  {
    id: 5,
    title: "R&D Lab",
    description: "Innovation center for developing new fabrics and finishes",
    icon: Cpu,
    color: "bg-pink-500",
    details: ["Performance testing", "Color matching", "Recipe development"]
  },
  {
    id: 6,
    title: "Printing",
    description: "Multiple printing technologies for diverse design requirements",
    icon: Palette,
    color: "bg-indigo-500",
    details: ["Reactive printing", "Pigment printing", "Digital printing"]
  },
  {
    id: 7,
    title: "Dyeing",
    description: "Precision dyeing processes ensuring color consistency",
    icon: Droplets,
    color: "bg-cyan-500",
    details: ["Reactive dyeing", "Vat dyeing", "Discharge printing"]
  },
  {
    id: 8,
    title: "Finishing",
    description: "Value-added finishes for enhanced fabric performance",
    icon: Sparkles,
    color: "bg-orange-500",
    details: ["UV protection", "Antimicrobial", "Moisture management"]
  },
  {
    id: 9,
    title: "Quality Testing",
    description: "Comprehensive testing ensuring international standards",
    icon: TestTube,
    color: "bg-red-500",
    details: ["Colorfastness", "Shrinkage", "GSM verification"]
  },
  {
    id: 10,
    title: "Final Inspection",
    description: "Last quality checkpoint before packaging and dispatch",
    icon: ShieldCheck,
    color: "bg-emerald-500",
    details: ["4-point system", "Shade matching", "Final approval"]
  }
];

const capabilities = [
  {
    title: "Annual Capacity",
    value: "8,400 tonnes",
    description: "High-volume production capability"
  },
  {
    title: "Fabric Varieties",
    value: "50+ types",
    description: "Diverse product portfolio"
  },
  {
    title: "Quality Standards",
    value: "99.5%",
    description: "First-pass quality rate"
  },
  {
    title: "Delivery Performance",
    value: "98%",
    description: "On-time delivery record"
  }
];

export default function ValueChain() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Value Chain
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                A comprehensive manufacturing process ensuring quality, sustainability, 
                and innovation at every step from yarn to finished fabric.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Manufacturing Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art facilities and proven capabilities
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <AnimatedSection 
                key={capability.title} 
                animation="scale-in" 
                delay={index * 100}
              >
                <Card className="text-center p-8 hover:shadow-medium transition-all duration-300 border-border">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {capability.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {capability.title}
                    </div>
                    <div className="text-muted-foreground">
                      {capability.description}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Production Process Flow
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From raw materials to finished products - our integrated approach ensures quality control
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection 
                  key={step.id} 
                  animation="fade-in-up" 
                  delay={index * 100}
                >
                  <Card className="p-6 hover:shadow-medium transition-all duration-300 border-border relative">
                    <CardContent className="p-0">
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-success" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Arrow for flow indication */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                          <ArrowRight size={20} className="text-muted-foreground" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Quality at Every Step
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our integrated value chain ensures complete quality control from raw material 
                    inspection to final product delivery. Each stage includes rigorous testing 
                    and quality checkpoints to maintain our high standards.
                  </p>
                  <p>
                    With state-of-the-art testing equipment and certified processes, we guarantee 
                    that every fabric meets international quality standards and customer specifications.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success" />
                    <span className="text-foreground">GOTS & OEKO-TEX Certified Processes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success" />
                    <span className="text-foreground">H&M Lab Approved Testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success" />
                    <span className="text-foreground">99.5% First-Pass Quality Rate</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/certifications">View Certifications</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Card className="p-8 shadow-strong border-border">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Quality Metrics</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Color Consistency</span>
                        <span className="text-2xl font-bold text-success">99.8%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '99.8%' }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">On-Time Delivery</span>
                        <span className="text-2xl font-bold text-success">98.2%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '98.2%' }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Customer Satisfaction</span>
                        <span className="text-2xl font-bold text-success">99.5%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '99.5%' }}></div>
                      </div>
                    </div>
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
              Experience Our Process
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              See how our integrated value chain can deliver exceptional results for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Request Factory Tour</Link>
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