import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

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
    // In a real app, this would send to a backend
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Contact <span className="text-gradient-gold">SavageFX</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to start your trading journey? Have questions? Reach out and
              let's connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-6">
                Let's <span className="text-gradient-gold">Connect</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                The fastest way to reach me is via WhatsApp. I typically respond
                within a few hours during business hours.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <span className="block font-semibold">WhatsApp</span>
                    <span className="text-muted-foreground">
                      +263 71 544 3409
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+263715443409"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">Phone</span>
                    <span className="text-muted-foreground">
                      +263 71 544 3409
                    </span>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">Email</span>
                    <span className="text-muted-foreground">
                      savagefx@trading.com
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">Location</span>
                    <span className="text-muted-foreground">
                      Harare, Zimbabwe 🇿🇼
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://vm.tiktok.com/ZMHErPSdm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Send a <span className="text-gradient-gold">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-md focus:outline-none focus:border-gold transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-md focus:outline-none focus:border-gold transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-md focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="VIP Signals">VIP Signals</option>
                      <option value="Mentorship">1-on-1 Mentorship</option>
                      <option value="Account Management">
                        Account Management
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-md focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <Button variant="gold" type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prefer a Quick{" "}
            <span className="text-gradient-gold">Conversation</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Click below to start a WhatsApp chat directly.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-md hover:bg-green-600 transition-all duration-300 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
