import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";
import { Check, X } from "lucide-react";
import { Button } from "../components/Button";
import { cn } from "../lib/utils";

export function PricingSection() {
  const plans = [
    {
      name: "Free Basic",
      price: "₹0",
      period: "forever",
      description: "Perfect for small shops getting started with digital tracking.",
      features: [
        "Up to 500 inventory items",
        "Basic daily sales tracking",
        "Fully offline capable",
        "1 Business account"
      ],
      limitations: [
        "No advanced analytics",
        "No automated cloud backup"
      ],
      buttonText: "Start for Free",
      popular: false
    },
    {
      name: "Khatakitab Pro",
      price: "₹499",
      period: "per month",
      description: "Everything you need to grow and scale your operations.",
      features: [
        "Unlimited inventory items",
        "Advanced profit & loss reports",
        "Real-time cloud backup to Google Drive",
        "Unlimited business accounts",
        "Multi-staff login with permissions",
        "Priority 24/7 WhatsApp Support"
      ],
      limitations: [],
      buttonText: "Start 14-Day Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1,999",
      period: "per month",
      description: "For large retail networks requiring custom solutions.",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "Custom API integration",
        "Multi-branch consolidated reports",
        "Advanced role-based access control",
        "1-hour SLA Phone Support"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          centered
          pill="Simple Pricing"
          title="Plans that Grow With You"
          subtitle="No hidden fees. No complicated tiers. Choose the plan that best fits your business needs."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={cn(
                "relative p-8 rounded-[2rem] bg-white border flex flex-col z-10 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-premium hover:-translate-y-1",
                plan.popular ? "border-primary shadow-lg" : "border-borderLight"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              {plan.popular && (
                <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-end gap-2">
                <span className="text-5xl font-extrabold text-navy tracking-tight">{plan.price}</span>
                <span className="text-slate-500 font-medium mb-1">/{plan.period}</span>
              </div>
              
              <div className="flex-1 space-y-6 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <ul className="space-y-3 pt-6 border-t border-slate-100">
                    {plan.limitations.map((limitation, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X size={12} strokeWidth={3} />
                        </div>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <Button 
                variant={plan.popular ? "primary" : "outline"} 
                className={cn("w-full py-6 rounded-xl", plan.popular ? "shadow-lg shadow-primary/25" : "")}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
