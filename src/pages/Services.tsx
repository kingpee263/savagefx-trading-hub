import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Check, MessageCircle, BarChart3, Users, Wallet, ArrowRight } from "lucide-react";

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
    emoji: "📊"
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
    emoji: "👨‍🏫"
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
    emoji: "📈"
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
    emoji: "💰"
  },
];

const Services = () => {
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
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">Services</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Premium <span className="text-gradient-gold">Trading Services</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              From signals to mentorship, get everything you need to succeed in
              the markets. All services are backed by 3+ years of real trading
              experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`premium-card p-8 relative overflow-hidden group ${
                  service.popular ? "ring-2 ring-gold/50" : ""
                }`}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1.5 rounded-full bg-gradient-gold text-white text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl">{service.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-gold font-semibold">{service.price}</span>
                  <Link to="/contact">
                    <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      service.popular 
                        ? "bg-gradient-gold text-white hover:shadow-gold" 
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}>
                      Get Started
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Getting Started is <span className="text-gradient-gold">Simple</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Reach Out",
                description: "Contact us via WhatsApp or the contact form to discuss your needs.",
                icon: "💬"
              },
              {
                step: "02",
                title: "Choose Service",
                description: "Select the service that fits your goals and trading level.",
                icon: "✅"
              },
              {
                step: "03",
                title: "Start Trading",
                description: "Get instant access and start your journey to consistent profits.",
                icon: "🚀"
              },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                variants={fadeInUp}
              >
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
                )}
                <div className="w-24 h-24 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient-gold">Level Up</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join hundreds of successful traders who started their journey with
              SavageFX.
            </p>
            <Link to="/contact">
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold rounded-2xl text-white font-semibold text-lg hover:shadow-gold transition-all duration-300">
                Contact Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
