import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";

const Footer = () => {
  const quickLinks = [
    { title: "About Us", href: "#about" },
    { title: "Admissions", href: "#admissions" },
    { title: "Courses", href: "#courses" },
    { title: "Campus Life", href: "#" },
  ];

  const programs = [
    { title: "Undergraduate", href: "#" },
    { title: "Postgraduate", href: "#" },
    { title: "Research", href: "#" },
    { title: "Online Programs", href: "#" },
  ];

  const resources = [
    { title: "Library", href: "#" },
    { title: "Placements", href: "#" },
    { title: "Alumni", href: "#" },
    { title: "News & Events", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={universityLogo} alt="RV University Logo" className="h-12 w-12 brightness-0 invert" />
              <div>
                <h3 className="text-xl font-display font-bold">RV University</h3>
                <p className="text-sm font-sans text-primary-foreground/80">Excellence in Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Empowering students with knowledge and skills to excel in their chosen fields and contribute meaningfully to society.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href={program.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {program.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2024 RV University. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
