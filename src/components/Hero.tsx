import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown, ArrowRight, Code2 } from "lucide-react";
import ParticleField from "./ParticleField";
import TextScramble from "./TextScramble";
import MagneticButton from "./MagneticButton";
import portrait from "@/assets/moses-karani.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      {/* Particle system */}
      <ParticleField />

      {/* Large glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary/[0.04] blur-[100px] orb-glow pointer-events-none" />

      {/* Floating geometric shapes - hidden on small screens for performance */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-14 h-14 sm:w-20 sm:h-20 border border-primary/20 rounded-lg hidden sm:block"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute top-[30%] right-[20%] w-8 h-8 sm:w-12 sm:h-12 border border-primary/10 rounded-full hidden sm:block"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[10%] w-12 h-12 sm:w-16 sm:h-16 border border-primary/15 hidden md:block"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{ rotate: 360, x: [0, 15, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, x: { duration: 7, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-[35%] right-[12%] w-16 h-16 sm:w-24 sm:h-24 border border-primary/10 rounded-2xl hidden md:block"
        animate={{ rotate: -180, y: [0, 25, 0] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity } }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 grid lg:grid-cols-[1.1fr_.9fr] items-center gap-10 lg:gap-16">
        <div className="text-center lg:text-left">
        {/* Glowing badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <TextScramble text="Software Engineer · Systems Builder" className="text-primary text-xs sm:text-sm font-medium tracking-wide" delay={300} />
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-6 sm:mb-8"
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
            <motion.div
              className="absolute -bottom-1 sm:-bottom-2 left-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-primary via-primary/50 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I design reliable digital products for commerce, communities, and growing organizations — from e-commerce and inventory systems to streaming and messaging platforms.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" /> Nairobi, Kenya
          </span>
          <a href="mailto:achlasolution@gmail.com" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" /> achlasolution@gmail.com
          </a>
          <a href="tel:+254110941031" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" /> 0110941031
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MagneticButton
            href="#projects"
            className="group relative px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-3.5 border border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>

        </div>

        <motion.div initial={{ opacity: 0, scale: 0.88, rotate: 6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-[min(82vw,390px)] lg:w-full perspective-[1000px]">
          <motion.div animate={{ y: [0, -12, 0], rotateY: [-3, 3, -3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative aspect-[.76] rounded-[2rem] p-2 bg-gradient-to-br from-primary via-sky-400/60 to-primary/20 shadow-[0_30px_100px_hsl(160_60%_45%_/_0.22)]">
            <img src={portrait} alt="Moses Karani" className="h-full w-full rounded-[1.6rem] object-cover object-center" />
            <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-background/55 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/15 bg-background/55 px-4 py-3 backdrop-blur-md"><div><p className="text-xs text-primary">Available for collaboration</p><p className="font-serif text-lg">Nairobi, Kenya</p></div><Code2 className="h-6 w-6 text-primary" /></div>
          </motion.div>
          <div className="absolute -right-5 top-12 h-20 w-20 rounded-2xl border border-primary/30 bg-card/70 backdrop-blur-md hidden sm:block animate-[float_5s_ease-in-out_infinite]" />
          <div className="absolute -left-7 bottom-16 h-14 w-14 rounded-full bg-primary/20 blur-sm hidden sm:block" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
