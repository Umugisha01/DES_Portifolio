import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { toast } from "sonner";

type Product = { id: string; name: string; price: number; cat: string; img: string };

const products: Product[] = [
  { id: "1", name: "DES Studios Hoodie", price: 65, cat: "Apparel", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" },
  { id: "2", name: "Cinematic LUT Pack", price: 49, cat: "Digital", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80" },
  { id: "3", name: "Studio Logo Tee", price: 32, cat: "Apparel", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { id: "4", name: "Mixing Sample Bundle", price: 89, cat: "Digital", img: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&q=80" },
  { id: "5", name: "Sound Design Plugin", price: 129, cat: "Plugins", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80" },
  { id: "6", name: "Creator Cap", price: 28, cat: "Apparel", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
  { id: "7", name: "Vocal Preset Pack", price: 39, cat: "Plugins", img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80" },
  { id: "8", name: "Director's Notebook", price: 22, cat: "Apparel", img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80" },
];

const cats = ["All", "Apparel", "Digital", "Plugins"];

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const list = filter === "All" ? products : products.filter((p) => p.cat === filter);
  const cartItems = useMemo(() => Object.entries(cart).map(([id, qty]) => ({ ...products.find((p) => p.id === id)!, qty })), [cart]);
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cartItems.reduce((s, i) => s + i.qty, 0);

  const add = (id: string) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    toast.success("Added to cart");
  };
  const change = (id: string, d: number) => {
    setCart((c) => {
      const next = { ...c, [id]: (c[id] || 0) + d };
      if (next[id] <= 0) delete next[id];
      return next;
    });
  };
  const remove = (id: string) => setCart((c) => { const n = { ...c }; delete n[id]; return n; });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-tight">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Studio Shop</p>
              <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.05]">
                Merch & <span className="text-gradient-gold">Tools</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-colors ${
                    filter === c ? "bg-gold text-ink border-gold" : "border-border text-muted-foreground hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
              <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                <ShoppingBag /> Cart {count > 0 && `(${count})`}
              </Button>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {list.map((p, i) => (
              <div key={p.id} className="reveal group hover-lift" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="aspect-square overflow-hidden bg-ink-soft">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="bg-ink-soft p-5 border-t border-border">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">{p.cat}</p>
                  <h3 className="font-display font-bold text-base">{p.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-display text-xl text-gold">${p.price}</span>
                    <Button size="sm" variant="outline" onClick={() => add(p.id)}>Add</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="flex-1 bg-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="w-full max-w-md bg-ink-soft border-l border-border flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-display font-extrabold text-xl uppercase">Your Cart</h3>
              <button onClick={() => setOpen(false)} className="h-9 w-9 grid place-items-center hover:bg-ink"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 && <p className="text-sm text-muted-foreground">Your cart is empty.</p>}
              {cartItems.map((i) => (
                <div key={i.id} className="flex gap-4 border border-border p-3">
                  <img src={i.img} alt={i.name} className="h-20 w-20 object-cover" />
                  <div className="flex-1">
                    <p className="font-display font-bold text-sm">{i.name}</p>
                    <p className="text-gold text-sm">${i.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => change(i.id, -1)} className="h-7 w-7 grid place-items-center border border-border hover:border-gold"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm w-6 text-center">{i.qty}</span>
                      <button onClick={() => change(i.id, 1)} className="h-7 w-7 grid place-items-center border border-border hover:border-gold"><Plus className="h-3 w-3" /></button>
                      <button onClick={() => remove(i.id)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between font-display">
                <span className="uppercase tracking-wider text-sm">Total</span>
                <span className="text-2xl text-gold">${total.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-muted-foreground tracking-wider uppercase">Pay with M-Pesa · Airtel · Card</p>
              <Button variant="gold" className="w-full" disabled={cartItems.length === 0} onClick={() => toast.success("Checkout coming soon")}>
                Checkout
              </Button>
            </div>
          </aside>
        </div>
      )}
    </Layout>
  );
};

export default Shop;
