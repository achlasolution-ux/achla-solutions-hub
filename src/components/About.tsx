import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", icon: "⚡" },
  { value: 10, suffix: "K+", label: "Users Served", icon: "👥" },
  { value: 99, suffix: ".8%", label: "Uptime SLA", icon: "🛡️" },
  { value: 15, suffix: "+", label: "Projects Delivered", icon: "🚀" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-4">About</p>
          <h2 className="text-4xl sm:text-6xl font-serif mb-12">
            Building the digital{" "}
            <span className="text-gradient">backbone</span> of East Africa
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              Full-Stack Software Engineer with extensive experience architecting and delivering 
              enterprise-grade systems. Currently developing <strong className="text-foreground">Prime Market</strong>, 
              a multi-vendor e-commerce platform targeting 50,000+ concurrent users.
            </p>
            <p>
              Founder of <strong className="text-foreground">Achla Solutions</strong>, specializing in 
              web development, cloud infrastructure, and digital transformation. Expert in ASP.NET Core, 
              React, Node.js, Python, Rust, AWS, and DevOps automation.
            </p>
            <p>
              Proven track record building production systems with high reliability — from hospital 
              management platforms to learning analytics serving multiple TVET colleges.
            </p>

            {/* Tech orbit visual */}
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {["Rust", "React", "AWS", "Docker", ".NET", "Node.js"].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 text-sm border border-primary/20 rounded-full text-primary bg-primary/5"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, borderColor: "hsl(160 60% 45% / 0.5)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative bg-card border border-border rounded-2xl p-6 card-hover text-center overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <div className="text-3xl sm:text-4xl font-serif text-gradient mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
