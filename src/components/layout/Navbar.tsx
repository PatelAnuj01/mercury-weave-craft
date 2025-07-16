import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assests/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Value Chain", href: "/value-chain" },
  { name: "Products", href: "/products" },
  { name: "Certifications", href: "/certifications" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/80 shadow-md z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with red gradient */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-500">
              <img
                src={logo}
                alt="Mercury Fabrics Logo"
                className="h-8 w-auto drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f24545] to-[#9c1c1c] opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500"></div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9c1c1c] to-[#f24545] bg-clip-text text-transparent">
                Mercury Fabrics
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Est. 2003 • Premium Textiles
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-500 hover:scale-105 animate-fade-in group ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-[#9c1c1c] to-[#f24545] text-white shadow-md"
                    : "text-foreground hover:bg-gradient-to-r hover:from-[#f24545]/10 hover:to-[#9c1c1c]/10 hover:text-[#9c1c1c]"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f24545] to-[#9c1c1c] opacity-20 rounded-full animate-pulse" />
                )}
                {!isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9c1c1c] to-[#f24545] opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border shadow-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-[#9c1c1c] to-[#f24545] text-white"
                    : "text-foreground hover:bg-gradient-to-r hover:from-[#f24545]/10 hover:to-[#9c1c1c]/10 hover:text-[#9c1c1c]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
