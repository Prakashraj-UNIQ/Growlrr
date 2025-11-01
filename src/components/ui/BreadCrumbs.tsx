"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTE_LABELS } from "@/config/route-labels";

type OverridesByHref = Record<string, string>;

export default function Breadcrumbs({
  overridesByHref = {},
}: {
  overridesByHref?: OverridesByHref;
}) {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items = segments.map((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const fromMap = overridesByHref[href] ?? ROUTE_LABELS[seg];
    const human =
      fromMap ??
      decodeURIComponent(seg)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return { href, label: human };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-base px-4 sm:px-10 md:px-25 py-3 bg-brandAccent"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:underline text-gray-500">
            Home
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            <span>/</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="font-medium">
                {it.label}
              </span>
            ) : (
              <Link href={it.href} className="hover:underline">
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
