"use client";

type Banner = {
  title: string;
  subtitle: string;
  description: string;
};

export default function Banner({ title, subtitle, description }: Banner) {
  return (
    <section className="relative overflow-hidden bg-amber-50 py-20">
      <div className="mx-auto px-4 sm:px-12 lg:px-24 relative">
        {/* Paper card */}
        <div
          className="
            relative rounded-xl border border-zinc-200 
            shadow-2xl bg-white/95 
            pl-24 pr-10 py-10
          "
          /* Ruled note effect: horizontal lines + red margin */
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 31px,
                rgba(0,0,0,0.06) 31px,
                rgba(0,0,0,0.06) 32px
              ),
              linear-gradient(
  to right,
  rgba(249, 115, 22, 0.5) 72px,
  transparent 72px
)
            `,
            backgroundSize: "100% 32px, 100% 100%",
            backgroundPosition: "0 22px, 0 0",
          }}
        >
          {/* Left perforation strip (properly aligned holes via mask) */}
          <span
            className="pointer-events-none absolute inset-y-4 -left-3 w-10 rounded-l-lg"
            style={{
              background: "#FEF3C7" /* amber-50 to match section */,
              /* Curl shadow on the edge of the strip for depth */
              boxShadow: "inset -10px 0 12px rgba(0,0,0,0.06)",
              /* Circular holes punched out using a repeating mask */
              // Chrome/Edge/Firefox
              maskImage:
                "radial-gradient(circle 7px at 50% 16px, transparent 98%, black 100%)",
              maskRepeat: "repeat-y",
              maskSize: "100% 56px",
              // Safari/WebKit
              WebkitMaskImage:
                "radial-gradient(circle 7px at 50% 16px, transparent 98%, black 100%)",
              WebkitMaskRepeat: "repeat-y",
              WebkitMaskSize: "100% 56px",
            }}
          />

          {/* Rolled right edge (curl highlight) */}
          <span className="pointer-events-none absolute inset-y-0 right-0 w-[14px] rounded-r-xl bg-gradient-to-l from-zinc-300/45 to-transparent" />

          {/* Big paw */}
          <span className="absolute top-4 right-4 text-7xl leading-none text-amber-500/90 select-none">
            🐾
          </span>

          {/* Content */}
          <p className="text-sm uppercase tracking-widest text-brandOrange ">
            {title}
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 ">
            {subtitle}
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-700 ">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
