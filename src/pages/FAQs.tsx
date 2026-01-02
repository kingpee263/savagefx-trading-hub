import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              FAQs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Frequently Asked{" "}
              <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know
              about trading with SavageFX.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-card border rounded-lg overflow-hidden transition-all duration-300 animate-fade-in-up ${
                    openIndex === index ? "border-gold/50" : "border-border"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Still Have <span className="text-gradient-gold">Questions</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Reach out directly and we'll get
            back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Contact Us
              </Button>
            </Link>
            <a
              href="https://wa.me/263715443409?text=Hey,%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="goldOutline" size="lg">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
