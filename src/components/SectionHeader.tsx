interface Props {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
  description?: string;
}

export const SectionHeader = ({ eyebrow, title, accent, align = "center", description }: Props) => (
  <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.05] text-white">
      {title} {accent && <span className="text-gradient-red">{accent}</span>}
    </h2>
    {align === "center" && (
      <div className="ornament-divider">
        <span className="h-1.5 w-1.5 rotate-45 bg-red" />
      </div>
    )}
    {description && <p className="mt-4 text-white/50 leading-relaxed text-sm">{description}</p>}
  </div>
);
