import { Code, Briefcase, Microscope, Palette, Calculator, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: "Computer Science & Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      specializations: ["AI & ML", "Cyber Security", "Data Science"],
    },
    {
      icon: Briefcase,
      title: "Business Administration",
      duration: "3 Years",
      degree: "BBA",
      specializations: ["Finance", "Marketing", "HR Management"],
    },
    {
      icon: Microscope,
      title: "Biotechnology",
      duration: "4 Years",
      degree: "B.Tech",
      specializations: ["Genetic Engineering", "Bioinformatics", "Molecular Biology"],
    },
    {
      icon: Palette,
      title: "Design & Arts",
      duration: "4 Years",
      degree: "B.Des",
      specializations: ["UI/UX Design", "Product Design", "Visual Communication"],
    },
    {
      icon: Calculator,
      title: "Mathematics & Computing",
      duration: "4 Years",
      degree: "B.Tech",
      specializations: ["Applied Mathematics", "Computational Science", "Statistics"],
    },
    {
      icon: Building,
      title: "Civil Engineering",
      duration: "4 Years",
      degree: "B.Tech",
      specializations: ["Structural Engineering", "Construction Management", "Urban Planning"],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">Our Courses</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from a wide range of undergraduate and postgraduate programs designed to equip you with industry-relevant skills and knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <course.icon className="h-8 w-8 text-accent" />
                  </div>
                  <Badge variant="secondary">{course.degree}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.specializations.map((spec, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
