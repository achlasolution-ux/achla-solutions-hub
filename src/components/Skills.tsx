import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Rust", "Python", "TypeScript", "JavaScript", "C#", "C", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Material-UI", "Razor Pages"],
  },
  {
    title: "Backend",
    skills: ["ASP.NET Core", "Node.js", "Express", "FastAPI", "Django", "Flask", "Entity Framework"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Nginx", "Caddy"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL", "Redis", "SQLite", "Supabase"],
  },
  {
    title: "Payments & APIs",
    skills: ["M-Pesa", "Stripe", "PayPal", "Paystack", "REST", "GraphQL", "WebSockets", "OAuth 2.0"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-4">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-16">
            Technical <span className="text-gradient">proficiencies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <h3 className="text-lg font-serif text-primary mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
