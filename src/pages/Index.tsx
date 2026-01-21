import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, ArrowRight, Play, ChevronDown, Zap, Target, Shield, BarChart3, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          {/* Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
          {/* Glow effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[120px]" />
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 z-[1] opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Accepting new members</span>
                <span className="text-xs text-gold font-semibold tracking-wider">#ZVICHIPERA</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="block text-foreground">Trade with</span>
              <span className="text-gradient-gold">Savage Precision</span>
            </h1>

            {/* Subheading */}
            <p className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Join a community of disciplined traders. Learn price action mastery from 
              a Harare-based trader with 3+ years of proven results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/contact">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-2xl text-white font-semibold text-lg hover:shadow-gold transition-all duration-300">
                  Join VIP Signals
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/videos">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-foreground font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Play size={14} fill="currentColor" />
                  </div>
                  Watch Trades
                </button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {[
                { value: "3+", label: "Years" },
                { value: "50+", label: "Traders" },
                { value: "95%", label: "Success" },
              ].map((stat, i) => (
                <div key={i} className="text-center py-4 px-2 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="stat-number text-2xl md:text-3xl text-gradient-gold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-float">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} className="text-gold" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Fast Signals", desc: "Real-time trade alerts" },
              { icon: Target, title: "Precise Entries", desc: "Optimal entry points" },
              { icon: Shield, title: "Risk Management", desc: "Protected capital" },
              { icon: BarChart3, title: "Market Analysis", desc: "Daily breakdowns" },
            ].map((feature, i) => (
              <div 
                key={i}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <feature.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual side - trading stats */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/20 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-white">SFX</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">SavageFX</h3>
                  <p className="text-muted-foreground mb-6">Professional Forex Trader</p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-gold" />
                    <span>Harare, Zimbabwe 🇿🇼</span>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/20 rounded-full blur-[100px]" />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl border border-gold/20" />
            </div>

            {/* Content side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 mb-6">
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">About</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Turning Discipline Into{" "}
                <span className="text-gradient-gold">Consistent Profit</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                SavageFX started trading over 3 years ago. With a deep belief in price action, 
                he's helped hundreds of traders through signals, mentorship, and disciplined strategies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Pure Price Action",
                  "Risk Management",
                  "Live Analysis",
                  "1-on-1 Mentorship",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <button className="group inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all">
                  Learn more about me
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 mb-6">
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What I <span className="text-gradient-gold">Offer</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive trading services designed to elevate your trading journey.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "📊",
                title: "VIP Signals",
                description: "Daily trading signals with precise entry, stop loss, and take profit levels.",
                highlight: true,
              },
              {
                icon: "👨‍🏫",
                title: "1-on-1 Mentorship",
                description: "Personal coaching sessions tailored to your skill level and goals.",
              },
              {
                icon: "📈",
                title: "Chart Analysis",
                description: "Detailed technical analysis reports on major currency pairs.",
              },
              {
                icon: "💰",
                title: "Account Growth",
                description: "Professional account management for passive income generation.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`premium-card p-8 ${service.highlight ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    {service.highlight && (
                      <Link to="/services" className="inline-flex items-center gap-2 mt-4 text-gold font-semibold text-sm">
                        View all services <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-2xl text-white font-semibold hover:shadow-gold transition-all">
                Explore All Services
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-gradient-gold">Trading Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join the VIP community and get access to premium signals, mentorship, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-2xl text-white font-semibold text-lg hover:shadow-gold transition-all duration-300">
                  Get Started Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/faqs">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-foreground font-semibold text-lg hover:bg-white/10 transition-all">
                  View FAQs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Index;