import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, label: "Students", value: "10,000+" },
    { icon: BookOpen, label: "Programs", value: "100+" },
    { icon: GraduationCap, label: "Faculty", value: "500+" },
    { icon: Award, label: "Awards", value: "50+" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">About RV University</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established with a vision to provide world-class education, RV University stands as a beacon of academic excellence and innovation. Our commitment to nurturing talent and fostering research has made us a preferred destination for students worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="font-sans text-muted-foreground leading-relaxed">
              To provide quality education that empowers students with knowledge, skills, and values necessary to excel in their chosen fields and contribute meaningfully to society. We strive to create an inclusive learning environment that encourages critical thinking, creativity, and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="font-sans text-muted-foreground leading-relaxed">
              To be a globally recognized institution of higher learning that sets benchmarks in education, research, and social responsibility. We aim to nurture leaders who can address contemporary challenges and drive positive change in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
