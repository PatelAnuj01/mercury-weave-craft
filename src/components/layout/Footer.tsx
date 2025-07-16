import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Factory,
  Leaf,
  Award,
  Users,
} from "lucide-react";

interface QuickLink {
  name: string;
  href: string;
}

interface Service {
  name: string;
  href: string;
}

interface Certification {
  name: string;
  icon: React.ElementType;
}

const quickLinks: QuickLink[] = [
  { name: "About Us", href: "/about" },
  { name: "Value Chain", href: "/value-chain" },
  { name: "Products", href: "/products" },
  { name: "Sustainability", href: "/sustainability" },
];

const services: Service[] = [
  { name: "Knitting", href: "/value-chain" },
  { name: "Dyeing & Printing", href: "/value-chain" },
  { name: "Quality Testing", href: "/value-chain" },
  { name: "R&D Services", href: "/value-chain" },
];

const certifications: Certification[] = [
  { name: "GOTS Certified", icon: Leaf },
  { name: "OEKO-TEX", icon: Award },
  { name: "H&M Approved", icon: Users },
  { name: "BCI Partner", icon: Factory },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-red-800 bg-gradient-to-br from-[#9c1c1c] via-[#b32d2d] to-[#f24545]">
      {/* Large Blurred Background Bubbles */}
      <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-[#f24545] rounded-full blur-[200px] opacity-30"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-[#9c1c1c] rounded-full blur-[220px] opacity-40"></div>
      <div className="absolute top-[150px] right-1/4 w-[450px] h-[450px] bg-[#ff5c5c] rounded-full blur-[180px] opacity-25"></div>
      <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-[#f24545] rounded-full blur-[200px] opacity-30"></div>
      <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#f24545] rounded-full blur-[200px] opacity-30"></div>

      {/* Larger Floating Animated Bubbles */}
      <div className="absolute top-20 left-1/3 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
    <div className="absolute top-20 left-1/3 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 text-white">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#f24545] to-[#9c1c1c] rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Mercury Fabrics</h3>
                <p className="text-sm text-red-100">Est. 2003</p>
              </div>
            </div>
            <p className="text-sm text-red-100">
              Leading textile manufacturer specializing in innovative knitted fabrics with
              sustainable practices and premium quality.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-red-100">
                <MapPin size={16} />
                <span>Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-red-100">
                <Phone size={16} />
                <span>+91-161-2345678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-red-100">
                <Mail size={16} />
                <span>enquire@mercuryfabrics.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-red-100 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-red-100 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Certifications */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="flex-1 h-10 bg-red-900/50 text-sm text-white border-red-600 placeholder-red-200 rounded-md"
                />
                <Button
                  variant="default"
                  size="default"
                  className="h-10 px-4 bg-[#f24545] hover:bg-[#9c1c1c] text-sm text-white rounded-md transition-colors duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Certifications</h4>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.name}
                      className="flex items-center space-x-2 p-2 h-10 bg-red-800 rounded-lg border border-red-600 text-sm text-white hover:bg-red-700 hover:shadow-md transition-all duration-300"
                    >
                      <Icon size={16} className="text-white" />
                      <span>{cert.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-red-100">
              © 2024 Mercury Fabrics. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-red-100">Follow us:</span>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-sm text-red-100 hover:text-white"
                >
                  <Linkedin size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-sm text-red-100 hover:text-white"
                >
                  <Instagram size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
