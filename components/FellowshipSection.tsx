"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function FellowshipSection() {
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>();
  const { ref: visualRef, isInView: visualInView } =
    useInView<HTMLDivElement>();

  return (
    <section
      id="fellowship"
      className="relative bg-[#E1F2B9] pb-16 pt-12 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-32 lg:pt-20"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Teks */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ease-out ${
              textInView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h1 className="font-google-sans text-3xl font-bold leading-[38px] text-black sm:text-4xl sm:leading-[46px] md:text-5xl md:leading-[58px] lg:text-[60px] lg:leading-[75px]">
              Reimagining and
              <br />
              Co-Designing Hope
            </h1>
            <p className="mt-4 max-w-lg font-google-sans text-base leading-[22px] text-black sm:mt-5 sm:text-lg sm:leading-[24px] md:mt-6 md:text-lg md:leading-[25px] lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ullamcorper sem orci, sed pharetra elit mollis amet. Donec
              dignissim arcu leo, eget sagittis arcu feugiat eu. Praesent
              laoreet, urna vel laoreet suscipit, sem lorem luctus augue, id
              scelerisque arcu leo elit quis sem. Pellentesque aliquet porta
              ornare.
            </p>
          </div>

          {/* Komposisi visual */}
          <div
            ref={visualRef}
            className={`relative mx-auto h-[220px] w-full max-w-[260px] transition-all duration-700 ease-out sm:h-[280px] sm:max-w-[320px] md:h-[360px] md:max-w-[400px] lg:h-[420px] lg:max-w-[420px] ${
              visualInView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {/* Lingkaran hijau besar (kanan atas) */}
            <div className="animate-float-slow absolute top-0 md:-top-[45%] left-20 md:right-5 h-24 w-24   md:right-16 md:h-32 md:w-32 lg:right-26 lg:h-[250px] lg:w-[250px]">
              <Image
                src="/assets/bullet-green.png"
                alt=""
                fill
                sizes="250px"
                className="object-contain"
              />
            </div>

            {/* Lingkaran kuning (kiri bawah) */}
            <div className="animate-float-slow-delay absolute -left-[15%] -bottom-3 sm:bottom-6 h-18 w-18 sm:bottom-8 sm:h-16 sm:w-16 md:bottom-10 md:h-24 md:w-24 lg:bottom-12 lg:h-28 lg:w-28">
              <Image
                src="/assets/bullet-yellow.png"
                alt=""
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>

            {/* Lingkaran merah (bawah) */}
            <div className="animate-float-slow absolute -bottom-10 sm:bottom-0 left-[10%] z-10 h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
              <Image
                src="/assets/bullet-red.png"
                alt=""
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>

            {/* Lingkaran ungu (kanan) */}
            <div className="animate-float-slow-delay absolute right-0 top-[10%] md:top-[7%] h-12 w-12 opacity-90 h-20 w-20 lg:h-[140px] lg:w-[140px]">
              <Image
                src="/assets/bullet-purple.png"
                alt=""
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>

            {/* Lingkaran oranye (pojok kanan atas) */}
            <div className="animate-float-slow-delay absolute -right-10 md:-right-[40%] -top-[5%] md:-top-[15%] h-14 w-14 lg:h-[155px] lg:w-[155px]">
              <Image
                src="/assets/bullet-orange.png"
                alt=""
                fill
                sizes="155px"
                className="object-contain"
              />
            </div>

            {/* Sketsa rumah */}
            <div className="animate-breathe absolute inset-x-3 top-5  sm:inset-x-6 sm:top-6 md:inset-x-8 md:top-5 lg:top-6">
              <Image
                src="/assets/home.png"
                alt="Sketsa rumah"
                width={444}
                height={398}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Cutout dua perempuan menari */}
            <div className="animate-float-slow-delay absolute right-0 -top-3 z-20 h-22 w-22 sm:-top-5 sm:h-20 sm:w-16 md:-top-7 md:h-28 md:w-24 lg:-top-8 lg:h-40 lg:w-36">
              <Image
                src="/assets/ornament-2-people.png"
                alt="Dua perempuan menari"
                fill
                sizes="150px"
                className="object-contain object-bottom"
              />
            </div>

            {/* Siluet orang-orang (bawah kiri, melebar) */}
            <div className="animate-float-slow-delay absolute -left-[20%] sm:-left-[22%] -bottom-10 sm:bottom-2 z-20 h-[89px] w-[190px] sm:bottom-3 sm:h-[74px] sm:w-[210px] md:bottom-4 md:h-[108px] md:w-[306px] lg:bottom-5 lg:h-[146px] lg:w-[413px]">
              <Image
                src="/assets/ornament-people-black.png"
                alt="Siluet warga berjalan"
                fill
                sizes="413px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Barisan lingkaran yang menyebrang ke section berikutnya */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 hidden translate-y-1/2 items-center  gap-4 px-5 sm:flex sm:gap-6 sm:px-8 md:gap-8 md:px-10 lg:gap-10 lg:px-14 xl:px-16">
        <CircleDot
          src="/assets/bullet-orange.png"
          anim="animate-float-slow"
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-[165px] lg:w-[165px]"
        />
        <CircleDot
          src="/assets/bullet-purple.png"
          anim="animate-float-slow-delay"
          className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-[127px] lg:w-[127px]"
        />
        <CircleDot
          src="/assets/bullet-yellow.png"
          anim="animate-float-slow"
          className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-[100px] lg:w-[100px]"
        />
        <CircleDot
          src="/assets/bullet-green.png"
          anim="animate-float-slow-delay"
          className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-[197px] lg:w-[197px]"
        />
      </div>
    </section>
  );
}

function CircleDot({
  src,
  anim,
  className,
}: {
  src: string;
  anim: string;
  className: string;
}) {
  return (
    <div className={`${anim} ${className} relative shrink-0`}>
      <Image src={src} alt="" fill sizes="200px" className="object-contain" />
    </div>
  );
}
