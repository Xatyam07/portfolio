"use client";

import { useState } from "react";
import Image from "next/image";

interface AchievementCardProps {
  achievement: {
    company: string;
    role: string;
    date: string;
    banner: string;
    image: string;
    description: string;
  };
}

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]">

        {/* Banner */}
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={achievement.banner}
            alt={achievement.company}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-zinc-950" />

          <div className="absolute bottom-4 left-4">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 backdrop-blur-sm">
              Internship
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">

          <h3 className="text-3xl font-bold text-white">
            {achievement.role}
          </h3>

          <p className="mt-2 text-xl font-semibold text-red-400">
            {achievement.company}
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-400">
            {achievement.description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-zinc-500">
              {achievement.date}
            </span>

            <button
              onClick={() => setOpen(true)}
              className="rounded-xl bg-red-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600"
            >
              View Offer Letter
            </button>
          </div>
        </div>
      </div>

      {/* Offer Letter Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[95vh] max-w-5xl overflow-auto rounded-2xl bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/80 px-3 py-1 text-white"
            >
              ✕
            </button>

            <Image
              src={achievement.image}
              alt={achievement.company}
              width={1400}
              height={1800}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}