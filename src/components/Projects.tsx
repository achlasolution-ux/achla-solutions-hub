import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Prime Market",
    subtitle: "Multi-Vendor E-Commerce Platform",
    description:
      "Enterprise e-commerce platform targeting 50,000+ concurrent users with 4 payment gateways, 66-table database, and complete order lifecycle management.",
    tech: ["ASP.NET Core 7.0", "Entity Framework", "SQL Server", "Docker", "AWS S3"],
    highlight: "421 EF Core migrations • <1s response time",
    status: "In Development",
  },
  {
    title: "POE Platform",
    subtitle: "Multi-Institutional Learning Analytics",
    description:
      "Cloud-native analytics platform serving 10,000+ concurrent users across 5 TVET colleges with role-based dashboards and real-time monitoring.",
    tech: ["Rust", "React", "PostgreSQL", "AWS", "Prometheus"],
    highlight: "99.8% uptime • 60% faster deployments",
    status: "Production",
  },
  {
    title: "Hospital Management System",
    subtitle: "16-Module Hospital ERP",
    description:
      "Comprehensive ERP consolidating patient care, billing, pharmacy, laboratory, radiology, and operations with multi-hospital deployment capabilities.",
    tech: ["Rust", "Node.js", "PostgreSQL", "AWS", "Docker"],
    highlight: "99.9% uptime • 16 modules • Auto failover",
    status: "Production",
  },
  {
    title: "FGCK Streaming Platform",
    subtitle: "Church Broadcasting App",
    description:
      "Cross-platform mobile app for live service broadcasting with integrated M-Pesa and Paystack payments for tithes and donations.",
    tech: ["React Native", "Supabase", "AWS S3", "M-Pesa", "Brevo"],
    highlight: "Live streaming • VOD • Push notifications",
    status: "Production",
  },
  {
    title: "AppTestHub",
    subtitle: "QA Marketplace",
    description:
      "React Native marketplace connecting enterprises with distributed QA testers. Automated bug reporting with performance analytics.",
    tech: ["React Native", "FastAPI", "MongoDB", "AWS Amplify", "Stripe"],
    highlight: "Automated reporting • Enterprise testing",
    status: "Testing",
  },
  {
    title: "AccountYetu",
    subtitle: "Subscription Resale Platform",
    description:
      "SaaS platform for premium subscription services at subsidized rates with automated provisioning and customer management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    highlight: "Automated provisioning • SaaS model",
    status: "Production",
  },
];

const statusColor: Record<string, string> = {
  Production: "bg-primary/20 text-primary",
  "In Development": "bg-amber-500/20 text-amber-400",
  Testing: "bg-blue-500/20 text-blue-400",
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-4">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-16">
            Featured <span className="text-gradient">projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-xl p-6 sm:p-8 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <p className="text-xs text-primary font-medium mb-4">{project.highlight}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md">
                    {t}
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

export default Projects;
