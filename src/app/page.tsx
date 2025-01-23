import Hero from "./components/Hero/hero";
import CTA from "./components/Cta/cta";
import MyWork from "./components/Mywork/mywork";

export default function Home() {
  return (
   <div>
    <Hero/>
    <MyWork/>
    {/* <CTA/> */}
   </div>
  );
}
