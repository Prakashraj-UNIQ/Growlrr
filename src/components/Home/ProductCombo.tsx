import Image from "next/image";

const ProductCombo = () => {
  return (
    <div className="space-y-10 bg-white sm:space-y-16 lg:space-y-20">
      <div className="p-4">
        {/* --- Dog Combo --- */}
      <div className="flex flex-col sm:flex-row items-center bg-amber-50 rounded-2xl overflow-hidden shadow-sm  my-4 sm:m-8 lg:m-25">
        {/* Image Section (on top in mobile) */}
        <div className="w-full sm:w-1/2 bg-[#dfdad9] flex justify-center items-center p-6 order-1 sm:order-none">
          <Image
            alt="Growlrr Dog diet plan combo"
            src="/images/Products/Product1.jpg"
            height={250}
            width={250}
            className="rounded-xl object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-4 sm:p-10 lg:p-14  sm:text-left order-2 sm:order-none">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-amber-900 font-bold mb-4">
            Dog Core 7-Day Rotation Combo
          </h1>
          <p className="max-w-md text-base sm:text-lg text-zinc-700 font-medium mb-6 mx-auto sm:mx-0">
            Slow-simmered in natural broth for balanced, single-protein
            nutrition. Designed by nutritionists, loved by pets.
          </p>
          <button className="border px-8 py-2 rounded-full bg-brandOrange text-white lg:bg-transparent lg:text-black hover:bg-brandOrange hover:text-white transition font-semibold self-start sm:self-start">
            Buy Now
          </button>
        </div>
      </div>

      {/* --- Cat Combo --- */}
      
      <div className="flex flex-col sm:flex-row-reverse items-center bg-amber-50 rounded-2xl overflow-hidden shadow-sm  my-4 sm:my-0 sm:m-8 lg:m-25">
        {/* Image Section (on top in mobile) */}
        <div className="w-full sm:w-1/2 bg-[#e7e5e3] flex justify-center items-center p-4 order-1 sm:order-none">
          <Image
            alt="Growlrr Cat diet plan combo"
            src="/images/Products/Product2.jpg"
            height={250}
            width={250}
            className="rounded-xl object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-6 sm:p-10 lg:p-14 sm:text-left order-2 sm:order-none">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-amber-900 font-bold mb-4">
            Cat Core 7-Day Rotation Combo
          </h1>
          <p className="max-w-md text-base sm:text-lg text-zinc-700 font-medium mb-6 mx-auto sm:mx-0">
            Crafted with slow-simmered natural broth, focused single-protein
            recipes designed by experts and adored by cats.
          </p>
          <button className="border px-8 py-2 bg-brandOrange text-white lg:bg-transparent lg:text-black rounded-full hover:bg-brandOrange hover:text-white transition font-semibold self-start sm:self-start">
            Buy Now
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCombo;
