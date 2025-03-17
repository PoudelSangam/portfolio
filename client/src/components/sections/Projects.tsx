import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Result Management System",
    description: "A web-based application that allows students to view their terminal mark sheets while enabling teachers and admins to enter and manage marks. Features secure authentication, role-based access, automated grade calculations, and options to export or print results."
  },
  {
    title: "Assignment Management",
    description: "A system ensuring students log in using college email for secure access. Class Representatives (CRs) upload assignments, with automated email reminders for deadlines. Provides access to study materials and delivers real-time IOE notices."
  },
  {
    title: "Driving Written Test",
    description: "A web-based platform designed to help users prepare for driving license exams. Provides MCQs based on traffic rules and regulations. Features practice tests, instant feedback, progress tracking, and answer review."
  },
  {
    title: "Chatting Web App",
    description: "A real-time messaging application using Polling that enables communication by repeatedly requesting updates from the server at fixed intervals."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
