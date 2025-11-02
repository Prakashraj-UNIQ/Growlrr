// app/components/AboutSection.tsx
"use client";

import Banner from "@/components/ui/Banner";
import CoreValue from "@/components/about/CoreValue";
import GrowlrrHistory from "@/components/about/GrowlrrHistory";
import MissionVision from "@/components/about/MissionVision";




export default function AboutSection() {

  return (
    < >
      <Banner title="About Growlrr" subtitle="Science-Driven Nutrition for Cats & Dogs" description=" We combine veterinary science, food engineering, and digital tech to
            deliver rotation-based, human-grade meals — designed for safety in every pouch and resilience through variety." />
      <MissionVision/>
      <GrowlrrHistory />
      <CoreValue />

    </>
  );
}
