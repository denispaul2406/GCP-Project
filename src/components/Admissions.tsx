import { Calendar, FileText, CheckCircle, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Online Application",
      description: "Fill out the online application form with your academic details and personal information.",
    },
    {
      icon: CheckCircle,
      title: "Entrance Exam",
      description: "Appear for the university entrance examination or submit valid standardized test scores.",
    },
    {
      icon: UserCheck,
      title: "Document Verification",
      description: "Submit required documents including transcripts, certificates, and identification proofs.",
    },
    {
      icon: Calendar,
      title: "Admission Confirmation",
      description: "Receive your admission letter and complete the enrollment process by paying the fees.",
    },
  ];

  const requirements = [
    "10+2 or equivalent qualification with minimum 60% aggregate",
    "Valid entrance exam scores (University exam or national level tests)",
    "English language proficiency certificate (for international students)",
    "Medical fitness certificate",
    "Character certificate from previous institution",
  ];

  return (
    <section id="admissions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">Admissions Process</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Begin your journey with RV University. Follow our streamlined admission process designed to make your enrollment smooth and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full flex items-start justify-end p-2">
                <span className="text-accent font-bold">{index + 1}</span>
              </div>
              <CardHeader>
                <step.icon className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Eligibility Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1">
                Apply Online
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Download Brochure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Admissions;
