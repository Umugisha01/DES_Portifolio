import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const steps = ["Service", "Event Details", "Add-ons", "Contact", "Review"];

const services = ["Film & Video", "Music Production", "Live Event", "Photography", "Commercial", "Custom"];
const addons = ["Drone Coverage", "Live Streaming", "Color Grade", "Custom Score", "On-Site Lighting", "Editorial Photos"];

const Booking = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "",
    eventDate: "",
    location: "",
    duration: "",
    addons: [] as string[],
    name: "",
    email: "",
    phone: "",
    brief: "",
  });
  const [done, setDone] = useState<string | null>(null);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    if (!data.name || !data.email) {
      toast.error("Please fill in your name and email");
      return;
    }
    const ref = "DES-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setDone(ref);
    toast.success("Booking received");
  };

  if (done) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-tight max-w-2xl text-center">
            <div className="h-20 w-20 rounded-full bg-gold/15 border border-gold mx-auto grid place-items-center">
              <Check className="h-10 w-10 text-gold" />
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl uppercase mt-8">Brief <span className="text-gradient-gold">Received</span></h1>
            <p className="mt-4 text-muted-foreground">Our team will reach out within 24 hours to discuss next steps.</p>
            <div className="mt-8 inline-block border border-gold p-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Reference</p>
              <p className="font-display text-3xl text-gold mt-2">{done}</p>
            </div>
            <div className="mt-10">
              <Button variant="outline" onClick={() => { setDone(null); setStep(0); }}>Submit Another</Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <div className="reveal text-center">
            <p className="eyebrow">Let's Work Together</p>
            <h1 className="mt-4 font-display font-extrabold text-4xl md:text-5xl uppercase">Start A <span className="text-gradient-gold">Project</span></h1>
          </div>

          {/* Stepper */}
          <div className="mt-12 flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`h-9 w-9 rounded-full grid place-items-center text-xs font-bold border-2 transition-colors ${i <= step ? "bg-gold text-ink border-gold" : "border-border text-muted-foreground"}`}>
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-gold" : "bg-border"}`} />}
              </div>
            ))}
          </div>
          <p className="text-center mt-3 text-xs tracking-[0.2em] uppercase text-gold">{steps[step]}</p>

          <div className="mt-10 bg-ink-soft border border-border p-6 md:p-10 space-y-6">
            {step === 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => setData({ ...data, service: s })}
                    className={`p-5 border text-left transition-colors ${data.service === s ? "border-gold bg-ink" : "border-border hover:border-gold/60"}`}
                  >
                    <p className="font-display font-bold">{s}</p>
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-5">
                <Field label="Event Date">
                  <input type="date" value={data.eventDate} onChange={(e) => setData({ ...data, eventDate: e.target.value })} className="field" />
                </Field>
                <Field label="Location">
                  <input value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} placeholder="City, venue, or address" className="field" />
                </Field>
                <Field label="Duration">
                  <select value={data.duration} onChange={(e) => setData({ ...data, duration: e.target.value })} className="field">
                    <option value="">Select duration</option>
                    <option>Half day</option>
                    <option>Full day</option>
                    <option>2-3 days</option>
                    <option>1 week+</option>
                  </select>
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {addons.map((a) => {
                  const on = data.addons.includes(a);
                  return (
                    <button
                      key={a}
                      onClick={() => setData({ ...data, addons: on ? data.addons.filter((x) => x !== a) : [...data.addons, a] })}
                      className={`p-4 border text-left flex items-center gap-3 transition-colors ${on ? "border-gold bg-ink" : "border-border hover:border-gold/60"}`}
                    >
                      <div className={`h-5 w-5 border ${on ? "bg-gold border-gold" : "border-border"} grid place-items-center`}>
                        {on && <Check className="h-3 w-3 text-ink" />}
                      </div>
                      <span className="text-sm">{a}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-5">
                <Field label="Full Name *"><input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="field" /></Field>
                <Field label="Email *"><input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="field" /></Field>
                <Field label="Phone"><input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className="field" /></Field>
                <Field label="Project Brief">
                  <textarea value={data.brief} onChange={(e) => setData({ ...data, brief: e.target.value })} rows={5} className="field" placeholder="Tell us about your vision, timeline, and budget..." />
                </Field>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 text-sm">
                <Row label="Service" value={data.service || "—"} />
                <Row label="Date" value={data.eventDate || "—"} />
                <Row label="Location" value={data.location || "—"} />
                <Row label="Duration" value={data.duration || "—"} />
                <Row label="Add-ons" value={data.addons.join(", ") || "None"} />
                <Row label="Name" value={data.name || "—"} />
                <Row label="Email" value={data.email || "—"} />
                <Row label="Phone" value={data.phone || "—"} />
              </div>
            )}

            <div className="flex justify-between pt-4 border-t border-border">
              <Button variant="ghost" onClick={back} disabled={step === 0}><ArrowLeft /> Back</Button>
              {step < steps.length - 1 ? (
                <Button variant="gold" onClick={next}>Next <ArrowRight /></Button>
              ) : (
                <Button variant="gold" onClick={submit}>Send Brief <ArrowRight /></Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .field { width: 100%; background: hsl(var(--ink)); border: 1px solid hsl(var(--border)); padding: 0.75rem 1rem; color: hsl(var(--foreground)); outline: none; transition: border-color 0.2s; }
        .field:focus { border-color: hsl(var(--gold)); }
      `}</style>
    </Layout>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-[11px] tracking-[0.2em] uppercase text-gold">{label}</span>
    <div className="mt-2">{children}</div>
  </label>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between border-b border-border/60 py-3">
    <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{label}</span>
    <span className="font-medium text-right">{value}</span>
  </div>
);

export default Booking;
