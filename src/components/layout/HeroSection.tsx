import Image from "next/image";
import { PawPrint } from "lucide-react";

const HeroSection = () => {
  // bg-[#f0f0f0]
  return (
    <div className="relative  pt-18 sm:pt-0 sm:h-138 bg-brandAccent">

        {/* Left side */}
        <div className="absolute animate-ping left-70 bottom-10 "> 
          <PawPrint className="w-6 h-6 text-amber-800 opacity-80" />
        </div>
        <div className="absolute animate-ping left-10 bottom-34">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-75" />
        </div>
        <div className="absolute animate-ping left-8 bottom-88">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-70" />
        </div>
        <div className="absolute animate-ping left-24 bottom-125">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-70" />
        </div>

        {/* Center area */}
        <div className="absolute animate-ping left-1/3 bottom-25">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-70" />
        </div>
        <div className="absolute animate-ping left-1/2 bottom-85">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-80" />
        </div>
        <div className="absolute animate-ping left-2/3 bottom-100">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-75" />
        </div>

        {/* Right side */}
        <div className="absolute animate-ping right-8 bottom-10">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-80" />
        </div>
        <div className="absolute animate-ping right-12 bottom-50">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-75" />
        </div>
        <div className="absolute animate-ping right-56 bottom-88">
          <PawPrint className="w-6 h-6 text-amber-800 opacity-70" />
        </div>
  

      <div className="flex-col sm:flex-row flex justify-between items-center px-2 sm:px-12 md:px-25">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 ">
            Science-Driven Nutrition for Cats & Dogs
          </h3>
          <h3 className="text-base sm:text-lg tracking-wide">
            Wholesome, rotation-based meals designed by vets and crafted with
            human-grade ingredients. Smart nutrition. Real variety. Happier
            pets.
          </h3>
          <div className="mt-5">
            <button className="cursor-pointer px-5 py-2 rounded-full bg-brandBlue text-white mr-3 mb-3 sm:mb-0">
              Explore the Growlrr Diet
            </button>
            <button className="cursor-pointer px-5 py-2 bg-brandOrange text-white rounded-full">
              Our Recipes
            </button>
          </div>
        </div>
        <Image
          src="/images/dogCoverBg.png"
          alt="Growlrr nutrition food for pets"
          width={800}
          height={500}
          className="sm:h-135 sm:w-185  sm:translate-y-2.5"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
