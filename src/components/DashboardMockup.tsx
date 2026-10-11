import { motion } from "motion/react";
import { LayoutDashboard, Receipt, Package, FileText, Settings, ArrowUpRight, ArrowDownRight, Search, Bell, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative rounded-[1.5rem] md:rounded-[2rem] border-[8px] md:border-[12px] border-navy bg-white shadow-premium overflow-hidden w-full aspect-[4/3] md:aspect-[16/10] flex", className)}>
      {/* Sidebar */}
      <div className="w-[220px] bg-slate-50/50 border-r border-borderLight flex flex-col hidden sm:flex">
        <div className="p-5 flex items-center gap-3 border-b border-borderLight bg-white">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-sm shadow-sm">
            K
          </div>
          <span className="font-bold text-base text-navy tracking-tight">Khatakitab</span>
        </div>
        <div className="flex-1 py-6 px-4 space-y-1.5 flex flex-col">
          <div className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 border-l-2 border-primary text-primary rounded-r-lg text-sm font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            <LayoutDashboard size={18} />
            Dashboard
          </div>
          {[
            { icon: Receipt, label: "Sales" },
            { icon: Package, label: "Purchases" },
            { icon: Package, label: "Inventory" },
            { icon: FileText, label: "Reports" },
            { icon: Settings, label: "Settings" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-white hover:shadow-sm hover:text-navy rounded-lg text-sm font-medium transition-all cursor-pointer">
              <item.icon size={18} className="opacity-70" />
              {item.label}
            </div>
          ))}
          
          <div className="mt-auto pt-6">
            <div className="bg-gradient-to-br from-pale to-white border border-primary/10 rounded-xl p-4 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
              <Sparkles size={16} className="text-primary mb-2" />
              <h4 className="text-xs font-bold text-navy mb-1">Upgrade to Pro</h4>
              <p className="text-[10px] text-slate-500 leading-tight mb-3">Get advanced inventory alerts and API access.</p>
              <button className="w-full py-1.5 bg-white border border-borderLight shadow-sm rounded-lg text-xs font-semibold text-primary hover:bg-slate-50 transition-colors">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFC]">
        {/* Header */}
        <div className="h-16 border-b border-borderLight flex items-center justify-between px-6 bg-white z-10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-6">
            <h2 className="font-bold text-navy text-lg hidden md:block">Overview</h2>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-borderLight rounded-lg w-64 text-slate focus-within:border-primary/30 focus-within:bg-white transition-colors">
              <Search size={14} className="text-slate-400" />
              <span className="text-xs text-slate-400">Search transactions, products...</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <div className="px-3 py-1.5 text-xs text-navy font-semibold bg-white rounded-lg border border-borderLight shadow-sm hidden sm:flex items-center gap-2 cursor-pointer hover:bg-slate-50">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              Oct 1 - Oct 31, 2026
            </div>
            <div className="flex items-center gap-2 sm:gap-3 border-l border-borderLight pl-3 sm:pl-5">
              <button className="w-8 h-8 rounded-full border border-borderLight flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-navy transition-colors relative bg-white">
                <Bell size={15} />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent shadow-sm border-2 border-white cursor-pointer transform hover:scale-105 transition-transform"></div>
            </div>
          </div>
        </div>
        
        {/* Scrollable Area */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto space-y-6 lg:space-y-8 no-scrollbar relative">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {[
              { label: "Total Income", value: "₹ 1,32,480", trend: "+12.5%", up: true, icon: ArrowUpRight },
              { label: "Total Expenses", value: "₹ 68,230", trend: "-5.2%", up: false, icon: ArrowDownRight },
              { label: "Net Profit", value: "₹ 64,250", trend: "+18.4%", up: true, highlight: true, icon: ArrowUpRight },
            ].map((stat, i) => (
              <div key={i} className={cn("p-5 rounded-2xl border shadow-sm relative overflow-hidden group", stat.highlight ? "bg-gradient-to-br from-white to-pale border-primary/20" : "bg-white border-borderLight")}>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-xs font-medium text-slate-500">{stat.label}</div>
                  <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", stat.highlight ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500")}>
                    <stat.icon size={12} strokeWidth={3} />
                  </div>
                </div>
                <div className={cn("text-2xl lg:text-3xl font-extrabold mb-1 tracking-tight", stat.highlight ? "text-primary" : "text-navy")}>{stat.value}</div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs mt-3">
                  <span className={cn("font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5", stat.up ? "bg-success/10 text-success" : "bg-red-500/10 text-red-600")}>
                    {stat.trend}
                  </span>
                  <span className="text-slate-400 font-medium">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-white border border-borderLight rounded-2xl p-5 sm:p-6 h-[240px] flex flex-col shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 z-10">
              <h3 className="text-sm font-bold text-navy">Cash Flow Overview</h3>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-borderLight/50">
                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-primary shadow-sm"></div>Income</div>
                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-accent shadow-sm"></div>Expenses</div>
              </div>
            </div>
            
            <div className="flex-1 flex items-end justify-between gap-1.5 sm:gap-3 pl-8 pr-2 relative z-10">
              {/* Horizontal Gridlines & Y-Axis */}
              <div className="absolute left-0 top-0 bottom-6 w-full flex flex-col justify-between text-[10px] text-slate-400 font-medium -z-10">
                <div className="w-full border-b border-dashed border-borderLight flex-1 relative"><span className="absolute -top-2.5 -left-8">100k</span></div>
                <div className="w-full border-b border-dashed border-borderLight flex-1 relative"><span className="absolute -top-2.5 -left-8">50k</span></div>
                <div className="w-full border-b-2 border-slate-100 flex-1 relative"><span className="absolute bottom-[-10px] -left-8">0</span></div>
              </div>
              
              {/* Bars */}
              {Array.from({ length: 14 }).map((_, i) => {
                const incomeH = 30 + Math.random() * 60;
                const expH = 15 + Math.random() * 40;
                return (
                  <div key={i} className="relative z-10 w-full max-w-[14px] sm:max-w-[20px] h-[calc(100%-24px)] flex items-end justify-center gap-[2px] group cursor-pointer">
                    {/* Tooltip mock */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-navy text-white text-[9px] py-1 px-2 rounded whitespace-nowrap pointer-events-none z-50 shadow-lg">
                      Oct {i + 1}
                    </div>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${incomeH}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.03 }}
                      className="w-1/2 bg-gradient-to-t from-primary/80 to-primary rounded-t-sm shadow-sm relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${expH}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.03 + 0.1 }}
                      className="w-1/2 bg-gradient-to-t from-accent/80 to-accent rounded-t-sm shadow-sm relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
            
            {/* X-Axis */}
            <div className="flex justify-between pl-8 pr-4 mt-3 text-[10px] font-medium text-slate-400 z-10">
              <span>Oct 1</span><span>Oct 5</span><span>Oct 10</span><span>Oct 15</span><span>Oct 20</span><span>Oct 25</span>
            </div>
          </div>

          {/* Table */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-white border border-borderLight rounded-2xl shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 sm:p-5 border-b border-borderLight flex items-center justify-between">
                <h3 className="text-sm font-bold text-navy">Trending Products</h3>
                <button className="text-xs font-semibold text-primary hover:text-navy transition-colors">View Inventory</button>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left text-xs whitespace-nowrap">
                  <thead className="bg-slate-50/80 text-slate-500">
                    <tr>
                      <th className="font-semibold p-4">Product Name</th>
                      <th className="font-semibold p-4">Stock Status</th>
                      <th className="font-semibold p-4">Qty Sold</th>
                      <th className="font-semibold p-4 text-right">Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-borderLight">
                    {[
                      { name: "Premium Basmati Rice", variant: "25kg Bag", qty: "124", rev: "₹ 6,300", stock: "In Stock", stockColor: "text-success bg-success/10", icon: "🌾" },
                      { name: "Refined Sugar", variant: "1kg Packet", qty: "89", rev: "₹ 4,800", stock: "Low Stock", stockColor: "text-orange-600 bg-orange-100", icon: "🧊" },
                      { name: "Sunflower Oil", variant: "5L Can", qty: "65", rev: "₹ 4,200", stock: "In Stock", stockColor: "text-success bg-success/10", icon: "🛢️" },
                      { name: "Wheat Flour", variant: "10kg Bag", qty: "42", rev: "₹ 2,100", stock: "Out of Stock", stockColor: "text-red-600 bg-red-100", icon: "🌾" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="p-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm group-hover:scale-110 transition-transform shadow-sm border border-slate-200">
                            {row.icon}
                          </div>
                          <div>
                            <div className="font-bold text-navy">{row.name}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{row.variant}</div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={cn("px-2 py-1 rounded-md text-[10px] font-bold border border-white/50", row.stockColor)}>
                            {row.stock}
                          </span>
                        </td>
                        <td className="p-4 text-slate-600 font-medium">{row.qty}</td>
                        <td className="p-4 text-navy font-bold text-right">{row.rev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Right side panel inside Dashboard */}
            <div className="bg-gradient-to-b from-navy to-[#0F172A] rounded-2xl shadow-premium p-6 text-white flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              
              <h3 className="text-sm font-bold text-white/90 mb-6 relative z-10">Quick Actions</h3>
              <div className="space-y-3 relative z-10">
                <button className="w-full p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-semibold flex items-center gap-3 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center"><Receipt size={12} /></div>
                  Create Invoice
                </button>
                <button className="w-full p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-semibold flex items-center gap-3 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center"><Package size={12} /></div>
                  Add Inventory
                </button>
                <button className="w-full p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-semibold flex items-center gap-3 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center"><FileText size={12} /></div>
                  Generate Report
                </button>
              </div>
              <div className="mt-auto pt-6 relative z-10">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <div className="text-[10px] text-white/50 mb-1 font-medium">Monthly Goal</div>
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-sm font-bold">₹ 1.5 Lakh</span>
                    <span className="text-[10px] text-success font-bold">88%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-success rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
