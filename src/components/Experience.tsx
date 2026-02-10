import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Engineer",
    org: "Prime Market",
    period: "Dec 2025 – Present",
    location: "Nairobi, Kenya",
    points: [
      "Developing multi-vendor e-commerce platform with ASP.NET Core 7.0 targeting 50,000+ concurrent users",
      "Architected 66-table database schema with 421 Entity Framework Core migrations",
      "Integrated 4 payment gateways with webhook handling",
      "Deployed on Docker with Caddy reverse proxy, achieving <1s response time",
    ],
  },
  {
    type: "work",
    title: "Founder & Lead Solutions Architect",
    org: "Achla Solutions",
    period: "Jan 2023 – Present",
    location: "Meru, Kenya",
    points: [
      "Built product portfolio serving 10,000+ users across education, healthcare, and media",
      "Managed $8,000+ in active client projects",
      "Delivered 15+ professional websites with 99% uptime and 90+ PageSpeed scores",
      "Reduced loading times by 60% through comprehensive optimization",
    ],
  },
  {
    type: "work",
    title: "ICT Systems Administrator",
    org: "Freelance",
    period: "Jan 2024 – Dec 2024",
    location: "Remote / Meru / Nairobi",
    points: [
      "Developed 25+ custom websites and web applications",
      "Built AWS infrastructure from scratch for 8+ client projects",
      "98% client satisfaction rate with 24/7 technical support",
    ],
  },
  {
    type: "education",
    title: "ALX Software Engineering Program",
    org: "Holberton Certified",
    period: "Graduated Feb 2025",
    location: "",
    points: [
      "1,200+ hours, 40+ intensive projects",
      "Systems Engineering, DevOps Architecture, Cloud Infrastructure",
    ],
  },
  {
    type: "education",
    title: "Diploma in ICT",
    org: "Meru National Polytechnic",
    period: "Completed",
    location: "",
    points: [
      "Software Engineering, Database Administration, Web Development",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-5" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-4">Journey</p>
          <h2 className="text-4xl sm:text-6xl font-serif mb-16">
            Experience & <span className="text-gradient">education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.org}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-16 group"
              >
                {/* Dot with pulse */}
                <div className="absolute left-[14px] top-1 z-10">
                  <div className="w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="w-3 h-3 text-primary" />
                    ) : (
                      <GraduationCap className="w-3 h-3 text-primary" />
                    )}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </div>

                <motion.div
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300"
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-lg font-serif text-foreground">{exp.title}</h3>
                    <span className="text-primary text-sm font-medium">{exp.org}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {exp.period} {exp.location && `• ${exp.location}`}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + j * 0.05 }}
                      >
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
