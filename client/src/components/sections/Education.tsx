import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const education = [
  {
    school: "Sagarmatha Engineering College",
    logo: "/assets/sagarmatha-logo.png",
    degree: "Degree of Computer Engineering",
    period: "2021 - Present",
    location: "Kathmandu, Nepal"
  },
  {
    school: "Bal Uddhar Secondary School",
    logo: "/assets/bal-uddhar-logo.png",
    degree: "+2 in Computer Engineering",
    period: "2019 - 2021",
    location: "Kathmandu, Nepal",
    gpa: "GPA: 3.47/4.0"
  },
  {
    school: "Tribeni Ma Vi",
    logo: "/assets/tribeni-logo.png",
    degree: "Secondary Education Examination (TSEE)",
    period: "2019",
    location: "Dhankuta, Nepal",
    gpa: "GPA: 3.56/4.0"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={edu.logo} alt={edu.school} />
                      <AvatarFallback>{edu.school[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{edu.school}</CardTitle>
                      <CardDescription>
                        <div className="grid gap-1">
                          <p>{edu.degree}</p>
                          <p>{edu.period}</p>
                          <p>{edu.location}</p>
                          {edu.gpa && <p className="font-medium">{edu.gpa}</p>}
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}