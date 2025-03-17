import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const education = [
  {
    school: "Sagarmatha Engineering College",
    degree: "Degree of Computer Engineering",
    period: "2021 - Present",
    location: "Kathmandu, Nepal"
  },
  {
    school: "Bal Uddhar Secondary School",
    degree: "+2 in Computer Engineering",
    period: "2019 - 2021",
    location: "Kathmandu, Nepal",
    gpa: "GPA: 3.47/4.0"
  },
  {
    school: "Tribeni Ma Vi",
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
                  <CardTitle>{edu.school}</CardTitle>
                  <CardDescription>
                    <div className="grid gap-1">
                      <p>{edu.degree}</p>
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                      {edu.gpa && <p className="font-medium">{edu.gpa}</p>}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
