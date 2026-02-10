import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";

const contactLinks = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "achlasolution@gmail.com", href: "mailto:achlasolution@gmail.com" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "0110941031 / 0739993487", href: "tel:+254110941031" },
  { icon: <ExternalLink className="w-5 h-5" />, label: "Website", value: "achla-solutions.vercel.app", href: "https://achla-solutions.vercel.app" },
  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Nairobi, Kenya", href: undefined },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[200px] sm:h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-xs font-medium mb-3 sm:mb-4">Connect</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">
            Let's build <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 sm:mb-16 text-sm sm:text-lg px-2">
            Open to full-time opportunities, consulting, and exciting collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          {contactLinks.map((link, i) => {
            const Tag = link.href ? "a" : "div";
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Tag
                  {...(link.href ? { href: link.href, target: link.href?.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 sm:gap-4 bg-card border border-border rounded-2xl p-4 sm:p-5 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    {link.icon}
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{link.label}</p>
                    <p className="text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors truncate">{link.value}</p>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
          className="flex justify-center gap-3 sm:gap-4"
        >
          {[
            { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
          ].map((social) => (
            <MagneticButton key={social.label} href={social.href} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 bg-card/50 backdrop-blur-sm inline-flex">
              {social.icon}
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 sm:mt-32 pt-6 sm:pt-8 border-t border-border text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-[10px] sm:text-xs text-muted-foreground">
          © {new Date().getFullYear()} Moses Karani. Built with passion from Nairobi, Kenya.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
