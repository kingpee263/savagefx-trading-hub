import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, ArrowRight } from "lucide-react";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const whatsappNumber = "263715443409";
  const whatsappMessage = encodeURIComponent(
    "Hey, found your number on your website. I'm here to talk about forex."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
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
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">Get in Touch</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Contact <span className="text-gradient-gold">SavageFX</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Ready to start your trading journey? Have questions? Reach out and
              let's connect.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={fadeInUp}
              >
                Let's <span className="text-gradient-gold">Connect</span>
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-10 text-lg"
                variants={fadeInUp}
              >
                The fastest way to reach me is via WhatsApp. I typically respond
                within a few hours during business hours.
              </motion.p>

              <motion.div className="space-y-4" variants={staggerContainer}>
                {/* WhatsApp */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-semibold text-foreground text-lg">WhatsApp</span>
                    <span className="text-muted-foreground">+263 71 544 3409</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-green-500 transition-colors" />
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+263715443409"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-semibold text-foreground text-lg">Phone</span>
                    <span className="text-muted-foreground">+263 71 544 3409</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                </motion.a>

                {/* Email */}
                <motion.div 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5"
                  variants={fadeInUp}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground text-lg">Email</span>
                    <span className="text-muted-foreground">savagefx@trading.com</span>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5"
                  variants={fadeInUp}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground text-lg">Location</span>
                    <span className="text-muted-foreground">Harare, Zimbabwe 🇿🇼</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div className="mt-10" variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
                    { 
                      icon: () => (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      ), 
                      href: "https://vm.tiktok.com/ZMHErPSdm/", 
                      label: "TikTok" 
                    },
                    { icon: MessageCircle, href: whatsappUrl, label: "WhatsApp" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:border-gold/30 hover:text-gold transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass border border-white/10 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Send a <span className="text-gradient-gold">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-gold/50 transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-gold/50 transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-gold/50 transition-colors text-foreground"
                    >
                      <option value="" className="bg-background">Select a topic</option>
                      <option value="VIP Signals" className="bg-background">VIP Signals</option>
                      <option value="Mentorship" className="bg-background">1-on-1 Mentorship</option>
                      <option value="Account Management" className="bg-background">Account Management</option>
                      <option value="General Inquiry" className="bg-background">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-gold/50 transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold rounded-xl text-white font-semibold hover:shadow-gold transition-all duration-300"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Action */}
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
              Prefer a Quick{" "}
              <span className="text-gradient-gold">Conversation</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Click below to start a WhatsApp chat directly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-10 py-5 rounded-2xl hover:bg-green-600 hover:shadow-lg transition-all duration-300 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
