import { CursorFollower } from "~/components/effects/CursorFollower";
import { Hero } from "~/components/sections/Hero";
import { About } from "~/components/sections/About";
import { Projects } from "~/components/sections/Projects";
import { TechStack } from "~/components/sections/TechStack";
import { Experience } from "~/components/sections/Experience";
import Achievements from "~/components/sections/Achievements";
import { Certificate } from "~/components/sections/Certificate";
import { ResumeCTA } from "~/components/sections/ResumeCTA";
import { Contact } from "~/components/sections/Contact";

import { getProfileImages } from "~/lib/profile";

export default function Home() {
  const profileImages = getProfileImages();

  return (
    <>
      <CursorFollower />

      <Hero />

      <About profileImages={profileImages} />

      <Projects />

      <TechStack />

      <Experience />

      <Achievements />

      <Certificate />

      <ResumeCTA />

      <Contact />
    </>
  );
}