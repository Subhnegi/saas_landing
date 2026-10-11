import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Khatakitab has completely changed how I manage my grocery shop. I no longer rely on messy notebooks, and I can track all my daily sales directly from my phone.",
      author: "Ramesh Kumar",
      role: "Grocery Store Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      text: "The inventory alerts are a lifesaver! I never run out of my best-selling items anymore. The daily profit reports are incredibly easy to understand.",
      author: "Priya Sharma",
      role: "Clothing Boutique",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      text: "Simple, clean and super useful. Exactly what small businesses like ours need. The offline backup feature gives me total peace of mind.",
      author: "Amit Verma",
      role: "Salon Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          centered
          pill="Loved by Business Owners"
          title="Don't Just Take Our Word For It"
          subtitle="Join thousands of small business owners who have transformed their operations with Khatakitab."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-[2rem] bg-white border border-borderLight shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-2 flex flex-col z-10 overflow-hidden"
            >
              {/* Background Quote Watermark */}
              <Quote className="absolute top-6 right-6 text-slate-50 w-24 h-24 -z-10 transform -scale-x-100 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/5" />
              
              <div className="flex items-center gap-1.5 mb-6 text-yellow-400">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-[15px] font-medium">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                {/* Rich Avatar */}
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-2xl object-cover shadow-inner border border-borderLight"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={14} className="text-success" />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-navy text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-slate-400 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
