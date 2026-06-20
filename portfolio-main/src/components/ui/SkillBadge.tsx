/* eslint-disable @next/next/no-img-element */
import { cn } from "~/lib/cn";
import type { Skill } from "~/types/data";

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 h-10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.12)] backdrop-blur-sm select-none shrink-0",
        className
      )}
    >
      <img
        src={skill.icon}
        alt=""
        width={18}
        height={18}
        className="shrink-0 transition-transform duration-300"
        loading="lazy"
      />
      <span className="text-sm font-medium text-zinc-200 transition-colors duration-300">{skill.name}</span>
    </div>
  );
}
