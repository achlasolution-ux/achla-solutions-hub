import { motion } from "framer-motion";
import { Code2, Cloud, Database, CreditCard, Layout, Server } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Rust", "Python", "TypeScript", "JavaScript", "C#", "C", "SQL", "Bash"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Material-UI", "Razor Pages"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["ASP.NET Core", "Node.js", "Express", "FastAPI", "Django", "Flask", "Entity Framework"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Nginx", "Caddy"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL", "Redis", "SQLite", "Supabase"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Payments & APIs",
    icon: <CreditCard className="w-5 h-5" />,
    skills: ["M-Pesa", "Stripe", "PayPal", "Paystack", "REST", "GraphQL", "WebSockets", "OAuth 2.0"],
    color: "from-lime-500/20 to-green-500/20",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 15 } as const,
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-10" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-3 sm:mb-4">Expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-10 sm:mb-16">
            Technical <span className="text-gradient">proficiencies</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="group relative bg-card border border-border rounded-2xl p-5 sm:p-6 overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {group.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + j * 0.03 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
