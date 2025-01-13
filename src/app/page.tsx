import Image from "next/image";
import Hero from "./components/hero";
import Work from "./components/work";
import CTA from "./components/cta";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Work/>
    <CTA/>
   </div>
  );
}
