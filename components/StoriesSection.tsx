"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";

const storyCards = [
  {
    label: "Written",
    label2: "Stories",
    icon: "/assets/icon-written.png",
    area: "written",
  },
  {
    label: "Visual",
    label2: "Stories",
    icon: "/assets/icon-visual.png",
    area: "visual",
  },
  {
    label: "Audiovisual",
    label2: "Stories",
    icon: "/assets/icon-audio.png",
    area: "audiovisual",
  },
] as const;

function StoryCard({
  label,
  label2,
  icon,
  delayMs,
}: {
  label: string;
  label2: string;
  icon: string;
  delayMs: number;
}) {
  return (
    <div
      className="flex flex-col items-center justify-end gap-4 rounded-[20px] bg-[#CFDFAA]   text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-[199px] w-[169px]"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="relative h-[94px] w-[94px]">
        <Image
          src={icon}
          alt=""
          fill
          sizes="140px"
          className="object-contain"
        />
      </div>
      <div className="w-full rounded-[20px] bg-[#E1F3B9] px-2 py-2">
        <span className="font-google-sans text-xl  leading-[25px] text-black">
          {label}
          <br />
          {label2}
        </span>
      </div>
    </div>
  );
}

export default function StoriesSection() {
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>();
  const { ref: cardsRef, isInView: cardsInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="stories"
      className="relative  bg-[#A8B189] pb-28 pt-20 md:pb-36 md:pt-28"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Teks + CTA */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ease-out ${
              textInView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h2 className="font-google-sans text-3xl font-bold leading-[38px] text-black sm:text-4xl sm:leading-[46px] md:text-5xl md:leading-[58px] lg:text-[60px] lg:leading-[75px]">
              Stories
              <br />
              on Home
            </h2>
            <p className="mt-6 max-w-lg font-google-sans text-lg leading-[25px] text-black md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ullamcorper sem orci, sed pharetra elit mollis amet. Donec
              dignissim arcu leo, eget sagittis arcu feugiat eu. Praesent
              laoreet, urna vel laoreet suscipit, sem lorem luctus augue, id
              scelerisque arcu leo elit quis sem.
            </p>
            <Link
              href="/stories-on-home"
              type="button"
              className="mt-8 inline-block rounded-[13px] bg-[#410098] px-7 py-3 font-google-sans text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#4A2380] active:translate-y-0"
            >
              Selengkapnya
            </Link>
          </div>

          {/* Kartu ikon */}
          <div
            ref={cardsRef}
            className={`flex items-start justify-start gap-4 transition-all duration-700 ease-out sm:gap-6 lg:justify-end ${
              cardsInView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <StoryCard
              label="Written"
              label2="Stories"
              icon={storyCards[0].icon}
              delayMs={0}
            />
            <div className="flex flex-col gap-4 sm:gap-6">
              <StoryCard
                label="Visual"
                label2="Stories"
                icon={storyCards[1].icon}
                delayMs={80}
              />
              <StoryCard
                label="Audiovisual"
                label2="Stories"
                icon={storyCards[2].icon}
                delayMs={160}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lingkaran yang terpotong di bawah, transisi ke section berikutnya */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 hidden translate-y-1/2 items-center justify-end gap-6 px-5 sm:flex sm:px-8 md:px-10 lg:gap-10 lg:px-14 xl:px-16">
        <CircleDot
          src="/assets/bullet-orange.png"
          size={165}
          anim="animate-float-slow"
        />
        <CircleDot
          src="/assets/bullet-purple.png"
          size={127}
          anim="animate-float-slow-delay"
        />
        <CircleDot
          src="/assets/bullet-yellow.png"
          size={100}
          anim="animate-float-slow"
        />
        <CircleDot
          src="/assets/bullet-green.png"
          size={197}
          anim="animate-float-slow-delay"
        />
      </div>
    </section>
  );
}

function CircleDot({
  src,
  size,
  anim,
}: {
  src: string;
  size: number;
  anim: string;
}) {
  return (
    <div
      className={`${anim} relative shrink-0`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </div>
  );
}
