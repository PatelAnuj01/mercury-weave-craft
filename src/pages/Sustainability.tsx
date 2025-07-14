import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  Droplet,
  Leaf,
  ShieldCheck,
  Users,
  Target,
  Recycle,
  Sun,
  Factory,
  Heart,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const targetZeroGoals = [
  {
    title: "Zero Waste Water",
    description: "100% water recycling and reuse in all manufacturing processes",
    icon: Droplet,
    progress: 85,
    achievements: ["ETP Plant Operational", "85% Water Reuse", "Closed Loop System"],
    color: "bg-blue-500"
  },
  {
    title: "Zero Carbon",
    description: "Carbon neutral operations through renewable energy and efficiency",
    icon: Leaf,
    progress: 72,
    achievements: ["Solar Power Integration", "Energy Efficient Machinery", "Carbon Offset Programs"],
    color: "bg-green-500"
  },
  {
    title: "Zero Toxins",
    description: "Elimination of harmful chemicals from all production processes",
    icon: ShieldCheck,
    progress: 95,
    achievements: ["GOTS Certified Chemicals", "Non-toxic Dyes", "Safe Working Environment"],
    color: "bg-purple-500"
  },
  {
    title: "Zero Grievances",
    description: "Creating a positive workplace culture with zero employee grievances",
    icon: Users,
    progress: 92,
    achievements: ["Fair Wages", "Safe Working Conditions", "Regular Training Programs"],
    color: "bg-orange-500"
  }
];

const initiatives = [
  {
    title: "Water Conservation",
    description: "Advanced Effluent Treatment Plant (ETP) ensuring zero liquid discharge",
    icon: Droplet,
    stats: "85% water reuse rate"
  },
  {
    title: "Renewable Energy",
    description: "Solar power integration reducing carbon footprint significantly",
    icon: Sun,
    stats: "40% renewable energy"
  },
  {
    title: "Waste Reduction",
    description: "Comprehensive waste management and recycling programs",
    icon: Recycle,
    stats: "95% waste diverted from landfills"
  },
  {
    title: "Green Manufacturing",
    description: "Eco-friendly processes and sustainable production methods",
    icon: Factory,
    stats: "GOTS & OEKO-TEX certified"
  },
  {
    title: "Community Impact",
    description: "Supporting local communities through various CSR initiatives",
    icon: Heart,
    stats: "500+ families benefited"
  },
  {
    title: "Continuous Improvement",
    description: "Regular monitoring and improvement of sustainability metrics",
    icon: TrendingUp,
    stats: "Monthly sustainability audits"
  }
];

const timeline = [
  {
    year: "2020",
    title: "Target Zero Launch",
    description: "Initiated comprehensive sustainability program with four key goals"
  },
  {
    year: "2021",
    title: "ETP Plant Installation",
    description: "Advanced water treatment facility operational with 85% reuse capability"
  },
  {
    year: "2022",
    title: "Solar Power Integration",
    description: "Renewable energy systems installed, achieving 40% clean energy usage"
  },
  {
    year: "2023",
    title: "Zero Toxin Milestone",
    description: "Achieved 95% elimination of harmful chemicals from production"
  },
  {
    year: "2024",
    title: "Sustainability Leadership",
    description: "Industry recognition for outstanding environmental performance"
  }
];

export default function Sustainability() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Target Zero Initiative
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Our commitment to a sustainable future through zero waste water, 
                zero carbon, zero toxins, and zero grievances.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Target Zero Goals */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Four Pillars of Sustainability
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Measurable goals with concrete actions driving environmental and social responsibility
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetZeroGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <AnimatedSection 
                  key={goal.title} 
                  animation="scale-in" 
                  delay={index * 150}
                >
                  <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-12 h-12 ${goal.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {goal.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {goal.description}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">Progress</span>
                          <span className="text-2xl font-bold text-primary">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full ${goal.color}`}
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                        {goal.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-success" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
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

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Green Manufacturing Initiatives
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs across all aspects of our operations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <AnimatedSection 
                  key={initiative.title} 
                  animation="fade-in-up" 
                  delay={index * 100}
                >
                  <Card className="text-center p-8 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-4">
                        <Icon size={32} className="text-secondary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {initiative.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {initiative.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {initiative.stats}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sustainability Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our environmental responsibility journey
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

            <div className="space-y-8">
              {timeline.map((milestone, index) => (
                <AnimatedSection 
                  key={milestone.year} 
                  animation="slide-in-right" 
                  delay={index * 100}
                >
                  <div className="flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 relative z-10 border-4 border-background"></div>
                    
                    {/* Content */}
                    <Card className="flex-1 p-6 shadow-soft border-border">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                            {milestone.year}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Environmental Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Measurable results of our sustainability commitments
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "85%", label: "Water Reuse", icon: Droplet },
              { value: "40%", label: "Renewable Energy", icon: Sun },
              { value: "95%", label: "Waste Reduction", icon: Recycle },
              { value: "500+", label: "Families Impacted", icon: Heart }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection 
                  key={stat.label} 
                  animation="scale-in" 
                  delay={index * 100}
                >
                  <Card className="text-center p-8 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {stat.value}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Sustainable Future
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Partner with Mercury Fabrics and be part of the solution for a more sustainable textile industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Start Sustainable Partnership
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/certifications">View Certifications</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}