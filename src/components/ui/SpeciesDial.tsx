"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type DayInfo = { key: string; title: string; desc: string; img: string };

const DAYS: Record<"Cat" | "Dog", DayInfo[]> = {
  Cat: [
    { key: "mon", title: "Chicken Hearts", desc: "Taurine-rich; supports cardiac health.", img: "/images/cartBg.png" },
    { key: "tue", title: "Mackerel", desc: "Omega-3s for skin/coat; anti-inflammatory.", img: "/images/cartBg2.png" },
    { key: "wed", title: "Lamb Cuts", desc: "Iron & B-vitamins; novel protein.", img: "/images/cartBg.png" },
    { key: "thu", title: "Sardines", desc: "EPA/DHA; dense micronutrients.", img: "/images/cartBg2.png" },
    { key: "fri", title: "Turkey", desc: "Lean, gentle protein; easy digestion.", img: "/images/cartBg.png" },
    { key: "sat", title: "Beef Liver", desc: "Vitamin-A, copper; organ-forward.", img: "/images/cartBg2.png" },
    { key: "sun", title: "Gizzard", desc: "Natural glucosamine; joint support.", img: "/images/cartBg.png" },
  ],
  Dog: [
    { key: "mon", title: "Chicken & Rice", desc: "Lean protein; easy digestion.", img: "/images/cartBg.png" },
    { key: "tue", title: "Mackerel", desc: "Omega-rich fish for shiny coat.", img: "/images/cartBg2.png" },
    { key: "wed", title: "Beef Mix", desc: "High iron; builds muscle strength.", img: "/images/cartBg.png" },
    { key: "thu", title: "Sardines", desc: "EPA/DHA for heart & joint health.", img: "/images/cartBg2.png" },
    { key: "fri", title: "Turkey", desc: "Low-fat meat; supports gut balance.", img: "/images/cartBg.png" },
    { key: "sat", title: "Lamb & Organs", desc: "Rich amino acids; novel protein.", img: "/images/cartBg2.png" },
    { key: "sun", title: "Gizzard", desc: "Natural glucosamine; joint care.", img: "/images/cartBg.png" },
  ],
};

export default function WeeklyRotationCircle({
  autoMs = 5000,
  size = 600,
  ringR = 220,
  nodeR = 26,
}: {
  autoMs?: number;
  size?: number;
  ringR?: number;
  nodeR?: number;
}) {
  const [species, setSpecies] = useState<"Cat" | "Dog">("Cat");
  const [idx, setIdx] = useState(0);
  const [pop, setPop] = useState(false);

  const days = DAYS[species];
  const targetAngle = useMemo(() => -idx * (360 / days.length), [idx, days.length]);

  // auto-rotate
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % days.length), autoMs);
    return () => clearInterval(id);
  }, [days.length, autoMs]);

  // pop animation
  useEffect(() => {
    const t1 = setTimeout(() => setPop(true), 0);
    const t2 = setTimeout(() => setPop(false), 280);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [idx]);

  // reset day on tab switch
  useEffect(() => setIdx(0), [species]);

  const cx = size / 2,
    cy = size / 2;
  const TAU = Math.PI * 2;

  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      {/* Left side */}
      <div>
        {/* Tabs */}
        <div className="flex items-center gap-2 rounded border border-zinc-300 p-1 mb-4 w-fit ">
          {(["Cat", "Dog"] as const).map((s) => {
            const active = s === species;
            return (
              <button
                key={s}
                onClick={() => setSpecies(s)}
                className={[
                  "rounded px-3 py-1.5 text-sm font-medium transition",
                  active ? "bg-amber-600 text-white" : "text-zinc-700 hover:bg-zinc-100 ",
                ].join(" ")}
              >
                {s} Plan
              </button>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold mb-4 text-black">Why Rotational Diet?</h2>
        <p className="mt-1 text-base text-zinc-600 ">
          Pets don’t need every nutrient maxed in one meal. Our system balances across the cycle, aligning to AAFCO / FEDIAF while staying biologically appropriate.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-2 space-x-8">
          {days.map((d, i) => (
            <div
              key={d.key}
              className={`flex sm:flex-col items-center gap-2 border border-gray-300 sm:m-2 rounded-lg  p-3 transition ${
                i === idx ? "bg-amber-50" : "hover:bg-amber-50"
              }`}
              onClick={() => setIdx(i)}
            >
              <div className={`font-bold text-sm ${i === idx ? "text-amber-600" : "text-zinc-700"}`}>
                {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][i]}
              </div>
              <p className="text-zinc-800 font-medium">{d.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right wheel */}
      <div className="relative mx-auto">
        <svg viewBox={`0 0 ${size} ${size}`} className="h-[350px] w-[350px] sm:w-[550px] sm:h-[550px] lg:w-[650px] lg:h-[650px]"> 
          <circle
            cx={cx}
            cy={cy}
            r={ringR}
            className="fill-none stroke-brandBlue"
            strokeDasharray="2 2"
            strokeWidth="2"
          />
          <g
            style={{
              transform: `rotate(${targetAngle}deg)`,
              transformOrigin: `${cx}px ${cy}px`,
              transition: "transform 1.2s cubic-bezier(.25,1,.5,1)",
            }}
          >
            {days.map((d, i) => {
              const a = (i * TAU) / days.length;
              const x = cx + ringR * Math.cos(a);
              const y = cy + ringR * Math.sin(a);
              const active = i === idx;
              return (
                <g key={d.key} onClick={() => setIdx(i)} className="cursor-pointer">
                  <circle
                    cx={x}
                    cy={y}
                    r={nodeR}
                    className={[
                      active ? "fill-amber-600" : "fill-amber-50 ",
                      "stroke-amber-600 ",
                    ].join(" ")}
                    strokeWidth={active ? 3 : 1.5}
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    className={[
                      "select-none text-[14px] font-semibold",
                      active ? "fill-white" : "fill-amber-700",
                    ].join(" ")}
                  >
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Center */}
          <foreignObject x={cx - 160} y={cy - 160} width={320} height={320}>
            <div
              className={[
                "mx-auto grid h-[320px] w-[320px] place-items-center rounded-full",
                "border border-amber-600 bg-amber-50 shadow-lg",
                "transition-transform duration-300",
                pop ? "scale-95" : "scale-100",
              ].join(" ")}
            >
              <div className="flex w-56 flex-col items-center text-center">
                <div className="relative mb-3 h-32 w-32">
                  <Image
                    src={days[idx].img}
                    alt={days[idx].title}
                    fill
                    className="object-contain"
                    sizes="124px"
                  />
                </div>

                <p className="text-[12px] uppercase tracking-wide text-amber-700 ">
                  {species} Plan – Day’s Nutrition
                </p>
                <h3 className="mt-1 text-lg font-bold text-black">{days[idx].title}</h3>
                <p className="mt-1 text-sm text-zinc-700 ">{days[idx].desc}</p>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </section>
  );
}
