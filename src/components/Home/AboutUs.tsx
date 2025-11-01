import Image from "next/image";
import { HeartPulse } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-amber-50 py-4 px-2 lg:px-25">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 items-center sm:bg-transparent rounded-full">
        {/* Right Image */}
        <div className=" flex z-1 justify-end lg:justify-center">
          <Image
            src="/images/aboutSectionBg.png"
            alt="About Growlrr Foods"
            width={500}
            height={400}
            className=" object-cover relative sm:bottom-30"
          />
        </div>
        {/* Left Content */}
        <div className="sm:absolute sm:space-y-6 lg:bg-brandAccent text-center sm:text-start rounded-full  sm:pl-100 md:pl-120 sm:pr-12 py-10 sm:py-20">
          <h2 className="text-4xl font-black text-brandBlue flex items-center justify-center sm:justify-start ">
            <HeartPulse className="w-10 h-10 animate-pulse text-brandRed" />
            About Us
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed p-5 sm:p-0 text-justify">
            <strong>Growlrr Foods</strong> is a next-generation pet nutrition
            company built at the intersection of veterinary science, food
            engineering, and digital technology. We design rotation-based,
            human-grade meals that deliver safety in every pouch and resilience
            through variety.
          </p>
          <Link href={"about-us"} className="cursor-pointer px-5 py-2 rounded-full bg-brandOrange text-white sm:mr-3">
            Know More
          </Link >
        </div>
      </div>
    </section>
  );
}
