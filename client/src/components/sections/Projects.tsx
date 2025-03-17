import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Result Management System",
    description: "A web-based application that allows students to view their terminal mark sheets while enabling teachers and admins to enter and manage marks. Features secure authentication, role-based access, automated grade calculations, and options to export or print results.",
    image: "/assets/result-management.png",
    demo: "https://result-management.demo.com",
    github: "https://github.com/username/result-management",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"]
  },
  {
    title: "Assignment Management",
    description: "A system ensuring students log in using college email for secure access. Class Representatives (CRs) upload assignments, with automated email reminders for deadlines. Provides access to study materials and delivers real-time IOE notices.",
    image: "/assets/assignment-management.png",
    demo: "https://assignment-management.demo.com",
    github: "https://github.com/username/assignment-management",
    technologies: ["PHP", "MySQL", "Ajax", "JavaScript"]
  },
  {
    title: "Driving Written Test",
    description: "A web-based platform designed to help users prepare for driving license exams. Provides MCQs based on traffic rules and regulations. Features practice tests, instant feedback, progress tracking, and answer review.",
    image: "/assets/driving-test.png",
    demo: "https://driving-test.demo.com",
    github: "https://github.com/username/driving-test",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Chatting Web App",
    description: "A real-time messaging application using Polling that enables communication by repeatedly requesting updates from the server at fixed intervals.",
    image: "/assets/chat-app.png",
    demo: "https://chat-app.demo.com",
    github: "https://github.com/username/chat-app",
    technologies: ["PHP", "MySQL", "WebSocket", "JavaScript"]
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
              <Card className="h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}