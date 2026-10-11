import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  iconBgClass?: string;
  iconTextClass?: string;
  iconShadowClass?: string;
}

export function FeatureCard({ icon, title, description, index, iconBgClass, iconTextClass, iconShadowClass }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-2 sm:p-4 group flex flex-col items-start"
    >
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105",
        iconBgClass || "bg-primary/10",
        iconTextClass || "text-primary",
        iconShadowClass
      )}>
        {icon}
      </div>
      <h3 className="text-[17px] font-bold text-navy mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}
