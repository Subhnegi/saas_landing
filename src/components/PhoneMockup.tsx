import { ArrowUp, ArrowDown, CreditCard, Wallet, Store, Menu, MoreHorizontal, Home, BarChart2, Package } from "lucide-react";
import { cn } from "../lib/utils";

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative rounded-[2.5rem] border-[6px] border-navy bg-white shadow-premium overflow-hidden w-[260px] h-[520px] flex flex-col", className)}>
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
        <div className="w-24 h-4 bg-navy rounded-b-xl"></div>
      </div>
      
      {/* Status Bar */}
      <div className="h-10 pt-2 px-5 flex items-center justify-between text-[10px] font-medium text-navy bg-white z-10">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-navy/20"></div>
          <div className="w-3 h-3 rounded-full bg-navy/20"></div>
          <div className="w-4 h-3 rounded bg-navy"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-5 py-3 flex items-center justify-between border-b border-borderLight bg-white">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center font-bold text-[10px]">
            K
          </div>
          <span className="font-semibold text-sm text-navy">Khatakitab</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-navy">
          <Menu size={14} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4 no-scrollbar">
        <div>
          <h3 className="text-xs font-semibold text-slate mb-3">Today's Summary</h3>
          <div className="bg-white rounded-xl p-4 border border-borderLight shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[10px] text-slate mb-1">Total Sales</div>
                <div className="text-lg font-bold text-success">₹ 12,480</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center">
                <ArrowUp size={16} />
              </div>
            </div>
            <div className="h-px bg-borderLight w-full"></div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[10px] text-slate mb-1">Total Expenses</div>
                <div className="text-lg font-bold text-red-500">₹ 5,230</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
                <ArrowDown size={16} />
              </div>
            </div>
            <div className="h-px bg-borderLight w-full"></div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[10px] text-slate mb-1">Net Profit</div>
                <div className="text-lg font-bold text-primary">₹ 7,250</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-semibold text-slate">Recent Transactions</h3>
            <span className="text-[10px] text-primary font-medium">View All</span>
          </div>
          <div className="bg-white rounded-xl border border-borderLight shadow-sm overflow-hidden">
            {[
              { title: "Sales - Cash", subtitle: "Today, 10:24 AM", amt: "+ ₹ 2,500", icon: Wallet, up: true },
              { title: "Purchase - Supplier", subtitle: "Today, 09:12 AM", amt: "- ₹ 1,200", icon: Store, up: false },
              { title: "Expense - Electricity", subtitle: "Yesterday, 06:45 PM", amt: "- ₹ 800", icon: CreditCard, up: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 border-b border-borderLight last:border-0">
                <div className="flex items-center gap-3">
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", item.up ? "bg-success/10 text-success" : "bg-red-500/10 text-red-500")}>
                    <item.icon size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy">{item.title}</div>
                    <div className="text-[9px] text-slate">{item.subtitle}</div>
                  </div>
                </div>
                <div className={cn("text-xs font-bold", item.up ? "text-success" : "text-navy")}>
                  {item.amt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="h-14 bg-white border-t border-borderLight flex items-center justify-around px-2 z-10">
        {[
          { icon: Home, label: "Home", active: true },
          { icon: Package, label: "Inventory", active: false },
          { icon: BarChart2, label: "Reports", active: false },
          { icon: MoreHorizontal, label: "More", active: false },
        ].map((item, i) => (
          <div key={i} className={cn("flex flex-col items-center justify-center gap-1 w-12", item.active ? "text-primary" : "text-slate")}>
            <item.icon size={18} className={item.active ? "fill-primary/10" : ""} />
            <span className="text-[8px] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
