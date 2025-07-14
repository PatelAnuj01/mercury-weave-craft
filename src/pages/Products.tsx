import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  Filter,
  Search,
  Download,
  CheckCircle,
  ArrowRight,
  Palette,
  Shirt,
  Shield,
  Sparkles
} from "lucide-react";

const fabrics = [
  {
    id: 1,
    name: "Premium Cotton Jersey",
    type: "Jersey",
    fiber: "Cotton",
    gsm: "160-180",
    features: ["Soft Hand Feel", "Breathable", "Easy Care"],
    finishes: ["Bio Wash", "Silicon Wash"],
    image: "🧵",
    color: "bg-blue-50"
  },
  {
    id: 2,
    name: "Bamboo Viscose Rib",
    type: "Rib",
    fiber: "Bamboo",
    gsm: "200-220",
    features: ["Antibacterial", "Moisture Wicking", "Sustainable"],
    finishes: ["Antimicrobial", "UV Protection"],
    image: "🌿",
    color: "bg-green-50"
  },
  {
    id: 3,
    name: "Organic Cotton Fleece",
    type: "Fleece",
    fiber: "Organic Cotton",
    gsm: "280-320",
    features: ["Warm", "GOTS Certified", "Soft Loop"],
    finishes: ["Peach Finish", "Anti-Pilling"],
    image: "☁️",
    color: "bg-gray-50"
  },
  {
    id: 4,
    name: "Performance Pique",
    type: "Pique",
    fiber: "Cotton Polyester",
    gsm: "180-200",
    features: ["Moisture Management", "Quick Dry", "Durable"],
    finishes: ["Moisture Wicking", "Wrinkle Free"],
    image: "⚡",
    color: "bg-yellow-50"
  },
  {
    id: 5,
    name: "Luxury Waffle Knit",
    type: "Waffle",
    fiber: "Viscose Cotton",
    gsm: "220-250",
    features: ["Textured Surface", "Thermal Comfort", "Drape"],
    finishes: ["Enzyme Wash", "Softener"],
    image: "🔳",
    color: "bg-purple-50"
  },
  {
    id: 6,
    name: "Technical Interlock",
    type: "Interlock",
    fiber: "Cotton Spandex",
    gsm: "190-210",
    features: ["Stretch Recovery", "Shape Retention", "Comfort"],
    finishes: ["Bio Polish", "Anti-Microbial"],
    image: "🔧",
    color: "bg-orange-50"
  }
];

const filters = {
  types: ["All", "Jersey", "Rib", "Fleece", "Pique", "Waffle", "Interlock"],
  fibers: ["All", "Cotton", "Bamboo", "Viscose", "Organic Cotton", "Cotton Polyester", "Cotton Spandex"],
  finishes: ["All", "UV Protection", "Antimicrobial", "Moisture Wicking", "Anti-Pilling", "Wrinkle Free"]
};

export default function Products() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedFiber, setSelectedFiber] = useState("All");
  const [selectedFinish, setSelectedFinish] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFabrics = fabrics.filter(fabric => {
    const matchesType = selectedType === "All" || fabric.type === selectedType;
    const matchesFiber = selectedFiber === "All" || fabric.fiber.includes(selectedFiber);
    const matchesFinish = selectedFinish === "All" || fabric.finishes.some(finish => finish.includes(selectedFinish));
    const matchesSearch = fabric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fabric.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesFiber && matchesFinish && matchesSearch;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Product Range
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Discover our extensive collection of premium knitted fabrics, 
                engineered for performance, comfort, and sustainability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    placeholder="Search fabrics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download size={16} />
                  <span>Download Catalog</span>
                </Button>
              </div>

              {/* Filter Tabs */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2 flex items-center">
                    <Filter size={16} className="mr-2" />
                    Knit Structure
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.types.map((type) => (
                      <Button
                        key={type}
                        variant={selectedType === type ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedType(type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">Fiber Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.fibers.map((fiber) => (
                      <Button
                        key={fiber}
                        variant={selectedFiber === fiber ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedFiber(fiber)}
                      >
                        {fiber}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">Performance Finishes</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.finishes.map((finish) => (
                      <Button
                        key={finish}
                        variant={selectedFinish === finish ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedFinish(finish)}
                      >
                        {finish}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Premium Fabric Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Showing {filteredFabrics.length} fabrics matching your criteria
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFabrics.map((fabric, index) => (
              <AnimatedSection 
                key={fabric.id} 
                animation="scale-in" 
                delay={index * 100}
              >
                <Card className={`${fabric.color} border-border hover:shadow-medium transition-all duration-300 overflow-hidden`}>
                  <CardContent className="p-0">
                    {/* Image/Icon Section */}
                    <div className="p-8 text-center">
                      <div className="text-6xl mb-4">{fabric.image}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {fabric.name}
                      </h3>
                      <div className="flex justify-center space-x-2 mb-4">
                        <Badge variant="secondary">{fabric.type}</Badge>
                        <Badge variant="outline">{fabric.gsm} GSM</Badge>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {/* Fiber Type */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Shirt size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">Fiber Composition</span>
                          </div>
                          <p className="text-sm text-muted-foreground ml-6">{fabric.fiber}</p>
                        </div>

                        {/* Features */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Sparkles size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">Key Features</span>
                          </div>
                          <div className="ml-6 space-y-1">
                            {fabric.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle size={12} className="text-success" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Finishes */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">Performance Finishes</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-1">
                            {fabric.finishes.map((finish, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {finish}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border">
                        <Button variant="default" size="sm" className="w-full">
                          Request Sample
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {filteredFabrics.length === 0 && (
            <AnimatedSection animation="fade-in-up">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No fabrics found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedType("All");
                    setSelectedFiber("All");
                    setSelectedFinish("All");
                    setSearchTerm("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Fabrics?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every fabric is engineered for performance, tested for quality, and crafted with care
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={0}>
              <Card className="text-center p-8 border-border">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                    <Palette size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Custom Development
                  </h3>
                  <p className="text-muted-foreground">
                    Work with our R&D team to develop custom fabrics tailored to your specific requirements
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={150}>
              <Card className="text-center p-8 border-border">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-4">
                    <Shield size={32} className="text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Quality Assured
                  </h3>
                  <p className="text-muted-foreground">
                    Every fabric undergoes rigorous testing to ensure it meets international quality standards
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <Card className="text-center p-8 border-border">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-4">
                    <Sparkles size={32} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Sustainable Choice
                  </h3>
                  <p className="text-muted-foreground">
                    Produced using eco-friendly processes with certifications like GOTS and OEKO-TEX
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Place Your Order?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact our team to discuss your requirements and get samples of our premium fabrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download Catalog
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}