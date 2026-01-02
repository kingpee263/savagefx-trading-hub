import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import traderPortrait from "@/assets/trader-portrait.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block text-gold font-semibold text-sm tracking-[0.3em] uppercase mb-6">
              #Zvichipera
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Master the Markets with{" "}
              <span className="text-gradient-gold">Savage Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              SavageFX is a Harare-based price action trader with 3+ years of
              real market experience. Known for precision, discipline, and
              mentorship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Join VIP Signals
                </Button>
              </Link>
              <Link to="/videos">
                <Button variant="heroOutline" size="xl">
                  Watch Trade Videos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, value: "3+", label: "Years Experience" },
              { icon: Users, value: "500+", label: "Traders Mentored" },
              { icon: Award, value: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <span className="text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gold/30 glow-gold">
                <img
                  src={traderPortrait}
                  alt="SavageFX Trader"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-background px-6 py-4 rounded-lg shadow-lg">
                <span className="block text-2xl font-bold">Harare</span>
                <span className="text-sm">Zimbabwe 🇿🇼</span>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
                About SavageFX
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Turning Discipline Into{" "}
                <span className="text-gradient-gold">Profit</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SavageFX started trading over 3 years ago. With a deep belief in
                price action, he's helped many through signals, mentorship, and
                discipline. His approach combines technical analysis with
                psychological mastery.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Pure Price Action Trading",
                  "Risk Management Focused",
                  "Live Market Analysis",
                  "1-on-1 Mentorship Available",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="goldOutline">Learn More About Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Premium <span className="text-gradient-gold">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "VIP Signals",
                description:
                  "Daily trading signals with precise entry and exit points",
                icon: "📊",
              },
              {
                title: "1-on-1 Mentorship",
                description:
                  "Personal coaching sessions tailored to your level",
                icon: "👨‍🏫",
              },
              {
                title: "Chart Analysis",
                description:
                  "Detailed technical analysis reports on major pairs",
                icon: "📈",
              },
              {
                title: "Account Growth",
                description: "Professional account management services",
                icon: "💰",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="card-gradient border border-border rounded-lg p-6 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="gold" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-gradient-gold">Trading Journey</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the VIP community and get access to premium signals,
              mentorship, and exclusive trading content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/faqs">
                <Button variant="heroOutline" size="xl">
                  View FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
