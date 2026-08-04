import FellowshipSection from "@/components/FellowshipSection";
import StoriesSection from "@/components/StoriesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <FellowshipSection />
      <StoriesSection />
      <TestimonialSection />
    </main>
  );
}
