// app/components/GrowlrrProducts.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PawPrint, Plus } from "lucide-react";

type Product = {
  id: string;
  title: string;
  species: "Cat" | "Dog";
  pack: string;
  price: number; // INR
  img: string;
  badge?: string;
  rating?: number; // 0–5
};

const PRODUCTS: Product[] = [
  // 🐱 Cat Products
  { id: "chicken-hearts-pouch", title: "Chicken Hearts Pouch", species: "Cat", pack: "4 × 185 g", price: 499, img: "/images/Products/Product2.jpg", badge: "Best Seller", rating: 4.8 },
  { id: "mackerel-pouch", title: "Mackerel Pouch", species: "Cat", pack: "4 × 185 g", price: 549, img: "/images/Products/Product3.jpg", badge: "Omega Rich", rating: 4.7 },
  { id: "lamb-cuts-pouch", title: "Lamb Cuts Pouch", species: "Cat", pack: "4 × 185 g", price: 579, img: "/images/Products/Product4.jpg", badge: "High Iron", rating: 4.7 },
  { id: "sardine-pouch", title: "Sardine Pouch", species: "Cat", pack: "4 × 185 g", price: 549, img: "/images/Products/Product2.jpg", badge: "Immunity Boost", rating: 4.8 },
  { id: "turkey-pouch", title: "Turkey Pouch", species: "Cat", pack: "4 × 185 g", price: 549, img: "/images/Products/Product3.jpg", badge: "Sensitive Stomach", rating: 4.6 },
  { id: "beef-liver-pouch", title: "Beef Liver Pouch", species: "Cat", pack: "6 × 185 g", price: 899, img: "/images/Products/Product4.jpg", badge: "Organ Rich", rating: 4.7 },
  { id: "gizzard-pouch", title: "Gizzard Pouch", species: "Cat", pack: "4 × 185 g", price: 499, img: "/images/Products/Product2.jpg", badge: "Joint Support", rating: 4.6 },
  { id: "cat-treat-pack-crunch-bites", title: "Cat Treat Pack – Crunch Bites", species: "Cat", pack: "150 g", price: 299, img: "/images/Products/Product3.jpg", badge: "Single Protein", rating: 4.9 },

  // 🐶 Dog Products
  { id: "chicken-rice-meal", title: "Chicken & Rice Meal", species: "Dog", pack: "4 × 250 g", price: 549, img: "/images/Products/Product2.jpg", badge: "Digestive Care", rating: 4.8 },
  { id: "beef-organs-pouch", title: "Beef & Organs Pouch", species: "Dog", pack: "4 × 250 g", price: 599, img: "/images/Products/Product3.jpg", badge: "Muscle Builder", rating: 4.7 },
  { id: "mackerel-meal", title: "Mackerel Meal", species: "Dog", pack: "4 × 250 g", price: 599, img: "/images/Products/Product3.jpg", badge: "Omega Rich", rating: 4.7 },
  { id: "turkey-feast", title: "Turkey Feast", species: "Dog", pack: "4 × 250 g", price: 599, img: "/images/Products/Product4.jpg", badge: "Lean Protein", rating: 4.6 },
  { id: "lamb-liver-meal", title: "Lamb & Liver Meal", species: "Dog", pack: "4 × 250 g", price: 649, img: "/images/Products/Product3.jpg", badge: "Nutrient Dense", rating: 4.8 },
  { id: "sardine-meal", title: "Sardine Meal", species: "Dog", pack: "4 × 250 g", price: 599, img: "/images/Products/Product2.jpg", badge: "Heart Health", rating: 4.7 },
  { id: "dog-treat-pack-jerky-sticks", title: "Dog Treat Pack – Jerky Sticks", species: "Dog", pack: "200 g", price: 349, img: "/images/Products/Product1.jpg", badge: "Grain Free", rating: 4.9 }
];

type CartLine = { id: string; qty: number };

export default function GrowlrrProducts() {
  const [species, setSpecies] = useState<"All" | "Cat" | "Dog">("All");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [subSave, setSubSave] = useState(false); // subscription toggle

  const list = useMemo(
    () => PRODUCTS.filter(p => species === "All" ? true : p.species === species),
    [species]
  );

  const add = (id: string) =>
    setCart((c) => {
      const i = c.findIndex((x) => x.id === id);
      if (i >= 0) return c.map((x, k) => (k === i ? { ...x, qty: x.qty + 1 } : x));
      return [...c, { id, qty: 1 }];
    });

  const setQty = (id: string, qty: number) =>
    setCart((c) => c.map((x) => (x.id === id ? { ...x, qty: Math.max(0, qty) } : x)).filter(x => x.qty > 0));

  const clear = () => setCart([]);
  const lines = cart.map((l) => ({ ...l, product: PRODUCTS.find(p => p.id === l.id)! }));
  const subtotal = lines.reduce((s, l) => s + l.qty * l.product.price, 0);
  const discount = subSave ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  return (
    <section className="relative dark:from-zinc-950 dark:to-black py-10 sm:bg-brandAccent">
      <div className="mx-auto max-w-7xl px-1.5 sm:px-5">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="text-center">
            <h2 className="flex items-center justify-center sm:justify-start text-3xl font-black tracking-tight text-brandBlue dark:text-white mb-2"><PawPrint className="text-amber-800 w-8 h-8 mr-2" /> Growlrr Bistro</h2>
            <p className="text-base text-zinc-900 dark:text-zinc-300">
              Rotation-based, human-grade pouches. Vet-guided. AAFCO/FEDIAF aligned.
            </p>
          </div>
          {/* Filters + Cart open */}
          <div className="flex justify-center items-center gap-2">
            <div className="rounded-full border border-zinc-300 p-1 dark:border-zinc-700 bg-white dark:bg-zinc-900">
              {(["All", "Cat", "Dog"] as const).map((s) => {
                const active = s === species;
                return (
                  <button
                    key={s}
                    onClick={() => setSpecies(s)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      active
                        ? "bg-amber-600 text-white"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full bg-amber-600 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-700"
            >
              View Cart ({cart.reduce((s, l) => s + l.qty, 0)})
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-1 sm:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col rounded-2xl sm:border bg-gray-50 bg-white p-1.5 sm:p-5 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80"
            >
              {p.badge && (
                <span className="absolute hidden sm:block right-3 top-3 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                  {p.badge}
                </span>
              )}

              {/* image */}
              <div className="relative mx-auto h-40 w-full max-w-[220px]">
                <Image src={p.img} alt={p.title} fill className="object-contain" sizes="220px" />
                 <Plus onClick={() => {
                    add(p.id);
                    setOpen(true);
                  }} className="sm:hidden absolute right-0 bottom-0 bg-brandOrange rounded-full text-white" />
              </div>

              {/* info */}
              <div className="mt-3">
                <p className="text-xs text-zinc-500">
                  {p.species} • {p.pack}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xl font-bold text-amber-700">
                    ₹ {p.price.toLocaleString("en-IN")}
                  </p>
                  {p.rating && (
                    <span className="text-xs text-zinc-500">★ {p.rating.toFixed(1)}</span>
                  )}
                </div>
              </div>

              {/* actions */}
             
              <div className="mt-2 hidden  sm:grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    add(p.id);
                    setOpen(true);
                  }}
                  className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => add(p.id)}
                  className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  + Quick Add
                </button>
              </div>

              {/* <p className="mt-3 text-[11px] text-zinc-500">
                Retort-sterilized • No cold chain • Traceable batches
              </p> */}
            </article>
          ))}
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 dark:bg-zinc-900 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
          <h4 className="text-lg font-semibold">Your Cart</h4>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border px-2 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Close
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {lines.length === 0 ? (
            <p className="text-sm text-zinc-500">No items yet.</p>
          ) : (
            lines.map((l) => (
              <div
                key={l.id}
                className="mb-3 flex items-center justify-between rounded-xl border p-3 dark:border-zinc-800"
              >
                <div>
                  <p className="text-sm font-semibold">{l.product.title}</p>
                  <p className="text-xs text-zinc-500">
                    {l.product.pack} • ₹ {l.product.price.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty(l.id, l.qty - 1)}
                    className="h-8 w-8 rounded-lg border text-lg leading-none hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  >
                    –
                  </button>
                  <span className="w-6 text-center text-sm">{l.qty}</span>
                  <button
                    onClick={() => setQty(l.id, l.qty + 1)}
                    className="h-8 w-8 rounded-lg border text-lg leading-none hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Subscription + totals */}
        <div className="mt-auto border-t border-zinc-200 p-4 text-sm dark:border-zinc-800">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={subSave} onChange={(e) => setSubSave(e.target.checked)} />
            <span>
              Subscribe & save <b>10%</b> (monthly)
            </span>
          </label>

          <div className="mt-3 space-y-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {subtotal.toLocaleString("en-IN")}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Subscription Discount</span>
                <span>- ₹ {discount.toLocaleString("en-IN")}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹ {total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={clear}
              className="rounded-xl border px-4 py-2 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Clear
            </button>
            <button
              onClick={() => alert("Checkout coming soon")}
              className="rounded-xl bg-amber-600 px-4 py-2 font-semibold text-white hover:bg-amber-700"
            >
              Checkout
            </button>
          </div>

          <p className="mt-3 text-[11px] text-zinc-500">
            Secure UPI / Cards • COD limited • Ships in 2–4 days
          </p>
        </div>
      </div>
    </section>
  );
}
