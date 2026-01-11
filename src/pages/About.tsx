import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Award, ArrowRight } from "lucide-react";
import traderPortrait from "@/assets/trader-portrait.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background effects */}
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
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">The Story</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              About <span className="text-gradient-gold">SavageFX</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              The journey from beginner to precision trader.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
                <img
                  src={traderPortrait}
                  alt="SavageFX - Professional Trader"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              {/* Floating card */}
              <motion.div 
                className="absolute -bottom-6 -right-6 lg:right-8 p-5 rounded-2xl glass border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-gold font-bold text-xl">#Zvichipera</span>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-3xl border border-gold/20" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-2xl bg-gold/10 blur-xl" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                variants={fadeInUp}
              >
                The Journey to{" "}
                <span className="text-gradient-gold">Savage Precision</span>
              </motion.h2>
              
              <motion.div className="space-y-4 text-muted-foreground leading-relaxed text-lg" variants={fadeInUp}>
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
                  and beyond through signals, mentorship, and discipline.
                </p>
              </motion.div>

              {/* Quick Facts */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
                variants={fadeInUp}
              >
                {[
                  { icon: MapPin, label: "Based in", value: "Harare, Zimbabwe" },
                  { icon: Calendar, label: "Experience", value: "3+ Years" },
                  { icon: Award, label: "Specialty", value: "Price Action" },
                ].map((fact, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all group"
                  >
                    <fact.icon className="w-5 h-5 text-gold mb-3 group-hover:scale-110 transition-transform" />
                    <span className="block text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-foreground">{fact.value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <span className="text-sm font-semibold text-gold uppercase tracking-wider">Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                The <span className="text-gradient-gold">Savage Way</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Discipline",
                  description: "Every trade follows strict rules. No emotions, no revenge trading.",
                  icon: "🎯"
                },
                {
                  title: "Patience",
                  description: "We wait for the perfect setup. Quality over quantity, always.",
                  icon: "⏳"
                },
                {
                  title: "Precision",
                  description: "Clean entries, calculated exits. Every pip is accounted for.",
                  icon: "📍"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="premium-card p-8 text-center"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass border border-white/10 rounded-3xl p-10 md:p-12 relative overflow-hidden">
              <span className="text-8xl text-gold absolute top-4 left-6 opacity-20 font-serif">
                "
              </span>
              <p className="text-xl md:text-2xl text-foreground/90 mb-8 relative z-10 leading-relaxed italic">
                SavageFX changed my perspective on trading. The discipline and
                precision taught here is unmatched. I went from losing
                consistently to finally seeing green months.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TM</span>
                </div>
                <div>
                  <span className="block font-semibold text-foreground text-lg">Tino M.</span>
                  <span className="text-sm text-muted-foreground">
                    VIP Member since 2023
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Learn From <span className="text-gradient-gold">SavageFX</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join the community and start your journey to becoming a disciplined,
              profitable trader.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-2xl text-white font-semibold text-lg hover:shadow-gold transition-all duration-300">
                  View Services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-foreground font-semibold text-lg hover:bg-white/10 transition-all">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
