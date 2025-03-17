import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/assets/profile.jpg" alt="Sangam Poudel" />
            <AvatarFallback className="text-4xl">SP</AvatarFallback>
          </Avatar>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm Sangam Poudel
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Web Developer with PHP Proficiency
        </p>
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block"
        >
          <ArrowDown className="h-8 w-8" />
        </motion.a>
      </motion.div>
    </section>
  );
}