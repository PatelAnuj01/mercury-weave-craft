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
  Users
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Value Chain", href: "/value-chain" },
  { name: "Products", href: "/products" },
  { name: "Sustainability", href: "/sustainability" },
];

const services = [
  { name: "Knitting", href: "/value-chain" },
  { name: "Dyeing & Printing", href: "/value-chain" },
  { name: "Quality Testing", href: "/value-chain" },
  { name: "R&D Services", href: "/value-chain" },
];

const certifications = [
  { name: "GOTS Certified", icon: Leaf },
  { name: "OEKO-TEX", icon: Award },
  { name: "H&M Approved", icon: Users },
  { name: "BCI Partner", icon: Factory },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Mercury Fabrics</h3>
                <p className="text-xs text-muted-foreground">Est. 2003</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Leading textile manufacturer specializing in innovative knitted fabrics with 
              sustainable practices and premium quality.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+91-161-2345678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>enquire@mercuryfabrics.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
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
              <h4 className="text-lg font-semibold text-foreground mb-4">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="flex-1"
                />
                <Button variant="default" size="default">
                  Subscribe
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Certifications</h4>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.name}
                      className="flex items-center space-x-2 p-2 bg-background rounded-lg border border-border hover:shadow-soft transition-all duration-300"
                    >
                      <Icon size={16} className="text-success" />
                      <span className="text-xs text-muted-foreground">{cert.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Mercury Fabrics. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
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