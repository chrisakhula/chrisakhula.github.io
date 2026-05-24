import { Github, Linkedin, Mail } from "lucide-react";
import portraitArt from "@/assets/dev-cleophas01.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background py-14">
      <div className="section-container flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="portrait-frame flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border bg-background p-0.5">
            <img
              src={portraitArt}
              alt="Original portrait of Cleophas Ouma"
              className="h-full w-full rounded-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <div>
            <p className="font-bold text-primary">
              Cleophas Ouma
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Copyright {new Date().getFullYear()} Cleophas Ouma. Strategic ICT
              Leadership and ERP Advisory.
            </p>
          </div>
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
