import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";

export function FinalCtaSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-navy via-primary to-accent px-8 py-16 md:py-20 text-center shadow-premium"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIwaDJWMzRoLTJ6bS0xOCAwdi0yNGgydjI0aC0yem05LTl2MTBoMnYtMTBoLTJ6bTktOXYxMGgydi0xMGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Ready to Take Control of Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-lg text-balance">
              Explore a simpler way to manage your day-to-day business operations. Free forever for basic use.
            </p>
            
            <Button size="lg" className="bg-white text-navy hover:bg-slate-50 group shadow-lg shadow-black/20">
              Get Started Free
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="mt-6 text-xs text-white/60">
              No credit card required. Setup in 2 minutes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
