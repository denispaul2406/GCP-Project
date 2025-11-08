import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import universityLogo from "@/assets/university-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={universityLogo} alt="RV University Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-display font-bold text-primary">RV University</h1>
              <p className="text-xs font-sans text-muted-foreground">Excellence in Education</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("admissions")} className="text-foreground hover:text-primary transition-colors">
              Admissions
            </button>
            <button onClick={() => scrollToSection("courses")} className="text-foreground hover:text-primary transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection("fees")} className="text-foreground hover:text-primary transition-colors">
              Fees
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="hero">Apply Now</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("admissions")} className="text-left text-foreground hover:text-primary transition-colors">
              Admissions
            </button>
            <button onClick={() => scrollToSection("courses")} className="text-left text-foreground hover:text-primary transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection("fees")} className="text-left text-foreground hover:text-primary transition-colors">
              Fees
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="hero" className="w-full">Apply Now</Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
