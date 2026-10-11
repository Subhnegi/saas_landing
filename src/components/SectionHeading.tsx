import { cn } from "../lib/utils";
import { motion } from "motion/react";

interface SectionHeadingProps {
  pill?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ pill, title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {pill && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full"
        >
          {pill}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy mb-4 text-balance",
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-500 text-balance leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
