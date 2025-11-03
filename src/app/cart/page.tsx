"use client";

import Image from "next/image";
import Link from "next/link";
import { routes } from "@/config/routes";

export default function CartPage() {
  return (
    <div className="min-h-[70vh] flex bg-white flex-col items-center justify-center px-4 pb-8 text-center">
      {/* 🛒 Cart Illustration */}
      <div className="relative w-80 h-80 mb-4">
        {/* Replace /images/empty-cart.svg with your image path */}
        <Image
          src="/images/cartBg2.png"
          alt="Empty Cart"
          fill
          className="object-contain opacity-90"
          priority
        />
      </div>

      {/* 📝 Text Content */}
      <h2 className="text-2xl text-brandBlue font-semibold italic mb-2">Your Cart is Empty</h2>
      <p className="text-slate-600  mb-6 max-w-md">
        Looks like you haven’t added anything to your cart yet.
        Explore our shop and find something you love!
      </p>

      {/* 🛍️ CTA Button */}
      <Link
        href={routes.products}
        className="inline-block rounded-lg bg-brandOrange  text-white px-6 py-3 font-medium transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
