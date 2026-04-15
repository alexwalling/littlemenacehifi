import { Metadata } from "next";
import Inspiration from "@/components/Inspiration";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Inspiration — Little Menace Hi-Fi",
  description:
    "The rooms, rituals, and references behind Little Menace Hi-Fi. Japanese listening culture, analog warmth, intentional design.",
};

export default function InspirationPage() {
  return (
    <main>
      <div className="pt-24" />
      <Inspiration />
      <EmailSignup />
    </main>
  );
}
