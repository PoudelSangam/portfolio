
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-primary/5 to-background px-4 py-20">
      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4 opacity-10 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="h-full w-full border border-primary/20" />
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-30"></div>
          <Avatar className="w-32 h-32 mx-auto border-4 border-background">
            <AvatarImage src="/assets/profile.jpg" alt="Sangam Poudel" />
            <AvatarFallback className="text-4xl">SP</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text"
        >
          Hi, I'm Sangam Poudel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Web Developer with PHP Proficiency
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block mt-16"
        >
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </motion.a>
      </motion.div>
    </section>
  );
}
