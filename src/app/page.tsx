import AboutUs from "@/components/Home/AboutUs";
import ProductCombo from "@/components/Home/ProductCombo";
import HeroSection from "@/components/layout/HeroSection";
import Products from "@/components/layout/Products";
import HomeValue from "@/components/Home/HomeValue"

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <AboutUs />
      <Products/>
      <ProductCombo/>
      <HomeValue/>
    </div>
  );
}
