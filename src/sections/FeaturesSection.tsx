import { SectionHeading } from "../components/SectionHeading";
import { FeatureCard } from "../components/FeatureCard";
import { BarChart3, Package, FilePieChart, WifiOff, Cloud, Store } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 size={28} strokeWidth={2.5} />,
      title: "Income & Expense Tracking",
      description: "Keep a clear record of your daily income, expenses and overall profit.",
      iconBgClass: "bg-emerald-100",
      iconTextClass: "text-emerald-600",
      iconShadowClass: "shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
    },
    {
      icon: <Package size={28} strokeWidth={2.5} />,
      title: "Inventory Management",
      description: "Track stock, get low stock alerts and never run out of essentials.",
      iconBgClass: "bg-purple-100",
      iconTextClass: "text-purple-600",
      iconShadowClass: "shadow-[0_4px_20px_rgba(168,85,247,0.3)]"
    },
    {
      icon: <FilePieChart size={28} strokeWidth={2.5} />,
      title: "Reports & Insights",
      description: "View simple and clear reports to make better business decisions.",
      iconBgClass: "bg-blue-100",
      iconTextClass: "text-blue-600",
      iconShadowClass: "shadow-[0_4px_20px_rgba(59,130,246,0.3)]"
    },
    {
      icon: <WifiOff size={28} strokeWidth={2.5} />,
      title: "Offline First",
      description: "Work without internet and sync when you're back online.",
      iconBgClass: "bg-orange-100",
      iconTextClass: "text-orange-600",
      iconShadowClass: "shadow-[0_4px_20px_rgba(249,115,22,0.3)]"
    },
    {
      icon: <Cloud size={28} strokeWidth={2.5} />,
      title: "Secure Backup",
      description: "Backup your data to email or Google Drive and never lose it.",
      iconBgClass: "bg-rose-100",
      iconTextClass: "text-rose-600",
      iconShadowClass: "shadow-[0_4px_20px_rgba(244,63,94,0.3)]"
    },
    {
      icon: <Store size={28} strokeWidth={2.5} />,
      title: "Multi-Business Support",
      description: "Manage multiple shops or business types from one app.",
      iconBgClass: "bg-indigo-100",
      iconTextClass: "text-indigo-600",
      iconShadowClass: "shadow-[0_4px_20px_rgba(99,102,241,0.3)]"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          centered
          pill="Everything You Need"
          title="Powerful Features for Your Business"
          subtitle="From daily transactions to detailed reports — Khatakitab gives you the tools to run your business better, faster and smarter."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              index={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgClass={feature.iconBgClass}
              iconTextClass={feature.iconTextClass}
              iconShadowClass={feature.iconShadowClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
