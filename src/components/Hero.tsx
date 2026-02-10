import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";
import TextScramble from "./TextScramble";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      {/* Particle system */}
      <ParticleField />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(160_60%_45%_/_0.08)_0%,_transparent_70%)]" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-20 h-20 border border-primary/20 rounded-lg"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute top-[30%] right-[20%] w-12 h-12 border border-primary/10 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[10%] w-16 h-16 border border-primary/15"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{ rotate: 360, x: [0, 15, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, x: { duration: 7, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-[35%] right-[12%] w-24 h-24 border border-primary/10 rounded-2xl"
        animate={{ rotate: -180, y: [0, 25, 0] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity } }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Glowing badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <TextScramble text="Full-Stack Software Engineer" className="text-primary text-sm font-medium tracking-wide" delay={300} />
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-9xl font-serif leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">Moses</span>
          <motion.span
            className="block text-gradient relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Karani
            {/* Underline decoration */}
            <motion.div
              className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-primary via-primary/50 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Architecting enterprise-grade systems across East Africa.{" "}
          <span className="text-foreground font-medium">5+ years</span> building production platforms 
          serving <span className="text-primary font-medium">10,000+</span> users with{" "}
          <span className="text-primary font-medium">99.8%</span> uptime.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-primary" /> Nairobi, Kenya
          </span>
          <a href="mailto:achlasolution@gmail.com" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Mail className="w-3.5 h-3.5 text-primary" /> achlasolution@gmail.com
          </a>
          <a href="tel:+254110941031" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Phone className="w-3.5 h-3.5 text-primary" /> 0110941031
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MagneticButton
            href="#projects"
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden inline-block"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-8 py-3.5 border border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300 inline-block backdrop-blur-sm"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
