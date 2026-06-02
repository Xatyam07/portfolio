import Image from "next/image";

interface CertificateCardProps {
  certificate: {
    title: string;
    issuer: string;
    date: string;
    image: string;
  };
}

export function CertificateCard({
  certificate,
}: CertificateCardProps) {
  return (
    <div className="bento-card overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
      <Image
        src={certificate.image}
        alt={certificate.title}
        width={800}
        height={600}
        className="w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-white">
          {certificate.title}
        </h3>

        <p className="mt-2 text-red-400">
          {certificate.issuer}
        </p>

        <p className="text-sm text-zinc-400">
          {certificate.date}
        </p>
      </div>
    </div>
  );
}