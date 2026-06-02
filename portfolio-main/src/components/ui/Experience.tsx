import { experiences } from "../../data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Experience
          </span>

          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Professional Experience
          </h2>

          <p className="mx-auto max-w-2xl text-zinc-400">
            My internships, leadership positions and technical journey.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-red-500 via-red-400 to-transparent md:left-8" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-500 bg-black shadow-[0_0_20px_rgba(239,68,68,0.5)] md:left-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)]">
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-lg">
                        <span className="font-semibold text-red-400">
                          {exp.company}
                        </span>

                        <span className="text-zinc-600">•</span>

                        <span className="text-zinc-400">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="text-sm tracking-wider text-zinc-500 md:text-right">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="mb-6 space-y-3">
                    {exp.achievements.map(
                      (achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-zinc-300"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                          <span>{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}