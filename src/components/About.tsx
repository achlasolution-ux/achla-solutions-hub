import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10K+", label: "Users Served" },
  { value: "99.8%", label: "Uptime SLA" },
  { value: "15+", label: "Projects Delivered" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-4">About</p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-8">
            Building the digital{" "}
            <span className="text-gradient">backbone</span> of East Africa
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 card-hover text-center"
              >
                <div className="text-3xl sm:text-4xl font-serif text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
