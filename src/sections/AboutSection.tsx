import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";
import { Users, Building2, MapPin, Star, HeartHandshake, Quote } from "lucide-react";
import { cn } from "../lib/utils";

export function AboutSection() {
  const stats = [
    { icon: Users, value: "50,000+", label: "Active Shopkeepers", color: "from-blue-500 to-cyan-400", bg: "bg-blue-50", text: "text-blue-600" },
    { icon: Building2, value: "10,000+", label: "Businesses Registered", color: "from-emerald-400 to-teal-500", bg: "bg-emerald-50", text: "text-emerald-600" },
    { icon: MapPin, value: "200+", label: "Cities & Towns Reached", color: "from-purple-500 to-pink-500", bg: "bg-purple-50", text: "text-purple-600" },
    { icon: Star, value: "4.9/5", label: "App Store Rating", color: "from-orange-400 to-yellow-400", bg: "bg-orange-50", text: "text-orange-600" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
          
          {/* Mission Text */}
          <div className="flex-1 lg:pr-10 relative">
            <div className="absolute -top-12 -left-12 text-slate-100 opacity-50 z-0 hidden sm:block">
              <HeartHandshake size={200} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <SectionHeading
                pill="Our Mission"
                title="Built for the Backbone of the Economy"
                subtitle="Small businesses are the heart of our communities. We built Khatakitab to give them the modern tools they deserve—simple, powerful, and accessible to everyone."
                className="mb-8"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm overflow-hidden z-10">
                  <Quote className="absolute -top-2 -left-2 text-primary/10 w-24 h-24 -z-10 transform rotate-12" />
                  <p className="text-navy font-medium leading-relaxed italic text-lg lg:text-xl relative z-10">
                    "While big corporations had expensive software to manage operations, local shopkeepers were still relying on messy paper notebooks. We decided to change that."
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  We designed an app so intuitive that anyone who knows how to use WhatsApp can learn it in 5 minutes. Today, we are proud to power thousands of local businesses across the country, helping them save time, reduce errors, and increase their profits.
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              {/* Central connection graphic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-xl z-0 hidden sm:block" />
              
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative bg-white border border-borderLight p-6 sm:p-8 rounded-[2rem] flex flex-col items-center text-center group hover:border-transparent hover:shadow-premium transition-all duration-300 z-10 overflow-hidden"
                >
                  {/* Hover background glow */}
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500", stat.color)} />
                  
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner mb-5 group-hover:scale-110 transition-transform duration-300", stat.bg, stat.text)}>
                    <stat.icon size={26} strokeWidth={2.5} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-navy group-hover:to-primary transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
