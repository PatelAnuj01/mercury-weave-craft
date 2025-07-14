import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Calendar, ExternalLink, Award, Newspaper, Users } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Mercury Fabrics Achieves H&M Gold Supplier Status",
    date: "March 2024",
    category: "Awards",
    excerpt: "Recognized for exceptional quality standards and sustainable manufacturing practices.",
    type: "award"
  },
  {
    id: 2,
    title: "Sustainability Milestone: 85% Water Reuse Achieved",
    date: "February 2024",
    category: "Sustainability",
    excerpt: "New effluent treatment plant enables major water conservation breakthrough.",
    type: "press"
  },
  {
    id: 3,
    title: "Partnership Announcement with Leading European Brand",
    date: "January 2024",
    category: "Business",
    excerpt: "Expanding global footprint with new strategic partnership in European market.",
    type: "news"
  },
  {
    id: 4,
    title: "Birla Cellulose Excellence Award 2023",
    date: "December 2023",
    category: "Awards",
    excerpt: "Outstanding performance in viscose fabric production recognized by industry leader.",
    type: "award"
  }
];

export default function Media() {
  return (
    <div className="overflow-hidden">
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Media & Press</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
                Latest news, achievements, and industry recognition
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <AnimatedSection key={item.id} animation="fade-in-up" delay={index * 100}>
                <Card className="hover:shadow-medium transition-all duration-300 border-border h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      {item.type === 'award' && <Award size={16} className="text-accent" />}
                      {item.type === 'press' && <Newspaper size={16} className="text-primary" />}
                      {item.type === 'news' && <Users size={16} className="text-success" />}
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <ExternalLink size={16} className="text-primary cursor-pointer hover:text-primary-light" />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}