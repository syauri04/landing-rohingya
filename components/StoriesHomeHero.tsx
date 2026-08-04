"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function StoriesHomeHero() {
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
            <h1 className="font-google-sans  font-bold  text-black text-4xl leading-[46px] md:text-5xl md:leading-[58px] lg:text-[90px] lg:leading-[113px]">
              Stories
              <br />
              on Home
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
            {/* Eye 1 */}
            <div className="animate-float-slow absolute top-[15%] md:top-[15%] left-20 h-30 w-30  md:left-18 md:h-[169px] md:w-[240px]">
              <Image
                src="/assets/orna-stories-eye.png"
                alt=""
                fill
                sizes="250px"
                className="object-contain"
              />
            </div>

            {/* Flower 1*/}
            <div className="animate-float-slow-delay absolute  -bottom-3 h-35 w-35 -left-15 md:-left-[50%] md:bottom-20 md:h-[174px] md:w-[274px]">
              <Image
                src="/assets/orna-stories-flower1.png"
                alt=""
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>

            {/* Eye 2 */}
            <div className="animate-float-slow absolute bottom-2 md:bottom-13 left-[35%]  md:left-[22%] z-10 h-20 w-20 md:h-[128px] md:w-40">
              <Image
                src="/assets/orna-stories-eye.png"
                alt=""
                fill
                sizes="160px"
                className="object-contain scale-x-[-1]"
              />
            </div>

            {/* Eye 3) */}
            <div className="animate-float-slow absolute -bottom-12 md:-bottom-10 left-[10%]   md:-left-[10%] z-10 h-20 w-20 md:h-[128px] md:w-40">
              <Image
                src="/assets/orna-stories-eye.png"
                alt=""
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>

            {/* flower 2 */}
            <div className="animate-float-slow-delay absolute right-0 md:-right-10  h-20 w-20 md:h-[114px] md:w-[138px]">
              <Image
                src="/assets/orna-stories-flower2.png"
                alt=""
                fill
                sizes="155px"
                className="object-contain"
              />
            </div>

            {/* book */}
            <div className="animate-float-slow-delay absolute -right-22 top-18 z-20  md:-right-28 h-[180px] w-[200px] md:top-28 md:h-[300px] md:w-[300px]">
              <Image
                src="/assets/orna-stories-book.png"
                alt="Dua perempuan menari"
                fill
                sizes="150px"
                className="object-contain object-bottom"
              />
            </div>

            {/* Cutout People*/}
            <div className="animate-float-slow-delay absolute -left-[30%] md:-left-[35%] bottom-10 md:-bottom-10  z-20 h-[170px] w-[190px]  md:bottom-35 md:h-[250px] md:w-[138px]">
              <Image
                src="/assets/orna-srories-people.png"
                alt="Siluet warga berjalan"
                fill
                sizes="413px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
