import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, MessageCircle, BarChart3, Users, Wallet } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "VIP Signal Group",
    description:
      "Get daily trading signals delivered straight to your Telegram or WhatsApp. Precise entries, stop losses, and take profits.",
    features: [
      "5-10 signals per week",
      "Entry, SL & TP levels",
      "Real-time market updates",
      "Risk management tips",
    ],
    price: "Contact for pricing",
    popular: true,
  },
  {
    icon: Users,
    title: "1-on-1 Mentorship",
    description:
      "Personal coaching sessions tailored to your level. Learn price action, risk management, and trading psychology.",
    features: [
      "Personalized curriculum",
      "Live trading sessions",
      "Weekly progress reviews",
      "Lifetime support access",
    ],
    price: "Custom packages",
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Chart Analysis Reports",
    description:
      "Detailed technical analysis on major pairs and volatility indices. Understand the 'why' behind every move.",
    features: [
      "Weekly market outlook",
      "Key levels identified",
      "Trade ideas included",
      "Educational breakdowns",
    ],
    price: "Monthly subscription",
    popular: false,
  },
  {
    icon: Wallet,
    title: "Account Management",
    description:
      "Professional account growth services. Let SavageFX trade your account with disciplined precision.",
    features: [
      "Minimum capital required",
      "Profit-sharing model",
      "Weekly reports",
      "Risk-managed approach",
    ],
    price: "Performance-based",
    popular: false,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Premium <span className="text-gradient-gold">Trading Services</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From signals to mentorship, get everything you need to succeed in
              the markets. All services are backed by 3+ years of real trading
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card-gradient border rounded-lg p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  service.popular
                    ? "border-gold shadow-gold"
                    : "border-border hover:border-gold/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gold text-background text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold">{service.price}</span>
                  <Link to="/contact">
                    <Button
                      variant={service.popular ? "gold" : "goldOutline"}
                      size="sm"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Getting Started is{" "}
              <span className="text-gradient-gold">Simple</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Reach Out",
                description:
                  "Contact us via WhatsApp or the contact form to discuss your needs.",
              },
              {
                step: "02",
                title: "Choose Service",
                description:
                  "Select the service that fits your goals and trading level.",
              },
              {
                step: "03",
                title: "Start Trading",
                description:
                  "Get instant access and start your journey to consistent profits.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">Level Up</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of successful traders who started their journey with
            SavageFX.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
