import { Github, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Built by <span className="text-foreground font-medium">Cleophas Ouma</span> © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/cleophas-tech/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/chrisakhula" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="http://web.facebook.com/chrisakhula1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={18} />
          </a>
          <a href="https://x.com/ChrisAkhula" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
          <a href="https://www.instagram.com/chrisakhula/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
