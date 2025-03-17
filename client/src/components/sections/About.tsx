import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I am a motivated Junior Developer with an engineering background and hands-on experience in PHP and web development. 
              Currently pursuing a degree in Computer Engineering at Sagarmatha Engineering College, I'm eager to grow and seek 
              opportunities in dynamic environments that foster innovation and learning.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
