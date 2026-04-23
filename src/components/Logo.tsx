export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`group inline-flex items-center gap-4 ${className}`} aria-label="DES Studios home">
    <div className="relative h-16 w-16 overflow-hidden rounded-3xl bg-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <img
        src="/logo.png"
        alt="DES Studios logo"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
    <div className="flex flex-col leading-tight">
      <span className="font-display text-sm font-extrabold uppercase tracking-[0.3em] text-white">
        DES
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-red">
        STUDIOS
      </span>
    </div>
  </div>
);
