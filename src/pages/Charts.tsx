import { useState } from "react";
import Layout from "@/components/layout/Layout";
import chart1 from "@/assets/chart-1.jpg";
import chart2 from "@/assets/chart-2.jpg";
import chart3 from "@/assets/chart-3.jpg";

const charts = [
  {
    id: 1,
    image: chart1,
    title: "V75 Buy Breakout",
    category: "Volatility",
    description: "Perfect price action breakout on V75 with clean structure",
  },
  {
    id: 2,
    image: chart2,
    title: "Boom & Crash Setup",
    category: "Boom/Crash",
    description: "Support/resistance play on Boom 500 index",
  },
  {
    id: 3,
    image: chart3,
    title: "Trend Continuation",
    category: "Volatility",
    description: "Riding the trend on Volatility pairs with precision",
  },
  {
    id: 4,
    image: chart1,
    title: "V100 Reversal",
    category: "Volatility",
    description: "Key level rejection with confirmation entry",
  },
  {
    id: 5,
    image: chart2,
    title: "Crash 1000 Short",
    category: "Boom/Crash",
    description: "Spike and crash pattern on Crash 1000",
  },
  {
    id: 6,
    image: chart3,
    title: "EUR/USD Analysis",
    category: "Forex",
    description: "Major forex pair with price action zones",
  },
];

const categories = ["All", "Volatility", "Boom/Crash", "Forex"];

const Charts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCharts =
    activeCategory === "All"
      ? charts
      : charts.filter((chart) => chart.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              Trade Setups
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Chart <span className="text-gradient-gold">Analysis</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Browse through real trading setups and analysis. Each chart
              represents precision and discipline in action.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-background"
                    : "bg-surface text-foreground hover:bg-gold/20 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCharts.map((chart, index) => (
              <div
                key={chart.id}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-gold/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={chart.image}
                    alt={chart.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-gold text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {chart.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{chart.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {chart.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <span className="text-xs text-gold font-semibold">
                    {chart.category}
                  </span>
                  <h3 className="font-bold mt-1">{chart.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want Access to <span className="text-gradient-gold">Live Setups</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the VIP group to receive real-time chart analysis and trading
            signals directly to your phone.
          </p>
          <a
            href="https://wa.me/263715443409?text=Hey,%20I%20want%20to%20join%20the%20VIP%20signals%20group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-bold px-8 py-4 rounded-md hover:shadow-[0_0_30px_hsla(43,74%,52%,0.4)] transition-all duration-300 uppercase tracking-wider"
          >
            Join VIP Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Charts;
