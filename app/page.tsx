import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Statement from "@/components/Statement";
import HouseRules from "@/components/HouseRules";
import Phases from "@/components/Phases";
import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <About />
      <Statement />
      <HouseRules />
      <Divider />
      <Phases />
      <EmailSignup />
    </main>
  );
}
