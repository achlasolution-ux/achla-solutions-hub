import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 1, suffix: "", label: "Commerce System", icon: "◉" },
  { value: 3, suffix: "", label: "Active Builds", icon: "✦" },
  { value: 2, suffix: "", label: "Product Focuses", icon: "↗" },
  { value: 1, suffix: "", label: "Clear Mission", icon: "◎" },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-3 sm:mb-4">About</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 sm:mb-12">
            Building useful software, <span className="text-gradient">with care.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 sm:space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-base sm:text-lg">
              I’m Moses Karani, a full-stack software engineer who turns real operational needs into clear, dependable digital products. My work spans commerce, inventory, streaming, websites, and communication tools.
            </p>
            <p className="text-sm sm:text-base">
              At <strong className="text-foreground">Prime Market</strong>, I built and managed an e-commerce and inventory system. I now contribute through independent projects for Rhema Outreach Missionary International, bringing practical technology to ministry and community work.
            </p>
            <p className="text-sm sm:text-base">
              I care about the details that make software useful: a graceful user experience, maintainable systems, and products that stay easy to run after launch.
            </p>

            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {["React", "ASP.NET Core", "Node.js", "Cloud", "Docker", "Product Design"].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-primary/20 rounded-full text-primary bg-primary/5"
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
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="relative bg-card border border-border rounded-2xl p-4 sm:p-6 card-hover text-center overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">{stat.icon}</span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-gradient mb-1 sm:mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">{stat.label}</div>
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
