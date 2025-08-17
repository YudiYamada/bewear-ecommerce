"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PartnerBrands = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    setLogos([
      "/logo/nike.svg",
      "/logo/adidas.svg",
      "/logo/puma.svg",
      "/logo/newbalance.svg",
      "/logo/converse.svg",
      "/logo/polo.svg",
      "/logo/zara.svg",
    ]);
  }, []);

  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {logos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Logo ${index}`}
            sizes="100vw"
            height={0}
            width={0}
            className="h-auto w-full rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
