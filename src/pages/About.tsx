import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Award } from "lucide-react";
import traderPortrait from "@/assets/trader-portrait.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              The Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              About <span className="text-gradient-gold">SavageFX</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative animate-fade-in-up">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gold/30 glow-gold">
                <img
                  src={traderPortrait}
                  alt="SavageFX - Professional Trader"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-gold/30 px-6 py-4 rounded-lg shadow-lg">
                <span className="text-gold font-bold text-lg">#Zvichipera</span>
              </div>
            </div>

            {/* Bio */}
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Journey to{" "}
                <span className="text-gradient-gold">Savage Precision</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SavageFX started trading over 3 years ago with nothing but
                  determination and a laptop. Coming from humble beginnings in
                  Harare, Zimbabwe, the journey wasn't easy – but the discipline
                  was unmatched.
                </p>
                <p>
                  With a deep belief in price action trading, SavageFX developed
                  a system that cuts through the noise. No indicators, no
                  complicated strategies – just pure market structure and
                  psychology.
                </p>
                <p>
                  Today, SavageFX has helped hundreds of traders across Africa
                  and beyond through signals, mentorship, and discipline. The
                  mission? To create a generation of traders who understand the
                  markets at their core.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <MapPin className="w-5 h-5 text-gold" />
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      Based in
                    </span>
                    <span className="font-semibold">Harare, Zimbabwe</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Calendar className="w-5 h-5 text-gold" />
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      Experience
                    </span>
                    <span className="font-semibold">3+ Years</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Award className="w-5 h-5 text-gold" />
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      Specialty
                    </span>
                    <span className="font-semibold">Price Action</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              Trading Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">
              The <span className="text-gradient-gold">Savage Way</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Discipline",
                  description:
                    "Every trade follows strict rules. No emotions, no revenge trading.",
                },
                {
                  title: "Patience",
                  description:
                    "We wait for the perfect setup. Quality over quantity, always.",
                },
                {
                  title: "Precision",
                  description:
                    "Clean entries, calculated exits. Every pip is accounted for.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-surface rounded-lg border border-border hover:border-gold/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border border-gold/30 rounded-lg p-8 relative">
              <span className="text-6xl text-gold absolute top-4 left-4 opacity-30">
                "
              </span>
              <p className="text-lg italic text-muted-foreground mb-6 relative z-10">
                SavageFX changed my perspective on trading. The discipline and
                precision taught here is unmatched. I went from losing
                consistently to finally seeing green months.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold">TM</span>
                </div>
                <div className="text-left">
                  <span className="block font-semibold">Tino M.</span>
                  <span className="text-sm text-muted-foreground">
                    VIP Member since 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Learn From <span className="text-gradient-gold">SavageFX</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the community and start your journey to becoming a disciplined,
            profitable trader.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services">
              <Button variant="gold" size="lg">
                View Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="goldOutline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
