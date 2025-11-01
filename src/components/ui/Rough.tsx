"use client";

import { useMemo, useState } from "react";
import { ShieldCheck, BadgeCheck, Lock, Award } from "lucide-react";
import Faq from "./Faq";

/* ------------------------------- Types ---------------------------------- */

type Tier = {
  id: string;
  label: string;
  priceLabel: string; // "₹ 499 – 999" or "₹ 10,000"
  priceMin: number;
  priceMax?: number;
  badge?: string;
  reward: string[];
  recognition?: string[];
  merch?: string[];
  logistics?: string[];
  note?: string;
  limit?: string;
};

type TierGroup = "Public" | "Shelter" | "Patron";

/* ----------------------------- Tier Data -------------------------------- */

const PUBLIC_TIERS: Tier[] = [
  {
    id: "early-bowl",
    label: "Early Bowl",
    priceLabel: "₹ 499 – 999",
    priceMin: 499,
    priceMax: 999,
    badge: "Limited • First 500",
    reward: ["5-pack rotation sampler (use as topper)"],
    recognition: ["Name on Early Supporter digital wall"],
    merch: ["Growlrr collar for your pet"],
    note: "Perfect for first-time tasters",
    limit: "500 backers",
  },
  {
    id: "full-belly",
    label: "Full Belly",
    priceLabel: "₹ 2,000 – 4,000",
    priceMin: 2000,
    priceMax: 4000,
    reward: [
      "Two full-size 7-day rotation boxes (CatCore / DogCore)",
      "Printed diet chart",
      "Early access to AI Chatbot",
    ],
    recognition: ["Supporter certificate (physical + digital)"],
    merch: ["Growlrr bowl for your pet angel"],
    logistics: ["Ships in early-bird batch"],
  },
  {
    id: "pack-leader",
    label: "Pack Leader",
    priceLabel: "₹ 5,000 – 9,000",
    priceMin: 5000,
    priceMax: 9000,
    reward: [
      "Four rotation boxes",
      "Early-access vet support via WhatsApp",
    ],
    recognition: ["Listed under Lead Supporters"],
    merch: ['Limited "Feed the Revolution" T-shirt'],
    note: "Ideal for repeat buyers & testers",
  },
];

const SHELTER_TIERS: Tier[] = [
  {
    id: "sanctuary-partner",
    label: "Sanctuary Partner",
    priceLabel: "₹ 10,000 – 25,000",
    priceMin: 10000,
    priceMax: 25000,
    reward: [
      "20 kg equivalent donation (mix CatCore / DogCore) to chosen shelter",
    ],
    recognition: ['Donor name/logo on "Growlrr Cares" shelter page'],
    merch: ["Growlrr mug + crew T-shirt"],
    logistics: ["Appears in monthly impact newsletter"],
  },
  {
    id: "founding-shelter",
    label: "Founding Shelter / Institutional",
    priceLabel: "₹ 25,000 – 75,000",
    priceMin: 25000,
    priceMax: 75000,
    reward: ["Bulk rotation supply for 1–3 months"],
    recognition: [
      "“Founding Shelter” badge",
      "Pet-photo feature in Shelter Gallery",
    ],
    merch: ["Institutional banner + thank-you plaque"],
    logistics: ["Scheduled delivery + donation certificate"],
  },
];

const PATRON_TIERS: Tier[] = [
  {
    id: "founding-circle",
    label: "Founding Circle",
    priceLabel: "₹ 50,000+",
    priceMin: 50000,
    reward: [
      "One co-branded batch run",
      "Lifetime Founding Circle badge & early-access status",
    ],
    recognition: ["Permanent listing on Founding Circle page"],
    merch: ["Personalized thank-you frame + Growlrr hoodie"],
    note: "For early investors or major testers",
  },
  {
    id: "labs-patron",
    label: "Growlrr Labs Patron",
    priceLabel: "₹ 1L+",
    priceMin: 100000,
    reward: [
      "Prototype tasting access",
      "Name credited on limited test batch",
    ],
    merch: ["Personalized lab coat + engraved spatula"],
    note: "Capped at 10 patrons per year",
    limit: "10/year",
  },
  {
    id: "chaos-tier",
    label: "Chaos Tier (Angel)",
    priceLabel: "₹ 10L (Invite-only)",
    priceMin: 1000000,
    reward: ["Founding Angel tier with equity/stock options"],
    recognition: [
      "Lifetime feature on Founders Wall",
      "Founder Roundtable invites",
    ],
    merch: ["Custom Founder Jacket + “Chaos Tier” collectible"],
    note: "Invite-only • Strategic partners",
  },
];

/* -------------------------- Helper Components --------------------------- */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-sm font-medium text-amber-700 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span aria-hidden>✔</span>
      <span>{children}</span>
    </li>
  );
}

/* ----------------------------- Page ------------------------------------- */

export default function CrowdFundPage() {
  const [tab, setTab] = useState<TierGroup>("Public");
  const [selected, setSelected] = useState<string[]>([]);


  const groups: Record<TierGroup, Tier[]> = {
    Public: PUBLIC_TIERS,
    Shelter: SHELTER_TIERS,
    Patron: PATRON_TIERS,
  };

  const tiers = useMemo(() => groups[tab], [tab]);

  const selectedTiers = useMemo(() => {
    const all = [...PUBLIC_TIERS, ...SHELTER_TIERS, ...PATRON_TIERS];
    return all.filter((t) => selected.includes(t.id));
  }, [selected]);

  const totalMin = selectedTiers.reduce((sum, t) => sum + t.priceMin, 0);

  const toggleSelect = (id: string) =>
    setSelected((curr) =>
      curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]
    );

  return (
    <main className="min-h-dvh bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">


      {/* Tier Grid */}
      <section className="mx-auto px-4 sm:px-12 lg:px-25 py-10 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isSelected = selected.includes(tier.id);
            return (
              <article
                key={tier.id}
                className={[
                  "group relative flex flex-col rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg",
                  "dark:border-zinc-800 dark:bg-zinc-900/80",
                  isSelected
                    ? "border-amber-500 ring-2 ring-amber-300 dark:ring-amber-700/60"
                    : "border-zinc-200",
                ].join(" ")}
              >
                {/* trust strip */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-500 via-amber-500 to-sky-500" />

                {tier.badge && (
                  <div className="absolute right-3 top-3">
                    <Badge>{tier.badge}</Badge>
                  </div>
                )}

                {/* header */}
                <div className="mt-2 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-lg font-semibold">{tier.label}</h3>
                </div>
                <p className="mt-1 sm:text-base text-sm text-zinc-500">{tier.priceLabel}</p>

                {/* Rewards */}
                <div className="mt-4 space-y-2 sm:text-base text-sm">
                  <p className="font-bold text-zinc-800 dark:text-zinc-200">Rewards</p>
                  <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                    {tier.reward.map((r, i) => (
                      <CheckItem key={i}>{r}</CheckItem>
                    ))}
                  </ul>
                </div>

                {tier.recognition && (
                  <div className="mt-4 space-y-2 sm:text-base text-sm">
                    <p className="font-bold text-zinc-800 dark:text-zinc-200">Recognition</p>
                    <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                      {tier.recognition.map((r, i) => (
                        <CheckItem key={i}>{r}</CheckItem>
                      ))}
                    </ul>
                  </div>
                )}

                {tier.merch && (
                  <div className="mt-4 space-y-2 sm:text-base text-sm">
                    <p className="font-bold text-zinc-800 dark:text-zinc-200">Merch</p>
                    <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                      {tier.merch.map((m, i) => (
                        <CheckItem key={i}>{m}</CheckItem>
                      ))}
                    </ul>
                  </div>
                )}

                {tier.logistics && (
                  <div className="mt-4 space-y-2 sm:text-base text-sm">
                    <p className="font-bold text-zinc-800 dark:text-zinc-200">Logistics</p>
                    <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                      {tier.logistics.map((l, i) => (
                        <CheckItem key={i}>{l}</CheckItem>
                      ))}
                    </ul>
                  </div>
                )}

                {/* trust band */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-zinc-200 p-3 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Verified perks</div>
                  <div className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-amber-600 dark:text-amber-400" /> Secure</div>
                  <div className="flex items-center gap-1.5"><Award className="h-4 w-4 text-sky-600 dark:text-sky-400" /> AAFCO/FEDIAF</div>
                </div>

                {/* footnotes */}
                <div className="mt-3 space-y-1 text-sm text-zinc-500">
                  {tier.note && <p>Note: {tier.note}</p>}
                  {tier.limit && <p>Limit: {tier.limit}</p>}
                </div>

                {/* actions */}
                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => toggleSelect(tier.id)}
                    className={[
                      "flex-1 rounded-xl px-4 py-2 sm:text-base text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-500",
                      isSelected
                        ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                        : "bg-brandOrange text-white hover:bg-amber-700",
                    ].join(" ")}
                  >
                    {isSelected ? "Selected" : "Select Tier"}
                  </button>

                </div>

                {/* micro-credibility */}
                <p className="mt-3 text-sm text-zinc-500">
                  Trusted by <span className="font-medium text-zinc-700 dark:text-zinc-300">500+ pet parents</span>
                </p>
              </article>

            );
          })}
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-center">FAQ</h2>
          <div className="mt-4 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            <Faq q="How do I receive my perks?" a="We’ll email your confirmation and ship merch in batches. Digital recognition and app access are granted as soon as they’re live." />
            <Faq q="Can I dedicate my support to a shelter?" a="Yes — select a Shelter tier or mention the shelter name in checkout notes. We’ll coordinate delivery and share proof of donation." />
            <Faq q="Are contributions refundable?" a="Crowdfunding contributions are typically non-refundable. If there’s a fulfillment issue, contact info@growlrr.com for help." />
            <Faq q="When do app benefits go live?" a="Beta access for eligible tiers rolls out in phases; you’ll get an email invite with download/activation steps." />
          </div>
        </div>
      </section>

      {/* Sticky Drawer (Selected Summary) */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-[28px]">
            {selectedTiers.length === 0 ? (
              <p className="sm:text-base text-sm text-zinc-600 dark:text-zinc-300">
                No tier selected yet. Pick one or more to proceed.
              </p>
            ) : (
              <div className="sm:text-base text-sm">
                <span className="font-medium">Selected:</span>{" "}
                {selectedTiers.map((t) => t.label).join(", ")}{" "}
                <span className="text-zinc-500">
                  (Min total: ₹ {totalMin.toLocaleString("en-IN")})
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelected([])}
              className="rounded-xl border border-zinc-300 px-4 py-2 sm:text-base text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              disabled={selected.length === 0}
            >
              Clear
            </button>
            <button
              onClick={() =>
                alert(
                  selected.length === 0
                    ? "Please select at least one tier."
                    : `Proceeding to checkout with: ${selectedTiers
                      .map((t) => t.label)
                      .join(", ")}`
                )
              }
              className="rounded-xl bg-amber-600 px-4 py-2 sm:text-base text-sm font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ------------------------------ FAQ ------------------------------------- */


