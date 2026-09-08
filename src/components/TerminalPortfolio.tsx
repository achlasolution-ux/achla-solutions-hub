import { FormEvent, useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";

type Entry = { command?: string; content: React.ReactNode };

const commands = ["help", "about", "now", "projects", "experience", "skills", "contact", "clear"];

const terminalContent: Record<string, React.ReactNode> = {
  welcome: <WelcomeMessage />,
  help: <TypingText delay={300} text={"Available commands:\n\nhelp        show all commands\nabout       learn about Moses\nnow         see current work\nprojects    view selected work\nexperience  view work history\nskills      view technical toolkit\ncontact     get in touch\nphoto       view portrait\nclear       reset the terminal"} />,
  about: <TypingText delay={550} text={"I am Moses Karani, a software engineer and tech enthusiast based in Kenya. I work across backend development, web applications, e-commerce, inventory, payments, streaming, testing, and cloud-ready systems.\n\nMy approach is practical and systematic: understand the workflow first, build a maintainable solution, test real user paths and edge cases, and document the work clearly for the people who will operate it.\n\nI have worked with JavaScript and TypeScript, Python, C#, Rust, SQL, HTML, CSS, Go, PostgreSQL, ASP.NET Core, React, React Native, Node.js, FastAPI, Docker, Git, AWS, and production payment and email integrations."} />,
  now: <TypingText delay={350} text={"Current work: Rhema Outreach Missionary International\nJun 2026 – Present\n\nI am developing the backend services with Go and PostgreSQL. The work includes a church streaming application, the Wailing Mothers Prayer Movement website, and a bulk SMS platform for community communication.\n\nThe platform work includes Paystack payment integration, Brevo messaging services, and Zoho email integration for transactional and operational communication. I am designing the backend around dependable data handling, clear service boundaries, and practical administration for the church team."} />,
  projects: <TypingText delay={350} text={"01 / Rhema Outreach Digital Platform\nBackend services built with Go and PostgreSQL for church streaming, prayer-movement web experiences, and bulk SMS communication. Integrations include Paystack for payments, Brevo for messaging workflows, and Zoho for email communication.\n\n02 / Prime Market\nMulti-vendor e-commerce and inventory platform. Work covered catalogue management, stock operations, orders, payment processing, operational administration, production testing, and code-quality work across a complex marketplace system.\n\n03 / AppTestHub\nQA marketplace platform connecting enterprises with distributed software testers. Built for structured bug reporting, test-result aggregation, and professional documentation workflows using React Native, FastAPI, and MongoDB.\n\n04 / Achla Solutions\nWeb products, systems engineering, and digital solutions for organizations that need dependable technology and clear user workflows."} />,
  experience: <TypingText delay={350} text={"Software Engineer, Side Projects — Rhema Outreach Missionary International\nJun 2026 – Present · Kenya\n\n• Developing backend services with Go and PostgreSQL.\n• Building a church streaming application to support live ministry across devices.\n• Developing the Wailing Mothers Prayer Movement website for outreach, engagement, and community information.\n• Creating a bulk SMS platform for dependable communication with members and communities.\n• Integrating Paystack payment services for digital transactions.\n• Integrating Brevo services for messaging and communication workflows.\n• Integrating Zoho email for transactional and operational email delivery.\n• Designing services around maintainable data handling, clear administration, and reliable day-to-day operation.\n\nSoftware Engineer — Prime Market\nNov 2025 – May 2026 · Nairobi, Kenya\n\n• Built, tested, debugged, and maintained a multi-vendor e-commerce and inventory management platform.\n• Worked across catalogue, stock, order, and operational administration workflows.\n• Tested ASP.NET Core e-commerce workflows and complex marketplace logic.\n• Evaluated code quality across a 66-table database design and 421 Entity Framework migrations.\n• Tested payment gateway integrations including Stripe, PayPal, Razorpay, and Paystack.\n• Investigated payment webhook edge cases, inventory conditions, checkout flows, and order lifecycle behaviour.\n• Documented issues and improved reliability and usability for day-to-day commerce operations.\n\nFounder & QA Platform Developer — Achla Solutions\nJan 2023 – Present · Kenya\n\n• Founded and developed AppTestHub, a QA marketplace connecting enterprises with software testers.\n• Built structured workflows for distributed testing, bug reporting, test-result aggregation, and technical documentation.\n• Used React Native, FastAPI, and MongoDB for the platform.\n• Tested production systems, multi-tenant workflows, user permissions, payment processing, and cross-platform mobile applications.\n• Created technical documentation, reproducible bug reports, testing procedures, and system-administration guides."} />,
  skills: <TypingText delay={300} text={"Languages\nJavaScript / TypeScript · Python · C# · Rust · Go · SQL · HTML / CSS · Bash\n\nBackend and data\nGo · ASP.NET Core · Node.js · FastAPI · Flask · PostgreSQL · SQL Server · MongoDB · Entity Framework\n\nFrontend and mobile\nReact · Next.js · React Native · Tailwind CSS · Material UI · Razor Pages\n\nInfrastructure and tools\nDocker · AWS · Git · GitHub · Linux · Visual Studio Code · Visual Studio 2022\n\nQuality engineering\nUnit testing · Integration testing · End-to-end testing · Performance testing · Security testing · Cross-browser testing · Debugging · Code review · Technical documentation\n\nIntegrations\nPaystack · Stripe · PayPal · Razorpay · Brevo · Zoho Email · REST APIs · Webhooks"} />,
  contact: <TypingText delay={300} text={"Email: moseskaran7i@gmail.com\nPhone: +254 110 941 031\nLocation: Nairobi, Kenya\nWebsite: achla-solutions.vercel.app"} />,
};

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visible, setVisible] = useState(0);
  const completeRef = useRef(false);
  useEffect(() => {
    let interval: number | undefined;
    const startTimer = window.setTimeout(() => {
      const type = () => setVisible((current) => {
        if (current + 1 >= text.length && interval) window.clearInterval(interval);
        return current < text.length ? current + 1 : current;
      });
      type();
      interval = window.setInterval(type, 13);
    }, delay);
    return () => { window.clearTimeout(startTimer); if (interval) window.clearInterval(interval); };
  }, [delay, text]);
  useEffect(() => {
    if (visible === text.length && !completeRef.current) {
      completeRef.current = true;
      window.dispatchEvent(new Event("terminal-typing-complete"));
    }
  }, [visible, text.length]);
  return <p className="typed-welcome">{text.slice(0, visible)}{visible < text.length && <span className="typing-caret" />}</p>;
}

function WelcomeMessage() {
  const message = "Hi, I’m Moses Karani, a Software Engineer and Tech Enthusiast.\n\nWelcome to my interactive portfolio terminal.\nUse the menu or type 'help' to explore my work.";
  const [visible, setVisible] = useState(0);
  const completeRef = useRef(false);
  useEffect(() => {
    if (visible >= message.length) return;
    const timer = window.setTimeout(() => setVisible((current) => current + 1), 16);
    return () => window.clearTimeout(timer);
  }, [visible, message.length]);
  useEffect(() => {
    if (visible === message.length && !completeRef.current) {
      completeRef.current = true;
      window.dispatchEvent(new Event("terminal-typing-complete"));
    }
  }, [visible, message.length]);
  return <p className="typed-welcome">{message.slice(0, visible)}{visible < message.length && <span className="typing-caret" />}</p>;
}

function LiveClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => { const timer = window.setInterval(() => setNow(new Date()), 1000); return () => window.clearInterval(timer); }, []);
  return <span>{now.toLocaleDateString("en-GB")} · {now.toLocaleTimeString("en-GB")}</span>;
}

const TerminalPortfolio = () => {
  const [entries, setEntries] = useState<Entry[]>([{ content: terminalContent.welcome }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  const runCommand = (rawCommand: string, showCommand = true) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command || isTyping) return;
    if (command === "clear") { setEntries([]); setIsTyping(false); return; }
    const content = terminalContent[command] ?? <><p><span className="terminal-error">bash:</span> {command}: command not found</p><p>I can only provide information about Moses Karani from this portfolio. Type <span className="terminal-command">help</span> to see available commands.</p></>;
    setEntries((current) => [...current, ...(showCommand ? [{ command }] : []), { content }]);
    setIsTyping(true);
    if (!terminalContent[command]) window.setTimeout(() => setIsTyping(false), 1000);
  };

  const submit = (event: FormEvent) => { event.preventDefault(); runCommand(input); setInput(""); };

  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [entries]);
  useEffect(() => {
    const complete = () => setIsTyping(false);
    window.addEventListener("terminal-typing-complete", complete);
    return () => window.removeEventListener("terminal-typing-complete", complete);
  }, []);

  return <main className="terminal-page">
    <div className="terminal-shell">
      <header className="terminal-header">
        <div><p className="terminal-kicker">MK / COMMAND CENTER</p><a className="terminal-name" href="#top">Moses Karani</a><p>Software Engineer / Tech Enthusiast</p></div>
        <div className="terminal-status"><span className="status-dot" /> Available for collaboration</div>
      </header>
      <nav className="terminal-nav" aria-label="Available terminal commands">{commands.map((command) => <span key={command}>{command}</span>)}</nav>
      <div className="terminal-workspace">
      <section className="terminal-window" aria-label="Interactive portfolio terminal">
        <div className="terminal-intro"><span className="prompt-user">moses</span><span className="prompt-separator">@</span><span className="prompt-host">portfolio</span><span className="prompt-separator">:~$</span> <span className="terminal-command">welcome</span></div>
        {entries.map((entry, index) => <div className="terminal-entry" key={`${entry.command ?? "welcome"}-${index}`}>
          {entry.command && <p className="terminal-input"><span className="prompt-user">moses</span><span className="prompt-separator">@</span><span className="prompt-host">portfolio</span><span className="prompt-separator">:~$</span> {entry.command}</p>}
          <div className="terminal-output">{entry.content}</div>
        </div>)}
        {!isTyping && <form onSubmit={submit} className="terminal-form"><label htmlFor="terminal-input"><span className="prompt-user">moses</span><span className="prompt-separator">@</span><span className="prompt-host">portfolio</span><span className="prompt-separator">:~$</span></label><input id="terminal-input" value={input} onChange={(event) => setInput(event.target.value)} autoComplete="off" autoFocus aria-label="Enter a portfolio command" /><span className="terminal-cursor" /></form>}
        <div ref={endRef} />
      </section>
      </div>
      <footer className="terminal-footer"><span>MK/OS · Nairobi, Kenya</span><button onClick={() => navigator.clipboard.writeText("moseskaran7i@gmail.com")}><Copy size={13} /> copy email</button><LiveClock /></footer>
    </div>
  </main>;
};

export default TerminalPortfolio;
