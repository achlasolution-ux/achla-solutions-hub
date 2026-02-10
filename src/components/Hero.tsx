import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Full-Stack Software Engineer
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Moses{" "}
          <span className="text-gradient">Karani</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Architecting enterprise-grade systems across East Africa. 
          5+ years building production platforms serving 10,000+ users with 99.8% uptime.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary" /> Nairobi, Kenya
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <a href="mailto:achlasolution@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 text-primary" /> achlasolution@gmail.com
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a href="tel:+254110941031" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" /> 0110941031
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
