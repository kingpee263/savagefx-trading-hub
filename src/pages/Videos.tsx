import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Videos = () => {
  const tiktokUrl = "https://vm.tiktok.com/ZMHErPSdm/";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              Trade Videos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Watch the <span className="text-gradient-gold">Trades</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              See trading in action. From analysis to execution, watch real
              trades unfold on screen.
            </p>
          </div>
        </div>
      </section>

      {/* TikTok Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-border rounded-lg p-12">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Follow on <span className="text-gradient-gold">TikTok</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Check out the latest trading clips, wins, and educational
                content on TikTok. New videos posted regularly!
              </p>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-bold px-8 py-4 rounded-md hover:shadow-[0_0_30px_hsla(43,74%,52%,0.4)] transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                Watch on TikTok
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Placeholders */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              More Videos <span className="text-gradient-gold">Loading</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="aspect-[9/16] md:aspect-video bg-surface rounded-lg border border-border flex items-center justify-center group hover:border-gold/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Play className="w-8 h-8 text-gold" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Video Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Learn <span className="text-gradient-gold">Directly</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Videos are great, but nothing beats 1-on-1 mentorship. Learn price
            action trading the right way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services">
              <Button variant="gold" size="lg">
                View Mentorship
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="goldOutline" size="lg">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
