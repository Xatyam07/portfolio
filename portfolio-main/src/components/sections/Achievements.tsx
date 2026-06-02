import AchievementCard from "../ui/AchievementCard";
import { achievements } from "../../data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24"
    >
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            Professional Experience
          </span>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Internships & Achievements
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            A collection of internship experiences, leadership programs,
            technical contributions, and professional achievements that
            strengthened my expertise in cybersecurity, software development,
            problem-solving, and real-world industry practices.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
            />
          ))}
        </div>

      </div>
    </section>
  );
}