"use client";
import { TruckElectric, ShoppingBag, Leaf, BadgeCheck } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Value = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const VALUES_ENHANCED: Value[] = [
  {
    title: "Fastest Delivery",
    desc:
      "Pan-India dispatch within 24–48 hours. Fresh pouches shipped directly from our kitchen to your doorstep.",
    icon: TruckElectric, // you can import { Truck } from "lucide-react"
  },
  {
    title: "Store Pickup",
    desc:
      "Prefer a quick grab? Visit our partner vet stores and pickup Growlrr meals anytime, fresh and ready.",
    icon: ShoppingBag, // import { ShoppingBag } from "lucide-react"
  },
  {
    title: "Organic Nutrition",
    desc:
      "No synthetic colors, preservatives, or fillers — just real, slow-cooked, organic ingredients your pet deserves.",
    icon: Leaf, // import { Leaf } from "lucide-react"
  },
  {
    title: "Our Brand Promise",
    desc:
      "Vet-guided, parent-approved, and built around complete transparency — because your pet’s trust is everything.",
    icon: BadgeCheck, // import { BadgeCheck } from "lucide-react"
  },
];


function classNames(...xs: (string | false | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

export default function ValuesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).clientWidth
        : 1;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-brandAccent  py-8 sm:px-25 sm:py-10 ">
      <div
        ref={scrollRef}
        className={classNames(
          "mt-5 flex mx-14 sm:mx-0 sm:gap-20 overflow-x-auto pb-2",
          "snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]",
          "[&::-webkit-scrollbar]:hidden"
        )}
        aria-label="Growlrr values list"
      >
        {VALUES_ENHANCED.map((v, i) => {
          const Icon = v.icon;
          return (
            <article
              key={v.title}
              className={classNames(
                "snap-start",
                "flex w-64 shrink-0 flex-col items-center  p-5 transition"
              )}
              role="group"
              aria-labelledby={`value-title-${i}`}
            >
              <div className="grid h-38 w-38 place-items-center rounded-full  bg-amber-50">
                <Icon strokeWidth={1} className="h-18 w-18 text-amber-700" />
              </div>

              <h3
                id={`value-title-${i}`}
                className="mt-3 text-lg font-semibold text-zinc-900 "
              >
                {v.title}
              </h3>

              <p className="mt-1 text-center leading-relaxed text-zinc-700 ">
                {v.desc}
              </p>
            </article>
          );
        })}
      </div>

      {/* Dots for mobile scroll */}
      <div className="flex justify-center mt-4 sm:hidden">
        {VALUES_ENHANCED.map((_, i) => (
          <span
            key={i}
            className={classNames(
              "mx-1 h-2 w-2 rounded-full transition-all duration-300",
              i === activeIndex ? "bg-brandOrange w-4" : "bg-amber-50"
            )}
          ></span>
        ))}
      </div>
    </section>
  );
}
