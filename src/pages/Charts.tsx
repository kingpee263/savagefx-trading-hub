import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import chart1 from "@/assets/chart-1.jpg";
import chart2 from "@/assets/chart-2.jpg";
import chart3 from "@/assets/chart-3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6"
              variants={fadeInUp}
            >
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">Trade Setups</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Chart <span className="text-gradient-gold">Analysis</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Browse through real trading setups and analysis. Each chart
              represents precision and discipline in action.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-gold text-white shadow-gold"
                    : "bg-white/5 border border-white/10 text-foreground hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              {filteredCharts.map((chart) => (
                <motion.div
                  key={chart.id}
                  className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  layout
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={chart.image}
                      alt={chart.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-gold text-white text-xs font-bold mb-3">
                        {chart.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">{chart.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {chart.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Always visible info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                          {chart.category}
                        </span>
                        <h3 className="font-bold text-foreground mt-1">{chart.title}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <ArrowRight size={16} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Want Access to <span className="text-gradient-gold">Live Setups</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join the VIP group to receive real-time chart analysis and trading
              signals directly to your phone.
            </p>
            <a
              href="https://wa.me/263715443409?text=Hey,%20I%20want%20to%20join%20the%20VIP%20signals%20group"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold rounded-2xl text-white font-semibold text-lg hover:shadow-gold transition-all duration-300"
            >
              Join VIP Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Charts;
