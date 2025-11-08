import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fees = () => {
  const feeStructure = [
    {
      program: "Engineering Programs",
      tuitionFee: "₹2,50,000",
      hostelFee: "₹1,00,000",
      otherFees: "₹25,000",
      total: "₹3,75,000",
      features: ["Lab Access", "Library", "Sports Facilities", "Tech Support"],
    },
    {
      program: "Business Programs",
      tuitionFee: "₹2,00,000",
      hostelFee: "₹1,00,000",
      otherFees: "₹20,000",
      total: "₹3,20,000",
      features: ["Industry Visits", "Library", "Career Services", "Workshops"],
    },
    {
      program: "Design Programs",
      tuitionFee: "₹2,25,000",
      hostelFee: "₹1,00,000",
      otherFees: "₹30,000",
      total: "₹3,55,000",
      features: ["Studio Access", "Software Licenses", "Library", "Portfolio Development"],
    },
  ];

  const scholarships = [
    "Merit-based scholarships up to 100% tuition waiver",
    "Need-based financial assistance available",
    "Sports quota scholarships",
    "Special scholarships for women students",
    "Fee concession for economically weaker sections",
  ];

  return (
    <section id="fees" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">Fee Structure</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparent and competitive fee structure designed to provide value for your investment in education. Annual fees for academic year 2024-25.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {feeStructure.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardTitle className="text-xl text-center">{item.program}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tuition Fee</span>
                    <span className="font-semibold">{item.tuitionFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hostel Fee</span>
                    <span className="font-semibold">{item.hostelFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Other Fees</span>
                    <span className="font-semibold">{item.otherFees}</span>
                  </div>
                  <div className="h-px bg-border my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total Per Year</span>
                    <span className="text-accent">{item.total}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-2">Includes:</p>
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl">Scholarships & Financial Aid</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {scholarships.map((scholarship, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{scholarship}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Apply for Scholarship
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Fees;
