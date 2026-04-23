import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TrendingUp, ShoppingBag, Calendar, Users, MoreHorizontal } from "lucide-react";

const tabs = ["Overview", "Bookings", "Portfolio", "Products", "Orders", "Users"] as const;

const stats = [
  { icon: TrendingUp, label: "Revenue", value: "$248,320", delta: "+12.4%" },
  { icon: ShoppingBag, label: "Orders", value: "1,284", delta: "+8.1%" },
  { icon: Calendar, label: "Bookings", value: "37", delta: "+22%" },
  { icon: Users, label: "Inquiries", value: "94", delta: "+4.7%" },
];

const recent = [
  { ref: "DES-A4F2K1", client: "Tola Afolabi", service: "Music Production", status: "Confirmed", value: "$8,500" },
  { ref: "DES-9LZ20W", client: "MTN Nigeria", service: "Live Event", status: "In Production", value: "$24,000" },
  { ref: "DES-K7P3HQ", client: "Zenith Bank", service: "Commercial", status: "Review", value: "$15,750" },
  { ref: "DES-V2NM5X", client: "Adaeze Obi", service: "Photography", status: "Confirmed", value: "$3,200" },
  { ref: "DES-EX9C8Y", client: "LMF Productions", service: "Live Event", status: "Pending", value: "$42,000" },
];

const Admin = () => {
  const [tab, setTab] = useState<typeof tabs[number]>("Overview");

  return (
    <Layout>
      <section className="py-16">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
            <div>
              <p className="eyebrow">Internal</p>
              <h1 className="mt-3 font-display font-extrabold text-3xl md:text-5xl uppercase">Admin <span className="text-gradient-gold">Dashboard</span></h1>
            </div>
            <Button variant="outline" size="sm">Export Report</Button>
          </div>

          {/* Tabs */}
          <div className="mt-10 border-b border-border flex gap-1 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.15em] whitespace-nowrap border-b-2 transition-colors ${
                  tab === t ? "border-gold text-gold" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "Overview" && (
            <>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                {stats.map(({ icon: Icon, label, value, delta }) => (
                  <div key={label} className="bg-ink-soft p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 grid place-items-center bg-ink border border-border"><Icon className="h-4 w-4 text-gold" /></div>
                      <span className="text-xs text-gold">{delta}</span>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                    <p className="font-display text-3xl font-extrabold mt-1">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-ink-soft border border-border">
                <div className="p-5 border-b border-border flex items-center justify-between">
                  <h3 className="font-display font-bold uppercase">Recent Bookings</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        <th className="px-5 py-3 font-medium">Reference</th>
                        <th className="px-5 py-3 font-medium">Client</th>
                        <th className="px-5 py-3 font-medium">Service</th>
                        <th className="px-5 py-3 font-medium">Status</th>
                        <th className="px-5 py-3 font-medium text-right">Value</th>
                        <th className="px-5 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recent.map((r) => (
                        <tr key={r.ref} className="border-t border-border hover:bg-ink/50">
                          <td className="px-5 py-4 font-mono text-xs text-gold">{r.ref}</td>
                          <td className="px-5 py-4">{r.client}</td>
                          <td className="px-5 py-4 text-muted-foreground">{r.service}</td>
                          <td className="px-5 py-4">
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-1 border ${r.status === "Confirmed" ? "border-gold text-gold" : r.status === "Pending" ? "border-muted-foreground text-muted-foreground" : "border-foreground/40"}`}>{r.status}</span>
                          </td>
                          <td className="px-5 py-4 text-right font-display">{r.value}</td>
                          <td className="px-5 py-4 text-right"><button className="text-muted-foreground hover:text-gold"><MoreHorizontal className="h-4 w-4" /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {tab !== "Overview" && (
            <div className="mt-10 bg-ink-soft border border-border p-12 text-center">
              <h3 className="font-display font-bold text-2xl uppercase">{tab}</h3>
              <p className="text-muted-foreground mt-3">Connect Lovable Cloud to manage {tab.toLowerCase()} with live data.</p>
              <Button variant="outline" className="mt-6">Enable Backend</Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
