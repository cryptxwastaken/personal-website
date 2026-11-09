"use client";

import Image from "next/image";
import { useState } from "react";
import { hero } from "@/content/hero";
import { profile } from "@/content/profile";

export function Hero() {
  const [src, setSrc] = useState<string>(hero.portrait.src);

  return (
    <section
      id="hero"
      className="border border-hairline bg-cardbg p-6 sm:p-10 rounded-[2px] relative overflow-hidden shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-emerald font-medium">
              {hero.sectionLabel}
            </span>
          </div>

          <div className="inline-flex items-center space-x-2 border border-hairline bg-stonebg px-3 py-1 text-xs font-mono rounded-[2px]">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-muted">{profile.availability.statusLabel}</span>
            <span className="text-ink font-medium">
              {profile.availability.window}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal leading-[1.18] tracking-tight">
            {hero.headline}
          </h1>

          <p className="text-body text-base leading-relaxed max-w-2xl font-sans">
            {hero.body}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs text-muted">
            {hero.pills.map((pill) => (
              <span
                key={pill}
                className="border border-hairline bg-stonebg px-2.5 py-1 text-ink"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 flex justify-start md:justify-end">
          <div className="w-full max-w-[240px] border border-hairline bg-stonebg p-3 space-y-3 rounded-[2px]">
            <div className="aspect-[4/5] bg-hairline border border-hairline overflow-hidden relative group">
              <Image
                src={src}
                alt={hero.portrait.alt}
                fill
                sizes="240px"
                className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                onError={() => setSrc(hero.portrait.fallbackSrc)}
                unoptimized
              />
            </div>
            <div className="font-mono text-[11px] text-muted flex justify-between items-center px-0.5">
              <span>{hero.portrait.captionLeft}</span>
              <span className="text-emerald font-medium">
                {hero.portrait.captionRight}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
