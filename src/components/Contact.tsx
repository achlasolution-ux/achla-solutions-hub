import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-4">Connect</p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-6">
            Let's build <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            Open to full-time opportunities, consulting, and exciting collaborations. 
            Let's create something extraordinary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
        >
          <a
            href="mailto:achlasolution@gmail.com"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 card-hover group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">achlasolution@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+254110941031"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 card-hover group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">0110941031 / 0739993487</p>
            </div>
          </a>

          <a
            href="https://achla-solutions.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 card-hover group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <ExternalLink className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Website</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">achla-solutions.vercel.app</p>
            </div>
          </a>

          <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-5">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm text-foreground">Nairobi, Kenya</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Moses Karani. Built with passion from Nairobi, Kenya.
        </p>
      </div>
    </section>
  );
};

export default Contact;
