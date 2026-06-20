"use client";

import { motion } from "framer-motion";
import { projects } from "~/data/projects";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ProjectCard } from "~/components/ui/ProjectCard";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Projects() {
  return (
    <AnimatedSection id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="AI, Cybersecurity, Full-Stack Development and Machine Learning Projects"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-1 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
            >
              <ProjectCard
                project={project}
                featured={project.featured}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}