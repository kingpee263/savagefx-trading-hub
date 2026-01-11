import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

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
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">Testimonials</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              What <span className="text-gradient-gold">Traders Say</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Real feedback from real traders. See what the community has to say
              about their experience with SavageFX.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="premium-card p-8 group"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { value: "50+", label: "Traders Mentored" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "3+", label: "Years Experience" },
              { value: "24/7", label: "Community Support" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                variants={fadeInUp}
              >
                <span className="stat-number text-4xl md:text-5xl text-gradient-gold mb-2 block">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
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
              Ready to Join the{" "}
              <span className="text-gradient-gold">Success Stories</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Your trading transformation starts today. Join the community and
              start your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-2xl text-white font-semibold text-lg hover:shadow-gold transition-all duration-300">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/services">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-foreground font-semibold text-lg hover:bg-white/10 transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
