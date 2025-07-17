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
import relative from "@/assests/image.png"        

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
      <Card className="p-10 rounded-2xl shadow-2xl border border-red-800/40 bg-white/90 backdrop-blur-lg relative overflow-hidden">
     <section className="relative py-24 bg-background overflow-hidden">
  {/* Decorative Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#9c1c1c]/30 to-[#f24545]/30 mix-blend-multiply rounded-2xl"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Text Section */}
      <AnimatedSection animation="fade-in-up">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Mercury Fabrics: <br></br>A Legacy of Excellence
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
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
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-br from-[#9c1c1c] via-[#b32d2d] to-[#f24545]"
              asChild
            >
              <Link to="/value-chain">Explore Our Process</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Card Section */}
      <AnimatedSection animation="slide-in-right" delay={200}>
        <div className="relative">
          <Card className="p-10 rounded-2xl shadow-2xl border border-red-300/40 bg-white/90 backdrop-blur-lg relative overflow-hidden">
            {/* Gradient Accent Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f24545]/10 to-[#9c1c1c]/10 rounded-2xl mix-blend-multiply"></div>
            <CardContent className="relative z-10 p-0">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#f24545] mb-2">21+</div>
                  <div className="text-base text-gray-700 font-medium">Years Incorporated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#f24545] mb-2">8,400</div>
                  <div className="text-base text-gray-700 font-medium">Tonnes/Year</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#f24545] mb-2">$40M</div>
                  <div className="text-base text-gray-700 font-medium">Annual Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#f24545] mb-2">50+</div>
                  <div className="text-base text-gray-700 font-medium">Global Clients</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  </div>

</section>
  </Card>


      {/* Timeline */}
      <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped Mercury Fabrics into the industry leader we are today
            </p>
          </div>
        </AnimatedSection>

       <div className="relative">
  {/* Vertical line */}
  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#F0EEE4] md:-translate-x-1/2 z-0"></div>

  <div className="space-y-16 relative z-10">
    {milestones.map((milestone, index) => {
      const Icon = milestone.icon;
      const isLeft = index % 2 === 0;

      return (
        <AnimatedSection
          key={milestone.year}
          animation="fade-in-up"
          delay={index * 150}
        >
          <div
            className={`flex flex-col md:flex-row items-center ${
              isLeft ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Card */}
            <div
              className={`w-full md:w-1/2 ${isLeft ? "md:pr-6" : "md:pl-6"}`}
            >
              <Card className="relative p-6 shadow-lg border border-border overflow-hidden rounded-2xl bg-gradient-to-r from-[#9c1c1c] to-[#f24545]">
                <CardContent className="relative p-0 z-10">
                  <div
                    className={`flex items-center ${
                      isLeft ? "justify-start" : "justify-end"
                    } space-x-3 mb-3`}
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-[#F0EEE4] rounded-xl">
                      <Icon size={20} className="text-gradient-subtle" />
                    </div>
                    <div className={`${isLeft ? "" : "text-right"}`}>
                      <div className="text-sm font-medium text-white">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Image Side */}
            <div
              className={`w-full md:w-1/2 flex justify-center mt-6 md:mt-0 ${
                isLeft ? "md:pl-6" : "md:pr-6"
              }`}
            >
              <img
              src={relative}
                alt="milestone"
                className="max-h-80 rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#F0EEE4] rounded-full border-4 border-background transform md:-translate-x-1/2 z-20"></div>
          </div>
        </AnimatedSection>
      );
    })}
  </div>
</div>

      </div>
    </section>

      {/* Values Section */}
      
      <section className="py-20 bg-background bg-gray-100 backdrop-blur-lg text-foreground">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/90 backdrop-blur-lg p-8 rounded-2xl ">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection 
                  key={value.title} 
                  animation="scale-in" 
                  delay={index * 250}
                >
                  <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border bg-gray-50">
                    <CardContent className="p-0">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#9c1c1c] via-[#b32d2d] to-[#f24545] rounded-2xl mb-4">
                          <Icon size={32} className="text-secondary-foreground " />
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
      <section className="py-20 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Success Story
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Partner with Mercury Fabrics and become part of our continuing journey 
              of innovation, quality, and sustainable growth.
            </p>
      
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}