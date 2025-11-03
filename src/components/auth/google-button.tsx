"use client";

// import { signIn } from "next-auth/react"; // Temporarily comment out due to module not found error

export default function GoogleButton({ callbackUrl = "/" }: { callbackUrl?: string }) {
  return (
    <button
      type="button"
      onClick={() => console.log("Google sign-in clicked with callbackUrl:", callbackUrl)} // Placeholder for signIn
      className="w-full h-11 rounded-lg border border-slate-300  bg-white  hover:bg-slate-50  transition flex items-center justify-center gap-3"
    >
      <GoogleIcon className="w-5 h-5" />
      <span className="text-sm font-medium">Continue with Google</span>
    </button>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  // Minimal Google "G" mark (inline SVG)
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.4 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6.6 29 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 19.5-9 19.5-20c0-1.2-.1-2.3-.3-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.2 18.9 13 24 13c3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6.6 29 4 24 4 16.5 4 10 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5 0 9.6-1.9 13-5l-6-4.9c-2 1.4-4.6 2.2-7 2.2-5.1 0-9.4-3.6-10.9-8.5l-6.6 5.1C10 39.7 16.5 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.3-3.8 5.7-7.3 6.6l6 4.9C37.2 37.1 40 31.9 40 26c0-1.9-.2-3.7-.4-5.5z"/>
    </svg>
  );
}
