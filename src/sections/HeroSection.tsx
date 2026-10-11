import { motion } from "motion/react";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/Button";
import { DashboardMockup } from "../components/DashboardMockup";
import { PhoneMockup } from "../components/PhoneMockup";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative isolate">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cce0ff] via-[#e6f0ff] to-white -z-10" />
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#99c2ff] blur-[120px] opacity-40 -z-10 pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-primary blur-[120px] opacity-10 -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4 xl:gap-8">
          
          {/* Left Column - Content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pale border border-primary/20 text-primary text-xs font-semibold mb-6">
              <Store size={14} />
              Built for Small Businesses
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[56px] font-bold text-navy leading-[1.1] tracking-tight mb-6 text-balance">
              Manage Your Business Finances, Inventory & More — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">All in One Place</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate mb-8 leading-relaxed text-balance max-w-xl">
              Khatakitab helps small businesses like yours track income, expenses, inventory and profits — simple, fast and offline first. Work on your phone, even without internet.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <Button size="lg" className="w-full sm:w-auto group">
                Get Started Free
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto group" onClick={onOpenDemo}>
                <div className="w-6 h-6 rounded-full bg-pale text-primary flex items-center justify-center mr-2 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Play size={12} className="ml-0.5" />
                </div>
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate">
              {[
                "Works Offline",
                "Data Backup",
                "No Credit Card Required"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-success" />
                  {point}
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Mockups */}
          <div className="flex-1 w-full relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-start mt-12 lg:mt-0">
            
            {/* Scalable Mockup Canvas */}
            <div className="absolute w-[1400px] h-[800px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 origin-center lg:origin-left scale-[0.3] sm:scale-[0.4] md:scale-[0.5] lg:scale-[0.6] xl:scale-[0.75] 2xl:scale-[0.85]">
              
              {/* Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[1200px] z-10"
              >
                <DashboardMockup className="w-full h-auto shadow-2xl" />
              </motion.div>
              
              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 drop-shadow-2xl"
              >
                <PhoneMockup />
              </motion.div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// Ensure lucide icon imports matching the brief
import { Store } from "lucide-react";
