import Hero from "./components/Hero/hero";
import CTA from "./components/Cta/cta";
import MyWork from "./components/Mywork/mywork";
import Work from "./components/Work/work";

export default function Home() {
  return (
   <div>
    <Hero/>
    <MyWork/>
    <Work/>
    <CTA/>
   </div>
  );
}
