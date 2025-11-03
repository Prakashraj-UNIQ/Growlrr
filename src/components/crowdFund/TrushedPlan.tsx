import { ShieldCheck, BadgeCheck, Sparkles, Lock, Award, Check } from "lucide-react";

type Props = {
  title: string;
  price: string;
  points: string[];
  badge?: string;            // e.g. "Most Popular"
  note?: string;             // e.g. "Limited • 500 backers"
};

export default function TrustedPlanCard({ title, price, points, badge, note }: Props) {
  return (
    <article className="group relative flex flex-col rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg ">
      {/* trust header strip */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-500 via-amber-500 to-sky-500" />
      {badge && (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 ">
          <Sparkles className="h-3.5 w-3.5" /> {badge}
        </span>
      )}

      {/* title + price */}
      <div className="mt-2 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-emerald-600 " />
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      </div>
      <p className="mt-1 text-sm text-zinc-500 ">{price}</p>

      {/* perks */}
      <ul className="mt-4 space-y-2 text-sm text-zinc-700 ">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-emerald-600 " />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      {/* trust band */}
      <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-zinc-200 p-3 text-[11px] text-zinc-600 ">
        <div className="flex items-center gap-1.5">
          <BadgeCheck className="h-4 w-4 text-emerald-600 " />
          Verified Perks
        </div>
        <div className="flex items-center gap-1.5">
          <Lock className="h-4 w-4 text-amber-600 " />
          Secure UPI/Stripe
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="h-4 w-4 text-sky-600 " />
          14-day Support
        </div>
      </div>

      {/* footer */}
      {note && <p className="mt-3 text-xs text-zinc-500">{note}</p>}

      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
          Select Tier
        </button>
        <button className="rounded-xl border border-zinc-300 px-3 py-2 text-sm transition hover:bg-zinc-100 ">
          Details
        </button>
      </div>

      {/* micro-credibility */}
      <p className="mt-3 text-[11px] text-zinc-500">
        Trusted by <span className="font-medium text-zinc-700 ">500+ pet parents</span> • AAFCO/FEDIAF aligned
      </p>
    </article>
  );
}
