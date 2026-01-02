import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tendai M.",
    role: "VIP Member since 2023",
    content:
      "SavageFX changed my perspective on trading. The discipline and precision taught here is unmatched. I went from losing consistently to finally seeing green months.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Brian K.",
    role: "Mentorship Student",
    content:
      "The 1-on-1 sessions were a game changer. SavageFX breaks down price action in a way that just makes sense. Worth every penny!",
    rating: 5,
    initials: "BK",
  },
  {
    name: "Chipo Z.",
    role: "Signal Group Member",
    content:
      "The signals are incredibly accurate. I've been following for 6 months now and my account has grown by 40%. The risk management advice alone is worth the subscription.",
    rating: 5,
    initials: "CZ",
  },
  {
    name: "Blessing N.",
    role: "VIP Member",
    content:
      "What I love most is the community. SavageFX doesn't just give signals, he educates. I now understand WHY trades work, not just when to enter.",
    rating: 5,
    initials: "BN",
  },
  {
    name: "Takudzwa P.",
    role: "Mentorship Graduate",
    content:
      "Started from zero knowledge. After 3 months with SavageFX, I'm now trading profitably on my own. The best investment I've ever made in myself.",
    rating: 5,
    initials: "TP",
  },
  {
    name: "Grace M.",
    role: "Signal Group Member",
    content:
      "Zvichipera! 💰 The signals hit different. Clean entries, clear stop losses, realistic targets. This is how trading should be taught!",
    rating: 5,
    initials: "GM",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              What <span className="text-gradient-gold">Traders Say</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real feedback from real traders. See what the community has to say
              about their experience with SavageFX.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-bold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <span className="block font-semibold">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Traders Mentored" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "3+", label: "Years Experience" },
              { value: "24/7", label: "Community Support" },
            ].map((stat, index) => (
              <div key={index}>
                <span className="text-3xl md:text-4xl font-bold text-gradient-gold">
                  {stat.value}
                </span>
                <span className="block text-muted-foreground text-sm mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join the{" "}
            <span className="text-gradient-gold">Success Stories</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Your trading transformation starts today. Join the community and
            start your journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="heroOutline" size="xl">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
