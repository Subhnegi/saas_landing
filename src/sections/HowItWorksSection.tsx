import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRight, BarChart2, Package, Store, Receipt, Smartphone } from "lucide-react";
import { cn } from "../lib/utils";

export function HowItWorksSection() {
  const steps = [
    {
      num: 1,
      title: "Choose Your Business",
      desc: "Select your business type—grocery, tailor, salon, or custom. We tailor the experience to your needs.",
      icon: Store,
      color: "from-blue-500 to-indigo-500"
    },
    {
      num: 2,
      title: "Add Your Details",
      desc: "Quickly set up your initial inventory, products, and basic settings in less than two minutes.",
      icon: Package,
      color: "from-purple-500 to-pink-500"
    },
    {
      num: 3,
      title: "Start Managing",
      desc: "Log daily sales, track expenses, and view real-time profit reports—all from your smartphone.",
      icon: BarChart2,
      color: "from-emerald-400 to-teal-500"
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Left Side - Steps */}
          <div className="flex-1 lg:pr-10">
            <SectionHeading
              pill="Get Started in 3 Easy Steps"
              title="How It Works"
              subtitle="Set up your business in minutes and start managing your finances right away without any complex onboarding."
              className="mb-12"
            />
            
            <div className="space-y-4 relative">
              {/* Connecting Line */}
              <div className="absolute left-[38px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 hidden sm:block" />
              
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative flex items-start gap-5 sm:gap-8 group p-4 sm:p-6 -ml-4 sm:-ml-6 rounded-3xl hover:bg-white hover:shadow-premium transition-all duration-300 border border-transparent hover:border-borderLight cursor-default"
                >
                  <div className="relative shrink-0">
                    <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br text-white flex items-center justify-center font-bold text-xl shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", step.color)}>
                      <step.icon size={28} strokeWidth={2.5} />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center border-2 border-white z-20 shadow-sm">
                      {step.num}
                    </div>
                    {/* Glow */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500", step.color)} />
                  </div>
                  
                  <div className="pt-2 sm:pt-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm sm:text-base">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Premium Layered Graphic */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full z-0" />
            <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-accent/20 blur-[80px] rounded-full z-0" />
            
            <div className="relative w-full aspect-square max-h-[600px] flex items-center justify-center z-10">
              
              {/* Central Phone Mockup Base */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute w-[260px] h-[520px] bg-white rounded-[2.5rem] border-[10px] border-navy shadow-2xl overflow-hidden flex flex-col z-20"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-navy rounded-b-2xl z-50"></div>
                
                {/* Screen Content */}
                <div className="flex-1 bg-slate-50 pt-10 p-5 flex flex-col gap-4">
                  <div className="w-full h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="text-[10px] font-medium opacity-80 mb-1">Total Balance</div>
                    <div className="text-2xl font-bold">₹ 1,42,000</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1 h-20 bg-white rounded-xl shadow-sm border border-borderLight p-3 flex flex-col justify-between">
                      <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center"><ArrowRight size={12} className="-rotate-45" /></div>
                      <div className="text-[10px] text-slate-400 font-medium">Income</div>
                    </div>
                    <div className="flex-1 h-20 bg-white rounded-xl shadow-sm border border-borderLight p-3 flex flex-col justify-between">
                      <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center"><ArrowRight size={12} className="rotate-45" /></div>
                      <div className="text-[10px] text-slate-400 font-medium">Expense</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-xl shadow-sm border border-borderLight p-4">
                    <div className="w-1/2 h-3 bg-slate-100 rounded-full mb-4"></div>
                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                          <div className="flex-1 space-y-1.5">
                            <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                            <div className="w-2/3 h-2 bg-slate-50 rounded-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Element 1 - Top Right */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[10%] -right-[5%] md:-right-[15%] z-30"
              >
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 w-[180px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center"><Package size={20} /></div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400">Inventory</div>
                      <div className="text-sm font-bold text-navy">+42 Items</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-500 w-[70%] h-full rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Element 2 - Bottom Left */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[15%] -left-[5%] md:-left-[15%] z-30"
              >
                <div className="bg-navy/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/10 w-[200px] text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><Receipt size={20} /></div>
                    <div>
                      <div className="text-[10px] font-medium text-white/50">New Sale</div>
                      <div className="text-sm font-bold text-white">₹ 4,500.00</div>
                    </div>
                  </div>
                  <div className="text-[9px] text-white/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Payment Received Successfully
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Element 3 - Top Left (Behind) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                className="absolute top-[20%] -left-[10%] z-10 opacity-70 blur-[1px]"
              >
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center"><Store size={24} /></div>
                </div>
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
