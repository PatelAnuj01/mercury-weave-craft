import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="overflow-hidden">
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
                Ready to discuss your textile requirements? Our team is here to help.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection animation="fade-in-up">
              <Card className="p-8 shadow-medium border-border">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <Input 
                      placeholder="Company Name" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                    <Textarea 
                      placeholder="Tell us about your requirements..." 
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="space-y-8">
                <Card className="p-6 border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Head Office & Factory</h3>
                        <p className="text-muted-foreground">
                          Mercury Fabrics Pvt. Ltd.<br />
                          Industrial Area, Ludhiana<br />
                          Punjab 141003, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <Phone className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                        <p className="text-muted-foreground">
                          +91-161-2345678<br />
                          +91-161-2345679
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email Addresses</h3>
                        <p className="text-muted-foreground">
                          enquire@mercuryfabrics.com<br />
                          rahul@mercuryfabrics.com<br />
                          pranav@mercuryfabrics.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <Clock className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}