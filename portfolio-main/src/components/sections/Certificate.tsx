"use client";

import { certificates } from "~/data/certificates";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { CertificateCard } from "~/components/ui/CertificateCard";

export function Certificate() {
  return (
    <AnimatedSection id="certificate">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Certificates"
          subtitle="Professional Certifications & Achievements"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}