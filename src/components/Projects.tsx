import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Prime Market",
    subtitle: "Multi-Vendor E-Commerce Platform",
    description: "A commerce and inventory solution built to help the Prime Market team manage products, stock, orders, and everyday operations in one practical system.",
    tech: ["ASP.NET Core", "E-Commerce", "Inventory", "SQL", "Docker"],
    highlight: "Commerce operations • Inventory visibility",
    status: "Delivered",
    num: "01",
  },
  {
    title: "POE Platform",
    subtitle: "Multi-Institutional Learning Analytics",
    description: "Cloud-native analytics platform serving 10,000+ concurrent users across 5 TVET colleges with role-based dashboards and real-time monitoring.",
    tech: ["Rust", "React", "PostgreSQL", "AWS", "Prometheus"],
    highlight: "99.8% uptime • 60% faster deployments",
    status: "Production",
    num: "02",
  },
  {
    title: "Hospital Management System",
    subtitle: "16-Module Hospital ERP",
    description: "Comprehensive ERP consolidating patient care, billing, pharmacy, laboratory, radiology, and operations with multi-hospital deployment capabilities.",
    tech: ["Rust", "Node.js", "PostgreSQL", "AWS", "Docker"],
    highlight: "99.9% uptime • 16 modules • Auto failover",
    status: "Production",
    num: "03",
  },
  {
    title: "Rhema Outreach Digital Platform",
    subtitle: "Streaming, Prayer & Community Communication",
    description: "An active collection of side projects: a church streaming app, the Wailing Mothers Prayer Movement website, and a bulk SMS platform for community communication.",
    tech: ["Streaming", "Web Development", "SMS", "Community Tools"],
    highlight: "Live ministry • Outreach • Bulk messaging",
    status: "In Development",
    num: "04",
  },
  {
    title: "AppTestHub",
    subtitle: "QA Marketplace",
    description: "React Native marketplace connecting enterprises with distributed QA testers. Automated bug reporting with performance analytics.",
    tech: ["React Native", "FastAPI", "MongoDB", "AWS Amplify", "Stripe"],
    highlight: "Automated reporting • Enterprise testing",
    status: "Testing",
    num: "05",
  },
  {
    title: "AccountYetu",
    subtitle: "Subscription Resale Platform",
    description: "SaaS platform for premium subscription services at subsidized rates with automated provisioning and customer management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    highlight: "Automated provisioning • SaaS model",
    status: "Production",
    num: "06",
  },
];

const statusColor: Record<string, string> = {
  Production: "bg-primary/20 text-primary border-primary/30",
  "In Development": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Testing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Delivered: "bg-primary/20 text-primary border-primary/30",
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 overflow-hidden cursor-default"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),_hsl(160_60%_45%_/_0.06)_0%,_transparent_60%)]" />
      
      <span className="absolute top-2 right-4 sm:top-4 sm:right-6 text-5xl sm:text-7xl font-serif text-border/30 select-none">{project.num}</span>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
              {project.title}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <span className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium border whitespace-nowrap self-start ${statusColor[project.status]}`}>
            {project.status}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{project.description}</p>
        
        <motion.p
          className="text-[10px] sm:text-xs text-primary font-medium mb-4 sm:mb-5 flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
          {project.highlight}
        </motion.p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-secondary/60 text-secondary-foreground rounded-lg border border-border/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-10 sm:mb-16"
        >
          <div>
            <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-3 sm:mb-4">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
              Featured <span className="text-gradient">projects</span>
            </h2>
          </div>
          <motion.span
            className="hidden sm:block text-5xl md:text-7xl font-serif text-border/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {projects.length}
          </motion.span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
