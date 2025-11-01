// app/components/PhilosophySection.tsx
"use client";
import Banner from "@/components/ui/Banner";
// import Rough from '@/components/ui/Rough'
import WeeklyRotationCircle from "@/components/ui/SpeciesDial";

export default function PhilosophySection() {
  return (
    <>
      <Banner
        title="Rotational Diet Philosophy"
        subtitle="Nutritional “LEGO” built one pouch at a time"
        description="Each single-species, organ-forward pouch is a nutrient block. Rotate across the week to
              complete the picture — balanced over time, not forced into one static recipe."
      />
      {/* <Rough/> */}
          <section className="relative  overflow-hidden">
            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-black dark:via-zinc-900 dark:to-black" /> */}
            <div className=" px-4 sm:px-12 lg:px-25 py-10">
              {/* Header */}
             <WeeklyRotationCircle />
            </div>
          </section>
    </>
  );
}
