import Image from "next/image";
import { Sparkles, Target } from "lucide-react";

export default function MissionVisionCenter() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/MVBg.webp"
        alt="Dog background"
        fill
        priority
        className="object-cover"
      />

      {/* Soft overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" /> */}

      {/* Center content */}
      <div className="relative z-10 text-center px-6 py-10 max-w-2xl">
        <div className="flex flex-col gap-8">
          {/* Mission */}
          <div>
            <Target  strokeWidth={1} className="mx-auto h-12 w-12 text-amber-600 dark:text-amber-400" />
            <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300">
              To make scientifically precise, biologically appropriate food
              accessible to every pet parent — turning feeding into a confident,
              data-guided act of care.
            </p>
          </div>

          {/* Vision */}
          <div>
            <Sparkles  strokeWidth={1} className="mx-auto h-12 w-12 text-amber-600 dark:text-amber-400" />
            <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white">
              Our Vision
            </h2>
            <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300">
              To redefine pet wellness through science, empathy, and technology
              — creating a world where every meal sustains both joy and
              longevity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
