"use client";

import { motion } from "framer-motion";
import { projects } from "~/data/projects";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ProjectCard } from "~/components/ui/ProjectCard";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

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
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                project={project}
                featured={index === 0}
                className="h-full"
              />
            </motion.div>
          ))}

          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
            >
              <ProjectCard
                project={project}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}