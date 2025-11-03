"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/config/routes"; // you already have this
import InputWithIcon from "@/components/ui/Input";
import GoogleButton from "@/components/auth/google-button";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  // Stub – you can wire this to Credentials/your API later
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: call your backend / credentials auth
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative px-4 sm:px-10 md:px-20 bg-gray-50 ">
      <div className="pt-8 max-w-xl mx-auto py-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-brandBlue tracking-tight mb-2">
            Welcome back
          </h1>
          <p className="text-sm text-slate-600">
            Sign in to continue
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <InputWithIcon
            type="email"
            icon="mail"
            placeholder="Enter your email"
          />
          <InputWithIcon
            type="password"
            icon="user"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full h-11 rounded bg-brandOrange text-white font-medium cursor-pointer transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200 " />
          <span className="text-xs text-slate-500">OR</span>
          <div className="h-px flex-1 bg-slate-200 " />
        </div>

        <GoogleButton callbackUrl={routes.home} />

        <p className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-brandOrange hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
