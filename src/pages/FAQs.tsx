import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";

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

const faqs = [
  {
    question: "What is price action trading?",
    answer:
      "Price action trading is a strategy that relies on historical price movements to make trading decisions. Instead of using lagging indicators, we analyze candlestick patterns, support/resistance levels, and market structure to predict future price movements. It's a clean, straightforward approach that works across all markets.",
  },
  {
    question: "How do I join the VIP signals group?",
    answer:
      "Joining is simple! Just click the 'Join VIP' button on any page or contact us via WhatsApp at +263 71 544 3409. Once you confirm your subscription, you'll be added to our exclusive Telegram/WhatsApp group where signals are posted daily.",
  },
  {
    question: "Do you offer mentorship for beginners?",
    answer:
      "Absolutely! Our 1-on-1 mentorship program is designed for all levels, from complete beginners to intermediate traders looking to sharpen their skills. We start with the basics and progressively build your knowledge until you're trading confidently on your own.",
  },
  {
    question: "Is real account management available?",
    answer:
      "Yes, we offer professional account management services. This is a performance-based model where we trade your account using our proven strategies. There's a minimum capital requirement, and you'll receive weekly reports on your account's performance. Contact us for more details.",
  },
  {
    question: "What assets do you trade?",
    answer:
      "We primarily focus on Volatility Indices (V75, V100), Boom & Crash indices, and major Forex pairs. Our price action strategies are versatile and can be applied across any market that has sufficient liquidity.",
  },
  {
    question: "How accurate are your signals?",
    answer:
      "While no trading is 100% guaranteed, our signals maintain a high success rate due to our disciplined approach. We focus on quality over quantity, typically sending 5-10 high-probability setups per week. Risk management is always emphasized to protect your capital.",
  },
  {
    question: "What's the subscription cost?",
    answer:
      "Our pricing varies depending on the service. VIP Signals, Mentorship, and Account Management all have different pricing structures. Contact us via WhatsApp for current pricing and any ongoing promotions.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Due to the nature of educational and signal services, we typically don't offer refunds once access is granted. However, we're confident in our value – reach out if you have concerns and we'll work with you to ensure you get the most from your subscription.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">FAQs</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Frequently Asked{" "}
              <span className="text-gradient-gold">Questions</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Got questions? We've got answers. Find everything you need to know
              about trading with SavageFX.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? "bg-white/[0.04] border border-gold/30" 
                      : "bg-white/[0.02] border border-white/5 hover:border-white/10"
                  }`}
                  variants={fadeInUp}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-foreground text-lg pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        openIndex === index ? "bg-gold/20" : "bg-white/5"
                      }`}>
                        <ChevronDown className={`w-5 h-5 transition-colors ${
                          openIndex === index ? "text-gold" : "text-muted-foreground"
                        }`} />
                      </div>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
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
              Still Have <span className="text-gradient-gold">Questions</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Can't find what you're looking for? Reach out directly and we'll get
              back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-2xl text-white font-semibold text-lg hover:shadow-gold transition-all duration-300">
                  Contact Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href="https://wa.me/263715443409?text=Hey,%20I%20have%20a%20question%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-foreground font-semibold text-lg hover:bg-white/10 transition-all">
                  <MessageCircle size={20} />
                  WhatsApp Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
