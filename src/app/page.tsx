import { Assistant } from "@/components/Assistant";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Assistant />
      <main>
        <Hero />
        <Journey />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
