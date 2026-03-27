import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            Built by <span className="font-medium text-foreground">Cleophas Ouma</span> |{" "}
            {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Focused on systems that actually work.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:ouma.cleo@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/cleophas-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/chrisakhula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
