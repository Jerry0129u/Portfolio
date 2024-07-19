import { AboutMe } from "@/components/AboutMe";
import { ContactSection } from "@/components/ContactSection";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Introduce } from "@/components/Introduce";
import { PhoneHeader } from "@/components/PhoneHeader";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="mx-auto w-[375px]">
      <PhoneHeader />
      <Introduce />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <ContactSection />
      <Footer />
    </main>
  );
}
