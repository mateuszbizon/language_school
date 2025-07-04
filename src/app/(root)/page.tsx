import ImportantNumbers from "@/components/common/ImportantNumbers";
import Hero from "@/components/sections/Hero";
import Offer from "@/components/sections/Offer";
import WhyUs from "@/components/sections/WhyUs";
import WhyUs2 from "@/components/sections/WhyUs2";

export default function Home() {
  return (
    <>
        <Hero />
        <ImportantNumbers />
        <WhyUs />
        <WhyUs2 />
        <Offer />
    </>
  );
}
