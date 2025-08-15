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
    <div className="space-y-4">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>

      <div className="flex gap-6 overflow-x-auto px-5 py-2 md:flex-wrap md:justify-center md:overflow-x-visible [&::-webkit-scrollbar]:hidden">
        {logos.map((src, index) => (
          <div
            key={index}
            className="flex h-[80px] min-w-[100px] items-center justify-center md:h-[100px] md:min-w-[150px]"
          >
            <Image
              src={src}
              alt={`Logo ${index}`}
              width={100}
              height={60}
              className="md:h-[80px] md:w-[120px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
