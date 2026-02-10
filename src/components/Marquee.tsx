const items = [
  "React", "Rust", "AWS", "Docker", "Kubernetes", "TypeScript", "Node.js",
  "ASP.NET Core", "PostgreSQL", "Python", "Next.js", "Terraform",
  "GraphQL", "Redis", "MongoDB", "Stripe", "M-Pesa", "FastAPI",
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden py-6 border-y border-border/30">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-4 sm:mx-6 text-sm sm:text-base font-medium text-muted-foreground/40 uppercase tracking-widest select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
