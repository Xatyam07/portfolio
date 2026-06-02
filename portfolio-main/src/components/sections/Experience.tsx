"use client";

import { motion } from "framer-motion";
import { experiences } from "~/data/experience";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Experience"
          subtitle="Internships, leadership roles and professional growth"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          {/* Timeline Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-3 h-4 w-4 rounded-full border-2 border-red-500 bg-[#0a0a0a]" />

              <div className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                
                {/* Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>

                  <span className="text-sm font-mono text-zinc-500">
                    {exp.period}
                  </span>
                </div>

                {/* Company */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-medium text-red-400">
                    {exp.company}
                  </span>

                  <span className="text-zinc-600">•</span>

                  <span className="text-sm text-zinc-400">
                    {exp.location}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="mt-5 space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <span className="mt-1 text-red-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}