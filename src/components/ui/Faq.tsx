"use client"
import { useState } from "react";

export default function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      className="group"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left">
        <span className="font-medium">{q}</span>
        <span
          aria-hidden
          className={[
            "grid h-6 w-6 place-items-center rounded-md border text-sm transition",
            open
              ? "rotate-90 border-amber-400 text-amber-600  "
              : "border-zinc-300 text-zinc-500  ",
          ].join(" ")}
        >
          ▶
        </span>
      </summary>
      <div className="space-y-3 p-4 pt-0 text-sm text-zinc-700 ">
        <p>{a}</p>
      </div>
    </details>
  );
}