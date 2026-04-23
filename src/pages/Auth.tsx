import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-tight max-w-md">
          <div className="reveal text-center">
            <p className="eyebrow">Members</p>
            <h1 className="mt-4 font-display font-extrabold text-4xl md:text-5xl uppercase">{mode === "signin" ? "Sign In" : "Create Account"}</h1>
          </div>

          <div className="mt-10 bg-ink-soft border border-border p-8">
            <div className="grid grid-cols-2 mb-8 border border-border">
              <button onClick={() => setMode("signin")} className={`py-2 text-xs uppercase tracking-wider ${mode === "signin" ? "bg-gold text-ink" : "text-muted-foreground"}`}>Sign In</button>
              <button onClick={() => setMode("signup")} className={`py-2 text-xs uppercase tracking-wider ${mode === "signup" ? "bg-gold text-ink" : "text-muted-foreground"}`}>Sign Up</button>
            </div>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); toast.info("Connect Lovable Cloud to enable real auth"); }}>
              {mode === "signup" && (
                <Field label="Full Name"><input className="field" required /></Field>
              )}
              <Field label="Email"><input type="email" className="field" required /></Field>
              <Field label="Password"><input type="password" className="field" required /></Field>
              <Button variant="gold" className="w-full" type="submit">{mode === "signin" ? "Sign In" : "Create Account"}</Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-6">
              {mode === "signin" ? "Forgot your password? " : "Already have an account? "}
              <Link to="#" className="text-gold hover:underline">{mode === "signin" ? "Reset" : "Sign in"}</Link>
            </p>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">Admin? <Link to="/admin" className="text-gold hover:underline">Go to dashboard</Link></p>
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

export default Auth;
