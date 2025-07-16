// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import AnimatedSection from "@/components/ui/AnimatedSection";
// import { Link } from "react-router-dom";
// import {
//   Factory,
//   Users,
//   TrendingUp,
//   Award,
//   ArrowRight,
//   CheckCircle,
//   Globe,
//   Leaf,
//   Target,
//   Clock,
// } from "lucide-react";

// import Video from "../assests/back.mp4";
// import image from "../assests/comany profile.png";

// const stats = [
//   { label: "Annual Production", value: "8,400", unit: "tonnes", icon: Factory },
//   { label: "Annual Revenue", value: "$40M", unit: "USD", icon: TrendingUp },
//   { label: "Years of Excellence", value: "21+", unit: "years", icon: Clock },
//   { label: "Global Clients", value: "50+", unit: "partners", icon: Globe },
// ];

// const clients = [
//   { name: "H&M", logo: "H&M" },
//   { name: "Puma", logo: "PUMA" },
//   { name: "Uniqlo", logo: "UNIQLO" },
//   { name: "M&S", logo: "M&S" },
//   { name: "Birla", logo: "BIRLA" },
//   { name: "Target", logo: "TARGET" },
// ];

// const features = [
//   {
//     icon: Leaf,
//     title: "Sustainable Manufacturing",
//     description:
//       "Committed to zero waste water, zero carbon, and eco-friendly processes.",
//   },
//   {
//     icon: Award,
//     title: "Premium Quality",
//     description: "GOTS, OEKO-TEX certified with H&M Gold Supplier status.",
//   },
//   {
//     icon: Target,
//     title: "Innovation Focus",
//     description: "State-of-the-art R&D lab developing next-generation fabrics.",
//   },
//   {
//     icon: Users,
//     title: "Trusted Partnership",
//     description: "Long-term relationships with global fashion leaders.",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="overflow-hidden bg-background text-foreground">
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center text-primary-foreground overflow-hidden">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         >
//           <source src={Video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Red Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#9c1c1c]/60 to-[#f24545]/60 z-10 mix-blend-multiply"></div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <AnimatedSection animation="fade-in-up" delay={200}>
//             <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//               Innovation in Every Stitch. <br />
//               <span className="text-white">Trust in Every Thread.</span>
//             </h1>
//           </AnimatedSection>

//           <AnimatedSection animation="fade-in-up" delay={400}>
//             <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
//               Leading textile manufacturer with 21+ years of excellence in
//               sustainable fabric production, serving global fashion brands with
//               innovation and quality.
//             </p>
//           </AnimatedSection>

//           <AnimatedSection animation="fade-in-up" delay={600}>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Button
//                 variant="outline"
//                 size="xl"
//                 className="bg-white/10 border-white/30 text-white hover:bg-white/20"
//                 asChild
//               >
//                 <Link to="/products">
//                   Explore Our Products
//                   <ArrowRight className="ml-2" size={20} />
//                 </Link>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="xl"
//                 className="bg-white/10 border-white/30 text-white hover:bg-white/20"
//                 asChild
//               >
//                 <Link to="/contact">Get in Touch</Link>
//               </Button>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Company Introduction Section */}
//       <section className="py-24 bg-[#f9f9f9] text-[#333]">
//         <div className="max-w-6xl mx-auto px-4">
//           <AnimatedSection animation="fade-in-up">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-[#f24545]/30 p-8 md:p-16">
//               {/* Left: Image Section */}
//               <div className="relative rounded-2xl overflow-hidden shadow-md">
//                 <img
//                   src={image}
//                   alt="Mercury Factory"
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#9c1c1c]/60 to-[#f24545]/60 mix-blend-multiply rounded-2xl" />
//                 <div className="absolute bottom-4 left-4 bg-white/80 text-[#9c1c1c] px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
//                   Vertically Integrated Facility – Bawal, Haryana
//                 </div>
//               </div>

//               {/* Right: Content Section */}
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-[#9c1c1c] text-left mb-6">
//                   A Legacy of Innovation & Quality
//                 </h2>
//                 <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
//                   <p>
//                     Founded in 2003, Mercury Fabrics has grown into one of
//                     India’s largest knitted fabric manufacturers, delivering
//                     world-class quality to global fashion brands. Named after
//                     the Roman god of commerce and its Hindu counterpart Budh,
//                     the brand was built on a foundation of vision and
//                     excellence.
//                   </p>
//                   <p>
//                     With a state-of-the-art, vertically integrated facility in
//                     Bawal, Haryana— equipped with advanced machinery from Italy,
//                     Japan, Germany, and more—Mercury produces over{" "}
//                     <strong className="text-[#9c1c1c]">8,400 tons</strong> of
//                     fabric annually, generating nearly{" "}
//                     <strong className="text-[#9c1c1c]">$40 million USD</strong>.
//                   </p>
//                   <p>
//                     Mercury’s location enables fast distribution and superior
//                     lead times, while its R&D lab—approved by global
//                     brands—constantly drives innovation.
//                   </p>
//                   <p>
//                     Trusted by{" "}
//                     <strong className="text-[#9c1c1c]">
//                       H&M, Uniqlo, M&S, Puma, Armani Exchange
//                     </strong>{" "}
//                     and more, Mercury's reach spans across South and Southeast
//                     Asia.
//                   </p>
//                   <p>
//                     With{" "}
//                     <strong className="text-[#9c1c1c]">
//                       1,000+ dedicated employees
//                     </strong>
//                     , lean manufacturing, and a commitment to sustainability,
//                     all fabrics are made using raw materials from
//                     <strong className="text-[#9c1c1c]">
//                       {" "}
//                       GOTS & OEKO-TEX certified
//                     </strong>{" "}
//                     suppliers.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection animation="fade-in-up">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
//                 Why Choose Mercury Fabrics?
//               </h2>
//               <p className="text-xl text-gray-800 max-w-2xl mx-auto">
//                 Combining traditional craftsmanship with modern innovation for
//                 superior results
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <AnimatedSection
//                   key={feature.title}
//                   animation="slide-in-right"
//                   delay={index * 150}
//                 >
//                   <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border">
//                     <CardContent className="p-0">
//                       <div className="flex items-start space-x-4">
//                         <div className="flex-shrink-0">
//                           <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-xl">
//                             <Icon
//                               size={24}
//                               className="text-secondary-foreground"
//                             />
//                           </div>
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-semibold text-foreground mb-2">
//                             {feature.title}
//                           </h3>
//                           <p className="text-muted-foreground leading-relaxed">
//                             {feature.description}
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </AnimatedSection>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Clients Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection animation="fade-in-up">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Trusted by Global Brands
//               </h2>
//               <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                 Proud to partner with leading fashion retailers worldwide
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
//             {clients.map((client, index) => (
//               <AnimatedSection
//                 key={client.name}
//                 animation="fade-in"
//                 delay={index * 100}
//               >
//                 <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
//                   <div className="w-20 h-20 bg-gradient-subtle rounded-2xl flex items-center justify-center mx-auto border border-border shadow-soft">
//                     <span className="font-bold text-lg text-primary">
//                       {client.logo}
//                     </span>
//                   </div>
//                   <p className="text-sm text-muted-foreground mt-2">
//                     {client.name}
//                   </p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

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
  Clock,
} from "lucide-react";
import Video from "../assests/back.mp4";
import companyImage from "../assests/comany profile.png";
import sustainableImage from "../assests/sustainableImage.webp";
import qualityImage from "../assests/qualityImage.webp";
import innovationImage from "../assests/innovationImage.webp";
import partnershipImage from "../assests/partnershipImage.webp";

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
    imageUrl: sustainableImage,
    description:
      "Committed to zero waste water, zero carbon, and eco-friendly processes.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    imageUrl: qualityImage,
    description: "GOTS, OEKO-TEX certified with H&M Gold Supplier status.",
  },
  {
    icon: Target,
    title: "Innovation Focus",
    imageUrl: innovationImage,
    description: "State-of-the-art R&D lab developing next-generation fabrics.",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    imageUrl: partnershipImage,
    description: "Long-term relationships with global fashion leaders.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-primary-foreground overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9c1c1c]/60 to-[#f24545]/60 z-10 mix-blend-multiply"></div>
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up" delay={200}>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Innovation in Every Stitch. <br />
              <span className="text-white">Trust in Every Thread.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
              Leading textile manufacturer with 21+ years of excellence in
              sustainable fabric production, serving global fashion brands with
              innovation and quality.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Company Introduction Section */}
      <section className="py-24 bg-[#f9f9f9] text-[#333]">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-[#f24545]/30 p-8 md:p-16">
              {/* Left: Image Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src={companyImage}
                  alt="Mercury Factory"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#9c1c1c]/60 to-[#f24545]/60 mix-blend-multiply rounded-2xl" />
                <div className="absolute bottom-4 left-4 bg-white/80 text-[#9c1c1c] px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
                  Vertically Integrated Facility – Bawal, Haryana
                </div>
              </div>
              {/* Right: Content Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#9c1c1c] text-left mb-6">
                  A Legacy of Innovation & Quality
                </h2>
                <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
                  <p>
                    Founded in 2003, Mercury Fabrics has grown into one of
                    India's largest knitted fabric manufacturers, delivering
                    world-class quality to global fashion brands. Named after
                    the Roman god of commerce and its Hindu counterpart Budh,
                    the brand was built on a foundation of vision and
                    excellence.
                  </p>
                  <p>
                    With a state-of-the-art, vertically integrated facility in
                    Bawal, Haryana— equipped with advanced machinery from Italy,
                    Japan, Germany, and more—Mercury produces over{" "}
                    <strong className="text-[#9c1c1c]">8,400 tons</strong> of
                    fabric annually, generating nearly{" "}
                    <strong className="text-[#9c1c1c]">$40 million USD</strong>.
                  </p>
                  <p>
                    Mercury's location enables fast distribution and superior
                    lead times, while its R&D lab—approved by global
                    brands—constantly drives innovation.
                  </p>
                  <p>
                    Trusted by{" "}
                    <strong className="text-[#9c1c1c]">
                      H&M, Uniqlo, M&S, Puma, Armani Exchange
                    </strong>{" "}
                    and more, Mercury's reach spans across South and Southeast
                    Asia.
                  </p>
                  <p>
                    With{" "}
                    <strong className="text-[#9c1c1c]">
                      1,000+ dedicated employees
                    </strong>
                    , lean manufacturing, and a commitment to sustainability,
                    all fabrics are made using raw materials from
                    <strong className="text-[#9c1c1c]">
                      {" "}
                      GOTS & OEKO-TEX certified
                    </strong>{" "}
                    suppliers.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Why Choose Mercury Fabrics?
              </h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                Combining traditional craftsmanship with modern innovation for
                superior results
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
                  <Card className="p-0 hover:shadow-medium transition-all duration-300 border-border overflow-hidden h-full bg-gradient-to-br from-[#9c1c1c] via-[#b32d2d] to-[#f24545]">
                    <div
                      className="h-56 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${feature.imageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    />
                    <CardContent className="p-6 relative">
                      <div className="relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl">
                              <Icon size={24} className="text-amber-100" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-amber-100 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
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
      <section className="py-20 bg-white">
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
                    <span className="font-bold text-lg text-primary">
                      {client.logo}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {client.name}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
