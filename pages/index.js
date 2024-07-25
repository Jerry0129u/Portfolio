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
    <main className="max-w-[1280px] px-4 xl:px-8 mx-auto">
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
