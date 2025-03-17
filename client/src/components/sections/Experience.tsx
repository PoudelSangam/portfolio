
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance Developer",
    position: "Web Developer",
    period: "2022 - Present",
    description: "Developed and maintained web applications for various clients using React, Node.js, and PHP",
    responsibilities: [
      "Built responsive web applications using modern frameworks",
      "Implemented secure authentication systems",
      "Optimized website performance and SEO"
    ]
  },
  {
    company: "Tech Internship",
    position: "Software Developer Intern",
    period: "2021 - 2022",
    description: "Worked on full-stack development projects using PHP and MySQL",
    responsibilities: [
      "Developed backend APIs using PHP",
      "Created and maintained database schemas",
      "Collaborated with senior developers on project implementation"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.position}</CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
