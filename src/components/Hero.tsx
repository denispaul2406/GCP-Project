import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="RV University Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 tracking-tight">
          Welcome to RV University
        </h1>
        <p className="text-xl md:text-2xl font-sans text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering minds, shaping futures. Join a legacy of academic excellence and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" onClick={() => scrollToSection("admissions")}>
            Apply for Admission
          </Button>
          <Button variant="outline" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20" onClick={() => scrollToSection("courses")}>
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
